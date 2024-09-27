// regex for email:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/
let buttonclicked  = false;
let ischecked = false;

const validateform =() =>{
    const inputs = document.querySelectorAll('input');
    const errors = document.querySelectorAll('.error');
    inputs.forEach((input)=> input.classList.remove('invalid'));
    errors.forEach((error)=> error.textContent = '');
    let invalid = false;

    // firstname validation
    const firstname = document.querySelector('#firstname');
    const firstnameerror = document.querySelector('.firstname-error');
    if(firstname.value == ''){
        firstnameerror.textContent = 'This field is required';
        firstname.classList.add('invalid');
        invalid = true;
    }
    if(/^\d/.test(firstname.value)){
        firstnameerror.textContent = 'text should not contain a number';
        firstname.classList.add('invalid');
        invalid = true;
    }
    // laastname validation
    const lastName = document.querySelector('#lastName');
    const lastname_err =document.querySelector('.lastname');
    if(lastName.value == ''){
        lastname_err.textContent = 'This field is required';
        lastName.classList.add('invalid');
        invalid = true;
    }
    if(/^\d/.test(lastName.value)){
        lastname_err.textContent = 'input should not start with a number';
        lastName.classList.add('invalid');
        invalid = true;
    }
    // email validation 
    const emailRegex = `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/`;
    const email = document.querySelector('#email');
    const email_error = document.querySelector('.email-error');
    if(email.value.trim() == ''){
        email_error.textContent = 'This field is required';
        email.classList.add('invalid');
        invalid = true;
    }
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/.test(email.value.trim())){
        email_error.textContent = 'invalid email address';
        email.classList.add('invalid');
        invalid = true;
    }
    // validate query
    if(!buttonclicked){
        query_error.textContent = 'please select a query type';
        invalid = true;
    }
    // validate textarea
    const textarea = document.querySelector('#textarea');
    const textarea_error = document.querySelector('.textarea-error');
    if(textarea.value == ''){
        textarea_error.textContent = 'This field is required';
        textarea.classList.add('invalid');
        invalid = true;
    }
    // validate check
    if(!ischecked){
        check_error.textContent = 'To submit this form, please consent to being contacted';
        invalid = true;
    }
    if(!invalid){
        const success = document.querySelector('.success');
        success.style.display = 'block';
    }
}
document.querySelector('#form').addEventListener('submit', (event)=>{
    event.preventDefault();
    validateform();
});

const general_query = document.querySelector('.general-query');
const general_query_img = document.querySelector('.general-query > span > img');
const support_request = document.querySelector('.support-request');
const support_request_img = document.querySelector('.support-request > span > img');
const query_error = document.querySelector('.query-error');

general_query.onclick =()=>{
    general_query.classList.add('selected');
    general_query_img.style.display = 'block';
    support_request.classList.remove('selected');
    support_request_img.style.display = 'none';
    buttonclicked = true;
}
support_request.onclick =()=>{
    support_request.classList.add('selected');
    support_request_img.style.display = 'block';
    general_query.classList.remove('selected');
    general_query_img.style.display = 'none';
    buttonclicked = true;
}
const conset = document.querySelector('.checkbox');
const conset_img = document.querySelector('.checkbox > span > img');
const check_error = document.querySelector('.check-error');
conset.onclick =()=>{
    conset_img.style.display = 'block';
    ischecked = true;
}
