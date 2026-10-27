import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  transpilePackages: ["next-mdx-remote"],
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      [
        "rehype-pretty-code" as any,
        {
          theme: "github-dark",
          keepBackground: true,
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
