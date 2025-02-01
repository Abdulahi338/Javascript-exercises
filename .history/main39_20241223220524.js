async function transliterateText() {
    const inputText = document.getElementById("inputText").value;

    if (!inputText) {
        alert("Please enter some text to transliterate.");
        return;
    }

    const url = 'https://microsoft-translator-text-api3.p.rapidapi.com/transliterate?lang=Ja&toScript=Latn&fromScript=Jpan';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY', // Replace with your RapidAPI key
            'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify([{ Text: inputText }]),
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        document.getElementById("outputText").value = result[0].text;
    } catch (error) {
        console.error("Error during transliteration:", error);
        alert("An error occurred while transliterating the text.");
    }
}

// Add event listener to the button
document.getElementById("translateButton").addEventListener("click", transliterateText);
