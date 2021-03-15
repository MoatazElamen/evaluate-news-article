// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import 'babel-polyfill'
import handleSubmit from '../js/formHandler'
describe('Client Test', () => {
    test('check if it\'s defined', () => {
        expect(handleSubmit()).toBeDefined()
        // TODO: write your logic here
    })
    // TODO: add your test cases to test client
})
