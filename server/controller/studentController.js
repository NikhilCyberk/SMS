import { Student } from "../models/studentSchema.js";
import bcrypt from "bcrypt";

export const adminAddStuudent = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const existingStudent = await Student.findOne({
      rollNum: req.body.rollNum,
      school: req.body.adminID,
      sclassName: req.body.sclassName,
    });

    if (existingStudent) {
      res.send({ message: "Roll Number already exists" });
    } else {
      const student = new Student({
        ...req.body,
        school: req.body.adminID,
        password: hashedPass,
      });

      let result = await student.save();

      result.password = undefined;
      res.send(result);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
