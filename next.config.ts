// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
//
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     dangerouslyAllowLocalIP: true,
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "ac.goit.global",
//       },
//     ],
//   },
// };

// export default nextConfig;
//
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://notehub-api.goit.study/api/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: "ac.goit.global",
      },
    ],
  },
};

export default nextConfig;
