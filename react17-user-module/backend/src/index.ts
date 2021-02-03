import express from "express";
import cors from "cors";
import { DummyDataGenerator } from "./dummyData";

const port = 8091;

const app: express.Application = express();

app.use(cors());

const users = new DummyDataGenerator().generateUsers(10);

app.get("/api/users/:id", (req: any, res: any) => {
  console.log("req: ", req.params.id);
  if (req.params.id) {
    const user = users.find((u) => u.id === req.params.id);
    console.log("user: ", user);
    if (user) {
      res.send(user);
      return;
    }
  }
  res.status(404).send();
});

app.get("/api/users", (req: any, res: any) => {
  console.log("request requested")
  res.send(users);
});

app.use("/", express.static("static"));

app.listen(port, () => {
  console.log("react-user-application started on port: " + port);
});
