import xLogo from "@/public/x.png";
import youtubeLogo from "@/public/youtube.png";
import instagramLogo from "@/public/instagram.png";
import telegramLogo from "@/public/telegram.png";
import logoNav from "@/public/logo.png";
import Container from "../ui/container";
import Image from "next/image";


const Footer = () => {
  return (
    <div className="mt-8 border-t bg-gray-800">
      <Container>
        <div className="flex flex-col items-center justify-between gap-y-8 py-8 text-white md:flex-row">
          <div className="flex items-center gap-x-3">
            <Image  className="invert" src={logoNav} alt="site-logo" width={40} height={40} />
            <h2 className="text-3xl font-bold">نکست بلاگ</h2>
          </div>
          <p className="w-96 text-balance text-center text-gray-300 md:text-right">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
