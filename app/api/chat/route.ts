import { createAmazonBedrock } from "@ai-sdk/amazon-bedrock";
import { streamText } from "ai";

export async function POST(req: Request) {
  const { messages, system, tools } = await req.json();

  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
  const region = process.env.AWS_REGION;

  const bedrock = createAmazonBedrock({
    region: region,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    sessionToken: "xxxxxxxxx",
  });

  const model = bedrock("anthropic.claude-3-sonnet-20240229-v1:0", {
    additionalModelRequestFields: { top_k: 350 },
  });

  const result = streamText({
    model: model,
    messages,
    // forward system prompt and tools from the frontend
    system,
  });

  return result.toDataStreamResponse();
}
