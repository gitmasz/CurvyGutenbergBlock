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
		const lowHighlight = value.activeFormats?.find(
			(format) => format.type === "imaszcurvy/low-highlight"
		);
		const attributes = {
			...(lowHighlight?.attributes || {}),
			...(lowHighlight?.unregisteredAttributes || {}),
		};
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
                value={attributes?.["data-color"]}
                onChange={(newValue) => {
									if (newValue) {
										onChange(
											applyFormat(value, {
                        type: "imaszcurvy/low-highlight",
												attributes: {
                          "data-color": newValue,
													style: `background-image: linear-gradient(to right, ${newValue}, ${newValue})`,
												}
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
