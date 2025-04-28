const UserInfo = ({ user }) => {
    if (!user) return <h1>Loading...</h1>;
  
    const { name, age, country, books } = user;
  
    return (
      <section>
        <h2>{name}</h2>
        <p>Age: {age} years</p>
        <p>Country: {country}</p>
  
        <h3>Books</h3>
        <ul>
          {books?.map((book) => (
            <li key={book}>{book}</li>
          ))}
        </ul>
      </section>
    );
};

export default UserInfo;