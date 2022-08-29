const db = require("../db");

module.exports = {
  create: (user_id, post_title, post_content, callback) => {
    const createPost = `INSERT INTO Post (user_id, post_title, post_content) VALUES ("${user_id}","${post_title}" , "${post_content}")`;

    db.query(createPost, (error, result) => {
      callback(error, result);
    });
  },
  read: (callback) => {
    const readPost = `SELECT * FROM Post`;

    db.query(readPost, (error, result) => {
      callback(error, result);
    });
  },
  update: (user_id, post_title, post_content, callback) => {
    const updatePost = `UPDATE Post SET user_id="${user_id}", post_title="${post_title}", post_content="${post_content}" WHERE user_id="${user_id}" AND post_title="${post_title}"`;

    db.query(updatePost, (error, result) => {
      callback(error, result);
    });
  },
  del: (user_id, post_title, callback) => {
    const deletePost = `DELETE FROM Post WHERE user_id="${user_id}" AND post_title="${post_title}"`;

    db.query(deletePost, (error, result) => {
      callback(error, result);
    });
  },
};
