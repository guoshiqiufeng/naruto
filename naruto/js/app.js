/**
 * Created by Ñîð©Ç¿ on 2015/4/5 0005.
 */
window.onload = function () {
    var picsTitle1 = document.getElementById("pics-title1");
    var picsTitle2 = document.getElementById("pics-title2");
    var picsTitle3 = document.getElementById("pics-title3");
    var picsTitle4 = document.getElementById("pics-title4");

    var img = document.getElementById("img1");
    var link=document.getElementById("imgLink");

    picsTitle1.onmouseover = function () {

        img.src = "images/index_1.jpg";
        link.href="2-11-14.html";
    }
    picsTitle2.onmouseover = function () {

        img.src = "images/index_2.jpg";
        link.href="2-11-15.html";
    }
    picsTitle3.onmouseover = function () {

        img.src = "images/index_3.jpg";
        link.href="2-11-16.html";
    }
    picsTitle4.onmouseover = function () {

        img.src = "images/index_4.jpg";
        link.href="2-11-17.html";
    }

}