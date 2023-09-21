import { Teacher } from "./Teacher";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { useNavigate } from "react-router-dom";

export function TeacherList({ teacherlist, setTeacherList }) {
  const navigate = useNavigate();
  const removeteacher = (id) => {
    const newteacher = teacherlist.filter((l) => l.id !== id);
    setTeacherList(newteacher);
  };
  return (
    <div className="list">
      {teacherlist.map((tea) => (
        <Teacher
          id={tea.id}
          teacher={tea}
          deleteteacher={
            <IconButton color="error" onClick={() => removeteacher(tea.id)}>
              <DeleteIcon />
            </IconButton>
          }
          editteacher={
            <IconButton
              color="primary"
              onClick={() => navigate(`/teacher/edit/${tea.id}`)}
            >
              <ModeEditOutlineIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}
