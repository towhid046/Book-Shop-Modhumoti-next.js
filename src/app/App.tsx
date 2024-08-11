"use client";
import React from "react";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const App = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
