require("dotenv").config();
const connectDB = async () => {
  try {
    await require("mongoose").connect(process.env.MONGO_URI);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
    alert("Database Not Connected");
  }
};

module.exports = connectDB;
