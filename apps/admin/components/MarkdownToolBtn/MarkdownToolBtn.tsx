import type { MarkdownToolBtnProps } from "./type";
import Heading from "./Heading";
import { IconBtn } from "./IconBtn";

export default function MarkdownToolBtn(props: MarkdownToolBtnProps) {
  const { variant, type } = props;

  if (variant === "text") {
    return (
      <button className="flex justify-center items-center w-12 h-12">
        <Heading type={type} />
      </button>
    );
  } else {
    return (
      <button className="flex justify-center items-center w-12 h-12">
        <IconBtn type={type} />
      </button>
    );
  }
}
