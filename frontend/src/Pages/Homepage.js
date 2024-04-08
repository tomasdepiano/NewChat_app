import React, { useEffect } from "react";
import {
  Container,
  Text,
  Box,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login.js";
import SignUp from "../components/Authentication/SignUp.js";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <>
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg={"white"}
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text fontSize="4xl" fontFamily="work sans" color="black">
            Chat-App
          </Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList>
              <Tab width="50%">Login</Tab>
              <Tab width="50%">Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <SignUp />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
