import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import { Link } from "@nextui-org/react";

export default function TutorlListComponent(props) {
  return (
    <div className="flex gap-3 py-8 hover:scale-110 transition-transform">
          <Card
            className="max-w-[340px] max-h-[180px]"
            isPressable
          >
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src="/avatars/avatar-1.png"
                />

                <div className="flex flex-col gap-1 items-start">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    {props.name}
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400">
                    @{props.social}
                  </h5>
                </div>
              </div>
            </CardHeader>
            <Link href={`tutors/${props.id}`} target="_blank">
              <CardBody className="px-3 py-0 text-small text-black">
                <p>
                  {props.desc}{" "}
                  <span className="text-small text-default-400">
                    {props.personality}
                  </span>
                </p>
              </CardBody>
            </Link>
            <CardFooter>
              <div className="justify">
                <p className=" text-default-400 text-small">
                  <span className="font-semibold text-black">{props.price}</span>
                  /Hour
                </p>
              </div>
              <div className="flex gap-3 justify-end w-[340px]">
              </div>
            </CardFooter>
          </Card>
    </div>
  );
}
