//This is a function for pic, text, time table...//
var LinnInputID = 1;

function PrintInputBorder(Arr) {
    var Text = document.getElementById('FormsEditable').innerHTML;

    Text += '<div class="Forms" id=input'+ LinnInputID + '>' +
            '<div class="UpdateForms">' +
            '<table>';

           if (Arr.includes('IMG')) {
               Text += GetImgInput();
           }
           if (Arr.includes('IMG1')) {
            Text += GetImgInput();
           }
           if (Arr.includes('TEXT')) {
               Text += GetTextInput();
           }
           if (Arr.includes('TEXT1')) {
            Text += GetTextInput();
           }
           if (Arr.includes('COUNTDOWN')) {
               Text += GetCountdownInput();
           }

   Text +=	'<button type="button" onclick=SaveDinnerSchedule()><a>Visa</a></button>'+
            '<button style ="margin-left: 10px; "type="button" onclick=DeleteInputBorder('+ LinnInputID + ')><a>X</a></button>'+
            '</table>'+
            '</div>' +
            '</div>';

    document.getElementById('FormsEditable').innerHTML = Text;
    LinnInputID++;
}


function GetTextInput() {
    return  '<label> Text:</label>' +
           '<input type="text" id="week" name="week" value=""><br><br>';
}
function GetImgInput() {
    return  '<label> Bild:</label>' +
            '<form action="/action_page.php">'+
            '  <input type="file" id="myFile" name="filename">'+
            '  <input type="submit">'+
            '</form> <br>';
}
function GetVideoInput() {
    return  '<label> Video:</label>' +
           '<input type="text" id="week" name="week" value=""><br><br>';
}
function GetCountdownInput() {
    return '<label> Tid:</label>' +
				'<input type="text" id="week" name="week" value=""><br><br>';
}

function DeleteInputBorder(LinnInputID) {
    document.getElementById('input'+LinnInputID).remove();
}

