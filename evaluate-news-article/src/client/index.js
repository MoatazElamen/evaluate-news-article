import handleSubmit from './js/formHandler'
// TODO include your scss file here
import "./styles/_base.scss"
window.addEventListener('DOMContentLoaded', () => {
    // TODO: get the button for submit
    const submitBtn = document.querySelector('.btn-submit');
    submitBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        handleSubmit()

    })
    // TODO: add event listener to it when the click to call handleSubmit function
})
export { handleSubmit }
