import { useLocation } from "react-router-dom";

const Task = () => {
  const location = useLocation(); // Retrieve the passed state
  const { image, title, sub_title, price, id } = location.state || {}; // Extract details

  if (!title) {
    // Handle cases where state is undefined
    return <div>No card data found. Navigate back and try again.</div>;
  }

  return (
    <div>
      <h1>Card Details</h1>
      <div>
        <img
          src={image}
          alt={title}
          style={{ width: "300px", height: "200px", objectFit: "cover" }}
        />
        <h2>Title: {title}</h2>
        <h3>Sub-title: {sub_title}</h3>
        <p>Price: ₹{price}</p>
        <p>ID: {id}</p>
      </div>
    </div>
  );
};

export default Task;
