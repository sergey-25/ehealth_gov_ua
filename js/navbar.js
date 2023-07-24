

// -------------------- ACTIVE ITEM-----------------------------
const itemList = document.getElementById('item-list');
const items = itemList.getElementsByTagName('a');

// Add click event listener to each item
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () {
        // Remove the 'active' class from all items
        for (let j = 0; j < items.length; j++) {
            items[j].classList.remove('active');
        }

        // Add the 'active' class to the clicked item
        this.classList.add('active');
    });
}
// ---------------------------------------Switch Theme----------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {


    const links1 = document.getElementsByClassName('link');
    const headerVisual = document.getElementsByClassName('header');
    const headings1 = document.getElementsByClassName('heading1');
    const paragraphs1 = document.getElementsByClassName('paragraph');
    const iconVisual = document.getElementsByClassName('btn-icon');
    const listItems = document.querySelectorAll('.list__item');
    const button1 = document.getElementById('toggleButton');

    let isClicked = false;

// Store the initial styles
    const initialHeadingStyles = [];
    const initialParagraphStyles = [];
    const initialLinksStyles = [];
    const initialHeaderStyles = [];
    const initialIconVisualStyles = [];
    const initialListItemStyles = [];

// Set the current styles
    let currentHeadingStyles = [];
    let currentParagraphStyles = [];
    let currentLinksStyles = [];
    let currentHeaderStyles = [];
    let currentIconVisualStyles = [];
    let currentListItemStyles = [];

// Store the initial styles for headings
    for (let i = 0; i < headerVisual.length; i++) {
        initialHeaderStyles.push({
            color: getComputedStyle(headerVisual[i]).color,
            background: getComputedStyle(headerVisual[i]).background
        });
        currentHeaderStyles.push({...initialHeaderStyles[i]});
    }

    const headingColors = ['#FFF', '#000', '#000']; // Add more colors if needed

    for (let i = 0; i < headings1.length; i++) {
        initialHeadingStyles.push({
            color: '#FFF',
            backgroundColor: getComputedStyle(headings1[i]).backgroundColor
        });
        currentHeadingStyles.push({...initialHeadingStyles[i]});
        headings1[i].style.color = currentHeadingStyles[i].color;
        headings1[i].style.backgroundColor = currentHeadingStyles[i].backgroundColor;
    }


// Store the initial styles for paragraphs
    for (let i = 0; i < paragraphs1.length; i++) {
        initialParagraphStyles.push({
            color: getComputedStyle(paragraphs1[i]).color,
            backgroundColor: getComputedStyle(paragraphs1[i]).backgroundColor
        });
        currentParagraphStyles.push({...initialParagraphStyles[i]});
    }

// Store the initial styles for links
    for (let i = 0; i < links1.length; i++) {
        initialLinksStyles.push({
            color: getComputedStyle(links1[i]).color,
            backgroundColor: getComputedStyle(links1[i]).backgroundColor
        });
        currentLinksStyles.push({...initialLinksStyles[i]});
    }

// Store the initial styles for icons
    for (let i = 0; i < iconVisual.length; i++) {
        initialIconVisualStyles.push({
            color: window.getComputedStyle(iconVisual[i]).color,
        });
        currentIconVisualStyles.push({...initialIconVisualStyles[i]});
    }

    // Store the initial styles for list items
    for (let i = 0; i < listItems.length; i++) {
        initialListItemStyles.push({
            color: getComputedStyle(listItems[i]).color,
            border: getComputedStyle(listItems[i]).border
        });
        currentListItemStyles.push({ ...initialListItemStyles[i] });
    }

// Add click event listener to the button

    button1.addEventListener('click', function () {

        isClicked = !isClicked; // Toggle the click state

        if (isClicked) {
            // Apply new styles on click
            for (let i = 0; i < listItems.length; i++) {
                listItems[i].classList.remove('list__item')
            }
        } else {
            // Restore the original styles on second click
            for (let i = 0; i < listItems.length; i++) {
                listItems[i].classList.add('list__item')
            }
        }




        // Toggle the styles based on the current state
        if (currentHeaderStyles[0].color === initialHeaderStyles[0].color) {


            // Apply new styles
            for (let i = 0; i < headerVisual.length; i++) {
                currentHeaderStyles[i].color = '#000'; // Change to desired color
                currentHeaderStyles[i].background = '#fff'; // Change to desired background color
                headerVisual[i].style.color = currentHeaderStyles[i].color;
                headerVisual[i].style.background = currentHeaderStyles[i].background;
            }
            for (let i = 0; i < headings1.length; i++) {
                currentHeadingStyles[i].color = '#000'; // Change to desired color
                currentHeadingStyles[i].backgroundColor = '#FFF'; // Change to desired background color
                headings1[i].style.color = currentHeadingStyles[i].color;
                headings1[i].style.backgroundColor = currentHeadingStyles[i].backgroundColor;
            }
            for (let i = 0; i < paragraphs1.length; i++) {
                currentParagraphStyles[i].color = '#000'; // Change to desired color
                currentParagraphStyles[i].backgroundColor = '#fff'; // Change to desired background color
                paragraphs1[i].style.color = currentParagraphStyles[i].color;
                paragraphs1[i].style.backgroundColor = currentParagraphStyles[i].backgroundColor;
            }
            for (let i = 0; i < links1.length; i++) {
                currentLinksStyles[i].color = '#000'; // Change to desired color
                currentLinksStyles[i].backgroundColor = '#fff'; // Change to desired background color
                links1[i].style.color = currentLinksStyles[i].color;
                links1[i].style.backgroundColor = currentLinksStyles[i].backgroundColor;
            }
            for (let i = 0; i < iconVisual.length; i++) {
                currentIconVisualStyles[i].color = '#000'; // Change to desired color
                iconVisual[i].style.color = currentIconVisualStyles[i].color;
            }
        } else {
            // Restore the initial styles
            for (let i = 0; i < headerVisual.length; i++) {
                currentHeaderStyles[i] = {...initialHeaderStyles[i]};
                headerVisual[i].style.color = currentHeaderStyles[i].color;
                headerVisual[i].style.background = currentHeaderStyles[i].background;
            }
            for (let i = 0; i < headings1.length; i++) {
                currentHeadingStyles[i] = {...initialHeadingStyles[i]};
                headings1[i].style.color = currentHeadingStyles[i].color;
                headings1[i].style.backgroundColor = currentHeadingStyles[i].backgroundColor;
            }
            for (let i = 0; i < paragraphs1.length; i++) {
                currentParagraphStyles[i] = {...initialParagraphStyles[i]};
                paragraphs1[i].style.color = currentParagraphStyles[i].color;
                paragraphs1[i].style.backgroundColor = currentParagraphStyles[i].backgroundColor;
            }
            for (let i = 0; i < links1.length; i++) {
                currentLinksStyles[i] = {...initialLinksStyles[i]};
                links1[i].style.color = currentLinksStyles[i].color;
                links1[i].style.backgroundColor = currentLinksStyles[i].backgroundColor;
            }
            for (let i = 0; i < iconVisual.length; i++) {
                currentIconVisualStyles[i] = {...initialIconVisualStyles[i]};
                iconVisual[i].style.color = currentIconVisualStyles[i].color;
            }
        }
    });

    // Add hover event listeners for list items
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('mouseenter', function () {
            // Apply hover styles only when not clicked
            if (isClicked) {
                console.log(currentLinksStyles[i].backgroundColor)
                listItems[i].classList.add('hover');
                listItems[i].style.backgroundColor = currentListItemStyles[i].backgroundColor;
                listItems[i].style.border = '2px solid #000'; // Change to desired border style
            }
        });

        listItems[i].addEventListener('mouseleave', function () {
            // Remove hover styles only when not clicked
            if (isClicked) {
                listItems[i].style.border = currentListItemStyles[i].border;
            }
        });
    }


// Add hover event listener for icons
    for (let i = 0; i < iconVisual.length; i++) {
        iconVisual[i].addEventListener('mouseenter', function () {
            // Apply hover styles only to initial styles
            if (initialIconVisualStyles[i].color === currentIconVisualStyles[i].color) {
                iconVisual[i].style.color = '#ffc904'; // Change to desired color
                iconVisual[i].style.transition = 'all 0.5s ease';
            }
        });

        iconVisual[i].addEventListener('mouseleave', function () {
            // Restore the initial styles after hover only if it was not modified
            if (initialIconVisualStyles[i].color === currentIconVisualStyles[i].color) {
                iconVisual[i].style.color = currentIconVisualStyles[i].color;
                iconVisual[i].style.transition = 'all 0.5s ease';
            }
        });
    }
})


