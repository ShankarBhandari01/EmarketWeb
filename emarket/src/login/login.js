import { Component } from "react"
import { FaRegHandPointRight } from 'react-icons/fa'
import { Card, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom'
class Login extends Component {

    render() {
        return (

            <section className="Form my-5 mx-5 pt-5 pb-5">
                <div className=" container">
                    <div className="row no-gutters shadow" style={{ background: 'white', borderRadius: '5px' }}>
                        <div className=" col-lg-4 ">

                        </div>
                        <div className=" col-lg-4 no gutters">

                            <h1 className="font-weight-bold py-4" style={{ fontWeight: "bolder", fontSize: "35px", color: "#a018a0", fontFamily: "roboto" }}>Login</h1>
                            <br></br>
                            <span style={{ fontSize: '13px', fontWeight: 'bold', marginTop: '-79px' }}>Enter your credentials to get started</span><br />
                            <br></br>

                            <form>
                                <div className="form-row">
                                    <div className="col-lg-6">
                                        <label htmlFor="uname" style={{ fontFamily: "roboto", fontSize: "20px" }}>Email</label>
                                        <input type="text" placeholder="Email" className="form-control" name="email" required />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="col-lg-6">
                                        <label htmlFor="pwd" style={{ fontFamily: "roboto", fontSize: "20px" }}>Password</label>
                                        <input type="password" placeholder="Password" className="form-control" name="password" required />
                                    </div>
                                </div>

                            </form>

                            <div className="form-row">

                            </div>
                            <div className="form-row">
                                <div className="col-lg-6">
                                    <Button style={{ backgroundColor: "#51227F", color: "white", fontWeight: "bold", marginTop: "10px", border: 'none', fontFamily: "roboto", fontSize: "18px" }} type="submit" href="/dashboard" class="btn btn-primary"> Sign in <FaRegHandPointRight /> </Button>
                                </div>
                            </div>
                            <br></br>
                            <div className="form-row">

                                <p className="signUp text-left" style={{ fontFamily: "roboto", fontSize: "17px" }}>Forget Password ?</p>
                                <p className="signUp text-left" style={{ fontFamily: "roboto", fontSize: "17px" }}>Do have an Account? &nbsp;
                                <Link exact to="/Signup"><b style={{ color: "#a018a0" }}>Sign Up</b></Link></p>

                            </div>

                        </div>
                        <div className="col-lg-4">

                            <img alt="login" src="./images/login.jpg" className="img-fluid rounded-circle" style={{ height: '400px' }} />


                        </div>

                    </div>
                    <div>



                    </div>
                </div>




            </section >



        )
    }
}
export default Login;