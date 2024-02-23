import ForgotPasswordText from "../components/forgot-password-text";

const ForgotPassword = () => {
  return (
    <div className="w-full relative bg-neutrals overflow-hidden flex flex-col items-start justify-start pt-[204px] px-[104px] pb-[299px] box-border gap-[16px_0px] tracking-[normal] text-left text-sm text-t font-poppins mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[52px] mq750:pr-[52px] mq750:box-border">
      <div className="flex flex-row items-end justify-start gap-[0px_4px]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="eager"
          alt=""
          src="/chevron-back.svg"
        />
        <div className="relative font-medium">
          retour à la page de connexion
        </div>
      </div>
      <h1 className="m-0 w-[512px] relative text-21xl font-semibold font-inherit inline-block max-w-full mq450:text-5xl mq750:text-13xl">
        Mot de passe oublié?
      </h1>
      <ForgotPasswordText />
    </div>
  );
};

export default ForgotPassword;
