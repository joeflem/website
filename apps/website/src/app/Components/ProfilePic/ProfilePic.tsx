import Image from "next/image";
import styles from "./ProfilePic.module.css";

const ProfilePic = () => (
  <figure className={styles.profilePic}>
    <Image
      alt="Joe Fleming"
      src="https://avatars.githubusercontent.com/u/45002285?v=4"
      width={32}
      height={32}
    />
  </figure>
);

export default ProfilePic;
