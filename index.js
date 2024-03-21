import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
app.use(cors());
const port = 3080;

app.use(bodyParser.json());

app.post("/calculate-area", (req, res) => {
  const { radius } = req.body;
  const area = Math.PI * radius * radius;
  res.json({ area });
});
app.post("/calculate-circumference", (req, res) => {
  const { radius } = req.body;
  const circumference = Math.PI * (radius + radius);
  res.json({ circumference });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
