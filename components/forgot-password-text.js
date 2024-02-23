const ForgotPasswordText = () => {
  return (
    <div className="w-[512px] flex flex-col items-start justify-start gap-[48px_0px] max-w-full text-left text-base text-darkslategray-100 font-poppins mq675:gap-[48px_0px]">
      <div className="self-stretch relative">
        Ne vous inquiétez pas, cela nous arrive à tous. Entrez votre email
        ci-dessous pour récupérer votre mot de passe
      </div>
      <div className="self-stretch h-[136px] flex flex-col items-start justify-start gap-[32px_0px] max-w-full text-gray-200 mq675:gap-[32px_0px]">
        <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex-1 rounded bg-neutrals box-border flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray-100">
            <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-row items-center justify-start py-2 pr-0 pl-4 box-border max-w-full">
              <div className="self-stretch flex-1 flex flex-col items-start justify-center relative max-w-full">
                <div className="flex flex-row items-center justify-start">
                  <div className="relative whitespace-nowrap">
                    john.doe@gmail.com
                  </div>
                </div>
                <div className="!m-[0] absolute top-[-16px] left-[-4px] bg-neutrals flex flex-row items-center justify-start py-0 px-1 text-sm">
                  <div className="relative">Email</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[210px] hidden flex-row items-start justify-start pt-1 px-4 pb-0 box-border text-sm font-montserrat-regular-14">
            <div className="h-[17px] flex-1 relative inline-block">
              Supporting text
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start text-sm text-whitesmoke">
          <div className="self-stretch flex-1 rounded bg-p flex flex-row items-center justify-center py-2 px-4">
            <div className="relative font-semibold">Soumettre</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[0px_16px] text-sm text-darkslategray-200 mq675:flex-wrap">
        <div className="h-[0.5px] w-[152px] relative bg-darkslategray-300" />
        <div className="relative">Ou connectez-vous avec</div>
        <div className="h-[0.5px] w-[152px] relative bg-darkslategray-300" />
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0px_16px]">
        <div className="flex-1 rounded box-border flex flex-col items-center justify-center py-4 px-6 min-w-[120px] border-[1px] border-solid border-p">
          <img className="w-6 h-6 relative" alt="" src="/vector-and-text.svg" />
        </div>
        <div className="flex-1 rounded box-border flex flex-col items-center justify-center py-4 px-6 min-w-[120px] border-[1px] border-solid border-p">
          <img
            className="w-6 h-6 relative overflow-hidden shrink-0"
            alt=""
            src="/flatcoloriconsgoogle.svg"
          />
        </div>
        <div className="flex-1 rounded box-border flex flex-col items-center justify-center py-4 px-6 min-w-[120px] border-[1px] border-solid border-p">
          <img
            className="w-6 h-6 relative overflow-hidden shrink-0"
            alt=""
            src="/antdesignapplefilled.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordText;
