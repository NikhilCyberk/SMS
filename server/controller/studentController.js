import { Student } from "../models/studentSchema.js";
import { Admin } from "../models/adminModel.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

export const adminAddStuudent = async (req, res) => {
  console.log(req.body);

  const student = new Student({
    school: req.body.adminID,
    password: req.body.password,
    rollNum: req.body.rollNum,
    sclassName: req.body.sclassName,
    name: req.body.name,
    roll: req.body.roll,
  });

  try{
    const existingStudent = await Student.findOne({
          rollNum: req.body.rollNum,
          school: req.body.adminID,
          sclassName: req.body.sclassName,
    });
    if(existingStudent){
      res.send({ message: "Roll Number already exists" });
    } else {
      const result = await student.save()
      console.log(result);
      // return res.send(result);
      return res.send({ message: "Student added successfully" });
    }
  } catch(err){
    res.status(500).json(err);
  }


  // let result = await student.save();
  // return res.send(result);

  // return res.json({ message: "hello from server" });
  // try {
  // const salt = await bcrypt.genSalt(10);
  // const hashedPass = await bcrypt.hash(req.body.password, salt);
  //   const existingStudent = await Student.findOne({
  //     rollNum: req.body.rollNum,
  //     school: req.body.adminID,
  //     sclassName: req.body.sclassName,
  //   });
  //   if (existingStudent) {
  //     res.send({ message: "Roll Number already exists" });
  // //   } else {
  // const student = new Student({
  //   ...req.body,
  //   school: req.body.adminID,
  //   // password: hashedPass,
  //   password:req.body.password ,
  // });
  // let result = await student.save();
  // result.password = undefined;
  // res.send(result);
  // //   }
  // } catch (err) {
  //   res.status(500).json(err);
  // }
};
