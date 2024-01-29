const nodeMailer = require('nodemailer')

const sendEmail = async(options)=>{

    const transporter = nodeMailer.createTransport({
        service:process.env.SMPT_SERVICE, //gmail
        auth:{
            user:process.env.SMPT_MAIL,  //enter your email address
            password:process.env.SMPT_PASSWORD//enter your email password
        }
    })

    const mailOptions={
        from:process.env.SMPT_MAIL,
        to:options.email,
        subject:options.subject,
        text:options.message,
    }

    await transporter.sendEmail(mailOptions);
}

module.exports = sendEmail