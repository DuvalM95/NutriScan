
document.addEventListener('DOMContentLoaded', function () {
  const imageUpload = document.getElementById('imageUpload');
  const preview = document.getElementById('preview');

  imageUpload.addEventListener('change', function () {
    const file = this.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        preview.src = e.target.result;
        preview.classList.remove('hidden'); // Mostrar la imagen
      }

      reader.readAsDataURL(file);
    }
  });

  // Prevenir comportamiento por defecto del formulario
  const form = document.getElementById('scanForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('result').innerText = 'Procesando imagen...';
    // Aquí podrías luego agregar el análisis real
  });
});
