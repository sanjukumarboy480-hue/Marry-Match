document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registration successful! (In a real app, this would save to a database.)');
    // Reset form
    this.reset();
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (In a real app, this would send an email.)');
    this.reset();
});