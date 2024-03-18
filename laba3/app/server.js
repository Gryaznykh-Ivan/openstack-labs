const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/create-vm", async (req, res) => {
  try {
    const authResponse = await axios.post(
      "http://127.0.0.1:5000/v3/auth/tokens",
      {
        auth: {
          identity: {
            methods: ["password"],
            password: {
              user: {
                name: "admin",
                domain: {
                  name: "Default",
                },
                password: "d5dff7ca2f7a4f72",
              },
            },
          },
          scope: {
            project: {
              name: "admin",
              domain: {
                id: "default",
              },
            },
          },
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const authToken = authResponse.headers["x-subject-token"];
    console.log(authToken);

    const vmResponse = await axios.post(
      "http://127.0.0.1:8774/v2.1/servers",
      {
        server: {
          name: req.body.name,
          imageRef: req.body.imageRef,
          flavorRef: req.body.flavorRef,
          networks: req.body.networks,
        },
      },
      {
        headers: {
          "X-Auth-Token": authToken,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(vmResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const PORT = 3300;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
