import Link from 'next/link'
import Image from 'next/image'
import { useAmp } from 'next/amp'

export const config = { amp: 'hybrid' }

const SectionTestimonials = () => {
    return (
        <>
            {/* <!-- Testimonials Section--> */}
            <section id="testimonials" className="testimonials">
                <div className="container text-center">
                    <header>
                    <h1 className="small-heading">Testimonials</h1>
                    <h2>What Our Clients Say</h2>
                    </header>
                    <div className="icon">
                        <i className="icon-quote">
                        </i>
                    </div>
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="owl-carousel owl-theme testimonials-slider">
                            {/* <!-- User--> */}
                            <div className="user">
                                <div className="quote">
                                    <p className="lead">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                                    </p>
                                </div>
                                <div className="user-info">
                                    <h3 className="h4">
                                            Jason Doe
                                    </h3>
                                    <span>
                                        Premia Capital
                                    </span>
                                </div>
                            </div>
                            {/* <!-- End User--> */}
                            {/* <!-- User--> */}
                            <div className="user">
                                <div className="quote">
                                    <p className="lead">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                                    </p>
                                </div>
                                <div className="user-info">
                                    <h3 className="h4">
                                            Steven Robison
                                    </h3>
                                    <span>
                                        Premia Capital
                                    </span>
                                </div>
                            </div>
                            {/* <!-- End User--> */}
                            {/* <!-- User--> */}
                            <div className="user">
                                <div className="quote">
                                    <p className="lead">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                                    </p>
                                </div>
                                <div className="user-info">
                                    <h3 className="h4">
                                        Arya Smith
                                    </h3>
                                    <span>
                                        Premia Capital
                                    </span>
                                </div>
                            </div>
                            {/* <!-- End User--> */}
                            {/* <!-- User--> */}
                            <div className="user">
                                <div className="quote">
                                    <p className="lead">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                                    </p>
                                </div>
                                <div className="user-info">
                                    <h3 className="h4">
                                        Frank Williams
                                    </h3>
                                    <span>
                                        Premia Capital
                                        </span>
                                </div>
                            </div>
                            {/* <!-- End User--> */}                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Testimonials Section-->    */}
        </>
    )
}

export default SectionTestimonials