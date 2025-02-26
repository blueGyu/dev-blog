"use client";

import { ChangeEvent } from "react";
import { create } from "zustand";

interface MarkdownState {
  title: string;
  setTitle: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const useMarkdownStore = create<MarkdownState>((set) => ({
  title: "",
  setTitle: (event) => set(() => ({ title: event.target.value })),
}));
