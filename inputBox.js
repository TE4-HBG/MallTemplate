 //This is a function for pic, text, time table...//
 function PrintInputBorder(Arr) {
    var Text = document.getElementById('FormsEditable').innerHTML;
    console.log(Arr[0]);
    Text += '<div id="' + Arr[0] + '">' +
            '<div class="UpdateForms">' +
           '<table>';

   if (Arr.includes('IMG')) {
       Text += GetImgInput();
   }
   if (Arr.includes('TEXT')) {
       Text += GetTextInput();
   }
   if (Arr.includes('COUNTDOWN')) {
       Text += GetCountdownInput();
   }

   Text +=	'<button type="button" onclick="Save(' + Arr[0] + ')"><a>Visa</a></button>'+
'	 		</table>'+
'			</div>' +
           '</div>';

    document.getElementById('FormsEditable').innerHTML = Text;
}
function GetTextInput() {
    return  '<tr>' +
           '<label> Text:</label>' +
           '<input type="text" id="TEXT" value=""><br><br>' +
           '</tr>';
}
function GetImgInput() {
    return '<tr>' +
'				<label> Bild:</label>'+
'				<input type="text" id="IMG" value="">'+
'			</tr>';
}
function GetCountdownInput() {
    return '<tr>'+
'				<label> Ordning:</label>'+
'				<input type="text" id="week" name="week" value="">'+
'				<label> Tid:</label>'+
'				<input type="date" id="start" name="trip-start" value="2018-07-22"'+
'			</tr>';
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
    document.getElementById('input'+LinnInputID).remove();
}

