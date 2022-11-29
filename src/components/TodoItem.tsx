import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from 'recoil/todoList_state';
import { removeItemAtIndex, replaceItemAtIndex } from 'utils/todoItemUtil';
import styled from 'styled-components';
import tw from 'twin.macro';

/**
 * todoItem을 표시하면서 작성한 입력 값을 변경 or 삭제 할 수 있는 컴포넌트
 */

interface IProps {
	item: todoItem;
}

const TodoItem = ({ item }: IProps) => {
	// todoListState읽고, item의 text, complete여부, 삭제를 하는 데 사용하는 setter 함수 사용
	const [todoList, setTodoList] = useRecoilState(todoListState);
	const index = todoList.findIndex((listItem) => listItem === item);

	const editItemText = (e: ChangeEvent<HTMLInputElement>) => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			text: e.target.value,
		});

		setTodoList(newList);
	};

	const deleteItem = () => {
		const newList = removeItemAtIndex(todoList, index);

		setTodoList(newList);
	};

	const toggleItemCompletion = () => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			isComplete: !item.isComplete,
		});

		setTodoList(newList);
	};

	return (
		<Container>
			<input type="text" value={item.text} onChange={editItemText} />
			<CompletionCheck type="checkbox" checked={item.isComplete} onClick={toggleItemCompletion} />
			<DeleteButton onClick={deleteItem}>지우기</DeleteButton>
		</Container>
	);
};

export default TodoItem;

const Container = styled.div`
	${tw`
		flex
		items-center
		mb-2
	`}
`;

const CompletionCheck = styled.input`
	${tw`
		w-6
		h-6
		mx-3
	`}
`;

const DeleteButton = styled.button`
	${tw`
		bg-slate-100
		rounded-md
		p-2
	`}
`;
