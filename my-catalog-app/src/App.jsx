import React, { useEffect, useState } from 'react';
import ProdutoCard from './components/ProdutoCard';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    nome: '',
    preco: '',
    descricao: '',
    imagem: ''
  });

  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        {
          id: 1,
          nome: 'Camiseta React',
          preco: 59.9,
          descricao: 'Camiseta com estampa do React.',
          imagem: 'Camiseta React.png'
        },
        {
          id: 2,
          nome: 'Caneca Dev',
          preco: 29.9,
          descricao: 'Caneca personalizada para devs.',
          imagem: 'https://via.placeholder.com/150'
        }
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoProduto = {
      id: produtos.length + 1,
      ...form
    };
    setProdutos([...produtos, novoProduto]);
    setForm({ nome: '', preco: '', descricao: '', imagem: '' });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Catálogo de Produtos</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do produto"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={form.preco}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="descricao"
          placeholder="Descrição"
          value={form.descricao}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imagem"
          placeholder="URL da imagem (opcional)"
          value={form.imagem}
          onChange={handleChange}
        />
        <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>Adicionar Produto</button>
      </form>

      {loading ? (
        <p>Carregando produtos...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {produtos.map((produto) => (
            <ProdutoCard key={produto.id} {...produto} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;


