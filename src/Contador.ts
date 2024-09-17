class Contador {
  private valor: number;

  constructor() {
    this.valor = 0;
  }

  zerar() {
    this.valor = 0;
  }

  incrementar() {
    this.valor++;
  }

  retornarValor(): number {
    return this.valor;
  }
}


const contador = new Contador();
contador.incrementar();
console.log(contador.retornarValor()); // 1
contador.zerar();
console.log(contador.retornarValor()); // 0
