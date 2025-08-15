// require('dotenv').config({path : './env'});
import dotenv from 'dotenv'
import mongoose from "mongoose";
import {DB_NAME} from './constants.js'

import express from 'express';


import connectDB from "./db/index.js";


dotenv.config({
    path : './env'
})
connectDB();
// const app = express();
// //dont ever connect database in single line use try catch block
// ; 
// // const connectDB = async () => {

// // }
// //for cleaning process
// ;( async () =>{
//     try{
//         await mongoose.connect(`${process.env.MONDODB_URI}/${DB_NAME}`);
//         app.on("error" , (error)=>{
//             console.log("err : " , err);
//             throw err;
//         })
//         app.listen(process.env.PORT , ()=>{
//             console.log(`th app insllistening on the port ${process.env.PORT}`);
            
//         })
//     } catch(e){
//         console.error("ERROR:" , error);
//         throw err;
//     }
// })()









// another approach