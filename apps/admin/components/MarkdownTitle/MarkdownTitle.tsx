"use client";

import { useMarkdownStore } from "../../store/useStore";

export default function MarkdownTitle() {
  const { title, setTitle } = useMarkdownStore();

  return (
    <textarea
      className="block w-full h-16 text-markdown-title overflow-hidden resize-none outline-none"
      placeholder="제목을 작성해주세요."
      defaultValue={title}
      onChange={setTitle}
    />
  );
}
