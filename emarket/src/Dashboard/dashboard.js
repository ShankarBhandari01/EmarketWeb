
import { Card, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../container/home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from "react";

import wallpaper1 from '../container/photo/images/photo1.jpg'
import wallpaper2 from '../container/photo/images/photo2.jpg'
import wallpaper3 from '../container/photo/images/photo3.jpg'

import { FaAngellist, FaRocketchat, FaBox, FaChalkboardTeacher, FaRegSmile, FaRegSmileBeam, FaUsers, FaUserClock, FaUpload, FaMoneyCheckAlt, FaNewspaper, FaServicestack, FaTelegram, FaSignInAlt, FaHandsHelping, FaSignOutAlt, FaUserCircle, FaPlusCircle, FaRegEye, FaMedapps, FaTelegramPlane, FaUserCog, FaFacebook } from 'react-icons/fa'

const Dashboard = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })

    }, [])

    return (
        <div style={{ backgroundColor: '#ECF4F3' }} data-aos="fade-up">
            <Carousel fade>
                <Carousel.Item style={{ height: "400px" }}>
                    <img
                        className="img-fluid d-block w-100"
                        src={wallpaper1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: "White", fontFamily: "roboto", fontWeight: "bold" }}>The more that you read, the more things you will know, the more that you learn, the more places you’ll go.</h3>
                        <p style={{ color: "white", fontFamily: "roboto", fontSize: "18px" }}>Live as if you were to die tomorrow. Learn as if you were to live forever.</p>
                        <a style={{ backgroundColor: "#a018a0", fontWeight: "bolder", color: "white", fontFamily: "roboto" }} class="btn  btn-lg px-4 me-sm-3" href="/aboutus">Buy veggies</a>
                        <a style={{ backgroundColor: "#51227F", fontWeight: "bolder", color: "white", fontFamily: "roboto" }} class="btn  btn-lg px-4 me-sm-3" href="/contactus">Explore <FaRocketchat /></a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "400px" }}>
                    <img
                        className="d-block w-100"
                        src={wallpaper2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: "black", fontFamily: "roboto", fontWeight: "bold" }}>The more that you read, the more things you will know, the more that you learn, the more places you’ll go.</h3>
                        <p style={{ color: "black", fontFamily: "roboto", fontSize: "18px" }}>Live as if you were to die tomorrow. Learn as if you were to live forever.</p>
                        <a style={{ backgroundColor: "#a018a0", fontWeight: "bolder", color: "white", fontFamily: "roboto" }} class="btn  btn-lg px-4 me-sm-3" href="/aboutus">Explore <FaAngellist /></a>
                        <a style={{ backgroundColor: "#51227F", fontWeight: "bolder", color: "white", fontFamily: "roboto" }} class="btn  btn-lg px-4 me-sm-3" href="/contactus">Contact <FaRocketchat /></a> </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "400px" }}>
                    <img
                        className="d-block w-100"
                        src={wallpaper3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 style={{ color: "blue", fontFamily: "roboto", fontWeight: "bold" }}>The more that you buy, the more things you will know, the more that you learn, the more places you’ll go.</h3>
                        <p style={{ color: "blue", fontFamily: "roboto", fontSize: "19px" }}>Live as if you were to die tomorrow. Learn as if you were to live forever.</p>
                        <a style={{ backgroundColor: "#a018a0", fontWeight: "bolder", color: "white", fontWeight: "bold", fontFamily: "roboto" }} class="btn  btn-lg px-4 me-sm-3" href="/aboutus">Explore <FaAngellist /></a>
                        <a style={{ backgroundColor: "#51227F", fontWeight: "bolder", color: "white", fontFamily: "roboto" }} class="btn  btn-lg px-4 me-sm-3" href="/contactus">Contact <FaRocketchat /></a>  </Carousel.Caption>

                </Carousel.Item>
            </Carousel>

            <br />

            <div className="container">
                <div className="row">
                    <h3 className="mr-auto">Popular Product</h3>

                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" ><b>Buy Now &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" ><b>Buy Now &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" ><b>Buy Now &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" ><b>Buy Now &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" ><b>Buy Now &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>

                </div>
                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <center>
                                <label type="button">Previous</label>&nbsp;

                                &nbsp;  <label type="button">Next</label>
                            </center>

                        </div>

                    </div>
                </div>

            </div >
            <div className="container">
                <div className="row">
                    <h3 className="mr-auto">Popular Fam</h3>

                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                            <Card.Title><h3><center>Name</center></h3></Card.Title>
                            <Card.Text>
                                <label><b>The Fam of Apple &nbsp;</b></label>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                            <Card.Title><h3><center>Name</center></h3></Card.Title>
                            <Card.Text>
                                <label><b>The Fam of Apple &nbsp;</b></label>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                            <Card.Title><h3><center>Name</center></h3></Card.Title>
                            <Card.Text>
                                <label><b>The Fam of Apple &nbsp;</b></label>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                            <Card.Title><h3><center>Name</center></h3></Card.Title>
                            <Card.Text>
                                <label><b>The Fam of Apple &nbsp;</b></label>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: '#BF3A84' }} />
                        </Card.Body>
                    </Card>

                </div>

            </div >

        </div>
    )
}

export default Dashboard

