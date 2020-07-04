const dev = {
  s3: {
    BUCKET: "www.bebrideassessoria.com.br",
  },
  apiGateway: {
    REGION: "localhost",
    URL: "http://192.168.100.68:3030",
  },
  cognito: {
    REGION: "YOUR_DEV_COGNITO_REGION",
    USER_POOL_ID: "YOUR_DEV_COGNITO_USER_POOL_ID",
    APP_CLIENT_ID: "YOUR_DEV_COGNITO_APP_CLIENT_ID",
    IDENTITY_POOL_ID: "YOUR_DEV_IDENTITY_POOL_ID",
  },
};

const prod = {
  s3: {
    BUCKET: "www.bebrideassessoria.com.br",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "www.bebrideassessoria.com.br",
  },
  cognito: {
    REGION: "YOUR_PROD_COGNITO_REGION",
    USER_POOL_ID: "YOUR_PROD_COGNITO_USER_POOL_ID",
    APP_CLIENT_ID: "YOUR_PROD_COGNITO_APP_CLIENT_ID",
    IDENTITY_POOL_ID: "YOUR_PROD_IDENTITY_POOL_ID",
  },
};

const config = process.env.REACT_APP_STAGE === "production" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 1000000,
  ...config,
};
