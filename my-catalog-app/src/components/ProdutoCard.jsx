import React from 'react';

function ProdutoCard({ nome, preco, descricao, imagem }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      width: '200px'
    }}>
      <img src={imagem || 'https://via.placeholder.com/150'} alt={nome} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <h3>{nome}</h3>
      <p><strong>R$ {parseFloat(preco).toFixed(2)}</strong></p>
      <p>{descricao}</p>
    </div>
  );
}

export default ProdutoCard;
