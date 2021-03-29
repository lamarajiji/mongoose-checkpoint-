const mongoose=require('mongoose')
const connectDB = async ()=> {
    try {
        let result = await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("database connected")
      } catch (error) {
        console.log(`cannot connect to database ${error}`)
      }
    }
module.exports = connectDB