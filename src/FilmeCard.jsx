function FilmeCard({ id, titulo, genero, ano, assistido, onAlternarStatus, onRemoverFilme }) {
  return (
    <div className={`filme-card ${assistido ? 'assistido' : ''}`}>
      <h3 className={assistido ? 'titulo-riscado' : ''}>{titulo}</h3>
      <p><strong>Gênero:</strong> {genero}</p>
      <p><strong>Ano:</strong> {ano}</p>
      <p><strong>Status:</strong> {assistido ? 'Assistido ✅' : 'Não assistido ⏳'}</p>

      <div className="botoes-card">
        <button 
          className="btn-status" 
          onClick={() => onAlternarStatus(id)}
        >
          {assistido ? 'Desmarcar' : 'Já assisti'}
        </button>

        <button 
          className="btn-remover" 
          onClick={() => onRemoverFilme(id)}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}

export default FilmeCard;
