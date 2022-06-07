
let enter_name = document.querySelector('#name_value');
let image = document.querySelector('img');

let button = document.querySelector('button');

button.addEventListener('click',function name() {
    let name = enter_name.value;
    image.src = `https://joeschmoe.io/api/v1/${name}`;
})