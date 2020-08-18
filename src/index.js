import "./styles.css";

document.getElementById("app").innerHTML = 

class pizza{
constructor(masa, tamaño, ingredientes) {
  this.masa =masa;
  this.tamaño = tamaño;
  this.ingredientes = ingredientes;
  }
 
  
    preparar() {
      console.log(
        `Preparando pizza ${this.tamaño}, ${this.masa}, Ingredientes: ${this.ingredientes}`
      );
      return this;
    }
  
    hornear(){
      console.log('La pizza se está horneando');
      console.log('La pizza ya salió del horno');
      return this;
    }
  
    empacar(){
      console.log('Empacando la pizza...');
      console.log('La pizza se está enviando')
      return this;
    }
  
  }
  //Jamó
  /*const pizzaJamonQueso = new Pizza('Masa gruesa', 'Mediana', ['Jamón', 'Queso', 'Salsa']);
  console.log(pizzaJamonQueso.preparar());
  console.log(pizzaJamonQueso.hornear());
  console.log(pizzaJamonQueso.empacar());
*/
class Combo extends Pizza(){
  constructor(masa, tamaño, ingredientes, combo, bebidas, postre, cantidad){
    super(masa, tamaño, ingredientes)
    this.combo = combo;
    this.bebidas = bebidas;
    this.cantidad = cantidad;
  }
  elegirCombo(){
    this.preparar();
    this.hornear();
    this.empacar();
  }
  console.log (
    `pedido: \nCombo: ${this.combo}\nCantidad: ${this.cantidad}\nTamaño${this.tamaño}, \nMasa${this.masa}, Ingredientes: ${this.ingredientes}´
    )
}

