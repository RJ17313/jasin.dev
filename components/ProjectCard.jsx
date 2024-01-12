import { Card, CardBody } from "@nextui-org/react";

export default function ProjectCard(props) {
  return (
    <Card className="w-[10px]">
      <CardBody>
        <p>{props.title}</p>
      </CardBody>
    </Card>
  );
}
