import './app2.css'
import $ from "jquery";
/*样式与行为分离，js不要去操纵css，不好的习惯*/

let $tabBar = $("#app2 .tab-bar");
let $tabContent = $("#app2 .tab-content");

// 要获取点击的元素的id
$tabBar.on("click", "li", (e) => {
  let $li = $(e.currentTarget);
  $li.addClass("selected").siblings().removeClass("selected");
  let index = $li.index();
  $tabContent
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$tabBar.children().eq(0).trigger("click");
