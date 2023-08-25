import mongoose from "mongoose";

const Connection = async (URL) => {
  try {
    
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected sucessfully");
  } catch (error) {
    console.log("Error while connecting with db: ", error);
  }
};
export default Connection;
