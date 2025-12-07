document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const emailInput = document.getElementById('email');
    const successMsg = document.getElementById('success-msg');
    const submitBtn = document.getElementById('submit-btn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = emailInput.value;

        if(email) {
            // Simulate API call/processing
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            
            setTimeout(() => {
                form.style.display = 'none';
                successMsg.classList.remove('hidden');
                
                // Optional: Console log to verify it works
                console.log(`User registered: ${email}`);
            }, 1000);
        }
    });
});