const usersControllers = require("./users.controllers");

const getAllusers = (req, res) => {
    const data = usersControllers.findAllUsers();
    res.status(200).json(data);
};


const getUserById = (req, res) => {
    const id = req.params.id;
    const data = usersControllers.findUserById(id);
  
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Invalid ID" });
    }
};
  

const postNewUser = (req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body;
    if (first_name) {
      const data = usersControllers.createNewUser({ first_name, last_name, email, password, birthday });
      res.status(201).json(data);
    } else {
      res.status(400).json({
              message: "Invalid Data",
              fields: { 
                first_name: "Kelvin*", 
                last_name: "Peralta*", 
                email: "kelvin.p@academlo.com*",
                password: "root123",
                birthday: "13/04/2000"
              },
          });
    }
};

module.exports = {
    getAllusers,
    getUserById,
    postNewUser
}