"use client";

import { ChangeEvent } from "react";
import { create } from "zustand";

interface MarkdownState {
  title: string;
  content: string;
  setTitle: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  setContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const useMarkdownStore = create<MarkdownState>((set) => ({
  title: "",
  content: "",
  setTitle: (event) => set(() => ({ title: event.target.value })),
  setContent: (event) => set(() => ({ content: event.target.value })),
}));
