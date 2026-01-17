
const App = () => {
  const arbab = localStorage.getItem('user')
  const mujtaba = JSON.parse(arbab)
  console.log(mujtaba);
  return (
    <div>
      <h1>This is local storage</h1>
    </div>
  )
}
export default App