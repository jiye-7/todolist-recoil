import styled from 'styled-components';
import tw from 'twin.macro';
import TodoList from 'components/TodoList';

function App() {
	return (
		<Container className="App">
			Recoil Simple TodoList
			<TodoList />
		</Container>
	);
}

export default App;

const Container = styled.div`
	${tw`
		m-10
		bg-gray-300
	`}
`;
