import FrameComponent from "../components/frame-component";
import FrameGroup from "../components/frame-group";

const SignUpEntreprise = () => {
  return (
    <div className="w-full relative bg-neutrals overflow-hidden flex flex-row items-center justify-start gap-[0px_97px] tracking-[normal] text-center text-[36px] text-neutrals font-poppins mq450:gap-[0px_97px] mq750:gap-[0px_97px] mq1250:flex-wrap">
      <div className="h-[162px] w-[337px] relative font-semibold hidden shrink-0 max-w-full mq450:text-[22px] mq750:text-[29px]">
        Make your travel whishlist, we’ll do the rest
      </div>
      <div className="h-[1024px] w-[656px] flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border min-w-[656px] max-w-full mq750:min-w-full mq1250:flex-1">
        <div className="mt-[-5px] self-stretch flex-1 flex flex-row items-start justify-start py-[29px] px-8 box-border bg-cover bg-no-repeat bg-[top] max-w-full">
          <img
            className="h-[1029px] w-[656px] relative object-cover hidden max-w-full"
            alt=""
          />
          <img
            className="h-[101px] w-[215px] relative z-[1]"
            loading="eager"
            alt=""
          />
        </div>
      </div>
      <div className="w-[553px] flex flex-col items-start justify-start pt-0 px-0 pb-[15px] box-border min-w-[553px] max-w-full mq750:min-w-full mq1250:flex-1">
        <div className="self-stretch flex flex-col items-center justify-start gap-[38px_0px] max-w-full mq750:gap-[38px_0px]">
          <FrameComponent />
          <FrameGroup />
        </div>
      </div>
    </div>
  );
};

export default SignUpEntreprise;
