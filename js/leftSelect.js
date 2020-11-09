//leftSelect下面的一级菜单 实时监测系列
let li1 = document.getElementsByClassName("leftSelectTitle"); 
for(let i = 0; i < li1.length; i++) {
  let atag1 = li1[i].children[0];  //a标签
  let ul2 = li1[i].children[1].children[0]; //二级ul
  let li2 = ul2.getElementsByTagName("li"); //二级ul里的li元素
  
  // console.log(leftSelect_item);
  // console.log(aline);
  atag1.addEventListener("click", function () {
    if (this.parentNode.children[1].style.display == "" || this.parentNode.children[1].style.display == "none"){
      this.parentNode.children[1].style.display = "block";
      this.style.color = "#fff";
    } else {
      this.parentNode.children[1].style.display = "none";
      this.style.color = "#c4c5c9";
    }
    //二级li标签判断是否为绿色，是的话重新变为灰色
    for(let m = 0; m < li2.length; m++){  
      if (ul2.children[m].style.backgroundColor = "#00a65a"){
        ul2.children[m].style.backgroundColor = "#323642";
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
        li2[n].style.backgroundColor = "#323642";
        let atag2 = li2[n].children[0];
        atag2.style.color = "#c4c5c9";
      }
      ul2.children[j].style.backgroundColor = "#00a65a";
      atag2.style.color = "#fff"
    })
  }
}


