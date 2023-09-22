import React, { PureComponent, useCallback, useState } from 'react';

type WithCallback = {callback: () => void}

class ExpensiveComponent extends PureComponent<WithCallback> {
	render() {
		let i = 0;
		while (i < 1000000000) {
			i++
		}
		const {callback} = this.props;
		return <button onClick={callback}>Expensive</button>
	}

	componentDidUpdate() {
		console.log('update')
	}
}

const Callback = () => {
	const [state, setState] = useState(0)
	const increment = () => setState(state + 1)
	// const callback = () => console.log('callback')
	//поки не зміняться залежності , функія буде та сама.
	const callback = useCallback(() => console.log('callback'), [])
	return (
		<>
			<ExpensiveComponent callback={callback}/>
			<button onClick={increment}>Incriment: {state}</button>
		</>
	);
};

export default Callback;