import { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadContacts = async () => {
    try {
      const res = await api.get("/admin/contact");
      setContacts(res.data);
    } catch (err) {
      alert("❌ Access denied or failed to load");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const deleteContact = async (id) => {
    // if (!window.confirm("Delete this message?")) return;
    await api.delete(`/admin/contact/${id}`);
    loadContacts();
  };

  if (loading) return <p>Loading contacts...</p>;

  return (
    <div className="admin-page">
      <h1>📩 Contact Messages</h1>

      <div className="table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((c, i) => (
              <tr key={c._id}>
                <td>{i + 1}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone || "-"}</td>
                <td className="message">{c.message}</td>
                <td>{new Date(c.createdAt).toLocaleDateString()}</td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => deleteContact(c._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {contacts.length === 0 && <p>No messages found.</p>}
      </div>
    </div>
  );
}
