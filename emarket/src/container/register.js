import { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { FaRegHandPointRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SimpleReactValidator from 'simple-react-validator';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom';
import React from 'react';
toast.configure()

class Register extends React.Component {

    render() {


        return (
            <section className="Form my-2 mx-2 pt-2 pb-2" style={{ fontFamily: 'roboto' }}>
                <div className="container">
                    <div className="row no-gutters shadow" style={{ background: 'white', borderRadius: '3px' }}>
                        <div className="col-lg-12">
                            <center>
                                <h2 className="py-4 mx-4" style={{ fontWeight: 'bolder', fontSize: "35px", color: "#51227F", fontFamily: "roboto" }}>
                                    Create account
                                </h2>
                            </center><form className="py-4" style={{ color: 'black', fontSize: "17px" }}>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Firstname</label>

                                            <input type="text" className="form-control" name="firstname" required />

                                        </div>
                                        <div className="col-md-6">
                                            <label>Lastname</label>
                                            <input type="text" className="form-control" name="lastname" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="categories">Gender &nbsp;&nbsp;&nbsp;</label>
                                            <select className="form-control" name="gender" required>
                                                <option selected>Select Gender </option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Others">Others</option>
                                            </select>

                                        </div>
                                        <div className="col-md-6">
                                            <label >Date of Birth</label>
                                            <input type="date" className="form-control" name="Dob" required />
                                        </div>
                                    </div>

                                </div>

                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Address</label>
                                            <input type="text" className="form-control" name="address" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                            <input type="text" className="form-control" name="phone_number" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Password:</label>
                                            <input type="password" className="form-control" name="password" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label> Confirm Password:</label>
                                            <input type="password" className="form-control" name="password" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p style={{ marginTop: "16px" }} className="signUp text-left">Do have an Account?  <Link style={{ color: "#a018a0" }} exact to="/login"><b>Sign in</b></Link></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 mt-1">
                                            <button style={{ backgroundColor: "#51227F", fontFamily: "roboto", color: "white", fontWeight: "bold", marginTop: "5px", border: 'none', fontFamily: "roboto", fontSize: "18px" }} type="submit" onClick={this.submitUser} className="btn btn-primary"> Sign up <FaRegHandPointRight /> </button>

                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Register
