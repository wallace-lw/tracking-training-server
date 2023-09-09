/*
  Warnings:

  - You are about to drop the column `created_at` on the `workouts` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `workouts` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `workouts` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `exercises` table. All the data in the column will be lost.
  - You are about to drop the column `workout_id` on the `exercises` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `workouts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `workouts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workoutId` to the `exercises` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_workouts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "workouts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_workouts" ("id", "title", "type") SELECT "id", "title", "type" FROM "workouts";
DROP TABLE "workouts";
ALTER TABLE "new_workouts" RENAME TO "workouts";
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_users" ("id", "password", "username") SELECT "id", "password", "username" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
CREATE TABLE "new_exercises" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "reps" TEXT NOT NULL,
    "workoutId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "exercises_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "workouts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_exercises" ("id", "name", "reps") SELECT "id", "name", "reps" FROM "exercises";
DROP TABLE "exercises";
ALTER TABLE "new_exercises" RENAME TO "exercises";
CREATE UNIQUE INDEX "exercises_name_key" ON "exercises"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
