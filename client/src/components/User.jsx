import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteOutline, Block, Check } from "@material-ui/icons";
import FlashMessage from "react-flash-message";
import Popup from "reactjs-popup";
import moment from "moment";

import { Container, MainContent } from "../styles/Home.styles";
import {
  TeacherWrapper,
  ViewTeacherWrapper,
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
  Search,
  PopupMessage,
  P,
  ButtonWrapper,
  Button,
} from "../styles/User.styles";
import LeftBar from "../components/LeftBar";
import { getUsers, deleteUser } from "../actions/user";
import classes from "../styles/Teacher.module.css";

const User = () => {
  const localStorageData = JSON.parse(localStorage.getItem("profile"));
  const { style } = useSelector((state) => state.style);
  const { users, isGetUsersError, isGetUsersSuccess } = useSelector(
    (state) => state.user
  );
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(10, 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPage([]);

    for (let i = 1; i < users.totalPage + 1; i++) {
      setPage((prev) => [...prev, i]);
    }
  }, [users.totalPage]);

  useEffect(() => {
    dispatch(getUsers(pageSize, users?.currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSize]);

  // search debounce
  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 300);
    };
  };

  const handleSearchText = async (value) => {
    await dispatch(getUsers(10, 1, value));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const optimizedFn = useCallback(debounce(handleSearchText), []);

  const handlePagination = async (e, p) => {
    await dispatch(getUsers(pageSize, p));
  };

  const handlePagePrev = async (e, page) => {
    await dispatch(getUsers(pageSize, page - 1));
  };

  const handlePageNext = async (e, page) => {
    await dispatch(getUsers(pageSize, page + 1));
  };

  const handleDeleteUser = async (e, id, adminId) => {
    await dispatch(deleteUser(id, adminId));

    setTimeout(async () => {
      await dispatch(getUsers(pageSize, users?.currentPage));
    }, 3000);
  };

  return (
    <Container>
      {localStorageData.user && (
        <>
          <LeftBar />
          <MainContent toggle={style.sidebar}>
            <Title>All Users Information</Title>
            <Search
              name="searchText"
              onChange={(e) => {
                optimizedFn(e.target.value);
              }}
              placeholder="Search user"
            />
            <TeacherWrapper>
              <ViewTeacherWrapper>
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Card ID</Th>
                      <Th>Name</Th>
                      <Th>Phone</Th>
                      <Th>Email</Th>
                      <Th>Date of Birth</Th>
                      <Th>Address</Th>
                      <Th>Gender</Th>
                      <Th>createdBy</Th>
                      <Th>createdTime</Th>
                      <Th>updatedBy</Th>
                      <Th>updatedTime</Th>
                      <Th>Action</Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    {users?.users?.length
                      ? users.users.map((t) => (
                          <Tr key={t._id}>
                            <Td>{t.cardId}</Td>
                            <Td>{t.name}</Td>
                            <Td>{t.phone}</Td>
                            <Td>{t.email}</Td>
                            <Td>{moment(t.dob).format("MMMM d, YYYY")}</Td>
                            <Td>{t.address}</Td>
                            <Td>{t.gender}</Td>
                            <Td>{t.createdBy?.name}</Td>
                            <Td>
                              {moment(t.createdTime).format("MMMM d, YYYY")}
                            </Td>
                            <Td>{t.updatedBy?.name}</Td>
                            <Td>
                              {moment(t.updatedTime).format("MMMM d, YYYY")}
                            </Td>

                            <Td
                              style={{
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "none",
                              }}
                            >
                              {/* delete teacher */}
                              <Popup
                                trigger={
                                  <DeleteOutline style={{ color: "red" }} />
                                }
                                position="left center"
                              >
                                <PopupMessage>
                                  <P
                                    style={{
                                      textAlign: "center",
                                      color: "#666",
                                    }}
                                  >
                                    Are you sure you want to delete this
                                    teacher?
                                  </P>
                                  <ButtonWrapper>
                                    <Button
                                      style={{
                                        border: "1px solid red",
                                        color: "red",
                                      }}
                                      onClick={(e) =>
                                        handleDeleteUser(
                                          e,
                                          t._id,
                                          localStorageData?.user?.id
                                        )
                                      }
                                    >
                                      Confirm
                                    </Button>
                                  </ButtonWrapper>
                                </PopupMessage>
                              </Popup>
                            </Td>
                          </Tr>
                        ))
                      : null}
                  </Tbody>
                </Table>
              </ViewTeacherWrapper>
            </TeacherWrapper>
            <PaginationContainer>
              <PaginationWrapper>
                <Movement
                  disabled={users?.currentPage === 1 ? true : false}
                  onClick={(e) => handlePagePrev(e, users?.currentPage)}
                  className={users?.currentPage === 1 ? classes.Movement : ""}
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
                    className={users?.currentPage === p && classes.CurrentPage}
                  >
                    {p}
                  </PageNumber>
                ))}
              </PaginationWrapper>

              <PaginationWrapper>
                <Movement
                  disabled={
                    users?.currentPage === users?.totalPage ? true : false
                  }
                  onClick={(e) => handlePageNext(e, users?.currentPage)}
                  className={
                    users?.currentPage === users?.totalPage
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

export default User;
