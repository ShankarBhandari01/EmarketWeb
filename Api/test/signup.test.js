const User = require('../model/signup')
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Test_E-Market';
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Insert data', () => {
    // the code below is for insert testing
    it('register user testing ', () => {
        const user = {
            'fullName': 'shankar Bhandari' ,
            'dob': '2000/07/31',
            'gender': 'male',
            'address': 'kalopool',
            'phone': '9867823004',
            'username': 'shankar@gmail.com',
            'password': '1234567890'
        };

        return User.create(user)
            .then((users_test) => {
                expect(users_test.fullName).toEqual('shankar Bhandari');
            });
    });

   
});




