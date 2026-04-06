// Optional: Add simple interactivity to the calendar mockup
document.addEventListener('DOMContentLoaded', () => {
    const timeBtns = document.querySelectorAll('.time-btn');
    
    timeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove selection from all
            timeBtns.forEach(b => b.classList.remove('btn-selected'));
            // Add to clicked
            btn.classList.add('btn-selected');
        });
    });

    const dayBubbles = document.querySelectorAll('.day-bubble');
    
    dayBubbles.forEach(bubble => {
        bubble.addEventListener('click', () => {
             // Remove selection from all
             dayBubbles.forEach(b => b.classList.remove('active'));
             // Add to clicked
             bubble.classList.add('active');
        });
    });
});
