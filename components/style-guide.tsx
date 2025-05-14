export function StyleGuide() {
  return (
    <div className="p-8 bg-white">
      <h1 className="text-3xl font-bold mb-8">Typography Style Guide</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Headers</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded">
              <h1 className="form-8 mb-1">Form 8 (24px/34px)</h1>
              <div className="text-sm text-gray-500">Header 1</div>
            </div>
            <div className="p-4 border rounded">
              <h2 className="form-7 mb-1">Form 7 (20px/25px)</h2>
              <div className="text-sm text-gray-500">Header 2</div>
            </div>
            <div className="p-4 border rounded">
              <h3 className="form-6 mb-1">Form 6 (16px/20px)</h3>
              <div className="text-sm text-gray-500">Header 3</div>
            </div>
            <div className="p-4 border rounded">
              <h4 className="form-4 mb-1">Form 4 (14px/18px)</h4>
              <div className="text-sm text-gray-500">Header 4</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Body Text</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded">
              <p className="form-5 mb-1">Form 5 (16px/20px)</p>
              <div className="text-sm text-gray-500">Body Large</div>
            </div>
            <div className="p-4 border rounded">
              <p className="form-3 mb-1">Form 3 (14px/18px)</p>
              <div className="text-sm text-gray-500">Body Default</div>
            </div>
            <div className="p-4 border rounded">
              <p className="form-2 mb-1">Form 2 (12px/15px)</p>
              <div className="text-sm text-gray-500">Body Small</div>
            </div>
            <div className="p-4 border rounded">
              <p className="form-1 mb-1">Form 1 (10px/13px)</p>
              <div className="text-sm text-gray-500">Caption</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch name="Primary Blue" hex="#99F9EA" />
          <ColorSwatch name="Primary Radial" hex="#E67E22" />
          <ColorSwatch name="Background" hex="#36393F" />
          <ColorSwatch name="Sidebar" hex="#2F3136" />
          <ColorSwatch name="Dark Gray" hex="#32383D" />
          <ColorSwatch name="Mid Gray" hex="#6D6E6E" />
          <ColorSwatch name="Light Gray" hex="#96999E" />
          <ColorSwatch name="Pink" hex="#E91E63" />
        </div>
      </div>
    </div>
  )
}

function ColorSwatch({ name, hex }: { name: string; hex: string }) {
  return (
    <div className="border rounded overflow-hidden">
      <div className="h-20" style={{ backgroundColor: hex }}></div>
      <div className="p-2">
        <div className="font-medium">{name}</div>
        <div className="text-sm text-gray-500">{hex}</div>
      </div>
    </div>
  )
}
