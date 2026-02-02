# OpenClaw (iOS)

Internal-only SwiftUI app scaffold.

## GitHub Actions

The iOS app is automatically built via GitHub Actions on push and pull requests. The workflow:
- Generates the Xcode project with XcodeGen
- Builds the app for iOS using xcodebuild (without code signing)
- Creates an unsigned .ipa file for testing
- Uploads the unsigned .ipa as a workflow artifact

The unsigned IPA can be downloaded from the Actions tab and signed separately as needed.

See `.github/workflows/ios-build.yml` for details.

## Lint/format (required)
```bash
brew install swiftformat swiftlint
```

## Generate the Xcode project
```bash
cd apps/ios
xcodegen generate
open OpenClaw.xcodeproj
```

## Shared packages
- `../shared/OpenClawKit` — shared types/constants used by iOS (and later macOS bridge + gateway routing).

## fastlane
```bash
brew install fastlane

cd apps/ios
fastlane lanes
```

See `apps/ios/fastlane/SETUP.md` for App Store Connect auth + upload lanes.
