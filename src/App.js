import GlobalStyles from "./GlobalStyles";
import Button from "./Button";

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
      <Button large>large button</Button>
      <Button>normal button</Button>
      <style jsx>{`
        h1 {
          font-size: 3rem;
          color: var(--primary-color);
        }
        h3 {
          font-size: 2rem;
          color: var(--secondary-color);
        }
      `}</style>
    </div>
  );
}

export default App;
