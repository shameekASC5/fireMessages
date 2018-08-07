const database = firebase.database().ref();
database.on('child_added', displayData)
const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click", updateDB);


//Set database object here


/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username = usernameElement.value;
    const message = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    const userData = {
        name: username,
        message: message
    };
    //Update database here
    database.push(userData);
}

function displayData (rowData) {
    const row = rowData.val();
    const messageBox = document.querySelector(".allMessages");
    const name = document.createTextNode(row.name + ": ");
    const message = document.createTextNode(row.message);
    messageBox.appendChild(name)
    messageBox.appendChild(message);
    const newLine = document.createElement("br");
    messageBox.appendChild(newLine);
}
// Set database "child_added" event listener here