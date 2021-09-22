const express = require('express');
const User = require('../model/signup');
const router = express.Router();
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator')

router.post('/signUp', [
    check('fullname', "fullname  is required !!").not().isEmpty(),
    check('dob', "Date of birth is required").not().isEmpty(),
    check('gender', "Gender is required").not().isEmpty(),
    check('address', "address is required").not().isEmpty(),
    check('phone', "phone number is required").not().isEmpty(),
    check('username', "username is required").not().isEmpty(),
    check('password', " password is required").not().isEmpty()
],  function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {

        bcryptjs.hash(req.body.password, 10, async  function (err, hash) {
            await User.create({
                fullName: req.body.fullname,
                dob: req.body.dob,
                address: req.body.address,
                phone: req.body.phone,
                username: req.body.username,
                gender: req.body.gender,
                password: hash

            }).then(
                (result) => {
                    res.status(200).json({ message: "SignUp successfull", success: true })
                }
            ).catch(
                (result) => {
                    console.log(result)
                    res.status(201).json({ message: "SignUp Falied", success: false })
                }
            )
        })

    }
    else {
        console.log(errors.array())
        res.status(206).send(errors.array())
    }

})

//Login
router.post('/login', function (req, res) {
    const username = req.body.username
    const password = req.body.password

    //now we need to find if the user exits
    User.findOne({ username: username.toLowerCase() }).
        then(function (userData) {
            if (userData === null) {
                //username does not exits
                return res.status(201).json({ success: false, message: "User does not exist. Please SignUp first" })
            }
            bcryptjs.compare(password, userData.password, function (err, result) {
                if (result == false) {
                    return res.status(201).json({ success: false, message: "Password doesn't match !!! Please try again" })
                }
                //token generate
                const token = jwt.sign({ userId: userData._id }, 'secretkey');
                res.status(200).json({
                    message: "Auth Success",
                    token: token,
                    success: true,
                    details: [userData]
                })
            })

        }).catch(
            function (err) {
                res.status(500).json({ message: err })
            }
        )
})


module.exports = router