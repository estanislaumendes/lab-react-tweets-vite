function ProfileImage(props) {
  const image = props.image;

  return (
    <div>
      <img src={image} className="profile" alt="profile" />
    </div>
  );
}

export default ProfileImage;
