import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardImg } from "reactstrap";
import { BACKEND_URL } from "../../consts";
import './styles.css'

export const SingleTask = () => {
    const [singleTask, setSingleTask] = useState(null);

    const params = useParams();
    const taskId = params.taskId;

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${BACKEND_URL}/task/${taskId}`)
            .then((res) => res.json())
            .then((data) => {
                setSingleTask(data);
            });
    }, [taskId]);

    if (!singleTask) {
        return <div>Loading ... </div>;
    }
    return (
        <div className="single-task-card">
            <h1>Title</h1>

            <h3>{singleTask.title}</h3>
            <hr />
            <h3>Descripton</h3>
            <p contentEditable="true">{singleTask.description} </p>
            <button className="single-task-card-btn"
                onClick={() => {
                    navigate(-1);
                }}
            >
                X
            </button>
            <CardImg
                alt="Card image cap"
                src="https://picsum.photos/318/180"
                top
                width="100%"
            />
        </div>
    );
};
