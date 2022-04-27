import styled from "styled-components";

export const TeacherWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  overflow-x: scroll;
`;

export const Title = styled.span`
  font-size: 30px;
  color: var(--main-color);
  text-align: center;
  margin-top: 0px;
  margin-bottom: 10px;
  display: block;
`;

export const ViewTeacherWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  margin: 0 auto;
`;

export const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #eee;
  }
`;

export const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  font-size: 12px;
`;

export const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  margin-bottom: 10px;
  font-size: 11px;
`;

export const PaginationContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Movement = styled.button`
  cursor: pointer;
  border: 1px solid var(--main-color);
  padding: 3px;
  border-radius: 6px;
  transition: all 0.4s ease;
  margin-right: 20px;

  &:hover {
    background-color: var(--main-color);
    color: white;
  }
`;

export const PageNumber = styled.button`
  cursor: pointer;
  border: 1px solid var(--main-color);
  padding: 3px;
  border-radius: 50%;
  transition: all 0.4s ease;
  width: 25px;
  height: 25px;
  text-align: center;
  margin-right: 20px;

  &:hover {
    background-color: var(--main-color);
    color: white;
  }
`;

export const Input = styled.input`
  width: 30px;
  height: 20px;
  border: 1px solid var(--main-color);
  text-align: center;
`;

export const Label = styled.label`
  margin-right: 10px;
  margin-left: 10px;
`;

export const Search = styled.input`
  border: 1px solid var(--main-color);
  padding: 3px 10px;
  margin-bottom: 20px;
  margin-left: 2.5%;
`;

export const PopupMessage = styled.div`
  width: 200px;
  height: 150px;
  border: 1px solid var(--main-color);
  margin: 0 auto;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
`;

export const P = styled.p`
  display: block;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
`;
