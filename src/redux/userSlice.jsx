import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching user profile
export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile", // nom de l'action
  async (_, { rejectWithValue }) => {
    try {
      // Fetch user profile data from API
      const token = localStorage.getItem("token");
      // Create variable for API call
      const USER_PROFILE_API_URL = "http://localhost:3001/api/v1/user/profile";
      console.log(token);
      const response = await fetch(USER_PROFILE_API_URL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      // Check if the response is invalid
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Erreur lors de la récupération du profil"
        );
      }

      // Parse and return the response data
      const data = await response.json();

      return data.body; // Retourn only relevant data
    } catch (error) {
      //Reject the promise with a custom error message
      return rejectWithValue(error.message);
    }
  }
);

// Create the userSlice
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userName: null,
    firstName: null,
    lastName: null,
    token: null,
    status: "idle",
    error: null,
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userName = action.payload.userName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userName = null;
      state.firstName = null;
      state.lastName = null;
      state.status = "idle";
      state.error = null;
      state.token = null;

      // Remove token from local storage
      localStorage.removeItem("token");
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading"; // Indicate that the request is in progress
        state.error = null; // Reset error
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded"; // Indicate that the request succeeded
        state.userName = action.payload.userName;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.isLoggedIn = true; // Change user state at logged in
        console.log(state);
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed"; // Request failed
        state.error = action.payload; // Store error message
      });
  },
});

// Export slice actions
export const { login, logout, setToken } = userSlice.actions;
export default userSlice.reducer;
