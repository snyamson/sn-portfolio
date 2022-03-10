/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import client from "../client";

const SkillItem = ({ skill }) => {
  const imageProps = useNextSanityImage(client, skill.skillIcon);

  return (
    <>
      <div className="col-4">
        <span className="image fit">
          <Image
            {...imageProps}
            layout="responsive"
            sizes="(max-width:200px)"
            alt={`${skill.title} icon`}
          />
        </span>
      </div>
    </>
  );
};

SkillItem.defaultProps = {
  skill: "rproj",
};

export default SkillItem;
