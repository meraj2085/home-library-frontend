import BookCard from "../shared/BookCard";
import SkeletonCard from "../shared/SkeletonCard";

const Recent = () => {
  return (
    <section className="bg-white  my-10">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold ">
            Recent <span className="text-teal-600">Books</span>
          </h1>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Our top 10 recent books that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {[1, 2, 3, 4, 5, 6].map(() => (
            <BookCard />
            // <SkeletonCard />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recent;
