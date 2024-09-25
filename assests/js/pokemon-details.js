const details = document.getElementById('details');
const detailsContent = document.getElementById('details-content');

function showPokemonDetails(pokemon) {
    detailsContent.innerHTML = `
        <h1>Detalhes do Pokemon: <span style="text-transform: capitalize;">${pokemon.name}</span></h1>
        <p>Altura: ${pokemon.height}</p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Habilidades: ${pokemon.abilities.join(', ')}</p>
        <p>Ataque: ${pokemon.attack}</p>
        <p>Defesa: ${pokemon.defense}</p>
        <p>Velocidade: ${pokemon.speed}</p>

    `;
    details.style.display = 'flex';
}


details.addEventListener('click', (event) => {
    if(event.target === details) {
        details.style.display = 'none';
    }
});


pokemonList.addEventListener('click', async (event) => {
    const detailsButton = event.target.closest('.details-button');

    if(detailsButton) {
        const pokemonId = parseInt(detailsButton.getAttribute('data-pokemon-id'));

        try {
            const pokemonDetails = await pokeApi.getPokemonDetailById(pokemonId);
            showPokemonDetails(pokemonDetails);

        } catch (error) {
            console.error("Erro ao exibir detalhes do Pokemon", error);
        }
    } 
    
});