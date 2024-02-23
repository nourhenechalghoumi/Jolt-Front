const Button = () => {
  return (
    <div className="w-[512px] flex flex-col items-start justify-start gap-[40px_0px] max-w-full text-left text-sm text-whitesmoke font-poppins mq675:gap-[40px_0px]">
      <div className="self-stretch h-12 flex flex-col items-start justify-start">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch flex-1 rounded bg-p flex flex-row items-center justify-center py-2 px-4">
            <div className="relative font-semibold">Login</div>
          </div>
        </div>
      </div>
      <div className="w-[499px] flex flex-row flex-wrap items-center justify-start gap-[0px_16px] max-w-full text-darkslategray-200">
        <div className="h-[0.5px] flex-1 relative bg-darkslategray-300 min-w-[123px]" />
        <div className="relative">Or login with</div>
        <div className="h-[0.5px] flex-1 relative bg-darkslategray-300 min-w-[123px]" />
      </div>
      <div className="w-[498px] flex flex-row flex-wrap items-start justify-start py-0 pr-px pl-0 box-border gap-[0px_16px] max-w-full">
        <div className="flex-1 rounded box-border flex flex-col items-center justify-center py-4 px-6 min-w-[116px] border-[1px] border-solid border-p">
          <img
            className="w-6 h-6 relative"
            alt=""
            src="/ant-design-apple-filled.svg"
          />
        </div>
        <div className="flex-1 rounded box-border flex flex-col items-center justify-center py-4 px-6 min-w-[116px] border-[1px] border-solid border-p">
          <img
            className="w-6 h-6 relative overflow-hidden shrink-0"
            alt=""
            src="/flatcoloriconsgoogle.svg"
          />
        </div>
        <div className="flex-1 rounded box-border flex flex-col items-center justify-center py-4 px-6 min-w-[116px] border-[1px] border-solid border-p">
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

export default Button;
