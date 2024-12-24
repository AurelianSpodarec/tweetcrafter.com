import XBadgeVerifiedBusiness from "./XVerifyBadges/Business"
import XBadgeVerifiedGov from "./XVerifyBadges/Gov"
import XBadgeVerifiedPerson from "./XVerifyBadges/Person"

interface IXDisplayNameProps {
  name?: string
  fontSize?: "large" | "default"
}

function XDisplayName({ name, fontSize = "default" }: IXDisplayNameProps) {

  const optionsFonts = {
    large: "text-[20px]",
    default: "text-[15px]"
  }

  return (
    <div className="flex items-center">
      <span className={`${optionsFonts[fontSize]} font-chirp font-bold text-twitter-foreground`}>SpaceX</span>

      <XBadgeVerifiedBusiness />
      {/* <XBadgeVerifiedGov /> */}
      {/* <XBadgeVerifiedPerson /> */}
    </div>
  )
}

export default XDisplayName
