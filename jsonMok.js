const usuariosPrueba = [
  {
    id: 1,
    nombre: "Ana",
    edad: 28,
    activo: true,
    correo: "ana@example.com",
    telefono: null,
    roles: ["admin", "editor"],
    direccion: {
      ciudad: "Bogota",
      codigoPostal: 110111,
    },
  },
  {
    id: 2,
    nombre: "Carlos",
    edad: 35,
    activo: false,
    correo: "carlos@example.com",
    telefono: "+57 300 123 4567",
    roles: ["usuario"],
    direccion: {
      ciudad: "Medellin",
      codigoPostal: 50001,
    },
  },
  {
    id: 3,
    nombre: "Lucia",
    edad: 22,
    activo: true,
    correo: "lucia@example.com",
    telefono: null,
    roles: [],
    direccion: {
      ciudad: "Cali",
      codigoPostal: 760001,
    },
  },
];

module.exports = usuariosPrueba;