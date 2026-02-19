# plat

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.3. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

How to use Prisma
```bash
bun init -y
```
```bash
bun add -d prisma @types/pg
bun add @prisma/client @prisma/adapter-pg pg
```
```bash
bunx --bun prisma init
```
```bash
docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"
 
```bash
bunx --bun prisma migrate dev --name init
```
Gentrating .....
```bash
bunx --bun prisma generate
```

To check the tabels
docker ps 

```bash
docker exec -it [Container_ID] /bin/bash
```

```bash
psql -h localhost -U postgres
```

```bash
\dt;
```

TO come back
```bash
exit 
```


To stop the container
```bash
docker kill [container_id]
```

..............

cammand to use when working with seed configration(as prisma now do not support auto genrate )

```bash
bunx prisma db seed 
```

