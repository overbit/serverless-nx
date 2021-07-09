import { Handler } from 'serverless-http';
import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm";
import { logger } from '@serverless-nx/logger';

export const handler: Handler = async (event, context) => {
  const params = {
    Name: process.env.SSM_PARAMTER, /* required */
    WithDecryption: true
  }
  const client = new SSMClient({});
  const command = new GetParameterCommand(params);
  
  try {
    const data = await client.send(command);
    // process data.
    logger.info(data.Parameter.Value);
  } catch (error) {
    // error handling.
    logger.error(error)
  } finally {
    // finally.
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ foo: 'bar' }),
  };
};
