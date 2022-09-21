class Template {
    constructor(numTextBox, numImgBox, numVideoBox) {
        this.numTextBox = numTextBox;
        this.numImgBox = numImgBox;
        this.numVideoBox = numVideoBox;
    }
}

let templateArray = [];
templateArray[0] = new Template(1,1,0);
templateArray[1] = new Template(2,0,0);

function TemplateArray() {
    return templateArray;
}