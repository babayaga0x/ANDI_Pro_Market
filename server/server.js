const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/images", express.static("public/images"));

const JWT_SECRET = "secret_for_demo";

app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Fill in all fields" });
  }

  try {
    const password_hash = await bcrypt.hash(password, 10);

    const [result] = await db.query(
      "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
      [name, email, password_hash],
    );

    res.json({ id: result.insertId, name, email });
  } catch (err) {
    res.status(400).json({ error: "Email is already in use" });
  }
});

// endpoint login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Fill in all fields" });
  }

  try {
    const [results] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (results.length === 0) {
      return res.status(400).json({ error: "User not found" });
    }

    const user = results[0];
    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) {
      return res.status(400).json({ error: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user.id, name: user.name, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Login error" });
  }
});

/*MIDDLEWARE*/
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "No token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}

app.get("/api/admin/users", authMiddleware, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Access denied" });
  }

  try {
    const [results] = await db.query("SELECT id, name, email, role FROM users");
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/admin/products", authMiddleware, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Access denied" });
  }

  try {
    const [results] = await db.query("SELECT * FROM products");
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/admin/products/:id", authMiddleware, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Access denied" });
  }

  const { name, description, price } = req.body;

  try {
    await db.query(
      "UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?",
      [name, description, price, req.params.id],
    );

    res.json({ success: true });
  } catch (err) {
    console.error("Product update error:", err);
    res.status(500).json({ error: "Product update error" });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM products");
    res.json(rows);
  } catch (err) {
    console.error("Error /api/products:", err);
    res.status(500).json({ error: "Product update error" });
  }
});

app.get("/api/reviews", async (req, res) => {
  try {
    const [rev] = await db.query("SELECT * FROM reviews");
    //res.json(rev);
    res.status(200).json(rev);
  } catch (err) {
    console.error("Ошибка /api/reviews:", err);
    res.sendStatus(500).json({ error: "Error loading reviews" });
  }
});

app.post("/api/reviews", async (req, res) => {
  try {
    const { name, text } = req.body;

    if (!name || !text) {
      return res.status(400).json({ error: "Fill in all fields" });
    }

    const [result] = await db.query(
      "INSERT INTO reviews (name, text) VALUES (?, ?)",
      [name, text],
    );

    res.status(201).json({
      id: result.insertId,
      name,
      text,
      created_at: new Date(),
    });
  } catch (err) {
    console.error("Ошибка POST /api/reviews:", err);
    res.status(500).json({ error: "Error adding review" });
  }
});

app.get("/api/admin/reviews", authMiddleware, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Access denied" });
  }

  try {
    const [rows] = await db.query(
      "SELECT * FROM reviews ORDER BY created_at DESC",
    );
    res.json(rows);
  } catch (err) {
    console.error("Ошибка /api/admin/reviews:", err);
    res.status(500).json({ error: "Error loading reviews" });
  }
});

app.delete("/api/admin/reviews/:id", authMiddleware, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Access denied" });
  }

  try {
    await db.query("DELETE FROM reviews WHERE id = ?", [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    console.error("Ошибка DELETE /api/admin/reviews/:id:", err);
    res.status(500).json({ error: "Error loading reviews" });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
