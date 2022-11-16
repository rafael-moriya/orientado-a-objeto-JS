class planta{
    constructor(planta,nome,idade){
        this.planta= planta;
        this.idade= idade;
        this.nome= nome; 
    }

    info(){
        if(this.planta == 1){

            console.log("planta: terrestre" )
        }else if(this.planta == 2){
            console.log("planta: aquatica" )
        }
        console.log("Idade:" + this.idade)

        if(this.nome == 1){

            console.log("nome da planta: brocolis " )
        }else if(this.nome == 2){
            console.log("nome da planta: cogumelo" )
        }else{
            console.log("nome da planta: rosas vermelhas" )
        }
    }

    set Planta(a){
        this.planta=a
    }


    set Idade(o){
        if(o<0 || o>30){
            alert("Idade nao valida")
        }else{
            this.idade=o
        }
<<<<<<< HEAD
    
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
=======
>>>>>>> 1f657e3c3b1906b7a1ec13dd9ebe691deb180456
    }
    get Idade(){
        return this.idade
    }

<<<<<<< HEAD
        this.tiporua = t
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
carro1.info()
// segundo carro
let carro22 = new carroOffRoad()
carro2.setano = 2
carro2.setmarca = "marca"
carro2.setpneu = "aro 25"
carro2.tiporua = "terrenos aridos"
console.log("carro2: " + carro2)
carro2.info()
=======
    set Nome(e){
        this.nome = e
    }
}

class plantasComestivel extends planta{
    constructor(nome){
        super('','','')
        this.nome = nome
    }

    info(){
        super.info()
        console.log("===========================")
        console.log("                  ")
    }
    
    set setnome(n){
        this.nome=n
    }

 
    get setnome(){
        return this.nome
    }

}

let planta1 = new planta()

planta1.planta= 1 
planta1.idade=13    
planta1.setnome= "lolita" 
console.log("Nome da planta: " + planta1.setnome)
planta1.info()


let planta2 = new planta()

planta2.planta = 2     
planta2.idade=3         
planta2.setnome = "mel"    
console.log("Nome da planta: " + planta2.setnome)
planta2.info()


>>>>>>> 1f657e3c3b1906b7a1ec13dd9ebe691deb180456
