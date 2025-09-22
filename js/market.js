document.addEventListener('DOMContentLoaded', function() {
    // Price Trends Chart
    const priceCtx = document.getElementById('priceChart').getContext('2d');
    const priceChart = new Chart(priceCtx, {
        type: 'line',
        data: {
            labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
            datasets: [
                {
                    label: 'Corn Price ($/bushel)',
                    data: [5.20, 5.25, 5.30, 5.35, 5.40, 5.38, 5.42],
                    borderColor: '#2c5e1a',
                    backgroundColor: 'rgba(44, 94, 26, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Wheat Price ($/bushel)',
                    data: [6.70, 6.72, 6.75, 6.78, 6.80, 6.82, 6.85],
                    borderColor: '#e67e22',
                    backgroundColor: 'rgba(230, 126, 34, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Soybean Price ($/bushel)',
                    data: [13.30, 13.25, 13.20, 13.22, 13.25, 13.18, 13.20],
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
    
    // Market Comparison Chart
    const comparisonCtx = document.getElementById('comparisonChart').getContext('2d');
    const comparisonChart = new Chart(comparisonCtx, {
        type: 'bar',
        data: {
            labels: ['Chicago', 'Kansas City', 'Minneapolis'],
            datasets: [
                {
                    label: 'Corn',
                    data: [5.42, 5.38, 5.45],
                    backgroundColor: '#2c5e1a'
                },
                {
                    label: 'Wheat',
                    data: [6.85, 6.80, 6.90],
                    backgroundColor: '#e67e22'
                },
                {
                    label: 'Soybeans',
                    data: [13.20, 13.15, 13.18],
                    backgroundColor: '#3498db'
                }
            ]
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
                    beginAtZero: false
                }
            }
        }
    });
    
    // Filter functionality
    const commodityFilter = document.getElementById('commodity');
    const timeframeFilter = document.getElementById('timeframe');
    const marketFilter = document.getElementById('market');
    
    function updateMarketData() {
        const commodity = commodityFilter.value;
        const timeframe = timeframeFilter.value;
        const market = marketFilter.value;
        
        // In a real application, this would fetch market data based on the selected filters
        alert(`Loading ${commodity} data for ${timeframe} from ${market} market...`);
        // Here you would typically make an API call to get market data
    }
    
    commodityFilter.addEventListener('change', updateMarketData);
    timeframeFilter.addEventListener('change', updateMarketData);
    marketFilter.addEventListener('change', updateMarketData);
});