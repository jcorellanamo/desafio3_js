let color;
let newDivCreated = false;
let newDiv;

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'a':
            color = 'pink';
            document.getElementById('key').style.backgroundColor = color;
            break;
        case 's':
            color = 'orange';
            document.getElementById('key').style.backgroundColor = color;
            break;
        case 'd':
            color = 'lightblue';
            document.getElementById('key').style.backgroundColor = color;
            break;
        case 'q':
            createOrUpdateNewDiv('purple');
            break;
        case 'w':
            createOrUpdateNewDiv('gray');
            break;
        case 'e':
            createOrUpdateNewDiv('brown');
            break;
    }
});

function createOrUpdateNewDiv(color) {
    if (!newDivCreated) {
        newDiv = document.createElement('div');
        newDiv.className = 'new-div';
        newDiv.textContent = 'DIV 2';
        newDivCreated = true;
        document.body.appendChild(newDiv);
    }
    newDiv.style.backgroundColor = color;
}
