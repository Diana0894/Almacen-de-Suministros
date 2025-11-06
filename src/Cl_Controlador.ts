import Cl_mSuministro, { iSuministro } from "./Cl_mSuministro.js";
import Cl_mAlmacen from "./Cl_mAlmacen.js";
import Cl_vAlmacen from "./Cl_vAlmacen.js";
export default class Cl_Controlador {
    public modelo: Cl_mAlmacen;
    public vista: Cl_vAlmacen;
    constructor(modelo: Cl_mAlmacen, vista: Cl_vAlmacen) {
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarCarga({
        cargaData,
        callback
    }: {
        cargaData: iSuministro;
        callback: Function;
    }): void {
        this.modelo.agregarCarga({
            suministro: new Cl_mSuministro(cargaData),
            callback: (error: string | false) => {
                callback(error);
            },
        });
    }
    mostrarCargas(): iSuministro[] {
        return this.modelo.listar();
    }
}