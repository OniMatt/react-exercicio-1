// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const SomaCompras = (compras: any[]) => {
  return compras.reduce((anterior, compra) => anterior + parseInt(compra.preco.slice(3)), 0);
}

const Dados = (dados: {cliente: string, idade: number, compras: any[], ativa: boolean}) => {
  return(
  <div>
      <h2><span>{dados.cliente}</span></h2>
      <p>Idade: <span>{dados.idade}</span></p>
      <p><span style={dados.ativa ? {color: 'green'} : {color: 'red'}}>{dados.ativa ? "Ativo" : "Inativo"}</span></p>
      <h3>Compras:</h3>
      {dados.compras.map(compra => <p key={compra.nome}>{compra.nome} - {compra.preco}</p>)}
      {SomaCompras(dados.compras) > 10000 && <p style={{color: 'red'}}>Cuidado: seu total está acima de R$10,000!</p>}
  </div>
  )
}

export default function App() {

  return (
    <div>
      {Dados(luana)}
      <p>---</p>
      {Dados(mario)}
    </div>
  );
} 
