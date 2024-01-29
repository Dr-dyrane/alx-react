# React Redux Action Creator + Normalizr

## Introduction

Welcome to the React Redux Action Creator + Normalizr project! This project is designed to enhance your skills in React, Redux, and Normalizr through a series of tasks. Each task focuses on specific aspects, including action creators, normalization of nested JSON, and handling asynchronous actions using Redux Thunk.

## Project Structure

The project is organized into several tasks, each residing in its designated directory within the repository:

1. **Task 0: Read data from a JSON**
   - Directory: `0x07-react_redux_action_creator_normalizr/task_0`
   - Files:
     - `dashboard/src/schema/notifications.js`
     - `dashboard/src/schema/notifications.test.js`

2. **Task 1: Normalize a nested JSON**
   - Directory: `0x07-react_redux_action_creator_normalizr/task_1`
   - Files:
     - `dashboard/src/schema/notifications.js`
     - `dashboard/src/schema/notifications.test.js`

3. **Task 2: Filter a normalized Schema**
   - Directory: `0x07-react_redux_action_creator_normalizr/task_2`
   - Files:
     - `dashboard/src/schema/notifications.js`

4. **Task 3: Create actions for the course list**
   - Directory: `0x07-react_redux_action_creator_normalizr/task_3`
   - Files:
     - `dashboard/src/actions/courseActionTypes.js`
     - `dashboard/src/actions/courseActionCreators.js`
     - `dashboard/src/actions/courseActionCreators.test.js`

5. **Task 4: Create actions for the UI**
   - Directory: `0x07-react_redux_action_creator_normalizr/task_4`
   - Files:
     - `dashboard/src/actions/uiActionTypes.js`
     - `dashboard/src/actions/uiActionCreators.js`
     - `dashboard/src/actions/uiActionCreators.test.js`

6. **Task 5: Create actions for the notification list**
   - Directory: `0x07-react_redux_action_creator_normalizr/task_5`
   - Files:
     - `dashboard/src/actions/notificationActionTypes.js`
     - `dashboard/src/actions/notificationActionCreators.js`
     - `dashboard/src/actions/notificationActionCreators.test.js`

7. **Task 6: Bound the actions**
   - Directory: `0x07-react_redux_action_creator_normalizr/task_6`
   - Files:
     - `dashboard/src/actions/courseActionCreators.js`
     - `dashboard/src/actions/notificationActionCreators.js`
     - `dashboard/src/actions/uiActionCreators.js`

8. **Task 7: Async Action Creators**
   - Directory: `0x07-react_redux_action_creator_normalizr/task_7`
   - Files:
     - `dashboard/src/actions/uiActionTypes.js`
     - `dashboard/src/actions/uiActionCreators.js`
     - `dashboard/src/actions/uiActionCreators.test.js`

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dr-dyrane/alx-react.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd alx-react
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Follow the instructions in each task directory to complete the respective tasks.**

## Tasks Breakdown

### Task 0: Read data from a JSON

Reuse the latest dashboard project from the React course `0x06-React_state`.

#### Requirements:
- Place `notifications.json` into the root of the project directory.
- Create `notifications.js` in the `schema` folder.
- Implement `getAllNotificationsByUser` function.
- Create a test in `notifications.test.js` for the specified data.

### Task 1: Normalize a nested JSON

Copy the dashboard to `task_1` directory and modify `notifications.js` to set up a schema using Normalizr.

#### Requirements:
- Use `schema.Entity` to create entities for users, messages, and notifications.
- Write tests to verify normalized data.

... (Continue this structure for each task)

## Running Tests

You can run the tests for each task using the following command:
```bash
npm test
```

## Manual QA Review

After completing the tasks, request a manual QA review. Share the project link with your peers for review.

## Authors

- **Name:** Alexander Udeogaranya
- **Email:** halodyrane@gmail.com
- **GitHub:** [Dr-dyrane](https://github.com/Dr-dyrane)

## License

This project is licensed under the [ALX License](LICENSE).

## Additional Notes

...

## Conclusion

Thank you for your contribution and dedication! Happy coding!
