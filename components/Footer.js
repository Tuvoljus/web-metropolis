import styles from '../scss/Footer.module.scss';

const Footer = () => {
    return (
        <>
        <footer className={[styles.mainFooter]}>
            <div className="container text-center">
                <div className="brief">
                    <div className="logo mb-3">
                        Image
                    </div>
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                        </p>
                </div>
                <ul className={[styles.siteLinks]}>
                    <li className="list-inline-item">
                        <a href="#">
                            What we do
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">
                            Our Work
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">
                            Company
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">
                            Contact
                        </a>
                    </li>
                </ul>                
                <div className="contact-info">
                    <p>
                        Buchloer Str. 3., München, DE
                    </p>
                    <p>
                        <a style={{textDecoration: 'none'}} href="mailto:kontakt@webmetropolis.de">
                            kontakt@webmetropolis.de
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