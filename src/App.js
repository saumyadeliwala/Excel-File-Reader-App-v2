import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Uploading from "./pages/Uploading";
import Upload from "./pages/Upload";
import Uploaded from "./pages/Uploaded"; // Import the Uploaded component

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/uploading":
        title = "";
        metaDescription = "";
        break;
      case "/upload":
        title = "";
        metaDescription = "";
        break;
      case "/uploaded": // Add a case for "/uploaded"
        title = ""; // Add the title and metaDescription for the "Uploaded" page if needed
        metaDescription = "";
        break;
      default:
        title = ""; // Handle other cases if needed
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/uploading" element={<Uploading />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/uploaded" element={<Uploaded />} /> {/* Add a route for "/uploaded" */}
    </Routes>
  );
}
export default App;
