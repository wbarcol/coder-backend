const socket = io()
// const titleP = document.querySelector('#titleP')
// const priceP = document.querySelector('#priceP')
// const thumP = document.querySelector('#thumP')
//Mensajes
const formMessage = document.querySelector('#formMessage')
const usernameInput = document.querySelector('#usernameInput')
const messageInput = document.querySelector('#messageInput')
const messagePool = document.querySelector('#messagePool')



function sendProducts(infoProduct) {
    socket.emit('client:product', infoProduct)
}


formP.addEventListener('submit', event => {
    event.preventDefault()
    const infoProduct = { title: titleP.value, price: priceP.value, thumbnail: thumP.value }
    sendProducts(infoProduct)
})

async function renderProducts (productos) {
    const response = await fetch('/plantilla.ejs');
    const pagina = await response.text();
    document.querySelector('#rowProduct').innerHTML = "";
    productos.forEach(product => {
        const html = ejs.render(pagina, product);
        document.querySelector('#rowProduct').innerHTML += html;
    });
}

socket.on('server:products', productos => {
    renderProducts(productos)
})


//CHAT


function renderMessage (messageInfo) {
    const html = messageInfo.map(info => {
        return(`<div>
        <span class="mUser">${info.username}</span>
        [<span class="mDate">${info.time}<span>]: 
        <span class="mMessage">${info.message}</span>
        </div>`)
    }).join(" ");
    messagePool.innerHTML = html;
}

function sendMessage(infoMessage) {
    socket.emit('client:message', infoMessage)
}

formMessage.addEventListener('submit', event => {
    event.preventDefault()
    const timeStamp = new Date();
    const fechayhora = timeStamp.toLocaleString("fr-FR");
    const infoMessage = { username: usernameInput.value, time: fechayhora, message: messageInput.value }
    sendMessage(infoMessage)
})

socket.on('server:message', renderMessage)
