import { Handler, Context } from 'aws-lambda';

interface HelloResponse {
  statusCode: number;
  body: string;
}

const hello: Handler = async (event: any, context: Context) => {
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello world!',
    }),
  };

  return response;
};

export { hello };
