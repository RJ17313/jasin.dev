import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import Circle from "./Circle";

export default function ProjectCard(props) {
  return (
    <Card className="max-w-64">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Image
            isBlurred
            alt="GitHub Logo"
            src="github-mark-white.svg"
            className="h-8 w-8"
          ></Image>
          <p className="font-bold">{props.title}</p>
        </div>
      </CardHeader>
      <CardBody>
        <p>{props.description}</p>
      </CardBody>
      <CardFooter>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-1">
            <Circle />
            <p>{props.primaryLanguage}</p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              alt="Star Icon"
              src="star.svg"
              className="h-5 w-5"
              isBlurred
            ></Image>
            <p className="font-bold">20</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
