document.addEventListener("DOMContentLoaded", function() {
    // Login
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Login successful!");
            window.location.href = "dashboard.html";
        });
    }

    // Inventory Management
    const inventoryTable = document.getElementById("inventoryTable");
    if (inventoryTable) {
        inventoryTable.innerHTML = `
            <tr>
                <td>Ventilator</td>
                <td>Respiratory</td>
                <td>5</td>
                <td><button class="deleteBtn">Delete</button></td>
            </tr>
        `;

        document.querySelectorAll(".deleteBtn").forEach(button => {
            button.addEventListener("click", function() {
                this.parentElement.parentElement.remove();
            });
        });
    }
});
