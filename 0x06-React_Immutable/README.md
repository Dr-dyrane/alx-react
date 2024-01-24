# React Immutable Project

## Table of Contents
1. [Introduction](#introduction)
2. [Project Overview](#project-overview)
3. [Installation](#installation)
4. [Files and Directories](#files-and-directories)
5. [Tasks and Implementations](#tasks-and-implementations)
6. [Authors](#authors)

## Introduction

This project focuses on understanding and implementing the concept of immutability in React using the Immutable.js library. The primary goal is to enhance your knowledge of immutable objects, Immutable.js, and related concepts in the context of front-end development using React.

## Project Overview

### Learning Objectives
By the end of this project, you should be able to:
- Explain immutable objects and their significance.
- Utilize the Immutable.js library to introduce immutability in JavaScript.
- Understand the differences between List and Map in Immutable.js.
- Implement operations like Merge, Concat, and Deep Merging with Immutable.js.
- Explore lazy Seq and its applications.
- Ensure equality in Immutable Maps.
- Implement lazy Seq for efficient filtering of student data.

### Requirements
- Use specific versions of NodeJS (12.11.x) and npm (6.11.x).
- Follow specific coding standards and file structure.
- Implement various tasks related to immutability using Immutable.js.

## Installation

To set up the project, follow these steps:

1. Install NodeJS 12.11.x and npm 6.11.x using the provided script:
   ```bash
   $ curl -sl https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   $ sudo bash nodesource_setup.sh
   $ sudo apt install nodejs
   ```

2. Copy the necessary configuration files specified in the project description to the root directory and execute `npm install`.

## Files and Directories

- **babel.config.js**: Babel configuration file.
- **jsconfig.json**: JavaScript configuration file.
- **package.json**: Node.js package file.

### Project Structure
- **0x06-React_Immutable/**
  - **0-fromjs.js**: Task 0 implementation.
  - **1-map.js**: Task 1 implementation.
  - **2-nested.js**: Task 2 implementation.
  - **3-list.js**: Task 3 implementation.
  - **4-mutations.js**: Task 4 implementation.
  - **5-merge.js**: Task 5 implementation.
  - **6-deeply.js**: Task 6 implementation.
  - **7-equality.js**: Task 7 implementation.
  - **8-seq.js**: Task 8 implementation.
  - **README.md**: Detailed project documentation.

## Tasks and Implementations

### 0. Converting into an Immutable object using fromJS
- Implemented a function `getImmutableObject` in `0-fromjs.js` to convert a plain JavaScript object into an Immutable Map using `fromJS` from Immutable.js.

### 1. Converting into Immutable using Map
- Modified the function `getImmutableObject` in `1-map.js` to use `Map` from Immutable.js for conversion.

### 2. Accessing nested elements
- Implemented the function `accessImmutableObject` in `2-nested.js` to retrieve the value of an object at a specified path.

### 3. List and push
- Created functions in `3-list.js`: `getListObject` converts an array into an immutable List, and `addElementToList` appends a string to an existing List.

### 4. Chained mutations
- Defined constants `map` and `map2` in `4-mutations.js` using Immutable Map and performed modifications as specified.

### 5. Merge & concat
- Implemented functions in `5-merge.js`: `concatElements` merges two arrays into an Immutable List, and `mergeElements` merges two objects into an Immutable List with preference to values from the second object.

### 6. Nested merge
- Created a function `mergeDeeplyElements` in `6-deeply.js` to deeply merge two objects into a List using Immutable.js.

### 7. Equality
- Implemented `areMapsEqual` function in `7-equality.js` to check equality between two Immutable Maps.

### 8. Lazy Seq
- Implemented `printBestStudents` function in `8-seq.js` to filter and print student data using lazy Seq from Immutable.js.

## Authors

- **Name:** Alexander Udeogaranya
- **Email:** halodyrane@gmail.com
- **GitHub:** [Dr-dyrane](https://github.com/Dr-dyrane)

Feel free to contact the author for any questions or clarifications regarding the project.
