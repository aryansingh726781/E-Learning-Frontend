import {  useState } from "react";
import api from "../services/api";

export default function AdminInstructors() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({ name: "", skill: "", image: "" });


const load= async () => {
    const res = await api.get("/instructors");
    setList(res.data);
  };

  const submit = async () => {
    await api.post("/instructors", form);
    load();
  };

  const remove = async (id) => {
    await api.delete(`/instructors/${id}`);
    load();
  };

  return (
 
<div>
   <div>
      <h2>Instructors</h2>

      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Skill" onChange={e => setForm({ ...form, skill: e.target.value })} />
      <input placeholder="Image URL" onChange={e => setForm({ ...form, image: e.target.value })} />
      <button onClick={submit}>Add</button>

      
    </div>

<div>
    {list.map(i => (
        <div key={i._id}>
         < img src={i.image} alt={i.name} />
            <div>
              <h4>{i.name}</h4>
              <p>{i.skill}</p>
            </div>
          <button onClick={() => remove(i._id)}>Delete</button>
        </div>
      ))}

</div>

</div>

  );
}
