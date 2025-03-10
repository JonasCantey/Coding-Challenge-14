//Task 2

const dashboard = document.querySelector("#ticketContainer"); //Find the container to create metric cards

function createTicket (customerName, description, priority) {
        const ticketCard = document.createElement("div");  //creates the metric  card
     
         ticketCard.setAttribute("id","ticketCard"); //setting attributes:
         ticketCard.setAttribute("class", "metric-card"); //setting attributes:
         
         //Populate card with title and placeholder value
         ticketCard.innerHTML =    //defining what html was in the ticket cards
         `<h2>${customerName}</h2>
         <p>${description}</p>
         <p>Priority: ${priority}</p>`    //this is saying what content goes in the ticket card
         dashboard.appendChild(ticketCard);    //this appends the metric card to the dashboard
         
             const resolveButton = document.createElement('Button'); //creating a remove button
             resolveButton.innerHTML = 'Resolve'; //inside the remove button is the word remove
             ticketCard.appendChild(resolveButton); //this appends the remove button to the ticket card
             //Task 4
             resolveButton.addEventListener('click', () => { //basically says that on click we will remove the 
                dashboard.removeChild(ticketCard);        //ticketCard from the dashboard
                event.stopPropagation();    //stopProp makes it so that if you press the remove button
            });                             //then Ticket Card clicked wont be logged
                //Task 3
             if (priority === "High") { //if priority is high then high-priority class is applied to metric card
                ticketCard.classList.add("high-priority");
             }
             //Task 5
             ticketCard.addEventListener('dblclick', () => {
                enableEditing(ticketCard, customerName, description, priority);
            });
     };
        //Task 3
    function highlightHighPriority () { //using the highpriority list we select all cards
        const highPriorityCards = document.querySelectorAll(".high-priority")
        const cardsArray = Array.from(highPriorityCards);

        cardsArray.forEach(card => {    //and apply a border and highlight in lightcoral.
            card.style.backgroundColor = "lightcoral";
            card.style.border = "2px solid red";
        })
    }

    //Task 4
    dashboard.addEventListener('click', () => { //added event listener which, on click, logs that
        console.log('Ticket Clicked')    //the ticket was clicked.
    });


    //Task 5

// Function to enable editing
function enableEditing(card, currentCustomerName, currentDescription, currentPriority) {
    // Replace static content with input fields
    card.innerHTML = `
        <input type="text" id="editName" value="${currentCustomerName}" />
        <input type="text" id="editPosition" value="${currentDescription}" />
        <input type="text" id="editPriority" value="${currentPriority}" />
        <button id="saveButton">Save</button>
    `;
    
    // Add event listener to the "Save" button
    const saveButton = card.querySelector('#saveButton');
    saveButton.addEventListener('click', () => {
        const newCustomerName = card.querySelector('#editName').value;
        const newDescription = card.querySelector('#editPosition').value;
        const newPriority = card.querySelector('#editPriority').value;
        disableEditing(card, newCustomerName, newDescription, newPriority); // Save and revert to static text
    });
    }
    
    // Function to disable editing and update the card
    function disableEditing(card, newCustomerName, newDescription, newPriority) {
    // Replace input fields with updated static content
    card.innerHTML = `
        <h2>${newCustomerName}</h2>
        <p>${newDescription}</p>
        <p>${newPriority}</p>
    `;
    
    // Re-add the "Remove" button
    const resolveButton = document.createElement('button');
    resolveButton.innerHTML = 'Remove';
    card.appendChild(resolveButton);
    
    resolveButton.addEventListener('click', () => {
        dashboard.removeChild(card);
        event.stopPropagation();
    });
    
    // Re-add the double-click event listener for future edits
    card.addEventListener('dblclick', () => {
        enableEditing(card, newCustomerName, newDescription, newPriority);
    });
    };


createTicket("Mark Garcia", "Computer is bugged out", "Low");
createTicket("Grark Malinda", "Computer is on fire", "High");
createTicket("Fade Collins", "Computer is brokey mode ong", "Medium")
createTicket("Dave Blunts", "Can't put down the cup", "High");
highlightHighPriority();