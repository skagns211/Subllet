import react, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setAuthUserInfo, setKakaoAuthCode } from "../../actions";
// import { actionCreators as userActions } from "../redux/modules/user";
// import Spinner from "./Spinner";

const KakaoAuthHandler = () => {
  const state = useSelector((state) => state); //! state 사용 함수
  const dispatch = useDispatch();
  console.log(state.kakaoAuthCode);
  const navigate = useNavigate();
  // 인가코드
  let authCode = new URL(window.location.href).searchParams.get("code");
  console.log("authCode=", authCode);

  useEffect(() => {
    dispatch(setKakaoAuthCode(authCode));
    axios
      .post("/oauth/kakao", {
        authorizationCode: state.kakaoAuthCode,
      })
      .then((res) => {
        const authUser = {
          email: res.data.email,
          nickname: "",
          profile: res.data.profile,
          signup_method: "kakao",
        };
        dispatch(setAuthUserInfo(authUser));
        navigate("/auth_signup");
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return <div>로드중</div>;
};

export default KakaoAuthHandler;
