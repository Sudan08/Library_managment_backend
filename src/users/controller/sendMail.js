require('dotenv').config();
const nodemailer = require('nodemailer')



const sendMail = (email, uniqueString) =>{
    const Transport = nodemailer.createTransport({
        service : "gmail",
        auth:{
            user : "library.management6969@gmail.com",
            pass :  process.env.PASSWORD
        },
        secure : true
});

    const mailOptions = {
        from : "library.management6969@gmail.com",
        to : email,
        subject : "Email Verification",
        html : `Press <a href=http://localhost:8000/api/v1/verify/${uniqueString}>here</a> to verify your email`
    };

    Transport.sendMail(mailOptions, (err, response )=> {
        if (err) {
            console.log(err)
        }
        else{
            console.log("Email sent")
        }
    });
}

module.exports = sendMail;