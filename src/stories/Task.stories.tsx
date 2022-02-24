import React from 'react';
import {Task} from "../Task";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Task Stories',
    component: Task,
}

const removeCallback = action('Remove Button inside Task clicked')
const changeStatusCallback = action('Status changed inside task')
const changeTitleCallback = action('Title changed inside task')

export const TaskBaseExample = (props: any) => {
    return (
        <div>
            <Task
                task={{id: '1', title: "CSS", isDone: true}}
                removeTask={removeCallback}
                changeTaskStatus={changeStatusCallback}
                changeTaskTitle={changeTitleCallback}
                todolistId={"todolistId1"}
            />

            <Task
                task={{id: '2', title: "JS", isDone: false}}
                removeTask={removeCallback}
                changeTaskStatus={changeStatusCallback}
                changeTaskTitle={changeTitleCallback}
                todolistId={"todolistId2"}
            />
        </div>
    )
}
