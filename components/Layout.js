import React, { lazy } from 'react'
const Menue = lazy(() => import('./Menue.js')) 
const Footer = lazy(() => import('./Footer')) 


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