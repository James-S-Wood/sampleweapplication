// Function to change the header color on click
function changeHeaderColor() {
    var header = document.querySelector('header');
    header.style.backgroundColor = 'red';
}

// Function to display an alert on project click
function showAlert() {
    alert("You clicked a project");
}

// Add event listeners to elements
var header = document.querySelector('header');
header.addEventListener('click', changeHeaderColor);

var projects = document.querySelectorAll('.project');
projects.forEach(function(project) {
    project.addEventListener('click', showAlert);
});
