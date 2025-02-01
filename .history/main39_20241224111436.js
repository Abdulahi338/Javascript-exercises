


// // Replace with your Microsoft Translator API credentials
// const apiKey = "ca90974d93msh9216af776397d8bp121fa2jsn87781afa5447"; // Your API key
// const region = "westus"; // Your Azure region (change as per your Azure account setup)
// const endpoint = "https://api.cognitive.microsofttranslator.com";

// // Function to fetch languages and populate dropdowns
// async function fetchLanguages() {
//     const url = ${endpoint}/languages?api-version=3.0;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         const languages = data.translation;
//         console.log(languages);

//         const sourceLang = document.getElementById("sourceLang");
//         const targetLang = document.getElementById("targetLang");

//         // Clear existing options
//         sourceLang.innerHTML = "";
//         targetLang.innerHTML = "";

//         // Populate language dropdowns
//         for (let code in languages) {
//             const languageName = languages[code].name;

//             const option1 = document.createElement("option");
//             option1.value = code;
//             option1.textContent = languageName;

//             const option2 = option1.cloneNode(true);

//             sourceLang.appendChild(option1);
//             targetLang.appendChild(option2);
//         }
//     } catch (error) {
//         console.error("Error fetching languages:", error);
//         alert("Failed to load languages. Please try again later.");
//     }
// }

// // Function to translate text
// async function translateText() {
//     const inputText = document.getElementById("inputText").value;
//     const sourceLang = document.getElementById("sourceLang").value;
//     const targetLang = document.getElementById("targetLang").value;

//     if (!inputText || !sourceLang || !targetLang) {
//         alert("Please fill in all fields.");
//         return;
//     }

//     const url = ${endpoint}/translate?api-version=3.0&from=${sourceLang}&to=${targetLang};
//     const options = {
//         method: 'POST',
//         headers: {
//             'x-rapidapi-key': '67051cc91fmshd78b4c751400f5bp1d5a63jsn773cb558b82b',
//             'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify( {
//             sep: '|',
//             text: ${inputText}
//         })
//     };
//     try {
//         // const response = await fetch(url, {
//         //     method: "POST",
//         //     headers: {
//         //         "ca90974d93msh9216af776397d8bp121fa2jsn87781afa5447": apiKey,
//         //         "Ocp-Apim-Subscription-Region": region,
//         //         "Content-Type": "application/json",
//         //     },
//         //     body: JSON.stringify([{ Text: inputText }]),
//         // });

//         const data = await  fetch(url, options)
//         // response.json();
//         const result = await data.json();

//         // Check for translation response
//         if (data[0]?.translations?.length > 0) {
//             document.getElementById("outputText").value = data[0].translations[0].text;
//         } else {
//             alert("No translation available.");
//         }
//     } catch (error) {
//         console.error("Error translating text:", error);
//         alert("Translation failed. Please try again.");
//     }
// }

// // Initialize language fetching and set up button listener
// window.onload = () => {
//     fetchLanguages();
//     document.getElementById("translateButton").addEventListener("click", translateText);
// };

// Select DOM elements
const from = document.querySelector('#from');
const to = document.querySelector('#to');
let text = document.querySelector('#text');
let answer = document.querySelector('#response');

// Fetch languages and populate dropdowns
async function fetchLanguages() {
    const url = 'https://microsoft-translator-text-api3.p.rapidapi.com/languages';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ca90974d93msh9216af776397d8bp121fa2jsn87781afa5447', // Replace with your actual key
            'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com',
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        const languages = result.translation;
        from.innerHTML = '';
        to.innerHTML = '';

        for (let lang in languages) {
            const optionFrom = `<option value="${lang}">${languages[lang].name}</option>`;
            const optionTo = `<option value="${lang}">${languages[lang].name}</option>`;

            from.innerHTML += optionFrom;
            to.innerHTML += optionTo;
        }
    } catch (error) {
        console.error("Error fetching languages:", error);
        alert("Failed to load languages. Please try again later.");
    }
}

// Translate text
async function translateText(event) {
    event.preventDefault();

    const url = `https://microsoft-translator-text-api3.p.rapidapi.com/translate?to=${to.value}&from=${from.value}&textType=plain`;
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': 'ca90974d93msh9216af776397d8bp121fa2jsn87781afa5447', // Replace with your actual key
            'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify([
            {
                Text: text.value,
            },
        ]),
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        // Check for translation result
        if (result[0]?.translations?.length > 0) {
            answer.textContent = result[0].translations[0].text;
        } else {
            answer.textContent = "No translation available.";
        }
    } catch (error) {
        console.error("Error translating text:", error);
        alert("Translation failed. Please try again.");
    }
}

// Initialize event listeners and fetch languages
window.onload = () => {
    fetchLanguages();

    // Attach event listener to the form
    document.querySelector('#forms').addEventListener('submit', translateText);
};
