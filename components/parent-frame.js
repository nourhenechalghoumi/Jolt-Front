import FrameComponent from "./frame-component";

const ParentFrame = () => {
  return (
    <div className="absolute top-[78px] left-[104px] w-[513px] flex flex-col items-start justify-start gap-[15px_0px] max-w-full text-left text-21xl text-t font-poppins">
      <FrameComponent
        blankLineWidth="unset"
        blankLineAlignSelf="stretch"
        connectLabelFlex="unset"
        connectLabelWidth="336px"
        connectLabelFlexWrap="wrap"
        rectangleDivMinWidth="95px"
        propMinWidth="97px"
      />
      <h1 className="m-0 w-[287px] h-[120px] relative text-inherit font-semibold font-inherit inline-block box-border pr-5 mq450:text-5xl mq750:text-13xl">
        <p className="m-0">Se connecter</p>
      </h1>
      <div className="self-stretch flex flex-col items-start justify-start gap-[40px_0px] max-w-full text-sm text-gray-200">
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 box-border gap-[24px_0px] max-w-full z-[1] text-base">
          <div className="self-stretch h-14 rounded-t rounded-b-none flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex-1 rounded bg-neutrals box-border flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray-100">
              <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-row items-center justify-start py-2 pr-0 pl-4 box-border max-w-full">
                <div className="self-stretch flex-1 flex flex-col items-start justify-center relative max-w-full">
                  <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0">
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
          <div className="self-stretch rounded-t rounded-b-none flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch rounded bg-neutrals box-border flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray-100">
              <div className="self-stretch rounded-t rounded-b-none flex flex-row flex-wrap items-center justify-start py-1 pr-0 pl-4 box-border [row-gap:20px] max-w-full">
                <div className="flex-1 flex flex-col items-start justify-center relative min-w-[291px] min-h-[40px] max-w-full">
                  <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0">
                    <div className="relative">•••••••••••••••••••••••••</div>
                  </div>
                  <div className="!m-[0] absolute top-[-16px] left-[-4px] bg-neutrals flex flex-row items-center justify-start py-0 pr-px pl-1 whitespace-nowrap text-sm text-t">
                    <div className="relative">Mot de passe</div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-3">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0"
                    loading="eager"
                    alt=""
                    src="/eyeoff.svg"
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
          <div className="w-[532px] flex flex-row items-center justify-between gap-[20px] max-w-[104%] shrink-0 text-sm text-t mq450:flex-wrap">
            <div className="flex flex-row items-center justify-start gap-[0px_8px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/checkbox.svg"
              />
              <div className="relative font-medium">Remember me</div>
            </div>
            <div className="relative font-medium text-lightcoral text-right shrink-0">
              Mot de passe oublié
            </div>
          </div>
        </div>
        <div className="self-stretch h-12 flex flex-col items-start justify-start py-0 pr-px pl-0 box-border text-whitesmoke">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch flex-1 rounded bg-p flex flex-row items-center justify-center py-2 px-4">
              <div className="w-[78px] relative font-semibold inline-block box-border pl-5 pr-5">
                Login
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[0px_17px] text-darkslategray-200">
          <div className="h-[0.5px] flex-1 relative bg-darkslategray-300 min-w-[127px]" />
          <div className="relative">Or login with</div>
          <div className="h-[0.5px] flex-1 relative bg-darkslategray-300 min-w-[127px]" />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-px pl-0 gap-[0px_16px]">
          <div className="flex-1 rounded box-border flex flex-col items-center justify-center py-4 px-6 min-w-[120px] border-[1px] border-solid border-p">
            <img
              className="w-6 h-6 relative"
              alt=""
              src="/vector-and-text.svg"
            />
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
    </div>
  );
};

export default ParentFrame;
