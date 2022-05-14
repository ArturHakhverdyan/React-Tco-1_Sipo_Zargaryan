import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";

export const CardComponent = ({ todo: { status, todo_at, description, title, _id }, setTasks, tasks }) => {

  const DeleteRequest = () => {
    fetch(`http://localhost:3001/task/${_id}`, {
      method: "DELETE",
    })
      .then(res => {

        setTasks(tasks.filter(task => {
          return task._id !== _id
        }))
      })

  }
  return (
    <Card style={{ marginBottom: "40px" }}>
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/318/180"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{description}</CardText>
        <Button>Done</Button>
        <Button style={{ marginLeft: "80px" }} onClick={DeleteRequest} >Delete</Button>

      </CardBody>
    </Card>
  );
};
