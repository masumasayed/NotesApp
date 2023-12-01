const mongoose = require ("mongoose")
mongoose.set("strictQuery", false)

const connectDB = async () => {
  try {
   const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`Connected to MongoDB:${conn.connection.host}`)
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message)
    process.exit(1)
  }
}
module.exports = connectDB