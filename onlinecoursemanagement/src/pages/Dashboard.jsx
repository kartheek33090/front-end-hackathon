import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <h1>Dashboard</h1>

        <div className="dashboard-cards">
          <div className="card">Total Students: 320</div>
          <div className="card">Courses: 12</div>
          <div className="card">Attendance: 85%</div>
          <div className="card">Completed Quizzes: 15</div>
        </div>
      </div>
    </div>
  );
}
