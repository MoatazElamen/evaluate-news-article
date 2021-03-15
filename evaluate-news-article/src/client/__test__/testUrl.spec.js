// TODO: import the url check function
import checkURL from '../js/checkURL'
import 'babel-polyfill'
describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        expect(checkURL()).toBeDefined()
        // TODO: write your logic here
    })

    test('Testing the checkUrl function return false for invalid url', () => {
        // TODO: write your logic here
        expect(checkURL("not a valid")).toBeFalsy()
    })

    test('Testing the checkUrl function return true for valid url', () => {
        // TODO: write your logic here
        expect(checkURL("www.google.com")).toBeTruthy()
    })
})