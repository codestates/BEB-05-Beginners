import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const EditArticle = () => {
  const location = useLocation();

  const user_id = location.state.user_id;
  const post_title = location.state.post_title;
  const post_content = location.state.post_content;

  const [inputContent, setInputContent] = useState(post_content);
  const handleInputContent = (e) => {
    setInputContent(e.target.value);
  };

  const onClickEditArticle = () => {
    axios.put(
      "http://localhost:8080/article",
      {
        user_id: user_id,
        post_title: post_title,
        post_content: inputContent,
      },
      { "content-type": "application/json", withCredentials: true }
    );
    window.location.href = "/article";
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control size="lg" type="text" value={post_title} disabled />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            value={inputContent}
            onChange={handleInputContent}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={onClickEditArticle}>
          Edit
        </Button>
      </Form>
    </div>
  );
};

export default EditArticle;
