import React, { lazy } from 'react'
import dynamic from 'next/dynamic'
const Menue = dynamic(() => import('./Menue.js'))
const Footer = dynamic(() => import('./Footer'))

 


const layout = ( {children} ) => {
    return (
        <>
            <Menue />            
            {children}
            <Footer />
        </>
    )
} 

export default layout