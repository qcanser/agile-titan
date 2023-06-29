CREATE DATABASE agiletitan;

\c agiletitan;

CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(20) CHECK (status IN ('To-do', 'In progress', 'Closed', 'Backlog')) DEFAULT 'Backlog'
);

CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    project_id INT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    deadline TIMESTAMP WITH TIME ZONE,
    status VARCHAR(20) CHECK (status IN ('To-do', 'In progress', 'Closed', 'Backlog')) DEFAULT 'Backlog',
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);
