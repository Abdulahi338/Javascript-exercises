



// Get DOM elements
const sourceLang = document.querySelector('#sourceLang');
const targetLang = document.querySelector('#targetLang');
const inputText = document.querySelector('#inputText');
const outputText = document.querySelector('#outputText');

// Fetch available languages on page load
window.onload = fetchLanguages;

// Event listener for the translate button
document.querySelector('#translateButton').addEventListener('click', async function (event) {
    const text = inputText.value.trim();
    const fromLang = sourceLang.value;
    const toLang = targetLang.value;

    if (!text || !fromLang || !toLang) {
        alert('Please fill all fields before translating.');
        return;
    }

    // Perform the translation
    await translateText(text, fromLang, toLang);
});

// Function to fetch available languages
async function fetchLanguages() {
    const url = 'https://microsoft-translator-text-api3.p.rapidapi.com/languages?api-version=3.0';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ca90974d93msh9216af776397d8bp121fa2jsn87781afa5447',
            'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com',
        },
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const result = await response.json();
        const languages = result.translation;

        // Populate 'sourceLang' and 'targetLang' dropdowns
        for (let code in languages) {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = languages[code].name;

            // Append to both dropdowns
            sourceLang.appendChild(option.cloneNode(true));
            targetLang.appendChild(option);
        }
    } catch (error) {
        console.error('Error fetching languages:', error);
        alert('Failed to fetch languages. Please try again later.');
    }
}

// Function to translate text
async function translateText(text, fromLang, toLang) {
    const url = `https://microsoft-translator-text-api3.p.rapidapi.com/translate?api-version=3.0&from=${fromLang}&to=${toLang}`;
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': 'ca90974d93msh9216af776397d8bp121fa2jsn87781afa5447',
            'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify([{ text: text }]),
    };

    try {
        outputText.value = 'Translating...'; // Show loading message

        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const result = await response.json();

        // Display the translation
        if (result && result[0]?.translations?.length > 0) {
            outputText.value = result[0].translations[0].text;
        } else {
            outputText.value = 'No translation available.';
        }
    } catch (error) {
        console.error('Error during translation:', error);
        alert('Translation failed. Please check your input and try again.');
    }
}
