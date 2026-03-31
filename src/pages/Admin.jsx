import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function Admin() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Admin Page</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Restricted admin content goes here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
