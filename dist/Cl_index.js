import Cl_Controlador from "./Cl_Controlador.js";
import Cl_mAlmacen from "./Cl_mAlmacen.js";
import Cl_vAlmacen from "./Cl_vAlmacen.js";
export default class Cl_index {
    constructor() {
        this.modelo = new Cl_mAlmacen();
        this.vista = new Cl_vAlmacen();
        let controlador = new Cl_Controlador(this.modelo, this.vista);
        this.vista.controlador = controlador;
        this.vista.refresh();
    }
}
