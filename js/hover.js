Agenda=document.querySelector(".Agenda");
Team=document.querySelector(".Team");
Agendap=document.querySelector(".Our-Agenda");
Teamp=document.querySelector("#Team");
Contact=document.querySelector("#Contact");
Contactap=document.querySelector(".Contact");
Agendap.addEventListener("mouseover",function(){
    Agenda.style.color="#00ffdd";
    Agenda.style.transform="rotate(360deg)";
});
Agendap.addEventListener("mouseout",function(){
    Agenda.style.color="#002142";
    Agenda.style.transform="rotate(-360deg)";
});
Teamp.addEventListener("mouseover",function(){
    Team.style.color="#00ffdd";
    Team.style.transform="rotate(360deg)";
});
Teamp.addEventListener("mouseout",function(){
    Team.style.color="#002142";
    Team.style.transform="rotate(-360deg)";
});
Contact.addEventListener("mouseout",function(){
    Contactap.style.color="#002142";
    Contactap.style.transform="rotate(-360deg)";
});
Contact.addEventListener("mouseover",function(){
    Contactap.style.color="#00ffdd";
    Contactap.style.transform="rotate(360deg)";
});
