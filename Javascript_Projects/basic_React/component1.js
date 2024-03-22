function Greeting({ name }) {
  return (
    <h1 className="greeting">
      Hello <i>{name}</i>. Welcome!
    </h1>
  );
}

ReactDOM.render(<Greeting name="Bruno" />, document.getElementById('root'));
