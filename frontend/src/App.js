import { useState } from "react";

function App() {

  const [patientName, setPatientName] = useState("");
  const [department, setDepartment] = useState("");
  const [token, setToken] = useState(null);

  const addPatient = async () => {

    const response = await fetch("http://localhost:5000/api/queue/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        patientName,
        department
      })
    });

    const data = await response.json();
    setToken(data.tokenNumber);
  };

  return (
    <div style={{padding:"40px"}}>
      <h1>Hospital Queue System</h1>

      <input
        placeholder="Patient Name"
        value={patientName}
        onChange={(e)=>setPatientName(e.target.value)}
      />

      <br/><br/>

      <input
        placeholder="Department"
        value={department}
        onChange={(e)=>setDepartment(e.target.value)}
      />

      <br/><br/>

      <button onClick={addPatient}>
        Get Token
      </button>

      {token && (
        <h2>Your Token Number: {token}</h2>
      )}

    </div>
  );
}

export default App;