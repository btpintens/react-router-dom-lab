import { useState, useEffect } from "react"
import { useParams } from "react-router"

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const [mailbox, setMailbox] = useState({})

useEffect(() => {
    const currentMailbox = props.mailbox.filter((mailbox) => {
        return mailbox._id === Number(mailboxId);
    });
    setMailbox(currentMailbos[0]);
}, [])

return (
    <>
    <h2>Mailbox Details</h2>
    <dl>
        <dt>ID: {mailbox._id}</dt>
        <dd></dd>
        <dt>Box Size: {mailbox.size}</dt>
        <dd></dd>
        <dt>Box Owner: {mailbox.owner}</dt>
        <dd></dd>
    </dl>
    </>
);
};

  export default MailboxDetails 