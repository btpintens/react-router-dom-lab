import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  if (!mailboxes.length) return <p>none mailboxes here</p>;

  return (
    <>
      <ul>
        {mailboxes.map((box) => (
          <li key={box._id} className="mail-box">
            <Link to={`/mailboxes/${box._id}`}>Mailbox #{box._id}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
