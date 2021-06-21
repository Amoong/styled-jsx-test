function Theme() {
  return (
    <style jsx global>{`
      :root {
        --bg-color: white;
        --primary-color: black;
        --secondary-color: rgb(113, 128, 150);
        --btn-bg-color: teal;
        --btn-color: white;
      }

      [data-theme="dark"] {
        --bg-color: #121212;
        --primary-color: #f4f4f6;
        --secondary-color: #8999b0;
        --btn-bg-color: gold;
        --btn-color: black;
      }
    `}</style>
  );
}

export default Theme;
