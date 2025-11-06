import Cl_mSuministro from "./Cl_mSuministro.js";
export default class Cl_Controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarCarga({ cargaData, callback }) {
        this.modelo.agregarCarga({
            suministro: new Cl_mSuministro(cargaData),
            callback: (error) => {
                callback(error);
            },
        });
    }
    mostrarCargas() {
        return this.modelo.listar();
    }
}
