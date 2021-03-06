import { Handler } from 'serverless-http';
import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm";

export const handler: Handler = async (event, context) => {
  console.log(event)
  const params = {
    Name: '/application/services_products/test/srv-products-test/password', /* required */
    WithDecryption: true
  }
  const client = new SSMClient({});
  const command = new GetParameterCommand(params);
  
  try {
    const data = await client.send(command);
    // process data.
    console.log(data.Parameter?.Value);
  } catch (error) {
    // error handling.
    console.log(error, error.stack)
  } finally {
    // finally.
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ foo: 'bar' }),
  };
};
