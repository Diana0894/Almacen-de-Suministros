import { iSuministro } from "./Cl_mSuministro.js";
import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
export default class Cl_vAlmacen extends Cl_vGeneral {
    private btAgregarCarga: HTMLButtonElement;
    private divListadoCargas: HTMLDivElement;
    constructor() {
        super({ formName: "almacen" });
        this.btAgregarCarga = this.crearHTMLButtonElement("btAgregarCarga", {
            onclick: () => this.agregarCarga(),
        });
        this.divListadoCargas = this.crearHTMLElement("divListadoCargas", {
            type: tHTMLElement.CONTAINER,
            refresh: () => this.mostrarCargasHechas(),
        }) as HTMLDivElement;
    }
    mostrarCargasHechas() {
        this.divListadoCargas.innerHTML = "";
        let suministros = this.controlador?.mostrarCargas();
        if (!suministros) return;
        suministros.forEach((suministro: iSuministro) => {
            this.divListadoCargas.innerHTML += `<tr>
            <td>${suministro.idCarga}</td>
            <td>${suministro.objeto1}</td>
            <td>${suministro.objeto2}</td>
            <td>${suministro.objeto3 ? suministro.objeto3 : ""}</td>
            <td>${suministro.objeto4 ? suministro.objeto4 : ""}</td>
          </tr>`;
        })
    }
    agregarCarga() {
        let idCarga = prompt("Ingrese el ID de la carga:");
        if (!idCarga) return;
        let objeto1 = prompt("Ingrese el nombre del 1er objeto:");
        if (!objeto1) return;
        let objeto2 = prompt("Ingrese el nombre del 2do objeto:");
        if (!objeto2) return;
        let objeto3 = prompt("Ingrese el nombre del 3er objeto (opcional):");
        let objeto4 = prompt("Ingrese el nombre del 4to objeto (opcional):");
        this.controlador!.agregarCarga({
            cargaData: {
                idCarga: +idCarga,
                objeto1: objeto1,
                objeto2: objeto2,
                objeto3: objeto3 ? objeto3 : null,
                objeto4: objeto4 ? objeto4 : null
            },
            callback: (error: string | false) => {
                if (error) alert(error);
                this.refresh();
            },
        });
    }
}
