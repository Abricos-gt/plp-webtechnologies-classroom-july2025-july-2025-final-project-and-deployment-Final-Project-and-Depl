document.addEventListener('DOMContentLoaded', function() {
    // Temperature Trends Chart
    const tempCtx = document.getElementById('temperatureChart').getContext('2d');
    const tempChart = new Chart(tempCtx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'High Temperature (°F)',
                    data: [78, 82, 75, 72, 76, 80, 82],
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Low Temperature (°F)',
                    data: [62, 65, 60, 58, 61, 64, 66],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: false
                }
            }
        }
    });
    
    // Precipitation Forecast Chart
    const precipCtx = document.getElementById('precipitationChart').getContext('2d');
    const precipChart = new Chart(precipCtx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Precipitation Chance (%)',
                data: [10, 20, 80, 70, 30, 0, 0],
                backgroundColor: '#3498db',
                borderColor: '#2980b9',
                borderWidth: 1
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
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
    
    // Location selector functionality
    const locationSelector = document.getElementById('location');
    
    locationSelector.addEventListener('change', function() {
        // In a real application, this would fetch weather data for the selected location
        const selectedLocation = this.value;
        alert(`Loading weather data for ${selectedLocation.replace('-', ' ')}...`);
        // Here you would typically make an API call to get weather data for the selected location
    });
});