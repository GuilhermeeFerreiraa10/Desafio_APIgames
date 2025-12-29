-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "multiplayer" BOOLEAN NOT NULL DEFAULT true,
    "size" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "platform" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "releaseDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "isALive" BOOLEAN NOT NULL DEFAULT true,
    "forcePower" INTEGER NOT NULL,
    "intelligence" INTEGER NOT NULL,
    "agility" TEXT NOT NULL,
    "magic" TEXT NOT NULL,
    "guns" TEXT NOT NULL,
    "isDLC" BOOLEAN NOT NULL DEFAULT false,
    "gameId" TEXT NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
