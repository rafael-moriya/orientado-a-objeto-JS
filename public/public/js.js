class Produto{

  constructor(){
      this.id=1;
      this.arrayProdutos= [];
      this.editId = null;
  }
  salvar(){
      let produto = this.lerDados();

      if(this.validaCampos(produto)){
          if(this.editId == null){
              this.adicionar(produto);
          }else{
              this.atualizar(this.editId, produto);
          }
      }
      this.listaTabela();
      this.cancelar();
  }

  listaTabela(){
      let tbody= document.getElementById('tbody');
      tbody.innerText = '';

      for(let i = 0; i< this.arrayProdutos.length; i++){
          let tr = tbody.insertRow();

          let td_id = tr.insertCell(); 
          let td_produto = tr.insertCell(); 
          let td_valor = tr.insertCell(); 
          let td_acoes = tr.insertCell(); 

          td_id.innerText = this.arrayProdutos[i].id;
          td_produto.innerText = this.arrayProdutos[i].nomeProduto;
          td_valor.innerText = "R$ "+this.arrayProdutos[i].preco;

          td_id.classList.add('center');

          let imgEdit = document.createElement('img');
          imgEdit.src = 'edit.png';
          imgEdit.setAttribute("onclick", "produto.preparaEdicao("+ JSON.stringify(this.arrayProdutos[i]) +")");

          let imgDelete = document.createElement('img');
          imgDelete.src = 'trash.svg';
          imgDelete.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +")");

          td_acoes.appendChild(imgEdit);
          td_acoes.appendChild(imgDelete);

      }
  }
  adicionar(produto){
      produto.preco = parseFloat(produto.preco);
      this.arrayProdutos.push(produto);
      this.id++;
      
  }
  atualizar(id, produto){
      for(let i = 0; i < this.arrayProdutos.length; i++){
          if(this.arrayProdutos[i].id == id){
              this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
              this.arrayProdutos[i].preco = produto.preco;
          }
      }
  }
  preparaEdicao(dados){
      this.editId = dados.id;
      document.getElementById('produto').value = dados.nomeProduto;
      document.getElementById('valor').value = dados.preco;

      document.getElementById('button-salvar').innerText = 'Atualizar';
      document.getElementById('button-salvar').style.backgroundColor = '#69c369';
  }
  lerDados(){
      let produto = {}
      produto.id = this.id;
      produto.nomeProduto = document.getElementById('produto').value;
      produto.preco = document.getElementById('valor').value;
      
      return produto;
  }
  validaCampos(produto){
      let msg= '';

      if(produto.nomeProduto == ''){
          msg += '- Informe o nome do produto \n';
      }
      if(produto.preco == ''){
          msg += '- Informe o preço do produto \n';
      }
      if(msg != ''){
          alert(msg);
          return false
      }
      return true
  }
  cancelar(){
      let produto= document.getElementById('produto').value = '';
      document.getElementById('valor').value = '';

      document.getElementById('button-salvar').innerText = 'Salvar';
      document.getElementById('button-salvar').style.backgroundColor = '#1093f3';
      this.editId = null;
  }
  deletar(id){
      let tbody = document.getElementById('tbody');

      for(let i = 0; i < this.arrayProdutos.length; i++){
          if(this.arrayProdutos[i].id == id){
              this.arrayProdutos.splice(i,1);
              tbody.deleteRow(i);
          }
      }
  }
}
var produto = new Produto();