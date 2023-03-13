// import express from "express";
// import { MongoClient } from "mongodb";
// import cors from "cors";

// const app = express();

// const PORT = 4000;

// //// Mongo Connection
// const MONGO_URL = "mongodb+srv://username:passwordenter@databases.lyvnjh1.mongodb.net";
// const client = new MongoClient(MONGO_URL);
// // top-level await
// await client.connect();
// console.log("Mongo is Connected Successfully !!!");

// app.use(express.json())
// app.use(cors());

// // const mobiles = [
// //     {
// //       model: "OnePlus 9 5G",
// //       img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
// //       company: "Oneplus"
// //     },
// //     {
// //       model: "Iphone 13 mini",
// //       img:
// //         "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
// //       company: "Apple"
// //     },
// //     {
// //       model: "Samsung s21 ultra",
// //       img: "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
// //       company: "Samsung"
// //     },
// //     {
// //       model: "Xiomi mi 11",
// //       img: "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
// //       company: "Xiomi"
// //     }
// //   ];

// // app.get("/mobiles", function(request, response){

// //     response.send(mobiles)

// // })

// app.get("/mobiles", async function (request, response){

//   const allDatas = await client.db("Ragav").collection("mobiles").find({}).toArray()

//   response.send(allDatas)
// })

// app.post("/mobiles", async function(request, response){
//       const createRequest = request.body;

//       const createData = await client.db("Ragav").collection("mobiles").insertMany(createRequest)
//   response.send(createData);

// })

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

// -------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 2
//

// import express from "express";
// import { MongoClient } from "mongodb";
// import cors from "cors";
// import usersRouter from "./routes/users.route.js";
// import * as dotenv from "dotenv";

// dotenv.config();
// const app = express();

// const PORT = 4000;

// //// Mongo Connection
// const MONGO_URL = process.env.MONGO_DB_URL;
// const client = new MongoClient(MONGO_URL);
// // top-level await
// await client.connect();
// console.log("Mongo is Connected Successfully !!!");

// app.use(express.json())
// app.use(cors());

// app.get("/mobiles", async function (request, response){

//   const allDatas = await client.db("Ragav").collection("mobiles").find({}).toArray()

//   response.send(allDatas)
// })

// app.post("/mobiles", async function(request, response){
//     const createRequest = request.body;

//     const createData = await client.db("Ragav").collection("mobiles").insertMany(createRequest)
//   response.send(createData);

// })

// app.use("/users", usersRouter);

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

// export { client };

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 3
// Authantication given, So you have to must store token in Headers in POSTMAN side, If you will not store in Token in POSTMAN side

// import express from "express";
// import { MongoClient } from "mongodb";
// import cors from "cors";
// import usersRouter from "./routes/users.route.js";
// import * as dotenv from "dotenv";
// import { auth } from "./middleware/auth.js"

// dotenv.config();
// const app = express();

// const PORT = 4000;

// //// Mongo Connection
// const MONGO_URL = process.env.MONGO_DB_URL;
// const client = new MongoClient(MONGO_URL);
// // top-level await
// await client.connect();
// console.log("Mongo is Connected Successfully !!!");

// app.use(express.json())
// app.use(cors());

// app.get("/mobiles", auth, async function (request, response){

//   const allDatas = await client.db("Ragav").collection("mobiles").find({}).toArray()

//   response.send(allDatas)
// })

// app.post("/mobiles", auth, async function(request, response){
//     const createRequest = request.body;

//     const createData = await client.db("Ragav").collection("mobiles").insertMany(createRequest)
//   response.send(createData);

// })

// app.use("/users", usersRouter);

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

// export { client };

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 4
// You can delete particular ID withOut token, Because you did not give Authantication in Delete Route

// import express from "express";
// import { MongoClient } from "mongodb";
// import cors from "cors";
// import usersRouter from "./routes/users.route.js";
// import * as dotenv from "dotenv";
// import { auth } from "./middleware/auth.js"
// import {ObjectId} from "mongodb";

// dotenv.config();
// const app = express();

// const PORT = 4000;

// //// Mongo Connection
// const MONGO_URL = process.env.MONGO_DB_URL;
// const client = new MongoClient(MONGO_URL);
// // top-level await
// await client.connect();
// console.log("Mongo is Connected Successfully !!!");

// app.use(express.json())
// app.use(cors());

// app.get("/mobiles", auth, async function (request, response){

//   const allDatas = await client.db("Ragav").collection("mobiles").find({}).toArray()

//   response.send(allDatas)
// })

// app.post("/mobiles", auth, async function(request, response){
//     const createRequest = request.body;

//     const createData = await client.db("Ragav").collection("mobiles").insertMany(createRequest)
//   response.send(createData);

// })

// app.delete("/mobiles/:id", async function(request, response){

//   const {id} = request.params

//   console.log(request.params, id);

//   const deleteData = await client.db("Ragav").collection("mobiles").deleteOne({ _id: new ObjectId(id)});
//   console.log(deleteData)

//   deleteData. deletedCount > 0 ? response.send({message: "Data Deleted Successfully"}) : response.status(404).send({Message : "Data Not Found"});
// })

// app.use("/users", usersRouter);

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

// export { client };

// ------------------------------------------------------------------------------------------------------------------------------------------------------ //
// 5
// Give to Authantication in Delete Route path, then If you have token after you will delete particular ID
// Next go to auth.js

// import express from "express";
// import { MongoClient } from "mongodb";
// import cors from "cors";
// import usersRouter from "./routes/users.route.js";
// import * as dotenv from "dotenv";
// import { auth } from "./middleware/auth.js"
// import {ObjectId} from "mongodb";

// dotenv.config();
// const app = express();

// const PORT = 4000;

// //// Mongo Connection
// const MONGO_URL = process.env.MONGO_DB_URL;
// const client = new MongoClient(MONGO_URL);
// // top-level await
// await client.connect();
// console.log("Mongo is Connected Successfully !!!");

// app.use(express.json())
// app.use(cors());

// app.get("/mobiles", auth, async function (request, response){

//   const allDatas = await client.db("Ragav").collection("mobiles").find({}).toArray()

//   response.send(allDatas)
// })

// app.post("/mobiles", auth, async function(request, response){
//     const createRequest = request.body;

//     const createData = await client.db("Ragav").collection("mobiles").insertMany(createRequest)
//   response.send(createData);

// })

// app.delete("/mobiles/:id", auth, async function(request, response){

//   const {id} = request.params

//   console.log(request.params, id);

//   const deleteData = await client.db("Ragav").collection("mobiles").deleteOne({ _id: new ObjectId(id)});
//   console.log(deleteData)

//   deleteData. deletedCount > 0 ? response.send({message: "Data Deleted Successfully"}) : response.status(404).send({Message : "Data Not Found"});
// })

// app.use("/users", usersRouter);

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

// export { client };

// ---------------------------------------------------------------------------------------------------------------------------------------------- //
// 7
// Delete the data depands up on  RoleID wise deleted, Because particular users Only Allows to Delete the Data's 
// First you have to GET request roleId from localStorage Application, then If-Else Condition wise Delete the data  
// 


// import express from "express";
// import { MongoClient } from "mongodb";
// import cors from "cors";
// import usersRouter from "./routes/users.route.js";
// import * as dotenv from "dotenv";
// import { auth } from "./middleware/auth.js";
// import { ObjectId } from "mongodb";

// dotenv.config();
// const app = express();

// const PORT = 4000;

// //// Mongo Connection
// const MONGO_URL = process.env.MONGO_DB_URL;
// const client = new MongoClient(MONGO_URL);
// // top-level await
// await client.connect();
// console.log("Mongo is Connected Successfully !!!");

// app.use(express.json());
// app.use(cors());

// app.get("/mobiles", auth, async function (request, response) {
//   const allDatas = await client
//     .db("Ragav")
//     .collection("mobiles")
//     .find({})
//     .toArray();

//   response.send(allDatas);
// });

// app.post("/mobiles", auth, async function (request, response) {
//   const createRequest = request.body;

//   const createData = await client
//     .db("Ragav")
//     .collection("mobiles")
//     .insertMany(createRequest);
//   response.send(createData);
// });

// app.delete("/mobiles/:id", auth, async function (request, response) {
//   const { id } = request.params;

//   const { roleId } = request;
//   console.log(request.roleId);

//   if (roleId === "0") {
//     const deleteData = await client
//       .db("Ragav")
//       .collection("mobiles")
//       .deleteOne({ _id: new ObjectId(id) });
//     console.log(deleteData);

//     deleteData.deletedCount > 0
//       ? response.send({ message: "Data Deleted Successfully" })
//       : response.status(404).send({ Message: "Data Not Found" });
//   } else {
//     response.status(401).send({ message: "Unauthorized"});
//   }
// });

// app.use("/users", usersRouter);

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

// export { client };

// -------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 8
// Seprate be the data to RoleID 


// import express from "express";
// import { MongoClient } from "mongodb";
// import cors from "cors";
// import usersRouter from "./routes/users.route.js";
// import * as dotenv from "dotenv";
// import { auth } from "./middleware/auth.js";
// import { ObjectId } from "mongodb";

// dotenv.config();
// const app = express();

// const PORT = 4000;

// //// Mongo Connection
// const MONGO_URL = process.env.MONGO_DB_URL;
// const client = new MongoClient(MONGO_URL);
// // top-level await
// await client.connect();
// console.log("Mongo is Connected Successfully !!!");

// app.use(express.json());
// app.use(cors());

// app.get("/mobiles", auth, async function (request, response) {
//   const allDatas = await client
//     .db("Ragav")
//     .collection("mobiles")
//     .find({})
//     .toArray();

//   response.send(allDatas);
// });

// app.post("/mobiles", auth, async function (request, response) {
//   const createRequest = request.body;

//   const createData = await client
//     .db("Ragav")
//     .collection("mobiles")
//     .insertMany(createRequest);
//   response.send(createData);
// });


//  const ROLE_ID = {
//   Admin:"0",
//   NORAML_USER: "1"
// }


// app.delete("/mobiles/:id", auth, async function (request, response) {
//   const { id } = request.params;

//   const { roleId } = request;
//   console.log(request.roleId);

//   if (roleId === ROLE_ID.Admin) {
//     const deleteData = await client
//       .db("Ragav")
//       .collection("mobiles")
//       .deleteOne({ _id: new ObjectId(id) });
//     console.log(deleteData);

//     deleteData.deletedCount > 0
//       ? response.send({ message: "Data Deleted Successfully" })
//       : response.status(404).send({ Message: "Data Not Found" });
//   } else {
//     response.status(401).send({ message: "Unauthorized"});
//   }
// });

// app.use("/users", usersRouter);

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

// export { client };

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 9
// Install NodeMailer and NodeMailer Code Just Copy & Paste Bottom Side


// import express from "express";
// import { MongoClient } from "mongodb";
// import cors from "cors";
// import usersRouter from "./routes/users.route.js";
// import * as dotenv from "dotenv";
// import { auth } from "./middleware/auth.js";
// import { ObjectId } from "mongodb";

// dotenv.config();
// const app = express();

// const PORT = 4000;

// //// Mongo Connection
// const MONGO_URL = process.env.MONGO_DB_URL;
// const client = new MongoClient(MONGO_URL);
// // top-level await
// await client.connect();
// console.log("Mongo is Connected Successfully !!!");

// app.use(express.json());
// app.use(cors());

// app.get("/mobiles", auth, async function (request, response) {
//   const allDatas = await client
//     .db("Ragav")
//     .collection("mobiles")
//     .find({})
//     .toArray();

//   response.send(allDatas);
// });

// app.post("/mobiles", auth, async function (request, response) {
//   const createRequest = request.body;

//   const createData = await client
//     .db("Ragav")
//     .collection("mobiles")
//     .insertMany(createRequest);
//   response.send(createData);
// });


//  const ROLE_ID = {
//   Admin:"0",
//   NORAML_USER: "1"
// }


// app.delete("/mobiles/:id", auth, async function (request, response) {
//   const { id } = request.params;

//   const { roleId } = request;
//   console.log(request.roleId);

//   if (roleId === ROLE_ID.Admin) {
//     const deleteData = await client
//       .db("Ragav")
//       .collection("mobiles")
//       .deleteOne({ _id: new ObjectId(id) });
//     console.log(deleteData);

//     deleteData.deletedCount > 0
//       ? response.send({ message: "Data Deleted Successfully" })
//       : response.status(404).send({ Message: "Data Not Found" });
//   } else {
//     response.status(401).send({ message: "Unauthorized"});
//   }
// });

// app.use("/users", usersRouter);

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

// export { client };

// /// This Is NodeMailer Code 

// "use strict";
// const nodemailer = require("nodemailer");

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 10
// You have to Romove Un-neccessary code line in NODE-MAILER, 
// So first you have to convert ----> " const nodemailer = require("nodemailer"); => import nodemailer from "nodemailer";
// Then Host mail address convert ----> " host: "smtp.ethereal.email", => host: "smtp.gmail.com", then "service" Attribute Added
// Added host above --->  service : "gmail"  
// And also check your Gmail for some Mail come from " sender mail " to  " receivers mail "
//


// import express from "express";
// import { MongoClient } from "mongodb";
// import cors from "cors";
// import usersRouter from "./routes/users.route.js";
// import * as dotenv from "dotenv";
// import { auth } from "./middleware/auth.js";
// import { ObjectId } from "mongodb";
// import nodemailer from "nodemailer";


// dotenv.config();
// const app = express();

// const PORT = 4000;

// //// Mongo Connection
// const MONGO_URL = process.env.MONGO_DB_URL;
// const client = new MongoClient(MONGO_URL);
// // top-level await
// await client.connect();
// console.log("Mongo is Connected Successfully !!!");

// app.use(express.json());
// app.use(cors());

// app.get("/mobiles", auth, async function (request, response) {
//   const allDatas = await client
//     .db("Ragav")
//     .collection("mobiles")
//     .find({})
//     .toArray();

//   response.send(allDatas);
// });

// app.post("/mobiles", auth, async function (request, response) {
//   const createRequest = request.body;

//   const createData = await client
//     .db("Ragav")
//     .collection("mobiles")
//     .insertMany(createRequest);
//   response.send(createData);
// });


//  const ROLE_ID = {
//   Admin:"0",
//   NORAML_USER: "1"
// }


// app.delete("/mobiles/:id", auth, async function (request, response) {
//   const { id } = request.params;

//   const { roleId } = request;
//   console.log(request.roleId);

//   if (roleId === ROLE_ID.Admin) {
//     const deleteData = await client
//       .db("Ragav")
//       .collection("mobiles")
//       .deleteOne({ _id: new ObjectId(id) });
//     console.log(deleteData);

//     deleteData.deletedCount > 0
//       ? response.send({ message: "Data Deleted Successfully" })
//       : response.status(404).send({ Message: "Data Not Found" });
//   } else {
//     response.status(401).send({ message: "Unauthorized"});
//   }
// });

// app.use("/users", usersRouter);

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

// export { client };

// /// This Is NodeMailer Code

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {

//   let transporter = nodemailer.createTransport({
//     service : "gmail",
//     host: "smtp.gmail.com",
//     secure: false, 
//     auth: {
//       user: "nodemaileraccess@gmail.com", 
//       pass: "xtmzfrwafvmbpupp", 
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Who are you ?👻" <nodemaileraccess@gmail.com>', // sender address
//     to: "bestforevermvi@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
// }

// main().catch(console.error);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 11
// Just Secret maintain for Don't show sender mail ID and Password, So you have to copy " sender mail & password " Paste to " .env "  



import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
import usersRouter from "./routes/users.route.js";
import * as dotenv from "dotenv";
import { auth } from "./middleware/auth.js";
import { ObjectId } from "mongodb";
import nodemailer from "nodemailer";


dotenv.config();
const app = express();

const PORT = 4000;

//// Mongo Connection
const MONGO_URL = process.env.MONGO_DB_URL;
const client = new MongoClient(MONGO_URL);
// top-level await
await client.connect();
console.log("Mongo is Connected Successfully !!!");

app.use(express.json());
app.use(cors());

app.get("/mobiles", auth, async function (request, response) {
  const allDatas = await client
    .db("Ragav")
    .collection("mobiles")
    .find({})
    .toArray();

  response.send(allDatas);
});

app.post("/mobiles", auth, async function (request, response) {
  const createRequest = request.body;

  const createData = await client
    .db("Ragav")
    .collection("mobiles")
    .insertMany(createRequest);
  response.send(createData);
});


 const ROLE_ID = {
  Admin:"0",
  NORAML_USER: "1"
}


app.delete("/mobiles/:id", auth, async function (request, response) {
  const { id } = request.params;

  const { roleId } = request;
  console.log(request.roleId);

  if (roleId === ROLE_ID.Admin) {
    const deleteData = await client
      .db("Ragav")
      .collection("mobiles")
      .deleteOne({ _id: new ObjectId(id) });
    console.log(deleteData);

    deleteData.deletedCount > 0
      ? response.send({ message: "Data Deleted Successfully" })
      : response.status(404).send({ Message: "Data Not Found" });
  } else {
    response.status(401).send({ message: "Unauthorized"});
  }
});

app.use("/users", usersRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export { client };

/// This Is NodeMailer Code


// async function main() {

//   let transporter = nodemailer.createTransport({
//     service : "gmail",
//     host: "smtp.gmail.com",
//     secure: false, 
//     auth: {
//       user: process.env.NODE_MAILER_USER, 
//       pass: process.env.NODE_MAILER_PASSWORD, 
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Who are you ?👻" <nodemaileraccess@gmail.com>', // sender address
//     to: "bestforevermvi@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world 💥🔆🔅🌐", // plain text body
//     html: "<b>Hello world 💥🔆🔅🌐</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
// }

// main().catch(console.error);

