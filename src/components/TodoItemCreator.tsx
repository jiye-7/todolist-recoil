import { useState, ChangeEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from 'recoil/todoList_state';

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
		<div>
			<input type="text" value={inputValue} onChange={onChange} />
			<button onClick={addItem}>새로운 항목 추가</button>
		</div>
	);
};

export default TodoItemCreator;
