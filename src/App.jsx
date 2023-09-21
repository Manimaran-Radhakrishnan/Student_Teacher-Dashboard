import "./App.css";

import { StudentList } from "./StudentList";
import { Routes, Route, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { Home } from "./Home";

import { AddStudent } from "./AddStudent";
import { AddTeacher } from "./AddTeacher";
import { useState } from "react";
import { EditStudent } from "./EditStudent";
import { EditTeacher } from "./EditTeacher";
import { TeacherList } from "./TeacherList";

export default function App() {
  const [studentlist, setStudentList] = useState([
    {
      id: "0",
      image:
        " https://images.pexels.com/photos/5211478/pexels-photo-5211478.jpeg?cs=srgb&dl=pexels-max-fischer-5211478.jpg&fm=jpg",
      name: "NANDHA",
      age: 15,
      regno: 1000121,
      email: "nandhu@gmail.com",
      phone: 9843123400,
    },
    {
      id: "1",
      image:
        " https://plus.unsplash.com/premium_photo-1661560209755-cedbbea2bdf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FsbCUyMHRvJTIwYWN0aW9ufGVufDB8fDB8fHww&w=1000&q=80",
      name: "MARAN",
      age: 15,
      regno: 1000122,
      email: "maran@gmail.com",
      phone: 9080131796,
    },
    {
      id: "2",
      image:
        "https://as2.ftcdn.net/v2/jpg/04/37/41/33/1000_F_437413332_tZDtcSZtW6WlrqEWA4HFRwIT11JioWtX.jpg",
      name: "MUTHUSELVAM",
      age: 15,
      regno: 1000123,
      email: "ms@gmail.com",
      phone: 9632584107,
    },
  ]);
  const [teacherlist, setTeacherList] = useState([
    {
      id: "0",
      image:
        " https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg ",
      name: "Ms. Sangeetha.R ",
      age: 25,
      email: "sangeetha@gmail.com",
      phone: 9344510236,
      deg: "MSc.,MPhil",
    },
    {
      id: "1",
      image:
        " https://static.vecteezy.com/system/resources/thumbnails/011/573/570/small/the-student-does-the-task-on-the-board-photo.jpg",
      name: "Mr. Ragav kumar.V ",
      age: 27,
      email: "ragav@gmail.com",
      phone: 9244310563,
      deg: "MCA",
    },
    {
      id: "2",
      image: " https://thumbs.dreamstime.com/b/teacher-9707054.jpg",
      name: " Mr. Mahesh",
      age: 28,

      email: "mahesh@gmail.com",
      phone: 8521020023,
      deg: " M.E",
    },
  ]);
  const navigate = useNavigate();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={() => navigate("/")} color="inherit">
            HOME
          </Button>
          <Button onClick={() => navigate("/studentlist")} color="inherit">
            STUDENTS
          </Button>
          <Button onClick={() => navigate("/teacherlist")} color="inherit">
            TEACHERS
          </Button>
          <Button onClick={() => navigate("/addstudents")} color="inherit">
            ADD STUDENT
          </Button>
          <Button onClick={() => navigate("/addteacher")} color="inherit">
            ADD TEACHER
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/studentlist"
          element={
            <StudentList
              studentlist={studentlist}
              setStudentList={setStudentList}
            />
          }
        />
        <Route
          path="/teacherlist"
          element={
            <TeacherList
              teacherlist={teacherlist}
              setTeacherList={setTeacherList}
            />
          }
        />
        <Route
          path="/addstudents"
          element={
            <AddStudent
              studentlist={studentlist}
              setStudentList={setStudentList}
            />
          }
        />
        <Route
          path="/addteacher"
          element={
            <AddTeacher
              teacherlist={teacherlist}
              setTeacherList={setTeacherList}
            />
          }
        />
        <Route
          path="/student/edit/:id"
          element={<EditStudent studentlist={studentlist} />}
        />
        <Route
          path="/teacher/edit/:id"
          element={<EditTeacher teacherlist={teacherlist} />}
        />
      </Routes>
    </div>
  );
}
