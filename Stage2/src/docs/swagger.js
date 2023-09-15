const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "HNGiX CRUD application",
      version: "1.0.0",
      description: "A simple CRUD application",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Production",
      },
      {
        url: "http://localhost:5000",
        description: "Local server",
      },
    ],
  },

  apis: ["./routes/*.js"], // Point to the folder containing your route files
};
const specs = swaggerJsdoc(options);

module.exports = specs;
