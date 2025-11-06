/*Almacén de suministros
Un almacén recibe varios suministros al mes, y en cada carga de suministros se traen hasta 4 objetos
variados o un mínimo de 2 objetos por carga, al traer cada carga se debe de
tener en cuenta si al menos uno de los nuevos objetos que trae la carga ya están en el almacén, y por último
verificar si las IDs de las cargas no sean iguales para evitar inconvenientes*/

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
