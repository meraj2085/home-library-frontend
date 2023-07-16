import BookCard from "../shared/BookCard";
import SkeletonCard from "../shared/SkeletonCard";

const AllBooks = () => {
  return (
    <section className="bg-white mt-10 mb-16">
      <div className="container px-6 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold ">
            All <span className="text-teal-600">Books</span>
          </h1>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Our books that make a difference in people's lives
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
            <BookCard />
            // <SkeletonCard />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
