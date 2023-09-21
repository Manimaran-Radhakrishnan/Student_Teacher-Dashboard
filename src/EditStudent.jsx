import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export function EditStudent({ studentlist }) {
  const { id } = useParams();
  const stu = studentlist[id];
  console.log(stu);

  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [regno, setRegno] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="Add">
      <TextField
        name="image"
        id="outlined-basic"
        label="Image"
        variant="outlined"
        placeholder="Image"
        value={stu.image}
        onChange={(eve) => setImage(eve.target.value)}
      />
      <TextField
        name="name"
        id="outlined-basic"
        label="Name"
        variant="outlined"
        placeholder="Name"
        value={stu.name}
        onChange={(eve) => setName(eve.target.value)}
      />
      <TextField
        name="age"
        id="outlined-basic"
        label="Age"
        variant="outlined"
        placeholder="Age"
        value={stu.age}
        onChange={(eve) => setAge(eve.target.value)}
      />
      <TextField
        name="regno"
        id="outlined-basic"
        label="Reg-no"
        variant="outlined"
        placeholder="Reg-no"
        value={stu.regno}
        onChange={(eve) => setRegno(eve.target.value)}
      />
      <TextField
        name="email"
        id="outlined-basic"
        label="Email"
        variant="outlined"
        placeholder="Email"
        value={stu.email}
        onChange={(eve) => setEmail(eve.target.value)}
      />
      <TextField
        name="phone"
        id="outlined-basic"
        label="Phone"
        variant="outlined"
        placeholder="Phone"
        value={stu.phone}
        onChange={(eve) => setPhone(eve.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => {
          const newstudent = {
            image: image,
            name: name,
            age: age,
            regno: regno,
            email: email,
            phone: phone,
          };

          // setStudentList([...studentlist,newstudent])
          console.log(newstudent);
          navigate("/studentlist");
        }}
      >
        Edit Student
      </Button>
    </div>
  );
}
