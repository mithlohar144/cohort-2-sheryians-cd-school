const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const postRoutes = require('./routes/post.routes');
const userRoutes = require('./routes/user.routes');
const app = express();

app.use(express.json());
app.use(cookieParser());
/** require Routes */
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);


app.use("/api/users", userRoutes);

module.exports = app;