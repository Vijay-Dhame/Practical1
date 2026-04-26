import React, { useState, useEffect } from 'react'; import axios from 'axios'; import './App.css';
function App() {
    const [data, setData] = useState([]);
    const [form, setForm] = useState({ item:'', brand:'', user:'', text:'', rate:'' });
    const url = 'http://localhost:3000/api';
    useEffect(() => { load() }, []);
    const load = async () => { const res = await axios.get(url); setData(res.data); };
    const sync = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const send = async (e) => { e.preventDefault(); await axios.post(url, form); load(); setForm({ item:'', brand:'', user:'', text:'', rate:'' }); };
    return (
        <div className="app-main">
            <h1>Reviews</h1>
            <div className="app-grid">
                <form onSubmit={send} className="app-form">
                    <input name="item" placeholder="Item" value={form.item} onChange={sync} className="form-control mb-2" />
                    <input name="brand" placeholder="Brand" value={form.brand} onChange={sync} className="form-control mb-2" />
                    <input name="user" placeholder="User" value={form.user} onChange={sync} className="form-control mb-2" />
                    <input name="text" placeholder="Text" value={form.text} onChange={sync} className="form-control mb-2" />
                    <input name="rate" placeholder="Rate" value={form.rate} onChange={sync} className="form-control mb-2" />
                    <button className="btn btn-dark w-100">Add Reviews</button>
                </form>
                <div className="app-list">
                    {data.map((i, k) => <div key={k} className="app-item">{i.item} | {i.brand} | {i.user} | {i.text} | {i.rate}</div>)}
                </div>
            </div>
        </div>
    );
}
export default App;