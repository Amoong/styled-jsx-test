import GlobalStyles from "./GlobalStyles";

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
      <h3>theme test</h3>
      <button onClick={switchTheme}>change theme</button>
      <style jsx>{`
        body {
          background: var(--bg-color);
          transition: background 0.5s;
        }

        h1 {
          color: var(--primary-color);
        }

        h3 {
          color: var(--secondary-color);
        }
      `}</style>
    </div>
  );
}

export default App;
