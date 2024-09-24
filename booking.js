document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const roomType = document.getElementById('roomType').value;
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
    const guests = document.getElementById('guests').value;
    const aadhar = document.getElementById('aadhar').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const confirmationMessage = `
        Thank you for booking with us, ${name}!
        You have booked a ${roomType} for ${guests} guest(s) from ${checkInDate} to ${checkOutDate}.
        Aadhar Card Number: ${aadhar}
        We have sent a confirmation email to ${email}. If you have any questions, please contact us at ${phone}.
    `;

    document.getElementById('confirmationMessage').textContent = confirmationMessage;

    // Redirect to payment.html after a short delay
    setTimeout(() => {
        window.location.href = 'payment.html'; // Redirect to payment page
    }, 3000); // 3 seconds delay
});
