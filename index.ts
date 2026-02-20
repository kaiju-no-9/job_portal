import express from "express"
//import { PrismaClient } from "@prisma/client";
import {prisma} from "./client.ts"
const app = express();
//const prisma = new PrismaClient();

app.use(express.json());
// find methods 
// findFirst()-- first  item 
// findFirstandThrow(), findMany, findUnique()
//
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany({
    where : {name:"Doremon"}
  });
  res.json(users);
});

app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({
    data: { name, email },
  });
  res.json(user);
});

app.listen(3000, () => {
  console.log("Job Portal running on http://localhost:3000");
}); 