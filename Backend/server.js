import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, phone, email, message } = req.body;

  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Portfolio Contact",
          email: "jayasuriya0321@gmail.com", // MUST be verified in Brevo
        },
        to: [{ email: "jayasuriya0321@gmail.com " }], // Recipient
        subject: "New Portfolio Inquiry",
        htmlContent: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.BREVO_API_KEY, // Must exist in .env
        },
      }
    );

    console.log("Brevo response:", response.data);
    res.json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err.response?.data || err.message);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
