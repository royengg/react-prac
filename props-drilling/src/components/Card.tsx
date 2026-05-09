function Card(props: any) {
  return (
    <div className="Card">
      <img src="https://images.unsplash.com/photo-1770462988207-d0070e7d3b05?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
      <h1>{props.user}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quis
        voluptatibus saepe hic, dignissimos incidunt animi? Veritatis corrupti
        officia libero quae quas omnis iusto quisquam similique earum? Facilis,
        ipsa iste.
      </p>
      <button>View Profile</button>
    </div>
  );
}

export default Card;
