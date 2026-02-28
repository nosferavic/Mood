// =============================
// MOSTRAR / OCULTAR SENHA
// =============================
function togglePassword() {
  const passwordInput = document.getElementById("password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

// =============================
// LOGIN + VALIDAÇÃO DE USUÁRIO
// =============================
function LoginUser(event) {
  event.preventDefault(); // impede reload do form

  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const email = emailInput.value.trim();
  const password = document.getElementById("password").value.trim();

  // ===== Validação de email =====
  const validEmail = /\S+@\S+\.\S+/.test(email);

  if (!validEmail) {
    emailError.style.display = "block";
    emailInput.classList.add("input-error");

    setTimeout(() => {
      emailInput.classList.remove("input-error");
    }, 400);

    return;
  } else {
    emailError.style.display = "none";
  }

  // =============================
  // USUÁRIO CADASTRADO (SIMULAÇÃO)
  // =============================
  const usuarioCadastrado = {
    email: "usuario@mood.com",
    senha: "123456"
  };

  // ===== Verifica se usuário existe =====
  if (email !== usuarioCadastrado.email) {
    alert("❌ Usuário não cadastrado!");
    return;
  }

  // ===== Verifica senha =====
  if (password !== usuarioCadastrado.senha) {
    alert("⚠️ Senha incorreta!");
    return;
  }

  // ===== Ripple effect =====
  const button = event.currentTarget;
  const circle = document.createElement("span");
  circle.classList.add("ripple");

  const rect = button.getBoundingClientRect();
  circle.style.left = `${event.clientX - rect.left}px`;
  circle.style.top = `${event.clientY - rect.top}px`;

  button.appendChild(circle);
  setTimeout(() => circle.remove(), 600);

  // ===== Login sucesso =====
  setTimeout(() => {
    alert("✅ Login realizado com sucesso!");
    // window.location.href = "home.html";
  }, 400);
}