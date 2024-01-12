import {
	HorizontalRule,
  RangeControl
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import metadata from "../block.json";

export const TopCurveSettings = (props) => {
  return (
    <>
      <HorizontalRule />
      <RangeControl
        min={100}
        max={300}
        value={props.attributes.topWidth || 100}
        onChange={(newValue) => {
          props.setAttributes({
            topWidth: parseInt(newValue)
          });
        }}
        label={__('Width', metadata.textdomain)}
      />
      <RangeControl
        min={0}
        max={200}
        value={props.attributes.topHeight}
        onChange={(newValue) => {
          props.setAttributes({
            topHeight: parseInt(newValue)
          });
        }}
        label={__('Height', metadata.textdomain)}
      />
    </>
  );
}