class DinnerSchedule {
    constructor(week, monday, tuesday, wednesday, thursday , friday) {
      this.week = week;
      this.monday = monday;
      this.tuesday = tuesday;
      this.wednesday = wednesday;
      this.thursday = thursday;
      this.friday = friday;
    }
}

let weekList = [];
function SaveDinnerSchedule() { // Lägg till kod för att spara till databas
  if (CheckForms()) {
    const input = ['week', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday']; 
    for (let i = 0; i < input.length; i++) { 
      input[i] = document.getElementById(input[i]).value
    }

    const dinnerSchedule = new DinnerSchedule(input[0], input[1], input[2], input[3], input[4], input[5]);
    weekList.push(dinnerSchedule);
    dinnerList += "<tr><td>" + (weekList[(weekList.length -1)].week).toString() + "</td>" +  // Only adds the latest dinnerSchedule
    "<td>" + (weekList[(weekList.length -1)].monday).toString() + "</td>" + 
    "<td>" + (weekList[(weekList.length -1)].tuesday).toString() + "</td>" + 
    "<td>" + (weekList[(weekList.length -1)].wednesday).toString() + "</td>" +
    "<td>" + (weekList[(weekList.length -1)].thursday).toString() + "</td>" +
    "<td>" + (weekList[(weekList.length -1)].friday).toString() + "</td>" + 
    "<td style='text-align: center'><button type='button' onclick=SaveDinnerSchedule()><a>x</a></button></td></tr>";
    document.getElementById('dinner').innerHTML = dinnerList;
  }
}

function showDinnerSchedule() { // body onload 
  if (weekList.length === 0) {
    dinnerList = "<tr>"+ 
    "<td id='weekTableRow'>Vecka</td>" + 
    "<td class='dinnerTableRow'>Måndag</td>" + 
    "<td class='dinnerTableRow'>Tisdag</td>" + 
    "<td class='dinnerTableRow'>Onsdag</td>" + 
    "<td class='dinnerTableRow'>Torsdag</td>" +
    "<td class='dinnerTableRow'>Fredag</td>" + 
    "<td id='tableRemoveWeek'>Ta bort</td></tr>";
    document.getElementById('dinner').innerHTML = dinnerList;
  }
}



function CheckForms() { // True if correct input
  const input = ['week', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday']; 

  let isFormsFilled = true;
  for (let i = 0; i < input.length; i++) { // Check if all forms are filled
    if (document.getElementById(input[i]).value === "") {
        console.log("Incorrect input");
        document.getElementById(input[i]).style.borderColor = "red";     // Add text that tells user to put no dinner days as blankspace? 
        showPopup("Om det ej serveras mat en dag så skriv bara ett mellanrum!");
        isFormsFilled = false;
    } else {
        document.getElementById(input[i]).style.borderColor = "";
    }
  }

  let isWeekUniqe = true;
  for (let i = 0; i < input.length; i++) { // Check if week already exists in weekList
    input[i] = document.getElementById(input[i]).value
    for (let w = 0; w < weekList.length; w++) {
      if (input[0] === weekList[w].week) {
        console.log("Week already exists in weekList");
        showPopup("Denna veckan finns redan i matsedeln");
        isWeekUniqe = false;
      }
    }
  }

  if (isFormsFilled && isWeekUniqe) { return true; } else { return false;}
}



function showPopup(message) {
  document.getElementById('popup').style.display = "block";
  document.getElementById('popupText').innerHTML = message;
  setTimeout(() => document.getElementById('popup').style.display = "none", 4500);
}