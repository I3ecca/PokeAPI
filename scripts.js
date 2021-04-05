$(function(){

  let pokeApiUrl="https://pokeapi.co/api/v2/generation/1";

    $.getJSON(pokeApiUrl).done(function(data){
      console.log(data);
      $.each(data.pokemon_species, function(index, pokemon){
        //gives you the name with a capital first letter. 
        let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        // specify what a paragraph will be
        let par = $("<p>").html("Pokemon species #" + (index + 1) + " is " + name);
        // Attach the paragraph to the page at the pokedex div. 
        par.appendTo("#pokedex");
      });
    }).fail(function(){
      console.log("Request to PokeAPI failed");
    }).always(function(){
      console.log("Pokemon is the best!")
    })
});