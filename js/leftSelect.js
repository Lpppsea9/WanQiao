//leftSelect下面的一级菜单 实时监测系列
let li1 = document.getElementsByClassName("leftSelectTitle"); 
for(let i = 0; i < li1.length; i++) {
  let atag = li1[i].children[0];  //a标签
  let ul2 = li1[i].children[1].children[0]; //二级ul
  let li2 = ul2.getElementsByTagName("li") //二级ul里的li元素
  // console.log(leftSelect_item);
  // console.log(aline);
  atag.addEventListener("click", function () {
    if (this.parentNode.children[1].style.display == "" || this.parentNode.children[1].style.display == "none"){
      this.parentNode.children[1].style.display = "block";
      this.style.color = "#fff"
      // ul2.style.backgroundColor = "black"
    } else {
      this.parentNode.children[1].style.display = "none";
      this.style.color = "#c4c5c9";
      // ul2.style.backgroundColor = "yellow"
    }
  })
  
//循环二级ul，给每个li添加点击事件
  const li2len = ul2.getElementsByTagName("li").length; //二级ul里的li标签个数
  console.log(li2len);
  for (let j = 0; j < li2len; j++) {
    
    ul2.children[j].addEventListener("click",function () {
      for (let n = 0; n < li2len; n++) {
        li2[n].style.backgroundColor = "#323642";
      }
      ul2.children[j].style.backgroundColor = "red";
    })
  }
}

// let ul2 = document.getElementById("ul2")
// console.log(ul2);

