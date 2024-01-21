import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../state/user/userRedux";

const useVerifyToken = () => {
  const [isTokenExpired, setIsTokenExpired] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [timerCount, setTimerCount] = useState(5);
  const user = useSelector((state) => state.user.currentUser);
  // eslint-disable-next-line no-unused-vars
  const expiredToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjY3ZGVlZTM3ZDE5OGZhNDc3NzAiLCJlbWFpbCI6ImNjYWRtaW5AbWFuZGlvbmUuY29tIiwiaWF0IjoxNjY5MDEzOTQ0LCJleHAiOjE2Njk2MTg3NDR9.xbQ1reAYJXU6wV9vC-Wsl_W8doFtRPpWmax2l8NoHPY";

  const dispatch = useDispatch();
  const checkIsTokenValid = async () => {
    setIsChecking(true);
    const decodedToken = JSON.parse(window.atob(user.token.split(".")[1]));
    if (decodedToken.exp * 1000 < Date.now()) {
      setIsTokenExpired(true);
      setIsChecking(false);
    } else setIsChecking(false);
  };

  useEffect(() => {
    if (user) checkIsTokenValid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let interval;

    if (isTokenExpired) {
      interval = setInterval(() => {
        setTimerCount((prevCounter) => prevCounter - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isTokenExpired]);

  useEffect(() => {
    if (timerCount === 0) {
      dispatch(logout());
      window.location.assign("/");
    }
  }, [timerCount, dispatch]);

  return { timerCount, isChecking, isTokenExpired };
};

export default useVerifyToken;
