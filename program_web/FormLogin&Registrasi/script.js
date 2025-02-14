function showRegister(){
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("registerForm").classList.remove("hidden");
}

function showLogin(){
  document.getElementById("registerForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}

document.querySelector("#registerForm form").addEventListener("submit", function (event) {
  event.preventDefault();
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Password tidak cocok!");
    return;
  }

  let user = { nama: nama, email: email, password: password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Registrasi berhasil! Silahkan login.");
  showLogin();
});

document.querySelector("#loginForm form").addEventListener("submit", function (event) {
  event.preventDefault();
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;
  let storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    alert("Login berhasil! Selamat datang, " + storedUser.nama);
    window.location.href = "dashboard.html";
  } else {
    alert("Email atau password salah!");
  }
});