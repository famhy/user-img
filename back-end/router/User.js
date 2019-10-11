const express = require("express");

const router = express.Router();
const user = require("../module/User");

// load input validation

router.post("/add-user", (req, res) => {
  //   let newuser = req.body;
  //   db.collection("usersusers").insertOne(newuser, (err, data) => {
  //     if (err) res.send("Can't add new user");
  //     else res.send("New user added");
  //   });

  // check Validation

  const userFields = {};
  if (req.body.name) userFields.name = req.body.name;
  if (req.body.surname) userFields.surname = req.body.surname;
  if (req.body.birthY) userFields.birthY = req.body.birthY;
  if (req.body.birthP) userFields.birthP = req.body.birthP;

  console.log("user", userFields);
  console.log("req.body", req.body);
  const newUser = new user(userFields);

      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err, "hhh"));
    });

    router.get('/users', (req, res, next) => {
      user.find()
        .exec()
        .then((docs) => {
          console.log(docs);
         
          res.status(200).json(docs);
         
        })
        .catch((err) => {
          console.log(err+'h5');
          res.status(500).json({
            error: `${err}h5`,
          });
        });
    });
router.put("/modify-user/:id", (req, res) => {

  user
    .findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
      { new: true }
    )
    .then(updated => res.json(updated))
    .catch(err => console.log(err));
});

router.delete("/user/:id", (req, res) => {
  user
    .findOneAndDelete({ _id: req.params.id })
    .then(deleted => res.json({ message: "done" }))
    .catch(err => console.log(err));
});


router.put("/user/:id", (req, res) => {
 
  user
    .findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
      { new: true }
    )
    .then(updated => res.json(updated))
    .catch(err => console.log(err));
});
module.exports = router;
