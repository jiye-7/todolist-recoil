import { useRecoilValue } from 'recoil';
import { todoListInfoState } from 'recoil/todoList_state';
import styled from 'styled-components';
import tw from 'twin.macro';

const TodoInfo = () => {
	const { totalNum, totalCompletedNum, totalUnCompletedNum, percentCompleted, allText } =
		useRecoilValue(todoListInfoState);

	const formattedPercentCompleted = Math.round(percentCompleted * 100);

	return (
		<Container>
			<ul>
				<li>Total items: {totalNum}</li>
				<li>Items completed: {totalCompletedNum}</li>
				<li>Items not completed: {totalUnCompletedNum}</li>
				<li>Percent completed: {formattedPercentCompleted}</li>
				<li>Text not completed: {allText}</li>
			</ul>
		</Container>
	);
};

export default TodoInfo;

const Container = styled.div`
	${tw`
    bg-blue-100
    p-10
  `}
`;
