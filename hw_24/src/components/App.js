import User from "./User";

function App() {
  const users = [
    {
      id: 1,
      firstname: "Kira",
      lastname: "Gorbunova",
      address: "Moscow, Russia",
      salary: 280,
    },
    {
      id: 2,
      firstname: "Alexsei",
      lastname: "Ribakov",
      address: "Berlin, Germany",
      salary: 500,
    },
    {
      id: 3,
      firstname: "Andrey",
      lastname: "Bistrov",
      address: "Rome, Italy",
      salary: 400,
    },
    {
      id: 4,
      firstname: "Vera",
      lastname: "Stepanova",
      address: "Vena, Austria",
      salary: 380,
    },
  ];
  return (
    <div>
      {users.map((el) => (
        <User
          id={el.id}
          firstname={el.firstname}
          lastname={el.lastname}
          address={el.address}
          salary={el.salary}
        />
      ))}
    </div>
  );
}

export default App;
