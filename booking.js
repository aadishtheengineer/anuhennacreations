document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('hennaInquiryForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Extract the user values dynamically
            const name = document.getElementById('clientName').value;
            const type = document.getElementById('eventType').value;
            const date = document.getElementById('eventDate').value;
            const location = document.getElementById('location').value;
            const details = document.getElementById('details').value;
            
            // Structure a pristine email copy
            const subject = encodeURIComponent(`Henna Booking Inquiry: ${type} - ${name}`);
            const body = encodeURIComponent(
                `Hello Anu,\n\n` +
                `I would love to check your availability for a henna booking! Here are my event choices details:\n\n` +
                `• Client Name: ${name}\n` +
                `• Service Requested: ${type}\n` +
                `• Event Date: ${date}\n` +
                `• Event Location: ${location}\n\n` +
                `• Additional Project Design Details:\n${details}\n\n` +
                `Please let me know your rates and next consultation options.\n\n` +
                `Best regards,\n${name}`
            );
            
            // Redirect smoothly to target contact mail inbox
            window.location.href = `mailto:nakrani.anu78@://gmail.com{subject}&body=${body}`;
        });
    }
});
