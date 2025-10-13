document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello, World!');

    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        const templateParams = {
            name: name,
            email: email,
            message: message
        };

        //send email using EmailJS

        emailjs.send('service_8y31cbc', 'template_2gm3mzj', templateParams, '9Fztvhq1AWSyd0EeG')
            .then(function (response) {
                console.log('MESSAGE SUCCESS!', response.status, response.text);
                alert('Thank you for your message!');
            }, function (error) {
                console.log('MESSAGE FAILED...', error);
                alert('Oops! Something went wrong.');
            });

        emailjs.send('service_8y31cbc', 'template_rpd3b4a', templateParams, '9Fztvhq1AWSyd0EeG')
            .then(function (response) {
                console.log('REPLY SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('REPLY FAILED...', error);
            });
    });
});
function startUp(){ //function is called when the website loads up or refreshes
    ageCalculator()
}
function ageCalculator(){
    //Calculates my age, so it is always current
    const birthday = "2004-9-04"
    const birthDate = new Date(birthday);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    // document.getElementById("age").innerHTML = age;
    const ageEl = document.getElementById('age');
    if (ageEl) ageEl.textContext = age;
    console.log(age);
    // Age calculation part complete
}
function toggleMenu(){
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle('show');
}
