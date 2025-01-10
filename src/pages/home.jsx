import React, { useEffect } from "react";
import { Hero } from "../components/hero/hero";
import { Features } from "../components/features/features";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../redux/userSlice";

// Home component - main landing page
export function Home() {
  // Get loggin status for redux store
  const { isLoggedIn } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Check for token presence and fetch user profile if needed
  useEffect(() => {
    const token = localStorage.getItem("token"); // Get token frome local storage

    if (!token) {
      // no action if token is not in user's local storage
    } else if (!isLoggedIn) {
      // Fetch user profile if token exists but user is not logged in
      (async () => {
        await dispatch(fetchUserProfile());
      })();
    }
  }, [navigate, dispatch]);

  return (    
      <main>
        <Hero />
        <Features />
      </main>    
  );
}

