import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import LeftBar from "./LeftBar";
import {
  Container,
  MainContent,
  ViewProfileWrapper,
  Table,
  Tr,
  Th,
  Td,
  Title,
  Thead,
  Tbody,
} from "../styles/Home.styles";
import { getAdmin } from "../actions/admin";

const ViewProfile = () => {
  const localStorageData = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const { style } = useSelector((state) => state.style);
  const { admin } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAdmin(localStorageData?.user?.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {localStorageData.user && (
        <>
          <LeftBar />
          <MainContent toggle={style.sidebar}>
            <Title>Your Information</Title>
            <ViewProfileWrapper>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Information</Th>
                  </Tr>
                </Thead>

                <Tbody>
                  <Tr>
                    <Td>ID</Td>
                    <Td>{admin?.adminId}</Td>
                  </Tr>
                  <Tr>
                    <Td>Name</Td>
                    <Td>{admin?.name}</Td>
                  </Tr>
                  <Tr>
                    <Td>Email</Td>
                    <Td>{admin?.email}</Td>
                  </Tr>
                  <Tr>
                    <Td>Phone</Td>
                    <Td>{admin?.phone}</Td>
                  </Tr>
                  <Tr>
                    <Td>Present Address</Td>
                    <Td>{admin?.presentAddress}</Td>
                  </Tr>
                  <Tr>
                    <Td>Permanent Address</Td>
                    <Td>{admin?.permanentAddress}</Td>
                  </Tr>
                  <Tr>
                    <Td>City</Td>
                    <Td>{admin?.city}</Td>
                  </Tr>
                  <Tr>
                    <Td>Country</Td>
                    <Td>{admin?.country}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </ViewProfileWrapper>
          </MainContent>
        </>
      )}
    </Container>
  );
};

export default ViewProfile;
