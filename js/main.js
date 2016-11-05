/**
 * Created by Administrator on 2016/11/5.
 */
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
    (function(){
        window.scrollReveal = new scrollReveal({reset: true});
    })();
};

var category_btn = document.getElementById("categories");
var category_list = document.getElementById("category_list");
category_btn.onmouseover = function () {
    category_list.style.display = "block";
}
category_list.onmouseover = function () {
    category_list.style.display = "block";
}
category_btn.onmouseout = function () {
        category_list.style.display = "none";
}
