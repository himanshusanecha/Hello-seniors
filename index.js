var btn = document.getElementById("button");
btn.addEventListener("click",function(){
    var text = document.getElementById("text").value;
    if(text=="akshita")
    {
        $("#myModal").modal();
        var btn1 = document.getElementById("close");
        btn1.addEventListener("click",function(){
            var card1 = document.getElementById("card1");
            card1.style.display = "block";
        });
        
        
    }
    if(text=="keshav")
    {
        $("#myModal1").modal();
        var btn2 = document.getElementById("close1");
        btn2.addEventListener("click",function(){
            var card2 = document.getElementById("card2");
            card2.style.display = "block";
        });
    }
    if(text=="preeti")
    {
        $("#myModal2").modal();
        var btn3 = document.getElementById("close2");
        btn3.addEventListener("click",function(){
            var card3 = document.getElementById("card3");
            card3.style.display = "block";
        });
    }
    if(text=="abhimanyu")
    {
        $("#myModal3").modal();
        var btn4 = document.getElementById("close3");
        btn4.addEventListener("click",function(){
            var card4 = document.getElementById("card4");
            card4.style.display = "block";
        });
    }
    if(text=="anjali")
    {
        $("#myModal4").modal();
        var btn5 = document.getElementById("close4");
        btn5.addEventListener("click",function(){
            var card5 = document.getElementById("card5");
            card5.style.display = "block";
        });
    }
    
});
