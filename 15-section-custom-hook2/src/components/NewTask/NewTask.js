import {useCallback, useState} from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const [taskTextaa, setTaskTextaa] = useState(null);

  const createTask = useCallback((taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = {id: generatedId, text: taskTextaa};

    props.onAddTask(createdTask);
  }, [props, taskTextaa]);

  const {isLoading, error, sendRequest: sendTaskRequest} = useHttp(createTask.bind(null, props.taskText));

  const enterTaskHandler = async (taskText) => {
    setTaskTextaa(taskText);
    sendTaskRequest({
      url: 'https://react-http-max-practice-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {text: taskText}
    });
  };

    return (
      <Section>
        <TaskForm onEnterTask={enterTaskHandler} loading={isLoading}/>
        {error && <p>{error}</p>}
      </Section>
    );
  };

export default NewTask;
