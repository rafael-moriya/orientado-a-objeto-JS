class produto {

    constructor () {
     this.id= 1;
     this.arrayProduto = [];
        
    }

    
    salvar(produto) {
      let produto = this.lerDados();
      if(this.validaCampo(produto)); {
         this.adicionar(produto);
         }

      this.listaProduto();
      this.cancelar();
        }

      
        
                 listaProduto() {
                  let tbody = document.getElementById('tbody');
                  tbody.innerText = '';
                 for(let i = 0; i < this.arrayProduto.length; i++) {
                 let tr = tbody.insertRow();
                 let = td_id = tr.insertCell();
                 let = td_produto = tr.insertCell();
                 let = td_data = tr.insertCell();
                 let = td_acoes = tr.insertCell();

                 td_id.innerText=this.arrayProduto[i].id;
                 td_produto.innerText=this.arrayProduto[i].nomeProduto;
                 td_data.innerText=this.arrayProduto[i].valor;
                 td_acoes.innerText=this.arrayProduto[i].acoes;

                 td_id.classList.add(center);
                 let imgEdit = document.createElement('img');
                 imgEdit.src = 'edit.png';
                 let imgTrash = document.createElement('img');
                 imgEdit.src = 'trash.png';
                 td_acoes.appendChild(imgEdit);
                 td_acoes.appendChild(imgTrash);

                 


                  }
                }
    
          
        adicionar(produto){
          this.arrayProduto.push(produto);
          this.id++;
             
             }
    
 


       

      lerDados(){
 let produto = {}
 produto.id = this.id;
 produto.nomeProduto = document.getelementByid('produto'). value;
 produto.valor = document.getelementByid('valor'). value;
 
 return produto
      }

      validaCampo(produto){

       let msg = '';

       if(produto.nomeProduto == ''){
          msg += '-informe o nome do produto pelo amor de Deus\n';
       }

       if(produto.valorProduto == ''){
        msg += '-informe o valor do produto pelo amor de Deus\n';
     }

       if (msg != ''){
        alert(msg)
        return false
       }
       return true
      }

      cancelar() {
        document.getelementByid('produto'). value = '';
        document.getelementByid('valor'). value = '';
    }

    editar() {
      alert('item editado com sucesso');
    }
  }
    var produto = new produto();

    
    
