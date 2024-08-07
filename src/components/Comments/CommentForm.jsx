import React, { useState } from "react";

function CommentForm({formSubmitHandler}) {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    formSubmitHandler(comment);
    setComment("")
  };

  const [comment,setComment] = useState("")

  return (
    <form
      onSubmit={submitHandler}
    >
      <div className="flex flex-col items-end border border-primary rounded-lg p-4 mt-10">
        <textarea  rows="5" className="w-full focus:outline-none dark:bg-transparent" value={comment} onChange={e=>setComment(e.target.value)} placeholder="Leave Your Comment Here...."></textarea>
        <button type="submit" className="bg-primary text-white px-6 py-3 rounded-md font-semibold">
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
