//同时调用多个函数
function newQuotes() {
    turncolors();
    turncolors1();

}
//更换背景颜色、字体颜色
var Arraycolor=new Array('#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857');
var n=0;
function turncolors() {
    if (n == (Arraycolor.length - 1)) n = 0;
    n++;
    document.bgColor = Arraycolor[n];
    document.getElementById("text").style.color = Arraycolor[n];
    document.getElementById("weibo").style.background = Arraycolor[n];
    document.getElementById("wechat").style.background = Arraycolor[n];
    document.getElementById("joke").style.background = Arraycolor[n];
}
//随机调用字符串
var ccc = [
    '想像力比知识更重要',
    '每一种创伤，都是一种成熟',
    '激情是成功的必要前提!!',
    '记住该访住的事，忘掉该忘掉的人',
    '越学习,就越发现自己无知',
    '凡事皆有代价，快乐的代价便是痛苦',
    '工作是一种乐趣',
    '爱情, 原来是含笑饮毒酒',
    '年轻就是无限的可能',
    '追求自我的突破',

];
function turncolors1() {
    var randomNumber = Math.floor(Math.random() * (ccc.length));
    document.getElementById("aaa").innerHTML = ccc[randomNumber];
}

