import { useState } from "react"
import { Form, Label, FormGroup, Input, Button, FormFeedback, } from "reactstrap"
import { BACKEND_URL } from "../../consts"
import { useNavigate } from "react-router-dom";
import "./styles.css"
import { IsRequired, MinLength3, MaxLength20, MinLength6 } from "../../helpers/validation";


export const Login = () => {
    const navigate = useNavigate()
    const [wrongPassword , setWrongPassword] = useState(false)
    const [inputsData, setInputsData] = useState({
        email: {
            value: "",
            error: undefined,
            validations: [IsRequired, MinLength3, MaxLength20]

        },
        password: {
            value: "",
            error: undefined,
            validations: [IsRequired, MinLength6, MaxLength20]

        },
    });

    const handleChange = (e) => {
        e.preventDefault();

        const { value, name } = e.target;
        const { validations } = inputsData[name]
        let error
        for (let i = 0; i < validations.length; i++) {
            let validation = validations[i]
            const errorMessage = validation(value)
            if (errorMessage) {
                error = errorMessage;
                break
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

    const handleSubmit = (e) => {
        e.preventDefault();

        const {
            email: { value: email },
            password: { value: password },
        } = inputsData;

        const formData = {
            email,
            password,
        };


        fetch(`${BACKEND_URL}/user/sign-in`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then((data) => {
                if (data.errors || data.error) {
                    throw data.error
                }
                if (data.status === 403) {
                    setWrongPassword(true)
                }
                else {
                    const { jwt, refreshToken } = data;
                    localStorage.setItem('token', JSON.stringify(jwt))
                    localStorage.setItem('refreshToken', JSON.stringify(refreshToken))
                    navigate("/project")
                }
            })
            .catch((error) => {
                console.log("🚀 ~ error", error)
            })
    }

    return (<div className="login-page-wrapper">
        <div className="form-wrapper">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="emailId">
                        Email
                    </Label>
                    <Input style={{ width: "250px" }}
                        id="emailId"
                        name="email"
                        onChange={handleChange}
                        invalid={!!inputsData.email.error}
                    />
                    {!!inputsData.email.error && (
                        <FormFeedback>{inputsData.email.error}</FormFeedback>
                    )}
                </FormGroup>

                <FormGroup>
                    <Label for="passwordId">
                        Password
                    </Label>
                    <Input style={{ width: "250px" }}
                        id="passwordId" name="password"
                        onChange={handleChange}
                        type={"password"}
                        invalid={!!inputsData.password.error}
                    />
                    {!!inputsData.password.error && (
                        <FormFeedback>{inputsData.password.error}</FormFeedback>
                    )} 
                    {!!wrongPassword && (
                        <p style={{color:"red"}}>Password Is Wrong</p>
                    )}
                </FormGroup>
                <Button disabled = {
                    !!inputsData.email.error || 
                    inputsData.email.value === "" ||
                    !!inputsData.password.error ||
                    inputsData.password.value === ""
                }>
                    Login
                </Button>
            </Form>
        </div>
    </div>
    )
}