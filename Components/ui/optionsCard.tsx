import React from "react";

interface OptionsProps {
  title: string;
  minimum: number;
  placeHolder: string;
  Value: number;
  handleChange: (value: number) => void;
}

const Options: React.FC<OptionsProps> = ({
  title,
  minimum,
  placeHolder,
  Value,
  handleChange,
}) => {
  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {title}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          id="price"
          name="price"
          type="number"
          min={minimum}
          value={Value}
          onChange={(e) => handleChange(Number(e.target.value))}
          placeholder={placeHolder}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option>{title}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Options;
