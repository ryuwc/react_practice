import React, {useRef} from "react";
import {signUp} from "../util/api";

function SignUp() {
  const email = useRef();
  const nickname = useRef();
  const password1 = useRef();
  const password2 = useRef();

  const signUpHandler = (e) => {
    e.preventDefault();

    const signUpUserData = {
      email: email.current.value,
      nickname: nickname.current.value,
      password1: password1.current.value,
      password2: password2.current.value,
    };

    // email validation check
    let email_format = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!email_format.test(signUpUserData.email)) {
      alert("이메일 형식이 맞지 않습니다.");
      return;
    }

    // password validation check
    let password_format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    if (!password_format.test(signUpUserData.password1)) {
      alert("비밀번호 형식이 맞지 않습니다.");
      return;
    }

    signUp(signUpUserData);
  }

  return (
    <div
      id="page-container"
      className="flex flex-col w-full min-h-screen mx-auto"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
    >
      <main
        id="page-content"
        className="flex flex-col flex-auto max-w-full mt-10"
      >
        <div className="flex items-center justify-center w-full p-4 py-0 mx-auto min-h-fit max-w-10xl lg:px-8">
          <div className="w-full max-w-5xl lg:py-16">
            <div className="flex flex-col overflow-hidden shadow-sm md:flex-row rounded-xl">
              <section className="px-6 py-10 bg-white md:px-10 lg:p-16 md:w-1/2">
                <form className="space-y-6" onSubmit={signUpHandler}>
                  <div className="space-y-1">
                    <input
                      className="block w-full px-3 py-2 leading-6 placeholder-gray-400 border rounded shadow-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
                      type="email"
                      id="name"
                      name="name"
                      placeholder="이메일을 입력해주세요"
                      ref={email}
                    />
                  </div>
                  <div className="space-y-1">
                    <input
                      className="block w-full px-3 py-2 leading-6 placeholder-gray-400 border rounded shadow-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
                      type="text"
                      placeholder="닉네임을 입력해주세요"
                      ref={nickname}
                    />
                  </div>
                  <div className="space-y-1">
                    <input
                      className="block w-full px-3 py-2 leading-6 placeholder-gray-400 border rounded shadow-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="비밀번호를 입력해주세요"
                      ref={password1}
                    />
                  </div>
                  <div className="space-y-1">
                    <input
                      className="block w-full px-3 py-2 leading-6 placeholder-gray-400 border rounded shadow-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
                      type="password"
                      id="password_confirm"
                      name="password_confirm"
                      placeholder="비밀번호를 다시 입력해주세요"
                      ref={password2}
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-3 space-x-2 font-semibold leading-6 text-white bg-red-500 focus:outline-none hover:text-white hover:bg-red-600 active:bg-red-700"
                    >
                      Create Account
                    </button>
                    <div className="mt-4">
                      <a
                        href="src/pages/SignUp#"
                        className="inline-block text-sm font-medium text-blue-600 hover:text-blue-400"
                      >
                        Return to Sign In
                      </a>
                    </div>
                  </div>
                </form>
              </section>
              <div
                className="relative flex items-center px-6 py-10 bg-opacity-100 bg-cover md:px-10 lg:p-16 md:w-1/2"
                style={{
                  backgroundImage:
                    "url('http://res.heraldm.com/content/image/2017/10/25/20171025000602_0.jpg')",
                }}
              >
                <div className="absolute inset-0 bg-opacity-50"></div>
                <div className="relative sm:text-left">
                  <p className="mb-0 text-2xl font-semibold leading-relaxed text-white">
                    한번 잡수어봐
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
