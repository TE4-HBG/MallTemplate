class ChangeTemplate{
    constructor(TemplateNumber,  Img_change,  Text_change){
        this.TemplateNumber = TemplateNumber;
        this.Img_change = Img_change;
        this.Text_change = Text_change;
   
    }
    
}
var templateNum = 0;

function SaveTemplateNum(templateNumber) {
    templateNum = templateNumber;
    console.log(templateNum);
}

function ShowTemplate(){
    const templateToChange = new ChangeTemplate(parseInt(templateNum),0,document.getElementById("textInput1").value);
    localStorage.setItem("ChangeTemplate",JSON.stringify(templateToChange));
    
}

function PreviewTemplate() {
    console.log(JSON.parse(localStorage.getItem("ChangeTemplate")).Text_change);
    document.getElementById('new_text').innerHTML = JSON.parse(localStorage.getItem("ChangeTemplate")).Text_change;
    
}