import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { env } from "../config/config";
import { logout } from "../state/user/userRedux";

const useSessionTimeout = () => {
  const warnTimeout = useRef();
  const logoutTimeout = useRef();
  const [logoutCountDown, setLogoutCountDown] = useState(30);
  const [activity, setActivity] = useState(null);
  const [isWarningTimeOut, setIsWarningTimeOut] = useState(false);
  const [continueSession, setContinueSession] = useState(null);
  const dispatch = useDispatch();
  const events = [
    "load",
    "mousemove",
    "mousedown",
    "click",
    "scroll",
    "keypress",
  ];
  const time = env === "dev" ? 60 * 60 * 1000 : 5 * 60 * 1000;
  const warningTime = time;
  const signoutTime = 30 * 1000;

  const resetTimeout = (e) => {
    setActivity(e);
    setIsWarningTimeOut(false);
    setContinueSession(false);
    if (warnTimeout.current) {
      clearTimeout(warnTimeout.current);
    }
    if (logoutTimeout.current) {
      clearTimeout(logoutTimeout.current);
    }
    startTimeOut();
  };

  const warn = () => {
    setIsWarningTimeOut(true);
    logoutTimeout.current = setTimeout(logoutUser, signoutTime);
    setActivity(false);
  };

  const logoutUser = () => {
    dispatch(logout());
    window.location.assign("/");
  };

  const startTimeOut = () => {
    warnTimeout.current = setTimeout(warn, warningTime);
  };

  const addEventListeners = () => {
    for (const event of events) {
      window.addEventListener(event, resetTimeout);
    }
    startTimeOut();
  };
  const removeEventListeners = () => {
    for (const event of events) {
      window.removeEventListener(event, resetTimeout);
    }
  };

  useEffect(() => {
    if (isWarningTimeOut === false || continueSession === true) {
      addEventListeners();
    }
    return () => {
      removeEventListeners();
      clearTimeout(warnTimeout.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWarningTimeOut, continueSession]);

  useEffect(() => {
    let interval;
    if (continueSession === true) {
      clearInterval(interval);
      setLogoutCountDown(30);
    }
    if (activity) {
      clearInterval(interval);
      setLogoutCountDown(30);
    }
    if (isWarningTimeOut === true) {
      interval = setInterval(() => {
        setLogoutCountDown((prevCounter) => prevCounter - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [activity, isWarningTimeOut, continueSession]);

  return {
    logoutCountDown,
    isWarningTimeOut,
    setContinueSession,
    setIsWarningTimeOut,
  };
};

export default useSessionTimeout;
