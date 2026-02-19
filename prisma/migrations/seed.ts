
 import prisma from "@prisma/client"


async function seed(){
     await prisma.user.createMany({
        data :[
            {name:"doremon" , email:"fuck@gmail.com"}

        ]

     })
}
seed()