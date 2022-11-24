import { useRecoilState } from 'recoil';
import { todoListState } from 'recoil/todoList_state';

/**
 * todoItem을 표시하면서 작성한 입력 값을 변경 or 삭제 할 수 있는 컴포넌트
 */

interface IProps {
	item: todoItem;
}

const TodoItem = ({ item }: IProps) => {
	// todoListState읽고, item의 text, complete여부, 삭제를 하는 데 사용하는 setter 함수 사용
	const [todoList, setTodoList] = useRecoilState(todoListState);

	return (
		<div>
			<input type="text" value={item.text} />
			<input type="checkbox" checked={item.isComplete} />
		</div>
	);
};

export default TodoItem;
