import nodemailer from "nodemailer";
import 'dotenv/config';
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: 'OAuth2',
        user: process.env.GOOGLE_USER,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        clientId: process.env.GOOGLE_CLIENT_ID
    }
})


transporter.verify()
    .then(() => { console.log("Email transporter is ready to send emails"); })
    .catch((err) => { console.error("Email transporter verification failed:", err); });


export async function sendEmail({ to, subject, html, text="" }) {
    const mailOptions = {
        from: process.env.GOOGLE_USER,
        to,
        subject,
        html,
        text
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent", info?.messageId, "to", to);
        return "Email sent successfully to " + to;
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Failed to send email");
    }

}

