class Carro {
  private consumo: number; // km/l
  private combustivel: number;

  constructor(consumo: number) {
    this.consumo = consumo;
    this.combustivel = 0;
  }

  adicionarGasolina(litros: number) {
    this.combustivel += litros;
  }

  andar(distancia: number) {
    const necessario = distancia / this.consumo;
    if (necessario > this.combustivel) {
      throw new Error('Combustível insuficiente');
    }
    this.combustivel -= necessario;
  }

  obterGasolina(): number {
    return this.combustivel;
  }
}


const meuFusca = new Carro(15);
meuFusca.adicionarGasolina(20);
meuFusca.andar(100);
console.log(meuFusca.obterGasolina()); // 13.33
