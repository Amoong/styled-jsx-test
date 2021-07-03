import Button from "./Button";

function InnerPage() {
  return (
    <div className="InnerPage">
      <h1>Inner Page</h1>
      <Button large>large button</Button>
      <Button btnStyle="2">normal button</Button>
      <Button btnStyle="3">normal button</Button>

      <style jsx>{`
        .InnerPage {
          padding: 20px;
        }
        h1 {
          font-size: 3rem;
          color: var(--text-color2);
          padding-bottom: 20px;
        }
      `}</style>
    </div>
  );
}

export default InnerPage;
