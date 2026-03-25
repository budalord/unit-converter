"use client";

import { useState, useEffect } from "react";

export interface UnitOption {
  label: string;
  value: string;
  factor?: number;
}

export interface ConverterWidgetProps {
  units: UnitOption[];
  converterType?: "factor" | "temperature";
  defaultFrom?: string;
  defaultTo?: string;
  inputPlaceholder?: string;
}

function convertByFactor(value: number, from: string, to: string, units: UnitOption[]): number {
  const fromUnit = units.find((u) => u.value === from);
  const toUnit = units.find((u) => u.value === to);
  if (!fromUnit?.factor || !toUnit?.factor) return 0;
  return (value * fromUnit.factor) / toUnit.factor;
}

function convertTemperature(value: number, from: string, to: string): number {
  if (from === to) return value;
  let celsius: number;
  switch (from) {
    case "f": celsius = (value - 32) * 5 / 9; break;
    case "k": celsius = value - 273.15; break;
    default: celsius = value;
  }
  switch (to) {
    case "f": return celsius * 9 / 5 + 32;
    case "k": return celsius + 273.15;
    default: return celsius;
  }
}

export default function ConverterWidget({
  units,
  converterType = "factor",
  defaultFrom,
  defaultTo,
  inputPlaceholder = "Enter value",
}: ConverterWidgetProps) {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState(defaultFrom ?? units[0]?.value ?? "");
  const [toUnit, setToUnit] = useState(defaultTo ?? units[1]?.value ?? "");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const num = parseFloat(inputValue);
    if (inputValue === "" || isNaN(num)) {
      setResult(null);
      setError(inputValue !== "" ? "Please enter a valid number." : "");
      return;
    }
    setError("");
    const converted =
      converterType === "temperature"
        ? convertTemperature(num, fromUnit, toUnit)
        : convertByFactor(num, fromUnit, toUnit, units);
    setResult(converted);
  }, [inputValue, fromUnit, toUnit, converterType, units]);

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const fromLabel = units.find((u) => u.value === fromUnit)?.label ?? fromUnit;
  const toLabel = units.find((u) => u.value === toUnit)?.label ?? toUnit;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm w-full max-w-lg mx-auto">
      <div className="flex flex-col gap-4">
        {/* Input row */}
        <div className="flex gap-3 items-end">
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">Value</label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={inputPlaceholder}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">From</label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {units.map((u) => (
                <option key={u.value} value={u.value}>{u.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Swap button */}
        <div className="flex justify-center">
          <button
            onClick={handleSwap}
            aria-label="Swap units"
            className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-500 hover:text-blue-600 transition-colors"
          >
            ⇅
          </button>
        </div>

        {/* To unit selector */}
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">To</label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {units.map((u) => (
              <option key={u.value} value={u.value}>{u.label}</option>
            ))}
          </select>
        </div>

        {/* Result */}
        <div className="mt-2 min-h-[56px] flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100 px-4 py-3">
          {error ? (
            <p className="text-sm text-red-500">{error}</p>
          ) : result !== null ? (
            <p className="text-xl font-semibold text-blue-700">
              {inputValue} {fromLabel} = {result.toLocaleString("en-US", { maximumFractionDigits: 8 })} {toLabel}
            </p>
          ) : (
            <p className="text-sm text-gray-400">Enter a value above to see the result.</p>
          )}
        </div>
      </div>
    </div>
  );
}
