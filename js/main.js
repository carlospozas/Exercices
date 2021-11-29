let persona = {
  nombre: "Carlos",
  edad: 28,
  saludar: function () {
    console.log("Hola " + this.nombre);
  },
};
persona.saludar();
