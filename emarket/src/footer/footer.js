import { Component } from "react"
import '../App.css'
import { Link } from 'react-router-dom'
import { FaFly, FaHandPointer, FaInternetExplorer, FaMonero, FaPhoneSquareAlt, FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare, FaInstagramSquare } from "react-icons/fa";



class Footer extends Component {
    render() {
        return (
            <footer id="footer"style={{ backgroundColor: "F3EEEE",}} className="footer-1 text-black">
                <div className="main-footer widgets-dark typo-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget subscribe no-box">
                                    <ul className="thumbnail-widget">
                                        <h3 className="widget-title" style={{ color: "000000", fontWeight: "bolder", marginTop: "2px" }}>E-Market <span></span></h3>

                                        <p>
                                            <FaFly /> Kathmandu, Nepal <br /> <br />
                                            <FaInternetExplorer /> www.eMarketweb.com <br /> <br />
                                            <FaMonero /> info@emarketweb.com <br /><br />
                                            <FaPhoneSquareAlt /> 01-934853321
                                        </p>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget no-box">
                                    <h5 className="widget-title">Reference Link<span></span></h5>
                                    <ul className="thumbnail-widget">
                                        <p>
                                            <li>
                                                <div className="thumb-content"><a target="_blank" href="/aboutus">About Us</a></div> <br />
                                            </li>
                                            <li>
                                                <div className="thumb-content"><a target="_blank" href="/career">Careers</a></div> <br />
                                            </li>

                                            <li>
                                                <div className="thumb-content"><a target="_blank" href="/contactus">Contact Us</a></div> <br />
                                            </li>
                                            <li>
                                                <div className="thumb-content"><a href="/terms">Terms & Conditions </a></div> <br />
                                            </li>


                                        </p>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget no-box">
                                    <h5 className="widget-title">Subscribe us<span></span></h5>
                                    <p>Get notification of our newly launched updates and offers.</p>
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Email address" name="email"  required /><br />
                                            <button style={{ backgroundColor: "#51227F", color: "white", fontWeight: "bolder" }} type="submit" className="btn "> Subscribe<FaHandPointer /> </button>
                                        </div>
                                    </form>

                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">

                                <div className="widget no-box">
                                    <h5 className="widget-title">Contact Us<span></span></h5>

                                    <p><a href="www.gmail.com" target="_blank" title="glorythemes">info@emarketweb.com</a></p>
                                    <ul className="social-footer2">
                                        <a href="https://www.youtube.com/" title="youtube" target="_blank"><FaYoutubeSquare style={{ color: "000000", fontSize: "20px", marginRight: "7px" }} /></a>
                                        <a href ="https://www.facebook.com/" target="_blank" title="Facebook"><FaFacebookSquare style={{ color: "000000", fontSize: "20px", marginRight: "7px" }} /></a>
                                        <a href to="https://twitter.com" target="_blank" title="Twitter"><FaTwitterSquare style={{ color: "000000", fontSize: "20px", marginRight: "7px" }} /></a>
                                        <a href="https://www.instagram.com/" title="instagram" target="_blank"><FaInstagramSquare style={{ color: "000000", fontSize: "20px", marginRight: "7px" }} /></a>
                                    </ul>
                                    <ul className="social-footer2">

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <p className="text-center">
                                    © 2020 - 2021 E-Market. Designed and Developed By Shankar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;