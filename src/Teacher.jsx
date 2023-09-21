import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export function Teacher({ teacher, deleteteacher, editteacher }) {
  return (
    <Card className="card">
      <img className="img" src={teacher.image} />
      <CardContent className="font">
        <p>
          NAME : <span className="span">{teacher.name}</span>
        </p>
        <p>
          AGE :<span className="span">{teacher.age}</span>{" "}
        </p>
        <p>
          EMAIL : <span className="span">{teacher.email}</span>
        </p>
        <p>
          PH_NO :<span className="span">{teacher.phone}</span>{" "}
        </p>
        <p>
          DEGREE : <span className="span">{teacher.deg}</span>
        </p>
        {deleteteacher}
        {editteacher}
      </CardContent>
    </Card>
  );
}
