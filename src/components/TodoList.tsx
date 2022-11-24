import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from 'recoil/todoList_state';
import TodoItem from './TodoItem';

const TodoList = () => {
	const todoList = useRecoilValue(filteredTodoListState);

	return (
		<>
			<div>
				{todoList?.map((todoItem: todoItem) => (
					<TodoItem item={todoItem} key={todoItem.id} />
				))}
			</div>
		</>
	);
};

export default TodoList;
