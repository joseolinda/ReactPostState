import Post from "./components/Post";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";

function App() {
  const [postagens, setPostagens] = useState([
    {
      id: 1,
      titulo:"Resultado do SISU 2024",
      imagem:"https://picsum.photos/200/200?random=1",
      conteudo:"MEC e INEP liberam resultado do SISU 2024."
    },
    {
      id: 2,
      titulo:"Nota de Corte de SI",
      imagem:"https://picsum.photos/200/200?random=2",
      conteudo:"Com nota de corte de 812, SI possui a maior nota da região"
    }, 
    {
      id:10,
      titulo: "Atradados do Enem",
      imagem:"https://picsum.photos/200/200?random=7",
      conteudo:"Após os alunos atrasarem, MEC atrasa a nota."
    }
  ])

  const novoPost = {
    id:Math.random * 100,
    titulo: "Lorem Ipsun",
    imagem:"https://picsum.photos/200/200?random=" + (Math.random() * 10),
    conteudo:"Lorem Ipsun."
  }

  function addNovoPost() {
    setPostagens([...postagens, novoPost])
  }

  function apagarPost(postId) {
    setPostagens(postagens.filter(p => p.id !== postId))
  }
  
  return (
    <div>
      <h1>React Blog</h1>
      <FaPlus onClick={addNovoPost} />
      <p>Postagens do blog</p>
      {postagens.map(p => (
        <Post 
          key={p.id}
          {...p}
          onDelete={apagarPost}
        />
      ))}
    </div>
  );
}

export default App;