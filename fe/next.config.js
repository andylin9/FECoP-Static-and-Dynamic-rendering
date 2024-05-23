module.exports = {
  async rewrites() {
    return [
      {
        source: "/to3333/:path*",
        destination: "http://localhost:3333/:path*", // The :path parameter is used here so will not be automatically passed in the query
      },
    ];
  },
};
