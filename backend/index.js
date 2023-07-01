import express from 'express';
import cors from 'cors';
import pool from './database.js';
import http from 'http';

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

////// ROUTES ////////

//// TASKS

// create task
app.post('/tasks', async (req, res) => {
    const { project_id, title, description, deadline, status } = req.body;
    const newTask = await pool.query(
        'INSERT INTO tasks (project_id, title, description, deadline, status) VALUES($1, $2, $3, $4, $5) RETURNING *',
        [project_id, title, description, deadline, status]
    );
    res.json(newTask.rows[0]);
});

// update task
app.put('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const { project_id, title, description, deadline, status } = req.body;
    const updatedTask = await pool.query(
        'UPDATE tasks SET project_id = $1, title = $2, description = $3, deadline = $4, status = $5 WHERE id = $6 RETURNING *',
        [project_id, title, description, deadline, status, id]
    );
    res.json(updatedTask.rows[0]);
});

// delete task
app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
    res.json({ message: "Task was deleted successfully" });
});

// get task
app.get('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const task = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
    res.json(task.rows[0]);
});

//// PROJECTS

// create project
app.post('/projects', async (req, res) => {
    const { title, description, status } = req.body;
    const newProject = await pool.query(
        'INSERT INTO projects (title, description, status) VALUES($1, $2, $3) RETURNING *',
        [title, description, status]
    );
    res.json(newProject.rows[0]);
});

// update project
app.put('/projects/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const updatedProject = await pool.query(
        'UPDATE projects SET title = $1, description = $2, status = $3 WHERE id = $4 RETURNING *',
        [title, description, status, id]
    );
    res.json(updatedProject.rows[0]);
});

// delete project
app.delete('/projects/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM projects WHERE id = $1', [id]);
    res.json({ message: "Project was deleted successfully" });
});

// get project
app.get('/projects/:id', async (req, res) => {
    const { id } = req.params;
    const project = await pool.query('SELECT * FROM projects WHERE id = $1', [id]);
    res.json(project.rows[0]);
});

const server = http.createServer(app);
const HOST = '::'; // IPv6 equivalent of 0.0.0.0
const PORT = process.env.PORT || 3001;

server.listen(PORT, HOST, () => {
    console.log(`Server running on ${HOST}:${PORT}`);
});