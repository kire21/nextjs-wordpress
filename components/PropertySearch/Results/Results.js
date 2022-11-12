import { PropertyCard } from "./PropertyCard";

export const Results = ({ properties }) => {
  console.log("PROPERTIES: ");
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-3 gap-5 mb-10">
      {properties.map((property) => {
        return (
          <PropertyCard
            key={property.databaseId}
            property={property}
            image={property.featuredImage?.node?.sourceUrl}
          />
        );
      })}
    </div>
  );
};
