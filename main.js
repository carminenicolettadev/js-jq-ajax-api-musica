// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione
// una decina di dischi musicali.Servendoci di handlebars stampiamo
// tutto a schermo.In questo momento non è importante la parte grafica.
$(document).ready(function() {
  // creo variabile che corrisponde a ciò che mi ritorna la mia api

  $.ajax({//chiamata ajax alla mia api
      url:"https://flynn.boolean.careers/exercises/api/array/music",
      method:"GET",
      success:function(data){//in caso di successo
        var disco = (data.response);
        console.log(disco);
        var classe;
        var source = $("#template").html();
        console.log(source);
        var template = Handlebars.compile(source);
        // creo ciclo for per stampare tutti i cd presenti nella mia api
        for(var i = 0 ; i < disco.length ; i++){
          if(disco[i].genre==="Rock"){
            classe = "rock";
          }else if(disco[i].genre ==="Pop"){
            classe="pop";
          }else if(disco[i].genre ==="Jazz"){
            classe="jazz";
          }else {
            classe="metal";
          }

          var context = {
            attributo:classe,
            image: disco[i].poster,
            title: disco[i].title,
            autor: disco[i].author,
            year: disco[i].year
          };

          var html = template(context);

          $(".cds-container.container").append(html);

        }//chiusura ciclo for


      },//chiusura funzione success
      error : function (richiesta,stato,error) {//in caso di errore nella chiamata
        alert("E' avvenuto un errore. "+error);
      }//chiusura funzione errore
    });//chiusura chiamata ajax

    $(".menu .menu-icon i").click(
      function(){
        $(".menu-in").toggle();
      }
    );
    $(".menu-in li#pop").click(
      function(){
        $("div.cd ").hide();
        $("div.cd[rif='pop']").show();
      }
    )
    $(".menu-in li#rock").click(
      function(){
        $("div.cd ").hide();
        $("div.cd[rif='rock']").show();
      }
    )
    $(".menu-in li#metal").click(
      function(){
        $("div.cd ").hide();
        $("div.cd[rif='metal']").show();
      }
    )
    $(".menu-in li#jazz").click(
      function(){
        $("div.cd ").hide();
        $("div.cd[rif='jazz']").show();
      }
    )
});
