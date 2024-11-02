const express = require('express');
const nodemailer = require ('nodemailer');
const bodyParser = require ('body-parser');
const cookieParser = require('cookie-parser'); // Import cookie-parser
const { dirname } = require ("path");
const { fileURLToPath } = require("url");


require('dotenv').config();




const app = express();
const port = 3000;
// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: true }));





app.set('view engine', 'ejs');

// Serve static files (CSS, images, etc.) from the "public" directory
app.use(express.static('public'));



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// // Serve static files (index.html)
// app.use(express.static(path.join(__dirname, 'public')));
 app.get('/',(req,res) =>{
    res.send("SERVER ON")
 })




app.post('/submit', (req, res) => {
    const { name, email, phone, message } = req.body;
    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(message)
    const subject = "Inquiry"
    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email service provider
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
      },
    });
  
    // Email options
    const mailOptions = {
      from: email, // Sender's email address
      to: process.env.EMAIL, // Recipient's email address
      subject: subject,
      phone: phone,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
    };
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send('Error sending email: ' + error.message);
      }
      // res.sendFile(path.join(__dirname, 'Tracking_ContactUs.html'));
      // res.sendFile(path.join(__dirname, 'view', 'succes.html'));
      res.redirect ('https://lucy-damisa.github.io/St-Matthew/');
    });
  });







  // Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });