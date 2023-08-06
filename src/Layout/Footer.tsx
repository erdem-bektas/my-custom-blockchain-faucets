import { FC } from "react";

export const Footer: FC = () => (
  <footer className="relative bottom-0 left-0 right-0 w-full py-4 mt-8 text-gray-500 border-t md:absolute lg:relative">
    <div className="max-w-4xl mx-auto overflow-hidden text-center">
      <div className="container">
        <span className="mx-1">Made by </span>
        <a
          href="https://github.com/erdem-bektas"
          className="font-bold text-gray-700 cursor-pointer"
        >
          Erdem Bektas
        </a>
      </div>
    </div>
  </footer>
);
