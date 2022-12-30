import React, {useEffect, useRef} from 'react';
import MyParagraph from "./MyParagraph";
import lottie from 'lottie-web';

import $ from 'jquery';

$('p').on('click', () => {
  alert('clicked');
})

function DemoOutput(props) {
  const likecontainer = useRef();
  useEffect(()=>{
    lottie.loadAnimation({
      container: likecontainer.current,
      renderer: 'svg',
      loop: true,
      autoplay:false,
      animationData:require("../../lotti/17100-food.json")
    })

  },[])

  console.log(likecontainer);
  const newTest = props.show.sort((a, b) => a - b);

  return (

    <MyParagraph>
      <div ref={likecontainer}></div>
      {props.show ? 'This is new!' : ''}
      <p>{newTest}</p>
    </MyParagraph>
  );
}

export default React.memo(DemoOutput);