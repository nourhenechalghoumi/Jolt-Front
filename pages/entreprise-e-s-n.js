import Button from "../components/button";

const EntrepriseESN = () => {
  return (
    <div className="w-full relative bg-neutrals overflow-hidden flex flex-col items-center justify-start pt-32 pb-[204px] pr-[38px] pl-5 box-border gap-[93px_0px] tracking-[normal] text-left text-base text-neutrals font-inter mq450:gap-[93px_0px] mq675:gap-[93px_0px]">
      <div className="w-[498px] flex flex-row items-start justify-start py-0 pr-7 pl-0 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[21px_0px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[15px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[18px_0px] max-w-full">
              <div className="w-[403px] flex flex-row items-start justify-start py-0 px-[26px] box-border max-w-full">
                <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[0px_55px] max-w-full mq450:gap-[0px_55px]">
                  <div className="h-[72px] flex-1 relative min-w-[95px]">
                    <div className="absolute top-[0px] left-[0px] rounded-4xs bg-main-clor w-[146px] h-[49px]" />
                    <b className="absolute top-[15px] left-[37px] flex items-center z-[1]">
                      <span className="[line-break:anywhere]">
                        <p className="m-0">s'inscrire</p>
                        <p className="m-0">&nbsp;</p>
                      </span>
                    </b>
                  </div>
                  <div className="flex flex-row items-end justify-end pt-4 pb-0 pr-[17px] pl-[23px] relative text-main-clor">
                    <div className="h-[50px] w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] rounded-4xs box-border border-[1px] border-solid border-main-clor" />
                    <b className="h-[57px] relative flex items-center z-[1]">
                      <span>
                        <p className="m-0">Se connecter</p>
                        <p className="m-0">&nbsp;</p>
                      </span>
                    </b>
                  </div>
                </div>
              </div>
              <h1 className="m-0 self-stretch h-28 relative text-21xl font-semibold font-poppins text-t inline-block shrink-0 mq450:text-5xl mq750:text-13xl">
                <p className="m-0">inscrivez-vous comme  </p>
              </h1>
            </div>
          </div>
          <div className="w-[203px] flex flex-row items-start justify-start relative">
            <div className="h-[233px] w-[748px] absolute !m-[0] right-[-567px] bottom-[-117px] z-[1]">
              <div className="absolute top-[-51px] left-[-23px] rounded-8xs bg-snow shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] w-[209px] h-[164px]" />
              <div className="absolute top-[-51px] left-[261px] rounded-8xs bg-snow shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] w-[209px] h-[164px]" />
              <div className="absolute top-[19px] left-[301px] w-6 h-6 overflow-hidden hidden" />
              <img
                className="absolute top-[-67px] left-[249px] w-[221px] h-[186px] object-cover z-[2]"
                loading="eager"
                alt=""
                src="/image-7@2x.png"
              />
            </div>
            <img
              className="h-[170px] flex-1 relative max-w-full overflow-hidden object-cover z-[3]"
              loading="eager"
              alt=""
              src="/image-8@2x.png"
            />
          </div>
        </div>
      </div>
      <Button />
    </div>
  );
};

export default EntrepriseESN;
