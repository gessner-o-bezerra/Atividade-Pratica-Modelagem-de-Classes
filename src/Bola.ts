class Bola {
  private cor: string;
  private circunferencia: number;
  private material: string;

  constructor(cor: string, circunferencia: number, material: string) {
    this.cor = cor;
    this.circunferencia = circunferencia;
    this.material = material;
  }

  trocarCor(novaCor: string) {
    this.cor = novaCor;
  }

  mostrarCor(): string {
    return this.cor;
  }
}


const bola = new Bola('Vermelha', 20, 'Couro');
console.log(bola.mostrarCor()); // Vermelha
bola.trocarCor('Azul');
console.log(bola.mostrarCor()); // Azul
