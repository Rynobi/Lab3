var Colr;
var stoke;
var BgCOlr

function setup(){
    createCanvas(720,420)
    Colr = createColorPicker()

    stoke = createSlider(1,100,1,1);

    BgCOlr = createColorPicker("white")
    BgCOlr.changed(refresh)
    background(BgCOlr.value())
}

function draw(){
    strokeWeight(stoke.value())
    stroke(Colr.value())
    if(mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY)
    }
}

function refresh(){
    background(BgCOlr.value())
}