import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from 'recoil/todoList_state';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';
import TodoListFilters from './TodoListFilters';
import styled from 'styled-components';
import tw from 'twin.macro';
import TodoInfo from './TodoInfo';

const TodoList = () => {
	const todoList = useRecoilValue(filteredTodoListState);

	return (
		<>
			<TodoInfo />
			<TodoCreateFilterContainer>
				<TodoItemCreator />
				<TodoListFilters />
			</TodoCreateFilterContainer>
			{todoList?.map((todoItem: todoItem) => (
				<TodoItem item={todoItem} key={todoItem.id} />
			))}
		</>
	);
};

export default TodoList;

const TodoCreateFilterContainer = styled.div`
	${tw`
		flex
		[&>:nth-child(1)]:mr-10
		`}
`;
