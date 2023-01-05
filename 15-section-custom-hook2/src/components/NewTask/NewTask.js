import {useCallback, useState} from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const createTask = useCallback((taskData, text) => {
    // console.log(taskData);
    // console.log(text);
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = {id: generatedId, text: text};

    props.onAddTask(createdTask);
  }, [props]);

  const {isLoading, error, sendRequest: sendTaskRequest} = useHttp(createTask);

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest({
      url: 'https://react-http-max-practice-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {text: taskText},
      taskText
    }, taskText);
  };

    return (
      <Section>
        <TaskForm onEnterTask={enterTaskHandler} loading={isLoading}/>
        {error && <p>{error}</p>}
      </Section>
    );
  };

export default NewTask;
