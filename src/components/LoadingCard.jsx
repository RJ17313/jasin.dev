import { Card, Skeleton } from "@nextui-org/react";

export default function LoadingCard() {
  return (
    <Card isBlurred className="w-64 space-y-4 p-4">
      <div className="flex gap-4">
        <Skeleton className="h-8 w-10 rounded-full"></Skeleton>
        <Skeleton className="w-full rounded-full"></Skeleton>
      </div>
      <Skeleton className="h-16 w-full rounded-lg"></Skeleton>
      <div className="flex justify-between">
        <Skeleton className="h-5 w-14 rounded-lg"></Skeleton>
        <Skeleton className="h-5 w-14 rounded-lg"></Skeleton>
      </div>
    </Card>
  );
}
