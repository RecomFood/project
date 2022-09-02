const express = require("express");
const app = express();
const port = 3000;

const users = [
  {
    id: "1",
    name: "AAA",
    age: 17,
  },
  {
    id: "2",
    name: "BBB",
    age: 18,
  },
];

app.get("/", (req, res) => {
  res.json(users);
});

app.get("/api/user/:id", (req, res) => {
  const user = users.find((u) => {
    return u.id === req.params.id;
  });

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ errorMessage: "404. There is no user." });
  }
});

app.post("/api/user", (req, res) => {
  users.push(req.body);
  res.json(users);
});

app.listen(port, () => {
  console.log(`server is running. -> http://localhost:${port}`);
});
