function elementFactory(type, id, classe, content){
    let elementCreated = document.createElement(`${type}`);
    elementCreated.setAttribute('id', `${id}`);
    elementCreated.classList.add(`${classe}`);
    elementCreated.innerText = `${content}`;

    return elementCreated;
}

function deleteElement(id, classePai){
    let element = document.getElementById(`${id}`);
    classePai.removeChild(element)
}

let z_Index = 1;
const workspace = document.querySelector('.workspace');
const um = document.querySelector('.container .um');
const meio = document.querySelector('.container .meio');
const terco = document.querySelector('.container .terco');
const quarto = document.querySelector('.container .quarto');
const quinto = document.querySelector('.container .quinto');
const sexto = document.querySelector('.container .sexto');
const oitavo = document.querySelector('.container .oitavo');
const nono = document.querySelector('.container .nono');
const decimo = document.querySelector('.container .decimo');

um.addEventListener('click', criarUm)
meio.addEventListener('click', criarMeio)
terco.addEventListener('click', criarTerco)
quarto.addEventListener('click', criarQuarto)
quinto.addEventListener('click', criarQuinto)
sexto.addEventListener('click', criarSexto)
oitavo.addEventListener('click', criarOitavo)
nono.addEventListener('click', criarNono)
decimo.addEventListener('click', criarDecimo)

function criarUm(){
    newElement('um')
}

function criarMeio(){
    newElement('meio')
}

function criarTerco(){
    newElement('terco')
}

function criarQuarto(){
    newElement('quarto')
}

function criarQuinto(){
    newElement('quinto')
}

function criarSexto(){
    newElement('sexto')
}

function criarOitavo(){
    newElement('oitavo')
}

function criarNono(){
    newElement('nono')
}

function criarDecimo(){
    newElement('decimo')
}

function newElement(classElement){
     z_Index++
     let newElement = elementFactory('div',`element${z_Index}`, `${classElement}`, '');
     newElement.style.zIndex = z_Index
     newElement.style.position = 'absolute'
     newElement.style.margin = '0'
     newElement.style.cursor = 'pointer'
     workspace.appendChild(newElement);
     draggable()
     
}

function draggable(){
    const el = document.querySelector(`#element${z_Index}`);
    el.addEventListener('mousedown', mousedown);
    el.addEventListener('dblclick', del);
    el.addEventListener('touchstart', touchStart)
    
    
    function mousedown(e) {
        workspace.addEventListener('mousemove', mousemove);
        workspace.addEventListener('mouseup', mouseup);
        const whichArt = event.target;

        let prevX = e.clientX - whichArt.offsetLeft
        let prevY = e.clientY - whichArt.offsetTop

        function mousemove(e){

            el.style.left = (e.clientX - prevX) +'px';
            el.style.top = (e.clientY - prevY) +'px';

        }

        function mouseup(){
            workspace.removeEventListener('mousemove', mousemove)
            workspace.removeEventListener('moseup',mouseup)
        }
    }
}

function del(){
    let id = event.target.id;
    deleteElement(`${id}`, workspace)    
}

function touchStart(){
    event.preventDefault();
    const whichArt = event.target;
    
    let moveOffsetX = whichArt.offsetLeft - event.touches[0].pageX;
    let moveOffsetY = whichArt.offsetTop - event.touches[0].pageY;

    whichArt.addEventListener('touchmove', ()=>{
        let positionX = event.touches[0].pageX + moveOffsetX;
        let positionY = event.touches[0].pageY + moveOffsetY;

        whichArt.style.left = positionX + 'px';
        whichArt.style.top = positionY + 'px';
    })
}

