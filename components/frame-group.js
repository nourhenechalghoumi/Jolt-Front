import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Input } from "@chakra-ui/react";
import { Checkbox, FormControlLabel } from "@mui/material";

const FrameGroup = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[40px_0px] max-w-full text-left text-sm text-t font-poppins mq750:gap-[40px_0px]">
      <div className="flex flex-col items-start justify-start pt-0 pb-2 pr-5 pl-0 box-border gap-[16px_0px] max-w-full text-21xl">
        <h1 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-5xl mq750:text-13xl">
          s'inscrire
        </h1>
        <div className="relative text-base text-darkslategray-100">
          Préparons-nous pour que vous puissiez accéder à votre compte.
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px] max-w-full text-base text-gray-200">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[0px_24px] mq450:flex-wrap">
          <Form className="[border:none] bg-[transparent] h-14 flex-1 font-poppins text-base text-gray-200 min-w-[172px]">
            <Form.Control type="text" />
          </Form>
          <Form className="[border:none] bg-[transparent] h-14 flex-1 font-poppins text-base text-gray-200 min-w-[172px]">
            <Form.Control type="text" />
          </Form>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[0px_24px] mq450:flex-wrap">
          <Input className="bg-[transparent] h-14 flex-1 font-poppins text-base text-gray-200 min-w-[172px]" />
          <Input className="bg-[transparent] h-14 flex-1 font-poppins text-base text-gray-200 min-w-[172px]" />
        </div>
        <div className="self-stretch rounded-t rounded-b-none flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch rounded bg-neutrals box-border flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray-100">
            <div className="self-stretch rounded-t rounded-b-none flex flex-row items-center justify-start py-1 pr-0 pl-4 box-border max-w-full [row-gap:20px] mq450:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-center relative min-w-[318px] min-h-[40px] max-w-full">
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
        <div className="self-stretch rounded-t rounded-b-none flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch rounded bg-neutrals box-border flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray-100">
            <div className="self-stretch rounded-t rounded-b-none flex flex-row items-center justify-start py-1 pr-0 pl-4 box-border max-w-full [row-gap:20px] mq450:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-center relative min-w-[318px] min-h-[40px] max-w-full">
                <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0">
                  <div className="relative">•••••••••••••••••••••••••</div>
                </div>
                <div className="!m-[0] absolute top-[-16px] left-[-4px] bg-neutrals flex flex-row items-center justify-start py-0 pr-0 pl-1 whitespace-nowrap text-sm text-t">
                  <div className="relative">Confirmez le mot de passe</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-3">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="eager"
                  alt=""
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
        <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0 box-border gap-[0px_8px] max-w-full text-sm text-t">
          <FormControlLabel
            className="h-6 w-6 relative"
            label=""
            control={<Checkbox color="primary" />}
          />
          <div className="relative">
            <span className="font-medium">{`J'accepte toutes `}</span>
            <span className="font-port-lligat-slab">{`les conditions `}</span>
            <span className="font-medium">{`et `}</span>
            <span className="font-port-lligat-slab">
              politiques de confidentialité
            </span>
          </div>
        </div>
      </div>
      <div className="self-stretch h-12 flex flex-col items-center justify-center py-0 pr-5 pl-[25px] box-border text-whitesmoke">
        <div className="w-[204px] h-[37px] flex flex-col items-start justify-start">
          <div className="self-stretch h-12 rounded bg-main-clor flex flex-row items-center justify-center py-2 px-4 box-border whitespace-nowrap">
            <div className="relative font-semibold">Créer un compte</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[0px_16px] text-darkslategray-200 mq450:flex-wrap">
        <div className="h-[0.5px] flex-1 relative bg-darkslategray-300 min-w-[116px]" />
        <div className="relative">Ou inscrivez-vous avec</div>
        <div className="h-[0.5px] flex-1 relative bg-darkslategray-300 min-w-[116px]" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-0 gap-[0px_16px] mq450:flex-wrap">
        <div className="flex-1 rounded box-border flex flex-col items-center justify-center py-4 px-6 min-w-[130px] border-[1px] border-solid border-p">
          <img className="w-6 h-6 relative" alt="" />
        </div>
        <div className="flex-1 rounded box-border flex flex-col items-center justify-center py-4 px-6 min-w-[130px] border-[1px] border-solid border-p">
          <img className="w-6 h-6 relative overflow-hidden shrink-0" alt="" />
        </div>
        <div className="flex-1 rounded box-border flex flex-col items-center justify-center py-4 px-6 min-w-[130px] border-[1px] border-solid border-p">
          <img className="w-6 h-6 relative overflow-hidden shrink-0" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FrameGroup;
