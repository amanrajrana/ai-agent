import { configureStore } from "@reduxjs/toolkit";
import { facultyReducer } from "./features/faculty/faculitySlice";
import { ticketReducer } from "./features/tickets/ticketSlice";
import { impLinksReducer } from "./features/links/links.slice";
import { faqReducer } from "./features/faqs/faqs.slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      faculty: facultyReducer,
      ticket: ticketReducer,
      impLinks: impLinksReducer,
      faqState: faqReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
