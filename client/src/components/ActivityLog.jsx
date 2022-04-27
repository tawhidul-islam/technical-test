import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, MainContent } from "../styles/Home.styles";
import {
  ViewWrapper,
  Table,
  Tr,
  Th,
  Td,
  Title,
  Thead,
  Tbody,
  PaginationContainer,
  PaginationWrapper,
  Movement,
  PageNumber,
  Input,
  Label,
} from "../styles/ActivityLog.styles";
import LeftBar from "../components/LeftBar";
import { getActivityLogs } from "../actions/admin";
import classes from "../styles/Teacher.module.css";

const ActivityLog = () => {
  const localStorageData = JSON.parse(localStorage.getItem("profile"));

  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState([]);
  const { activityLogs } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivityLogs(localStorageData?.user?.id, 10, 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPage([]);

    for (let i = 1; i < activityLogs.totalPage + 1; i++) {
      setPage((prev) => [...prev, i]);
    }
  }, [activityLogs.totalPage]);

  useEffect(() => {
    dispatch(
      getActivityLogs(
        localStorageData?.user?.id,
        pageSize,
        activityLogs?.currentPage
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSize]);

  const handlePagination = async (e, p) => {
    await dispatch(getActivityLogs(localStorageData?.user?.id, pageSize, p));
  };

  const handlePagePrev = async (e, page) => {
    await dispatch(
      getActivityLogs(localStorageData?.user?.id, pageSize, page - 1)
    );
  };

  const handlePageNext = async (e, page) => {
    await dispatch(
      getActivityLogs(localStorageData?.user?.id, pageSize, page + 1)
    );
  };

  return (
    <Container>
      {localStorageData.user && (
        <>
          <LeftBar />
          <MainContent>
            <Title>Activity Logs</Title>
            <ViewWrapper>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Description</Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {activityLogs?.logs?.length > 0
                    ? activityLogs.logs.map((a) => (
                        <Tr key={a._id}>
                          <Td>{a.name}</Td>
                          <Td>{a.description}</Td>
                        </Tr>
                      ))
                    : null}
                </Tbody>
              </Table>
            </ViewWrapper>

            <PaginationContainer>
              <PaginationWrapper>
                <Movement
                  disabled={activityLogs?.currentPage === 1 ? true : false}
                  onClick={(e) => handlePagePrev(e, activityLogs?.currentPage)}
                  className={
                    activityLogs?.currentPage === 1 ? classes.Movement : ""
                  }
                  type="submit"
                >
                  Prev
                </Movement>
              </PaginationWrapper>

              <PaginationWrapper>
                {page.map((p, i) => (
                  <PageNumber
                    key={i}
                    onClick={(e) => handlePagination(e, p)}
                    type="submit"
                    className={
                      activityLogs?.currentPage === p && classes.CurrentPage
                    }
                  >
                    {p}
                  </PageNumber>
                ))}
              </PaginationWrapper>

              <PaginationWrapper>
                <Movement
                  disabled={
                    activityLogs?.currentPage === activityLogs?.totalPage
                      ? true
                      : false
                  }
                  onClick={(e) => handlePageNext(e, activityLogs?.currentPage)}
                  className={
                    activityLogs?.currentPage === activityLogs?.totalPage
                      ? classes.Movement
                      : ""
                  }
                  type="submit"
                >
                  Next
                </Movement>
              </PaginationWrapper>

              <PaginationWrapper>
                <Label>Limit</Label>
                <Input
                  type="text"
                  name="pageSize"
                  value={pageSize}
                  onChange={(e) => setPageSize(e.target.value)}
                />
              </PaginationWrapper>
            </PaginationContainer>
          </MainContent>
        </>
      )}
    </Container>
  );
};

export default ActivityLog;
