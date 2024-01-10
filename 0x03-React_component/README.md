# React Components Project

## Overview

This project focuses on enhancing your understanding and proficiency in working with React components. The tasks cover various aspects, including converting functional components to class components, implementing lifecycles, handling events, creating reusable components, and optimizing performance using pure components.

## Learning Objectives

By completing this project, you are expected to achieve the following learning objectives:

1. Understand when to use a Class or a function to create a component.
2. Grasp the lifecycle of a Class component.
3. Learn how to effectively test a React component.
4. Utilize Jest spies to verify that functions are called correctly.
5. Comprehend the concept of Higher Order Components (HOCs) and how to implement them.
6. Optimize performance by controlling which components to render using pure components.

## Requirements

- All files must be interpreted/compiled on Ubuntu 18.04 LTS using node 12.x.x and npm 6.x.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All files should end with a new line.
- A README.md file at the root of the project folder is mandatory.

## Tasks

### Task 0: Commence with Class Components

**Description**: Start the project by converting the App function into a React Class. Ensure the tests are still passing.

**Requirements**:
- App should display the exact same page as the last task.
- No errors or warnings in the browser console.

**Repo**:
- [GitHub repository: alx-react](#)
- [Directory: 0x03-React_component](#)
- [File: task_0/dashboard/src/App/App.js](#)

### Task 1: Lifecycles

**Description**: Add a lifecycle to a component. Add an event listener for keypress and test the functionality.

**Requirements**:
- Call logOut function when control and h keys are pressed simultaneously.
- Remove the event listener when the component is unmounted.
- Tests should ensure correct function and alert calls.

**Repo**:
- [GitHub repository: alx-react](#)
- [Directory: 0x03-React_component](#)
- [Files: task_1/dashboard/src/App/App.js, task_1/dashboard/src/App/App.test.js](#)

### Task 2: Handling Events

**Description**: Create a new handling event in the Notifications component. Test the new functionality.

**Requirements**:
- Convert Notifications function into a React Class.
- Create and test markAsRead function in Notifications and NotificationItem components.

**Repo**:
- [GitHub repository: alx-react](#)
- [Files: task_2/dashboard/src/Notifications/NotificationItem.js, task_2/dashboard/src/Notifications/NotificationItem.test.js, task_2/dashboard/src/Notifications/Notifications.js, task_2/dashboard/src/Notifications/Notifications.test.js](#)

### Task 3: Reusable Comments & Specialization

**Description**: Implement a new component named BodySection for containment. Create a specialized component, BodySectionWithMarginBottom.

**Requirements**:
- Create BodySection and BodySectionWithMarginBottom components.
- Utilize these components in the App component.

**Repo**:
- [GitHub repository: alx-react](#)
- [File: task_3/dashboard/src/BodySection/BodySection.js](#)
- [File: task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.js, task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.css](#)
- [File: task_3/dashboard/src/App/App.js](#)

### Task 4: Specialization

**Description**: Create a new component, BodySectionWithMarginBottom, with specific styling. Utilize this in the App component.

**Requirements**:
- Define propTypes for both props.
- Avoid manual repetition of props using the spread operator.

**Repo**:
- [GitHub repository: alx-react](#)
- [Files: task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.js, task_3/dashboard/src/BodySection/BodySection.css](#)

### Task 5: Use the New Components

**Description**: Modify the App component to use the newly created BodySection and BodySectionWithMarginBottom components.

**Repo**:
- [GitHub repository: alx-react](#)
- [File: task_3/dashboard/src/App/App.js](#)

### Task 6: Test the New Components

**Description**: Write tests for the BodySection and BodySectionWithMarginBottom components.

**Requirements**:
- Test BodySection to render children and h2 element correctly.
- Test BodySectionWithMarginBottom to render BodySection component with correct props.

**Repo**:
- [GitHub repository: alx-react](#)
- [Files: task_3/dashboard/src/BodySection/BodySection.test.js, task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.test.js](#)

### Task 7: Create WithLogging HOC

**Description**: Implement a Higher Order Component (HOC) named WithLogging to log mount and unmount events.

**Requirements**:
- Log mount and unmount events to the console.
- Modify displayName of the HOC for better debugging.

**Repo**:
- [GitHub repository: alx-react](#)
- [File: task_4/dashboard/src/HOC/WithLogging.js](#)

### Task 8: Write a Test for the HOC

**Description**: Write tests for the WithLogging HOC.

**Requirements**:
- Test console.log calls on mount and unmount with pure HTML and Login component.

**Repo**:
- [GitHub repository: alx-react](#)
- [File: task_4/dashboard/src/HOC/WithLogging.test.js](#)

### Task 9: Declare a Pure Component

**Description**: Modify NotificationItem component to make it "pure" by updating only when props or state change.

**Repo**:
- [GitHub repository: alx-react](#)
- [File: task_5/dashboard/src/Notifications/NotificationItem.js](#)

### Task 10: Make Your Own Pure Component

**Description**: Modify Notifications component to update only when the new property listNotifications has more elements than before.

**Repo**:
- [GitHub repository: alx-react](#)
- [File: task_5/dashboard/src/Notifications/Notifications.js](#)

### Task 11: Add a Test

**Description**: Write tests to verify the behavior of Notifications component when updating props.

**Requirements**:
- Check that the component doesn’t rerender with the same list.
- Verify that the component rerenders with a longer list.

**Repo**:
- [GitHub repository: alx-react](#)
- [File: task_5/dashboard/src/Notifications/Notifications.test.js](#)

## Copyright

Copyright © 2024 ALX, All rights reserved.