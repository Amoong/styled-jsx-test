function Theme() {
  return (
    <style jsx global>{`
      :root,
      [data-theme="light"] {
        --bg-color: ivory;
        --text-color1: black;
        --text-color2: dodgerblue;
        --btn-bg-color1: teal;
        --btn-bg-color2: yellowgreen;
        --btn-bg-color3: crimson;
        --btn-color: white;
      }

      [data-theme="dark"] {
        --bg-color: #121212;
        --text-color1: #f4f4f6;
        --text-color2: rgb(255, 162, 255);
        --btn-bg-color1: gold;
        --btn-bg-color2: pink;
        --btn-bg-color3: skyblue;
        --btn-color: black;
      }
    `}</style>
  );
}

export default Theme;
