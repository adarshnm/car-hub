"use client";
import { useRouter } from "next/navigation";
import React from "react";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

function ShowMore({ page, isNext }: IShowMoreProps) {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (page + 1) * 10;
    const newPathNme = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathNme);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext ? (
        <CustomButton
          title="Show More"
          type="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          onClick={handleNavigation}
        />
      ) : null}
    </div>
  );
}

export default ShowMore;
