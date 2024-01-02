# alx-react - Webpack Curriculum

## Introduction
This repository contains the projects completed as part of the Webpack curriculum in the ALX Software Engineering program. The curriculum focuses on enhancing your skills in setting up and optimizing Webpack configurations for web development projects. Each project builds upon the previous one, covering various aspects of Webpack, including basic setup, configuration files, adding CSS and images, using development servers, modules, and tree shaking.

## Projects Overview

### Task 0: Basic Setup
- **Objective**: Set up Webpack for a basic project.
- **Learning Objectives**:
  - How to set up Webpack for a basic project.
  - Understanding entry points, output, and loaders.
  - Adding plugins and splitting code into chunks.
  - Configuring a development server.

- **Instructions**: Follow the provided guidelines to create a basic Webpack setup, install dependencies, and configure a simple project using jQuery. The focus is on understanding Webpack concepts without using a custom configuration file.

### Task 1: Learning How to Use Webpack with a Config File
- **Objective**: Learn how to use Webpack with a configuration file.
- **Learning Objectives**:
  - Installing and configuring Webpack with a custom configuration file.
  - Utilizing jQuery to create dynamic elements on a web page.
  - Implementing a counter function with Lodash to prevent spam.

- **Instructions**: Create a package.json, install necessary dependencies, and configure Webpack to produce a production build. Use jQuery to create dynamic elements and prevent spam using Lodash.

### Task 2: Adding CSS & Images
- **Objective**: Enhance Webpack configuration to include CSS and images.
- **Learning Objectives**:
  - Modifying Webpack to support CSS.
  - Configuring Webpack to handle images.
  - Optimizing images using Webpack.

- **Instructions**: Extend the Webpack configuration to support CSS and images. Introduce a new CSS file and an image to the project, ensuring proper optimization during the build process.

### Task 3: Dev Servers, Modules, and Tree Shaking
- **Objective**: Set up a development server, organize code into modules, and implement tree shaking.
- **Learning Objectives**:
  - Configuring a development server for faster development.
  - Dividing code into modular components.
  - Implementing tree shaking for optimized bundles.

- **Instructions**: Set up a development server, divide code into modules (header, body, footer), and optimize bundles using tree shaking. Utilize plugins to enhance development speed and improve bundle size.

## Repository Structure
- **Directory**: 0x00-Webpack
  - **Task 0**: Basic Setup
    - Files: `task_0/package.json`, `task_0/src/index.js`, `task_0/dist/index.html`
  - **Task 1**: Learning How to Use Webpack with a Config File
    - Files: `task_1/js/dashboard_main.js`, `task_1/package.json`, `task_1/webpack.config.js`, `task_1/public/index.html`
  - **Task 2**: Adding CSS & Images
    - Files: `task_2/package.json`, `task_2/css/main.css`, `task_2/webpack.config.js`, `task_2/js/dashboard_main.js`, `task_2/public/index.html`
  - **Task 3**: Dev Servers, Modules, and Tree Shaking
    - Files: `task_3/modules/body/body.css`, `task_3/modules/body/body.js`, `task_3/modules/footer/footer.css`, `task_3/modules/footer/footer.js`, `task_3/modules/header/header.css`, `task_3/modules/header/header.js`, `task_3/package.json`, `task_3/webpack.config.js`

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/Dr-dyrane/alx-react.git
   ```
2. Navigate to the desired task directory (e.g., `0x00-Webpack/task_0`).
3. Follow the specific instructions provided for each task.

## Author
- **Alexander Udeoagranya**
  - GitHub: [Dr-dyrane](https://github.com/Dr-dyrane)

## License
This project is licensed under the [ALX License](LICENSE). Copyright © 2024 ALX, All rights reserved.
