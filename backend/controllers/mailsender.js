const nodemailer = require("nodemailer");
const asynchandler=require("express-async-handler");
const config=require('../config')
const send=asynchandler(()=>{
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure:false,
  requireTLS:true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "farmerportal00@gmail.com",
    pass: config.emailpass,
  },
});

const mailOptions= {
    from: 'farmerportal00@gmail.com', // sender address
    to: "ramsaibanoth207@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };
  transporter.sendMail(mailOptions,function(err){
    console.log(err)
  })

})
send();