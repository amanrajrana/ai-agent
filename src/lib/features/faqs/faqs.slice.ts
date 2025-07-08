import { FAQ, Prisma } from "@/prisma/generated/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
export const fetchAllFAQs = createAsyncThunk(
  "faqs/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<FAQ[]>(`/api/faqs`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch FAQs");
    }
  }
);

export const createFAQ = createAsyncThunk(
  "faqs/create",
  async (payload: Prisma.FAQCreateInput, thunkAPI) => {
    try {
      const response = await axios.post<FAQ>(`/api/faqs`, payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to create FAQ");
    }
  }
);

export const deleteFAQ = createAsyncThunk(
  "faqs/delete",
  async (id: string, thunkAPI) => {
    try {
      await axios.delete(`/api/faqs/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to delete FAQ");
    }
  }
);

export const updateFAQ = createAsyncThunk(
  "faqs/update",
  async (payload: { id: string; data: Prisma.FAQUpdateInput }, thunkAPI) => {
    try {
      const response = await axios.put<FAQ>(
        `/api/faqs/${payload.id}`,
        payload.data
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to update FAQ");
    }
  }
);

interface FAQState {
  faqs: FAQ[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  faqs: [],
  loading: "idle",
} satisfies FAQState as FAQState;

// Then, handle actions in your reducers:
const faqSlice = createSlice({
  name: "faqs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllFAQs.fulfilled, (state, { payload }) => {
      state.loading = "succeeded";
      state.faqs = payload;
    });
    builder.addCase(fetchAllFAQs.rejected, (state, action) => {
      state.loading = "failed";
    });
    builder.addCase(createFAQ.fulfilled, (state, { payload }) => {
      state.loading = "succeeded";
      state.faqs.push(payload);
    });
    builder.addCase(updateFAQ.fulfilled, (state, { payload }) => {
      state.loading = "succeeded";
      const index = state.faqs.findIndex((faq) => faq.id === payload.id);
      if (index !== -1) {
        state.faqs[index] = payload;
      }
    });
    builder.addCase(deleteFAQ.fulfilled, (state, { payload }) => {
      state.loading = "succeeded";
      state.faqs = state.faqs.filter((faq) => faq.id !== payload);
    });
  },
});

export const faqReducer = faqSlice.reducer;
