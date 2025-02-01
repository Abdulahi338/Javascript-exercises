


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

// const from = document.querySelector('#from')
// const to = document.querySelector('#to')
// let text = document.querySelector('#text')
// let answer = document.querySelector('#respon')
// let str = JSON.stringify(answer)
// methodGet()
// document.querySelector('#forms').addEventListener('submit', async function (event) {


//     event.preventDefault();
//     console.log('hi')

//     methodGet()

//     const url = `https://microsoft-translator-text-api3.p.rapidapi.com/translate?to=${to.value}&from=${from.value}&textType=plain`;
//     const options = {
//         method: 'POST',
//         headers: {
//             'x-rapidapi-key': 'ca90974d93msh9216af776397d8bp121fa2jsn87781afa5447',
//             'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com',
//             'Content-Type': 'application/json'
//         },
//         body:JSON.stringify( {
//             sep: '|',
//             text: `${text.value}`
//         })
//     };

//     try {
//         const response = await fetch(url, option);
//         const result = await response.json();
        
//         answer.textContent = result.text
//         console.log(result);
//         answer
//     } catch (error) {
//         console.error(error);
//     }


// })

// async function methodGet() {

//     const url = 'https://microsoft-translator-text-api3.p.rapidapi.com/languages';

//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '67051cc91fmshd78b4c751400f5bp1d5a63jsn773cb558b82b',
//             'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com'
//         }
//     };


//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();


//         const languages = result.dictionary;
//         from.innerHTML = ''
//         to.innerHTML = ''
//         for (let lang in languages) {
//             // console.log(lang)
//             from.innerHTML += <option value=${lang}>${languages[lang].nativeName}</option>
//             to.innerHTML += <option value=${lang}>${languages[lang].nativeName}</option>
//         }
//     } catch (error) {
//         console.error(error);
//     }

// }

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
            sourceLang.appendChild(option);
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
