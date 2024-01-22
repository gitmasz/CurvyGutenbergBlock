import {
	registerFormatType,
  toggleFormat
} from "@wordpress/rich-text";
import { __ } from "@wordpress/i18n";
import { RichTextToolbarButton } from "@wordpress/block-editor";
import "./style.scss";

registerFormatType("imaszcurvy/low-highlight", {
	title: __("Low highlight", "imaszcurvy"),
	tagName: "span",
	className: "imaszcurvy-low-highlight",
  edit: ({onChange, value}) => {
    return (
      <>
				<RichTextToolbarButton
					icon={<div>Test</div>}
					title={__("Low highlight", "imaszcurvy")}
					onClick={() => {
            onChange(
              toggleFormat(
                value,
                {
                  type: "imaszcurvy/low-highlight",
                }
              )
            );
					}}
				/>
      </>
    );
  }
})
