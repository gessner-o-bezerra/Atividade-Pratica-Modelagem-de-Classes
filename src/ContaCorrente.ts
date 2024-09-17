class ContaCorrente {
  private numero: string;
  private nome: string;
  private saldo: number;

  constructor(numero: string, nome: string, saldo: number = 0) {
    this.numero = numero;
    this.nome = nome;
    this.saldo = saldo;
  }

  alterarNome(novoNome: string) {
    this.nome = novoNome;
  }

  deposito(valor: number) {
    this.saldo += valor;
  }

  saque(valor: number) {
    if (valor > this.saldo) {
      console.error('Saldo insuficiente');
    } else {
      this.saldo -= valor;
    }
  }

  mostrarSaldo(): number {
    return this.saldo;
  }
}


const conta = new ContaCorrente('1234', 'João');
conta.deposito(100);
conta.saque(50);
console.log(conta.mostrarSaldo()); // 50
conta.saque(100); // Erro: Saldo insuficiente
