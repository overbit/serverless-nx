import { Handler } from 'serverless-http';

export const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ name: 'Antonio', surname: "Cannavacciuolo" }),
  };
};
