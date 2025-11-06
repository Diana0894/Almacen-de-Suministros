import Cl_mSuministro, { iSuministro } from "./Cl_mSuministro.js";
export default class Cl_mAlmacen {
    private suministros: Cl_mSuministro[] = [];

    agregarCarga({
        suministro,
        callback
    }: {
        suministro: Cl_mSuministro;
        callback: (error: string | false) => void;
    }): void {
        // Validar id de carga repetido
        const existe = this.suministros.find(
            (s) => s.idCarga === suministro.idCarga 
        )
        if (existe) {
            callback(`El identificador ${suministro.idCarga} no se puede repetir en el almacén.`);
        return;
        }
        if (suministro.error()) {
            callback(suministro.error());
            return;
        }
        // Verificar si algún objeto es repetido
        for (const s of this.suministros) {
            if (
                s.existeObjeto(suministro.objeto1) ||
                s.existeObjeto(suministro.objeto2) ||
                s.existeObjeto(suministro.objeto3) ||
                s.existeObjeto(suministro.objeto4)
            ) {
                callback(`La carga ${suministro.idCarga} tiene algún suministro que ya existe en el almacén.`);
                return;
            }
        }
        this.suministros.push(suministro);
        callback(false);
    }
    listar(): iSuministro[] {
        let suministros: iSuministro[] = [];
        this.suministros.forEach((s) => suministros.push(s.toJSON()));
        return suministros;
    }
}