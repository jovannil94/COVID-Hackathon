import React from "react";
import "../../CSS/TestingSitesIndex.css";

const TestingSitesIndex = ({ sites }) => {
  return (
    <div>
      <ul>
        {sites.map((site) => (
          <div className="locationsDivMain" key={site.id}>
            <li>
              <h3>Location: {site.title}</h3>
            </li>
            <li
              onClick={() =>
                window.open(
                  `https://www.google.com/maps/dir/?api=1&destination=${site.address.houseNumber}+${site.address.street}+${site.address.city},+${site.address.state}+${site.address.postalCode}&travelmode=driving`
                )
              }
            >
              <b>Address:</b> {site.address.houseNumber} {site.address.street},{" "}
              {site.address.city}, {site.address.state}{" "}
              {site.address.postalCode}, {site.address.countryName}
            </li>
            <li onClick={() => window.open(`${site.contacts[0].www[0].value}`)}>
              <b>Website:</b> {site.contacts[0].www[0].value}
            </li>
            <li>
              <b>Phone:</b> {site.contacts[0].phone[0].value}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TestingSitesIndex;
