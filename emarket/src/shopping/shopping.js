
import { Card, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../container/home.css'
import { FcBusinessman, FcBusinesswoman, FcLike } from "react-icons/fc";
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaAngellist, FaRocketchat, FaBox, FaChalkboardTeacher, FaRegSmile, FaRegSmileBeam, FaUsers, FaUserClock, FaUpload, FaMoneyCheckAlt, FaNewspaper, FaServicestack, FaTelegram, FaSignInAlt, FaHandsHelping, FaSignOutAlt, FaUserCircle, FaPlusCircle, FaRegEye, FaMedapps, FaTelegramPlane, FaUserCog, FaFacebook } from 'react-icons/fa'

const Shopping = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })

    }, [])


   const addtoCart = (e) => {
        e.preventDefault(); // prevents from reloading page
        toast('Product added to Cart !!! ', {
            position: toast.POSITION.BOTTOM_LEFT
        })
    }

    return (
        <div style={{ backgroundColor: '#ECF4F3' }} data-aos="fade-up">


            <br />
            <div className="container">
                <div className="row">
                    <h3 className="mr-auto">Popular Product</h3>

                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                
                </div>

            </div >
            <div className="container">
                <div className="row">
                    <h3 className="mr-auto">Popular Product</h3>

                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                
                </div>

            </div >
            <div className="container">
                <div className="row">
                    <h3 className="mr-auto">Popular Product</h3>

                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                
                </div>

            </div >
            <div className="container">
                <div className="row">
                    <h3 className="mr-auto">Popular Product</h3>

                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                
                </div>

            </div >
            <div className="container">
                <div className="row">
                    <h3 className="mr-auto">Popular Product</h3>

                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                
                </div>

            </div >
            <div className="container">
                <div className="row">
                    <h3 className="mr-auto">Popular Product</h3>

                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                
                </div>

            </div >
            <div className="container">
                <div className="row">
                    <h3 className="mr-auto">Popular Product</h3>

                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                    < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', }}>
                        <Card.Body>
                            <Card.Img variant="top" className="rounded-circle" src="https://t3.ftcdn.net/jpg/01/35/99/90/360_F_135999006_O3wp3JU5UnGFiaxVOew2KcTKuOIWif2x.jpg" />

                            <Card.Text className=" text-center border 2px" style={{ backgroundColor: '#E7DCDC' }}>
                                <label className="btn" type="button" onClick={addtoCart}><b>Add to Cart &nbsp; &nbsp;</b></label>
                                <label><b>20/Kg &nbsp;</b></label>
                            </Card.Text>
                            <Card.Title ><b><h4 style={{ color: "#51227F" }}>Nepal Supplier </h4></b></Card.Title>
                            <label style={{ color: 'BF3A84' }}>Shop &nbsp;</label>
                            <FaBox type="button" style={{ fontSize: '30px', color: 'BF3A84' }} />&nbsp;&nbsp;
                            <label style={{ color: 'red' }} type="button" ><b>No Off &nbsp;</b></label>
                        </Card.Body>
                    </Card>
                
                </div>

            </div >
            
           
        
            <div className="container">
                <div className="row">
                    <h3 className="mr-auto">Popular Fam </h3>

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

export default Shopping;

