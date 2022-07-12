import { Route, Routes } from "react-router-dom"
import { NotFound404Page } from "../../pages/404"
import { AboutPage } from "../../pages/aboutMe"
import { ContactPage } from "../../pages/contact"
import { Login } from "../../pages/Login"
import { ProjectPage } from "../../pages/Project"
import { SingleTask } from "../../pages/singlTask"
import { Registration } from "../../pages/Register";
import { PrivateRoute } from "../../hoc/AuthRouteHoc"

export const RoutesComponent = () => {
  return (
    <Routes>
      {/* Private Routes */}
      <Route path="/"
        element={
          <PrivateRoute>
            <AboutPage />
          </PrivateRoute>
        } />
      <Route path="/project"
        element={
          <PrivateRoute>
            <ProjectPage />
          </PrivateRoute>
        } />
      <Route path="/project/:taskId"
        element={
          <PrivateRoute>
            <SingleTask />
          </PrivateRoute>
        } />

      {/* Public Routes */}
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />

      {/* 404 Route */}
      <Route path="*" element={<NotFound404Page />} />
    </Routes>
  );
};
