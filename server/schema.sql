CREATE TABLE User (
  user_id varchar(100),
  user_password varchar(100),
  user_address varchar(200),
  user_privateKey varchar(200),
  user_eth varchar(100),
  user_token varchar(100),
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(user_id)
);

CREATE TABLE Post (
  id INT AUTO_INCREMENT,
  user_id varchar(100),
  post_title varchar(200),
  post_content varchar(100),
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);

CREATE TABLE NFT (
  token_id INT,
  token_img varchar(200),
  token_name varchar(100),
  user_id varchar(100),
  contract_address varchar(100),
  token_description varchar(500),
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(token_id)
);

ALTER TABLE Post ADD FOREIGN KEY (user_id) REFERENCES User (user_id);
ALTER TABLE NFT ADD FOREIGN KEY (user_id) REFERENCES User (user_id);
