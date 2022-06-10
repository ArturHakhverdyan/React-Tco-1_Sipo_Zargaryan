
import {  useState } from "react"
import { connect } from "react-redux";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button, Label, Input, FormGroup, Form, FormFeedback } from "reactstrap"
import { IsRequired, MaxLength20, MinLength3 } from "../../helpers/validation";
import {  editTaskThunk } from "../../redux/action/task-action";

const EditTaskFormConected = ({ editableState,  onSubmitCallback,editTask }) => {
    const [editTaskValue, setEditTaskValue] = useState({
        title: {
            value: editableState.title,
            error: undefined,
            validations: [IsRequired, MinLength3, MaxLength20]
        },
        description: {
            value: editableState.description,
            error: undefined,
            validations: [IsRequired, MinLength3, MaxLength20]
        }
    })

    const OnEdit = (e) => {
        e.preventDefault()
        const { title: { value: title }, description: { value: description } } = editTaskValue

        const formEdit = {
            title,
            description
        }

        editTask(editableState,formEdit,onSubmitCallback)
         
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        const { validations } = editTaskValue[name];

        let error;

        for (let i = 0; i < validations.length; i++) {
            const validation = validations[i]
            const errorMessage = validation(value)

            if (errorMessage) {
                error = errorMessage;
                break;
            }
        }

        setEditTaskValue((prev) => {
            return {
                ...prev,
                [name]: {
                    ...prev[name],
                    value,
                    error
                }
            }

        })
    }
    return (
        <Form onSubmit={OnEdit}>
            <FormGroup>
                <Label for="titleId">
                    Title
                </Label>
                <Input id="titleId"
                    name="title"
                    placeholder="task Title"
                    type="text"
                    onChange={handleChange}
                    value={editTaskValue.title.value}
                    invalid={!!editTaskValue.title.error}
                /> {!!editTaskValue.title.error && (
                    <FormFeedback>{editTaskValue.title.error}</FormFeedback>
                )}
                
            </FormGroup>

            <FormGroup>
                <Label for="descriptionId">
                    Description
                </Label>
                <Input id="descriptionId"
                    name="description"
                    placeholder="task Description"
                    type="text"
                    onChange={handleChange}
                    value={editTaskValue.description.value} 
                    invalid={!!editTaskValue.description.error}/>
                     {!!editTaskValue.title.error && (
                    <FormFeedback>{editTaskValue.title.error}</FormFeedback>
                )}
            </FormGroup>

            <Button  onClick={OnEdit}>
                Edit
            </Button>

        </Form>
    )
}


export const EditTaskForm = connect(null, {
    editTask: editTaskThunk
  })(EditTaskFormConected)
  

export const EditModal = ({ onClose, editableState,  }) => {

    return (
        <Modal isOpen={true}
            toggle={onClose}>
            <ModalHeader toggle={onClose}> Modal title </ModalHeader>
            <ModalBody>
                <EditTaskForm editableState={editableState}
                    onSubmitCallback={onClose} />
            </ModalBody>
            <ModalFooter>
                <Button
                    color="primary"
                    onClick={onClose}
                >
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}