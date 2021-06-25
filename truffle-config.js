module.exports = {
    networks: {
      development: {
        host: "http://localhost",
        port: 8545,
        network_id: "*" // Rinkeby
      }
    },
    compilers: {
      solc: {
        version: "^0.8.0"
      }
    }
  };