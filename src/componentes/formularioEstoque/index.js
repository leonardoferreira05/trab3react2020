import { useState } from 'react';
import './index.css';


const FormularioEstoque = ({ adicionar }) => {
  const [dados, setDados] = useState({
    produto: '',
    quantidade: '',
    departamento: '',
  });

  function enviarFormulario(event) {
    event.preventDefault();

    adicionar(dados.produto, dados.quantidade, dados.departamento);

    setDados({ produto: '', quantidade: '', departamento: '' });
  }

  function alterarEstado({ target }) {
    setDados({
      ...dados,
      [target.name]: target.value,
    });
  }

  return (
    <>
      <form onSubmit={enviarFormulario}>
        <h3>Formulário</h3>
        <label htmlFor="produto">Descrição do Produto:</label>
        <input
          type="text"
          id="produto"
          name="produto"
          value={dados.produto}
          onChange={alterarEstado}
        />
        <label htmlFor="quantidade">Quantidade:</label>
        <input
          type="text"
          id="quantidade"
          name="quantidade"
          value={dados.quantidade}
          onChange={alterarEstado}
        />
        
        <label htmlFor="departamento">Departamento</label>
        <select
          id="departamento"
          name="departamento"
          value={dados.departamento}
          onChange={alterarEstado}
        >
          <option>Selecione</option>
          <option value="Limpeza">Limpeza</option>
          <option value="Perfumaria">Perfumaria</option>
          <option value="Alimenticios">Alimenticios</option>
          <option value="Outros">Outros</option>
        </select>
        <button type="submit">Registrar</button>
      </form>
    </>
  );
};

export default FormularioEstoque;