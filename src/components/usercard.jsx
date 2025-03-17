import "./usercard.css"; // Optional: for styling the card, if you have a CSS file.

const Usercard = () => {
  const profilePhoto = "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"; // 
  const name = "Bhavdeep";
  const email = "nani.doe@example.com";
  const phone = "+1234567890";
  const address = "123 Main Street, Springfield, USA";

  return (
    <div className="usercard">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <div className="user-details">
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Address: {address}</p>
      </div>
    </div>
  );
};

export default Usercard;
