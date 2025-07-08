import { Prisma } from "@/prisma/generated/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type FacultyApiResponse = Prisma.FacultyGetPayload<{
  include: { FacultySubject: { select: { subjectCode: true } } };
}>;

// First, create the thunk
export const fetchAllFaculty = createAsyncThunk(
  "faculty/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<FacultyApiResponse[]>(`/api/teachers`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch faculty");
    }
  }
);

interface FacultyState {
  faculty: FacultyApiResponse[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  faculty: [],
  loading: "idle",
} satisfies FacultyState as FacultyState;

// Then, handle actions in your reducers:
const facultySlice = createSlice({
  name: "faculty",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllFaculty.fulfilled, (state, { payload }) => {
      state.loading = "succeeded";
      state.faculty = payload;
    });
    builder.addCase(fetchAllFaculty.rejected, (state, action) => {
      state.loading = "failed";
    });
  },
});

export const facultyReducer = facultySlice.reducer;
