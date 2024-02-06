const express = require("express");
const router = express.Route();
const cors = require("cors");
const nodemailer = require ("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log ("Server Running"));


const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
            user:"kaviyakrishnan@gmail.com",
            pass:""
        },
});

contactEmail.verify((error) => {
if (error) {
console.log(error);
} else {
console.log ("Ready to Send");
}
});

// Route handler for POST request to "/contact"
router.post("/contact", (req, res) => {
    // Extract data from request body
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;

    // Construct email content
    const mail = {
        from: name,
        to: "kaviyakrishnan25@gmail.com",
        subject:"Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>`,

    };
 
    // Send email using nodemailer
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json (error);
        } else {
            res.json({ code: 200, status: "Message Sent" }) ;
        }
    });
});