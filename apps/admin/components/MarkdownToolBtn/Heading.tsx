import type { HeadingType } from "./type";
export default function Heading({ type }: { type: HeadingType }) {
  return (
    <div>
      H<span>{type}</span>
    </div>
  );
}
