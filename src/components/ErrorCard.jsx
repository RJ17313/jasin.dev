import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function ErrorCard() {
  const router = useRouter();
  return (
    <Card
      isBlurred
      isPressable
      onPress={() => router.refresh()}
      className="max-w-64"
    >
      <CardHeader className="flex gap-2">
        <Image
          isBlurred
          alt="Exclamation Point Circle"
          className="h-8 w-8"
          src="error.svg"
        ></Image>
        <p className="font-bold">Sorry...</p>
      </CardHeader>
      <CardBody>
        <p>There was an error loading this content. Try refreshing the page.</p>
      </CardBody>
    </Card>
  );
}
