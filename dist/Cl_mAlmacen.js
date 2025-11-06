export default class Cl_mAlmacen {
    constructor() {
        this.suministros = [];
    }
    agregarCarga({ suministro, callback }) {
        // Validar id de carga repetido
        const existe = this.suministros.find((s) => s.idCarga === suministro.idCarga);
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
            if (s.existeObjeto(suministro.objeto1) ||
                s.existeObjeto(suministro.objeto2) ||
                s.existeObjeto(suministro.objeto3) ||
                s.existeObjeto(suministro.objeto4)) {
                callback(`La carga ${suministro.idCarga} tiene algún suministro que ya existe en el almacén.`);
                return;
            }
        }
        this.suministros.push(suministro);
        callback(false);
    }
    listar() {
        let suministros = [];
        this.suministros.forEach((s) => suministros.push(s.toJSON()));
        return suministros;
    }
}
