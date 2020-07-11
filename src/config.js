const dev = {
  s3: {
    BUCKET: "www.bebrideassessoria.com.br",
  },
  apiGateway: {
    REGION: "localhost",
    URL: "http://192.168.100.68:3030",
  },
};

const prod = {
  s3: {
    BUCKET: "www.bebrideassessoria.com.br",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "http://ec2-52-87-218-105.compute-1.amazonaws.com:3030",
  },
};

const config = process.env.REACT_APP_STAGE === "production" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 1000000,
  ...config,
};
