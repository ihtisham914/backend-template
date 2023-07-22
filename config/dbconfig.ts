import mongoose, { ConnectOptions } from "mongoose";

// CONNECTING TO DATABASE, ADD DB_URL IN .ENV FILE
const mongo_uri: any = process.env.DB_URL;
mongoose.set("strictQuery", true);

export const connectToDBServer = (callback: (err?: any) => void) => {
  mongoose
    .connect(mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    } as ConnectOptions)
    .then(() => {
      console.log("Database Connected Successfuly.");
      return callback();
    })
    .catch((err) => {
      //   console.log(err);
      return callback(err);
    });
};
