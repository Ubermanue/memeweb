// app.js

// Select the button and the container where the meme image will be displayed
const getMemeBtn = document.getElementById('getMemeBtn');
const memeContainer = document.getElementById('memeContainer');

// Add an event listener to the "Get a Random Meme" button
getMemeBtn.addEventListener('click', async () => {
    memeContainer.innerHTML = 'Loading...'; // Show loading text

    try {
        // Fetch the meme from your API
        const response = await fetch('https://memeapi-5gmm.onrender.com/memes/random');
        
        // Check if the response is okay
        if (response.ok) {
            // Get the image content from the response as a Blob
            const imageBlob = await response.blob();
            
            // Create a URL for the image Blob
            const imageURL = URL.createObjectURL(imageBlob);

            // Display the image on the page
            memeContainer.innerHTML = `<img src="${imageURL}" alt="Random Meme" />`;
        } else {
            memeContainer.innerHTML = 'Failed to load meme.';
        }
    } catch (error) {
        memeContainer.innerHTML = 'Error fetching meme image.';
    }
});
