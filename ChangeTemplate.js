class ChangeTemplate{
    constructor(TemplateNumber,  Img_change,  Text_change){
        this.TemplateNumber = TemplateNumber;
        this.Img_change = Img_change;
        this.Text_change = Text_change;
    }
}
var templateNum = 0;
function SaveTemplateNum(arr) {
    
    console.log(arr);

}
function ShowTemplate(){
    const templateToChange = new ChangeTemplate(parseInt(templateNum),0,document.getElementById("textInput1").value);
    localStorage.setItem("ChangeTemplate",JSON.stringify(templateToChange));
    console.log(templateToChange.Text_change);
}
function PreviewTemplate() {
    console.log(JSON.parse(localStorage.getItem("ChangeTemplate")).Text_change);
    document.getElementById('new_text').innerHTML = JSON.parse(localStorage.getItem("ChangeTemplate")).Text_change;
    console.log(JSON.parse(localStorage.getItem("ChangeTemplate")).Text_change);
}