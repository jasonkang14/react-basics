import useLogin from "../hooks/useLogin";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: handleLogin, isError, isSuccess } = useLogin();

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess]);

  return (
    <Wrapper>
      <div>
        <Header>
          <Title>이메일로 로그인</Title>
          <CloseButton>
            <img
              alt="close"
              src={`https://kr.object.ncloudstorage.com/icons/ic-close-btn.svg`}
            />
          </CloseButton>
        </Header>
        <InputSection>
          <InputWrapper>
            <Label htmlFor="emailInput">이메일</Label>
            <Input
              id="emailInput"
              data-cy="emailInput"
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
              data-cy="passwordInput"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </InputWrapper>
          {isError && (
            <ErrorMessage data-testid="error-message">
              로그인 정보를 확인해주세요
            </ErrorMessage>
          )}
        </InputSection>
      </div>
      <LoginButton
        data-cy="loginButton"
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
  background-color: var(--white);
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
  color: var(--primary);
`;

const InputSection = styled.section`
  margin-top: 40px;
  position: relative;
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
  color: var(--white);
`;

const Input = styled.input`
  margin-bottom: 24px;

  padding-bottom: 8px;
  border-bottom: 1px solid var(--mono-300);
  color: var(--mono-300);

  &:focus {
    color: var(--secondary);
    border-bottom: 1px solid var(--secondary);
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.disabled ? "var(--mono-100)" : "var(--primary)"};
  color: ${(props) => (props.disabled ? "var(--mono-200)" : "var(--white)")};
  margin-bottom: 24px;
`;

const ErrorMessage = styled.h6`
  font-size: 12px;
  line-height: 18px;
  color: var(--error);
  position: absolute;
  bottom: 0;
`;

const InputWrapper = styled.div`
  ${ColumnSpaceBetween}
`;
