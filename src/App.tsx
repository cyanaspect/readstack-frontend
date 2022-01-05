import {
  Avatar,
  Box,
  ChakraProvider,
  Container,
  Divider,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Homepage from "./pages";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import RegisterPage from "./pages/Register";
import Settings from "./pages/Settings";
import theme from "./theme";

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

function App() {
  const navigate = useNavigate();
  const queryClient = new QueryClient();

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Container maxW="container.md" margin="auto">
          <Box
            padding={8}
            margin={6}
            marginTop={10}
            background="brand.50"
            borderRadius={12}
            border="1px"
            borderStyle="solid"
            borderColor="brand.200"
          >
            <Flex
              mb={4}
              width="full"
              justifyContent="space-between"
              alignItems="center"
            >
              <Heading size="2xl" color="brand.600" fontWeight="700">
                👋🏻 Readstack
              </Heading>

              <Menu placement="bottom-end">
                <MenuButton>
                  <Avatar width={10} height={10} bg="brand.500" name="K" />
                </MenuButton>

                <MenuList>
                  <MenuItem>My Account</MenuItem>
                  <MenuItem
                    onClick={() => {
                      localStorage.removeItem("token");
                      localStorage.removeItem("username");
                      navigate("../login");
                    }}
                  >
                    Log out
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Divider mb={2}></Divider>
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/register" element={<RegisterPage />}></Route>
              <Route path="/:username" element={<ProfilePage />}></Route>
              <Route path="/settings" element={<Settings />}></Route>
            </Routes>
          </Box>
        </Container>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default AppWrapper;
