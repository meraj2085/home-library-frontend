/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Spinner from "../components/Spinner";
import { useGetWishlistQuery } from "../redux/api/apiSlice";
import { useAppSelector } from "../redux/hook";
import book_img from "../assets/book.jpg";
import moment from "moment";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const WishList = () => {
  const { user } = useAppSelector((state) => state.user);
  const { data, isLoading } = useGetWishlistQuery(user?.email);
  const wishlists = data?.data
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold ">
                Your <span className="text-teal-600">Wishlist</span>
              </h1>

              <p className="max-w-lg mx-auto mt-4 text-gray-500">
                Books that will make a difference in your life
              </p>
            </div>

            <div className="mt-8">
              <ul className="space-y-4">
                {wishlists.map((book: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; author: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; publication_date: moment.MomentInput; }) => (
                  <li className="flex items-center gap-4">
                    <img
                      src={book_img}
                      alt=""
                      className="h-16 w-16 rounded object-cover"
                    />

                    <div>
                      <h3 className="text-sm text-gray-900">
                        {book?.title}
                      </h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          Author: {book?.author}
                        </div>

                        <div>
                        {moment(book?.publication_date).format("DD-MMM-YYYY")}
                        </div>
                      </dl>
                    </div>

                    <div className="flex flex-1 items-center justify-end gap-2">
                      <button className="text-gray-600 bg-blue-100 px-2 py-2 rounded-lg transition hover:text-red-600">
                        <span className="sr-only">Remove item</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
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

export default WishList;
