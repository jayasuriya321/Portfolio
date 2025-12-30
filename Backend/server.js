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
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Portfolio Contact",
          email: "verified@yourdomain.com"
        },
        to: [{ email: "your@email.com" }],
        subject: "New Portfolio Inquiry",
        htmlContent: `
          <p>Name: ${name}</p>
          <p>Phone: ${phone}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>
        `
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    res.json({ success: true });
  } catch (err) {
    console.error(err.response?.data);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
