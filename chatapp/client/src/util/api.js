import axios from "axios";

export function signUp(data) {
  console.log(data);

  axios({
    method: "post",
    // 여기에 요청 보낼 url 입력
    url: "http://127.0.0.1:8000/accounts/signup/",
    data: { ...data },
  })
    .then((res) => {
      // 이거 확인 필요
      console.log(res);
      alert("회원가입이 완료되었습니다.");
    })
    .catch((err) => {
      console.log(err);
      alert("회원가입에 실패했습니다.");
    });
}
