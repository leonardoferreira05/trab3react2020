import './index.css';

const ItemEstoque = ({ estoque, remover }) => {
  return (
    <tr>
      <td className="corRoxa">{estoque.produto}</td>
      <td className="corRoxa">{estoque.quantidade}</td>
       <td className='corVerde'>{estoque.departamento }
     
      </td>
      <td className="corVermelha">
        <span onClick={() => remover(estoque.id)}>
          {estoque.produto ? 'Excluir' : ''}
        </span>
      </td>
    </tr>
  );
};

export default ItemEstoque;