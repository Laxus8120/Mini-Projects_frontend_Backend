# Task Management System

## Project Description

This project is a `Task Management System API` that allows users to manage their tasks and subtasks efficiently. It provides functionalities such as creating tasks, creating subtasks, retrieving user tasks with filters, updating task and subtask statuses, and soft deletion of tasks and subtasks. Additionally, the system includes cron jobs for automatically updating task priorities and initiating voice calls using Twilio for overdue tasks based on user priorities.

## Models

### **Subtask Model**
* id: Unique identifier (integer)
* task_id: Reference to the task table (integer)
* status: 0 (incomplete), 1 (complete)
* created_at: Date/string
* updated_at: Date/string
* deleted_at: Date/string

### **User Model**
* id: Unique identifier (integer)
* phone_number: Phone number (numeric)
* priority: 0, 1, 2 (for Twilio calling priority)
* Priority for Task Model
>0: Due date is today<br>
1: Due date is between tomorrow and the day after tomorrow
2: 3-4 days<br>
3: 5+ days


### **Status for Task Model**

>"TODO": No subtask is finished <br>
"IN_PROGRESS": At least 1 subtask is finished <br>
"DONE": Every subtask is completed

# Features

> REST API Convention: Follows REST API conventions for resourceful endpoints.

>MVC Architecture: Adheres to the Model-View-Controller architecture for clean separation of concerns.

>Authentication Middleware: Employs middleware for authentication using the Passport strategy with JWT in the header bearer.

>Password Encryption: Bcrypts passwords before saving them into the database.

>Unique User Identifier: Utilizes UUID for generating unique identifiers for users.

>ODM with Mongoose: Uses Mongoose, an Object Document Mapper (ODM) for MongoDB.


## OPERATION AND END-POINTS
>NOTE- change the PORT field

* Create Task

`localhost:${PORT}/api/createTask`   

    Input: Title, description, due_date<br>
    Endpoint: POST 
<hr>

* Create Subtask

`localhost:${PORT}/api/createSubtask`

    Input: task_id<br>
    http req: POST 

<hr>

* Get All User Tasks

`localhost:${PORT}/api/getAllUserTasks` 

    Filters: Priority, due date, pagination
    Input: user<br>
    Endpoint: POST 
<hr>

* Create Task

`localhost:${PORT}/api/createTask
`   
    Input: Title, description, due_date<br>
    Endpoint: POST 
<hr>

* Create Task

`localhost:${PORT}/api/createTask
`   
    Input: Title, description, due_date<br>
    Endpoint: POST 
<hr>

* Create Task

`localhost:${PORT}/api/createTask
`   
    Input: Title, description, due_date<br>
    Endpoint: POST 
<hr>

* Create Task

`localhost:${PORT}/api/createTask
`   
    Input: Title, description, due_date<br>
    Endpoint: POST 
<hr>

* Create Task

`localhost:${PORT}/api/createTask
`   
    Input: Title, description, due_date<br>
    Endpoint: POST 
<hr>

<!-- Cron Job: Priority Update

<!-- Logic: Changes task priority based on due_date
Schedule: Runs periodically
Cron Job: Voice Calling (Twilio)

Logic: Calls users for overdue tasks based on priority
Schedule: Runs periodically
Note: Priority is fetched from the user table -->