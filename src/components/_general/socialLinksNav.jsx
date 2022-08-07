import { Fragment } from "react";
import SocialLink from "./social-link";

function SocialLinkNav() {
  return (
    <Fragment >
      <nav className="socialLinksNav">
        <SocialLink
          link="/#"
          rrss="instagram"
        />
        <SocialLink
          link="/#"
          rrss="facebook"
        />
      </nav>
    </Fragment>
  )
}

export default SocialLinkNav