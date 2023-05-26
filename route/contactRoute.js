const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/contact', (req, res) => {
    let data = req.body;
    res.header("Access-Control-Allow-Origin", "*");
    if(data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
        return res.json({msg: 'Please Fill all the Fields'})
    }

    let smtpTransporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    })

    let mailOptions = {
        from: data.email,
        to: 'souravshaw2020@gmail.com',
        subject: `Message from ${data.name}`,
        html: `
        
        <h3>Information</h3>
        <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${data.message}<p/>
        `
    }

    smtpTransporter.sendMail(mailOptions, (error) => {
        try {
            if (error) return res.status(400).json({msg: 'Plesae Fill all the Fields'});
            res.status(200).json({msg: 'Thank you for contacting, Sourav..'});
        }
        catch (error) {
            if (error) return res.status(500).json({msg: 'There is a Server Error'});
        }
    })
})

module.exports=router;