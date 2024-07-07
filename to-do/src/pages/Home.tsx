import React, { FC } from "react";

const Home: FC = () => {
    return (
        <div className="home">
            <div className="header">
                <input type="text" placeholder="Add Task...." />
                <input type="number" placeholder="Deadline (In days)...." />
                <button>Submit</button>
                <button>Delete Task</button>
            </div>
            <div className="todolist"></div>
        </div>
    );
}

export default Home