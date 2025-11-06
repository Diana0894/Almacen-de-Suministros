export interface iSuministro {
    idCarga: number;
    objeto1: string;
    objeto2: string;
    objeto3: string | null;
    objeto4: string | null;
}
export default class Cl_mSuministro {
    _idCarga: number = 0;
    _objeto1: string = '';
    _objeto2: string = '';
    _objeto3: string | null = "";
    _objeto4: string | null = "";
    constructor({
        idCarga = 0,
        objeto1 = '',
        objeto2 = '',
        objeto3 = null,
        objeto4 = null
    }: {
        idCarga: number;
        objeto1: string;
        objeto2: string;
        objeto3?: string | null;
        objeto4?: string | null;
    }) {
        this.idCarga = idCarga;
        this.objeto1 = objeto1;
        this.objeto2 = objeto2;
        this.objeto3 = objeto3;
        this.objeto4 = objeto4;
    }
    set idCarga(idCarga: number) {
        this._idCarga = +idCarga;
    }
    get idCarga() {
        return this._idCarga;
    }
    set objeto1(objeto1: string) {
        this._objeto1 = objeto1.trim().toUpperCase();
    }
    get objeto1() {
        return this._objeto1;
    }
    set objeto2(objeto2: string) {
        this._objeto2 = objeto2.trim().toUpperCase();
    }
    get objeto2() {
        return this._objeto2;
    }
    set objeto3(objeto3: string | null) {
        this._objeto3 = objeto3 ? objeto3.trim().toUpperCase() : null;
    }
    get objeto3() {
        return this._objeto3;
    }
    set objeto4(objeto4: string | null) {
        this._objeto4 = objeto4 ? objeto4.trim().toUpperCase() : null;
    }
    get objeto4() {
        return this._objeto4;
    }
    error(): string | false {
        if (this.objeto1 === '' || this.objeto2 === '')
            return 'Los campos Objeto 1 y Objeto 2 son obligatorios';
        if (this.objeto1 === this.objeto2 || this.objeto3 === this.objeto4 || this.objeto1 === this.objeto3 || this.objeto1 === this.objeto4 || this.objeto2 === this.objeto3 || this.objeto2 === this.objeto4)
            return 'Los objetos no pueden repetirse entre sí';
        return false;
    }
    existeObjeto(objeto: string | null): boolean {
        if (objeto === null) return false;
        if (objeto === this.objeto1 || objeto === this.objeto2 || objeto === this.objeto3 || objeto === this.objeto4) return true;
        return false;
    }
    toJSON(): iSuministro {
        return {
            idCarga: this._idCarga,
            objeto1: this._objeto1,
            objeto2: this._objeto2,
            objeto3: this._objeto3,
            objeto4: this._objeto4
        };
    }
}