import { Student } from "./Student";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { useNavigate } from "react-router-dom";

export function StudentList({ studentlist, setStudentList }) {
  const navigate = useNavigate();
  const removestudent = (id) => {
    const newstudent = studentlist.filter((l) => l.id !== id);
    setStudentList(newstudent);
  };
  return (
    <div className="list">
      {studentlist.map((stu) => (
        <Student
          id={stu.id}
          student={stu}
          deletestudent={
            <IconButton color="error" onClick={() => removestudent(stu.id)}>
              <DeleteIcon />
            </IconButton>
          }
          editstudent={
            <IconButton
              color="primary"
              onClick={() => navigate(`/student/edit/${stu.id}`)}
            >
              <ModeEditOutlineIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}
