import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile", // nom de l'action
  async (_, { rejectWithValue }) => {
    try {
      // effectuer une requête vers l'API pour récupéré les données du profil de l'utilisateur
      const token = localStorage.getItem("token");
      console.log(token);
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // veirife si la réponse est invalide
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Erreur lors de la récupération du profil"
        );
      }

      // Analyse la réponse et renvoie les données
      const data = await response.json();

      return data.body; // Retourne uniquement les données pertinente
    } catch (error) {
      //Rejette la promesse avec un message personnalisé
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userName: null, // nom d'utilisateur
    firstName: null, // prénom
    lastName: null, // nom de famille
    token: null,
    status: "idle",
    error: null,
    user: null,
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userName = action.payload.userName;
      state.firstName = action.payload.firstName; // Corrigé pour éviter les fautes
      state.lastName = action.payload.lastName;
      const token = action.payload.token;
      localStorage.getItem("token");
      state.token = action.payload.token;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userName = null;
      state.firstName = null;
      state.lastName = null;
      state.status = "idle";
      state.error = null;
      // supprime le token du local storage

      localStorage.removeItem("token");
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading"; // indique que la raquête est en cours
        state.error = null; // Réinitialise l'erreur
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded"; // indique que la reête à réussit
        state.userName = action.payload.userName;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.isLoggedIn = true; // marque l'utilisateur comme connecté
        state.user = action.payload;
        console.log(state.user);
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed"; // indique que la requête à échoué
        state.error = action.payload; // enregistre le message d'erreur.
      });
  },
});

export const { login, logout, setToken } = userSlice.actions; // on exporte les actions du slice
export default userSlice.reducer;
