/**
 * Created by MAC01 on 2016/12/14.
 */
// $(document).ready(function () {
//
//     // $("#click").click(function () {
//     //
//     //     alert("Hello");
//     //
//     // });
//
//
//     // $("#click").bind("click",clickHandler);
//
//     $("body").bind("click",bindHandler);
//     $("div").bind("click",divHandler);
//
// });
// function clickHandler(e) {
//
//     console.log("打印");
// }

// function bindHandler(event) {
//     console.log(event);
// }
// function divHandler(event) {
//     console.log(event);
// }

// var clickMeBtn;
//
// $(document).ready(function () {
//     clickMeBtn = $("#clickMeBtn");
//     clickMeBtn.click(function () {
//
//         var e = jQuery.Event("myEvent");
//         clickMeBtn.trigger(e);
//         // trigger 函数触发器
//     });
//
//     // bind 绑定某个时间；unbind，解除某个绑定事件
//     clickMeBtn.bind("myEvent",function (event) {
//
//         console.log(event);
//
//     });
//
// });


// var a=0;
//
// $(document).ready(function () {
//
//     $("button").click(function () {
//         if (a==0)
//         {
//             $("p").hide(1000);
//             a = 1;
//         }else
//             {
//                 $("p").show(1000);
//                 a = 0;
//             }
//
//
//     });
//     $("#show").click(function () {
//
//         $("p").show(1000);
//
//     });
//
//
//     $("#toggle").click(function () {
//
//         $("p").toggle(1000);
//
//     });
//
//
// });

$(document).ready(function () {

    $("#fade").on("click",function () {

        $("#div1").fadeIn(1000);
        $("#div2").fadeIn(1000);
        $("#div3").fadeIn(1000);

    })
    $("#out").on("click",function () {

        $("#div1").fadeOut(1000);
        $("#div2").fadeOut(1000);
        $("#div3").fadeOut(1000);

    })
    $("#toggle").on("click",function () {

        $("#div1").fadeToggle(1000);
        $("#div2").fadeToggle(1000);
        $("#div3").fadeToggle(1000);

    })


    $("#flipshow").on("click",function () {

        $("#content").slideToggle(1000);


    })

    $("#btn").click(function () {

        // 隐藏之后，再执行一个方法
        // $("#p").hide(1000,function () {
        //
        //     alert("这就叫做回掉");
        //
        //
        // });
        $("#p").css("color","red").slideUp(1000).slideDown(1000);
    })


})

