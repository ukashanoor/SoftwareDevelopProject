import nodemailer from "nodemailer";

const sendEmail = async (subject,body,to,bcc,cc) => {

    var transporter = nodemailer.createTransport({
        host: "smtp.office365.com", 
        secure: false, 
        port: 587,
        auth: {
          user: '',
          pass: ''
        }
      });
      
      var mailOptions = {
        from: 'support@bigyellowfish.io',
        to: to,
        bcc: bcc,
        cc: cc,
        subject: subject,
        html: body
      };
      console.log(mailOptions);
    let resp =  await transporter.sendMail(mailOptions);

    console.log(resp);
       

}

const sendEmail_attach = async (subject,body,to,bcc) => {

  var transporter = nodemailer.createTransport({
      
    host: "smtp.office365.com", 
    secure: false, 
    port: 587,
      auth: {
        user: 'support@bigyellowfish.io',
        pass: 'EIGHTEEN@18'
      }
    });

    var mailOptions = {
      from: "support@donatehope.io",
      to: to,
      bcc: bcc,
      subject: subject,
      html: body,
      attachments: [],
    };
    
  let resp =  await transporter.sendMail(mailOptions);

  console.log(resp);
     

}

export default sendEmail;