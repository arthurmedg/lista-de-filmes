import { useState } from 'react';
import FilmeCard from './FilmeCard';
import './App.css';

function App() {
  const [filmes, setFilmes] = useState([
    { id: 1, titulo: 'Carros', genero: 'Animação', ano: '2006', assistido: false },
    { id: 2, titulo: 'Django Livre', genero: 'Faroeste', ano: '2012', assistido: true },
    { id: 3, titulo: 'Interestelar', genero: 'Ficção Científica', ano: '2014', assistido: true },
    { id: 4, titulo: 'Devoradores de Estrelas', genero: 'Ficção Científica', ano: '2026', assistido: true },
  ]);


  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [ano, setAno] = useState('');

  function handleAdicionarFilme(e) {
    e.preventDefault();

    if (titulo === '') {
      alert('Preencha o título do filme!');
      return;
    }


    const novoFilme = {
      id: Date.now(),
      titulo: titulo,
      genero: genero || 'Geral',
      ano: ano || 'N/A',
      assistido: false,
    };


    setFilmes([...filmes, novoFilme]);

    setTitulo('');
    setGenero('');
    setAno('');
  }


  function handleRemoverFilme(idRemover) {
    const listaFiltrada = filmes.filter((filme) => filme.id !== idRemover);
    setFilmes(listaFiltrada);
  }


  function handleAlternarStatus(idClicado) {
    const listaAtualizada = filmes.map((filme) => {
      if (filme.id === idClicado) {
        return { ...filme, assistido: !filme.assistido };
      }
      return filme;
    });

    setFilmes(listaAtualizada);
  }


  const totalFilmes = filmes.length;
  const assistidos = filmes.filter((filme) => filme.assistido).length;
  const pendentes = filmes.filter((filme) => !filme.assistido).length;

  return (
    <div className="container">
      <h1>🎬 Minha Lista de Filmes</h1>
      <p className="subtitulo">Controle os filmes que você quer assistir</p>

      <form className="form-cadastro" onSubmit={handleAdicionarFilme}>
        <h3>Adicionar Novo Filme</h3>
        <div className="campos-form">
          <input
            type="text"
            placeholder="Título do filme"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Gênero (ex: Ação, Romance...)"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          />
          <input
            type="text"
            placeholder="Ano de lançamento"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
          />
          <button type="submit">Cadastrar Filme</button>
        </div>
      </form>

      <div className="painel-resumo">
        <p><strong>Total de filmes:</strong> {totalFilmes}</p>
        <p><strong>Já assistidos:</strong> {assistidos}</p>
        <p><strong>Pendentes:</strong> {pendentes}</p>
      </div>

      <div className="lista-filmes">
        {filmes.map((filme) => (
          <FilmeCard
            key={filme.id}
            id={filme.id}
            titulo={filme.titulo}
            genero={filme.genero}
            ano={filme.ano}
            assistido={filme.assistido}
            onAlternarStatus={handleAlternarStatus}
            onRemoverFilme={handleRemoverFilme}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
