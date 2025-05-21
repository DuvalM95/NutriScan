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

// Mostrar receta aleatoria
function recetaAleatoria() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(data => {
      const receta = data.meals[0];
      const contenedor = document.getElementById("recetaAleatoria");

      contenedor.innerHTML = `
        <h3 class="text-lg font-bold mb-2">${receta.strMeal}</h3>
        <img src="${receta.strMealThumb}" alt="${receta.strMeal}" class="rounded mb-2 w-full h-64 object-cover" />
        <p><strong>Categoría:</strong> ${receta.strCategory}</p>
        <p><strong>Área:</strong> ${receta.strArea}</p>
        <p class="mt-2 text-sm">${receta.strInstructions.slice(0, 200)}...</p>
      `;
    })
    .catch(err => {
      console.error(err);
      document.getElementById("recetaAleatoria").innerHTML = "<p>Error al cargar la receta.</p>";
    });
}

// Buscar recetas por ingrediente
function buscarRecetas() {
  const ingrediente = document.getElementById("ingrediente").value.trim();
  const resultados = document.getElementById("resultados");

  if (!ingrediente) {
    resultados.innerHTML = "<p class='text-red-500'>Por favor, ingresa un ingrediente.</p>";
    return;
  }

  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`)
    .then(res => res.json())
    .then(data => {
      if (!data.meals) {
        resultados.innerHTML = "<p class='text-gray-600'>No se encontraron recetas.</p>";
        return;
      }

      resultados.innerHTML = "";
      data.meals.forEach(receta => {
        const div = document.createElement("div");
        div.className = "bg-white rounded shadow p-4";
        div.innerHTML = `
          <h3 class="text-lg font-bold mb-2">${receta.strMeal}</h3>
          <img src="${receta.strMealThumb}" alt="${receta.strMeal}" class="rounded w-full h-48 object-cover" />
        `;
        resultados.appendChild(div);
      });
    })
    .catch(err => {
      console.error(err);
      resultados.innerHTML = "<p>Error al buscar recetas.</p>";
    });
}

// Inicial
document.addEventListener("DOMContentLoaded", recetaAleatoria);
