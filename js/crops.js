document.addEventListener('DOMContentLoaded', function() {
    // Crop filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cropCards = document.querySelectorAll('.crop-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Show/hide crop cards based on filter
            cropCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-crop') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Task completion functionality
    const taskCheckboxes = document.querySelectorAll('.task-checkbox input');
    
    taskCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const task = this.closest('.task');
            if (this.checked) {
                task.style.opacity = '0.6';
                task.style.textDecoration = 'line-through';
            } else {
                task.style.opacity = '1';
                task.style.textDecoration = 'none';
            }
        });
    });
});