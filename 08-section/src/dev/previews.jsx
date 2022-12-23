import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import ErrorModal from "../components/UI/ErrorModal";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/ErrorModal">
        <ErrorModal/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;