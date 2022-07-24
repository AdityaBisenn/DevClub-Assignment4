console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector("#login"); // Fill the selector for the login element in ""
let login_text = login_element.innerText;

let login_text_arr = login_text.split("\n")

let question = login_text_arr[3]; // Use split and array operations on the login_text string to extract the question
let question_arr = question.split(" ")

let answer = ""; // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked

if(question_arr[2]=="second"){
    answer=question_arr[6];
}
else if(question_arr[2]=="first"){
    answer = question_arr[4];
}
else if(question_arr[1]=="subtract"){
    answer = parseInt(question_arr[2]) - parseInt(question_arr[4]);
}
else if(question_arr[1]=="add"){
    answer = parseInt(question_arr[2]) + parseInt(question_arr[4]);
}


const captcha_input_element = document.querySelector("#valuepkg3"); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;
