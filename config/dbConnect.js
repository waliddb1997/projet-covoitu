const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
const connectDB = async () => {
try {
   await mongoose.connect(process.env.DB_URI);
   console.log("database connected");

} catch (error) {
    console.log("data base not connected");

    
}

}

module.exports = connectDB;