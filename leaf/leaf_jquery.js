$(document).ready(function(){
  var leaf1 = $("#leaf1"), leaf2 = $("#leaf2"), leaf3 = $('#leaf3'), leaf4 = $('#leaf4'), leaf5 = $('#leaf5'), leaf6 = $('#leaf6'), leaf7 = $('#leaf7'), leaf8 = $('#leaf8'), leaf9 = $('#leaf9'), leaf10 = $('#leaf10'), leaf11 = $('#leaf11'), leaf12 = $('#leaf12'), leaf13 = $('#leaf13'), leaf14 = $('#leaf14'), leaf15 = $('#leaf15');
  setInterval(function() {start1(leaf1)}, getRandom(2000,5000));
  setInterval(function() {start1(leaf2)}, getRandom(2000,5000));
  setInterval(function() {start1(leaf3)}, getRandom(2000,5000));
  setInterval(function() {start1(leaf4)}, getRandom(2000,5000));
  setInterval(function() {start2(leaf5)}, getRandom(2000,5000));
  setInterval(function() {start2(leaf6)}, getRandom(2000,5000));
  setInterval(function() {start2(leaf7)}, getRandom(2000,5000));
  setInterval(function() {start2(leaf8)}, getRandom(2000,5000));
  setInterval(function() {start3(leaf9)}, getRandom(2000,5000));
  setInterval(function() {start3(leaf10)}, getRandom(2000,5000));
  setInterval(function() {start3(leaf11)}, getRandom(2000,5000));
  setInterval(function() {start3(leaf12)}, getRandom(2000,5000));
  setInterval(function() {start4(leaf13)}, getRandom(2000,5000));
  setInterval(function() {start4(leaf14)}, getRandom(2000,5000));
  setInterval(function() {start4(leaf15)}, getRandom(2000,5000));

   
});
function getRandom(minNum, maxNum) {	//取得 minNum(最小值) ~ maxNum(最大值) 之間的亂數
	  return Math.floor( Math.random() * (maxNum - minNum + 1) ) + minNum;
}
function start1(leaf){
  leaf.animate({left: getRandom(9,12)+'%', top: getRandom(15, 20)+'%', opacity: 0}, getRandom(2000,4000), function(){
               leaf.css({"left":getRandom(-7,8)+'%', "top":getRandom(3,9)+'%', "opacity":"100"});
               }); 
}
function start2(leaf){
  leaf.animate({left: getRandom(8,12)+'%', top: getRandom(54,60)+'%', opacity: 0}, getRandom(2000,4000), function(){
               leaf.css({"left":getRandom(-3,5)+'%', "top":getRandom(38,40)+'%', "opacity":"100"});
               }); 
}
function start3(leaf){
  leaf.animate({right: getRandom(14,20)+'%', top: getRandom(19,24)+'%', opacity: 0}, getRandom(2000,4000), function(){
               leaf.css({"right":getRandom(5,13)+'%', "top":getRandom(4,7)+'%', "opacity":"100"});
               }); 
}
function start4(leaf){
  leaf.animate({right: getRandom(10,15)+'%', top: getRandom(50,55)+'%', opacity: 0}, getRandom(2000,4000), function(){
               leaf.css({"right":getRandom(5,8)+'%', "top":getRandom(32,35)+'%', "opacity":"100"});
               }); 
}