## SDI Full-Stack Application Project 3

<br/>


## Table of Contents
- Overview
- Installation
- Description
- Usage
- Author


## Overview
&emsp; Inventory management systems are often used in many industries and used for various types of inventories. This Inventory Management system has been made for the Galvanize SDI Z-Prefix test.


## Installation
- Ensure docker and node are installed on your machine.
- Open a terminal of any flavor. Grab the ssh for this repository `git@github.com:ryan-binkley/zprefix-app.git` and clone the database into your terminal. ie. `git clone git@github.com:ryan-binkley/zprefix-app.git ryanbinkleyzprefix`. This will clone the repository into the `ryanbinkleyzprefix` directory.
  - Navigate to the cloned directory using `cd ryanbinkleyzprefix`.
  - BACKEND Navigate to the backend directory using `cd backend`. Run `npm i` in the terminal. Run `npm run spinup` in the terminal. Lastly, run `npm start`.
  - FRONTEND Open a new terminal to run the frontend. Ensure you are in the `ryanbinkleyzprefix` directory. Navigate to the frontend directory using `cd frontend`. Run `npm i` in the terminal. Lastly, run `npm start` in the terminal.


## Description
&emsp; This inventory management system is a simple way for individual users to keep track of their items. They can do so as a (default)visitor, or as a registered user. A visitor has limited permissions(only to read) whereas the registered user has the ability to modify, add, delete, and read all items in the database.

## Usage
The home page is the full inevntory. When arriving to this page, you will initially be set as a visitor.
- **Sign Up**
   - This page will have you enter in a First Name, a Last Name, a Username, and a Password. Upon creating a new user, you will be redirected to the login page.
- **Login**
   - Once logged in, you will be sent to your personal inventory page.
- **Personal Inventory**
   - This page consists of all items that you have created. From here you will be able to view, edit, and delete items you have created.
- **Add Item**
   - When adding an item, it will be put under your name.
- **Full Inventory**
   - This page contains every item in the database, along with some details about the item. This page allows you to see what other users have added.
- **My Profile**
   - From here you can change details regarding your profile, like name, username, and password. 

<br/>

## Author
&emsp; Ryan Binkley

<br/>