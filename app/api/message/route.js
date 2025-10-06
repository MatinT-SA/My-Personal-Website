import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  // IMPORTANT: For production, ensure you have set EMAIL_USER and EMAIL_PASS environment variables
  // (e.g., in a .env.local file or your deployment platform settings).

  try {
    const data = await request.json();
    // Destructure all five expected fields from the client
    const { name, familyname, email, phonenumber, CommentMessage } = data;

    // Basic Validation: Ensure required fields are present
    if (!email || !CommentMessage) {
      return NextResponse.json(
        { message: "Missing required fields (Email or Message)" },
        { status: 400 } // Bad Request
      );
    }

    // Configure Email Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // SENDER: The account used to login and send
        pass: process.env.EMAIL_PASS, // CREDENTIAL: The App Password or API Key
      },
    });

    // Define Email Content
    const senderFullName = `${name || "Unknown"} ${familyname || ""}`.trim();

    const mailOptions = {
      // 1. Set the FROM display name to the commenter's name, but use the SERVER email for authentication.
      from: `"${senderFullName}" <${process.env.EMAIL_USER}>`,

      // 2. Add replyTo. When you hit 'Reply', your email client will use the commenter's email address.
      replyTo: email,

      // RECEIVER: Set to the same account as the SENDER (matin.taherzadeh.mmtsa@gmail.com)
      to: process.env.EMAIL_USER,
      subject: `New Message from ${senderFullName} on Your Portfolio`,
      text: `
        Name: ${name || "N/A"}
        Family Name: ${familyname || "N/A"}
        Email: ${email}
        Phone: ${phonenumber || "N/A"}
        Message: ${CommentMessage}
      `,
      html: `
        <p><strong>Name:</strong> ${name || "N/A"} ${familyname || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phonenumber || "N/A"}</p>
        <p><strong>Message:</strong> ${CommentMessage}</p>
      `,
    };

    // Send the Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 } // OK
    );
  } catch (error) {
    console.error("Email sending error:", error);
    // Return a generic 500 status on internal failure
    return NextResponse.json(
      { message: "Failed to send message due to a server error." },
      { status: 500 }
    );
  }
}
