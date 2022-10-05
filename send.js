class Template {
    constructor(duration, templateID, content) {
        this.duration = duration;
        this.templateID = templateID;
        this.content = content;
    }
}

const socket = new WebSocket('ws://te4projekt.se')
let tmp4 = [];

function addX() {



    tmp4.push()
}


function send(data) {
    const val = socket.readyState == WebSocket.OPEN;
    if(val) {
        socket.send(data);
    }
    return val;
}