# AgileTitan - Project Management API

AgileTitan is a project management API built with Express and PostgreSQL. This document provides a summary of the routes available in the API and a brief overview of the database structure.

## Database

The `agiletitan` database contains two tables: `projects` and `tasks`.

The `projects` table has the following fields:
- `id`: a unique identifier for the project
- `date_created`: the date and time the project was created
- `title`: the title of the project
- `description`: a detailed description of the project
- `status`: the current status of the project (possible values are 'To-do', 'In progress', 'Closed', 'Backlog')

The `tasks` table has the following fields:
- `id`: a unique identifier for the task
- `date_created`: the date and time the task was created
- `project_id`: the ID of the project the task belongs to
- `title`: the title of the task
- `description`: a detailed description of the task
- `deadline`: the date and time the task is due
- `status`: the current status of the task (possible values are 'To-do', 'In progress', 'Closed', 'Backlog')

## API Routes

### Tasks

- `POST /tasks`: Creates a new task. The request body should include `project_id`, `title`, `description`, `deadline`, and `status`.

- `PUT /tasks/:id`: Updates an existing task. The request body can include `project_id`, `title`, `description`, `deadline`, and `status`.

- `DELETE /tasks/:id`: Deletes a task. 

- `GET /tasks/:id`: Retrieves a task. 

### Projects

- `POST /projects`: Creates a new project. The request body should include `title`, `description`, and `status`.

- `PUT /projects/:id`: Updates an existing project. The request body can include `title`, `description`, and `status`.

- `DELETE /projects/:id`: Deletes a project.

- `GET /projects/:id`: Retrieves a project. 