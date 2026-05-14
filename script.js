const bookingButton = document.getElementById("button");

bookingButton.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Your booking has been submitted!");
});