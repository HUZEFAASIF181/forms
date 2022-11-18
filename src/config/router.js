import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Admin from "../screen/admin";
import Courses from "../screen/adminscreen/courselist";
import Trainerform from "../screen/adminscreen/trainerform";
import Trainerlist from "../screen/adminscreen/trainerlist";
import Form from "../screen/formcontrol";
import Home from "../screen/home";
import Login from "../screen/login";
import RegitsrationForm from "../screen/registration";
import Result from "../screen/result";
import Signup from "../screen/signup";
import StudentProfile from "../screen/studentProfile";
import StudentList from "../screen/students";
function AppRouter() {
  return (
    <>
      <Router>
        <div>
          <Link to='admin'>Admin</Link>
        </div>
        <Routes>
          <Route path="/:id" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="form" element={<RegitsrationForm />} />
          <Route path="result" element={<Result />} />
          <Route path="signup" element={<Signup />} />
          <Route path="admin/*" element={<Admin />} />
          <Route path="stdlist" element={<StudentList />} />
          <Route path="courselist" element={<Courses />} />
          <Route path="formc" element={<Form />} />
          <Route path="tform" element={<Trainerform />} />
          <Route path="tlist" element={<Trainerlist />} />
          <Route path="profile/:id" element={<StudentProfile />} />
        </Routes>
      </Router>
    </>
  );
}
export default AppRouter;