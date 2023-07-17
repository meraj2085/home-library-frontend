/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useEditBookMutation } from "../redux/api/apiSlice";
import Spinner from "../components/Spinner";

const EditBook = () => {
  const location = useLocation();
  const book = location.state;
  const navigate = useNavigate();
  const [editBook, { isLoading }] = useEditBookMutation();

  if (isLoading) {
    return <Spinner />;
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    const genre = e.target.genre.value;
    const publication_date = e.target.publication_date.value | book?.publication_date;

    const options = {
      id: book?._id,
      data: { title, author, genre, publication_date },
    };
    editBook(options);
    toast.success("Book Updated Successfully");
    navigate("/allBooks");
  };

  return (
    <section className="bg-white mt-10 mb-16">
      <div className="container px-6 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold ">
            Edit <span className="text-teal-600">Books</span>
          </h1>
        </div>

        <div className="flex justify-center mt-10">
          <div className="w-full max-w-3xl p-8 space-y-3 rounded-xl border text-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1 text-sm">
                <label className="block text-gray-800">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  defaultValue={book?.title}
                  placeholder="Book Title"
                  className="w-full px-4 py-3 border rounded-md "
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="space-y-1 text-sm">
                  <label className="block text-gray-800">Author</label>
                  <input
                    type="text"
                    name="author"
                    id="author"
                    placeholder="Author"
                    defaultValue={book?.author}
                    className="w-full px-4 py-3 border rounded-md "
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block text-gray-800">Genre</label>
                  <input
                    type="text"
                    name="genre"
                    id="genre"
                    placeholder="Book Genre"
                    defaultValue={book?.genre}
                    className="w-full px-4 py-3 border rounded-md "
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="space-y-1 text-sm">
                  <label className="block text-gray-800">
                    Publication Date
                  </label>
                  <input
                    type="date"
                    name="publication_date"
                    id="publication_date"
                    placeholder="Publication Date"
                    defaultValue={book?.publication_date}
                    className="w-full px-4 py-3 border rounded-md "
                  />
                </div>
              </div>
              <button
                type="submit"
                className="block w-full p-3 text-center rounded-sm text-white bg-teal-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditBook;
