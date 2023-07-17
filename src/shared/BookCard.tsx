/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import moment from "moment";
import book_img from "../assets/book.jpg";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book }: any) => {
  const navigate = useNavigate();
  const handleBookClick = () => {
    navigate("/details", { state: book });
  };

  return (
    <div
      onClick={handleBookClick}
      className="w-full overflow-hidden bg-white rounded-lg shadow-lg min-h-96"
    >
      <img
        className="object-cover object-center w-full h-56"
        src={book_img}
        alt="avatar"
      />

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 ">{book?.title}</h1>

        <p className="py-2 text-gray-700 font-semibold">
          Author: <span className="font-normal">{book?.author}</span>
        </p>
        <p className="py-2 text-gray-700 font-semibold">
          Genre: <span className="font-normal">{book?.genre}</span>
        </p>
        <p className="py-2 text-gray-700 font-semibold">
          Publication Date:{" "}
          <span className="font-normal">
            {moment(book?.publication_date).format("DD-MMM-YYYY")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default BookCard;
