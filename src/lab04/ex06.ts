import { getDigitsOfNumberIntoArray } from "./ex02";
import { getEvenNumbersOfArray } from "./ex04";

export function getSumOfEvenDigitsOfNumber(value: number): number {

    let sumOfEvenDigitsOfNumber: number = 0;
    let evenDigits: number[] = getEvenNumbersOfArray(getDigitsOfNumberIntoArray(value));
    let digit: number = 0;

    for (let i = 0; i != evenDigits.length; i++) {

        digit = evenDigits[i];
        sumOfEvenDigitsOfNumber += digit;
    }

    return sumOfEvenDigitsOfNumber;
}