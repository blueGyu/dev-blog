"use client";

import { useMarkdownStore } from "../../store/useStore";

export default function MarkdownContent() {
  const { content, setContent } = useMarkdownStore();

  return (
    <textarea
      className="block flex-1 w-full h-full text-markdown-content text-[var(--text-primary)] resize-none outline-none"
      placeholder="입력해주세요."
      defaultValue={content}
      onChange={setContent}
    />
  );
}
