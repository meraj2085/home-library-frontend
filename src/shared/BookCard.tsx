const BookCard = () => {
  return (
    <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        className="object-cover object-center w-full h-56"
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="avatar"
      />

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          Patterson johnson
        </h1>

        <p className="py-2 text-gray-700 dark:text-gray-400">
          Full Stack maker & UI / UX Designer , love hip hop music Author of
          Building UI.
        </p>
      </div>
    </div>
  );
};

export default BookCard;
