class ChangeTemplate{
    constructor(TemplateNum,  Img_change,  Text_change){
        TemplateNum.this = TemplateNum;
        Img_change.this = Img_change;
        Text_change.this = Text_change;
   
    }
    
}

function Test(templateNumber) {
    let templateNum = templateNumber
}

function ShowTemplate(){
  const templateToChange = new ChangeTemplate(templateNum,0,document.getElementById("textInput1").value);
  console.log(templateToChange);
}

