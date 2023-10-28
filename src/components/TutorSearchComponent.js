import React from "react";
import { Button, Input } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faEye } from "@fortawesome/free-solid-svg-icons";

export default function TutorSearchComponent() {
  const searchLogo = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  const searchButton = (
    <Button className="bg-[#FB9C46] text-white w-[246px] h-[44px]">
      {searchLogo}Search
    </Button>
  );

  const types = [
    "Also Speaks",
    "From",
    "Price",
    "Native Speaker",
    "Teacher Types",
    "Category",
    "Instant Lesson",
    "Availability",
    "Auto-accept",
  ];

  return (
    <div className="px-24">
      <div className="flex flex-wrap gap-8">
        <div className="flex-auto w-[807px] h-[66px] mt-[40px]">
          <Input
            type="text"
            placeholder="Lessons Name"
            labelPlacement="outside"
            endContent={searchButton}
            startContent={searchLogo}
          />
        </div>
        <div className="flex-auto w-[357px] h-[66px] mt-[40px]">
          <Input
            type="text"
            placeholder="Popular Lesson"
            labelPlacement="outside"
            startContent={<FontAwesomeIcon icon={faEye} />}
          />
        </div>
      </div>
      <div>
        <div className="flex flex-auto place-content-center gap-10 pb-[40px]">
          {types.map((type) => (
            <Button
              className={`${
                type === "Also Speaks" && "Category"
                  ? "w-[129px] h-[41px] rouded-[5px] p-[10px] text-[#979797] shadow-xl bg-[#FB9C46] text-[white]"
                  : "w-[129px] h-[41px] rouded-[5px] p-[10px] text-[#979797] shadow-xl bg-white text-black"
              }`}
            >
              {type}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
