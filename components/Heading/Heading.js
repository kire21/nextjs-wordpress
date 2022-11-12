import React from "react";
import { getFontsSizeForHeading, getTextAlign } from "utils/fonts";

export const Heading = ({ textAlign, content, level }) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-5xl mx-auto my-5 ${getFontsSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
  });
  return tag;
};
