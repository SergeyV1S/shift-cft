import {
  cyrillicRegex,
  cyrillicWithDigitsRegex,
  latinRegex,
  latinWithDigitsRegex
} from "../constants";

export const validateAlphabet = (value: string) => {
  if (!value) return true;
  return cyrillicRegex.test(value) || latinRegex.test(value);
};

export const validateSameAlphabet = (values: string[]) => {
  const filteredValues = values.filter((value) => value.trim() !== "");

  if (filteredValues.length === 0) return true;

  const isCyrillic = filteredValues.every((value) => cyrillicRegex.test(value));
  const isLatin = filteredValues.every((value) => latinRegex.test(value));

  return isCyrillic || isLatin;
};

export const validateAlphabetWithDigits = (value: string) => {
  if (!value) return true;
  return cyrillicWithDigitsRegex.test(value) || latinWithDigitsRegex.test(value);
};

export const validateSameAlphabetAndDigits = (values: string[]) => {
  const filteredValues = values.filter((value) => value.trim() !== "");

  if (filteredValues.length === 0) return true;

  const isCyrillicWithDigits = filteredValues.every((value) => cyrillicWithDigitsRegex.test(value));
  const isLatinWithDigits = filteredValues.every((value) => latinWithDigitsRegex.test(value));

  return isCyrillicWithDigits || isLatinWithDigits;
};
