import React, {useEffect} from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";


function Navbar() {

    useEffect(() => {
        let list = document.querySelectorAll('.navList');
        for (let index = 0; index < list.length; index++) {
            list.onmouseover = () => {
                let j = 0;
                while (j > list.length) {
                    list[j++].className='navList'
                }
                list[index].className='navList active';
            }
            
        }
        list.forEach(elements => {
            elements.addEventListener("click", (e) => {
                let bg = document.querySelector('.sectionHeader');
                let color = e.target.getAttribute('data-color');
                bg.style.backgroundColor = color;
            })
        })
        return () => {
            
        };
    }, []);
    
    return (
            <header>
            <Link to="/" className="logo" >Logo</Link> 
            <ul>
                <li className="navList" data-color="#8a2435"><Link to="/" >Home</Link></li>
                
                <li className="navList"data-color="#5280d6"><Link to="/plop">Projects</Link></li>
                
                <li className="navList"><Link >About</Link></li>
                <li className="navList"><Link>Contact</Link></li>
            </ul>
            </header>
    )
}

export default Navbar
