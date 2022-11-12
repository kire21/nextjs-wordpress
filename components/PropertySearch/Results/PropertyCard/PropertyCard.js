import Image from "next/image";
import Link from "next/link";
import numeral from "numeral";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBathtub,
  faBed,
  faDog,
  faParking,
} from "@fortawesome/free-solid-svg-icons";

export const PropertyCard = ({ property, image }) => {
  const { title, uri: destination } = property;
  const { bedrooms, bathrooms, price, hasParking, petFriendly } =
    property.propertyFeatures;

  return (
    <Link href={destination} passHref>
      <a className="border-2 border-slate-300 p-5 block bg-slate-100 hover:bg-slate-200">
        <div className="flex w-full">
          {image && (
            <Image
              src={image}
              height="200px"
              width="300px"
              objectFit="cover"
              alt=""
            />
          )}
        </div>
        <div className="mt-3 text-lg font-bold">{title}</div>
        <div className="text-lg">${numeral(price).format("0,0")}</div>
        <div className="flex justify-between text-sm mt-3">
          <div>
            <FontAwesomeIcon icon={faBathtub} />
            <span className="pl-2">{bathrooms} bathrooms</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBed} />
            <span className="pl-2">{bedrooms} bedrooms</span>
          </div>
        </div>
        {(!!hasParking || !!petFriendly) && (
          <div className="flex justify-between text-sm mt-3">
            <div>
              {!!hasParking && (
                <>
                  <FontAwesomeIcon icon={faParking} />
                  <span className="pl-2">Parking avilable</span>
                </>
              )}
            </div>
            <div>
              {!!petFriendly && (
                <>
                  <FontAwesomeIcon icon={faDog} />
                  <span className="pl-2">Pets friendly</span>
                </>
              )}
            </div>
          </div>
        )}
      </a>
    </Link>
  );
};
