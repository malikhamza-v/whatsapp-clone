import { useEffect, useState } from "react";
import "./App.css";
import Chatbox from "./Components/Chat Box/Chatbox";
import Sidebar from "./Components/SideBar/Sidebar";
import Pusher from "pusher-js";
import axios from "../src/Module/axios.js";
import Login from "./Components/Login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import auth from "./firebase";
import { useStateValue } from "./Module/StateContext";

function App() {
  const [messages, setMessages] = useState([]);
  const [received, setReceived] = useState(false);
  // const [login, setLogin] = useState(false);
  // const [{}, dispatch] = useStateValue();
  const [{ user }, dispatch] = useStateValue();
  const history = useNavigate();

  useEffect(() => {
    axios.get("/messages/sync").then((response) => setMessages(response.data));
  }, []);

  useEffect(() => {
    const pusher = new Pusher("6902739c3c7b51c45582", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessage) {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  useEffect(() => {
    console.log("Let's Debug");
    auth.onAuthStateChanged((authUser) => {
      console.log("This is the email from firebase", authUser?.email);
      if (authUser?.email === "hamza@gmail.com") {
        console.log("you are hamza");
        setReceived(true);
      } else {
        setReceived(false);
        console.log("The received is set to false");
      }
      // if (authUser) {
      //the user is logged in
      dispatch({
        type: "set_user",
        user: authUser,
      });
      console.log("This is the email from context", user?.email);
      // }
    });
  }, []);

  return (
    <div className="app">
      {user ? (
        <div>
          <div className="app__body">
            <Sidebar />
            <Chatbox messages={messages} received={received} />
          </div>
          <div className="app__body__button">
            <button
              className="button"
              onClick={() => {
                auth.signOut();
                console.log("The user is completly logged out");
                dispatch({
                  type: "set_user",
                  user: null,
                });
                console.log(
                  "this is the email from context after signout",
                  user?.email
                );
                history("/");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="app__body">
          <Login />
        </div>
      )}
      {/* <Routes>
          <Route
            path="/"
            element={
              <div className="app__body">
                <Login />
              </div>
            }
          />
          <Route
            path="/home-page"
            element={
              <div>
                <div className="app__body">
                  <Sidebar />
                  <Chatbox messages={messages} received={received} />
                </div>
                <div className="app__body__button">
                  <Link to="/">
                    <button className="button" onClick={() => auth.signOut()}>
                      Logout
                    </button>
                  </Link>
                </div>
              </div>
            }
          />
        </Routes> */}
    </div>
  );
}

export default App;
