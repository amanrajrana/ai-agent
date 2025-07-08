import { ImportantLink, Prisma } from "@/prisma/generated/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllLinks = createAsyncThunk("links/getAll", async () => {
  try {
    const res = await axios.get<ImportantLink[]>("/api/links");
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch links");
  }
});

export const updateLink = createAsyncThunk(
  "links/update",
  async (payload: { id: string; data: Prisma.ImportantLinkUpdateInput }) => {
    try {
      const res = await axios.put<ImportantLink>(`/api/links/${payload.id}`, {
        ...payload.data,
        id: undefined, // Ensure id is not sent in the payload
      });
      return res.data;
    } catch (error) {
      throw new Error("Failed to update link");
    }
  }
);

export const createLink = createAsyncThunk(
  "links/create",
  async (payload: Prisma.ImportantLinkCreateInput) => {
    try {
      const res = await axios.post<ImportantLink>("/api/links", payload);
      return res.data;
    } catch (error) {
      throw new Error("Failed to create link");
    }
  }
);

type ImportantLinksState = {
  links: ImportantLink[];
  loading: "idle" | "pending" | "succeeded" | "failed";
};

const initialState = {
  links: [],
  loading: "idle",
} satisfies ImportantLinksState as ImportantLinksState;

const linksSlice = createSlice({
  name: "importantLinks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllLinks.fulfilled, (state, { payload }) => {
      state.loading = "succeeded";
      state.links = payload;
    });
    builder.addCase(fetchAllLinks.rejected, (state, action) => {
      state.loading = "failed";
    });

    builder.addCase(updateLink.fulfilled, (state, { payload }) => {
      state.loading = "succeeded";
      const index = state.links.findIndex((t) => t.id === payload.id);
      if (index !== -1) {
        state.links[index] = payload;
      }
    });
    builder.addCase(updateLink.rejected, (state, action) => {
      state.loading = "failed";
    });
    builder.addCase(createLink.fulfilled, (state, { payload }) => {
      state.loading = "succeeded";
      state.links.unshift(payload);
    });
  },
});

export const impLinksReducer = linksSlice.reducer;
