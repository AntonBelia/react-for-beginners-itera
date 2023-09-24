import { createArray } from "./array";
import { random } from "./random";

const createHorizontalWarship = (length: number, maxSize: number) => {
	const maxX = maxSize - length;
	const maxY = maxSize;

	const headX = random(0, maxX);
	const headY = random(0, maxY);

	return createArray(length, (i) => {
		return {y: headY, x: headX + i}
	})
}

 const createVerticallWarship = (length: number, maxSize: number) => {
	const maxX = maxSize;
	const maxY = maxSize - length;

	const headX = random(0, maxX);
	const headY = random(0, maxY);

	return createArray(length, (i) => {
		return {y: headY + i, x: headX}
	})
}

type Point = { x: number; y: number };
export const createWarShip = (shipLength: number, maxSize: number): Point[] => {
	const position = random(0, 2) % 2 === 0 ? 'horizontal' : 'vertical';
	return position === 'horizontal'
		? createHorizontalWarship(shipLength, maxSize)
		: createVerticallWarship(shipLength, maxSize)
};

