import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "pages/Admin";
import NotFound from "pages/NotFound";
const Newsfeed = React.lazy(() => import("pages/Newsfeed"));
const Waitlist = React.lazy(() => import("pages/Waitlist"));
const Landingpage = React.lazy(() => import("pages/Landingpage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Landingpage />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/newsfeed" element={<Newsfeed />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
