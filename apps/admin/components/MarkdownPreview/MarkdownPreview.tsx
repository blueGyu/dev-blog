"use client";

import { convertMarkdownToHtml } from "@repo/utils/remark";
import { useMarkdownStore } from "../../store/useStore";

export default function MarkdownPreview() {
  const { title, content } = useMarkdownStore();

  return (
    <div>
      <h1 className="text-markdown-title mt-6 mb-16">{title}</h1>
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(content) }}
      ></article>
    </div>
  );
}
