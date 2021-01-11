import React, { useState } from 'react'
import Link from 'next/Link'
import Image from 'next/image'

const Menue = () => {
    const [openedCollapse, setOpenedCollapse] = React.useState('');

    
    const showBlog = () => {
        if (openedCollapse != 'show') {
            setOpenedCollapse('show') 
        } else {
            setOpenedCollapse('') 
        }   
    };

    return (
        <>
        <nav className="navbar  bg-dark navbar-dark">
            <div className="container">
                <a href="/" classNameName="navbar-brand" href="#">
                    <Image src="/img_webp/QSolutions_weiß_rot_2.webp" alt="QSolutions" width={250} height={48} layout="intrinsic"/>
                </a>
                <button  className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"  onClick={showBlog}>
                <span className="navbar-toggler-icon">
                    
                </span>
                </button>
                </div>
        </nav>
        <div className="nav" style={{float: 'right'}}>
            <div className="container">
                <div className={`collapse navbar-collapse pull-right ${openedCollapse}`}   id="collapsibleNavbar"  style={{position: 'relative'}}>
                    <ul className="navbar-nav" style={{position: 'absolute', marginTop: '0px', color: 'black', zIndex: '1200', width: '150px', backgroundColor: 'black'}}>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Startseite</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Startseite</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Startseite</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Startseite</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Startseite</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
               
        </>
    )
}

export default Menue