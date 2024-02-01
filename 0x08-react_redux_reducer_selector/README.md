# 0x08. React Redux Reducer + Selector

## Project Overview

This project focuses on implementing Redux reducers and selectors in a React application, emphasizing best practices such as immutability, purity, and the use of Normalizr. The tasks involve creating reducers for UI, courses, and notifications, as well as implementing selectors for efficient data access.

## Authors

- **Name:** Alexander Udeogaranya
- **Email:** halodyrane@gmail.com
- **GitHub:** [Dr-dyrane](https://github.com/Dr-dyrane)

## Project Structure

### Task 0: Write a basic reducer

- File: `task_0/dashboard/src/reducers/uiReducer.js`
- Test: `task_0/dashboard/src/reducers/uiReducer.test.js`
  
### Task 1: Use Immutable for the UI Reducer

- File: `task_1/dashboard/src/reducers/uiReducer.js`
- Test: `task_1/dashboard/src/reducers/uiReducer.test.js`

### Task 2: Create a reducer for Courses

- Files: 
  - `task_2/dashboard/src/actions/courseActionTypes.js`
  - `task_2/dashboard/src/reducers/courseReducer.js`
  - `task_2/dashboard/src/reducers/courseReducer.test.js`

### Task 3: Create the reducer for notifications

- Files:
  - `task_3/dashboard/src/actions/notificationActionTypes.js`
  - `task_3/dashboard/src/reducers/notificationReducer.js`
  - `task_3/dashboard/src/reducers/notificationReducer.test.js`

### Task 4: Normalizr & Immutable

- Files:
  - `task_4/dashboard/src/schema/courses.js`
  - `task_4/dashboard/src/reducers/courseReducer.js`
  - `task_4/dashboard/src/schema/notifications.js`
  - `task_4/dashboard/src/reducers/notificationReducer.js`
  - `task_4/dashboard/src/reducers/courseReducer.test.js`
  - `task_4/dashboard/src/reducers/notificationReducer.test.js`

### Task 5: Selectors

- Files:
  - `task_5/dashboard/src/selectors/notificationSelector.js`
  - `task_5/dashboard/src/selectors/notificationSelector.test.js`

## Learning Objectives

By completing this project, you will gain a deep understanding of:

- The purpose of a reducer and its role in a React application
- The importance of maintaining purity in reducers
- Avoiding mutations within reducers
- Using Immutable within reducers for better performance
- Implementing Normalizr to simplify state mutation
- Working with selectors for efficient data access in the state

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/Dr-dyrane/alx-react.git
   ```

2. Navigate to the project directory:

   ```bash
   cd alx-react/0x08-react_redux_reducer_selector
   ```

3. Follow the instructions in each task directory to set up and run the project.

## Test Execution

To run the tests for the entire project, execute the following command:

```bash
npm test
```

## Project Completion

Upon completing the project, please request a manual QA review to ensure all tasks are correctly implemented and meet the specified requirements.
