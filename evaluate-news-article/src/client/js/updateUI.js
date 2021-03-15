// update ui : a function that responsible to update the ui based on the given data object
export default function updateUI(data){
    let element = null;
    for(const[key,value] of Object.entries(data)){
        let child = document.createElement('span');
        child.className = "entity";
        child.textContent = `${key.toUpperCase()} : ${value}`;
        element = document.getElementById(`${key}`);
        element.appendChild(child)
    }
}