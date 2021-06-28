var Body = {
  setColor:function (color){
    document.querySelector('body').style.color = color;
},
  setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
}
}


function nightdayHandler(self){
  var target = document.querySelector('body')
  if(self.value === 'Night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'Day';

    setColor('powderblue');
}
else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'Night';

    setColor('blue');
}
}
function setColor(color){
var alist=document.querySelectorAll('li');
var i = 0;
while(i < alist.length){
alist[i].style.color = color;
i = i + 1;
}
}
