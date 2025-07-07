import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function DefaultPrompt() {
  return (
    <div>
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-lg">I am AI</CardTitle>
        </CardHeader>
        <CardContent>
          I&#39;m here to assist you with any queries you have. Feel free
          to ask me anything.
        </CardContent>
      </Card>
    </div>
  );
}
