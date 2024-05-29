document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello, World!');
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