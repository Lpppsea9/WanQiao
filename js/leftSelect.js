var leftSelect = document.getElementsByClassName("leftSelectTitle"); //leftSelect下面的一级菜单
// var leftSelect_item = leftSelect[]
// console.log(leftSelect_item);
// console.log(leftSelect[1]); //<li>实时监测<li>对象
for (let i = 0; i < leftSelect.length; i++) {
  let aline = leftSelect[i].children[0];
  let leftSelect_item = leftSelect[i].children[2].children[0]; //二级ul
  let leftSelect_item_li = leftSelect_item.children;  //二级菜单li元素

  // console.log(leftSelect_item);
  // console.log(aline);
  aline.addEventListener("click", function () {
    
    if(this.parentNode.children[2].style.display == "" || this.parentNode.children[2].style.display == "none"){
      this.parentNode.children[2].style.display = "block";
      this.style.color = "#fff"
    }else{
      this.parentNode.children[1].style.display = "none";
      this.style.color = "#c4c5c9"
    }
  })
  // console.log(leftSelect_item_li.length); //二级菜单的长度
  for(let j = 0; j < leftSelect_item_li.length; j++) {
    leftSelect_item_li[j].addEventListener("click",function () {
      for(let k = 0; k < leftSelect_item_li.length; k++) {
        leftSelect_item_li[k].style.background='#323642';
      }
      this.style.background='#00a75a';
    })
  }
}



