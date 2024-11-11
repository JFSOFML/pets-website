// Bar Chart for Number of Pets Owned by Type
const petTypeChartCtx = document.getElementById('petTypeChart').getContext('2d');
const petTypeChart = new Chart(petTypeChartCtx, {
    type: 'bar',
    data: {
        labels: ['Dogs', 'Cats', 'Birds', 'Fish', 'Reptiles'],
        datasets: [{
            label: 'Number of Pets',
            data: [85, 70, 40, 35, 15],
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Pie Chart for Pet Type Popularity
const petPopularityChartCtx = document.getElementById('petPopularityChart').getContext('2d');
const petPopularityChart = new Chart(petPopularityChartCtx, {
    type: 'pie',
    data: {
        labels: ['Dogs', 'Cats', 'Birds', 'Fish', 'Reptiles'],
        datasets: [{
            label: 'Pet Type Popularity',
            data: [50, 30, 10, 7, 3],
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
    }
});
