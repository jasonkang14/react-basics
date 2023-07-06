import useLogin from "hooks/useLogin";
import { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: handleLogin, isError } = useLogin();

  return (
    <Wrapper>
      <div>
        <Header>
          <Title>이메일로 로그인</Title>
          <CloseButton>
            <img
              alt="close"
              src={`${import.meta.env.VITE_STORAGE_ADDRESS}/ic-close-btn.svg`}
            />
          </CloseButton>
        </Header>
        <InputSection>
          <InputWrapper>
            <Label htmlFor="emailInput">이메일</Label>
            <Input
              id="emailInput"
              type="text"
              placeholder="이메일을 입력해주세요"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            {isError && <ErrorMessage>로그인 정보를 확인해주세요</ErrorMessage>}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="passwordInput">비밀번호</Label>
            <Input
              id="passwordInput"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            {isError && (
              <ErrorMessage data-testid="error-message">
                로그인 정보를 확인해주세요
              </ErrorMessage>
            )}
          </InputWrapper>
        </InputSection>
      </div>
      <LoginButton
        disabled={!email || !password}
        onClick={() => handleLogin({ username: email, password })}
      >
        로그인
      </LoginButton>
    </Wrapper>
  );
}

const ColumnSpaceBetween = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  ${ColumnSpaceBetween}
  height: 100%;
  background-color: #ffffff;
  padding: 0 16px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

const CloseButton = styled.button``;

const Title = styled.h1`
  color: #1d2745;
`;

const InputSection = styled.section`
  margin-top: 40px;
  div {
    &:last-child {
      margin-top: 24px;
    }
  }
`;

const Label = styled.label`
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
`;

const Input = styled.input`
  margin-bottom: 24px;

  padding-bottom: 8px;
  border-bottom: 1px solid #d6d7d9;
  color: #d6d7d9;

  &:focus {
    color: #1de5d4;
    border-bottom: 1px solid #1de5d4;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  background-color: ${(props) => (props.disabled ? "#f1f1f1" : "#1d2745")};
  color: ${(props) => (props.disabled ? "#bebebe" : "#ffffff")};
  margin-bottom: 24px;
`;

const ErrorMessage = styled.h6`
  font-size: 12px;
  line-height: 18px;
  color: #d01e1e;
  position: absolute;
  bottom: 0;
`;

const InputWrapper = styled.div`
  ${ColumnSpaceBetween}
`;
