DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
    id int AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(250) NOT NULL,
    done int(1) DEFAULT 0
);

