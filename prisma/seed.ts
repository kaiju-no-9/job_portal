// the menthod for seed cong]fig has changed inly chages ane done now are at prisma config.ts
import {prisma} from "../client.ts"
import "dotenv/config";

async function main() {
  await prisma.user.createMany({
    data: [
      { name: "Doremon", email: "doremon@example.com" },
      { name: "Nobita Nobi", email: "nobita@example.com" },
      { name: "Shizuka Minamoto", email: "shizuka@example.com" },
      { name: "Takeshi Goda (Gian)", email: "gian@example.com" },
      { name: "Suneo Honekawa", email: "suneo@example.com" },
      { name: "Dekisugi Hidetoshi", email: "dekisugi@example.com" },
      { name: "Dorami", email: "dorami@example.com" },
      { name: "Hidetoshi Dekisugi", email: "hidetoshi@example.com" },
      { name: "Tamako Nobi", email: "tamako@example.com" },
      { name: "Nobisuke Nobi", email: "nobisuke@example.com" },
    ],
    skipDuplicates: true, // prevents crash if email already exists
  });
}

main()
  .then(() => console.log("Done!"))
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect())