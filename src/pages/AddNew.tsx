/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useNavigate } from "react-router-dom";
import { useAddNewBookMutation } from "../redux/api/apiSlice";
import Spinner from "../components/Spinner";
import { useAppSelector } from "../redux/hook";
import { toast } from "react-hot-toast";

const AddNew = () => {
  const { user } = useAppSelector((state) => state.user);
  const [addNewBook, { isLoading, data }] = useAddNewBookMutation();
  const navigate = useNavigate();

  if (isLoading) {
    return <Spinner />;
  }

  const handleAddBook = (e: any) => {
    e.preventDefault();
    if(!user) {
      return;
    }
    const title = e.target.title.value;
    const author = e.target.author.value;
    const genre = e.target.genre.value;
    const publication_date = e.target.publication_date.value;
    const publisher_email = user.email;
    addNewBook({ title, author, genre, publication_date, publisher_email });
    toast.success("Book Added Successfully");
    navigate("/allBooks");
  };

  return (
    <section className="bg-white mt-10 mb-16">
      <div className="container px-6 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold ">
            Add <span className="text-teal-600">Books</span>
          </h1>
        </div>

        <div className="flex justify-center mt-10">
          <div className="w-full max-w-3xl p-8 space-y-3 rounded-xl border text-gray-800">
            <form onSubmit={handleAddBook} className="space-y-6">
              <div className="space-y-1 text-sm">
                <label className="block text-gray-800">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Book Title"
                  required={true}
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
                    required={true}
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
                    required={true}
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
                    required={true}
                    className="w-full px-4 py-3 border rounded-md "
                  />
                </div>
              </div>
              <button
                type="submit"
                className="block w-full p-3 text-center rounded-sm text-white bg-teal-600"
              >
                Add Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddNew;
