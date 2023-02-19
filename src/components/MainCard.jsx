
export default function MainCard() {
  return (
    <div>

      <div className="main-card">
        <div className="attached-main-card">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="profile-img"
            alt="person"
          />
          <span className="profile-caption"> Report for</span>
          <span className="mainCardHeading">Best Sales</span>
        </div>
        <ul id="ulAttachedMainCard">
          <li>Daily</li>
          <li>Weekly</li>
          <li>Monthly</li>
        </ul>
      </div>
    </div>
  );
}
