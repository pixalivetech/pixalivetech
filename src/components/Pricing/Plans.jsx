export default function ComparePlans() {
  return (
    <div className="max-w-[1280px] mx-auto text-black font-medium px-2 md:px-16 py-16">
      <h2 className="text-3xl font-semibold p-4 mb-6">Compare Plans</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
  <tr className="text-left">
    <th className="py-3 px-4 text-sm font-medium">FEATURES</th>
    <th className="py-3 px-4 text-sm font-medium text-center">STANDARD</th>
    <th className="py-3 px-4 text-sm font-medium bg-black text-white text-center">PRO</th>
  </tr>
</thead>

          <tbody>
            {renderSection("LIVE STREAMING")}
            {renderRow("Live streaming player", true, true)}
            {renderRow("Recorded live shows", true, true)}
            {renderRow("Free storage", true, true)}
            {renderRow("Free streaming minutes (per month)", "50 GB", "200 GB")}
            {renderRow("Free short videos views (per month)", "20,000", "100,000")}
            {renderRow("Host accounts", "100,000", "500,000")}
            {renderRow("Admin accounts", 1, 4)}
            {renderRow("Simulcasts", false, true)}
            {renderRow("Webcam / OBS support", false, true)}
            {renderRow("Live engagement tools", false, true)}

            {renderSection("E-COMMERCE")}
            {renderRow("Unlimited products upload", true, true)}
            {renderRow("Unlimited currencies", true, true)}
            {renderRow("Bulk upload products", true, true)}
            {renderRow("Voucher codes", false, true)}
            {renderRow("E-commerce integration", false, true)}

            {renderSection("BRANDING & CUSTOMIZATION")}
            {renderRow("Customizable video player theme", true, true)}
            {renderRow("Customizable live screen theme", true, true)}
            {renderRow("Brand logo overlay", false, true)}

            {renderSection("VIDEO TOOLS")}
            {renderRow("Short videos & interactive overlays", true, true)}
            {renderRow("Playlists and layouts", true, true)}
            {renderRow("Interactive video branching", false, true)}
            {renderRow("Video editor", false, true)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function renderSection(title) {
  return (
    <tr>
      <td className="py-3 px-4 font-semibold">{title}</td>
      <td className="py-3 px-4"></td>
      <td className="py-3 px-4 bg-black text-white text-center align-middle"></td>
    </tr>
  );
}

function renderRow(name, standard, pro) {
  return (
    <tr>
      <td className="py-2 px-4 text-sm">{name}</td>
      <td className="py-2 px-4 text-sm text-center align-middle">{formatCell(standard)}</td>
      <td className="py-2 px-4 text-sm bg-black text-white text-center align-middle">
        {formatCell(pro)}
      </td>
    </tr>
  );
}

function formatCell(value) {
  if (value === true) return "✔";
  if (value === false) return "✖";
  return value;
}
