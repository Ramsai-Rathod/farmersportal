const nodemailer = require("nodemailer");
const config=require('../config')
const send=async(gmail,data)=>{
  console.log({gmail,data});
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure:false,
  requireTLS:true,
  auth: {
    user: "farmerportal00@gmail.com",
    pass: config.emailpass,
  },
});

const mailOptions= {
    from: 'farmerportal00@gmail.com', // sender address
    to: gmail, // list of receivers
    subject: "Hello ✔", // Subject line
    text: `Hello dear customer`, // plain text body
    html: `<b>${data}</b>`, // html body
  };
  transporter.sendMail(mailOptions,function(err){
    console.log(err)
  })

}
module.exports=send;