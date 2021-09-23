const SubscribeUser = require('../model/subscribe')
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

describe('subscribe user testing', () => {
    // the code below is for SubscribeUser testing
    it('SubscribeUser testing ', () => {
        const user = {
            'SubscribeBy_Name':'shankar',
            'SubscribeBy_Email':'harryshankar@outlook.com'
            
        }
        return SubscribeUser.create(user)
            .then((testData) => {
                expect(testData.SubscribeBy_Name).toEqual('shankar');
            });
    });


});