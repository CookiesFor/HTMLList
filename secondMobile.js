/**
 * Created by MAC01 on 2017/1/13.
 */

var ta;

$(document).ready(function () {

    localStorage.setItem("key","123");

    $('#divImg1').click(function () {

        alert("123456");

        window.location.href="graphic.html";
    });

    $('#divImg2').click(function () {

        window.location.href = "fiveMobile.html";

    });

    $('#divImg3').click(function () {

        window.location.href = "sixMobile.html";



        // alert(document.getElementById("h4").innerHTML);
        // document.getElementById("h4").innerHTML = localStorage.getItem("key");

    });

    $('#divImg4').click(function () {

        window.location.href = "sevenMobile.html";

    });


})