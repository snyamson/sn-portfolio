import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { PortableText } from "@portabletext/react";
import client, { ptComponents } from "../client";

const EducationItem = ({ item }) => {
  const imageProps = useNextSanityImage(client, item?.institutionImage);

  return (
    <>
      <div>
        <p>
          <h2>{item?.title}</h2>
          <span className="image left" style={{ paddingRight: 20 }}>
            <Image
              {...imageProps}
              alt={`${item?.title}'s logo`}
              height={515}
              width={576}
            />
          </span>
          <div>
            <PortableText value={item?.body} components={ptComponents} />
          </div>
          <br />
          {item?.certType !== "none" && (
            <ul style={{ marginTop: -20 }} className="actions fit small">
              <li>
                <a
                  href={`${item?.docFileUrl}?dl=${item?.certType}-Solomon-Nyamson.pdf`}
                  className={`button fit small solid ${
                    item?.docFileUrl == null ? "disabled" : null
                  }`}
                >
                  {item?.certType}
                </a>
              </li>
            </ul>
          )}
        </p>
      </div>
      <hr />
    </>
  );
};

EducationItem.defaultProps = {
  title: "KNUST - Economics (2017 - 2021)",
  btnDesc: "certificate",
  logo: "knust",
};

export default EducationItem;
