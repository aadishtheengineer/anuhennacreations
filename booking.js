document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('hennaInquiryForm');

    if (form) {

        form.addEventListener('submit', (e) => {

            e.preventDefault();

            // Get form values
            const name = document.getElementById('clientName').value;
            const type = document.getElementById('eventType').value;
            const date = document.getElementById('eventDate').value;
            const location = document.getElementById('location').value;
            const details = document.getElementById('details').value;

            // Get uploaded photo
            const photoInput = document.getElementById('hennaPhoto');

            let photoName = 'No inspiration photo uploaded';

            if (photoInput && photoInput.files.length > 0) {
                photoName = photoInput.files[0].name;
            }

            // Email subject
            const subject = encodeURIComponent(
                `Henna Booking Inquiry: ${type} - ${name}`
            );

            // Email body
            const body = encodeURIComponent(
                `Hello Anu,\n\n` +

                `I would love to check your availability for a henna booking!\n\n` +

                `• Client Name: ${name}\n` +
                `• Service Requested: ${type}\n` +
                `• Event Date: ${date}\n` +
                `• Event Location: ${location}\n\n` +

                `• Additional Project Design Details:\n` +
                `${details}\n\n` +

                `• Henna Inspiration Photo:\n` +
                `${photoName}\n\n` +

                `Please let me know your rates and next consultation options.\n\n` +

                `Best regards,\n` +
                `${name}\n\n` +

                `IMPORTANT: Please attach the selected inspiration photo to this email before sending.`
            );

            // Open email application
            window.location.href =
                `mailto:nakrani.anu78@gmail.com?subject=${subject}&body=${body}`;

        });

    }

});
