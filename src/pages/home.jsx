import React, { useEffect } from "react";
import { Hero } from "../components/hero/hero";
import { Features } from "../components/features/features";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../redux/reducers/userSlice";

export function Home() {
  const { isLoggedIn } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //verifier la présence du token au chargement de la page
  useEffect(() => {
    const token = localStorage.getItem("token"); // Récupérer le token

    if (!token) {
    } else if (!isLoggedIn) {
      (async () => {
        await dispatch(fetchUserProfile());
      })();
    }
  }, [navigate, dispatch]);

  return (
    <>
      <main>
        <Hero />
        <Features />
      </main>
    </>
  );
}
export default Home;
