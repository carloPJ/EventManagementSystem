const TrieNode = function (key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.end = false;

    this.author = "";
    this.description = "";
    this.location = null;
    this.date = 0;
    this.category = "";
    this.rating = 0;
    this.likes = 0;
    
    this.getWord = function() {
        let output = [];
        let node = this;

        while (node !== null) {
            output.unshift(node.key);
            node = node.parent;
        }
        return output.join('');
    };
}

// Prefix tree for indication of events by their unique name
const Trie = function() {
    this.root = new TrieNode(null);
    
    // inserts a word into the trie.
    this.insert = function(title, author, description, location, date, category) {
        let node = this.root;
        for (let i = 0; i < title.length; i++) {
            if (!node.children[title[i]]) {
                node.children[title[i]] = new TrieNode(title[i]);
                node.children[title[i]].parent = node;
            }
            node = node.children[title[i]];
        }
        node.end = true;
        node.author = author;
        node.description = description;
        node.location = location;
        node.date = date;
        node.category = category;
        return node;
    };
    
    // check if it contains a whole word.
    this.contains = function(word) {
        let node = this.root;
        for(let i = 0; i < word.length; i++) {
            if (node.children[word[i]]) {
                node = node.children[word[i]];
            } else {
                return false;
            }
        }
        return node.end;
    };
    
    // returns node with given word
    this.find = function(word) {
        let node = this.root;
        for(let i = 0; i < word.length; i++) {
            if (node.children[word[i]]) {
                node = node.children[word[i]];
            } else {
                return null;
            }
        }
        return node;
    };
    
    // recursive function to find all words in the given node.
    const findAllWords = (node, arr) => {
        if (node.end) {
            arr.unshift(node.getWord());
        }
        for (let child in node.children) {
            findAllWords(node.children[child], arr);
        }
    }
  
    // removes a word from the trie.
    this.remove = function(word) {
        let root = this.root;  
        if(!word) return;
        const removeWord = (node, word) => {
            if (node.end && node.getWord() === word) {
                let hasChildren = Object.keys(node.children).length > 0;
                if (hasChildren) {
                    node.end = false;
                } else {
                    node.parent.children = {};
                }
                return true;
            }
            for (let key in node.children) {
                removeWord(node.children[key], word)
            }
            return false;
        };
        removeWord(root, word);
    };
}

// Event Data
const table = document.getElementById('table');

// Event Creator
let inputTitle = document.getElementById("inputTitle");
let inputAuthor = document.getElementById("inputAuthor");
let inputDesc = document.getElementById("inputDesc");
let inputLocation = document.getElementById("inputLocation");
let inputDate = document.getElementById("inputDate");
let inputCategory = document.getElementById("eventSelect");

// Invoked when loading website
function start() {
    const weatherSections = document.getElementsByClassName("weather");
    for (let w of weatherSections) {
        showWeather(w);
    }
    highlightTop3();
}

function highlightTop3() {
    fetch("/api/events?n=-1")
        .then(response => response.json())
        .then(data => {
            const tableBody = table.firstElementChild;
            const rows = tableBody.children;
            if (rows[1] && data[0].likes > 0) {
                rows[1].style.backgroundColor = "#1aff66";
            } else if (rows[1]) {
                rows[1].style.backgroundColor = "";
            }
            if (rows[2] && data[1].likes > 0) {
                rows[2].style.backgroundColor = "#99ff99";
            } else if (rows[2]) {
                rows[2].style.backgroundColor = "";
            }
            if (rows[3] && data[2].likes > 0) {
                rows[3].style.backgroundColor = "#ccff99";
            } else if (rows[3]) {
                rows[3].style.backgroundColor = "";
            }
        })
}

// Gets current input of the event creation input fields
function updateInputVariables() {
    inputTitle = document.getElementById("inputTitle");
    inputAuthor = document.getElementById("inputAuthor");
    inputDesc = document.getElementById("inputDesc");
    inputLocation = document.getElementById("inputLocation");
    inputDate = document.getElementById("inputDate");
    inputCategory = document.getElementById("eventSelect");
    if (inputTitle.value.trim() === "") {
        alert("Bitte geben Sie einen Titel für das Event ein.");
        return;}
    if (inputTitle.value.trim() === "") {
        alert("Bitte geben Sie einen Titel für das Event ein.");
        return;
    }
    if (inputAuthor.value.trim() === "") {
        alert("Bitte geben Sie den Autor des Events ein.");
        return;
    }
    if (inputDesc.value.trim() === "") {
        alert("Bitte geben Sie eine Beschreibung des Events ein.");
        return;
    }
    if (inputLocation.value.trim() === "") {
        alert("Bitte geben Sie den Veranstaltungsort ein.");
        return;
    }
    if (inputDate.value.trim() === "") {
        alert("Bitte geben Sie das Datum des Events ein.");
        return;
    }
    if (inputCategory.value === "") {
        alert("Bitte wählen Sie eine Kategorie für das Event aus.");
    }
}

// Adds an event
function addEvent(element) {
    element.preventDefault();
    if (hasSufficientInput()) {
        fetch("/api/events")
            .then(r => r.json())
            .then(data => {
                const eventNameAvailable =
                    !data.some(event => event.title === inputTitle.value.trim());
                if (!eventNameAvailable) {
                    alert("Der Eventname wird bereits verwendet, bitte wählen Sie einen anderen Namen!");
                }
                document.getElementById("eventCreatorForm").submit();
            })
    }
}

// Function to show event details
function openPopup(element) {
    // Optionen für das Pop-up-Fenster
    var options = "width=500,height=400";

    // Öffnen des Pop-up-Fensters
    var popup = window.open("", "_blank", options);

    // Erstellen des Inhalts des Pop-up-Fensters
    let popupContent;
    fetch("/api/events")
        .then(response => response.json())
        .then(data => {
            const title = element.parentElement.innerText;
            for (let e of data) {
                if (e.title === title) {
                    const rating = `<section class="stars" display="flex">
                <img class="star" src="/pictures/EmptyStar.png" onmouseover="fillStars(this)" onmouseout="emptyStars(this)" onclick="rate(this)">
                <img class="star" src="/pictures/EmptyStar.png" onmouseover="fillStars(this)" onmouseout="emptyStars(this)" onclick="rate(this)">
                <img class="star" src="/pictures/EmptyStar.png" onmouseover="fillStars(this)" onmouseout="emptyStars(this)" onclick="rate(this)">
                <img class="star" src="/pictures/EmptyStar.png" onmouseover="fillStars(this)" onmouseout="emptyStars(this)" onclick="rate(this)">
                <img class="star" src="/pictures/EmptyStar.png" onmouseover="fillStars(this)" onmouseout="emptyStars(this)" onclick="rate(this)">
            </section>`
                    popupContent =
                        `<h1>${e.title}</h1>` +
                        `<h3>Kategorie: ${e.category}</h3>` +
                        `<h2>Beschreibung: </h2>` +
                        `<p>${e.description}</p><br>` +
                        `<p>Ort: ${e.location}</p>` +
                        `<p>Datum: ${e.date}</p><br>` +
                        `<p>Autor: ${e.author}</p>` +
                        `<p>Erstelldatum: ${e.created}</p>`
                    popup.document.write(popupContent);
                    break;
                }
            }
        })
}

// Checks whether the necessary event creation input fields are empty
function hasSufficientInput() {
    updateInputVariables();
    titleLength = inputTitle.value.trim().length;
    authorLength = inputAuthor.value.trim().length;
    locationLength = inputLocation.value.trim().length;
    dateLength = inputDate.value.trim().length;
    return (!(titleLength === 0 || authorLength === 0 || locationLength === 0 || dateLength === 0));
}

// Highlights the rating stars for an event depending on which the cursor points at
function fillStars(star) {
    if (star.parentElement.getAttribute("class") === "stars") {
        let c = star.parentElement.firstElementChild;
        while (c !== star.nextElementSibling) {
            c.setAttribute("src", "pictures/FullStar.png");
            c = c.nextElementSibling;
        }
    }
}

// Empties the rating stars for an event when the cursor moves out
function emptyStars(star) {
    if (star.parentElement.getAttribute("class") === "stars") {
        let c = star.parentElement.firstElementChild;
        while (c !== star.nextElementSibling) {
            c.setAttribute("src", "pictures/EmptyStar.png");
            c = c.nextElementSibling;
        }
    }
}

// Rates an event
function rate(star) {
    section = star.parentElement;
    sectionClass = section.getAttribute("class");
    if (sectionClass !== "lockedStars") {
        section.setAttribute("class", "lockedStars");
    } else {
        section.setAttribute("class", "stars");
        emptyStars(section.lastElementChild);
        fillStars(star);
        rate(star);
    }
}

// Likes / Dislikes an event
function toggleLike(icon, flag) {
    interestSection = icon.parentElement;
    liked = interestSection.children[2].style.visibility === "visible";
    if (flag && !liked) {
        interestSection.children[0].innerHTML++;
        interestSection.children[1].style.opacity = "100%";
        interestSection.children[2].style.visibility = "visible";
    } else if (!flag) {
        interestSection.children[0].innerHTML--;
        interestSection.children[1].style.opacity = "";
        interestSection.children[2].style.visibility = "";
    }
}

// Shows weather information for an event if available
function showWeather(weatherSection) {
    const eventName = weatherSection.parentElement.parentElement.children[0].innerHTML;
    weatherSection.innerText = "[Fehlende Wetterinformationen]";
    let dateNum = 0;
    fetch("/api/events")
        .then(r => r.json())
        .then(data => {
            for (e of data) {
                if (e.title === eventName) {
                    dateNum = e.date;
                    break;
                }
            }
        })
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=48.567165184623406&lon=" +
        "13.431196208076878&appid=b10468acb6ce4baa5f83e4751017a9bf")
        .then(r => r.json())
        .then(data => {
            let found = false;
            let iconURI;
            let tempCelsius;
            const next5d = data.list;
            for (let obj of next5d) {
                if (obj.dt === dateNum) {
                    found = true;
                    iconURI = `https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
                    const kelvinOffset = -273.15;
                    tempCelsius = obj.main.temp + kelvinOffset;
                    break;
                }
            }
            if (found) {
                weatherSection.innerText = `${tempCelsius}°C
                    <img class="weatherIcon" src="${iconURI}" alt="">`;
            } else {
            }
        })
}

function addNewEvent(event) {
    event.preventDefault(); //ohne diese Zeile wird das Formular abgeschickt und die Seite wird neugeladen -> Verhindern des Standardverhaltens
    var newEvent = document.getElementById("newEventInput").value;
    if (newEvent !== "") {
        var select = document.getElementById("eventSelect");
        var option = document.createElement("option"); //Option wird in HTML hinzugefügt
        option.text = newEvent;
        option.value = newEvent;
        select.add(option);
        document.getElementById("newEventInput").value = "";
    }
}

// Daten in der Vergangenheit dürfen nicht angezeigt werden
function filterEventsByDate() {
    var table = document.getElementById('table');
    var rows = table.getElementsByTagName('tr');
    var currentDate = new Date();

    for (var i = 1; i < rows.length; i++) {
        var dateCell = rows[i].getElementsByTagName('date')[4];
        var eventDate = new Date(dateCell.textContent);

        if (eventDate < currentDate) {
            rows[i].style.display = 'none';
        }
    }
}

var currentDate = new Date().toISOString().split('T')[0];
document.getElementById('inputDate').setAttribute('min', currentDate);

//Events filtern
function filterEvents() {
    var selectedType = document.getElementById("eventType").value;
    var table = document.getElementById("table");
    var rows = table.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) {
        var typeCell = rows[i].getElementsByTagName("td")[6];
        var eventType = typeCell.innerText || typeCell.textContent;

        if (selectedType === "all" || eventType === selectedType) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}