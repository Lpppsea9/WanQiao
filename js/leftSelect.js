//leftSelect下面的一级菜单 实时监测系列
let li1 = document.getElementsByClassName("leftSelectTitle"); 
for(let i = 0; i < li1.length; i++) {
  let atag = li1[i].children[0];  //a标签
  let ul2 = li1[i].children[1].children[0]; //二级ul
  // console.log(leftSelect_item);
  // console.log(aline);
  atag.addEventListener("click", function () {
    
    if(this.parentNode.children[1].style.display == "" || this.parentNode.children[1].style.display == "none"){
      this.parentNode.children[1].style.display = "block";
      this.style.color = "#fff"
    }else{
      this.parentNode.children[1].style.display = "none";
      this.style.color = "#c4c5c9"
    }
  })
  
//循环二级ul，给每个li添加点击事件
  const li2len = ul2.getElementsByTagName("li").length; //二级ul里的li标签个数
  console.log(li2len);
  for (let j = 0; j < li2len; j++) {
    ul2.children[j].addEventListener("click",function () {
      this.style.backgroundColor = "red"
    })
  }
}

// let ul2 = document.getElementById("ul2")
// console.log(ul2);

