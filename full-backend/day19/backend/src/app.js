const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const postRoutes = require('./routes/post.routes');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
    
}));
app.use(express.json());
app.use(cookieParser());


app.post("/test-me", (req, res) => {
    res.json({ message: "CORS is actually working!" });
});
/** require Routes */
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);


app.use("/api/users", userRoutes);

module.exports = app;