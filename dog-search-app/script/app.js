const dogForm = document.getElementById('dogForm');

dogForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    const dog = document.getElementById('dogInput').value; // Get the dog input value
    searchDog(dog); // Call the function to search for dog data
});

/**
 * 
 * Search Dog  data for the specified Dog name. 
 * @param {string} Dog - The dog name to search for.
 * 
 */

const searchDog = ( dog ) =>{
    const apiUrl = `https://api.thedogapi.com/v1/breeds/search?q=${dog}`;

    showLoading();

    fetch(apiUrl)
         .then(response => response.json())
         .then( data => {
            hideLoading();

            if(data.length === 0){
                displayError(`No results found. Please try another breed.`);
            }else{
               displayDog(data);
            }

         })
         .catch(error => {
            hideLoading(); // Hide loading indicator
            console.error('Error fetching dog data:', error); // Log any errors
            displayError(`Error fetching dog data. Please try again. `);

         });

} 


/**
 * Displays the fetched dog data in the dogResults div.
 * @param {array} data - The dog data to display.
 */
function displayDog(data) {
    const dogResults = document.getElementById('dogResults');
    dogResults.innerHTML = ''; // Clear any previous results
   

    data.forEach(dog => {
        const dogItem = document.createElement('div');
        dogItem.classList.add('dog-item');
        dogItem.innerHTML = `
        <div class="dog-item-content">
            <img src="https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg" alt="${dog.name}" onerror="handlerImageError(event)" >
            <h3>${dog.name}</h3>
            <p><strong>Breed Group:</strong> ${dog.breed_group || 'N/A'}</p>
            <p><strong>Life Span:</strong> ${dog.life_span}</p>
            <p><strong>Temperament:</strong> ${dog.temperament}</p>
         </div>   
        `;
        dogResults.appendChild(dogItem); // Append the dog item to the results
    });
}

/**
 * 
 * @param { * } event Remplace the object img for tag <p> and add message if the link not found  
 */
const handlerImageError = ( event ) => {
    const img = event.target;
    const fallbackMessage = document.createElement('p');
    fallbackMessage.textContent = `Failed to load image for ${img.alt}: 403 Forbidden`;
    fallbackMessage.classList.add('error-message');
    img.parentNode.replaceChild(fallbackMessage, img);// replace child img to tag p

} ;

/**
 * Displays an error message in the doglResults div.
 * @param {string} message - The error message to display.
 */
const displayError = (message) => {
    const dogResults = document.getElementById('dogResults');
    dogResults.innerHTML = `<p>${message}</p>`;
}


/**
 * Shows a loading indicator while fetching data.
 */
function showLoading() {
    const dogResults = document.getElementById('dogResults');
    dogResults.innerHTML = '<p>Loading...</p>';
}

/**
 * Hides the loading indicator.
 */
function hideLoading() {
    const doglResults = document.getElementById('dogResults');
    doglResults.innerHTML = '';
}