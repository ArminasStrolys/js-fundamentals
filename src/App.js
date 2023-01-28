function App() {
  const n = 9999;
  const arry = [];

  for (let i = 1; i <= n; i++) {
    // console.log(i);
    arry.push(i + ', ');
  }

  return <div>TEST {arry}</div>;
}

export default App;
