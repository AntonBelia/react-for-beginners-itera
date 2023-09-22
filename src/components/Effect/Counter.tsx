import React, {FC, useState, useEffect} from 'react';

type CounterProps = { counter: number; onCount: () => void };

const Counter:FC<CounterProps> = ({counter, onCount}) => {

	// використовуємо юзефект без другого аргументу, він спрацює коли компонент змонтується 
	// і кожен раз коли компонент апдейтиться(весь)
	useEffect(() => {  
		console.log('Counter did change', counter);
	})

	// він спрацює коли компонент змонтується 
	// і кожен раз коли його умови залежності зміняться
	useEffect(() => {
		console.log('Counter did mount or onCount changed');
	}, [onCount])

	// він спрацює коли компонент змонтується 
	// в друге перед тим як ми видалимо компонент з дом дерева
	useEffect(() => {
		return () => {
			console.log('Count will be removed')
		}
	}, [])

	return (
		<div>
			<button onClick={onCount}>Clicked {counter} times</button>
		</div>
	);
};

const AppUseEffect = () => {
	const [counter, setCounter] = useState(0)
	const [counterExists, toggleCounter] = useState(true)
	const hideCounter = () => toggleCounter(false)
	const resetCounter = () => setCounter(0)
	const increment = () => setCounter(counter + 1)
	return (
		<>
			{counterExists && (<Counter key={1} counter={counter} onCount={increment}/>)}
			<div>
				<button onClick={resetCounter} >Reset counter</button>
				<button onClick={hideCounter} >Remove counter</button>
			</div>
		</>
	)
}
export default AppUseEffect