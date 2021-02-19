// -------------------
//       Drawing
// -------------------

function lineOfSquares(y: number, startWithBlack: boolean) {
    let drawBlack = startWithBlack
    for (let i = 0; i < 8; ++i) {
        if (drawBlack)
            fill('black')
        else
            fill('white')
        rect(i * width/8, y, width/8)
        drawBlack = !drawBlack
    }
}

function draw() {
    for (let i = 0; i < 8; ++i) {
        lineOfSquares(i*height/8, i % 2 === 0)
    }
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}