
// $(document).ready(function(){})


function nowMenu(menu){ //menu = "main"
    if(menu == "main"){
        $(".bar").css("opacity",0)
        console.log("메인 연결됨");
    }
    else{
        $(".menu li").eq(menu).addClass("active")  //document.querySelectorAll(".menu li")[menu].classList.add("active")
        $(".bar").css("left",200*menu)
        console.log("서브페이지")
    }



    $(".menu li").hover(function(){ //hover는 리스너(function,function)가 두개 들어감
        let menuLi = $(this).index();

        $(this).css("background-color","skyblue");

        if(menu == "main"){
            $(".bar").css("opacity",1);
        }

        $(".bar").css("left",200*menuLi);

    },function(){
        $(this).css("background-color","initial");
        if(menu == "main"){
            $(".bar").css("opacity",0);
        }
        $(".bar").css("left",200*menu); //"left"는 css에 left 값을 넣었기 때문에 left 값을 움직여야함
    });



}





