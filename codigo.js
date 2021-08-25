let NombreUsuario = prompt("Indica tu nombre");
let EdadUsuario = Number(prompt("Indica tu edad"));

function TuedadFuturaYPasada(nombreuser, edaduser) {
    let calcularFuturo = edaduser + 1;
    let calcularPasado = edaduser - 1;
    alert(`${NombreUsuario} Tu edad es: ${edaduser} años y el proxima año tendras ${calcularFuturo}  años y el año pasado tuviste ${calcularPasado} años`);
}

TuedadFuturaYPasada(NombreUsuario, EdadUsuario);