import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
    boxOwner: '',
    boxSize: '',
};

const MailboxForm = ({ addBox }) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate ();

const handleChange = ({ target }) => {
    setFormData({...formData, [target.name]: target.value });
};

const handleSubmit = (evt) => {
  evt.preventDefault();
  addBox(formData);
setFormData(initialState);
  navigate("/mailboxes");
};

return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Name:</label>
        <input
          type="text"
          id="boxOwner"
          name="boxOwner"
          value={formData.boxOwner}
          onChange={handleChange}
        />
        <label htmlFor="boxSize">Size:</label>
        <select
          type="text"
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
          >
            <option value="">-- Select Size -- </option>
              <option value="Small">Small</option>
              <option value="Medium">Medium </option>
              <option value="Large">Large</option>
          </select>

          <button type="submit">Submit</button>
        </form>
    </main>
  );
};


export default MailboxForm;