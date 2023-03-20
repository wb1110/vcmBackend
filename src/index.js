import express, { json } from "express";
import { config } from "dotenv";

config();

const app = express();
app.use(json());

const PORT = process.env.PORT || 3000;

// For testing purposes
app.get("/", (req, res) => {
  res.send("<h2>It's Working!</h2>");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
