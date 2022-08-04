//PEGA OS VALORES DE CADA DADO INFORMADO NO FORMULÁRIO
const contatoForm = document.querySelector('.contato-form')
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

//PEGA O EMAIL SELECIONADO DENTRO DO SELECT

//ADICIONA UM EVENTO AO BOTÃO DE ENVIAR EMAIL, E ENVIA TODOS OS DADOS QUANDO CLICADO
contatoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }
    let xhr = new XMLHttpRequest()
    xhr.open('POST', '/')
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        if(xhr.responseText == 'success') {
            alert('Email enviado');
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        } else {
            alert('Algo deu errado!!!!')
        }
    }
    xhr.send(JSON.stringify(formData));
})









/* function enviarEmail() {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "suporte@fapesc.sc.gov.br",
            pass: "F@pesc7650"
        }
    });

    var email = "plataforma@fapesc.sc.gov.br"

    const mailOptions = {
        from: 'suporte@fapesc.sc.gov.br',
        to: `${email}`,
        subject: "E-mail teste",
        text: `${texto}`,
        ejs: `Uma página teste só para ver se vai funcionar <a href='https://www.google.com'>Google</a>`
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log(info);
        }
    })
} */