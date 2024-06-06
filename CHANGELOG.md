# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.1.13] - 2024-06-06

### Added

Set vite configuration to have the css injected automaticly into the app and skip the manuel importation

## [1.1.1] - 2024-05-31

### Added

New props: **confirmLabel**, to change the button confirm label

New accessiblity feature: Pressing Shift + Tab when the modal just opens and receives focus will close the modal.

## [1.1.0] - 2024-05-29

### Added

New className for styling title H1.

- `rsmj_Title`: Styles for the modal title.

### Changed

Clarifying props names

- Renamed prop `closeButtonLabel` to `cancelButtonLabel`.
- Renamed prop `showCloseButton` to `showCloseButtonIcon`.

### Fixed

#### wrong names in documentation for classNames:

- fixed className `overlay` to `rsmj_Overlay`.
- fixed className `content` to `rsmj_Modal`.
- fixed className `childrenSection` to `rsmj_ChildrenSection`.
- fixed className `buttonSection` to `rsmj_ButtonSection`.
- fixed className `confirmButton` to `rsmj_ConfirmButton`.
- fixed className `closeButton` to `rsmj_CancelButton`.
- fixed className `crossButton` to `rsmj_CloseButton`.
- fixed className `closeButtonIcon` to `rsmj_CloseButtonIcon`.

### Initial release

- Initial release of the package.
