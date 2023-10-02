// 1. Implemente e teste o modelo de classes com base na seguinte
// imagem

import { log } from "console";

class Item {
    constructor (public valor: number, public nome: string, public descricao: string) {}
}

class Pedido {
    constructor (public itens: Item[], public valorTotal: number) {}
}
console.log("Atividade 1:");

const laranja = new Item(30, 'laranja', 'fruta')
const melancia = new Item(40, 'melancia', 'fruta') 
const pedidoFrutas = new Pedido ([laranja, melancia], laranja.valor + melancia.valor)

console.log(pedidoFrutas);
console.log("--------------------------------------------");


// 2. Implemente e teste o modelo de classes com base no seguinte
// imagem

abstract class FormatoDeElemento {

    desenhar(): void {
        console.log('Desenhando formato do elemento');      
    }

    redimensionar(valor: number, altura?: number): void {
        console.log('Redimensionando o elemento');
    }
}

class Circulo extends FormatoDeElemento {
    constructor (public raio: number){
        super()
    }

    desenhar(): void {
        console.log(`Desenhando um círculo de ${this.raio} centímetros.`)
    }

    redimensionar(valor: number): void {
        console.log(`Redimensionado um círculo para ${valor} centímetros.`)
    }
}

class Retangulo extends FormatoDeElemento {
    constructor (public comprimento: number, public altura: number){
        super()
    }

    desenhar(): void {
        console.log(`Desenhando um retângulo de ${this.comprimento * this.altura} centímetros quadrados.`)
    }

    redimensionar(comprimento: number, altura: number): void {
        console.log(`Redimensionado um retângulo para ${comprimento * altura} centímetros quadrados.`)
    }
}
console.log("Atividade 2:");

const circulo = new Circulo (50) 
circulo.desenhar()
circulo.redimensionar(30)

const retangulo = new Retangulo (60, 80)
retangulo.desenhar()
retangulo.redimensionar(77, 90)
console.log("-------------------------------------------------");

// 3. Crie o diagrama de classe da atividade 3 da lista de atividades
// sobre Pilares POO e Composição.

class Animal {
    constructor(public nome: string, public idade: number, public tipo: string) {}

    comer(): void {
        console.log(`${this.nome} está comendo.`)
    }

    dormir(): void {
        console.log(`${this.nome} está dormindo.`)
    }
}

class Cachorro extends Animal {
    constructor(nome: string, idade: number) {
        super(nome, idade, 'Cachorro')
    }

    latir(): void {
        console.log(`${this.nome} está latindo.`)
    }
}

class Cavalo extends Animal {
    constructor(nome: string, idade: number) {
        super(nome, idade, 'Cavalo')
    }

    galopar(): void {
        console.log(`${this.nome} está galopando.`)
    }
}

class Gato extends Animal {
    constructor(nome: string, idade: number) {
        super(nome, idade, 'Gato')
    }

    miar(): void {
        console.log(`${this.nome} está miando.`)
    }
}

console.log("Atividade 3:")
const cachorro = new Cachorro('Tobe', 8)
const cavalo = new Cavalo('Pé de Pano', 6)
const gato = new Gato('Frajola', 1)

cachorro.comer()
cachorro.dormir()
cachorro.latir()

cavalo.comer()
cavalo.dormir()
cavalo.galopar()

gato.comer()
gato.dormir()
gato.miar()
console.log("--------------------------------------------");

// 4. Chegou a hora de mostrar o quanto você sabe colocar no papel (ou
//     code) o que pensa. Você deve pensar, modelar, programar e testar
//     um modelo de classes baseado em uma situação da vida real. Ex:
//     Locação de livros, restaurante...

class ItemMenu {
    constructor(public nome: string, public preco: number) {}
}

class Cardapio {
    private itensMenu: ItemMenu[] = []

    adicionarItem(item: ItemMenu): void {
        this.itensMenu.push(item)
        console.log(`"${item.nome}" foi adicionado ao cardápio.`)
    }

    listarItensMenu(): void {
        console.log("Itens no cardápio:")
        this.itensMenu.forEach((item) => {
            console.log(`${item.nome}: R$ ${item.preco.toFixed(2)}`)
        })
    }

    encontrarItem(nome: string): ItemMenu | undefined {
        return this.itensMenu.find((item) => item.nome === nome)
    }
}

class PedidoDoCliente {
    private itensPedido: ItemMenu[] = []

    constructor(public cliente: Cliente) {}

    adicionarItem(item: ItemMenu, quantidade: number = 1): void {
        for (let i = 0; i < quantidade; i++) {
            this.itensPedido.push(item)
        }
        console.log(`"${item.nome}" foi adicionado ao pedido.`)
    }

    listarItensPedido(): void {
        console.log(`Itens no pedido de ${this.cliente.nome}:`)
        this.itensPedido.forEach((item) => {
            console.log(`${item.nome}`)
        })
    }

    calcularTotal(): number {
        return this.itensPedido.reduce((total, item) => total + item.preco, 0)
    }

    finalizarPedido(): void {
        console.log(`Pedido de ${this.cliente.nome} finalizado.`);
        console.log(`Total a pagar: R$ ${this.calcularTotal().toFixed(2)}`)
    }
}

class Cliente {
    constructor(public nome: string) {}
}

console.log("Atividade 4:")

const restauranteCardapio = new Cardapio()

const prato1 = new ItemMenu("Cachorro Quente", 15.99)
const prato2 = new ItemMenu("Xis Salada", 18.99)
const cliente1 = new Cliente("Maria")
const cliente2 = new Cliente("José")

restauranteCardapio.adicionarItem(prato1)
restauranteCardapio.adicionarItem(prato2)

restauranteCardapio.listarItensMenu()

const pedidoCliente1 = new PedidoDoCliente(cliente1)
pedidoCliente1.adicionarItem(prato1, 2)
pedidoCliente1.adicionarItem(prato2)

pedidoCliente1.listarItensPedido()
pedidoCliente1.finalizarPedido()

const pedidoCliente2 = new PedidoDoCliente(cliente2)
pedidoCliente2.adicionarItem(prato2, 3)

pedidoCliente2.listarItensPedido()
pedidoCliente2.finalizarPedido()
console.log("-----------------------------")

// 5. Baixe este arquivo e corrija todos os erros.

interface ValorPedido {
    aplicarDescontoEmReais(desconto: number): void;
}

class PedidoDesejado implements ValorPedido {
    itens: ItemPedido[] = [];
    valorTotal: number = 0; 

    add(item: ItemPedido): void {
        this.itens.push(item);
        this.atualizarValorTotal(); 
    }

    recuperarValorTotal(): number {
        return this.valorTotal; 
    }

    aplicarDescontoEmReais(desconto: number): void {
        this.valorTotal -= desconto;
    }

    removeItem(item: string): void {
        const index = this.itens.findIndex((i) => i.nome === item);
        if (index > -1) {
            this.itens.splice(index, 1);
            this.atualizarValorTotal();
        }
    }

    private atualizarValorTotal(): void {
        this.valorTotal = this.itens
            .map((i) => i.recuperarValorTotal())
            .reduce((sum, v) => sum + v, 0);
    }
}

class ItemPedido {
    valor: number;
    nome: string;
    quantidade: number;

    constructor(valor: number, nome: string, quantidade: number) {
        this.valor = valor;
        this.nome = nome;
        this.quantidade = quantidade;
    }

    recuperarValorTotal(): number {
        return this.valor * this.quantidade;
    }
}

console.log("Atividade 5:");

const item1 = new ItemPedido(35, "Pizza de Calabresa", 2);
const item2 = new ItemPedido(22, "Pizza de Chocolate", 4);


const pedido = new PedidoDesejado();

pedido.add(item1);
pedido.add(item2);

console.log("Itens no pedido:");
pedido.itens.forEach((item) => {
    console.log(`${item.nome} (Quantidade: ${item.quantidade})`);
});

console.log(`Valor total do pedido: R$ ${pedido.recuperarValorTotal().toFixed(2)}`);


pedido.aplicarDescontoEmReais(5); 

console.log(`Valor total com desconto: R$ ${pedido.recuperarValorTotal().toFixed(2)}`);


pedido.removeItem("Pizza de Calabresa");
console.log("Itens no pedido após remover Pizza de Calabresa:");
pedido.itens.forEach((item) => {
    console.log(`${item.nome} (Quantidade: ${item.quantidade})`);
});

console.log(`Valor total do pedido após remover: R$ ${pedido.recuperarValorTotal().toFixed(2)}`);