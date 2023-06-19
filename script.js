
// Steps to go through all the steps

// Initially employee array
// (done)-> Crete a zero function to show 0 employee added if the array is empty
// (done)-> Add User function
// Add show function
// Add delete listener in show function to delete specific employee details

let employee = [];
let id=0;
let addButton = document.getElementsByClassName('addUser')[0];
let viewCotainer = document.getElementsByClassName('viewContainer')[0];
let successContainer = document.getElementsByClassName('successMessage')[0];
let errorContainer = document.getElementsByClassName('errorMessage')[0];
console.log(addButton, viewCotainer, successContainer, errorContainer);
function zero(){
    if(employee.length ==0){
        viewCotainer.innerHTML='';
        let message = document.createElement('p');
        message.className = 'default';
        message.innerText = 'You have 0 Employees.'
        viewCotainer.append(message);
    }
}
zero();

addButton.addEventListener('click', addUser);
function addUser(){
    // console.log('addUser call is working')
    let name = (document.getElementById('Name').value).trim();
    let profession = (document.getElementById('Profession').value).trim();
    let age = (document.getElementById('Age').value).trim();

    // validation
    if(!name || !profession || !age){
        let error = document.createElement('p');
        error.className = 'errorMessage';
        error.innerText = 'Error : Please Make sure All the fields are filled before adding in an employee !';
        errorContainer.innerHTML = '';
        successContainer.innerHTML= '';
        errorContainer.append(error);
        
        setTimeout(() =>{
            error.remove();
        },5000)
        return;
    }
    let success = document.createElement('p');
    success.className = 'successMessage';
    success.innerText = 'Success : Employee Added!';
    errorContainer.innerHTML = '';
    successContainer.innerHTML= '';
    successContainer.append(success);

    setTimeout(() =>{
        success.remove();
    },5000)

    id=id+1;
    let info=document.createElement("div");
    info.className='info';
    info.innerHTML=`<div class="id">${id}.</div>
    <div class="name">Name: ${name}</div>
    <div class="profession">Profession: ${profession}</div>
    <div class="age">Age: ${age}</div>
    `
    employee.push(info);
    // console.log(employee);
    show();
    zero();
}

function show(){
    viewCotainer.innerHTML='';

    employee.forEach(element =>{
        let viewFlex = document.createElement('div');
        viewFlex.className = 'viewFlex';
        viewFlex.append(element);
        let DeleteContainer=document.createElement('div');
        let DeleteButton=document.createElement('button');
        DeleteButton.className='deleteButton';
        DeleteButton.innerText='Delete User';

        DeleteButton.addEventListener('click',()=>{
            employee=employee.filter(item=>item != element);
            show();
            zero();
        })
        DeleteContainer.append(DeleteButton);
        viewFlex.append(DeleteContainer);
        viewCotainer.append(viewFlex);

    })
}

