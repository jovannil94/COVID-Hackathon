import React, { useState, useEffect } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterFeed = ({ handle }) => {
  const [twitterName, setTwitterName] = useState(handle);

  useEffect(() => {
    if (handle !== undefined) {
      setTwitterName(handle.slice(1));
    }
  }, [handle]);

  return (
    <div>

      {twitterName !== undefined ? (
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName={twitterName}
          key={twitterName}
          noHeader
          options={{ height: 600, width: 600 }}
        />
      ) : null}
    </div>
  );
};

export default TwitterFeed;
