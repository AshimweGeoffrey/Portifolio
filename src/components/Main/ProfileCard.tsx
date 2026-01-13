interface ProfileCardProps {
  onContactClick?: () => void;
}

function ProfileCard({ onContactClick }: ProfileCardProps) {
  return (
    <div className="profile-card">
      <img src="main.png" alt="Person" style={{ background: "transparent" }} />
      <h3>Software Engineer</h3>
      <h2>Ashimwe Geoffrey</h2>
      <button onClick={onContactClick}>Contact</button>
    </div>
  );
}
export default ProfileCard;
