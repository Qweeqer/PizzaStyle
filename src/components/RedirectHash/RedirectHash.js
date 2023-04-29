import { Navigate, useLocation } from "react-router-dom";

function RedirectHash() {
  const location = useLocation();
  const { search, hash } = location;

  if (hash.startsWith("#/") || hash.startsWith("#?/")) {
    const newPath = hash.slice(1) + search;
    return <Navigate to={newPath} replace />;
  }

  return null;
}

export default RedirectHash;
