import React from "react";

export const Domains = (props: any) => {

  return props.domains.map((domain: any, index: number) => {
    return (
      <div
        key={domain.name}
        className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row mb-2"
      >
        <div className="rounded-l-full bg-orange-300 md:bg-transparent">
          <div className="flex items-center space-x-2">
            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-orange-600">
              {domain.id}
            </div>
            <h3 className="text-base font-bold md:mb-4 md:hidden">
              {domain.name}
            </h3>
          </div>
        </div>

        <div>
          <h3 className="hidden mb-4 text-lg font-bold md:block">
            {domain.name}
          </h3>
          <p className="text-gray-500">{domain.description}</p>
        </div>
      </div>
    );
  });
};
