import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (formData) => {
    const newBox = {
      _id: mailboxes.length + 1,
      ...formData,
    };
    setMailboxes([...mailboxes, newBox]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route path="*" element={<h2>whoopsy</h2>} />
      </Routes>
    </>
  );
};

export default App;
