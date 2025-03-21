import { createAmazonBedrock } from "@ai-sdk/amazon-bedrock";
import { streamText } from "ai";

export async function POST(req: Request) {
  const { messages, system, tools } = await req.json();

  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
  const region = process.env.AWS_REGION;

  try {
    const bedrock = createAmazonBedrock({
      region: region,
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
    });

    const model = bedrock("amazon.titan-text-premier-v1:0");

    const result = streamText({
      model: model,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("EEEEERRROR", error);
  }
}
