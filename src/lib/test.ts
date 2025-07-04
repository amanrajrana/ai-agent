import bcrypt from "bcrypt";

bcrypt
  .hash("hacker@123", 10)
  .then((hash) => {
    console.log("Hashed password:", hash);
  })
  .catch((error) => {
    console.error("Error hashing password:", error);
  });
