import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export function EditTeacher({ teacherlist }) {
  const { id } = useParams();
  const tea = teacherlist[id];
  console.log(tea);

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
        value={tea.image}
        onChange={(eve) => setImage(eve.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        placeholder="Name"
        value={tea.name}
        onChange={(eve) => setName(eve.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Age"
        variant="outlined"
        placeholder="Age"
        value={tea.age}
        onChange={(eve) => setAge(eve.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        placeholder="Email"
        value={tea.email}
        onChange={(eve) => setEmail(eve.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Phone"
        variant="outlined"
        placeholder="Phone"
        value={tea.phone}
        onChange={(eve) => setPhone(eve.target.value)}
      />

      <Button
        color="success"
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

          // setStudentList([...studentlist,newstudent])
          console.log(newteacher);
          navigate("/teacherlist");
        }}
      >
        Edit Teacher
      </Button>
    </div>
  );
}
