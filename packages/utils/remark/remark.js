import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";
import remarkBreaks from "remark-breaks";

export function convertMarkdownToHtml(markdown) {
  return remark()
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(html)
    .processSync(markdown)
    .toString();
}
