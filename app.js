document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
  
    // Validare simplă
    if (username === 'admin' && password === '1234') {
      errorMessage.style.color = 'green';
      errorMessage.textContent = 'Login successful!';
      setTimeout(() => {
        alert('Welcome, Admin!');
        // Redirecționare sau alte acțiuni
      }, 1000);
    } else {
      errorMessage.textContent = 'Invalid username or password!';
    }
  });
  