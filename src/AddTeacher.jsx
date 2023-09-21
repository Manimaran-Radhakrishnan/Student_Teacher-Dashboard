import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export function AddTeacher({ teacherlist, setTeacherList }) {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [deg, setDeg] = useState("");
  return (
    <div className="Add">
      <TextField
        id="outlined-basic"
        label="Image"
        variant="outlined"
        placeholder="Image"
        onChange={(eve) => setImage(eve.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        placeholder="Name"
        onChange={(eve) => setName(eve.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Age"
        variant="outlined"
        placeholder="Age"
        onChange={(eve) => setAge(eve.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        placeholder="Email"
        onChange={(eve) => setEmail(eve.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Phone"
        variant="outlined"
        placeholder="Phone"
        onChange={(eve) => setPhone(eve.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Degree"
        variant="outlined"
        placeholder="Degree"
        onChange={(eve) => setDeg(eve.target.value)}
      />
      <Button
        color="warning"
        variant="contained"
        type="submit"
        onClick={() => {
          const newteacher = {
            image: image,
            name: name,
            age: age,
            email: email,
            phone: phone,
            deg: deg,
          };

          setTeacherList([...teacherlist, newteacher]);
          console.log(newteacher);
          navigate("/teacherlist");
        }}
      >
        Add Teacher
      </Button>
    </div>
  );
}
