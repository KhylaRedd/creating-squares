document.getElementById('centerButton').addEventListener
('click', function() {
    let squares = document.querySelectorAll('.container__sq1, .container__sq2, .container__sq3, .container__sq4, .container__sq5, .container__sq6, .container__sq7, .container__sq8, .container__sq9, .container__sq10, .container__sq11');
    
    squares.forEach(function(square, index) {
        setTimeout(function() {
            square.style.display = 'block';
        }, index * 700); 
    });
});
