function PrintInputBorder(Arr) {
    let Text = "";
    console.log(Arr[0]);
    Text += '<div id="' + Arr[0] + '">' +
        '<div class="UpdateForms">' +
        '<button type="button" class="delBtn" onclick=DeleteInputBorder("' + Arr[0] + '")>X</button>' +
        '<h4>' + Arr[0] + '</h4>' +
        '<input type="number" class="quantity" name="quantity" min="0" max="15" value="5">' +
        '<label> Hur många minuter ska sidan visas? (0 = för alltid) </label>' +
        '<br>';

    let textAmount = 0;
    let imgAmount = 0;
    for (let index = 0; index < Arr.length; index++) {
        if (Arr[index] === 'IMG') {
            imgAmount++;
            Text += GetImgInput(imgAmount);
        }
        if (Arr[index] === 'TEXT') {
            textAmount++;
            Text += GetTextInput(textAmount);
        }
    }



    Text += '<button type="button" onclick=Save("' + Arr[0] + '")><a>Spara</a></button>' +
        '</div>' +
        '</div>';

    document.getElementById('FormsEditable').innerHTML = Text;
}
function GetTextInput(spec) {
    return '<label> Text ' + spec + ': </label>' +
        '<input type="text" class="TEXT" name="' + spec + '" value=""><br>';
}
function GetImgInput(spec) {
    return '<label> Bild ' + spec + ': </label>' +
        '<input type="file" class="IMG" name="' + spec + '" accept="image/*">' +
        '<br>';
}
function GetCountdownInput() {
    return '<label> Countdown: </label>' +
        '<input type="text"  value="">' +
        '<label> Tid: </label>' +
        '<input type="date" class="start" name="trip-start" value="2018-07-22">' +
        '<br></br>';
}

function specialRNG() {
    var today = new Date();
    var today_abs = new Date();
    today_abs.setHours(0);
    today_abs.setMinutes(0);
    today_abs.setSeconds(0);
    today_secs = (today.getTime() - today_abs.getTime()) / 1000;
    return today_secs;

}


async function Save(x) {

    let inputBox = document.getElementById(x);
    let allTextInput;
    let minutes;
    let jsonObject;
    let allImgInput;

    switch (x) {
        case 'Template1':
            allTextInput = inputBox.getElementsByClassName("TEXT");
            allImgInput = inputBox.getElementsByClassName("IMG");
            minutes = inputBox.getElementsByClassName('quantity');
            jsonObject = {
                "text1": allTextInput[0].value,
                "image1": { type: allImgInput[0].files[0].type, data: await allImgInput[0].files[0].text() }
            };


            send(new Template(minutes[0].value, x, jsonObject));

            break;
        case 'Template2':
            allTextInput = inputBox.getElementsByClassName("TEXT");
            minutes = inputBox.getElementsByClassName('quantity');
            jsonObject = {
                "text1": allTextInput[0].value,
                "text2": allTextInput[1].value
            }

            send(new Template(minutes[0].value, x, jsonObject));

            break;
        case 'Template3':
            allImgInput = inputBox.getElementsByClassName("IMG");
            minutes = inputBox.getElementsByClassName('quantity');
            jsonObject = {
                "image1": { type: allImgInput[0].files[0].type, data: await allImgInput[0].files[0].text() }
            };


            send(new Template(minutes[0].value, x, jsonObject));

            break;
        case 'Template4':
            allTextInput = inputBox.getElementsByClassName("TEXT");
            allImgInput = inputBox.getElementsByClassName("IMG");
            minutes = inputBox.getElementsByClassName('quantity');
            jsonObject = {
                "text1": allTextInput[0].value,
                "image1": { type: allImgInput[0].files[0].type, data: await allImgInput[0].files[0].text() }
            };


            send(new Template(minutes[0].value, x, jsonObject));

            break;
        case 'Template5':
            allTextInput = inputBox.getElementsByClassName("TEXT");
            minutes = inputBox.getElementsByClassName('quantity');
            jsonObject = {
                "text1": allTextInput[0].value,
                "text2": allTextInput[1].value
            }



            send(new Template(minutes[0].value, x, jsonObject));

            break;
        case 'Template6':
            break;
        default:
            break;
    }


}


function DeleteInputBorder(LinnInputID) {
    console.log('trying to removed ' + LinnInputID);
    document.getElementById(LinnInputID).remove();
}

