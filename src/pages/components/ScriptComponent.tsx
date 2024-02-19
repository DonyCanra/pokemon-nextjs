// ScriptComponent.tsx
import React from 'react';

const ScriptComponent: React.FC<{ src: string }> = ({ src }) => {
  return <script src={src} async />;
};

export default ScriptComponent;
