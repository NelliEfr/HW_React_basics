import User from "../Users";
import { users } from "../../data/users";

function App() {
  return (
    <div>
      {users.map((el) => (
        <User {...el} key={el.id} />
      ))}
    </div>
  );
}

export default App;
