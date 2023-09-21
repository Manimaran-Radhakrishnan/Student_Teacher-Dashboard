import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export function Student({ student, deletestudent, editstudent }) {
  return (
    <Card className="card">
      <img className="img" src={student.image} />
      <CardContent className="font">
        <p>
          Name : <span className="span">{student.name}</span>
        </p>
        <p>
          Reg-No :<span className="span">{student.regno}</span>{" "}
        </p>
        <p>
          Age :<span className="span">{student.age}</span>{" "}
        </p>
        <p>
          Email : <span className="span">{student.email}</span>
        </p>
        <p>
          Mobile_No :<span className="span">{student.phone}</span>{" "}
        </p>
        {deletestudent}
        {editstudent}
      </CardContent>
    </Card>
  );
}
