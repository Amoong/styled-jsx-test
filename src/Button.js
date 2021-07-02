function Button(props) {
  const { btnStyle } = props;
  const backgroundColor = `--btn-bg-color${btnStyle}`;
  return (
    <>
      <button>{props.children}</button>

      <style jsx>{`
        button {
          background: var(${backgroundColor});
          color: var(--btn-color);
          font-size: 2em;
          padding: ${"large" in props ? "20" : "10"}px;
        }
      `}</style>
    </>
  );
}

Button.defaultProps = {
  btnStyle: "1",
};

export default Button;
