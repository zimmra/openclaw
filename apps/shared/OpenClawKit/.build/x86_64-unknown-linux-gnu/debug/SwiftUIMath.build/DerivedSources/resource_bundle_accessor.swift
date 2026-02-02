import Foundation

extension Foundation.Bundle {
    static let module: Bundle = {
        let mainPath = Bundle.main.bundleURL.appendingPathComponent("swiftui-math_SwiftUIMath.resources").path
        let buildPath = "/home/runner/work/openclaw/openclaw/apps/shared/OpenClawKit/.build/x86_64-unknown-linux-gnu/debug/swiftui-math_SwiftUIMath.resources"

        let preferredBundle = Bundle(path: mainPath)

        guard let bundle = preferredBundle ?? Bundle(path: buildPath) else {
            // Users can write a function called fatalError themselves, we should be resilient against that.
            Swift.fatalError("could not load resource bundle: from \(mainPath) or \(buildPath)")
        }

        return bundle
    }()
}