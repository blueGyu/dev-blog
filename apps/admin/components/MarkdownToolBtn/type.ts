export type HeadingType = number;
interface TextBtnProps {
  variant: "text";
  type: HeadingType;
}

export type IconType =
  | "Bold"
  | "Italic"
  | "Strike"
  | "Quote"
  | "Links"
  | "Images"
  | "Code";

interface IconBtnProps {
  variant: "icon";
  type: IconType;
}

export type MarkdownToolBtnProps = TextBtnProps | IconBtnProps;
