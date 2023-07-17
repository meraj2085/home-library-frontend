/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useLocation, useNavigate } from "react-router-dom";
import book_img from "../assets/book.jpg";
import moment from "moment";
import { useAppSelector } from "../redux/hook";
import {
  useAddCommentMutation,
  useAddReadingMutation,
  useAddWishlistMutation,
  useDeleteBookMutation,
  useEditBookMutation,
} from "../redux/api/apiSlice";
import { toast } from "react-hot-toast";

const ViewDetails = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const [addComment] = useAddCommentMutation();
  const [addWishlist] = useAddWishlistMutation();
  const [addReading] = useAddReadingMutation();
  const location = useLocation();
  const book = location.state;
  const comments = book?.comments;

  const handleAddComment = (e: any) => {
    e.preventDefault();
    const comment = e.target.message.value;
    const options = {
      id: book?._id,
      data: {
        comment: comment,
      },
    };
    addComment(options);
    toast.success("Comment added successfully");
  };

  const handleReading = () => {
    if (!user) {
      return navigate("/login");
    }
    addReading({
      title: book?.title,
      author: book?.author,
      user_email: user?.email,
    });
    toast.success("Book added to reading");
  };

  const handleWishlist = () => {
    if (!user) {
      return navigate("/login");
    }
    addWishlist({
      title: book?.title,
      author: book?.author,
      user_email: user?.email,
    });
    toast.success("Book added to wishlist");
  };

  const [deleteBook] = useDeleteBookMutation();

  const handleEdit = () => {
    navigate("/editBook", { state: book });
  }

  return (
    <div>
      <div className="flex justify-center pt-40 pb-20">
        <div className="rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8 w-[500px] shadow-md">
          <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                {book?.title}
              </h3>

              <p className="mt-1 text-xs font-medium text-gray-600">
                By {book?.author}
              </p>
            </div>

            <div className="hidden sm:block sm:shrink-0">
              <img
                alt="Paul Clapton"
                src={book_img}
                className="h-16 w-16 rounded-lg object-cover shadow-sm"
              />
            </div>
          </div>

          <div className="mt-4">
            <p className="max-w-[40ch] text-sm text-gray-500">
              <span className="font-semibold">Genre:</span> {book?.genre}
            </p>
          </div>

          <dl className="mt-6 flex gap-4 sm:gap-6 justify-between">
            <div className="flex">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Published</dt>
                <dd className="text-xs text-gray-500">
                  {moment(book?.publication_date).format("DD-MMM-YYYY")}
                </dd>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleWishlist}
                className="flex justify-end bg-teal-100 px-1 py-1 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 16.25 2 13.12 2 9.5 2 7.02 3.53 5 5.5 5c1.13 0 2.18.55 2.83 1.46A4.74 4.74 0 0 0 12 7.21a4.74 4.74 0 0 0 4.67-1.75A2.99 2.99 0 0 1 18.5 5c1.97 0 3.5 2.02 3.5 4.5 0 3.62-3.4 6.75-8.55 10.54L12 21.35z" />
                </svg>
              </button>
              <button
                onClick={handleReading}
                className="flex justify-end bg-blue-50 px-1 py-1 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M6 2h12a2 2 0 0 1 2 2v16l-8-4-8 4V4a2 2 0 0 1 2-2z" />
                </svg>
              </button>
            </div>
          </dl>
          <div>
            <div className="flex justify-center mt-6 gap-2">
              <button onClick={handleEdit} className="group relative inline-block text-sm font-medium text-teal-600 focus:outline-none active:text-teal-600">
                <span className="absolute inset-0 border border-current rounded-md"></span>
                <span className="block border border-current bg-white px-6 py-1 rounded-md transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                  Edit
                </span>
              </button>
              <button className="group relative inline-block text-sm font-medium text-teal-600 focus:outline-none active:text-teal-600">
                <span className="absolute inset-0 border border-current rounded-md"></span>
                <span className="block border border-current bg-white px-6 py-1 rounded-md transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                  Delete
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-20">
        <hr />
        <div className="my-10 flex justify-between">
          <div className="mt-3">
            {comments.map((comment: any) => (
              <article className="rounded-xl shadow-sm border border-gray-200 p-4 my-3 min-w-[500px]">
                <div className="flex items-center gap-4">
                  <img
                    alt="Developer"
                    src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-md font-medium text-gray-800">
                      Claire Mac
                    </h3>
                    <div className="flow-root">
                      <p className="py-2 leading-none text-md font-medium text-gray-400">
                        {comment}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <form onSubmit={handleAddComment}>
            <label className="block mb-2 text-lg font-medium text-gray-900 ">
              Your Comment
            </label>
            <textarea
              id="message"
              name="message"
              className="block p-2.5 w-[400px] h-[150px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-600 focus:border-teal-600"
              placeholder="Write your thoughts here..."
            ></textarea>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="group relative inline-block text-sm font-medium text-teal-600 focus:outline-none active:text-teal-600"
              >
                <span className="absolute inset-0 border border-current rounded-md"></span>
                <span className="block border border-current bg-white px-12 py-3 rounded-md transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                  Submit
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
