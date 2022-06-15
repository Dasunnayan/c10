var weight = [35,38,40,45];
var sum=0
var avg=0
function cat (){
  sum=weight[0]+weight[1]+weight[2]+weight[3];
  avg=sum/weight.length;
  console.log(avg)
}
function setup() 
{ createCanvas(400,400)
cat()
};


function draw() 
{
background(51);

}

