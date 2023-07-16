import { Link } from "react-router-dom";

const EditBook = () => {
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
            <form action="" className="space-y-6">
              <div className="space-y-1 text-sm">
                <label className="block text-gray-800">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
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
                    name="date"
                    id="date"
                    placeholder="Publication Date"
                    className="w-full px-4 py-3 border rounded-md "
                  />
                </div>
              </div>
              <button type="submit" className="block w-full p-3 text-center rounded-sm text-white bg-teal-600">
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
