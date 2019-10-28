export const initialState = {
	displayValue: '0',
	operator: null,
	previousValue: null
};

export const handleNumber = (value, state) => {
	if (state.displayValue === '0') {
		return { displayValue: `${value}` };
	}

	return {
		displayValue: `${state.displayValue}${value}`
	};
};

export const handleEqual = (state) => {
	const { displayValue, previousValue, operator } = state,
		resetState = {
			operator: null,
			previousValue: null
		};

	if (operator === '/') {
		return {
			displayValue: previousValue / displayValue,
			...resetState
		};
	}

	if (operator === '*') {
		return {
			displayValue: previousValue * displayValue,
			...resetState
		};
	}

	if (operator === '+') {
		return {
			displayValue: previousValue + displayValue,
			...resetState
		};
	}

	if (operator === '-') {
		return {
			displayValue: previousValue - displayValue,
			...resetState
		};
	}

	return state;
};

export const calculator = (type, value, state) => {
	switch (type) {
	case 'number':
		return handleNumber(value, state);
	case 'operator':
		return {
			operator: value,
			previousValue: state.displayValue,
			displayValue: '0'
		};
	case 'equal':
		return handleEqual(state);
	case 'clear':
		return initialState;
	case 'posneg':
		return {
			displayValue: `${parseFloat(state.displayValue) * -1}`
		};
	case 'percentage':
		return {
			displayValue: `${parseFloat(state.displayValue) * 0.01}`
		};
	default:
		return state;
	}
};
