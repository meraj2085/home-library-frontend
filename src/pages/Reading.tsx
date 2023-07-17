/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Spinner from "../components/Spinner";
import {
  useGetReadingQuery,
  useUpdateReadMutation,
} from "../redux/api/apiSlice";
import { useAppSelector } from "../redux/hook";
import book_img from "../assets/book.jpg";
import moment from "moment";
import { toast } from "react-hot-toast";

const Reading = () => {
  const { user } = useAppSelector((state) => state.user);
  const { data, isLoading } = useGetReadingQuery(user?.email);
  const [updateRead] = useUpdateReadMutation();
  const reading = data?.data;
  if (isLoading) {
    return <Spinner />;
  }
  const handleRead = (id) => {
    updateRead(id);
    toast.success("Congratulations!");
  };

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold ">
                Your <span className="text-teal-600">Readings</span>
              </h1>

              <p className="max-w-lg mx-auto mt-4 text-gray-500">
                Books that will make a difference in your life
              </p>
            </div>

            <div className="mt-8">
              <ul className="space-y-4">
                {reading.map((book) => (
                  <li className="flex items-center gap-4">
                    <img
                      src={book_img}
                      alt=""
                      className="h-16 w-16 rounded object-cover"
                    />

                    <div>
                      <h3 className="text-sm text-gray-900">{book?.title}</h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>Author: {book?.author}</div>

                        <div>
                          {moment(book?.publication_date).format("DD-MMM-YYYY")}
                        </div>
                      </dl>
                    </div>

                    {!book?.completed && (
                      <div className="flex flex-1 items-center justify-end gap-2">
                        <button
                          onClick={() => handleRead(book?._id)}
                          className="text-gray-600 bg-blue-100 px-1 py-1 rounded-lg transition hover:text-red-600"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reading;
