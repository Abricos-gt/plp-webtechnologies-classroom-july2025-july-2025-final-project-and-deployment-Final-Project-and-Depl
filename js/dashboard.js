document.addEventListener('DOMContentLoaded', function() {
    // Yield Forecast Chart
    const yieldCtx = document.getElementById('yieldChart').getContext('2d');
    const yieldChart = new Chart(yieldCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Forecasted Yield (bu/acre)',
                data: [120, 125, 135, 145, 160, 170, 175, 170, 165, 155, 140, 130],
                borderColor: '#2c5e1a',
                backgroundColor: 'rgba(44, 94, 26, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 100
                }
            }
        }
    });
    
    // Crop Distribution Chart
    const cropCtx = document.getElementById('cropDistributionChart').getContext('2d');
    const cropChart = new Chart(cropCtx, {
        type: 'doughnut',
        data: {
            labels: ['Corn', 'Wheat', 'Soybeans', 'Other'],
            datasets: [{
                data: [45, 25, 20, 10],
                backgroundColor: [
                    '#2c5e1a',
                    '#a2d045',
                    '#6b8e23',
                    '#c1d6aa'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
});