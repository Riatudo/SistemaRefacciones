// Buscador de clientes

const buscarCliente = document.getElementById("buscarCliente");
const tablaClientes = document.getElementById("tablaClientes");

if (buscarCliente && tablaClientes) {

    buscarCliente.addEventListener("input", function () {

const texto = buscarCliente.value.trim().toLowerCase();        
const filas = tablaClientes.querySelectorAll("tr");

        let total = 0;

        filas.forEach(function (fila) {

            const contenido = fila.textContent.toLowerCase();

            if (contenido.includes(texto)) {
                fila.style.display = "";
                total++;
            } else {
                fila.style.display = "none";
            }

        });

        document.querySelector(".total-registros").textContent =
            `Mostrando ${total} registros de prueba`;

    });

}


// Formulario de registro de clientes

const btnNuevoCliente = document.getElementById("btnNuevoCliente");
const modalCliente = document.getElementById("modalCliente");
const cerrarModal = document.getElementById("cerrarModal");
const cancelarModal = document.getElementById("cancelarModal");
const formCliente = document.getElementById("formCliente");
let filaEditar = null;

if (btnNuevoCliente && modalCliente) {

   btnNuevoCliente.addEventListener("click", function () {

    filaEditar = null;

    formCliente.reset();

    modalCliente.querySelector("h2").textContent = "Registrar cliente";

    modalCliente.style.display = "flex";

});

    // Cerrar formulario
    cerrarModal.addEventListener("click", function () {
        modalCliente.style.display = "none";
    });

    // Cancelar registro
    cancelarModal.addEventListener("click", function () {
        modalCliente.style.display = "none";
    });

    
// Registrar cliente de prueba
formCliente.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombreCliente").value.trim();
    const telefono = document.getElementById("telefonoCliente").value.trim();
    const sucursal = document.getElementById("sucursalCliente").value;

    if (nombre === "") {
        alert("Ingresa el nombre del cliente.");
        return;
    }


// Actualizar cliente existente

if (filaEditar !== null) {

    filaEditar.cells[1].textContent = nombre;
    filaEditar.cells[2].textContent = telefono || "Sin registrar";
    filaEditar.cells[3].textContent = sucursal;

    filaEditar = null;

    buscarCliente.value = "";
    buscarCliente.dispatchEvent(new Event("input"));

    formCliente.reset();
    modalCliente.style.display = "none";

    return;

}

    // Generar un ID temporal
    const ids = Array.from(tablaClientes.rows).map(
        fila => Number(fila.cells[0].textContent)
    );

    const id = Math.max(0, ...ids) + 1;

    // Crear una nueva fila
    const fila = tablaClientes.insertRow();

    fila.insertCell().textContent = id;
    fila.insertCell().textContent = nombre;
    fila.insertCell().textContent = telefono || "Sin registrar";
    fila.insertCell().textContent = sucursal;

    fila.insertCell().innerHTML = `
        <button class="btn-editar" aria-label="Editar cliente">
            <i class="bi bi-pencil-square"></i>
        </button>

        <button class="btn-eliminar" aria-label="Eliminar cliente">
            <i class="bi bi-trash"></i>
        </button>
    `;

    // Actualizar el buscador y el contador
    buscarCliente.value = "";
    buscarCliente.dispatchEvent(new Event("input"));

    // Limpiar y cerrar el formulario
    formCliente.reset();
    modalCliente.style.display = "none";

});


// Eliminar cliente de prueba

if (tablaClientes) {

    tablaClientes.addEventListener("click", function (evento) {

        const botonEliminar = evento.target.closest(".btn-eliminar");

        if (botonEliminar) {

            const fila = botonEliminar.closest("tr");
            const nombre = fila.cells[1].textContent;

            const confirmar = confirm(
                `¿Estás seguro de eliminar a ${nombre}?`
            );

            if (confirmar) {

                fila.remove();

                // Actualizar el contador de registros
                buscarCliente.dispatchEvent(new Event("input"));

            }

        }

    });

}


// Editar cliente de prueba

if (tablaClientes && modalCliente) {

    tablaClientes.addEventListener("click", function (evento) {

        const botonEditar = evento.target.closest(".btn-editar");

        if (botonEditar) {

            filaEditar = botonEditar.closest("tr");

            document.getElementById("nombreCliente").value =
                filaEditar.cells[1].textContent;

            const telefono = filaEditar.cells[2].textContent;

            document.getElementById("telefonoCliente").value =
                telefono === "Sin registrar" ? "" : telefono;

            document.getElementById("sucursalCliente").value =
                filaEditar.cells[3].textContent;

            modalCliente.querySelector("h2").textContent =
                "Editar cliente";

            modalCliente.style.display = "flex";

        }

    });

}

}
// Buscador de vehículos

const buscarVehiculo = document.getElementById("buscarVehiculo");
const tablaVehiculos = document.getElementById("tablaVehiculos");

if (buscarVehiculo && tablaVehiculos) {

    buscarVehiculo.addEventListener("input", function () {

        const texto = buscarVehiculo.value.trim().toLowerCase();
        const filas = tablaVehiculos.querySelectorAll("tr");

        let total = 0;

        filas.forEach(function (fila) {

            const contenido = fila.textContent.toLowerCase();

            if (contenido.includes(texto)) {
                fila.style.display = "";
                total++;
            } else {
                fila.style.display = "none";
            }

        });

        document.querySelector(".total-registros").textContent =
            `Mostrando ${total} registros de prueba`;

    });

}


// Formulario de vehículos

const btnNuevoVehiculo = document.getElementById("btnNuevoVehiculo");
const modalVehiculo = document.getElementById("modalVehiculo");
const cerrarModalVehiculo = document.getElementById("cerrarModalVehiculo");
const cancelarModalVehiculo = document.getElementById("cancelarModalVehiculo");
const formVehiculo = document.getElementById("formVehiculo");
let filaEditarVehiculo = null;

if (btnNuevoVehiculo && modalVehiculo) {

    btnNuevoVehiculo.addEventListener("click", function () {

    filaEditarVehiculo = null;

    formVehiculo.reset();

    modalVehiculo.querySelector("h2").textContent =
        "Registrar vehículo";

    modalVehiculo.style.display = "flex";

    });

    // Cerrar formulario
    cerrarModalVehiculo.addEventListener("click", function () {
        modalVehiculo.style.display = "none";
    });

    // Cancelar registro
    cancelarModalVehiculo.addEventListener("click", function () {
        modalVehiculo.style.display = "none";
    });

    
// Registrar vehículo de prueba

formVehiculo.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const marca = document.getElementById("marcaVehiculo").value.trim();
    const modelo = document.getElementById("modeloVehiculo").value.trim();
    const anio = document.getElementById("anioVehiculo").value;
    const cliente = document.getElementById("clienteVehiculo").value;

    if (marca === "" || modelo === "" || anio === "" || cliente === "") {

        alert("Completa todos los campos.");
        return;

    }

    // Actualizar vehículo existente

if (filaEditarVehiculo !== null) {

    filaEditarVehiculo.cells[1].textContent = marca;
    filaEditarVehiculo.cells[2].textContent = modelo;
    filaEditarVehiculo.cells[3].textContent = anio;
    filaEditarVehiculo.cells[4].textContent = cliente;

    filaEditarVehiculo = null;

    buscarVehiculo.value = "";
    buscarVehiculo.dispatchEvent(new Event("input"));

    formVehiculo.reset();
    modalVehiculo.style.display = "none";

    return;

    }

    // Generar un ID temporal

    const ids = Array.from(tablaVehiculos.rows).map(
        fila => Number(fila.cells[0].textContent)
    );

    const id = Math.max(0, ...ids) + 1;

    // Crear una nueva fila

    const fila = tablaVehiculos.insertRow();

    fila.insertCell().textContent = id;
    fila.insertCell().textContent = marca;
    fila.insertCell().textContent = modelo;
    fila.insertCell().textContent = anio;
    fila.insertCell().textContent = cliente;

    fila.insertCell().innerHTML = `
        <button class="btn-editar" aria-label="Editar vehículo">
            <i class="bi bi-pencil-square"></i>
        </button>

        <button class="btn-eliminar" aria-label="Eliminar vehículo">
            <i class="bi bi-trash"></i>
        </button>
    `;

    // Actualizar buscador y contador

    buscarVehiculo.value = "";
    buscarVehiculo.dispatchEvent(new Event("input"));

    // Limpiar y cerrar formulario

    formVehiculo.reset();
    modalVehiculo.style.display = "none";

});

// Eliminar vehículo de prueba

if (tablaVehiculos) {

    tablaVehiculos.addEventListener("click", function (evento) {

        const botonEliminar = evento.target.closest(".btn-eliminar");

        if (botonEliminar) {

            const fila = botonEliminar.closest("tr");

            const marca = fila.cells[1].textContent;
            const modelo = fila.cells[2].textContent;

            const confirmar = confirm(
                `¿Estás seguro de eliminar el vehículo ${marca} ${modelo}?`
            );

            if (confirmar) {

                fila.remove();

                // Actualizar el contador de registros
                buscarVehiculo.dispatchEvent(new Event("input"));

            }

        }

    });

}

// Editar vehículo de prueba

if (tablaVehiculos && modalVehiculo) {

    tablaVehiculos.addEventListener("click", function (evento) {

        const botonEditar = evento.target.closest(".btn-editar");

        if (botonEditar) {

            filaEditarVehiculo = botonEditar.closest("tr");

            document.getElementById("marcaVehiculo").value =
                filaEditarVehiculo.cells[1].textContent;

            document.getElementById("modeloVehiculo").value =
                filaEditarVehiculo.cells[2].textContent;

            document.getElementById("anioVehiculo").value =
                filaEditarVehiculo.cells[3].textContent;

            document.getElementById("clienteVehiculo").value =
                filaEditarVehiculo.cells[4].textContent;

            modalVehiculo.querySelector("h2").textContent =
                "Editar vehículo";

            modalVehiculo.style.display = "flex";

        }

    });

}

}


