# Migration `20200829070339-adds-profile`

This migration has been generated by Andy Allison at 8/29/2020, 8:03:39 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Profile" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"firstName" text   NOT NULL ,
"lastName" text   NOT NULL ,
"email" text   NOT NULL ,
"userId" text   NOT NULL ,
PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200829065105-initial..20200829070339-adds-profile
--- datamodel.dml
+++ datamodel.dml
@@ -1,6 +1,6 @@
 datasource db {
-  url = "***"
+  url = "***"
   provider = "postgresql"
 }
 generator client {
   provider = "prisma-client-js"
@@ -13,8 +13,17 @@
   name      String?
   role      Role     @default(USER)
   posts     Post[]
 }
+model Profile {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  firstName String
+  lastName  String
+  email     String
+  userId    String
+}
+
 model Post {
   id        Int      @id @default(autoincrement())
   createdAt DateTime @default(now())
   updatedAt DateTime @updatedAt
```

