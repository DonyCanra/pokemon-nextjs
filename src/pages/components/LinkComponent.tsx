// LinkComponent.tsx
import React from "react";

const LinkComponent: React.FC<{ href: string }> = ({ href }) => {
  return <link href={href} rel="stylesheet" />;
};

export default LinkComponent;
