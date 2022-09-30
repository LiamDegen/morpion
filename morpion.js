//attribution des id pour chaque <td>


$(function (){
    $("td").each(function (index, element){
        $(element).attr("id", index);
    });

    var symbole = true;
    var nbrVicCroix = 0;
    var nbrVicCercles = 0;

    //ajout des class rond et croix
    $("td").click(function () {
        if (!$(this).hasClass("symbole_0") && !$(this).hasClass("symbole_1")) {
            $(this).addClass("symbole_" + ((symbole) ? "0" : "1"));
            $(this).addClass("check");
            symbole = !symbole;
            $(".ProSymbole").html("Prochain Symbole : " + ((symbole) ? "Cercles" : "Croix"))
        }

        //Cas de victoire
        if (   $("#0").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            && $("#1").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            && $("#2").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            || $("#3").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            && $("#4").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            && $("#5").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            || $("#6").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            && $("#7").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            && $("#8").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            || $("#0").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            && $("#3").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            && $("#6").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            || $("#1").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            && $("#4").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            && $("#7").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            || $("#2").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            && $("#5").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            && $("#8").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            || $("#0").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            && $("#4").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            && $("#8").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            || $("#2").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            && $("#4").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
            && $("#6").hasClass("symbole_" + ((!symbole) ? "0" : "1"))
        ){
            setTimeout(function (){
                alert("Les " + ((symbole) ? "Croix" : "Cercles") + " ont gagné");
                $("td").removeAttr("class");
                $(".ProSymbole").html("Prochain Symbole : " + ((symbole) ? "Cercles" : "Croix"));
                if (symbole == true){
                    nbrVicCroix++;
                    $("#VicCroix").html("Victoire des Croix : " + nbrVicCroix);
                }else if (symbole == false){
                    nbrVicCercles++;
                    $("#VicCercles").html("Victoire des Cercles : " + nbrVicCercles);
                }
            },100);
        }

        //Cas d'égalité
        var checkClass = 0;

        for (var $i = 0; $i < 9; $i++){
            if ($("#" + $i).hasClass("check")){
                checkClass++
            }
        }
        if (checkClass == 9){
            setTimeout(function (){
                alert("Egalité")
                $("td").removeAttr("class");
                $(".ProSymbole").html("Prochain Symbole : " + ((symbole) ? "Cercles" : "Croix"))
            }, 100)
        }
    });
});
