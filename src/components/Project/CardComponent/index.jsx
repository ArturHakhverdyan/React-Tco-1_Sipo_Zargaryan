import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";

export const CardComponent = ({
  todo: { title, description, todo_at, status },
}) => {
  // const { title, description, todo_at, status } = props.todo;

  return (
    <Card style = {{marginBottom:"40px"}}>
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
      </CardBody>
    </Card>
  );
};
