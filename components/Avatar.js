import Image from "next/image";
import AvatarImg from "../public/avatar.png";
const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image src={AvatarImg} alt="AvatarImg" width={737} height={678}
      className="translate-z-0 w-full h-full"
    />
  </div>
};

export default Avatar;
