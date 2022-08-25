import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Article = () => {
  const navigate = useNavigate();

  const [articles, setArticles] = useState([]);

  const user = sessionStorage.getItem("user_id");

  const editPost = (user_id, post_title, post_content, e) => {
    if (user === user_id) {
      navigate("/Edit", {
        state: {
          user_id: user_id,
          post_title: post_title,
          post_content: post_content,
        },
      });
    } else {
      alert("작성자만 수정할 수 있습니다.");
    }
  };

  const deletePost = (user_id, post_title, e) => {
    if (user === user_id) {
      axios.delete("http://localhost:8080/article", {
        data: {
          user_id: user_id,
          post_title: post_title,
        },
        withCredentials: true,
      });
      window.location.href = "/Article";
    } else {
      alert("작성자만 삭제할 수 있습니다.");
    }
  };

  const postArticle = () => {
    window.location.href = "/Post";
  };

  const getArticles = async () => {
    const article = await axios.get("http://localhost:8080/article");
    setArticles(article.data);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <Container>
      <Button onClick={postArticle}>Post Article</Button>
      <Row>
        {articles.map((article) => {
          return (
            <Col sm="4" key={article.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{article.post_title}</Card.Title>
                  <Card.Text>{article.post_content}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{article.user_id}</ListGroup.Item>
                  <ListGroup.Item>{article.created_at}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => {
                      editPost(
                        article.user_id,
                        article.post_title,
                        article.post_content,
                        e
                      );
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    type="submit"
                    onClick={(e) => {
                      deletePost(article.user_id, article.post_title, e);
                    }}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Article;
