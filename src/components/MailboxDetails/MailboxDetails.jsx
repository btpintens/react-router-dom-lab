import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const [mailbox, setMailbox] = useState({});

  useEffect(() => {
    const foundBox = mailboxes.find((box) => box._id === Number(mailboxId));
    setMailbox(foundBox);
  }, [mailboxes, mailboxId]);

  if (!mailbox) return <h2>No Can Has Mailbox for You</h2>;

  return (
    <>
      <h2>Mailbox Details</h2>
      <dl>
        <dt>ID: {mailbox._id}</dt>
        <dd></dd>
        <dt>Box Size: {mailbox.boxSize}</dt>
        <dd></dd>
        <dt>Box Owner: {mailbox.boxOwner}</dt>
        <dd></dd>
      </dl>
    </>
  );
};

export default MailboxDetails;
