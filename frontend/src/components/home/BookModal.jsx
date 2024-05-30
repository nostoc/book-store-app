/* eslint-disable react/prop-types */

import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className=" fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className=" w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative "
        onClick={(event) => event.stopPropagation()}
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit  px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>

        <div className=" flex justify-start items-center gap-x-2 ">
          <PiBookOpenTextLight className="text-red-500 text-2xl " />
          <h2 className=" my-1">{book.title}</h2>
        </div>
        <div className=" flex justify-start items-center gap-x-2 ">
          <BiUserCircle className="text-red-500 text-2xl " />
          <h2 className=" my-1">{book.author}</h2>
        </div>
        <p className=" mt-4 ">Any thing You want to show</p>
        <p className=" my-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit reprehenderit, quasi odit nostrum delectus minus maxime dolore ea nulla eos soluta adipisci, commodi doloribus vel culpa tenetur ullam aut qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab neque similique voluptatibus, veniam sint quis accusamus consectetur quia, perspiciatis quas quod ducimus minima architecto harum facilis debitis ratione quaerat iure?</p>
      </div>
    </div>
  );
};

export default BookModal;
