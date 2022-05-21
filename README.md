# Overview

This web app is a simple user authentication program. A user can register an account and then use it to login to the main site. The program takes and stores a users name, email, and password while the server is running.

To get the server to run, you will need to run this command in the terminal:

```
npm run devStart
```

Once the server boots up, you can access the web app by clicking the link in the terminal.

The purpose of creating this web app project was to become familiar and comfortable with Node.js. I aimed to learn as much as I could given the scope of this project. This project has illustrated just how important and valuable Node.js is for backend JavaScript development. I am glad to report that I feel confident using Node.js for future projects now and cannot wait to learn more.

{Provide a link to your YouTube demonstration.  It should be a 4-5 minute demo of the software running (starting the server and navigating through the web pages) and a walkthrough of the code.}

[Software Demo Video](https://youtu.be/SK7DtbtKd98)

# Web Pages

##### Registration
When you first boot up the web app, you will be directed to the '/register' page. This is where you can make an account by filling in your name, email, and password then submitting the form. 

##### Login
Once you have submitted your registration, you will be directed to the '/login' page where you can enter your email and password to gain access to the main home page. If you enter an invalid email or password combo, then you will be directed to '/register' again.

##### Main
Once you have gained access after successfully logging in, you will be directed to the main '/' index page. You will be greeted with a "Hello friend!"

# Development Environment

Tools:

* VS Code - I utilized VS Code to develop the program.

Technologies/Languages:
* HTML/CSS - I utilized HTML and CSS for frontend work related to forms, buttons, and design.
* Node.js - Used for my JavaScript runtime environment. This is where the core backend work operates. Node.js also allowed me to utilize Express, HTTP, and path modules.

# Useful Websites

* [Node.js Docs](https://nodejs.dev/learn)
* [How To Deliver HTML Files with Express](https://www.digitalocean.com/community/tutorials/use-expressjs-to-deliver-html-files)
* [Node.js YouTube Tutorial](https://www.youtube.com/watch?v=-RCnNyD0L-s&list=LL&index=2&t=1506s)

# Future Work

* Store user accounts in a database, so that they can leave the app and still have an account.
* Hash the passwords that are saved for security and privacy requirements. 
* Develop a way to display the user's name when they login. 