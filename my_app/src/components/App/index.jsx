import User from '../User';
import { users } from '../../data/users'

export default function App() {

  return (
    <div>

      {
        users.map(el => <User {...el} key={el.id}/>)
      }

    </div>
  );
}


