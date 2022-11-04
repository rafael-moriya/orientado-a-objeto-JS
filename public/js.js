class carro {

    constructor(marca, ano) {
        // atributos da classe

        this.marca = marca;
        this.ano = ano;
    }
    info() {

        if (this.marca == 1) {

            console.log("marca do carro: fiat")
        } else if (this.marca == 2) {
            console.log("marca do carro: ferrari")
        } else {
            console.log("marca do carro: BMW")
        }
    }
    set marca(m) {

        this.marca = m
    }

    set ano(a) {
        if (i < 0 || i > 50) {
            alert("ano nao é valido")
        } else {

            this.ano = a
        }
    z
}
get marca() {
    return this.marca
}
get ano() {
     return this.ano
}
}
class carroOffRoad extends carro {
    constructor(pneu, tiporua) {
        super('', '', '')
        this.pneu = pneu
        this.tiporua = tiporua
    }
    set pneu(p) {
        this.pneu = p
    }
    get pneu() {
        return this.pneu
    }
    set tiporua(t) {

        this.idade = t
    }
    get tiporua() {
        return this.tiporua
    }
}
// primeiro carro
let carro1 = new carroOffRoad()
carro1.setano = 10
carro1.setmarca = "bmw"
carro1.setpneu = "aro 24"
carro1.tiporua = "terrenos aridos"
console.log("carro1: " + carro1)
carri1.info()
// segundo carro
let dog2 = new cachorro()
carro2.setano = 2
carro2.setmarca = "marca"
carro1.setpneu = "aro 25"
carro1.tiporua = "terrenos aridos"
console.log("carro2: " + dog2)
carro2.info()