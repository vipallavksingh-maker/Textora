
function changeColor(color) {

    document.getElementById("box").style.backgroundColor = color;

}


function changeText(color) {

    document.getElementById("box").style.color = color;

}


function changeFont(font) {

    document.getElementById("box").style.fontFamily = font;

}


function Paint() {

    const text = document.getElementById("box").innerHTML;

    const color = document.getElementById("box").style.backgroundColor;

    const textColor = document.getElementById("box").style.color;

    const font = document.getElementById("box").style.fontFamily;

    const page = "<html><head><title>Textora</title><style>body { background-color:" + color + "; color:" + textColor + "; font-family:" + font + "; }</style></head><body>" + text + "</body></html>";

    const file = new Blob([page], {type: "text/html"});

    const link = document.createElement("a");

    link.href = URL.createObjectURL(file);

    link.download = "Textora.html";

    link.click();

}
