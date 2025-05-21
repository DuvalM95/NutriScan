const usuariosValidos = [
  { usuario: "admin", password: "1234" },
  { usuario: "nutri", password: "5678" }
];

function iniciarSesion() {
  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value;

  if (!usuario || !password) {
    alert("Por favor, llena todos los campos.");
    return;
  }

  const usuarioEncontrado = usuariosValidos.find(
    u => u.usuario === usuario && u.password === password
  );

  if (!usuarioEncontrado) {
    alert("Usuario o contraseña incorrectos.");
    return;
  }

  localStorage.setItem("usuario", usuario);
  window.location.href = "index.html";
}

function verificarSesion() {
  const usuario = localStorage.getItem("usuario");
  if (!usuario) {
    window.location.href = "inicio_sesion.html";
  }
}

function cerrarSesion() {
  localStorage.removeItem("usuario");
  window.location.href = "inicio_sesion.html";
}

function cargarPlan() {
  fetch("https://mocki.io/v1/938fd21c-4eb4-41db-9a62-1c579d30dc85")
    .then(response => response.json())
    .then(data => {
      const contenedor = document.getElementById("contenidoPlan");
      contenedor.innerHTML = ""; // Limpiar contenido anterior

      if (data.plan && Array.isArray(data.plan)) {
        data.plan.forEach(dia => {
          const diaHTML = `
            <div class="border-bottom py-2">
              <strong>${dia.dia}:</strong> ${dia.comidas}
            </div>`;
          contenedor.innerHTML += diaHTML;
        });
      } else {
        contenedor.innerHTML = "<p>No hay datos de plan disponibles.</p>";
      }
    })
    .catch(error => {
      console.error("Error cargando plan:", error);
      alert("Error al cargar el plan nutricional.");
    });
}

