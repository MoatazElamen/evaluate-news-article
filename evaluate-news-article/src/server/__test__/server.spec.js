// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import 'babel-polyfill'
const app = require('../index');
const request = require('supertest')
describe('Server Test', () => {
    //  2. https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6
    it('should response with the data for the url', async () => {
        const res = await request(app)
          .post('/add-url')
          .send({
            "url":"www.google.com",
          })

          expect(res.statusCode).toEqual(200)
      })
    
})
