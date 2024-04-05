import React from 'react'

const Box = (props) => {
  console.log("props"+JSON.stringify(props));
  let result;
  if(props.title==='Computer' && props.result!=="" && props.result!=='tie'){
    result=props.result==='win'?'lose':'win';
  }else{
    result=props.result;
  }
  return (
    <div className={`box ${result==='win'?"win":""}`}>
        <h1>{props.title}</h1>
        <img className="item-img" src={props.item && props.item.img}/>
        <h2>{result}</h2>
    </div>
  )
}

export default Box