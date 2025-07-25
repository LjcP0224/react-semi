import { Form, Button, Lottie, Toast } from "@douyinfe/semi-ui";
import { IconUserCircle, IconLock } from "@douyinfe/semi-icons";
import { login } from "@/api/user";
import { getCaptchaImg } from "@/api/system";
import type { LoginParams } from "@/api/user";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { setToken } from "@/utils/auth";

import animationData from "@/assets/lottie/PepeStickerMusic.json";
import { useTranslation } from "react-i18next";
import { useMount } from "ahooks";

import Locale from "@/locale/locale";

const LoginForm = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [formValue, setFormValue] = useState<LoginParams>({
    username: "",
    password: "",
    code: "",
    uuid: "",
  });

  const [captchaImage, setCaptchaImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values: LoginParams) => {
    setLoading(true);
    login({
      ...values,
      uuid: formValue.uuid,
    })
      .then((res) => {
        const { code, message, result } = res.data;
        if (code == 200) {
          setToken(result.token);
          navigate("/");
        } else {
          Toast.error(message);
        }
      })
      .catch(() => {
        getCaptcha();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getCaptcha = async () => {
    try {
      const res = await getCaptchaImg();
      const { result } = res.data;
      setCaptchaImage(`data:image/png;base64,${result.img}`);
      setFormValue((prev) => ({
        ...prev,
        uuid: result.uuid,
      }));
    } catch {
      Toast.error("获取验证码失败");
    }
  };

  useMount(() => {
    getCaptcha();
  });
  const css: React.CSSProperties = {
    backgroundImage: `url(${import.meta.env.VITE_LOGIN_BG})`,
  };

  return (
    <div className="semi-always-dark w-full h-full min-h-screen flex justify-center items-center bg-[var(--semi-color-bg-0)] text-[var(--semi-color-text-0)]">
      <div
        className={`absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center overflow-hidden bg-center bg-cover`}
        style={css}
      ></div>
      <div className="flex justify-center items-center z-10 relative backdrop-blur-xs bg-[var(--semi-color-bg-1)]/60  border border-[var(--semi-color-border)]  shadow-lg">
        <div className="w-96 h-96">
          <Lottie
            params={{
              animationData: animationData,
            }}
            width="100%"
            height="100%"
          />
        </div>
        <div className="p-6">
          <h1 className="text-center font-bold text-3xl">{t("login.title")}</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              prefix={<IconUserCircle />}
              noLabel
              placeholder={t("login.username")}
              initValue=""
              field="username"
              rules={[{ required: true, message: t("login.invalidUsername") }]}
            ></Form.Input>
            <Form.Input
              prefix={<IconLock />}
              noLabel
              placeholder={t("login.password")}
              field="password"
              initValue=""
              mode="password"
              rules={[{ required: true, message: t("login.invalidPassword") }]}
            ></Form.Input>

            <div className="flex gap-2 items-center">
              <Form.Input
                noLabel
                placeholder={t("login.captchaPlaceholder")}
                field="code"
                initValue=""
              ></Form.Input>

              <div
                className="cursor-pointer rounded border"
                onClick={getCaptcha}
              >
                <img
                  className="h-[30px] w-[100px] object-cover"
                  src={captchaImage}
                />
              </div>
            </div>

            <Button
              block
              htmlType="submit"
              loading={loading} // 显示加载状态
              disabled={loading} // 在加载时禁用按钮
            >
              {t("login.loginButton")}
            </Button>
          </Form>
        </div>

        <div className=" absolute top-3 right-3">
          <Locale />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
