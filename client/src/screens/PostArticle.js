import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const PostArticle = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  const handleInputTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const handleInputContent = (e) => {
    setInputContent(e.target.value);
  };

  const onClickPostArticle = () => {
    const user_id = sessionStorage.getItem("user_id");
    axios.post(
      "http://localhost:8080/article",
      {
        user_id: user_id,
        post_title: inputTitle,
        post_content: inputContent,
      },
      { "content-type": "application/json", withCredentials: true }
    );
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Enter Title"
            onChange={handleInputTitle}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="Enter Content"
            onChange={handleInputContent}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={onClickPostArticle}>
          Post
        </Button>
      </Form>
    </div>
  );
};

export default PostArticle;
