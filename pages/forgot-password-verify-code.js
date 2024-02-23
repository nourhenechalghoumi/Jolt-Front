const ForgotPasswordVerifyCode = () => {
  return (
    <div className="w-full relative bg-neutrals overflow-hidden flex flex-row items-center justify-start gap-[0px_121px] tracking-[normal] text-left text-sm text-t font-poppins mq750:gap-[0px_121px] mq1225:flex-wrap mq1225:gap-[0px_121px] mq450:gap-[0px_121px]">
      <div className="h-2.5 w-[50px] !m-[0] absolute right-[-267px] bottom-[86px] flex flex-row items-start justify-start gap-[0px_8px]">
        <div className="h-full w-8 absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-8xs bg-mediumaquamarine" />
        <div className="h-full w-2.5 absolute !m-[0] top-[0px] right-[0px] bottom-[0px] rounded-[50%] bg-neutrals" />
      </div>
      <div className="h-[1024px] w-[646px] flex flex-col items-start justify-end py-0 px-0 box-border min-w-[646px] max-w-full mq750:min-w-full mq1225:flex-1">
        <div className="mt-[-12px] self-stretch h-[1036px] flex flex-row items-start justify-start pt-[31px] px-9 pb-[904px] box-border bg-cover bg-no-repeat bg-[top] max-w-full mq1050:pt-5 mq1050:pb-[588px] mq1050:box-border mq450:pb-[382px] mq450:box-border">
          <img
            className="h-[1036px] w-[654px] relative object-cover hidden max-w-full"
            alt=""
            src="/image-5@2x.png"
          />
          <img
            className="h-[89px] w-[175px] relative z-[1]"
            loading="eager"
            alt=""
            src="/logo.svg"
          />
        </div>
      </div>
      <div className="w-[512px] flex flex-col items-start justify-start min-w-[512px] min-h-[532px] max-w-full mq750:min-w-full mq1225:flex-1 mq1225:min-h-[auto]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[48px_0px] max-w-full mq750:gap-[48px_0px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px]">
            <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0 gap-[0px_4px]">
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
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px] text-21xl">
              <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq750:text-13xl mq450:text-5xl">
                Vérifier le code
              </h1>
              <div className="self-stretch relative text-base text-darkslategray-100">
                Un code d'authentification a été envoyé à votre email.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px_0px] max-w-full text-base text-gray-200 mq750:gap-[32px_0px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px] max-w-full">
              <div className="w-[512px] rounded-t rounded-b-none overflow-x-auto flex flex-col items-start justify-start max-w-full mt-[-8px] pt-2">
                <div className="w-[512px] rounded bg-neutrals box-border flex flex-col items-start justify-start border-[1px] border-solid border-gray-100">
                  <div className="self-stretch rounded-t rounded-b-none flex flex-row items-center justify-start py-1 pr-0 pl-4 box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-center relative min-w-[291px] min-h-[40px] max-w-full">
                      <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0">
                        <div className="relative">7789BM6X</div>
                      </div>
                      <div className="!m-[0] absolute top-[-16px] left-[-4px] bg-neutrals flex flex-row items-center justify-start py-0 pr-px pl-1 whitespace-nowrap text-sm text-t">
                        <div className="relative">Entrez le code</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        loading="eager"
                        alt=""
                        src="/eye.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[210px] hidden flex-row items-start justify-start pt-1 px-4 pb-0 box-border text-sm font-montserrat-regular-14">
                  <div className="h-[17px] flex-1 relative inline-block">
                    Supporting text
                  </div>
                </div>
              </div>
              <div className="self-stretch relative text-sm text-t">
                <span className="font-medium">Je n'ai pas reçu de code?</span>
                <span className="font-semibold text-lightcoral"> Renvoyer</span>
              </div>
            </div>
            <div className="self-stretch h-12 flex flex-col items-start justify-start text-sm text-whitesmoke">
              <div className="self-stretch flex-1 rounded bg-p flex flex-row items-center justify-center py-2 px-4">
                <div className="w-[92px] relative font-semibold inline-block box-border pl-5 pr-5">
                  Vérifier
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordVerifyCode;
