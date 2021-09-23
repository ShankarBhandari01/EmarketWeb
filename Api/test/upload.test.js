const Uploadcontent = require('../model/product')
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

describe('upload product testing', () => {
    // the code below is for upload product  testing
    it('Uploadcontent testing ', () => {
        const content = {
            'heading': 'Product bag',
            'content_description':'this is the monthly package',
            'categories':'subscription',
            'price':'200',
            
        }
        return Uploadcontent.create(content)
            .then((content_test) => {
                expect(content_test.categories).toEqual('subscription');
            });
    });


});