import { useMemo } from "react";

const FrameComponent = ({
  blankLineWidth,
  blankLineAlignSelf,
  connectLabelFlex,
  connectLabelWidth,
  connectLabelFlexWrap,
  rectangleDivMinWidth,
  propMinWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: blankLineWidth,
      alignSelf: blankLineAlignSelf,
    };
  }, [blankLineWidth, blankLineAlignSelf]);

  const frameDiv1Style = useMemo(() => {
    return {
      flex: connectLabelFlex,
      width: connectLabelWidth,
      flexWrap: connectLabelFlexWrap,
    };
  }, [connectLabelFlex, connectLabelWidth, connectLabelFlexWrap]);

  const inputFieldFrameStyle = useMemo(() => {
    return {
      minWidth: rectangleDivMinWidth,
    };
  }, [rectangleDivMinWidth]);

  const connectLabelStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="w-[349px] flex flex-row items-start justify-start py-0 pr-0 pl-[13px] box-border max-w-full text-left text-base text-neutrals font-inter mq450:max-w-[calc(100%_-_13px)]"
      style={frameDivStyle}
    >
      <div
        className="flex-1 flex flex-row items-start justify-start gap-[0px_40px] max-w-full mq450:gap-[0px_40px]"
        style={frameDiv1Style}
      >
        <div className="h-[72px] flex-1 relative" style={inputFieldFrameStyle}>
          <div className="absolute top-[0px] left-[0px] rounded-4xs bg-main-clor w-[146px] h-[49px]" />
          <b className="absolute top-[15px] left-[37px] flex items-center z-[1]">
            <span className="[line-break:anywhere]">
              <p className="m-0">s'inscrire</p>
              <p className="m-0">&nbsp;</p>
            </span>
          </b>
        </div>
        <div
          className="h-[50px] flex-1 relative rounded-4xs box-border whitespace-nowrap text-main-clor border-[1px] border-solid border-main-clor"
          style={connectLabelStyle}
        >
          <div className="absolute top-[0px] left-[0px] rounded-4xs box-border w-full h-full hidden border-[1px] border-solid border-main-clor" />
          <b className="absolute right-[22px] bottom-[-23px] flex items-center z-[1]">
            <span>
              <p className="m-0">Se connecter</p>
              <p className="m-0">&nbsp;</p>
            </span>
          </b>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
