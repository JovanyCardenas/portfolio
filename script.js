document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello, World!');
});
function  code_hide_press(elementID){
    const program = document.getElementById(elementID)
    if (program.style.display === 'none'){
        program.style.display = 'block'
    }else{
        program.style.display = 'none'
    }
}
function startUPJS(){
    document.getElementById("program_1_code").style.display = 'none';
    document.getElementById("program_2_code").style.display = 'none';
    document.getElementById("program_3_code").style.display = 'none';
    document.getElementById("program_4_code").style.display = 'none';
    document.getElementById("reg_program_1_code").style.display = 'none';
    document.getElementById("reg_program_1.5_code").style.display = 'none';
    document.getElementById("reg_program_2_code").style.display = 'none';
    document.getElementById("nationals_program_1_code").style.display = 'none';
    document.getElementById("nationals_program_2_code").style.display = 'none';
    document.getElementById("nationals_program_3_code").style.display = 'none';
    document.getElementById("nationals_program_4_code").style.display = 'none';
}