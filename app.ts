import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { mainRouter } from "./Routes";
import AppError from "./utils/AppError";
import { errorHandler } from "./middlewares/error.handler";

export const initializeApp = () => {
  const app: Application = express();

  app.use(cookieParser());

  app.use((req, res, next) => {
    if (req.originalUrl === "/api/webhook") {
      return express.raw({ type: "application/json" })(req, res, next);
    }

    return express.json()(req, res, next);
  });
  app.use(express.urlencoded({ extended: true }));

  app.use(morgan("tiny"));

  // provide array of client side urls
  app.use(cors({ origin: "*" }));

  app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));

  app.get("/api/v1", (req, res) => {
    return res.status(200).json({
      // PROJECT NAME GOES HERE
      name: "BtoB Server",
      version: "v1.0.0",
    });
  });

  // Main Router
  app.use("/api/v1", mainRouter);

  app.use((req, res, next) => {
    next(
      new AppError(
        "url_not_found",
        `The url ${req.originalUrl} does not exist!`,
        404
      )
    );
  });

  app.use(errorHandler);

  return app;
};
