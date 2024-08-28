document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello, World!');

    document.getElementById('feedback-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const feedback = document.getElementById("feedback").value;

        const templateParams = {
            name: name,
            email: email,
            feedback: feedback
        };

        //send email using EmailJS

        emailjs.send('service_s4sl0ld', 'template_2gm3mzj', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Thank you for your feedback!');
            }, function (error) {
                console.log('FAILED...', error);
                alert('Oops! Something went wrong.');
            });
    });
});
function startUp(){ //function is called when the website loads up or refreshes
    ageCalculator()
}
function ageCalculator(){
    //Calculates my age, so it is always current
    const birthday = "2004-10-04"
    const birthDate = new Date(birthday);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById("age").innerHTML = age;
    // Age calculation part complete
}
