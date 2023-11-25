import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet(props) {
  const name = props.tweet.user.name;
  const handle = props.tweet.user.handle;
  const timestamp = props.tweet.timestamp;
  const message = props.tweet.message;
  const image = props.tweet.user.image;

  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />
          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
