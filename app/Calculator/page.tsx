"use client";
import MagicButton from "@/Components/ui/magicButton";
import React, { useEffect, useState } from "react";
import Options from "@/Components/ui/optionsCard";

import { optional } from "@/data";

const Page = () => {
  const [Livestock, setLivestock] = useState(false);
  const [table, setTable] = useState(false);
  const [Crop, setCrop] = useState(false);
  const [Gold, setGold] = useState(false);
  const [cropNumber, setCropNumber] = useState(5000);
  const [cropMessage, setCropMessage] = useState("");
  const [cattle, setCattle] = useState(60);
  const [camel, setCamel] = useState(150);
  const [goat, setGoat] = useState(60);
  const [zakatMessage, setZakatMessage] = useState([]);
  const [selectedOption, setSelectedOption] = useState("option1");
  const [CamelZakat, setCamelZakat] = useState("");
  const [CattleZakat, setCattleZakat] = useState("");
  const [GoatZakat, setGoatZakat] = useState("");
  const [Zakat40, setZakat40] = useState(0);
  const [Zakat30, setZakat30] = useState(0);
  const [dollar, setDollar] = useState(54000);
  const [equiGold, setEquiGold] = useState(70);
  const [GoldMessage, setGoldMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<number>>) =>
    (value: number) => {
      setter(value);
    };
  const CalculateLivestock = () => {
    setTable(true);
    let CamelZakat = "";
    let CattleZakat = "";
    let GoatZakat = "";
    let Zakat40 = 0;
    let Zakat30 = 0;
    let Zakat40Camel = 0;
    let Zakat50Camel = 0;
    if (camel <= 121) {
      if (camel === 5 && camel < 10) {
        CamelZakat = "1 (2 years old sheep or 3 years old goats) ";
      } else if (camel === 10 && camel < 15) {
        CamelZakat = "2 (2 years old sheep or 3 years old goats)";
      } else if (camel === 15 && camel < 20) {
        CamelZakat = "3 (2 years old sheep or 3 years old goats)";
      } else if (camel === 20 && camel < 25) {
        CamelZakat = "4 (2 years old sheep or 3 years old goats)";
      } else if (camel == 25 && camel < 36) {
        CamelZakat = "1 2 years old shecamel";
      } else if (camel === 36 && camel < 46) {
        CamelZakat = "1 3 years old shecamel";
      } else if (camel === 46 && camel < 61) {
        CamelZakat = "5 4 years old shecamel";
      } else if (camel === 61 && camel < 76) {
        CamelZakat = "5 5 years old shecamel";
      } else if (camel === 76 && camel < 91) {
        CamelZakat = "2 3 years old shecamel";
      } else if (camel === 91 && camel < 121) {
        CamelZakat = "2 4 years old shecamel";
      } else if (camel === 121) {
        CamelZakat = "3 3 years old shecamel";
      }
    } else {
      let remainingCamel = camel;
      while (remainingCamel >= 40) {
        if (remainingCamel % 40 < 10) {
          Zakat40Camel++;
          remainingCamel -= 40;
        } else {
          Zakat50Camel++;
          remainingCamel -= 50;
        }
      }

      // Construct CattleZakat message
      if (Zakat40Camel > 0) {
        CamelZakat += `${Zakat40Camel} (3 years old shecamel) `;
      }
      if (Zakat50Camel > 0) {
        CamelZakat += `${Zakat50Camel} (4 year old shecamel) `;
      }
    }

    if (goat < 40) {
      GoatZakat = "There is no zakat for Goats nor sheeps";
    } else if (goat >= 40) {
      GoatZakat = `You have to give ${Math.floor(
        goat / 40
      )} sheep which is 2 years old or ${Math.floor(
        goat / 40
      )} goats which are 3 years old`;
    }
    let remainingCattle = cattle;
    while (remainingCattle >= 30) {
      if (remainingCattle % 30 < 10) {
        Zakat30++;
        remainingCattle -= 30;
      } else {
        Zakat40++;
        remainingCattle -= 40;
      }
    }

    // Construct CattleZakat message
    if (Zakat40 > 0) {
      CattleZakat += `${Zakat40} (2 years old heifer calf) `;
    }
    if (Zakat30 > 0) {
      CattleZakat += `${Zakat30} (1 year old bull calf) `;
    }

    // Set the final Zakat message
    setCamelZakat(CamelZakat);
    setCattleZakat(CattleZakat);
    setGoatZakat(GoatZakat);
  };

  const CalculateCrops = () => {
    if (cropNumber < 1000) {
      setCropMessage("You don't reach nisab");
    } else {
      setCropMessage(
        `Your Zakat is ${cropNumber / 10 / 4} Kg if rain irrigates or ${
          cropNumber / 10
        } if you irrigate`
      );
    }
  };

  const CalculateGold = () => {
    let result = dollar / equiGold;
    let GoldZakat = (2.5 / 100) * dollar;
    if (result < 85) {
      setGoldMessage("You don't reach the nisab");
    } else {
      setGoldMessage(`Your zakat is $${GoldZakat}`);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white/10 shadow-lg rounded-lg flex flex-col mt-12 ">
      <h1 className="text-[#FFB22C] text-center mb-5 text-2xl">
        Which kind of asset you have
      </h1>

      <div className="flex flex-col justify-center items-center gap-3 ">
        <MagicButton
          title="Livestock"
          handleClick={() => {
            Livestock ? setLivestock(false) : setLivestock(true);
          }}
        />
        {Livestock && (
          <div className="w-full">
            <h2 className="text-center">How much of camel, cattle, goats</h2>
            <Options
              title="Camel"
              minimum={5}
              placeHolder="5"
              Value={camel}
              handleChange={handleInputChange(setCamel)}
            />
            <Options
              title="Cattle"
              minimum={30}
              placeHolder="30"
              Value={cattle}
              handleChange={handleInputChange(setCattle)}
            />
            <Options
              title="Goat(sheep)"
              minimum={40}
              placeHolder="40"
              Value={goat}
              handleChange={handleInputChange(setGoat)}
            />
            <button
              className="px-4 py-2 rounded-md border border-[#FFB22C]  bg-[#FFB22C] text-neutral-100 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md mx-auto my-4 "
              onClick={CalculateLivestock}
            >
              Calculate
            </button>
            {table && (
              <table className="w-full mt-4 border-collapse">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Camel Zakat</th>
                    <th className="border px-4 py-2">Cattle Zakat</th>
                    <th className="border px-4 py-2">Goat Zakat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-[#FFB22C]">
                    <td className="border px-4 py-2">{CamelZakat}</td>
                    <td className="border px-4 py-2">{CattleZakat}</td>
                    <td className="border px-4 py-2">{GoatZakat}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        )}

        <MagicButton
          title="Cash crops  "
          handleClick={() => {
            Crop ? setCrop(false) : setCrop(true);
          }}
        />
        {Crop && (
          <div className="w-full">
            <h2 className="text-center">How much of Crops</h2>
            <Options
              title="Kg"
              minimum={20}
              placeHolder="20"
              Value={cropNumber}
              handleChange={handleInputChange(setCropNumber)}
            />

            <button
              className="px-4 py-2 rounded-md border border-[#FFB22C]  bg-[#FFB22C] text-neutral-100 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md mx-auto my-4 "
              onClick={CalculateCrops}
            >
              Calculate
            </button>
            <div>{cropMessage}</div>
          </div>
        )}
        <MagicButton
          title="Gold or Currency"
          handleClick={() => {
            Gold ? setGold(false) : setGold(true);
          }}
        />
        {Gold && (
          <div className="w-full">
            <h2 className="text-center">How much in us dollar</h2>
            <Options
              title="$"
              minimum={1}
              placeHolder="50"
              Value={dollar}
              handleChange={handleInputChange(setDollar)}
            />
            <Options
              title="$"
              minimum={1}
              placeHolder="How much $ is 1kg of gold "
              Value={equiGold}
              handleChange={handleInputChange(setEquiGold)}
            />
            <button
              className="px-4 py-2 rounded-md border border-[#FFB22C]  bg-[#FFB22C] text-neutral-100 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md mx-auto my-4 "
              onClick={CalculateGold}
            >
              Calculate
            </button>
            <div>{GoldMessage}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
