import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
   console.log(await prisma.user.count());
}

(async() => {
    try {
        await main();
        await prisma.$disconnect();
    } catch (e) {
        console.error(e);
    }
})();

