import styled from 'styled-components';
import { useState } from 'react';

const TodoList = () => {
  const [value, setValue] = useState('');
  const [lists, setLists] = useState<string[]>([]);

  const onClick = (value: string) => {
    value && setLists([...lists, value]);
    setValue('');
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <PageWrapper>
      <h1>TODO List</h1>
      <InputBox onSubmit={onSubmit}>
        <Input
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <SubmitBtn type="submit" onClick={() => onClick(value)}>
          +
        </SubmitBtn>
      </InputBox>
      {lists.length !== 0 && (
        <ListBox>
          {[...lists].reverse().map((list, index) => (
            <List key={index}>{list}</List>
          ))}
        </ListBox>
      )}
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InputBox = styled.form`
  width: 300px;
  height: 60px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 5px dashed #82c1ff;
  border-radius: 8px;
`;
const ListBox = styled.div`
  border-radius: 8px;
  margin-top: 20px;
  width: 260px;
  max-height: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: scroll;
  background-color: #b9dcff;
`;
const List = styled.div`
  padding: 10px 20px;
  min-height: 40px;
  border: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 40px;
  border-radius: 8px;
  background-color: white;
`;
const Input = styled.input`
  margin: 0;
  padding: 0 10px;
  width: 70%;
  height: 70%;
  border: none;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;
const SubmitBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: #82c1ff;
  border: 0;
  border-radius: 8px;
  color: white;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;

export default TodoList;
