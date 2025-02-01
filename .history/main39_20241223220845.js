// Replace with your Microsoft Translator API credentials
const apiKey = "YOUR_API_KEY"; // Your API key
const region = "YOUR_REGION"; // Your Azure region
const endpoint = "https://api.cognitive.microsofttranslator.com";

// Function to fetch languages and populate dropdowns
async function fetchLanguages() {
    const url = `${endpoint}/languages?api-version=3.0`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const languages = data.translation;

        const sourceLang = document.getElementById("sourceLang");
        const targetLang = document.getElementById("targetLang");

        // Clear existing options
        sourceLang.innerHTML = "";
        targetLang.innerHTML = "";

        for (let code in languages) {
            const languageName = languages[code].name;

            const option1 = document.createElement("option");
            option1.value = code;
            option1.textContent = languageName;

            const option2 = option1.cloneNode(true);

            sourceLang.appendChild(option1);
            targetLang.appendChild(option2);
        }
    } catch (error) {
        console.error("Error fetching languages:", error);
        alert("Failed to load languages. Please try again later.");
    }
}

// Function to translate text
async function translateText() {
    const inputText = document.getElementById("inputText").value;
    const sourceLang = document.getElementById("sourceLang").value;
    const targetLang = document.getElementById("targetLang").value;

    if (!inputText || !sourceLang || !targetLang) {
        alert("Please fill in all fields.");
        return;
    }

    const url = `${endpoint}/translate?api-version=3.0&from=${sourceLang}&to=${targetLang}`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Ocp-Apim-Subscription-Key": apiKey,
                "Ocp-Apim-Subscription-Region": region,
                "Content-Type": "application/json",
            },
            body: JSON.stringify([{ Text: inputText }]),
        });

        const data = await response.json();
        document.getElementById("outputText").value = data[0].translations[0].text;
    } catch (error) {
        console.error("Error translating text:", error);
        alert("Translation failed. Please try again.");
    }
}

// Initialize language fetching and set up button listener
window.onload = fetchLanguages;
document.getElementById("translateButton").addEventListener("click", translateText);
