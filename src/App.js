import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Grid from "./components/Grid";
import { GET_TICKETS_URL } from "./constants";
import { loadGrid, mapUsersByUserId } from "./utils";
import Loader from "./components/Loader";
import "./App.css";

function App() {
  const [tickets, setTickets] = useState([]);
  const [userInfo, setuserInfo] = useState({});
  const [gd, setgd] = useState({});
  const [grpg, setgrpg] = useState("status");
  const [ordg, setordg] = useState("priority");
  const [ldg, setldg] = useState(true);

  const onSetgrpg = useCallback((value) => {
    setldg(true);
    setgrpg(value);
    saveSettings({ grpg: value });
  }, []);

  const onSetordg = useCallback((value) => {
    setldg(true);
    setordg(value);
    saveSettings({ ordg: value });
  }, []);

  const saveSettings = useCallback((data) => {
    for (let key in data) localStorage.setItem(key, data[key]);
  }, []);

  const reloadSettings = useCallback(() => {
    setgrpg(localStorage.getItem("grpg") || "status");
    setordg(localStorage.getItem("ordg") || "priority");
  }, []);

  useEffect(() => {
    reloadSettings();
    fetch(GET_TICKETS_URL)
      .then((resp) => resp.json())
      .then((res) => {
        const { tickets, users } = res;
        setTickets(tickets);
        setuserInfo(mapUsersByUserId(users));
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    if (!tickets.length) return;
    setgd(loadGrid(tickets, grpg, ordg));
    setldg(false);
  }, [grpg, ordg, tickets]);

  return (
    <div className="App">
      <Header grpg={grpg} setgrpg={onSetgrpg} ordg={ordg} setordg={onSetordg} />
      {ldg ? <Loader /> : <Grid gd={gd} grpg={grpg} userIdToData={userInfo} />}
    </div>
  );
}

export default App;
