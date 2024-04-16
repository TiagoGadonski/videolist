import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Simulação de dados dos posts do blog
const posts = [
  { id: 1, title: 'Primeiro Post', summary: 'Resumo do primeiro post', imageUrl: "/src/assets/star.jpg" },
  { id: 2, title: 'Segundo Post', summary: 'Resumo do segundo post', imageUrl: "/src/assets/star.jpg" },
  { id: 3, title: 'Terceiro Post', summary: 'Resumo do terceiro post', imageUrl: "/src/assets/star.jpg" },
];

const Blog = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <div className="bg-dark text-white h-100">
            <Image src={posts[0].imageUrl} layout="fill" objectFit="cover" className="img-fluid" alt={posts[0].title} />
            <div className="p-4 position-absolute bottom-0 start-0">
              <h2>{posts[0].title}</h2>
              <p>{posts[0].summary}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex flex-column align-items-start">
            {posts.slice(1).map(post => (
              <div key={post.id} className="card mb-3 w-100">
                <Link href={`/blog/${post.id}`} passHref>
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.summary}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
