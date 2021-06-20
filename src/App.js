import _JSXStyle from "styled-jsx/style";

function App() {
  return (
    <div className="App">
      <p>hello!</p>
      <style jsx>{`
        p {
          color: crimson;
        }
      `}</style>
    </div>
  );
}

export default App;
