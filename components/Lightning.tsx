import { CSSProperties } from "react";

interface LightningProps {
  size?: number;
  className?: string;
  style?: CSSProperties;
}

export function Lightning({ size = 240, className, style }: LightningProps) {
  const height = (size / 200) * 320;

  return (
    <svg
      viewBox="0 0 120 320"
      width={size}
      height={height}
      className={className}
      style={{
        // color: "var(--mantine-color-gray-3, #d0d5dd)",
        color: "255, 255, 255",
        ...style,
      }}
    >
      <path
        d="M5 18 L92 22 L58 120 L128 175 L72 310 L86 210 L22 172 Z"
        fill="currentColor"
        opacity={0.8}
      />
      {/* <path
        d="M28 92 L86 114 L54 178 L102 198 L66 276 L76 214 L28 194 Z"
        fill="currentColor"
        opacity={0.55}
      /> */}
    </svg>
  );
}