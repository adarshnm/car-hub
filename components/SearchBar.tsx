"use client";
import React, { useState } from "react";
import { SearchManufacturer } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ propClass }: { propClass: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${propClass}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying-glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

function SearchBar({}) {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      manufacturer.replace(/\s+/g, "") === "" ||
      model.replace(/\s+/g, "") === ""
    ) {
      return alert("Please fill in the search bar");
    }

    updateSearchParams(
      model.replace(/\s+/g, "").toLowerCase(),
      manufacturer.replace(/\s+/g, "").toLowerCase()
    );
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton propClass="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          className="searchbar__input"
          name="model"
          placeholder="Tiguan"
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton propClass="sm:hidden" />
      </div>
      <SearchButton propClass="max-sm:hidden" />
    </form>
  );
}

export default SearchBar;
