// Replace these with your Microsoft Translator API credentials
const apiKey = "YOUR_API_KEY"; // Your API key
const region = "YOUR_REGION"; // Your Azure region
const endpoint = "https://api.cognitive.microsofttranslator.com";

// Function to fetch supported languages and populate the dropdowns
function fetchLanguages() {
    const url = `${endpoint}/languages?api-version=3.0`;

    // Fetch the list of languages
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const languages = data.translation;

            // Get dropdown elements
            const sourceLang = document.getElementById("sourceLang");
            const targetLang = document.getElementById("targetLang");

            // Loop through languages and add them to the dropdowns
            for (let code in languages) {
                const languageName = languages[code].name;

                // Create option element
                const option1 = document.createElement("option");
                option1.value = code;
                option1.textContent = languageName;

                const option2 = option1.cloneNode(true); // Clone for the second dropdown

                // Add to both dropdowns
                sourceLang.appendChild(option1);
                targetLang.appendChild(option2);
            }
        })
        .catch((error) => {
            console.error("Error fetching languages:", error);
            alert("Failed to load languages. Please try again later.");
        });
}

// Function to translate text
function translateText() {
    const inputText = document.getElementById("inputText").value;
    const sourceLang = document.getElementById("sourceLang").value;
    const targetLang = document.getElementById("targetLang").value;

    if (!inputText) {
        alert("Please enter some text to translate.");
        return;
    }

    const url = `${endpoint}/translate?api-version=3.0&from=${sourceLang}&to=${targetLang}`;

    fetch(url, {
        method: "POST",
        headers: {
            "Ocp-Apim-Subscription-Key": apiKey,
            "Ocp-Apim-Subscription-Region": region,
            "Content-Type": "application/json",
        },
        body: JSON.stringify([{ Text: inputText }]),
    })
        .then((response) => response.json())
        .then((data) => {
            const translatedText = data[0].translations[0].text;
            document.getElementById("outputText").value = translatedText;
        })
        .catch((error) => {
            console.error("Error translating text:", error);
            alert("Translation failed. Please try again.");
        });
}

// Call fetchLanguages when the page loads
window.onload = fetchLanguages;

// Add event listener to the Translate button
document.getElementById("translateButton").addEventListener("click", translateText);
