import  React from "react";
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser}from 'react-icons/ai';
import {AiOutlineMessage}from 'react-icons/ai';
import {BsBriefcase}from 'react-icons/bs';
import { useState } from "react";
const Nav =()=>{
    const [activeNav,setActiveNav]=useState('#')
    return(
        <nav>
            <a href="# " className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
            <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
            <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio'?'active':''}><BsBriefcase/></a>
            <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><AiOutlineMessage/></a>
        </nav>
    )
}
export default Nav;