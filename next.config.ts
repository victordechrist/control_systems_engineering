import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  transpilePackages: ["next-mdx-remote"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      ["remark-frontmatter" as unknown as string],
      ["remark-mdx-frontmatter" as unknown as string],
    ],
    rehypePlugins: [
      [
        "rehype-pretty-code" as unknown as string,
        {
          theme: "github-dark",
          keepBackground: true,
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
