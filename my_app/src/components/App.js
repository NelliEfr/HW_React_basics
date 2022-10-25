import User from './User';

export default function App() {

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

  return (
    <div>

      {
        users.map(el => <User {...el} key={el.id}/>)
      }

    </div>
  );
}


