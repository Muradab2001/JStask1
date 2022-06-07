//task1 start
var hour = new Date().getHours();
console.log(hour);
if(hour>9&&hour<=13){
    document.body.style.backgroundColor='white';
    alert('sabaxiniz xeyir');
}
else if(hour>13&&hour<=19){
    document.body.style.backgroundColor='yellow';
    alert('gunortaniz xeyir');
}
else if(hour>19&&hour<=23){
    document.body.style.backgroundColor='black';
    alert('axsaminiz xeyir');
}
else if(hour>0&&hour<=9){
    document.body.style.backgroundColor='#211f1f';
    alert('a bala yixil yat');
}
//task1 end
//task2 start
var Kvadrat=5;
console.log(Math.pow(Kvadrat,2));


var r =2;
var s=Math.pow(r,2)*Math.PI;
console.log(s);
//task2 end