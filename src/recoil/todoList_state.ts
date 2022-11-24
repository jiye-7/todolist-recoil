import { atom, selector } from 'recoil';

const todoListState = atom<todoItem[]>({
	key: 'TodoList',
	default: [],
});

const todoListFilterState = atom({
	key: 'todoListFilterState',
	default: 'Show All',
});

const filteredTodoListState = selector({
	key: 'filteredTodoListState',
	get: ({ get }) => {
		const filter = get(todoListFilterState);
		const list = get(todoListState);

		switch (filter) {
			case 'Show Completed':
				return list.filter((item: todoItem) => item.isComplete);
			case 'Show Uncompleted':
				return list.filter((item: todoItem) => !item.isComplete);
			default:
				return list;
		}
	},
});

const todoListInfoState = selector({
	key: 'todoListInfoState',
	get: ({ get }) => {
		const todoList = get(todoListState);
		const totalNum = todoList.length;
		const totalCompletedNum = todoList.filter((item) => item.isComplete).length;

		let allText = '';
		todoList.filter((item) => !item.isComplete).map((item) => (allText += ` / ${item.text}`));

		const totalUnCompletedNum = totalNum - totalCompletedNum;
		const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

		return {
			totalNum,
			totalCompletedNum,
			allText,
			totalUnCompletedNum,
			percentCompleted,
		};
	},
});

export { todoListState, todoListFilterState, filteredTodoListState, todoListInfoState };
