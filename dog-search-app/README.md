I learned many things in this project 

1. I researched how I can past a argument to the URL 
2. I liked how I can print the dynamic data and showing into the result div 
3. including in this project catching the errors and many styles 

4. I couldn't hide one error when didn't find the image link , showing the error in the navigator , I added an image about the error 
folder images , only I would like doesn't that information because the error I caught in the app 
with this code 

const handlerImageError = ( event ) => {
    const img = event.target;
    const fallbackMessage = document.createElement('p');
    fallbackMessage.textContent = `Failed to load image for ${img.alt}: 403 Forbidden`;
    fallbackMessage.classList.add('error-message');
    img.parentNode.replaceChild(fallbackMessage, img);// replace child img to tag p

} ;


thank you

