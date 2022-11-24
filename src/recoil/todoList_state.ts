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

export { todoListState, todoListFilterState, filteredTodoListState };
