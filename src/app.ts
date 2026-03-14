import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import premiumRouter from "./routes/premium.router";
import subscriptionRouter from "./routes/subscription.router";
import modulesRouter from "./routes/modules.rotuer";
import paymentRouter from "./routes/payment.router";
import { connectDB } from "./config/mongodb.config";
import { errorHandler } from "./middleware/error.middleware";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST"],
    credentials: true,
  }),
);
app.use(express.json());
app.use("/api/premium", premiumRouter);
app.use("/api/subscribe", subscriptionRouter);
app.use("/api/modules", modulesRouter);
app.use("/api/payment", paymentRouter);

app.use(errorHandler);

connectDB().then(() => {
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}.`);
  });

  process.on("unhandledRejection", (error) => {
    console.log(`Logged Error: ${error}.`);
    server.close(() => process.exit());
  });
});
