import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/dashboard"><button>Dashboard</button></Link>
      <Link to="/courses"><button>Courses</button></Link>
      <Link to="/attendance"><button>Attendance</button></Link>
      <Link to="/timetable"><button>Timetable</button></Link>
      <Link to="/quiz"><button>Quizzes</button></Link>
      <Link to="/payment"><button>Payments</button></Link>
      <Link to="/"><button>Logout</button></Link>
    </div>
  );
}
