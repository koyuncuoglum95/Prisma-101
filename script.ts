import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here

  /* Create a new User record
  const user = await prisma.user.create({
    data: {
        name: 'Frank',
        email: 'FrankJohnson@prisma.io'
    },
  })
  console.log(user);
  */


  /* Retrieve all User records
  const users = await prisma.user.findMany();
  console.log(users);
 */


  /*  Explore relation queries with Prisma
  const user = await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@prisma.io',
      posts: {
        create: {
          title: 'Hello Bitches',
        },
      },
    },
  })
  console.log(user)
  */



  /*
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(usersWithPosts, { depth: null })
*/

}  



main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })