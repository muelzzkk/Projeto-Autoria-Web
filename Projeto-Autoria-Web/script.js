const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email == 'teste@gmail.com' && password == '1234') {
        alert('Login realizado com sucesso!');
        window.location.href = 'tela_principal.html';
        } else {
        alert('E-mail ou senha incorretos.');
        }
    }
);
