//系统概况单独做点击事件
let sysbtn = document.getElementById("leftSelect1");
let sysbtna = sysbtn.getElementsByTagName("a")[0];  //获取所有的a标签元素，有索引
sysbtn.onclick = function(){
  this.style.backgroundColor = "#00a65a"; 
  sysbtna.style.color = "#fff"
}

//leftSelect下面的一级菜单 实时监测系列
let li1 = document.getElementsByClassName("leftSelectTitle"); 
for(let i = 0; i < li1.length; i++) {
  let atag1 = li1[i].children[0];  //a标签
  let ul2 = li1[i].children[1].children[0]; //二级ul
  let li2 = ul2.getElementsByTagName("li"); //二级ul里的li元素
  let span1 = atag1.children[0];
  
  //给一级ul的li标签中的a标签添加点击事件
  atag1.addEventListener("click", function () {
    sysbtn.style.backgroundColor = "#393d49"; //系统概况背景颜色还原为灰色
    sysbtna.style.color = "#c4c5c9";  //系统概况a标签还原成灰色
    if (this.parentNode.children[1].style.display == "" || this.parentNode.children[1].style.display == "none"){
      this.parentNode.children[1].style.display = "block";
      this.style.color = "#fff"; //一级a标签字体白色
    } else {
      this.parentNode.children[1].style.display = "none";
      this.style.color = "#c4c5c9";  //一级a标签字体灰色
    }

    //给倒三角添加点击旋转样式事件
    
    if(span1.classList.contains("triangle_rotate") == false){
      span1.classList.add("triangle_rotate")
    }else{
      span1.classList.remove("triangle_rotate")
    }

    
    //二级li标签判断是否已经为绿色，是的话重新变为灰色
    for(let m = 0; m < li2.length; m++){
      
      let atag2 = li2[m].children[0]; //二级a标签
      if (ul2.children[m].style.backgroundColor = "#00a65a"){ //如果二级li标签背景变绿
        ul2.children[m].style.backgroundColor = "#323642"; //二级li背景重新变深灰
        atag2.style.color = "#c4c5c9"; //二级a标签字体重新灰色
      }
    }
    
  })
  
//循环二级ul，给每个li添加点击事件
  const li2len = ul2.getElementsByTagName("li").length; //二级ul里的li标签个数
  // console.log(li2len);
  for (let j = 0; j < li2len; j++) {
    let atag2 = li2[j].children[0];
    ul2.children[j].addEventListener("click",function () {
      for (let n = 0; n < li2len; n++) {
        li2[n].style.backgroundColor = "#323642"; //二级li标签先循环变深灰
        let atag2 = li2[n].children[0]; //二级a标签
        atag2.style.color = "#c4c5c9"; //二级a标签字体灰色
      }
      ul2.children[j].style.backgroundColor = "#00a65a"; //二级li标签背景点击变绿
      atag2.style.color = "#fff" //二级a标签字体白色
    })
  }
}


