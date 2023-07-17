/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useGetBooksQuery } from "../redux/api/apiSlice";
import BookCard from "../shared/BookCard";
import SkeletonCard from "../shared/SkeletonCard";

const AllBooks = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const books = data?.data?.data;
  return (
    <section className="mt-10 mb-16">
      <div className="container px-6 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold ">
            All <span className="text-teal-600">Books</span>
          </h1>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Our books that make a difference in people's lives
          </p>
        </div>
        <div className="flex justify-end">
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                placeholder="Search..."
                required={true}
              />
            </div>
            <button
              className="p-2.5 ml-2 text-sm font-medium text-white bg-teal-600 rounded-lg border border-teal-600 hover:bg-teal-6000 focus:ring-4 focus:outline-none focus:ring-teal-600 "
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {isLoading &&
            [1, 2, 3, 4, 5, 6, 7, 8].map((n) => <SkeletonCard key={n} />)}
          {books?.map((book: any) => (
            <BookCard book={book} key={book?._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
