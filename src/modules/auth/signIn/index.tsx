import { useTranslation } from "react-i18next";

import { Card, CardContent, CardHeader, CardTitle } from "@shared/ui/card";

import { PhoneForm } from "./_components/PhoneForm";
import { SignInForm } from "./_components/SignInForm";
import { TimerWithLink } from "./_components/TimerWithLink";
import { useSignIn } from "./model/useSignIn";

const SignInPage = () => {
  const {
    onOtpSubmit,
    signIn,
    state: { isLoading, retryDelay, phoneNumber }
  } = useSignIn();
  const { t } = useTranslation();

  return (
    <Card className='m-auto w-full max-w-sm'>
      <CardHeader className='text-center border border-slate-200'>
        <CardTitle className='text-2xl'>{t("sign-in.title")}</CardTitle>
      </CardHeader>
      <CardContent className='mt-5'>
        {retryDelay ? (
          <SignInForm isLoading={isLoading} onSubmit={signIn} t={t} />
        ) : (
          <PhoneForm onSubmit={onOtpSubmit} isLoading={isLoading} t={t} />
        )}
      </CardContent>
      {retryDelay && phoneNumber && <TimerWithLink onSubmit={onOtpSubmit} />}
    </Card>
  );
};

export default SignInPage;
