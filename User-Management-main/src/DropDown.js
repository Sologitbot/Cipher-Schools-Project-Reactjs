import React from 'react'
import { FaUserTie } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";

const DropDown = ({filterData, setList, list}) => {


    const clickHandle = (event) => {
        setList([...list, event]);
    }

  return (
    <>
    { filterData.length > 0 && 
    <div className='dropdown'> 
        {filterData.map((curEle, index) => {
            let avtar = curEle.name;
            let nameArray = avtar.split(" ");
            let firstChar = nameArray[0][0].toUpperCase();
            let lastChar = nameArray[nameArray.length - 1][0].toUpperCase();
            let str = firstChar+lastChar;
            
                return (
            
            <div className="customer customercard" key={index} onClick={()=>{clickHandle(curEle)}}>
              <div id='icon' className='avtar'><h5>{str}</h5></div>
              <div className='name'><h4>{curEle.name}</h4>
                    <span id='detail'><FaUserTie style={{color:'grey', margin:2}}/> {curEle.designation} <BsFillCircleFill style={{color:'grey' , paddingTop:6}}/> {curEle.email}</span>
              </div>
              </div>
     
                )
           })}
    </div>
}
   
    </>
  )
}

export default DropDown