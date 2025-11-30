import Sidebar from "../components/Sidebar";

export default function Attendance() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <h2>Attendance Records</h2>
        <p>Attendance data will load from backend.</p>
      </div>
    </div>
  );
}
