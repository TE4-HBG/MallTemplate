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
    let jsonObject = {
        "content": [
            {
                "text1": "Hej Linn, Text 1"
            },
            {
                "text2": "detta är text 2"
            },
            {
                "countdown": [
                    {
                        "text": "Studentetn",
                        "date": "2023-06-10"
                    }
                ]
            }
        ]
    }
    let mall1 = new Template(2,1,jsonObject)

    tmp4.push(mall1)
}


function send(data) {
    const val = socket.readyState == WebSocket.OPEN;
    if(val) {
        socket.send(data);
    }
    return val;
}