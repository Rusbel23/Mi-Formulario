function mostrarDatos() {
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const direccion = document.getElementById('direccion').value;
    const correo = document.getElementById('correo').value;
    const dni = document.getElementById('dni').value;
    const genero = document.querySelector('input[name="genero"]:checked') ? document.querySelector('input[name="genero"]:checked').value : 'No Seleccionado';
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const telefono = document.getElementById('telefono').value;
    const edad = document.getElementById('edad').value;
    const lugar = document.getElementById('lugar').value;

    const resultados = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Apellidos:</strong> ${apellidos}</p>
        <p><strong>Dirección:</strong> ${direccion}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>DNI:</strong> ${dni}</p>
        <p><strong>Género:</strong> ${genero}</p>
        <p><strong>Fecha de Nacimiento:</strong> ${fechaNacimiento}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Lugar:</strong> ${lugar}</p>
    `;

    document.getElementById('resultados').innerHTML = resultados;
}
