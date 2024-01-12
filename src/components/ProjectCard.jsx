import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Circle from "./Circle";

export default function ProjectCard(props) {
  return (
    <Card className="max-w-64">
      <CardHeader>
        <p className="font-bold">{props.title}</p>
      </CardHeader>
      <CardBody>
        <p>{props.description}</p>
      </CardBody>
      <CardFooter>
        <div className="inline-flex items-center gap-1">
          <Circle />
          <p>{props.primaryLanguage}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
