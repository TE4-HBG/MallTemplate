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
    let dinnerList = "<tr>"+ 
    "<td id='weekTableRow'>Vecka</td>" + 
    "<td class='dinnerTableRow'>Måndag</td>" + 
    "<td class='dinnerTableRow'>Tisdag</td>" + 
    "<td class='dinnerTableRow'>Onsdag</td>" + 
    "<td class='dinnerTableRow'>Torsdag</td>" +
    "<td class='dinnerTableRow'>Fredag</td>";
    const dinnerSchedule = new DinnerSchedule(input[0], input[1], input[2], input[3], input[4], input[5]);
    weekList.push(dinnerSchedule);
    for (let i = 0; i < weekList.length; i++) {
      dinnerList += "<tr><td>" + (weekList[i].week).toString() + "</td>" + 
      "<td>" + (weekList[i].monday).toString() + "</td>" + 
      "<td>" + (weekList[i].tuesday).toString() + "</td>" + 
      "<td>" + (weekList[i].wednesday).toString() + "</td>" +
      "<td>" + (weekList[i].thursday).toString() + "</td>" +
      "<td>" + (weekList[i].friday).toString() + "</td></tr>";
    }
    document.getElementById('dinner').innerHTML = dinnerList;
  }
}

function showDinnerSchedule() {
  if (weekList.length === 0) {
    dinnerList = "<tr>"+ 
    "<td id='weekTableRow'>Vecka</td>" + 
    "<td class='dinnerTableRow'>Måndag</td>" + 
    "<td class='dinnerTableRow'>Tisdag</td>" + 
    "<td class='dinnerTableRow'>Onsdag</td>" + 
    "<td class='dinnerTableRow'>Torsdag</td>" +
    "<td class='dinnerTableRow'>Fredag</td>";
  }
  else {
    for (let i = 0; i < weekList.length; i++) {
      dinnerList += "<tr><td>" + (weekList[i].week).toString() + "</td>" + 
      "<td>" + (weekList[i].monday).toString() + "</td>" + 
      "<td>" + (weekList[i].tuesday).toString() + "</td>" + 
      "<td>" + (weekList[i].wednesday).toString() + "</td>" +
      "<td>" + (weekList[i].thursday).toString() + "</td>" +
      "<td>" + (weekList[i].friday).toString() + "</td></tr>";
    }
  }
  document.getElementById('dinner').innerHTML = dinnerList;
}



function CheckForms() { // True if correct input
  const input = ['week', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday']; 
  let isFormsCorrect = true;
  for (let i = 0; i < input.length; i++) {
    if (document.getElementById(input[i]).value === "") {
        console.log("Incorrect input");
        document.getElementById(input[i]).style.borderColor = "red";     // Add text that tells user to put no dinner days as blankspace? 
        isFormsCorrect = false;
    } else {
        document.getElementById(input[i]).style.borderColor = "";
    }
  }
  if (isFormsCorrect) { return true; } else { showPopup(); return false;}
}



function showPopup() {
  document.getElementById('popup').style.display = "block";
  setTimeout(() => document.getElementById('popup').style.display = "none", 4500);
}