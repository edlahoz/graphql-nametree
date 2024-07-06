import { prisma } from "../src/db";

const users = ["Austen", "Lauren", "Ed", "Rony", "YaoMing"];

async function main() {
  // Delete all `User` and `Message` records
  await prisma.message.deleteMany({});
  await prisma.user.deleteMany({});
  users.forEach(async (name) => {
    await prisma.user.create({
      data: {
        name: name,
        messages: {
          create: [
            {
              body: `A Note for ${name}`,
            },
            {
              body: `Another note for ${name}`,
            },
          ],
        },
      },
    });
  });
}

main().then(() => {
  console.log("Data seeded...");
});
