const links = document.getElementsByTagName('a');
const headings = document.getElementsByTagName('h1');
const paragraphs = document.getElementsByClassName('paragraph');
const button = document.getElementById('font-size-toggle');

// Store the initial font sizes
const initialHeadingFontSizes = [];
const initialParagraphFontSizes = [];
const initialLinksFontSizes = [];

// Set the current font sizes
let currentHeadingFontSizes = [];
let currentParagraphFontSizes = [];
let currentLinksFontSizes = [];

// Store the initial font sizes for headings
for (let i = 0; i < headings.length; i++) {
    initialHeadingFontSizes.push(parseFloat(getComputedStyle(headings[i]).fontSize));
    currentHeadingFontSizes.push(initialHeadingFontSizes[i]);
}

// Store the initial font sizes for paragraphs
for (let i = 0; i < paragraphs.length; i++) {
    initialParagraphFontSizes.push(parseFloat(getComputedStyle(paragraphs[i]).fontSize));
    currentParagraphFontSizes.push(initialParagraphFontSizes[i]);
}

// Store the initial font sizes for links
for (let i = 0; i < links.length; i++) {
    initialLinksFontSizes.push(parseFloat(getComputedStyle(links[i]).fontSize));
    currentLinksFontSizes.push(initialLinksFontSizes[i]);
}


// Add click event listener to the button
button.addEventListener('click', function () {

    // Increase or decrease the font sizes based on the current size
    if (currentHeadingFontSizes[0] === initialHeadingFontSizes[0]) {
        // Increase the font sizes
        for (let i = 0; i < headings.length; i++) {
            currentHeadingFontSizes[i] += 5;
            headings[i].style.fontSize = currentHeadingFontSizes[i] + 'px';
        }
        for (let i = 0; i < paragraphs.length; i++) {
            currentParagraphFontSizes[i] += 5;
            paragraphs[i].style.fontSize = currentParagraphFontSizes[i] + 'px';
        }
        for (let i = 0; i < links.length; i++) {
            currentLinksFontSizes[i] += 3;
            links[i].style.fontSize = currentLinksFontSizes[i] + 'px';
            // links[i].style.transform = `scale(${currentLinksFontSizes[i] / initialLinksFontSizes[i]})`;
        }
    } else {
        // Reset the font sizes to the initial values
        for (let i = 0; i < headings.length; i++) {
            currentHeadingFontSizes[i] = initialHeadingFontSizes[i];
            headings[i].style.fontSize = currentHeadingFontSizes[i] + 'px';
        }
        for (let i = 0; i < paragraphs.length; i++) {
            currentParagraphFontSizes[i] = initialParagraphFontSizes[i];
            paragraphs[i].style.fontSize = currentParagraphFontSizes[i] + 'px';
        }
        for (let i = 0; i < links.length; i++) {
            currentLinksFontSizes[i] = initialLinksFontSizes[i];
            // links[i].style.transform = 'scale(1)';
            links[i].style.fontSize = currentLinksFontSizes[i] + 'px';
        }
    }
});
