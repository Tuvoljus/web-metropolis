import styles from '../scss/Footer.module.scss';

const Footer = () => {
    return (
        <>
        <footer id="contact" className={[styles.mainFooter]}>
            <div className="container text-center">
                <div className="brief">
                    <div className="logo mb-3">
                        Image
                    </div>
                        <p>
                            Am Ende ein tolles Produkt zu haben, ist keine Kunst!
                        </p>
                </div>
                <ul className={[styles.siteLinks]}>
                    <li className="list-inline-item">
                        <a href="#services">
                            What we do
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#portfolio">
                            Our Work
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#about">
                            Company
                        </a>
                    </li>
                    {/* <li className="list-inline-item">
                        <a href="#">
                            Contact
                        </a>
                    </li> */}
                </ul>                
                <div className="contact-info">
                    <p>
                        Buchloer Str. 3., München, DE<br/>
                        +49 89 20 32 78 16
                    </p>
                    <p>
                        <a style={{textDecoration: 'none', color: 'rgba(255,255,255,.75)'}} href="mailto:kontakt@webmetropolis.de">
                            kontakt@web-metropolis.de
                        </a>
                    </p>
                </div>                
            </div>
            <div className={[styles.copyrights]}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="mb-0">© All rights reserved.</p>
                        </div>
                        <div className="col-md-6 text-right">
                           
                        </div>
                    </div>
                </div>
            </div>   
        </footer>        
    </>
        
    )
}

export default Footer;