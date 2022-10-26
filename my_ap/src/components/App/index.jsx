import User from "../User";
import {users} from '../../data/users'



function App() {
  return (
    <div>
      {
        users.map(el => <User key={el.id} {...el}/>)
      }
    </div>
  );
}

export default App;
