const ListGroup = () => {
  let items = ["New York", "San Fransisco", "Tokyo", "Paris", "Londn"];
  items = [];
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found.</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;