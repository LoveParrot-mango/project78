familyarray = ["dad.jpg", "grandparents-cartoon-.jpg", "littlesister.png", "me.jpg", "mom.jpg"];
familynames = ["Rinku", "Daddy & Dadi-mama", "Gunnu", "Mannat", "Rinki"];

var i = 0;
function change() 
{
    i++; 
    var numbers_of_family_member_in_array = 5 
    if(i > numbers_of_family_member_in_array ) 
    { i = 0; } 
    var updatedImage = familyarray[i]; 
    var updatedName = familynames[i]; 
    document.getElementById("familybook").src = updatedImage; 
    document.getElementById("suber_name").innerHTML = updatedName;
}