/*
  Warnings:

  - You are about to drop the column `muscle` on the `workouts` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `workouts` table. All the data in the column will be lost.
  - You are about to drop the column `workoutId` on the `exercises` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_workouts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "user_id" TEXT,
    CONSTRAINT "workouts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_workouts" ("created_at", "id", "title", "updated_at") SELECT "created_at", "id", "title", "updated_at" FROM "workouts";
DROP TABLE "workouts";
ALTER TABLE "new_workouts" RENAME TO "workouts";
CREATE TABLE "new_exercises" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "reps" TEXT NOT NULL,
    "workout_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "exercises_workout_id_fkey" FOREIGN KEY ("workout_id") REFERENCES "workouts" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_exercises" ("created_at", "id", "name", "reps") SELECT "created_at", "id", "name", "reps" FROM "exercises";
DROP TABLE "exercises";
ALTER TABLE "new_exercises" RENAME TO "exercises";
CREATE UNIQUE INDEX "exercises_name_key" ON "exercises"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
