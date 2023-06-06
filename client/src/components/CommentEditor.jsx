import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";

const CommentEditor = ({postId}) => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  const handleChange = (value) => {
    setComment(value);
  };

  const handleSubmit = () => {
    // Perform submission logic here
    patchComment(comment);
    // Reset comment state
    setComment('');
  };

  const patchComment = async (comment) => {
    const response = await fetch(`http://localhost:3001/posts/${postId}/comment`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: comment }),
    });
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  return (
    <div>
      <ReactQuill
        value={comment}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CommentEditor;
