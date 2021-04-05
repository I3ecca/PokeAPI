$(function(){

  let pokeApiUrl="https://pokeapi.co/api/v2/generation/1";
  let pokemonByNameUrl="https://pokeapi.co/api/v2/pokemon/";

    $.getJSON(pokeApiUrl).done(function(data){
      console.log(data);
      $.each(data.pokemon_species, function(index, pokemon){
        //gives you the name with a capital first letter. 
        let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        // create an anchor tag with necessary attributes and styling. 
        let link = $("<a>").attr("id", pokemon.name).attr("href", "#").append("<strong>").text(name);
        // specify what a paragraph will be
        let par = $("<p>").html("Pokemon species #" + (index + 1) + " is ").append(link);

        link.click(function(event){
          
          $.getJSON(pokemonByNameUrl + pokemon.name).done(function(details){
            console.log(details);
            let pokemonDiv = $("#pokemon-details");
            pokemonDiv.empty();
            pokemonDiv.append("<h2>" + name + "</h2>");
            pokemonDiv.append(`<img src = ${details.sprites.front_default}>`);
            pokemonDiv.append(`<img src = ${details.sprites.back_default}>`);
            pokemonDiv.append(`<img src = ${details.sprites.front_shiny}>`);
            pokemonDiv.append(`<img src = ${details.sprites.back_shiny}>`);
            
            
          });
          event.preventDefault;
        }
        )
        // Attach the paragraph to the page at the pokedex div. 
        par.appendTo("#pokedex");
        
      });
    }).fail(function(){
      console.log("Request to PokeAPI failed");
    }).always(function(){
      console.log("Pokemon is the best!")
    })
});