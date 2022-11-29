const replaceItemAtIndex = (arr: todoItem[], index: number, newValue: todoItem) => {
	return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr: todoItem[], index: number) => {
	return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export { replaceItemAtIndex, removeItemAtIndex };
