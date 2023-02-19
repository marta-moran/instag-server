const mongoose = require("mongoose");
mongoose.set('strictQuery', false)


const MONGO_URI =
  process.env.MONGODB_URI || "mongodb+srv://martamoran:hola123@cluster0.xxjpykt.mongodb.net/instag"
mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
