import {
	registerFormatType,
  applyFormat
} from "@wordpress/rich-text";
import { __ } from "@wordpress/i18n";
import { RichTextToolbarButton } from "@wordpress/block-editor";

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
            console.log({ value });
            onChange(
              applyFormat(
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
