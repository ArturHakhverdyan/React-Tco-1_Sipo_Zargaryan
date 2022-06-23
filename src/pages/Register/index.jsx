import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Button, Form, FormGroup, FormFeedback, Input, Label } from "reactstrap"
import { BACKEND_URL } from "../../consts";
import { IsRequired, MaxLength20, MinLength3 } from "../../helpers/validation";
import './styles.css'

export const Registration = () => {
    const navigate = useNavigate()

    const [inputsData, setInputsData] = useState({
        name: {
            value: "",
            error: undefined,
            validations: [IsRequired, MinLength3, MaxLength20]
        },
        surname: {
            value: "",
            error: undefined,
            validations: [IsRequired, MinLength3, MaxLength20]
        },
        email: {
            value: "",
            error: undefined,
            validations: [IsRequired, MinLength3, MaxLength20]
        },
        password: {
            value: "",
            error: undefined,
            validations: [IsRequired, MinLength3, MaxLength20]
        },
        confirmPassword: {
            value: "",
            error: undefined,
            validations: [IsRequired, MinLength3, MaxLength20]
        },
    });

    const onRegistrationSubmit = (e) => {
        e.preventDefault()
        const {
            name: { value: name },
            surname: { value: surname },
            email: { value: email },
            password: { value: password },
            confirmPassword: { value: confirmPassword },
        } = inputsData;


        const formData = {
            name,
            surname,
            email,
            password,
            confirmPassword
        }

        fetch(`${BACKEND_URL}/user`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(() => {
                navigate('/login')
            })
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        const validations = inputsData[name].validations;

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

                },
            };
        });
    };

    return (
        <Form onSubmit={onRegistrationSubmit} >
            <FormGroup>
                <Label for="nameId">
                    Name
                </Label>
                <Input id="nameId"
                    name="name"
                    onChange={handleChange}
                    invalid={!!inputsData.name.error}
                    style={{ width: "250px" }} />
                     {!!inputsData.name.error && (
                    <FormFeedback>{inputsData.name.error}</FormFeedback>
                )}
            </FormGroup>

            <FormGroup>
                <Label for="surnameId">
                    Surname
                </Label>
                <Input id="surnameId"
                    name="surname"
                    onChange={handleChange}
                    invalid={!!inputsData.surname.error}
                    style={{ width: "250px" }} />
                     {!!inputsData.surname.error && (
                    <FormFeedback>{inputsData.surname.error}</FormFeedback>
                )}
            </FormGroup>

            <FormGroup>
                <Label for="emailId">
                    Email
                </Label>
                <Input id="emailId"
                    name="email"
                    onChange={handleChange}
                    
                    invalid={!!inputsData.email.error} 
                    style={{ width: "250px" }} />
                     {!!inputsData.email.error && (
                    <FormFeedback>{inputsData.email.error}</FormFeedback>
                )}
            </FormGroup>

            <FormGroup>
                <Label for="passwordId">
                    Password
                </Label>
                <Input id="passwordId"
                    name="password"
                    onChange={handleChange}
                    invalid={!!inputsData.password.error}
                    style={{ width: "250px" }} />
                {!!inputsData.password.error && (
                    <FormFeedback>{inputsData.password.error}</FormFeedback>
                )}
            </FormGroup>

            <FormGroup>
                <Label for="confirmId">
                    Confirm Password
                </Label>
                <Input id="confirmId"
                    name="confirmPassword"
                    onChange={handleChange}
                    invalid={!!inputsData.confirmPassword.error}
                    style={{ width: "250px" }} />
                     {!!inputsData.confirmPassword.error && (
                    <FormFeedback>{inputsData.confirmPassword.error}</FormFeedback>
                )}
            </FormGroup>

            <Button
                disabled={
                    !!inputsData.name.error ||
                    inputsData.name.value === "" ||
                    !!inputsData.surname.error ||
                    inputsData.surname.value === "" ||
                    !!inputsData.email.error ||
                    inputsData.email.value === "" ||
                    !!inputsData.password.error ||
                    inputsData.password.value === "" ||
                    !!inputsData.confirmPassword.error ||
                    inputsData.confirmPassword.value === ""}
            >
                Register</Button>
        </Form>

    )
}