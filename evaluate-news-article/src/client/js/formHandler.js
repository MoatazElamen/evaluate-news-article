import checkURL from './checkURL';
import updateUI from './updateUI';
// const post = async (url = '', data = {}) => {
//     const response = await fetch(url, {
//         method: 'POST',
//         credentials: 'same-origin',
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     try {
//         return await response.json()
//     } catch (error) {
//         console.log(error)
//     }
// }

    /**

     *  - Get Value of the input for URL
     *  - Check if it's URL or not
     *      yes
     *          send it to the backend
     *      no
     *          show user message it's not valid URL
     */
const handleSubmit = async () => {
    const error = document.querySelector('.error');
    const inputValue = document.getElementById("article-url").value;
    if(checkURL(inputValue)){
        error.style.display = "none"
        fetch('http://localhost:8081/add-url',{
        method:'POST',
        body:JSON.stringify({url:inputValue}),
        headers:{'Content-Type': 'application/json'}})
        .then(response=>response.json())
        .then(data=>{
            updateUI(data)
        })
    }else{
        error.style.display ="block"
        error.innerText = "Pleae Type A Valid URL"
    }

}

export default handleSubmit
