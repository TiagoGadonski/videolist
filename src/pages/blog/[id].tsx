import { useRouter } from 'next/router';
import React from 'react';

// Simulação de uma função para buscar os detalhes do post baseado no ID
const getPostDataById = (id: string) => {
  const posts = [
    { id: 1, title: 'Primeiro Post', content: 'Conteúdo detalhado do primeiro post' },
    { id: 2, title: 'Segundo Post', content: 'Conteúdo detalhado do segundo post' },
    { id: 3, title: 'Terceiro Post', content: 'Conteúdo detalhado do terceiro post' },
  ];
  return posts.find(post => post.id.toString() === id);
};

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = getPostDataById(id as string); // Aqui, 'id' é afirmado como 'string'

  if (!post) {
    return <p>Post não encontrado!</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
