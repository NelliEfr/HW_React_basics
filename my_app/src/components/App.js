import { users } from "../data/users";
import User from "./User";

function App() {
  return (
    <div>
      {
        users.map(el => <User {...el} key={el.id} />)
      }
      
    </div>
  );
}

export default App;
