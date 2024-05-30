import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then((response) => {
        console.log("Book created", response.data);
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert(
          "An error occured. Please Check the console for more information"
        );
        console.error("Error creating book:", error);
      });
  };
  return (
    <div className=" p-4">
      <BackButton />
      <h1 className=" text-3xl my-4 ">Add a book</h1>
      {loading ? <Spinner /> : " "}
      <div className=" flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className=" my-4">
          <label className=" text-xl mr-4 text-gray-500 ">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full rounded-md"
          />
        </div>
        <div className=" my-4">
          <label className=" text-xl mr-4 text-gray-500 ">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full rounded-md"
          />
        </div>
        <div className=" my-4">
          <label className=" text-xl mr-4 text-gray-500 ">Published Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full rounded-md"
          />
        </div>
        <button className=" bg-sky-200 m-8 p-2 w-40 flex justify-center mx-auto rounded-[22px] text-xl" type="submit" onClick={handleSaveBook}>Save</button>
        
      </div>
    </div>
  );
};

export default CreateBook;
