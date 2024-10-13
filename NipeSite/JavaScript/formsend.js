const form = document.querySelector('form');
const formBut = document.getElementById('formBut');

formBut.onclick = function(){
    const data = {
        login: document.getElementById('userLogin').value,
        password: document.getElementById('userPassword').value,
        email: document.getElementById('userMail').value,
        sex: document.getElementsByName('sex')[0].checked ? 'male' : 'female',
    
    }
    console.log(data);
    sendForm(data);
}

async function sendForm(data){
    const req = await fetch('./php/sending.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    });
    const result = await req.json();

    console.log(result);

}

