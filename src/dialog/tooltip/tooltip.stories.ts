import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs/angular";

import { InformationFilled16Module } from "@carbon/icons-angular/lib/information--filled/16";
import { DialogModule, PlaceholderModule } from "../../";

storiesOf("Tooltip", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				DialogModule,
				PlaceholderModule,
				InformationFilled16Module
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
	template: `
			<div>
				<ng-template #template let-tooltip="tooltip">
					<p>This is some tooltip text. This box shows the maximum amount of text that should appear inside.
						If more room is needed please use a modal instead.</p>
					<div class="bx--tooltip__footer">
						<a href="/" class="bx--link">Learn More</a>
						<button class="bx--btn bx--btn--primary" (click)="tooltip.doClose()">Close</button>
					</div>
				</ng-template>

				<div class="bx--tooltip__label">
					{{triggerText}}
					<span
						[ibmTooltip]="template"
						trigger="click"
						[placement]="placement">
						<div role="button">
							<ibm-icon-information-filled16></ibm-icon-information-filled16>
						</div>
					</span>
				</div>
				<ibm-placeholder></ibm-placeholder>
			</div>
		`,
		props: {
			placement: select("Tooltip direction", ["bottom", "top", "left", "right"], "bottom"),
			triggerText: text("Trigger text", "Tooltip label")
		}
	}))
	.add("no icon", () => ({
		template: `
				<div>
					<ng-template #template let-tooltip="tooltip">
						<p>This is some tooltip text. This box shows the maximum amount of text that should appear inside.
							If more room is needed please use a modal instead.</p>
						<div class="bx--tooltip__footer">
							<a href="/" class="bx--link">Learn More</a>
							<button class="bx--btn bx--btn--primary" (click)="tooltip.doClose()">Close</button>
						</div>
					</ng-template>

					<span
						[ibmTooltip]="template"
						trigger="click"
						[placement]="placement">
						{{triggerText}}
					</span>
					<ibm-placeholder></ibm-placeholder>
				</div>
			`,
			props: {
				placement: select("Tooltip direction", ["bottom", "top", "left", "right"], "bottom"),
				triggerText: text("Trigger text", "Tooltip label")
			}
		}))
		.add("only icon", () => ({
			template: `
					<div>
						<ng-template #template let-tooltip="tooltip">
							<p>This is some tooltip text. This box shows the maximum amount of text that should appear inside.
								If more room is needed please use a modal instead.</p>
							<div class="bx--tooltip__footer">
								<a href="/" class="bx--link">Learn More</a>
								<button class="bx--btn bx--btn--primary" (click)="tooltip.doClose()">Close</button>
							</div>
						</ng-template>

						<span
							[ibmTooltip]="template"
							trigger="click"
							[placement]="placement">
							<div role="button" class="bx--tooltip__trigger">
								<svg focusable="false" aria-label="tooltip" width="16" height="16" viewBox="0 0 16 16" role="img" style="will-change: transform;">
									<circle cx="8" cy="3" r="1"></circle><circle cx="8" cy="8" r="1"></circle><circle cx="8" cy="13" r="1"></circle>
								</svg>
							</div>
						</span>
						<ibm-placeholder></ibm-placeholder>
					</div>
				`,
				props: {
					placement: select("Tooltip direction", ["bottom", "top", "left", "right"], "bottom")
				}
			}))
	.add("Icon tooltip", () => ({
		template: `
			<ibm-tooltip-icon [placement]="placement" [content]="content">
				<svg width="16" height="12" viewBox="0 0 16 12">
					<g fill-rule="nonzero">
						<path d="M8.05 2a2.5 2.5 0 0 1 4.9 0H16v1h-3.05a2.5 2.5 0 0 1-4.9 0H0V2h8.05zm2.45 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM3.05
						 9a2.5 2.5 0 0 1 4.9 0H16v1H7.95a2.5 2.5 0 0 1-4.9 0H0V9h3.05zm2.45 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
					</g>
				</svg>
			</ibm-tooltip-icon>
		`,
		props: {
			placement: select("Tooltip direction", ["bottom", "top"], "bottom"),
			content: text("Tooltip content", "Filter")
		}
	}))
	.add("Definition tooltip", () => ({
		template: `
			<ibm-tooltip-definition
				[content]="content"
				[placement]="placement">
				{{triggerText}}
			</ibm-tooltip-definition>
		`,
		props: {
			placement: select("Tooltip direction", ["bottom", "top"], "bottom"),
			triggerText: text("Tooltip text", "Definition Tooltip"),
			content: text("Tooltip content", "Brief description of the dotted, underlined word above.")
		}
	}));
