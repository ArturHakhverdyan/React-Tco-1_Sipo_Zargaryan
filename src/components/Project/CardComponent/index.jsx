import { memo,  useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";
import { EditModal } from "../../../shared/EditTaskModal";

export const CardComponent = memo(({ todo,
  setTasks,
  tasks,
  DeleteRequest,
  taskStatusChangeHendler,
}) => {

  const { status, description, title, _id } = todo
  const nextStatus = status === "active" ? "done" : "active"
  const [showEditModal, setShowEditModal] = useState(false);
  const [editableState, setEditableState] = useState(null);

  const editOpenHandler = () => {
    if (showEditModal) {
      return setShowEditModal(false)
    } else {
      setShowEditModal(true)
    }
    setEditableState(todo)
  }

  return (
    <Card style={{ marginBottom: "15px" }}>
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/318/180"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          {title}
        </CardTitle>

        <CardText>
          {description}
        </CardText>

        <Button onClick={() => {
          taskStatusChangeHendler(_id, nextStatus)

        }}
        color = {status === "done" ? "danger" : "success"}>
          {status}
        </Button>

        <Button color='danger' style={{ marginLeft: "40px" }} onClick={() => DeleteRequest(_id,)} >Delete</Button>
        <Button  color='warning' style={{ marginLeft: "40px" }} onClick={editOpenHandler} > Edit </Button>
        {showEditModal && (<EditModal
          editableState={editableState}
          onClose={() => {
            setShowEditModal(false)
            setEditableState(null)
          }}
          setTasks={setTasks}

        />)}

      </CardBody>
    </Card>
  );
})
