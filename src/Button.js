function Button(props) {
  return (
    <>
      <button>{props.children}</button>
      <style jsx>{`
        button {
          background: var(--btn-bg-color);
          color: var(--btn-color);
          font-size: 2em;
          padding: ${"large" in props ? "20" : "10"}px;
        }
      `}</style>
    </>
  );
}

export default Button;
