
// import jwt from "jsonwebtoken"

// export const auth = (request, response, next) => {

//    try {
//     const token = request.header("x-auth-token");
//     console.log("token", token);
//     jwt.verify(token, process.env.SECRET_KEY);
//     next();
//    } catch (error) {
//     response.status(401).send({ message : error.message })
//    }

// }

// ------------------------------------------------------------------------------------------------------------------------------------------------- //
// 6
// Request One more Adding roleId request <-------- This is useful for RoleID wise Delete 
// Next go to index.js

import jwt from "jsonwebtoken"

export const auth = (request, response, next) => {

   try {
    const token = request.header("x-auth-token");

    const roleId = request.header("roleId")
   request.roleId = roleId

    console.log("token", token);
    jwt.verify(token, process.env.SECRET_KEY);
    next();
   } catch (error) {
    response.status(401).send({ message : error.message })
   }

}