require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const invoiceRoutes = require("./routes/invoicePost");
const invoiceGetRoute =require("./routes/invoiceGet");
const invoiceUpdateRoute = require("./routes/invoiceUpdate");
const invoiceDelete =require("./routes/invoiceDelete");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/createInvoice", invoiceRoutes);
app.use("/api/getInvoices", invoiceGetRoute);
app.use("/api/updateInvoice/:id",invoiceUpdateRoute);
app.use('/api/delete-Invoice/:id',invoiceDelete);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));