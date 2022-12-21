import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <h3></h3>
      </div>
      <div>
        <SocialIcon
          url="skukhniy@gmail.com"
          network="email"
          bgColor="transparent"
          fgColor="rgb(127, 127, 127)"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/stanislav-kukhniy-5b12a1138/"
          fgColor="rgb(0, 127, 177)"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/skukhniy/"
          fgColor="rgb(233, 68, 117)"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/SKukhniy"
          fgColor="rgb(0, 172, 237)"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://github.com/skukhniy"
          fgColor="rgb(36, 41, 46)"
          bgColor="transparent"
        />
      </div>
      <div className="github">&copy; Stanislav Kukhniy</div>
    </div>
  );
}
