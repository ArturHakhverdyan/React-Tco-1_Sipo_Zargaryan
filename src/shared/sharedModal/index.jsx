import {  useState } from "react";
import { Button, Form, FormFeedback, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import { BACKEND_URL } from "../../consts";
import { IsRequired, MaxLength20, MaxLength500, MinLength3 } from "../../helpers/validation";
import * as moment from "moment";
import { DatePick } from "../../components/datePick";
import { connect } from "react-redux";
import { addNewTaskAction } from "../../redux/action/task-action";



const ConnectedAddTaskForm= ({ onSubmitCallback, addNewTask }) => {
    const [inputsData, setInputsData] = useState({
        title: {
            value: "",
            error: undefined,
            validations: [IsRequired, MinLength3, MaxLength20]
        },
        description: {
            value: "",
            error: undefined,
            validations: [IsRequired, MinLength3, MaxLength500]
        }
    })

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const validations = inputsData[name].validations

        let error;

        for (let i = 0; i < validations.length; i++) {
            const validation = validations[i];
            const errorMessage = validation(value);

            if (errorMessage) {
                error = errorMessage;
                break;
            }

        }
        setInputsData((prev) => {
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

    const [startDate, setStartDate] = useState(new Date());

    const onSubmit = (e) => {
        e.preventDefault();
        const { title: { value: title }, description: { value: description } } = inputsData
        const formData = {
            title,
            description,
            date: moment(startDate).format('YYYY-MM-DD')
        }
        fetch(`${BACKEND_URL}/task`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((data) => {
              addNewTask(data)
              onSubmitCallback();
            });
    };
  
    return (
        <Form>
            <FormGroup>
                <Label for="titelID">
                    Task title
                </Label>
                <Input
                    id="titelID"
                    name="title"
                    placeholder=" write task title"
                    type="text"
                    onChange={handleChange}
                    invalid={!!inputsData.title.error}
                />
                {!!inputsData.title.error && (
                    <FormFeedback>{inputsData.title.error}</FormFeedback>
                )}
            </FormGroup>

            <FormGroup>
                <Label for="descriptionId">
                    description
                </Label>
                <Input
                    id="descriptionId"
                    name="description"
                    placeholder="write description "
                    type="text"
                    onChange={handleChange}
                    invalid={!!inputsData.description.error}
                />
                {!!inputsData.description.error && (
                    <FormFeedback>{inputsData.description.error}</FormFeedback>
                )}
            </FormGroup>
            <FormGroup>
                <DatePick startDate = {startDate} setStartDate = {setStartDate}/>
            </FormGroup>
            <Button
                color="primary"
                onClick={onSubmit}
            >
                Add task
            </Button>

        </Form>
    )
}

export const AddTaskForm = connect(null, {
    addNewTask: addNewTaskAction
  })(ConnectedAddTaskForm)

export const SharedModal = ({ onClose,  }) => {
    return (
        <Modal isOpen={true}
            toggle={onClose}>
            <ModalHeader toggle={onClose}> Modal title </ModalHeader>
            <ModalBody>
                < AddTaskForm  onSubmitCallback={onClose} />
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