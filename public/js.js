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
    }
    get Idade(){
        return this.idade
    }

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


