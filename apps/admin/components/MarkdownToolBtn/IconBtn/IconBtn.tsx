import { IconType } from "../type";
import Bold from "./Bold";
import Italic from "./Italic";
import Strike from "./Strike";
import Quote from "./Quote";
import Links from "./Links";
import Images from "./Images";
import Code from "./Code";

const components = {
  Bold,
  Italic,
  Strike,
  Quote,
  Links,
  Images,
  Code,
};

export default function IconBtn({ type }: { type: IconType }) {
  const Component = components[type];
  return <Component />;
}
