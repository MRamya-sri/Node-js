const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rsri40170@gmail.com',
        pass: '23062002ramyasri'
    }
});

const mailOptions = {
    from: 'rsri40170@gmail.com',
    to: 'ms2325558@gmail.com, sreekartammana@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'HIII sorry for distrubance, just trying things.'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent:'+ info.response);
    }
});