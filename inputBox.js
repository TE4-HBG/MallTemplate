//This is a function for pic, text, time table...//
function PrintInputBorder(Arr) {
    var Text = document.getElementById('FormsEditable').innerHTML;

    Text += '<div id="Forms">' +
            '<div class="UpdateForms">' +
           '<table>';

           if (Arr.includes('IMG')) {
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
'	 		</table>'+
'			</div>' +
           '</div>';

    document.getElementById('FormsEditable').innerHTML = Text;
}

function GetTextInput() {
    return  '<tr>' +
           '<label> Text:</label>' +
           '<input type="text" id="week" name="week" value=""><br><br>' +
           '</tr>';
}
function GetImgInput() {
    return '<tr>' +
'			<label> Bild:</label>'+
            '<form action="/action_page.php">'+
            '  <input type="file" id="myFile" name="filename">'+
            '  <input type="submit">'+
            '</form> <br>'+
'           </tr>' ;
}
function GetVideoInput() {
    return '<tr>' +
'			<label> Video:</label>'+
'           <input type="text" id="week" name="week" value=""><br><br>'+
'			</tr>';
}
function GetCountdownInput() {
    return '<tr>' +
'				<label> Tid:</label>'+
'				<input type="text" id="week" name="week" value=""><br><br>'+
'			</tr>';
}




