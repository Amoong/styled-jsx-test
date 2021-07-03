import GlobalStyles from "./GlobalStyles";
import InnerPage from "./InnerPage";

function App() {
  const switchTheme = () => {
    const currentTheme = document.documentElement.dataset.theme;

    if (currentTheme === "dark") {
      document.documentElement.dataset.theme = "light";
    } else {
      document.documentElement.dataset.theme = "dark";
    }
  };

  return (
    <div className="App">
      <GlobalStyles />
      <h1>styled-jsx</h1>
      <button onClick={switchTheme}>change theme</button>

      <InnerPage />

      <style jsx>{`
        .App {
          padding-top: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        h1 {
          font-size: 3rem;
          color: var(--text-color1);
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}

export default App;
