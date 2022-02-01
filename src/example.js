import React from "react";
import { Button, Popup } from "@fluentui/react-northstar";
import { MoreIcon } from "@fluentui/react-icons-northstar";

const PopupExample = () => (
  <>
    <Popup
      trigger={<Button icon={<MoreIcon />} title="Show popup" />}
      content="Leaking popup!"
    />
    <Popup
      onRestoreFocus={() => {}}
      trigger={<Button icon={<MoreIcon />} title="Show popup" />}
      content="Fixed popup!"
    />
  </>
);

export default PopupExample;
