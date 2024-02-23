import ParentFrame from "../components/parent-frame";

const LoginEntreprise = () => {
  return (
    <div className="w-full h-[1024px] relative bg-neutrals overflow-hidden tracking-[normal] text-left text-base text-darkslategray-100 font-poppins mq450:h-auto mq450:min-h-[1024]">
      <div className="absolute top-[340px] left-[104px] whitespace-pre-wrap">
        Login to access your travelwise account
      </div>
      <ParentFrame />
      <img
        className="absolute top-[0px] left-[784px] w-[656px] h-[1044px] object-cover"
        loading="eager"
        alt=""
        src="/image-3@2x.png"
      />
    </div>
  );
};

export default LoginEntreprise;
