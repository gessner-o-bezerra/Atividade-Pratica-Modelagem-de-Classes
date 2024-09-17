class BombaCombustivel {
  private tipoCombustivel: string;
  private valorLitro: number;
  private quantidadeCombustivel: number;

  constructor(tipoCombustivel: string, valorLitro: number, quantidadeCombustivel: number) {
    this.tipoCombustivel = tipoCombustivel;
    this.valorLitro = valorLitro;
    this.quantidadeCombustivel = quantidadeCombustivel;
  }

  abastecerPorValor(valor: number): number {
    const litros = valor / this.valorLitro;
    if (litros > this.quantidadeCombustivel) {
      throw new Error('Quantidade de combustível insuficiente na bomba');
    }
    this.quantidadeCombustivel -= litros;
    return litros;
  }

  abastecerPorLitro(litros: number): number {
    if (litros > this.quantidadeCombustivel) {
      throw new Error('Quantidade de combustível insuficiente na bomba');
    }
    this.quantidadeCombustivel -= litros;
    return litros * this.valorLitro;
  }

  alterarValor(novoValor: number) {
    this.valorLitro = novoValor;
  }

  alterarCombustivel(novoTipo: string) {
    this.tipoCombustivel = novoTipo;
  }

  alterarQuantidadeCombustivel(novaQuantidade: number) {
    this.quantidadeCombustivel = novaQuantidade;
  }
}


const bomba = new BombaCombustivel('Gasolina', 5.5, 100);
console.log(bomba.abastecerPorValor(55)); // 10 litros
console.log(bomba.abastecerPorLitro(10)); // R$ 55
