import { useState, useEffect } from 'react';
import './index.css';
import ItemEstoque from '../itemEstoque';
import FormularioEstoque from '../formularioEstoque';

const TabelaEstoque = () => {
  const [estoque, setEstoque] = useState(() => {
    const dadosLocal = localStorage.getItem('venda');
    return dadosLocal ? JSON.parse(dadosLocal) : [];
  });

  function adicionarEstoque(produto, quantidade, departamento) {
    const id = Math.random() * 1;
    setEstoque([...estoque, { id, produto, quantidade, departamento }]);
  }

  useEffect(() => {
    localStorage.setItem('estoque', JSON.stringify(estoque));
  }, [estoque]);

  function removerEstoque(id) {
    setEstoque(estoque.filter((estoque) => estoque.id !== id));
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="titulo">Produto</th>
            <th className="titulo">Quantidade</th>
            <th className="titulo">Departamento</th>
            <th className="titulo">Excluir Produto</th>
          </tr>
        </thead>
        <tbody>
          {estoque.map((estoque) => (
            <ItemEstoque key={estoque.id} estoque={estoque} remover={removerEstoque} />
          ))}
        </tbody>
      </table>
      <FormularioEstoque adicionar={adicionarEstoque} />
    </>
  );
};

export default TabelaEstoque;