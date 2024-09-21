import User from "../Models/userSchema.js";

//create

export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res
      .status(200)
      .json({ message: "User Created Successfully", result: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "User Creation Failed Due To An Internal Server Error",
    });
  }
};

//getAll

export const fetchData = async (req, res) => {
  try {
    const getData = await User.find();
    res
      .status(200)
      .json({ message: "All Data Fetch Successfully", result: getData });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "User fetch Failed Due To An Internal Server Error",
    });
  }
};

// update

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;

    console.log(id);

    const modifyUser = await User.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        imgUrl: req.body.imgUrl,
      },
      { new: true }
    );
    if (!modifyUser) {
      return res.status(404).json({ message: "User not found" }); // Handle case where user does not exist
    }
    res
      .status(200)
      .json({ message: "User Updated Successfully", result: modifyUser });
  } catch (error) {
    console.error("Error updating user:", error); // More specific error logging
    res.status(500).json({
      message: "User updated data failed due to an internal server error",
    });
  }
};

//delete

export const deleteData = async (req, res) => {
  try {
    const id = req.params.id; // Access the id parameter correctly
    console.log(id);

    // Use findByIdAndDelete or findByIdAndRemove to delete the document
    const removeUser = await User.findByIdAndDelete(id);

    if (!removeUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "User Deleted Successfully", result: removeUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "User data failed to delete due to an internal server error",
    });
  }
};
