import Menue from './Menue.js'
import Footer from './Footer'

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