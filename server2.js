// Import various modules.
// Express is web framework that let's you structure a web application to handle multiple different http requests at a specific url.
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// This empty array will store the user's info (name, email, password).
let users = [ ];

// This allows us to access the inputs in our req variables.
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, '/')));

// Directory for /index.
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

// Directory for /register.
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/register.html'));
});

// Directory for /login.
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/login.html'));
});

// Save input from registration form, then redirect to proper page.
app.post('/register', async (req, res) => {
    try {
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
    console.log(users)
});

// If user authenticates, then they will be directed to a /index.
// If user does not authenticate, then they will be directed to register.
app.post('/login', (req, res) => {
    if (req.body.emailLogin === users[0].email && req.body.passwordLogin === users[0].password) {
        res.redirect('/')
    } else {
        res.redirect('/register')
    }
});

app.listen(port);
console.log('Server started at http://localhost:' + port);