import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, familyname, email, phonenumber, CommentMessage } = data;

    if (!email || !CommentMessage) {
      return NextResponse.json(
        { message: "ایمیل و متن پیام الزامی است" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const senderFullName = `${name || "Unknown"} ${familyname || ""}`.trim();

    const mailOptions = {
      from: `"${senderFullName}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${senderFullName} on my personal website`,
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

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "با موفقیت ارسال شد" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { message: "عدم ارسام به علت خطای سروری" },
      { status: 500 }
    );
  }
}
