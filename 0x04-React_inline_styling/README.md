# React Inline Styling Project

This project focuses on incorporating inline styling in a React application using Aphrodite, handling conditions for applying different styles, implementing responsive design with media queries, and adding animations. Follow the tasks outlined below to complete the project.

## Project Overview

### Task 0: Inline Styling

- **Objective:** Understand and implement inline styling in React components.
- **Files:**
  - `task_0/dashboard/src/CourseList/CourseListRow.js`
  - `task_0/dashboard/src/CourseList/CourseListRow.test.js`
- **Instructions:**
  - Change the background color of a row to `#f5f5f5ab` using inline styling.
  - Change the background color of a header row to `#deb5b545` using inline styling.
  - Ensure that test suites, especially `CourseListRow.test.js`, still pass.

### Task 1: Install Aphrodite

- **Objective:** Integrate Aphrodite for CSS-in-JS styling in the React application.
- **Files:**
  - `task_1/dashboard/src/App/App.js`
  - `task_1/dashboard/src/BodySection/BodySectionWithMarginBottom.js`
  - `task_1/dashboard/src/CourseList/CourseList.js`
  - `task_1/dashboard/src/Header/Header.js`
  - `task_1/dashboard/src/Login/Login.js`
  - `task_1/dashboard/src/Notifications/Notifications.js`
  - Corresponding test files
- **Instructions:**
  - Install Aphrodite using `npm install --save aphrodite`.
  - Modify components to use Aphrodite for styling.
  - Delete CSS files and imports.
  - Ensure the UI looks the same with inline styling as it did with CSS files.
  - Confirm that test suites pass.

### Task 2: Conditionally Applying Style

- **Objective:** Apply styles conditionally based on different scenarios.
- **Files:**
  - `task_2/dashboard/src/Notifications/NotificationItem.js`
  - `task_2/dashboard/src/Notifications/NotificationItem.test.js`
  - `task_2/dashboard/src/CourseList/CourseListRow.js`
  - `task_2/dashboard/src/CourseList/CourseListRow.test.js`
- **Instructions:**
  - Use Aphrodite for styling with conditions.
  - Define styles for different types of items/rows.
  - Avoid repetition and ensure the UI consistency.
  - Confirm that test suites pass.

### Task 3: Responsive Design

- **Objective:** Make the application responsive using media queries.
- **Files:**
  - `task_3/dashboard/src/Login/Login.js`
  - `task_3/dashboard/src/Notifications/Notifications.js`
  - `task_3/dashboard/src/Notifications/NotificationItem.js`
- **Instructions:**
  - Adjust layout for large and small screens.
  - Ensure proper display on different screen sizes.
  - Confirm that the UI meets the specified criteria.

### Task 4: Animation

- **Objective:** Implement animations for user interaction.
- **Files:**
  - `task_4/dashboard/src/Notifications/Notifications.js`
- **Instructions:**
  - Create CSS frames for opacity change and bouncing effect.
  - Apply animation to the menu item on hover.
  - Adjust styling to match the provided image.
  - Confirm that the UI meets the specified criteria.

## Project Completion Checklist

- [ ] Task 0 completed successfully with passing test suites.
- [ ] Aphrodite installed and used in Task 1 with UI consistency and passing tests.
- [ ] Conditional styling implemented in Task 2 with passing tests.
- [ ] Responsive design applied in Task 3 with UI meeting specified criteria.
- [ ] Animation implemented in Task 4 with UI meeting specified criteria.
- [ ] Manual QA review performed.
- [ ] README.md file created and updated with project details, instructions, and completion checklist.

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/Dr-dyrane/alx-react.git
```

2. Navigate to the project directory:

```bash
cd 0x04-React_inline_styling
```

3. Install dependencies:

```bash
npm install
```

4. Run the project:

```bash
npm start
```

5. For testing:

```bash
npm test
```

## Author

- **Name:** Alexander Udeogaranya
- **Email:** halodyrane@gmail.com
- **GitHub:** [Dr-dyrane](https://github.com/Dr-dyrane)

Feel free to reach out for any questions or clarifications. Happy coding!
