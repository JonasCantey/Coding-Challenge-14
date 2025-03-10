//Task 2

const dashboard = document.querySelector("#ticketContainer"); //Find the container to create metric cards

function createTicket (customerName, description, priority) {
        const ticketCard = document.createElement("div");  //creates the metric  card
     
         ticketCard.setAttribute("id","employeeCard"); //setting attributes:
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
         
     };

createTicket("Mark Garcia", "Computer is bugged out", "High")