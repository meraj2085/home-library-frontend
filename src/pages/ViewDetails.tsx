/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useLocation, useNavigate } from "react-router-dom";
import book_img from "../assets/book.jpg";
import moment from "moment";
import { useAppSelector } from "../redux/hook";
import { useAddCommentMutation } from "../redux/api/apiSlice";
import { toast } from "react-hot-toast";


const ViewDetails = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const [addComment, { isLoading, data }] = useAddCommentMutation();
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

          <dl className="mt-6 flex gap-4 sm:gap-6">
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">Published</dt>
              <dd className="text-xs text-gray-500">
                {moment(book?.publication_date).format("DD-MMM-YYYY")}
              </dd>
            </div>

            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">
                Reading time
              </dt>
              <dd className="text-xs text-gray-500">3 minute</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="mx-20">
        <hr className="" />
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
