import app from "./app.js"
import dotenv from 'dotenv';

dotenv.config();


//Makes sure that the backenc actually starts a server
const PORT = process.env.PORT || 5000;

console.log("USING SERVER FILE: backend/src/server.js");
console.log("PORT FROM ENV:", process.env.PORT);
console.log("FINAL PORT:", PORT);

app.listen(PORT, () => {
    console.log(`Backend is listening on http://localhost:${PORT}`);
});