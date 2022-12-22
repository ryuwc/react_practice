import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import App from "../App";
import CourseGoalItem from "../components/CourseGoals/CourseGoalItem/CourseGoalItem";
import Button from "../components/UI/Button/Button";
import CourseGoalList from "../components/CourseGoals/CourseGoalList/CourseGoalList";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/CourseGoalItem">
                <CourseGoalItem/>
            </ComponentPreview>
            <ComponentPreview path="/Button">
                <Button/>
            </ComponentPreview>
            <ComponentPreview path="/CourseGoalList">
                <CourseGoalList/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;