function PrintInputBorder(Arr) {
    var Text = document.getElementById('FormsEditable').innerHTML;
    console.log(Arr[0]);
    Text += '<div id="' + Arr[0] + '">' +
            '<div class="UpdateForms">' +
            '<button type="button" class="delBtn" onclick=DeleteInputBorder("' + Arr[0] + '")>X</button>' +
            '<h4>' + Arr[0] + '</h4>' +
            '<input type="number" id="quantity" name="quantity" min="0" max="15" value="5">' +
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

    

   Text +=	'<button type="button" onclick="Save(' + Arr[0] + ')"><a>Visa</a></button>'+
            '</div>' +
           '</div>';

    document.getElementById('FormsEditable').innerHTML = Text;
}
function GetTextInput(spec) {
    return  '<label> Text ' + spec + ': </label>' +
            '<input type="text" id="TEXT" name="' + spec + '" value=""><br>';
}
function GetImgInput(spec) {
    return 	'<label> Bild ' + spec + ': </label>'+
            '<input type="file" id="IMG" name="' + spec + '" accept="image/*">' +
            '<br>';
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


function Save(x) {
   console.log('tmp');
   console.log(x);
   let parent = document.getElementById(x);
   console.log(parent.childNodes);

}


function DeleteInputBorder(LinnInputID) {
    console.log('trying to removed ' + LinnInputID);
    document.getElementById(LinnInputID).remove();
}

