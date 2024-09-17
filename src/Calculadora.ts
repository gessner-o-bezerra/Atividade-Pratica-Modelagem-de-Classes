class Calculadora {
  private historico: string[];

  constructor() {
    this.historico = [];
  }

  private registrarOperacao(operacao: string, resultado: number) {
    this.historico.push(`${operacao}: ${resultado}`);
  }

  somar(a: number, b: number): number {
    const resultado = a + b;
    this.registrarOperacao(`Somar ${a} + ${b}`, resultado);
    return resultado;
  }

  subtrair(a: number, b: number): number {
    const resultado = a - b;
    this.registrarOperacao(`Subtrair ${a} - ${b}`, resultado);
    return resultado;
  }

  multiplicar(a: number, b: number): number {
    const resultado = a * b;
    this.registrarOperacao(`Multiplicar ${a} * ${b}`, resultado);
    return resultado;
  }

  dividir(a: number, b: number): number {
    if (b === 0) throw new Error("Divisão por zero");
    const resultado = a / b;
    this.registrarOperacao(`Dividir ${a} / ${b}`, resultado);
    return resultado;
  }

  visualizarHistorico() {
    return this.historico.join('\n');
  }
}


const calculadora = new Calculadora();
calculadora.somar(5, 3);
calculadora.dividir(10, 2);
console.log(calculadora.visualizarHistorico());
