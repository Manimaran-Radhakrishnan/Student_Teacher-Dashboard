import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export function AddStudent({ studentlist, setStudentList }) {
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
        label="Reg-no"
        variant="outlined"
        placeholder="Reg-no"
        onChange={(eve) => setRegno(eve.target.value)}
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

      <Button
        color="secondary"
        variant="contained"
        type="submit"
        onClick={() => {
          const newstudent = {
            image: image,
            name: name,
            age: age,
            regno: regno,
            email: email,
            phone: phone,
          };

          setStudentList([...studentlist, newstudent]);
          console.log(newstudent);
          navigate("/studentlist");
        }}
      >
        Add Student
      </Button>
    </div>
  );
}
