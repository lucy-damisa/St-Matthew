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

  // Check if required fields are provided
  if (!name || !email || !phone || !message) {
      return res.status(400).send('All fields are required.');
  }

  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Message:', message);
  const subject = "Inquiry";

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email service provider
      auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS,
      },
  });

  // Email options
  const mailOptions = {
      from: email, // Sender's email address
      to: process.env.EMAIL, // Recipient's email address
      subject: subject,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.error('Error sending email:', error); // Log the error
          return res.status(500).send('Error sending email: ' + error.message);
      }

      console.log('Email sent:', info.response); // Log the response

      // Set a cookie (for example, a confirmation cookie)
      res.cookie('submissionStatus', 'success', {
          maxAge: 900000, // Cookie will expire after 15 minutes
          httpOnly: true, // Helps mitigate the risk of client-side script accessing the cookie
          secure: true, // Use true if serving over HTTPS
      });

      // Redirect or send a success message
      res.redirect('https://lucy-damisa.github.io/St-Matthew/');
  });
});








  // Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });