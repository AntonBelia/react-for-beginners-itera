import React, { useState } from 'react';

const useCounter = () => {
	const [value, setValue] = useState(0)
	const increment = () => setValue(value + 1)
	return {
		value,
		increment
	}
}

const Custom = () => {
	// const [value, increment] = useState(0)
	const {value, increment} = useCounter()
	return (
		<div>
			<button onClick={increment} >Counted {value} times</button>
		</div>
	);
};

export default Custom;