'use client'

import XBadgeVerifiedBusiness from "./XVerifyBadges/Business"
import XBadgeVerifiedGov from "./XVerifyBadges/Gov"
import XBadgeVerifiedPerson from "./XVerifyBadges/Person"

interface IXDisplayNameProps {
  name?: string
  fontSize?: "large" | "default" | "profileHeader"
  verifyBlue: boolean
  verifyType: "Government" | "Business"
}

function XVerifiedBadge({ verifyBlue, type }) {
  // If type is present, render the badge corresponding to the type
  if (type) {
    let BadgeComponent;
    switch (type) {
      case 'Government':
        BadgeComponent = XBadgeVerifiedGov;
        break;
      case 'Business':
        BadgeComponent = XBadgeVerifiedBusiness;
        break;
      default:
        return null; // If type is invalid, render nothing
    }
    return (
      <div>
        <BadgeComponent />
      </div>
    );
  }

  // If verifyBlue is true and no type is provided, render the verified person badge
  if (verifyBlue) {
    return <XBadgeVerifiedPerson />;
  }

  // If neither condition is met, render nothing
  return null;
}


function XDisplayName({ name, verifyBlue, verifyType, fontSize = "default" }: IXDisplayNameProps) {

  const optionsFonts = {
    profileHeader: "text-[20px] leading-[24px] py-0.5",
    large: "text-[20px]",
    default: "text-[15px]"
  }

  return (
    <div className="flex items-center">
      <span className={`${optionsFonts[fontSize]} block font-chirp font-bold text-twitter-foreground`}>{name}</span>
      <XVerifiedBadge verifyBlue={verifyBlue} type={verifyType} />
    </div>
  )
}

export default XDisplayName
