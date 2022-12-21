import './styles/App.scss';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Admin from './pages/Admin';
import PostPage from './pages/PostPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './pages/Login';
import axios from 'axios';
import AdminEditPost from './pages/AdminEditPost';
import AdminNewPost from './pages/AdminNewPost';

function App() {
  const [posts, setPosts] = useState(null);
  const [adminData, setAdmin] = useState(null);
  // sets state and grabs post API
  // will only fire one time
  // also checks to see if Admin is logged in.
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/');
      const json = await response.json();

      if (response.ok) {
        setPosts(json);
        console.log(json);
      }
    };
    const checkAdmin = () => {
      axios({
        method: 'get',
        withCredentials: true,
        url: '/admin/login',
      }).then((res) => {
        console.log(res);
        if (res.data) {
          setAdmin(res.data);
        } else {
          setAdmin(null);
        }
      });
    };
    fetchPosts();
    checkAdmin();
  }, []);

  // create individual pages for each blog post
  let postRoutes;
  if (posts) {
    postRoutes = posts.map((post) => (
      <Route path={`/post/${post._id}`} element={<PostPage post={post} />} />
    ));
  }

  let adminPostRoutes;
  if (posts) {
    adminPostRoutes = posts.map((post) => (
      <Route
        path={`/administrator/post/${post._id}`}
        element={<AdminEditPost post={post} />}
      />
    ));
  }

  return (
    <div className="root">
      <BrowserRouter>
        <NavBar adminData={adminData} />
        <Routes>
          <Route exact path="/" element={<Home posts={posts} />} />
          <Route
            exact
            path="/administrator/"
            // if admin isn't checked in, navigate to the login page
            // if administrator isn't checked in, navigate to the login page
            element={
              adminData ? (
                <Admin
                  adminData={adminData}
                  setAdmin={setAdmin}
                  posts={posts}
                />
              ) : (
                <Navigate to="/administrator/login" />
              )
            }
          />
          <Route
            exact
            path="/administrator/login"
            element={
              adminData ? (
                <Navigate to="/administrator" />
              ) : (
                <Login adminData={adminData} setAdmin={setAdmin} />
              )
            }
          />
          <Route
            exact
            path="/administrator/newpost"
            element={
              adminData ? (
                <AdminNewPost />
              ) : (
                <Navigate to="/administrator/login" />
              )
            }
          />
          {posts && postRoutes}
          {posts && adminPostRoutes}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
