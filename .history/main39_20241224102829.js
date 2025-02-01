// Replace with your Microsoft Translator API credentials
const apiKey = "ca90974d93msh9216af776397d8bp121fa2jsn87781afa5447"; // Your API key
const region = "westus"; // Your Azure region (change as per your Azure account setup)
const endpoint = "https://api.cognitive.microsofttranslator.com";

// Function to fetch languages and populate dropdowns
async function fetchLanguages() {
    const url = ${endpoint}/languages?api-version=3.0;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const languages = data.translation;
        console.log(languages);

        const sourceLang = document.getElementById("sourceLang");
        const targetLang = document.getElementById("targetLang");

        // Clear existing options
        sourceLang.innerHTML = "";
        targetLang.innerHTML = "";

        // Populate language dropdowns
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

    const url = ${endpoint}/translate?api-version=3.0&from=${sourceLang}&to=${targetLang};
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '67051cc91fmshd78b4c751400f5bp1d5a63jsn773cb558b82b',
            'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
            sep: '|',
            text: ${inputText}
        })
    };
    try {
        // const response = await fetch(url, {
        //     method: "POST",
        //     headers: {
        //         "ca90974d93msh9216af776397d8bp121fa2jsn87781afa5447": apiKey,
        //         "Ocp-Apim-Subscription-Region": region,
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify([{ Text: inputText }]),
        // });

        const data = await  fetch(url, options)
        // response.json();
        const result = await data.json();

        // Check for translation response
        if (data[0]?.translations?.length > 0) {
            document.getElementById("outputText").value = data[0].translations[0].text;
        } else {
            alert("No translation available.");
        }
    } catch (error) {
        console.error("Error translating text:", error);
        alert("Translation failed. Please try again.");
    }
}

// Initialize language fetching and set up button listener
window.onload = () => {
    fetchLanguages();
    document.getElementById("translateButton").addEventListener("click", translateText);
};