
// import { getElementSelectedState } from "@/store/features/customVDom/customDomSelectors";
import KitStylesEmpty from "./Empty"
import KitStylesWidgets from "./widgets"
import { CWidgetContainer, CWidgetContent, CWidgetHeader } from "./widgets/_components/CWidget"


function KitStyles() {
  // const reduxActiveDomObject = getElementSelectedState()
  // const isElementSelected = reduxActiveDomObject.uuid !== ""

  return (
    <aside className="w-[255px] min-w-[255px] bg-[#0c0e11]">
      {/* {isElementSelected ? <KitStylesWidgets element={reduxActiveDomObject} /> : <KitStylesEmpty />} */}
      {/* <KitStylesEmpty /> */}

      <CWidgetContainer>
        <CWidgetHeader name="User" />
        <CWidgetContent>
          Selected User
          Custom User
          ----
          Type: Governament, Business, Person(verified?)
        </CWidgetContent>
      </CWidgetContainer>

      <CWidgetContainer>
        <CWidgetHeader name="Other" />
        <CWidgetContent>
          Grook?
          Time: 
            - 12 Hour Clock AM/PM
            - Military
        </CWidgetContent>
      </CWidgetContainer>

      <CWidgetContainer>
        <CWidgetHeader name="Content" />
        <CWidgetContent>
          Content
        </CWidgetContent>
      </CWidgetContainer>

      <CWidgetContainer>
        <CWidgetHeader name="Engagement" />
        <CWidgetContent>
          Engagement: Comments(automatic option?), Reshares, likes, analytics
        </CWidgetContent>
      </CWidgetContainer>

      <div>
      </div>

    </aside>
  )
}

export default KitStyles
