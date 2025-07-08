import { SupportTicket } from "@/prisma/generated/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllTickets = createAsyncThunk("tickets/getAll", async () => {
  try {
    const res = await axios.get<SupportTicket[]>("/api/tickets");
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch tickets");
  }
});

export const updateTicket = createAsyncThunk(
  "tickets/update",
  async (payload: {
    ticketId: string;
    status?: SupportTicket["status"];
    assignedTo?: string;
    resolution?: string;
  }) => {
    try {
      const res = await axios.put<SupportTicket>(`/api/tickets`, {
        ...payload,
      });
      return res.data;
    } catch (error) {
      throw new Error("Failed to update ticket");
    }
  }
);

type SupportTicketState = {
  tickets: SupportTicket[];
  loading: "idle" | "pending" | "succeeded" | "failed";
};

const initialState = {
  tickets: [],
  loading: "idle",
} satisfies SupportTicketState as SupportTicketState;

const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllTickets.fulfilled, (state, { payload }) => {
      state.loading = "succeeded";
      state.tickets = payload;
    });
    builder.addCase(fetchAllTickets.rejected, (state, action) => {
      state.loading = "failed";
    });

    builder.addCase(updateTicket.fulfilled, (state, { payload }) => {
      state.loading = "succeeded";
      const index = state.tickets.findIndex((t) => t.id === payload.id);
      if (index !== -1) {
        state.tickets[index] = payload;
      }
    });
    builder.addCase(updateTicket.rejected, (state, action) => {
      state.loading = "failed";
    });
  },
});

export const ticketReducer = ticketSlice.reducer;
