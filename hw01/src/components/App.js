import User from "./User";
const users = [
  {
    id: 1,
    firstname: 'Oleg',
    lastname: 'Petrov',
    address: 'Moscow, Russia',
    salary: 280
  },
  {
    id: 2,
    firstname: 'Anna',
    lastname: 'Ivanova',
    address: 'Berlin, Germany',
    salary: 500
  }
]
function App() {
  return (
    <div>
      {users.map(el => <User firstname={el.firstname} lastname={el.lastname} address={el.address} salary={el.salary} key={el.id}></User>)}
    </div>
  )
}

export default App;
