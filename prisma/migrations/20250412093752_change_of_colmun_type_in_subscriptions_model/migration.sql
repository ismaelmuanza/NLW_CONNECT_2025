/*
  Warnings:

  - Made the column `name` on table `subscriptions` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_subscriptions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_subscriptions" ("created_at", "email", "id", "name") SELECT "created_at", "email", "id", "name" FROM "subscriptions";
DROP TABLE "subscriptions";
ALTER TABLE "new_subscriptions" RENAME TO "subscriptions";
CREATE UNIQUE INDEX "subscriptions_email_key" ON "subscriptions"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
