import { memo, useState } from "react";
import { Link } from "react-router-dom";
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
  DeleteRequest,
  taskStatusChangeHendler,
  deleteCardHendler,
  toggleDeletedTask
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
       <div>
        <input type="checkbox" onClick={() => toggleDeletedTask(_id)} />
      </div>
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/318/180"
        top
        width="100%"
      />
      <CardBody>
        <Link to={`/project/${_id}`}>
          <CardTitle tag="h5">{title}</CardTitle>
        </Link>
        <CardText>
          {description.substring(0, 10)}
        </CardText>

        <Button onClick={() => {
          taskStatusChangeHendler(_id, nextStatus)

        }}
          color={status === "done" ? "danger" : "success"}>
          {status}
        </Button>

        <Button color='danger' style={{ marginLeft: "40px" }} onClick={() => DeleteRequest(_id,)} >Delete</Button>
        <Button color='warning' style={{ marginLeft: "40px" }} onClick={editOpenHandler} > Edit </Button>
        {showEditModal && (<EditModal
          editableState={editableState}
          onClose={() => {
            setShowEditModal(false)
            setEditableState(null)
          }}

        />)}

      </CardBody>
    </Card>
  );
})
