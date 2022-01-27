const container=document.querySelector("section");
const params= {
    width: 500,
    height: 500
};

const two=new Two(params);
two.appendTo(container);

const plotRadius=200;
const numberOfShapes= 12;

const shapes = [];
for(let i=0;i<numberOfShapes;i++)
{
    const atAngle=i*(fullRotation/numberOfShapes);
    const x= plotRadius*Math.cos(atAngle);
    const y= plotRadius*Math.sin(atAngle);

    const subSquare = two.makeRectangle(x,y,40,40);
    subSquare.noStroke();
    subSquare.fill = "#f9bc31";

    subSquare.rotation = atAngle;
    shapes.push(subSquare);
}

const groupOfSquares = two.makeGroup(shapes);
groupOfSquares.translation.set(params.width/2,params.height/2);

two.bind("update",function() {
    groupOfSquares.rotation +=0.017;
    for(let i=0;i<numberOfShapes;i++) shapes[i].rotation+=0.1;
});

two.play();