/*
  Warnings:

  - You are about to alter the column `reps` on the `exercises` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_exercises" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "reps" INTEGER NOT NULL,
    "workoutId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "exercises_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "workouts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_exercises" ("createdAt", "id", "name", "reps", "workoutId") SELECT "createdAt", "id", "name", "reps", "workoutId" FROM "exercises";
DROP TABLE "exercises";
ALTER TABLE "new_exercises" RENAME TO "exercises";
CREATE UNIQUE INDEX "exercises_name_key" ON "exercises"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
