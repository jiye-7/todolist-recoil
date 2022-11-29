/**
 * 필터 변경 컴포넌트
 */
import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from 'recoil/todoList_state';
import styled from 'styled-components';
import tw from 'twin.macro';

const TodoListFilters = () => {
	const [filter, setFilter] = useRecoilState(todoListFilterState);

	const updateFilter = (e: ChangeEvent<HTMLSelectElement>) => {
		setFilter(e.target.value);
	};

	return (
		<FilterContainer>
			<h1>선택한 필터에 따른 todo 목록 보기</h1>
			<select value={filter} onChange={updateFilter}>
				<option value="Show All">All</option>
				<option value="Show Completed">Completed</option>
				<option value="Show UnCompleted">UnCompleted</option>
			</select>
		</FilterContainer>
	);
};

export default TodoListFilters;

const FilterContainer = styled.div`
	${tw`
		flex
	`}
`;
