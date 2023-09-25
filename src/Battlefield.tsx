import { CHECKED_SHIP, CHECKED_WATER, SHIP, WATER } from "./state/cellstate";

type BattelfildProps = {
	matrix: number[][];
	onFire: (y: number, x: number) => void
};

type CellProps = {
	value: number;
	handlerClick: (y: number, x: number) => void
	x: number;
	y: number;
};

interface cellStateMapProps {
	0: string,
	1: string,
	2: string,
	3: string
}

const cellStateMap: cellStateMapProps = {
	[WATER]: '',
	[SHIP]: '',
	[CHECKED_WATER]: '🌊',
	[CHECKED_SHIP]: '🔥'
}

const Cell = ({handlerClick, value, x, y}: CellProps) => {
	return <button className="cell" onClick={() => handlerClick(y, x)}>
		{cellStateMap[value as keyof cellStateMapProps]}
	</button>
}


export const Battlefield = ({matrix, onFire}: BattelfildProps) => {
	return <div >
		{matrix.map((line, lineNumber) =>
			<div className="line" key={lineNumber} >
				{line.map((v, i) => 
					(<Cell 
					key={`${lineNumber}${i}`} 
					value={v} 
					y={lineNumber} 
					x={i} 
					handlerClick={onFire}/>))}
			</div>)}
	</div>
  }