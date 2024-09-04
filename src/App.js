import React, { useEffect, useState } from 'react';
import "./App.css";
import LoggedInScreen from './components/screens/LoggedInScreen';
import HomeScreen from './components/screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/user/userSlice';
import SignedInCheck from './components/wrappers/SignedInCheck';
import ProfileScreen from './components/screens/ProfileScreen';

function App() {
  const [isLoggedIn, SetLoggedIn] = useState(null);
  let user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        SetLoggedIn(true);
        dispatch(login({
          id: user.uid,
          email: user.email
        }))
      }
      else {
        SetLoggedIn(false);
        dispatch(logout());
      }
    })
    return () => unsubscribe();
  }, [dispatch]);

  console.log(user)


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/Login' element={<Login SetLoggedIn={SetLoggedIn} />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/' element={
            <HomeScreen isLoggedIn={isLoggedIn} />
          } />
          <Route path='/Movies' element={
            <SignedInCheck isLoggedIn={isLoggedIn}>
              <LoggedInScreen type="movies" isLoggedIn={isLoggedIn} />
            </SignedInCheck>
          } />
          <Route path='/Series' element={
            <SignedInCheck isLoggedIn={isLoggedIn}>
              <LoggedInScreen type="series" isLoggedIn={isLoggedIn} />
            </SignedInCheck>
          } />
          <Route path='/Profile' element={<ProfileScreen isLoggedIn={isLoggedIn} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
