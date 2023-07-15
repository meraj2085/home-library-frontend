import BookCard from "../shared/BookCard";

const Recent = () => {
  return (
    <section className="bg-white dark:bg-gray-900 my-10">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            Recent Books
          </h1>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Our top 10 recent books that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {[1, 2, 3, 4, 5, 6].map(() => (
            <BookCard />
          ))}
        </div>
      </div>
    </section>
    // <div className="grid grid-cols-3">
    //   {[1, 2, 3, 4, 5, 6].map((book) => (
    //     <BookCard/>
    //   ))}
    // </div>
  );
};

export default Recent;
