const blocks = document.getElementsByClassName('block');
// console.log(blocks)

const block3 = document.getElementById('block3')
// block3.className = "changedClass"
// block3.classList.add("adfdf")
// block3.classList.remove("this")


block3.onclick = () => {
    block3.classList.toggle("active")
}

const block = document.querySelectorAll('.block')

// console.log(block)

const button = document.getElementById('button');
const input = document.getElementById('input');

button.onclick = () =>  {
    const div = document.createElement('div')
    const deleteButton = document.createElement('button')
    deleteButton.innerText = "delete"
    deleteButton.onclick = (e) => {
        e.path[1].remove()
        console.log(e)
    }
    div.setAttribute('class', 'block')
    div.innerText = input.value

    div.append(deleteButton)
    document.body.append(div)
    input.value = ""
}

// button.onclick = (event) => {
//     console.log(event)
//     console.log("Clicked")
// }
//
// input.onchange = (event) => {
//     console.log(event)
//     console.log(event.target)
//     console.log(event.target.value)
// }