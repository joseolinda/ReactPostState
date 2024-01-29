import Post from "./components/Post";

function App() {
  return (
    <div>
      <h1>React Blog</h1>
      <p>Postagens do blog</p>
      <Post
        titulo={"Resultado do SISU 2024"}
        imagem={"https://picsum.photos/200/200?random=1"}
        conteudo={"MEC e INEP liberam resultado do SISU 2024."}
      />
      <Post
        titulo={"Nota de Corte de SI"}
        imagem={"https://picsum.photos/200/200?random=2"}
        conteudo={"Com nota de corte de 812, SI possui a maior nota da região"}
      />
    </div>
  );
}

export default App;