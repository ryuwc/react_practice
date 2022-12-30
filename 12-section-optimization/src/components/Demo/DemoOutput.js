import React from 'react';
import MyParagraph from "./MyParagraph";

import $ from 'jquery';

$('p').on('click', () => {
  alert('clicked');
})

function DemoOutput(props) {
  console.log('DemoOutput RUNNING');
  const newTest = props.show.sort((a, b) => a - b);



  return (

    <MyParagraph>
      {props.show ? 'This is new!' : ''}
      <p>{newTest}</p>
    </MyParagraph>
  );
}

export default React.memo(DemoOutput);