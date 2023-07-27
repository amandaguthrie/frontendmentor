# QR Code Component
<a href="https://frontendmentor-qr-code-component.toolsareplit.repl.co" alt="View live implementation">
<img src="https://img.shields.io/badge/View_Live_Implementation-seagreen?style=for-the-badge"></a>

## Design/Solution Comparison
<a href="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H" alt="Frontend Mentor Challenge">
<img src="https://img.shields.io/badge/Frontend_Mentor_Challenge-dodgerblue?style=for-the-badge" /></a>

> Clicking on an image will open it in a new tab.

|Format | Design                                                                                                                                                                                        | Solution                                                                                                                                                                                  |
| --- |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Desktop| <img src="/newbie/qr-code-component/design/desktop-design.jpg" width="375px" href="/newbie/qr-code-component/design/desktop-design.jpg" target="_blank">                                      | <img src="/newbie/qr-code-component/solution/ag-solution-desktop.png" width="375px" href="/newbie/qr-code-component/solution/ag-solution-desktop.png" target="_blank">                    |
|Tablet| Not Provided                                                                                                                                                                                  | ---                                                                                                                                                                                       |
|Mobile| <img src="/newbie/qr-code-component/design/mobile-design.jpg" alt="Mobile Design" width="375px" alt="Mobile Design" href="/newbie/qr-code-component/design/mobile-design.jpg" target="_blank"> | <img src="/newbie/qr-code-component/solution/ag-solution-mobile.png" alt="Mobile Solution" width="375px" href="/newbie/qr-code-component/solution/ag-solution-mobile.png" target="_blank"> |

## Build Notes
* While I like to create responsive designs, the only responsiveness the design showed was keeping the main content centered in the page. The size of the component did not change at all.
* Extended the Chakra UI theme for background colors, fonts, and break points to avoid repeating myself.
* Used a main box with corresponding bottom padding to account for the static footer height.
* Tweaked the built-in Chakra card, heading, text, image, and link props to better match the design.
* Used `VisuallyHidden` and `aria-hidden` components to show/hide relevant content. 
  * The QR code image is tagged with `aria-hidden` and an alternative text link is provided in a `VisuallyHidden` component for screen reader users. 
  * Similarly, content in the bottom reads "Scan the QR code" vs. a hidden "Click here" for screen readers.
