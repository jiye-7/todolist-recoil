import { useState, ChangeEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from 'recoil/todoList_state';
import styled from 'styled-components';
import tw from 'twin.macro';

/**
 * 이전 todoList를 기반으로, 새 todo 목록을 추가하는 업데이트 컴포넌트
 */

let id = 0;
const getId = () => id++;

const TodoItemCreator = () => {
	const [inputValue, setInputValue] = useState<string>('');
	const setTodoList = useSetRecoilState(todoListState);

	const addItem = () => {
		setTodoList((oldTodoList) => [
			...oldTodoList,
			{
				id: getId(),
				text: inputValue,
				isComplete: false,
			},
		]);
		setInputValue('');
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	return (
		<Container>
			<Input type="text" value={inputValue} onChange={onChange} />
			<AddButton onClick={addItem}>새로운 항목 추가</AddButton>
		</Container>
	);
};

export default TodoItemCreator;

const Container = styled.div`
	${tw`
		mb-4
	`}
`;

const Input = styled.input`
	${tw`
		w-56
		h-10
		rounded-lg
		mr-4
		bg-slate-50
	`}
`;

const AddButton = styled.button`
	${tw`
		h-10
		p-2
		rounded-lg
		bg-gradient-to-r
		from-sky-200
		to-indigo-300
	`}
`;
