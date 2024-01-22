import {
	registerFormatType,
  applyFormat,
  removeFormat
} from "@wordpress/rich-text";
import { __ } from "@wordpress/i18n";
import {
  RichTextToolbarButton,
  ColorPalette
} from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import {
  Popover,
  PanelBody
} from "@wordpress/components";
import "./style.scss";

registerFormatType("imaszcurvy/low-highlight", {
	title: __("Low highlight", "imaszcurvy"),
	tagName: "span",
	className: "imaszcurvy-low-highlight",
  edit: ({onChange, value, contentRef}) => {
    const [showColors, setShowColors] = useState(false);
    return (
      <>
				<RichTextToolbarButton
					icon={<div>Test</div>}
					title={__("Low highlight", "imaszcurvy")}
					onClick={() => {
            setShowColors(true)
					}}
				/>
				{!!showColors && (
					<Popover
            anchor={contentRef?.current}
            onClose={() => {
              setShowColors(false);
            }}
          >
            <PanelBody>
              <ColorPalette
                onChange={(newValue) => {
									if (newValue) {
										onChange(
											applyFormat(value, {
                        type: "imaszcurvy/low-highlight"
                      })
										);
									} else {
										onChange(
											removeFormat(value, "imaszcurvy/low-highlight")
										);
									}
                }}
              />
            </PanelBody>
          </Popover>
        )}
      </>
    );
  }
})
