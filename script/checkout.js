let orderTableBody = document.getElementById("orderTable");
let fullAmountCell = document.getElementById("fullAmount");
let checkoutForm = document.getElementById("checkoutForm");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");


// Function to load cart data from localStorage and display in the table
function loadCartData() {

    
    // Get the cart data from localStorage
     let savedCart = localStorage.getItem("cart");
     
     if (savedCart) {
        
        // Parse the JSON string into an array
        let cartItems = JSON.parse(savedCart);
        let fullAmount = 0;

        // Loop through each item in the cart
        cartItems.forEach(item => {
            // Calculate the total for this item
            let itemTotal = item.price * item.quantity;

            // Add the item total to the grand total
            fullAmount += itemTotal;

            // Create a new row in the table
            let newRow = orderTableBody.tBodies[0].insertRow();

            // Add cells for name, unit price, quantity, and total
            let cell1 = newRow.insertCell(0);
            let cell2 = newRow.insertCell(1);
            let cell3 = newRow.insertCell(2);
            let cell4 = newRow.insertCell(3);

            // Fill the cells with data
            cell1.textContent = item.name;
            cell2.textContent = item.price;
            cell3.textContent = item.quantity;
            cell4.textContent = itemTotal;
        });

        // Update the full Amount cell
        fullAmountCell.textContent = fullAmount;
}else{
    alert(" The Cart is empty");
}
}
loadCartData();

//addventlistner to pay button
checkoutForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
    alert(`Payment has been successfully completed, and your order will be delivered within 3-5 working days.`);
    p1.innerHTML = '<img src="./images/checkmark.png" alt="payment sucess" id=img1>'
    p2.innerHTML = `Payment has been successfully completed, and your order will be delivered within 3-5 working days. `
    checkoutForm.reset();
});


















      
       
              
       
        


       



   