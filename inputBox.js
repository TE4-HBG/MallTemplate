let allSaveInputs = [];


function PrintInputBorder(Arr) {
    let Text = "";
    console.log(Arr[0]);
    localStorage.setItem(Arr[0], Arr);
    Text += '<div name="'+ Arr +'" id="' + Arr[0] + '">' +
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
function GetTextInput(spec, readable = true, value = "") {
    if (readable) {
        return '<label> Text ' + spec + ': </label>' +
        '<input type="text" class="TEXT" name="' + spec + '" value=""><br>';
    }
    else {
        return '<label> Text ' + spec + ': </label>' +
        '<input readonly type="text" class="TEXT" name="' + spec + '" value="' + value + '"><br>';
    }
}
function GetImgInput(spec, readonly = true, value = "") {
    if (readonly) {
        return '<label> Bild ' + spec + ': </label>' +
        '<input type="file" class="IMG" name="' + spec + '" accept="image/*">' +
        '<br>';
    }
    else {
        return '<label>Bild ' + spec + ': ' + value + '</label>' +
        '<br>';
    }
}

function GetCountdownInput() {
    return '<label> Countdown: </label>' +
        '<input type="text"  value="">' +
        '<label> Tid: </label>' +
        '<input type="date" class="start" name="trip-start" value="2018-07-22">' +
        '<br></br>';
}

function _arrayBufferToBase64(blob) {
    return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => {resolve(reader.result); console.log(reader.result)};
        reader.readAsDataURL(blob);
    });
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
    console.log(x);
    let inputBox = document.getElementById(x);
    let allTextInput;
    let minutes;
    let jsonObject;
    let allImgInput;

    switch (x) {
        /*case 'formInCountdown':
            allTextInput = inputBox.getElementsByClassName("TEXT");
            let dateInput = inputBox.getElementsByClassName("DATE");
            jsonObject = {
                    "text": allTextInput,
                    "date": dateInput
                }
                allSaveInputs.push(new Template(0, x, jsonObject));
                console.log("hi");

            break;*/
        case 'Template1':
            allTextInput = inputBox.getElementsByClassName("TEXT");
            allImgInput = inputBox.getElementsByClassName("IMG");
            minutes = inputBox.getElementsByClassName('quantity');
            jsonObject = {
                "text1": allTextInput[0].value,
                "image1": await _arrayBufferToBase64(allImgInput[0].files[0])
            };

            allSaveInputs.push(new Template(minutes[0].value, x, jsonObject));
            PrintSavedInputs(minutes[0].value, x, [allTextInput[0].value, allImgInput[0].files[0].name]);

            break;
        case 'Template2':
            allTextInput = inputBox.getElementsByClassName("TEXT");
            minutes = inputBox.getElementsByClassName('quantity');
            jsonObject = {
                "text1": allTextInput[0].value,
                "text2": allTextInput[1].value
            }

            allSaveInputs.push(new Template(minutes[0].value, x, jsonObject));
            PrintSavedInputs(minutes[0].value, x, [allTextInput[0].value, allTextInput[1].value]);

            break;
        case 'Template3':
            allImgInput = inputBox.getElementsByClassName("IMG");
            minutes = inputBox.getElementsByClassName('quantity');
            jsonObject = {
                "image1": await _arrayBufferToBase64(allImgInput[0].files[0])
            };


            allSaveInputs.push(new Template(minutes[0].value, x, jsonObject));
            PrintSavedInputs(minutes[0].value, x, [allImgInput[0].value]);

            break;
        case 'Template4':
            allTextInput = inputBox.getElementsByClassName("TEXT");
            allImgInput = inputBox.getElementsByClassName("IMG");
            minutes = inputBox.getElementsByClassName('quantity');
            jsonObject = {
                "text1": allTextInput[0].value,
                "image1": await _arrayBufferToBase64(allImgInput[0].files[0])
            };

            allSaveInputs.push(new Template(minutes[0].value, x, jsonObject));
            PrintSavedInputs(x, [allTextInput[0].value, allImgInput[0].value]);

            break;
        case 'Template5':
            allTextInput = inputBox.getElementsByClassName("TEXT");
            minutes = inputBox.getElementsByClassName('quantity');
            jsonObject = {
                "text1": allTextInput[0].value,
                "text2": allTextInput[1].value
            }


            allSaveInputs.push(new Template(minutes[0].value, x, jsonObject));
            PrintSavedInputs(minutes[0].value, x, [allTextInput[0].value, allTextInput[1].value]);
            console.log("hello");

            break;
        case 'Template6':
            break;
        default:
            break;
    }


}
function ActuallySave() {
    if(Send(JSON.stringify(allSaveInputs))) {
        console.log("bruh");
    };
    //window.location.reload();
}

function DeleteInputBorder(LinnInputID) {
    console.log('trying to removed ' + LinnInputID);
    document.getElementById(LinnInputID).remove();
}
function test(x) {
    for (let index = 0; index < allSaveInputs.length; index++) {
        const element = allSaveInputs[index];
        console.log(element);
    }
}
function PrintSavedInputs(minutes, x, newArray) {
    let container = document.getElementById('savedInputs').innerHTML;
    let inputBox = document.getElementById(x);
    let textAmount = 0;
    let imgAmount = 0;
    let Arr = localStorage.getItem(x);
    Arr = Arr.split(",");
    
    container += '<div name="'+ Arr +'" id="' + Arr[0] + '-saved">' +
    '<div class="UpdateForms-saved">' +
    '<button type="button" class="delBtn" onclick=DeleteInputBorder("' + Arr[0] + '-saved")>X</button>' +
    '<h4>' + Arr[0] + '</h4>' +
    '<input readonly type="number" class="quantity" name="quantity" min="0" max="15" value="' + minutes + '">' +
    '<br>';
    
    
    
    for (let index = 0; index < Arr.length; index++) {
        console.log(1);

        if (Arr[index] === 'IMG') {
            imgAmount++;
            container += GetImgInput(imgAmount, false, newArray[index -1]);
        }
        if (Arr[index] === 'TEXT') {
            textAmount++;
            container += GetTextInput(textAmount, false, newArray[index -1]);
        }
    }
    container += '</div>' +
    '</div>'

    document.getElementById('savedInputs').innerHTML = container;

}