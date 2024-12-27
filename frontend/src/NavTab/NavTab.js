import React, { useEffect, useRef, useState } from 'react';
import "./NavTab.css";

const NavTab = ({tabs,onChange}) => {

    const element = useRef([]);
    const [active,setActive]=useState({})

    useEffect(()=>{
      setActive(element.current[0].getBoundingClientRect());
      onChange(element.current[0].innerText);
    },[element])

  return (
    <nav className='nav__tabs'>
      {
        tabs.map((name,index)=>(
          <button
          ref={el=>{element.current[index]=el}}
          onClick={(e)=>{
            setActive(e.target.getBoundingClientRect());
            onChange(name);
          }}
          key={index}>
            {name}
          </button>
        ))
      }
      <span className='indicator' style={{left:`${active.left}px`,
                                          top:`${active.top}px`,
                                        width:`${active.width}px`,
                                        height:`${active.height}px`,
                                        }}>
                                      

      </span>
    </nav>)
}
export default NavTab