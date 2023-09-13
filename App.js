import logo from './logo.svg';
import './App.css';

function App() {

  const name = "Hello World";
  const obj = { name: "Hello World Object" }
  const data = ['We', 'are', 'United'] //Show these in seperate tags
  const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }] //Show these in seperate tags
  const complex = [{ company: 'XYZ', jobs: ['Javascript', 'React'] }, { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }]
  return (
    <div className="App">
      <header className="App-header">
       

        <p>{name}</p>
        <p>{obj.name}</p>

        <ol>{data.map(function (item) {
          return <li>{item}</li>
        })}</ol>


        <ul>{list.map(function (item) {
          return <li>{item.name}</li>



        })}</ul>



        <table border='1'>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>

          {complex.map(function (item) {
            return <tr>
              <td>{item.company}</td>
              <td>{item.jobs[0]}</td>
              <td>{item.jobs[1]}</td>
              
              
            </tr>
          })}
        </table>


      </header>
    </div>
  );
}

export default App;
