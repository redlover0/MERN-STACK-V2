import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI); {
            console.log(`MongoDB Connected: ${conn.connection.host}`);}
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // process code 1 one code means a failure/exit 0 means a sucess 
        }
}

// config/db.js
// import mongoose from 'mongoose';

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Database connected');
//   } catch (error) {
//     console.error('Database connection error:', error.message);
//     process.exit(1); // Exit process with failure
//   }
// };
// This is the database connection file. It exports a function called connectDB that connects to the MongoDB database using the MONGO_URI environment variable. It also logs a message to the console when the connection is successful. 