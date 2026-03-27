// Auto-generated from micronaero.com Shopify API
// Generated: 2026-03-27

export type Product = {
  id: number;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  price: string;
  compareAtPrice: string | null;
  images: string[];
  variants: { id: number; title: string; price: string; sku: string; available: boolean }[];
  productType: string;
  tags: string[];
  vendor: string;
  series: string;
  collection: string;
};

export type Collection = {
  handle: string;
  title: string;
  description: string;
  image: string | null;
  productHandles: string[];
};

export const products: Product[] = [
  {
    id: 9278553293046,
    handle: '2138-ceracoat-z-water-based-boron-nitride-coating-5ltr',
    title: '2138 CeraCoat Z - Water Based Boron Nitride Coating - 5Ltr',
    description: `<h2 data-start="270" data-end="328">Advanced High-Temperature Release &amp; Lubrication Coating</h2>
<p data-start="330" data-end="635"><strong data-start="330" data-end="345">CeraCoat Z™</strong> is a premium-grade, water-based hexagonal boron nitride (hBN) coating formulated using <strong data-start="433" data-end="471">99.5% ultra-pure ceramic particles</strong>. Designed for extreme industrial environments, it delivers superior high-temperature lubrication, non-stick performance, and protective surface coating properties.</p>
<p data-start="637" data-end="812">This advanced ceramic suspension forms a smooth, uniform film with outstanding adhesion and thermal stability, making it ideal for processes operating at <strong data-start="791" data-end="811">1000°C and above</strong>.</p>
<p data-start="814" data-end="989">CeraCoat Z™ prevents molten metals such as aluminum, zinc, and copper from wetting treated surfaces, significantly reducing material build-up and improving process efficiency.</p>
<hr data-start="991" data-end="994">
<h2 data-start="996" data-end="1022">Why Choose CeraCoat Z™?</h2>
<ul data-start="1024" data-end="1427">
<li data-start="1024" data-end="1089">
<p data-start="1026" data-end="1089">Manufactured with <strong data-start="1044" data-end="1089">99.5% high-purity hexagonal boron nitride</strong></p>
</li>
<li data-start="1090" data-end="1134">
<p data-start="1092" data-end="1134">Provides <strong data-start="1101" data-end="1134">16.9% higher surface coverage</strong></p>
</li>
<li data-start="1135" data-end="1185">
<p data-start="1137" data-end="1185">Delivers <strong data-start="1146" data-end="1185">33.1% improved adhesion performance</strong></p>
</li>
<li data-start="1186" data-end="1232">
<p data-start="1188" data-end="1232">Excellent resistance to molten metal wetting</p>
</li>
<li data-start="1233" data-end="1259">
<p data-start="1235" data-end="1259">High chemical resistance</p>
</li>
<li data-start="1260" data-end="1318">
<p data-start="1262" data-end="1318">Performs reliably in ultra-high temperature environments</p>
</li>
<li data-start="1319" data-end="1379">
<p data-start="1321" data-end="1379">Cost-efficient solution with up to <strong data-start="1356" data-end="1379">25% price advantage</strong></p>
</li>
<li data-start="1380" data-end="1427">
<p data-start="1382" data-end="1427">Easy application and ready-to-use formulation</p>
</li>
</ul>
<hr data-start="1429" data-end="1432">
<h2 data-start="1434" data-end="1457">Typical Applications</h2>
<p data-start="1459" data-end="1531">CeraCoat Z™ is engineered for demanding industrial processes, including:</p>
<ul data-start="1533" data-end="1796">
<li data-start="1533" data-end="1549">
<p data-start="1535" data-end="1549">Extrusion dies</p>
</li>
<li data-start="1550" data-end="1570">
<p data-start="1552" data-end="1570">Die-casting moulds</p>
</li>
<li data-start="1571" data-end="1586">
<p data-start="1573" data-end="1586">Forging tools</p>
</li>
<li data-start="1587" data-end="1614">
<p data-start="1589" data-end="1614">Metal moulding operations</p>
</li>
<li data-start="1615" data-end="1640">
<p data-start="1617" data-end="1640">Heat treatment fixtures</p>
</li>
<li data-start="1641" data-end="1671">
<p data-start="1643" data-end="1671">Ceramic production equipment</p>
</li>
<li data-start="1672" data-end="1709">
<p data-start="1674" data-end="1709">High-temperature furnace components</p>
</li>
<li data-start="1710" data-end="1748">
<p data-start="1712" data-end="1748">Laboratory and research applications</p>
</li>
<li data-start="1749" data-end="1796">
<p data-start="1751" data-end="1796">Nuclear and specialty industrial environments</p>
</li>
</ul>
<p data-start="1798" data-end="1856">It is particularly recommended for applications requiring:</p>
<ul data-start="1858" data-end="1983">
<li data-start="1858" data-end="1888">
<p data-start="1860" data-end="1888">High-temperature lubrication</p>
</li>
<li data-start="1889" data-end="1915">
<p data-start="1891" data-end="1915">Metal release properties</p>
</li>
<li data-start="1916" data-end="1944">
<p data-start="1918" data-end="1944">Thermal barrier protection</p>
</li>
<li data-start="1945" data-end="1983">
<p data-start="1947" data-end="1983">Molten metal non-wetting performance</p>
</li>
</ul>
<hr data-start="1985" data-end="1988">
<h2 data-start="1990" data-end="2037">Surface Preparation &amp; Application Guidelines</h2>
<p data-start="2039" data-end="2097">CeraCoat Z™ is supplied in a <strong data-start="2068" data-end="2096">ready-to-use formulation</strong>.</p>
<h3 data-start="2099" data-end="2123">Surface Preparation:</h3>
<ul data-start="2124" data-end="2307">
<li data-start="2124" data-end="2228">
<p data-start="2126" data-end="2228">Ensure the substrate is clean, dry, and free from oil, grease, rust, dust, paint, or lacquer residues.</p>
</li>
<li data-start="2229" data-end="2307">
<p data-start="2231" data-end="2307">The coating does not form a permanent bond and can be removed when required.</p>
</li>
</ul>
<h3 data-start="2309" data-end="2325">Application:</h3>
<ul data-start="2326" data-end="2819">
<li data-start="2326" data-end="2355">
<p data-start="2328" data-end="2355">Stir thoroughly before use.</p>
</li>
<li data-start="2356" data-end="2412">
<p data-start="2358" data-end="2412">Apply using a brush, roller, or suitable spray system.</p>
</li>
<li data-start="2413" data-end="2512">
<p data-start="2415" data-end="2512">At room temperature and normal humidity, drying time is approximately <strong data-start="2485" data-end="2511">10 minutes (touch dry)</strong>.</p>
</li>
<li data-start="2513" data-end="2587">
<p data-start="2515" data-end="2587">Pre-heating the substrate slightly can significantly reduce drying time.</p>
</li>
<li data-start="2588" data-end="2719">
<p data-start="2590" data-end="2719">If required, thin with small quantities of distilled water, mixing slowly and thoroughly after each addition to prevent clumping.</p>
</li>
<li data-start="2720" data-end="2819">
<p data-start="2722" data-end="2819">Keep container tightly closed to prevent drying or thickening, as the formulation is water-based.</p>
</li>
</ul>
<p data-start="2821" data-end="2902">CeraCoat Z™ can withstand freezing temperatures without compromising performance.</p>
<hr data-start="2904" data-end="2907">
<h2 data-start="2909" data-end="2934">Performance Highlights</h2>
<ul data-start="2936" data-end="3205">
<li data-start="2936" data-end="3042">
<p data-start="2938" data-end="2973">Application temperature capability:</p>
<ul data-start="2976" data-end="3042">
<li data-start="2976" data-end="3004">
<p data-start="2978" data-end="3004">Up to <strong data-start="2984" data-end="3004">1400°C in vacuum</strong></p>
</li>
<li data-start="3007" data-end="3042">
<p data-start="3009" data-end="3042">Up to <strong data-start="3015" data-end="3042">900°C in air atmosphere</strong></p>
</li>
</ul>
</li>
<li data-start="3043" data-end="3093">
<p data-start="3045" data-end="3093">Forms a smooth, thermally stable ceramic coating</p>
</li>
<li data-start="3094" data-end="3131">
<p data-start="3096" data-end="3131">Highly resistant to chemical attack</p>
</li>
<li data-start="3132" data-end="3162">
<p data-start="3134" data-end="3162">Easy to remove when required</p>
</li>
<li data-start="3163" data-end="3205">
<p data-start="3165" data-end="3205">Enhances die life and process efficiency</p>
</li>
</ul>`,
    descriptionHtml: `<h2 data-start="270" data-end="328">Advanced High-Temperature Release &amp; Lubrication Coating</h2>
<p data-start="330" data-end="635"><strong data-start="330" data-end="345">CeraCoat Z™</strong> is a premium-grade, water-based hexagonal boron nitride (hBN) coating formulated using <strong data-start="433" data-end="471">99.5% ultra-pure ceramic particles</strong>. Designed for extreme industrial environments, it delivers superior high-temperature lubrication, non-stick performance, and protective surface coating properties.</p>
<p data-start="637" data-end="812">This advanced ceramic suspension forms a smooth, uniform film with outstanding adhesion and thermal stability, making it ideal for processes operating at <strong data-start="791" data-end="811">1000°C and above</strong>.</p>
<p data-start="814" data-end="989">CeraCoat Z™ prevents molten metals such as aluminum, zinc, and copper from wetting treated surfaces, significantly reducing material build-up and improving process efficiency.</p>
<hr data-start="991" data-end="994">
<h2 data-start="996" data-end="1022">Why Choose CeraCoat Z™?</h2>
<ul data-start="1024" data-end="1427">
<li data-start="1024" data-end="1089">
<p data-start="1026" data-end="1089">Manufactured with <strong data-start="1044" data-end="1089">99.5% high-purity hexagonal boron nitride</strong></p>
</li>
<li data-start="1090" data-end="1134">
<p data-start="1092" data-end="1134">Provides <strong data-start="1101" data-end="1134">16.9% higher surface coverage</strong></p>
</li>
<li data-start="1135" data-end="1185">
<p data-start="1137" data-end="1185">Delivers <strong data-start="1146" data-end="1185">33.1% improved adhesion performance</strong></p>
</li>
<li data-start="1186" data-end="1232">
<p data-start="1188" data-end="1232">Excellent resistance to molten metal wetting</p>
</li>
<li data-start="1233" data-end="1259">
<p data-start="1235" data-end="1259">High chemical resistance</p>
</li>
<li data-start="1260" data-end="1318">
<p data-start="1262" data-end="1318">Performs reliably in ultra-high temperature environments</p>
</li>
<li data-start="1319" data-end="1379">
<p data-start="1321" data-end="1379">Cost-efficient solution with up to <strong data-start="1356" data-end="1379">25% price advantage</strong></p>
</li>
<li data-start="1380" data-end="1427">
<p data-start="1382" data-end="1427">Easy application and ready-to-use formulation</p>
</li>
</ul>
<hr data-start="1429" data-end="1432">
<h2 data-start="1434" data-end="1457">Typical Applications</h2>
<p data-start="1459" data-end="1531">CeraCoat Z™ is engineered for demanding industrial processes, including:</p>
<ul data-start="1533" data-end="1796">
<li data-start="1533" data-end="1549">
<p data-start="1535" data-end="1549">Extrusion dies</p>
</li>
<li data-start="1550" data-end="1570">
<p data-start="1552" data-end="1570">Die-casting moulds</p>
</li>
<li data-start="1571" data-end="1586">
<p data-start="1573" data-end="1586">Forging tools</p>
</li>
<li data-start="1587" data-end="1614">
<p data-start="1589" data-end="1614">Metal moulding operations</p>
</li>
<li data-start="1615" data-end="1640">
<p data-start="1617" data-end="1640">Heat treatment fixtures</p>
</li>
<li data-start="1641" data-end="1671">
<p data-start="1643" data-end="1671">Ceramic production equipment</p>
</li>
<li data-start="1672" data-end="1709">
<p data-start="1674" data-end="1709">High-temperature furnace components</p>
</li>
<li data-start="1710" data-end="1748">
<p data-start="1712" data-end="1748">Laboratory and research applications</p>
</li>
<li data-start="1749" data-end="1796">
<p data-start="1751" data-end="1796">Nuclear and specialty industrial environments</p>
</li>
</ul>
<p data-start="1798" data-end="1856">It is particularly recommended for applications requiring:</p>
<ul data-start="1858" data-end="1983">
<li data-start="1858" data-end="1888">
<p data-start="1860" data-end="1888">High-temperature lubrication</p>
</li>
<li data-start="1889" data-end="1915">
<p data-start="1891" data-end="1915">Metal release properties</p>
</li>
<li data-start="1916" data-end="1944">
<p data-start="1918" data-end="1944">Thermal barrier protection</p>
</li>
<li data-start="1945" data-end="1983">
<p data-start="1947" data-end="1983">Molten metal non-wetting performance</p>
</li>
</ul>
<hr data-start="1985" data-end="1988">
<h2 data-start="1990" data-end="2037">Surface Preparation &amp; Application Guidelines</h2>
<p data-start="2039" data-end="2097">CeraCoat Z™ is supplied in a <strong data-start="2068" data-end="2096">ready-to-use formulation</strong>.</p>
<h3 data-start="2099" data-end="2123">Surface Preparation:</h3>
<ul data-start="2124" data-end="2307">
<li data-start="2124" data-end="2228">
<p data-start="2126" data-end="2228">Ensure the substrate is clean, dry, and free from oil, grease, rust, dust, paint, or lacquer residues.</p>
</li>
<li data-start="2229" data-end="2307">
<p data-start="2231" data-end="2307">The coating does not form a permanent bond and can be removed when required.</p>
</li>
</ul>
<h3 data-start="2309" data-end="2325">Application:</h3>
<ul data-start="2326" data-end="2819">
<li data-start="2326" data-end="2355">
<p data-start="2328" data-end="2355">Stir thoroughly before use.</p>
</li>
<li data-start="2356" data-end="2412">
<p data-start="2358" data-end="2412">Apply using a brush, roller, or suitable spray system.</p>
</li>
<li data-start="2413" data-end="2512">
<p data-start="2415" data-end="2512">At room temperature and normal humidity, drying time is approximately <strong data-start="2485" data-end="2511">10 minutes (touch dry)</strong>.</p>
</li>
<li data-start="2513" data-end="2587">
<p data-start="2515" data-end="2587">Pre-heating the substrate slightly can significantly reduce drying time.</p>
</li>
<li data-start="2588" data-end="2719">
<p data-start="2590" data-end="2719">If required, thin with small quantities of distilled water, mixing slowly and thoroughly after each addition to prevent clumping.</p>
</li>
<li data-start="2720" data-end="2819">
<p data-start="2722" data-end="2819">Keep container tightly closed to prevent drying or thickening, as the formulation is water-based.</p>
</li>
</ul>
<p data-start="2821" data-end="2902">CeraCoat Z™ can withstand freezing temperatures without compromising performance.</p>
<hr data-start="2904" data-end="2907">
<h2 data-start="2909" data-end="2934">Performance Highlights</h2>
<ul data-start="2936" data-end="3205">
<li data-start="2936" data-end="3042">
<p data-start="2938" data-end="2973">Application temperature capability:</p>
<ul data-start="2976" data-end="3042">
<li data-start="2976" data-end="3004">
<p data-start="2978" data-end="3004">Up to <strong data-start="2984" data-end="3004">1400°C in vacuum</strong></p>
</li>
<li data-start="3007" data-end="3042">
<p data-start="3009" data-end="3042">Up to <strong data-start="3015" data-end="3042">900°C in air atmosphere</strong></p>
</li>
</ul>
</li>
<li data-start="3043" data-end="3093">
<p data-start="3045" data-end="3093">Forms a smooth, thermally stable ceramic coating</p>
</li>
<li data-start="3094" data-end="3131">
<p data-start="3096" data-end="3131">Highly resistant to chemical attack</p>
</li>
<li data-start="3132" data-end="3162">
<p data-start="3134" data-end="3162">Easy to remove when required</p>
</li>
<li data-start="3163" data-end="3205">
<p data-start="3165" data-end="3205">Enhances die life and process efficiency</p>
</li>
</ul>`,
    price: '8400.00',
    compareAtPrice: '6000.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/2138_A.png?v=1770878430', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Ceramic_Coatinng.png?v=1770957570', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Ceramic_Liquid.png?v=1770959428'],
    variants: [
      { id: 49931589320950, title: 'Default Title', price: '8400.00', sku: '2138', available: true },
    ],
    productType: 'Welding',
    tags: [],
    vendor: 'Micron Aerosols™',
    series: 'S2000',
    collection: 'speciality-products',
  },
  {
    id: 9255751221494,
    handle: '5201-ptfe-enhanced-chain-lubricant-spray-riders-united',
    title: '5201 PTFE Enhanced Chain Lubricant Spray | Riders United',
    description: `<p><meta charset="utf-8"><b>Product Description</b><span></span></p>
<p><b>5201 Riders United™ Chain Lubricant Spray</b><span> </span>is a high-performance motorcycle chain lubricant formulated with<span> </span><b>PTFE (Teflon®) technology</b><span> </span>to deliver superior lubrication, long-lasting protection, and ultra-smooth power transmission. Designed for demanding riding conditions, it penetrates deep into chain links and rollers, forming a durable, low-friction protective film that resists wear, corrosion, and fling-off.</p>
<p>Ideal for<span> </span><b>road bikes, touring motorcycles, sport bikes, and off-road machines</b>, this advanced chain lubricant ensures quieter operation, improved efficiency, and extended chain and sprocket life—ride after ride.</p>
<p><b>Key Benefits</b><span></span></p>
<ul>
<li>
<p><b>PTFE-Enhanced Lubrication</b><br>Creates an ultra-low friction surface for smoother chain movement and reduced power loss.</p>
</li>
<li>
<p><b>Deep Penetration Formula</b><br>Reaches inner rollers, pins, and O-rings for complete lubrication where it matters most.</p>
</li>
<li>
<p><b>Long-Lasting Protection</b><br>Forms a durable coating that withstands high speeds, heavy loads, and varying weather conditions.</p>
</li>
<li>
<p><b>Reduced Wear &amp; Noise</b><br>Minimizes metal-to-metal contact, reducing chain noise and extending component life.</p>
</li>
<li>
<p><b>Anti-Corrosion Performance</b><br>Protects against rust, moisture, dust, and road contaminants.</p>
</li>
<li>
<p><b>Low Fling-Off Technology</b><br>Stays on the chain at high RPMs, keeping wheels and swingarms cleaner.</p>
</li>
<li>
<p><b>O-Ring &amp; X-Ring Safe</b><br>Compatible with modern sealed motorcycle chains.</p>
</li>
</ul>
<p><b>Directions for Use</b></p>
<ol>
<li>
<p><b>Clean the Chain</b><br>Remove dirt, grease, and old lubricant using a suitable chain cleaner. Allow the chain to dry completely.</p>
</li>
<li>
<p><b>Shake Well</b><br>Shake the can thoroughly before use to ensure uniform PTFE dispersion.</p>
</li>
<li>
<p><b>Apply Evenly</b><br>Spray evenly along the<span> </span><b>inner side of the chain</b><span> </span>while slowly rotating the wheel to ensure full coverage.</p>
</li>
<li>
<p><b>Allow to Set</b><br>Let the lubricant penetrate and set for<span> </span><b>10–15 minutes</b><span> </span>before riding.</p>
</li>
<li>
<p><b>Wipe Excess</b><br>Lightly wipe off any excess lubricant to prevent dust attraction.</p>
</li>
</ol>
<p><b>Recommended Use:</b><br>Reapply every<span> </span><b>300–600 km</b>, or more frequently under wet, dusty, or aggressive riding conditions.</p>
<p><b>Applications</b><span></span></p>
<ul>
<li>
<p>Motorcycle drive chains</p>
</li>
<li>
<p>O-ring, X-ring, and standard chains</p>
</li>
<li>
<p>Street bikes, cruisers, sport bikes</p>
</li>
<li>
<p>Touring motorcycles</p>
</li>
<li>
<p>Off-road and adventure motorcycles</p>
</li>
<li>
<p>Scooters with exposed chains</p>
</li>
</ul>
<p><b>Why Riders Choose 5201 Riders United™</b><span></span></p>
<p>Because every ride deserves<span> </span><b>smoother performance, quieter chains, and longer component life</b>—backed by advanced PTFE lubrication technology trusted by riders.</p>`,
    descriptionHtml: `<p><meta charset="utf-8"><b>Product Description</b><span></span></p>
<p><b>5201 Riders United™ Chain Lubricant Spray</b><span> </span>is a high-performance motorcycle chain lubricant formulated with<span> </span><b>PTFE (Teflon®) technology</b><span> </span>to deliver superior lubrication, long-lasting protection, and ultra-smooth power transmission. Designed for demanding riding conditions, it penetrates deep into chain links and rollers, forming a durable, low-friction protective film that resists wear, corrosion, and fling-off.</p>
<p>Ideal for<span> </span><b>road bikes, touring motorcycles, sport bikes, and off-road machines</b>, this advanced chain lubricant ensures quieter operation, improved efficiency, and extended chain and sprocket life—ride after ride.</p>
<p><b>Key Benefits</b><span></span></p>
<ul>
<li>
<p><b>PTFE-Enhanced Lubrication</b><br>Creates an ultra-low friction surface for smoother chain movement and reduced power loss.</p>
</li>
<li>
<p><b>Deep Penetration Formula</b><br>Reaches inner rollers, pins, and O-rings for complete lubrication where it matters most.</p>
</li>
<li>
<p><b>Long-Lasting Protection</b><br>Forms a durable coating that withstands high speeds, heavy loads, and varying weather conditions.</p>
</li>
<li>
<p><b>Reduced Wear &amp; Noise</b><br>Minimizes metal-to-metal contact, reducing chain noise and extending component life.</p>
</li>
<li>
<p><b>Anti-Corrosion Performance</b><br>Protects against rust, moisture, dust, and road contaminants.</p>
</li>
<li>
<p><b>Low Fling-Off Technology</b><br>Stays on the chain at high RPMs, keeping wheels and swingarms cleaner.</p>
</li>
<li>
<p><b>O-Ring &amp; X-Ring Safe</b><br>Compatible with modern sealed motorcycle chains.</p>
</li>
</ul>
<p><b>Directions for Use</b></p>
<ol>
<li>
<p><b>Clean the Chain</b><br>Remove dirt, grease, and old lubricant using a suitable chain cleaner. Allow the chain to dry completely.</p>
</li>
<li>
<p><b>Shake Well</b><br>Shake the can thoroughly before use to ensure uniform PTFE dispersion.</p>
</li>
<li>
<p><b>Apply Evenly</b><br>Spray evenly along the<span> </span><b>inner side of the chain</b><span> </span>while slowly rotating the wheel to ensure full coverage.</p>
</li>
<li>
<p><b>Allow to Set</b><br>Let the lubricant penetrate and set for<span> </span><b>10–15 minutes</b><span> </span>before riding.</p>
</li>
<li>
<p><b>Wipe Excess</b><br>Lightly wipe off any excess lubricant to prevent dust attraction.</p>
</li>
</ol>
<p><b>Recommended Use:</b><br>Reapply every<span> </span><b>300–600 km</b>, or more frequently under wet, dusty, or aggressive riding conditions.</p>
<p><b>Applications</b><span></span></p>
<ul>
<li>
<p>Motorcycle drive chains</p>
</li>
<li>
<p>O-ring, X-ring, and standard chains</p>
</li>
<li>
<p>Street bikes, cruisers, sport bikes</p>
</li>
<li>
<p>Touring motorcycles</p>
</li>
<li>
<p>Off-road and adventure motorcycles</p>
</li>
<li>
<p>Scooters with exposed chains</p>
</li>
</ul>
<p><b>Why Riders Choose 5201 Riders United™</b><span></span></p>
<p>Because every ride deserves<span> </span><b>smoother performance, quieter chains, and longer component life</b>—backed by advanced PTFE lubrication technology trusted by riders.</p>`,
    price: '750.00',
    compareAtPrice: '600.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/5201.png?v=1768111685', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Chain_Lubricant.png?v=1768112189', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Riders_United_Into_Pic.jpg?v=1704785682', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/RidersUnitedIntor2.jpg?v=1709010308', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/RidersUnited.jpg?v=1709010308'],
    variants: [
      { id: 49860062806262, title: 'Default Title', price: '750.00', sku: '5201', available: true },
    ],
    productType: 'Automotive',
    tags: ['Automotive', 'Speciality Products'],
    vendor: 'Micron Aerosols™',
    series: 'S5000',
    collection: 'automotive-care-performance',
  },
  {
    id: 9237912781046,
    handle: '7104-dentalube-dental-hand-piece-lubricant-spray',
    title: '7104 DentaLube Dental Hand piece Lubricant Spray',
    description: `<p data-start="298" data-end="666"><strong data-start="298" data-end="346">Denta Lube™ Dental Handpiece Lubricant Spray</strong> is a highly specialised, ultra-low viscosity lubrication solution engineered specifically for the precision requirements of dental handpieces. Designed to penetrate rapidly into micro-bearings, turbines, and internal drive mechanisms, it ensures smooth rotation, reduced friction, and consistent high-speed performance.</p>
<p data-start="668" data-end="1014">The advanced low-viscosity formulation effectively displaces moisture and contaminants while forming a stable, non-sticky lubricating film that protects internal components from wear and corrosion. Denta Lube™ supports optimal handpiece function, extends service life, and helps maintain reliable performance during demanding clinical procedures.</p>
<p data-start="1016" data-end="1225">Ideal for routine maintenance, Denta Lube™ is compatible with high-speed and low-speed dental handpieces and is suitable for use before sterilization cycles as part of standard dental equipment care protocols.</p>
<p data-start="1016" data-end="1225"> </p>
<h3 data-start="1232" data-end="1254"><strong data-start="1236" data-end="1254">Key Highlights</strong></h3>
<ul data-start="1255" data-end="1600">
<li data-start="1255" data-end="1312">
<p data-start="1257" data-end="1312">Extremely low viscosity for deep internal penetration</p>
</li>
<li data-start="1313" data-end="1378">
<p data-start="1315" data-end="1378">Reduces friction and wear in high-speed turbines and bearings</p>
</li>
<li data-start="1379" data-end="1432">
<p data-start="1381" data-end="1432">Displaces moisture and protects against corrosion</p>
</li>
<li data-start="1433" data-end="1480">
<p data-start="1435" data-end="1480">Non-gumming, residue-controlled formulation</p>
</li>
<li data-start="1481" data-end="1542">
<p data-start="1483" data-end="1542">Supports longer handpiece life and consistent performance</p>
</li>
<li data-start="1543" data-end="1600">
<p data-start="1545" data-end="1600">Easy-to-use spray application for routine maintenance</p>
</li>
</ul>
<hr data-start="1602" data-end="1605">
<h3 data-start="1607" data-end="1636"><strong data-start="1611" data-end="1636">Intended Applications</strong></h3>
<ul data-start="1637" data-end="1769">
<li data-start="1637" data-end="1669">
<p data-start="1639" data-end="1669">High-speed dental handpieces</p>
</li>
<li data-start="1670" data-end="1712">
<p data-start="1672" data-end="1712">Low-speed handpieces and contra-angles</p>
</li>
<li data-start="1713" data-end="1769">
<p data-start="1715" data-end="1769">Air-driven turbines and precision dental instruments</p>
</li>
</ul>`,
    descriptionHtml: `<p data-start="298" data-end="666"><strong data-start="298" data-end="346">Denta Lube™ Dental Handpiece Lubricant Spray</strong> is a highly specialised, ultra-low viscosity lubrication solution engineered specifically for the precision requirements of dental handpieces. Designed to penetrate rapidly into micro-bearings, turbines, and internal drive mechanisms, it ensures smooth rotation, reduced friction, and consistent high-speed performance.</p>
<p data-start="668" data-end="1014">The advanced low-viscosity formulation effectively displaces moisture and contaminants while forming a stable, non-sticky lubricating film that protects internal components from wear and corrosion. Denta Lube™ supports optimal handpiece function, extends service life, and helps maintain reliable performance during demanding clinical procedures.</p>
<p data-start="1016" data-end="1225">Ideal for routine maintenance, Denta Lube™ is compatible with high-speed and low-speed dental handpieces and is suitable for use before sterilization cycles as part of standard dental equipment care protocols.</p>
<p data-start="1016" data-end="1225"> </p>
<h3 data-start="1232" data-end="1254"><strong data-start="1236" data-end="1254">Key Highlights</strong></h3>
<ul data-start="1255" data-end="1600">
<li data-start="1255" data-end="1312">
<p data-start="1257" data-end="1312">Extremely low viscosity for deep internal penetration</p>
</li>
<li data-start="1313" data-end="1378">
<p data-start="1315" data-end="1378">Reduces friction and wear in high-speed turbines and bearings</p>
</li>
<li data-start="1379" data-end="1432">
<p data-start="1381" data-end="1432">Displaces moisture and protects against corrosion</p>
</li>
<li data-start="1433" data-end="1480">
<p data-start="1435" data-end="1480">Non-gumming, residue-controlled formulation</p>
</li>
<li data-start="1481" data-end="1542">
<p data-start="1483" data-end="1542">Supports longer handpiece life and consistent performance</p>
</li>
<li data-start="1543" data-end="1600">
<p data-start="1545" data-end="1600">Easy-to-use spray application for routine maintenance</p>
</li>
</ul>
<hr data-start="1602" data-end="1605">
<h3 data-start="1607" data-end="1636"><strong data-start="1611" data-end="1636">Intended Applications</strong></h3>
<ul data-start="1637" data-end="1769">
<li data-start="1637" data-end="1669">
<p data-start="1639" data-end="1669">High-speed dental handpieces</p>
</li>
<li data-start="1670" data-end="1712">
<p data-start="1672" data-end="1712">Low-speed handpieces and contra-angles</p>
</li>
<li data-start="1713" data-end="1769">
<p data-start="1715" data-end="1769">Air-driven turbines and precision dental instruments</p>
</li>
</ul>`,
    price: '600.00',
    compareAtPrice: null,
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/7104.png?v=1765886861', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Denta_Lube.png?v=1765886882'],
    variants: [
      { id: 49792844202230, title: 'Default Title', price: '600.00', sku: '', available: true },
    ],
    productType: 'Specialty Products',
    tags: [],
    vendor: 'Micron Aerosols™',
    series: 'S6000',
    collection: 'speciality-products',
  },
  {
    id: 9235601293558,
    handle: '6104-djs-party-snow-spray-white-snow-spray-pack-of-10',
    title: '6104 DJ\'s Party Snow Spray | White Snow Spray Pack of 10',
    description: `<p data-start="265" data-end="633">Bring your celebrations to life with <strong data-start="302" data-end="327">DJ’s Party Snow Spray</strong>, the ultimate fun-filled foam spray designed to create thick, fluffy, snow-like effects in seconds. Whether it’s a <strong data-start="443" data-end="542">birthday, wedding, DJ night, New Year’s party, school event, photoshoot, or festive celebration</strong>, this spray instantly elevates the mood and transforms any space into a lively party zone.</p>
<p data-start="635" data-end="858">Formulated for <strong data-start="650" data-end="690">smooth, consistent spray performance</strong>, it covers a wide area with rich foam that lasts long yet cleans up effortlessly. Safe for use around kids and adults, and suitable for both indoor and outdoor events.</p>
<h3 data-start="888" data-end="919">✅ <strong data-start="894" data-end="917">Instant Snow Effect</strong>
</h3>
<p data-start="920" data-end="1027">Creates dense, white, fluffy foam that looks like real snow—perfect for party ambiance, videos, and photos.</p>
<h3 data-start="1029" data-end="1060">✅ <strong data-start="1035" data-end="1058">Safe &amp; Non-Staining</strong>
</h3>
<p data-start="1061" data-end="1147">Leaves no permanent marks on clothes, skin, walls, or décor. Easy to wipe or wash off.</p>
<h3 data-start="1149" data-end="1184">✅ <strong data-start="1155" data-end="1182">Smooth Spray Technology</strong>
</h3>
<p data-start="1185" data-end="1250">Engineered nozzle ensures uniform foam output with zero clogging.</p>
<h3 data-start="1252" data-end="1292">✅ <strong data-start="1258" data-end="1290">Perfect for All Celebrations</strong>
</h3>
<p data-start="1293" data-end="1397">Ideal for birthdays, weddings, concerts, New Year’s, Holi parties, Christmas events, concerts, and more.</p>
<h3 data-start="1399" data-end="1431">✅ <strong data-start="1405" data-end="1429">Indoor &amp; Outdoor Use</strong>
</h3>
<p data-start="1432" data-end="1513">Works equally well at home, party halls, clubs, schools, and large public events.</p>
<h3 data-start="1515" data-end="1544">✅ <strong data-start="1521" data-end="1542">Kids-Friendly Fun</strong>
</h3>
<p data-start="1545" data-end="1614">Moves with the excitement—lightweight and safe when used as directed.</p>
<h1 data-start="1621" data-end="1642">📦 <strong data-start="1626" data-end="1642">Where to Use</strong>
</h1>
<ul data-start="1644" data-end="1900">
<li data-start="1644" data-end="1667">
<p data-start="1646" data-end="1667">Parties &amp; DJ Nights</p>
</li>
<li data-start="1668" data-end="1701">
<p data-start="1670" data-end="1701">Weddings &amp; Pre-wedding Shoots</p>
</li>
<li data-start="1702" data-end="1731">
<p data-start="1704" data-end="1731">Birthdays &amp; Anniversaries</p>
</li>
<li data-start="1732" data-end="1762">
<p data-start="1734" data-end="1762">Dance Floors &amp; Stage Shows</p>
</li>
<li data-start="1763" data-end="1796">
<p data-start="1765" data-end="1796">College Festivals &amp; Carnivals</p>
</li>
<li data-start="1797" data-end="1834">
<p data-start="1799" data-end="1834">New Year &amp; Christmas Celebrations</p>
</li>
<li data-start="1835" data-end="1862">
<p data-start="1837" data-end="1862">Store Launches &amp; Events</p>
</li>
<li data-start="1863" data-end="1900">
<p data-start="1865" data-end="1900">Photography &amp; Videography Effects</p>
</li>
</ul>
<hr data-start="1902" data-end="1905">
<h1 data-start="1907" data-end="1926">📘 <strong data-start="1912" data-end="1926">How to Use</strong>
</h1>
<ol data-start="1928" data-end="2157">
<li data-start="1928" data-end="1963">
<p data-start="1931" data-end="1963">Shake the can well before use.</p>
</li>
<li data-start="1964" data-end="2020">
<p data-start="1967" data-end="2020">Hold bottle upright and spray from 2–3 ft distance.</p>
</li>
<li data-start="2021" data-end="2054">
<p data-start="2024" data-end="2054">Aim away from face and eyes.</p>
</li>
<li data-start="2055" data-end="2110">
<p data-start="2058" data-end="2110">For best results, use in open or ventilated areas.</p>
</li>
<li data-start="2111" data-end="2157">
<p data-start="2114" data-end="2157">After use, wipe surfaces with a damp cloth.</p>
</li>
</ol>
<hr data-start="2159" data-end="2162">
<h1 data-start="2164" data-end="2191">⚠️ <strong data-start="2169" data-end="2191">Safety Information</strong>
</h1>
<ul data-start="2193" data-end="2429">
<li data-start="2193" data-end="2253">
<p data-start="2195" data-end="2253">Do not spray directly on face, eyes, or sensitive areas.</p>
</li>
<li data-start="2254" data-end="2303">
<p data-start="2256" data-end="2303">Keep away from heat, flames, or hot surfaces.</p>
</li>
<li data-start="2304" data-end="2354">
<p data-start="2306" data-end="2354">Pressurised container—do not puncture or burn.</p>
</li>
<li data-start="2355" data-end="2386">
<p data-start="2357" data-end="2386">Store in a cool, dry place.</p>
</li>
<li data-start="2387" data-end="2429">
<p data-start="2389" data-end="2429">Adult supervision required for children.</p>
</li>
</ul>`,
    descriptionHtml: `<p data-start="265" data-end="633">Bring your celebrations to life with <strong data-start="302" data-end="327">DJ’s Party Snow Spray</strong>, the ultimate fun-filled foam spray designed to create thick, fluffy, snow-like effects in seconds. Whether it’s a <strong data-start="443" data-end="542">birthday, wedding, DJ night, New Year’s party, school event, photoshoot, or festive celebration</strong>, this spray instantly elevates the mood and transforms any space into a lively party zone.</p>
<p data-start="635" data-end="858">Formulated for <strong data-start="650" data-end="690">smooth, consistent spray performance</strong>, it covers a wide area with rich foam that lasts long yet cleans up effortlessly. Safe for use around kids and adults, and suitable for both indoor and outdoor events.</p>
<h3 data-start="888" data-end="919">✅ <strong data-start="894" data-end="917">Instant Snow Effect</strong>
</h3>
<p data-start="920" data-end="1027">Creates dense, white, fluffy foam that looks like real snow—perfect for party ambiance, videos, and photos.</p>
<h3 data-start="1029" data-end="1060">✅ <strong data-start="1035" data-end="1058">Safe &amp; Non-Staining</strong>
</h3>
<p data-start="1061" data-end="1147">Leaves no permanent marks on clothes, skin, walls, or décor. Easy to wipe or wash off.</p>
<h3 data-start="1149" data-end="1184">✅ <strong data-start="1155" data-end="1182">Smooth Spray Technology</strong>
</h3>
<p data-start="1185" data-end="1250">Engineered nozzle ensures uniform foam output with zero clogging.</p>
<h3 data-start="1252" data-end="1292">✅ <strong data-start="1258" data-end="1290">Perfect for All Celebrations</strong>
</h3>
<p data-start="1293" data-end="1397">Ideal for birthdays, weddings, concerts, New Year’s, Holi parties, Christmas events, concerts, and more.</p>
<h3 data-start="1399" data-end="1431">✅ <strong data-start="1405" data-end="1429">Indoor &amp; Outdoor Use</strong>
</h3>
<p data-start="1432" data-end="1513">Works equally well at home, party halls, clubs, schools, and large public events.</p>
<h3 data-start="1515" data-end="1544">✅ <strong data-start="1521" data-end="1542">Kids-Friendly Fun</strong>
</h3>
<p data-start="1545" data-end="1614">Moves with the excitement—lightweight and safe when used as directed.</p>
<h1 data-start="1621" data-end="1642">📦 <strong data-start="1626" data-end="1642">Where to Use</strong>
</h1>
<ul data-start="1644" data-end="1900">
<li data-start="1644" data-end="1667">
<p data-start="1646" data-end="1667">Parties &amp; DJ Nights</p>
</li>
<li data-start="1668" data-end="1701">
<p data-start="1670" data-end="1701">Weddings &amp; Pre-wedding Shoots</p>
</li>
<li data-start="1702" data-end="1731">
<p data-start="1704" data-end="1731">Birthdays &amp; Anniversaries</p>
</li>
<li data-start="1732" data-end="1762">
<p data-start="1734" data-end="1762">Dance Floors &amp; Stage Shows</p>
</li>
<li data-start="1763" data-end="1796">
<p data-start="1765" data-end="1796">College Festivals &amp; Carnivals</p>
</li>
<li data-start="1797" data-end="1834">
<p data-start="1799" data-end="1834">New Year &amp; Christmas Celebrations</p>
</li>
<li data-start="1835" data-end="1862">
<p data-start="1837" data-end="1862">Store Launches &amp; Events</p>
</li>
<li data-start="1863" data-end="1900">
<p data-start="1865" data-end="1900">Photography &amp; Videography Effects</p>
</li>
</ul>
<hr data-start="1902" data-end="1905">
<h1 data-start="1907" data-end="1926">📘 <strong data-start="1912" data-end="1926">How to Use</strong>
</h1>
<ol data-start="1928" data-end="2157">
<li data-start="1928" data-end="1963">
<p data-start="1931" data-end="1963">Shake the can well before use.</p>
</li>
<li data-start="1964" data-end="2020">
<p data-start="1967" data-end="2020">Hold bottle upright and spray from 2–3 ft distance.</p>
</li>
<li data-start="2021" data-end="2054">
<p data-start="2024" data-end="2054">Aim away from face and eyes.</p>
</li>
<li data-start="2055" data-end="2110">
<p data-start="2058" data-end="2110">For best results, use in open or ventilated areas.</p>
</li>
<li data-start="2111" data-end="2157">
<p data-start="2114" data-end="2157">After use, wipe surfaces with a damp cloth.</p>
</li>
</ol>
<hr data-start="2159" data-end="2162">
<h1 data-start="2164" data-end="2191">⚠️ <strong data-start="2169" data-end="2191">Safety Information</strong>
</h1>
<ul data-start="2193" data-end="2429">
<li data-start="2193" data-end="2253">
<p data-start="2195" data-end="2253">Do not spray directly on face, eyes, or sensitive areas.</p>
</li>
<li data-start="2254" data-end="2303">
<p data-start="2256" data-end="2303">Keep away from heat, flames, or hot surfaces.</p>
</li>
<li data-start="2304" data-end="2354">
<p data-start="2306" data-end="2354">Pressurised container—do not puncture or burn.</p>
</li>
<li data-start="2355" data-end="2386">
<p data-start="2357" data-end="2386">Store in a cool, dry place.</p>
</li>
<li data-start="2387" data-end="2429">
<p data-start="2389" data-end="2429">Adult supervision required for children.</p>
</li>
</ul>`,
    price: '1000.00',
    compareAtPrice: null,
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/6104.png?v=1765450374', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Cake_Snow_Spray.png?v=1765607912', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Party_Snow.png?v=1765607928', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Birthday_Snow.png?v=1765608056'],
    variants: [
      { id: 49783609000182, title: 'Default Title', price: '1000.00', sku: '', available: true },
    ],
    productType: 'Essentials',
    tags: ['Consumer'],
    vendor: 'Micron Aerosols™',
    series: 'S6000',
    collection: 'speciality-products',
  },
  {
    id: 9235577372918,
    handle: '1130-spraymold-extrusion-pro-spinneret-cleaning-lubrication',
    title: '1300 SprayMold Extrusion Pro | Spinneret Cleaning & Lubrication',
    description: `<p data-start="272" data-end="571">1300 SprayMold Extrusion Pro is a <strong data-start="303" data-end="397">premium high-temperature silicone-based spinneret cleaner and anti-stick lubrication spray</strong>, engineered specifically for the demanding needs of <strong data-start="450" data-end="570">synthetic fibre production, melt-spinning lines, monofilament extrusion, and high-shear polymer processing equipment</strong>.</p>
<p data-start="573" data-end="832">Formulated with <strong data-start="589" data-end="631">advanced heat-stable silicone polymers</strong>, 1300 SprayMold Extrusion Pro prevents polymer build-up, eliminates die face sticking, reduces carbonisation, and maintains uniform filament flow — ensuring <strong data-start="775" data-end="831">maximum output efficiency and superior fibre quality</strong>.</p>
<p data-start="834" data-end="1029">Whether you are extruding <strong data-start="860" data-end="918">nylon, polyester, PP, PET, or specialty polymer fibres</strong>, 1300 SprayMold Extrusion Pro  enhances spinneret cleanliness, extends service life, and stabilises production cycles.</p>
<h2 data-start="1036" data-end="1069"><strong data-start="1039" data-end="1069">🌟 Key Features &amp; Benefits</strong></h2>
<h3 data-start="1071" data-end="1108"><strong data-start="1075" data-end="1108">✔ High-Temperature Resistance</strong></h3>
<p data-start="1109" data-end="1233">Performs reliably under <strong data-start="1133" data-end="1171">extreme melt-spinning temperatures</strong>, preventing thermal degradation and carbon residue formation.</p>
<h3 data-start="1235" data-end="1278"><strong data-start="1239" data-end="1278">✔ Anti-Stick &amp; Anti-Build-Up Action</strong></h3>
<p data-start="1279" data-end="1426">Creates a clean, non-reactive, low-friction surface on spinnerets, dies, and nozzles — reducing polymer adhesion and improving filament uniformity.</p>
<h3 data-start="1428" data-end="1471"><strong data-start="1432" data-end="1471">✔ Optimised for Melt-Spinning Lines</strong></h3>
<p data-start="1472" data-end="1566">Ensures smoother polymer flow, consistent denier, and fewer broken filaments, contributing to:</p>
<ul data-start="1568" data-end="1647">
<li data-start="1568" data-end="1592">
<p data-start="1570" data-end="1592">Better fibre quality</p>
</li>
<li data-start="1593" data-end="1618">
<p data-start="1595" data-end="1618">Reduced line stoppage</p>
</li>
<li data-start="1619" data-end="1647">
<p data-start="1621" data-end="1647">Lower maintenance effort</p>
</li>
</ul>
<h3 data-start="1649" data-end="1700"><strong data-start="1653" data-end="1700">✔ Cleaner Spinnerets, Longer Equipment Life</strong></h3>
<p data-start="1701" data-end="1805">Regular use helps minimise clogging, scorching, and die wear, reducing downtime for mechanical cleaning.</p>
<h3 data-start="1807" data-end="1849"><strong data-start="1811" data-end="1849">✔ Ready-to-Use Aerosol Convenience</strong></h3>
<p data-start="1850" data-end="1981">Precisely sprays a thin, even film without excessive build-up or dripping, ensuring quick application during scheduled maintenance.</p>
<h3 data-start="1983" data-end="2027"><strong data-start="1987" data-end="2027">✔ Safe on Metals &amp; High-Grade Alloys</strong></h3>
<p data-start="2028" data-end="2119">Compatible with stainless steels, hardened extrusion alloys, and plated spinneret surfaces.</p>
<hr data-start="2121" data-end="2124">
<h2 data-start="2126" data-end="2154"><strong data-start="2129" data-end="2154">🧵 Ideal Applications</strong></h2>
<ul data-start="2156" data-end="2460">
<li data-start="2156" data-end="2197">
<p data-start="2158" data-end="2197">Melt-spinning &amp; fibre extrusion lines</p>
</li>
<li data-start="2198" data-end="2259">
<p data-start="2200" data-end="2259">Polyester, nylon, PP, PET, and specialty fibre production</p>
</li>
<li data-start="2260" data-end="2297">
<p data-start="2262" data-end="2297">Filament &amp; monofilament extrusion</p>
</li>
<li data-start="2298" data-end="2348">
<p data-start="2300" data-end="2348">Spinnerets, dies, capillary nozzles, bush bars</p>
</li>
<li data-start="2349" data-end="2409">
<p data-start="2351" data-end="2409">Hot runner nozzles, die plates &amp; polymer flow components</p>
</li>
<li data-start="2410" data-end="2460">
<p data-start="2412" data-end="2460">Preventive maintenance during line changeovers</p>
</li>
</ul>
<hr data-start="2462" data-end="2465">
<h2 data-start="2467" data-end="2488"><strong data-start="2470" data-end="2488">🛠️ How to Use</strong></h2>
<ol data-start="2490" data-end="2936">
<li data-start="2490" data-end="2577">
<p data-start="2493" data-end="2577"><strong data-start="2493" data-end="2536">Shut down or isolate the spinneret area</strong> where cleaning or coating is required.</p>
</li>
<li data-start="2578" data-end="2638">
<p data-start="2581" data-end="2638"><strong data-start="2581" data-end="2609">Shake the can thoroughly</strong> for a uniform formulation.</p>
</li>
<li data-start="2639" data-end="2738">
<p data-start="2642" data-end="2738">Hold 15–20 cm from the surface and <strong data-start="2677" data-end="2704">spray a thin, even film</strong> over the spinneret or die face.</p>
</li>
<li data-start="2739" data-end="2792">
<p data-start="2742" data-end="2792">Allow a few seconds for the lubricant to settle.</p>
</li>
<li data-start="2793" data-end="2863">
<p data-start="2796" data-end="2863">Resume operation or proceed with mechanical cleaning as required.</p>
</li>
<li data-start="2864" data-end="2936">
<p data-start="2867" data-end="2936">Reapply during maintenance cycles for optimal anti-stick performance.</p>
</li>
</ol>
<hr data-start="2938" data-end="2941">
<h2 data-start="2943" data-end="2970"><strong data-start="2946" data-end="2970">⚠️ Safety &amp; Handling</strong></h2>
<ul data-start="2972" data-end="3190">
<li data-start="2972" data-end="3005">
<p data-start="2974" data-end="3005">Use in well-ventilated areas.</p>
</li>
<li data-start="3006" data-end="3078">
<p data-start="3008" data-end="3078">Avoid spraying on hot surfaces above recommended temperature limits.</p>
</li>
<li data-start="3079" data-end="3140">
<p data-start="3081" data-end="3140">Keep away from ignition sources; contents under pressure.</p>
</li>
<li data-start="3141" data-end="3190">
<p data-start="3143" data-end="3190">Refer to the MSDS for complete safety guidance.</p>
</li>
</ul>
<hr data-start="3192" data-end="3195">
<h2 data-start="3197" data-end="3240"><strong data-start="3200" data-end="3240">🌐 Why Choose Extrusion Pro?</strong></h2>
<p data-start="3242" data-end="3509">1300 SprayMold Extrusion Pro delivers <strong data-start="3273" data-end="3330">industry-leading cleaning and lubrication performance</strong>, providing textile manufacturers and fibre producers with a dependable solution to improve productivity, reduce downtime, and achieve consistent filament excellence — every time.</p>`,
    descriptionHtml: `<p data-start="272" data-end="571">1300 SprayMold Extrusion Pro is a <strong data-start="303" data-end="397">premium high-temperature silicone-based spinneret cleaner and anti-stick lubrication spray</strong>, engineered specifically for the demanding needs of <strong data-start="450" data-end="570">synthetic fibre production, melt-spinning lines, monofilament extrusion, and high-shear polymer processing equipment</strong>.</p>
<p data-start="573" data-end="832">Formulated with <strong data-start="589" data-end="631">advanced heat-stable silicone polymers</strong>, 1300 SprayMold Extrusion Pro prevents polymer build-up, eliminates die face sticking, reduces carbonisation, and maintains uniform filament flow — ensuring <strong data-start="775" data-end="831">maximum output efficiency and superior fibre quality</strong>.</p>
<p data-start="834" data-end="1029">Whether you are extruding <strong data-start="860" data-end="918">nylon, polyester, PP, PET, or specialty polymer fibres</strong>, 1300 SprayMold Extrusion Pro  enhances spinneret cleanliness, extends service life, and stabilises production cycles.</p>
<h2 data-start="1036" data-end="1069"><strong data-start="1039" data-end="1069">🌟 Key Features &amp; Benefits</strong></h2>
<h3 data-start="1071" data-end="1108"><strong data-start="1075" data-end="1108">✔ High-Temperature Resistance</strong></h3>
<p data-start="1109" data-end="1233">Performs reliably under <strong data-start="1133" data-end="1171">extreme melt-spinning temperatures</strong>, preventing thermal degradation and carbon residue formation.</p>
<h3 data-start="1235" data-end="1278"><strong data-start="1239" data-end="1278">✔ Anti-Stick &amp; Anti-Build-Up Action</strong></h3>
<p data-start="1279" data-end="1426">Creates a clean, non-reactive, low-friction surface on spinnerets, dies, and nozzles — reducing polymer adhesion and improving filament uniformity.</p>
<h3 data-start="1428" data-end="1471"><strong data-start="1432" data-end="1471">✔ Optimised for Melt-Spinning Lines</strong></h3>
<p data-start="1472" data-end="1566">Ensures smoother polymer flow, consistent denier, and fewer broken filaments, contributing to:</p>
<ul data-start="1568" data-end="1647">
<li data-start="1568" data-end="1592">
<p data-start="1570" data-end="1592">Better fibre quality</p>
</li>
<li data-start="1593" data-end="1618">
<p data-start="1595" data-end="1618">Reduced line stoppage</p>
</li>
<li data-start="1619" data-end="1647">
<p data-start="1621" data-end="1647">Lower maintenance effort</p>
</li>
</ul>
<h3 data-start="1649" data-end="1700"><strong data-start="1653" data-end="1700">✔ Cleaner Spinnerets, Longer Equipment Life</strong></h3>
<p data-start="1701" data-end="1805">Regular use helps minimise clogging, scorching, and die wear, reducing downtime for mechanical cleaning.</p>
<h3 data-start="1807" data-end="1849"><strong data-start="1811" data-end="1849">✔ Ready-to-Use Aerosol Convenience</strong></h3>
<p data-start="1850" data-end="1981">Precisely sprays a thin, even film without excessive build-up or dripping, ensuring quick application during scheduled maintenance.</p>
<h3 data-start="1983" data-end="2027"><strong data-start="1987" data-end="2027">✔ Safe on Metals &amp; High-Grade Alloys</strong></h3>
<p data-start="2028" data-end="2119">Compatible with stainless steels, hardened extrusion alloys, and plated spinneret surfaces.</p>
<hr data-start="2121" data-end="2124">
<h2 data-start="2126" data-end="2154"><strong data-start="2129" data-end="2154">🧵 Ideal Applications</strong></h2>
<ul data-start="2156" data-end="2460">
<li data-start="2156" data-end="2197">
<p data-start="2158" data-end="2197">Melt-spinning &amp; fibre extrusion lines</p>
</li>
<li data-start="2198" data-end="2259">
<p data-start="2200" data-end="2259">Polyester, nylon, PP, PET, and specialty fibre production</p>
</li>
<li data-start="2260" data-end="2297">
<p data-start="2262" data-end="2297">Filament &amp; monofilament extrusion</p>
</li>
<li data-start="2298" data-end="2348">
<p data-start="2300" data-end="2348">Spinnerets, dies, capillary nozzles, bush bars</p>
</li>
<li data-start="2349" data-end="2409">
<p data-start="2351" data-end="2409">Hot runner nozzles, die plates &amp; polymer flow components</p>
</li>
<li data-start="2410" data-end="2460">
<p data-start="2412" data-end="2460">Preventive maintenance during line changeovers</p>
</li>
</ul>
<hr data-start="2462" data-end="2465">
<h2 data-start="2467" data-end="2488"><strong data-start="2470" data-end="2488">🛠️ How to Use</strong></h2>
<ol data-start="2490" data-end="2936">
<li data-start="2490" data-end="2577">
<p data-start="2493" data-end="2577"><strong data-start="2493" data-end="2536">Shut down or isolate the spinneret area</strong> where cleaning or coating is required.</p>
</li>
<li data-start="2578" data-end="2638">
<p data-start="2581" data-end="2638"><strong data-start="2581" data-end="2609">Shake the can thoroughly</strong> for a uniform formulation.</p>
</li>
<li data-start="2639" data-end="2738">
<p data-start="2642" data-end="2738">Hold 15–20 cm from the surface and <strong data-start="2677" data-end="2704">spray a thin, even film</strong> over the spinneret or die face.</p>
</li>
<li data-start="2739" data-end="2792">
<p data-start="2742" data-end="2792">Allow a few seconds for the lubricant to settle.</p>
</li>
<li data-start="2793" data-end="2863">
<p data-start="2796" data-end="2863">Resume operation or proceed with mechanical cleaning as required.</p>
</li>
<li data-start="2864" data-end="2936">
<p data-start="2867" data-end="2936">Reapply during maintenance cycles for optimal anti-stick performance.</p>
</li>
</ol>
<hr data-start="2938" data-end="2941">
<h2 data-start="2943" data-end="2970"><strong data-start="2946" data-end="2970">⚠️ Safety &amp; Handling</strong></h2>
<ul data-start="2972" data-end="3190">
<li data-start="2972" data-end="3005">
<p data-start="2974" data-end="3005">Use in well-ventilated areas.</p>
</li>
<li data-start="3006" data-end="3078">
<p data-start="3008" data-end="3078">Avoid spraying on hot surfaces above recommended temperature limits.</p>
</li>
<li data-start="3079" data-end="3140">
<p data-start="3081" data-end="3140">Keep away from ignition sources; contents under pressure.</p>
</li>
<li data-start="3141" data-end="3190">
<p data-start="3143" data-end="3190">Refer to the MSDS for complete safety guidance.</p>
</li>
</ul>
<hr data-start="3192" data-end="3195">
<h2 data-start="3197" data-end="3240"><strong data-start="3200" data-end="3240">🌐 Why Choose Extrusion Pro?</strong></h2>
<p data-start="3242" data-end="3509">1300 SprayMold Extrusion Pro delivers <strong data-start="3273" data-end="3330">industry-leading cleaning and lubrication performance</strong>, providing textile manufacturers and fibre producers with a dependable solution to improve productivity, reduce downtime, and achieve consistent filament excellence — every time.</p>`,
    price: '600.00',
    compareAtPrice: '550.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/1130A.png?v=1765444022', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Spinneret_Lubrication_Extrusion_Pro.png?v=1765444475'],
    variants: [
      { id: 49783512367350, title: 'Default Title', price: '600.00', sku: '', available: true },
    ],
    productType: '',
    tags: [],
    vendor: 'Micron Aerosols™',
    series: 'S1000',
    collection: 'speciality-products',
  },
  {
    id: 9140742815990,
    handle: '3708-protektor-hydracoat-5ltrs',
    title: '3708 - Protektor HydraCoat  5Ltrs',
    description: `<p><img alt=""><img alt="">PRODUCT DESCRIPTION: Protektor HydraCoat is a fast drying single component Polymer Resin lacquer to protect Wooden Surfaces from harsh environments, moisture, humidity, salinity, dirt &amp; dust, fungus, caustic vapors, etc.</p>
<p><img alt="">BENEFITS:</p>
<ul>
<li>Protects Wooden Surfaces from harsh environments</li>
<li>Fast Drying and dry to touch time of less than few minutes </li>
<li>Single component Lacquer <br>
</li>
<li>Protects against Humidity, Salinity and Moisture</li>
<li>
<img src="data:image/png;base64,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" alt="">Transparent</li>
<li>Can be removed with Protektor Thinner </li>
<li>Descent resistance to organic solvents</li>
<li>Descent resistance to Fungal Growth, dust, dirt</li>
</ul>
<p>DIRECTIONS TO USE: The cleaned Wooden Surface are to be brushed, sprayed or dipped in the HydraCoat for in accordance to the relevant processes CAUTION: Keep out of reach from children.Do not spray in eyes or mouth If spray gets in eyes, flush with water. If swallowed do not induce vomitting, Call Physician</p>`,
    descriptionHtml: `<p><img alt=""><img alt="">PRODUCT DESCRIPTION: Protektor HydraCoat is a fast drying single component Polymer Resin lacquer to protect Wooden Surfaces from harsh environments, moisture, humidity, salinity, dirt &amp; dust, fungus, caustic vapors, etc.</p>
<p><img alt="">BENEFITS:</p>
<ul>
<li>Protects Wooden Surfaces from harsh environments</li>
<li>Fast Drying and dry to touch time of less than few minutes </li>
<li>Single component Lacquer <br>
</li>
<li>Protects against Humidity, Salinity and Moisture</li>
<li>
<img src="data:image/png;base64,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" alt="">Transparent</li>
<li>Can be removed with Protektor Thinner </li>
<li>Descent resistance to organic solvents</li>
<li>Descent resistance to Fungal Growth, dust, dirt</li>
</ul>
<p>DIRECTIONS TO USE: The cleaned Wooden Surface are to be brushed, sprayed or dipped in the HydraCoat for in accordance to the relevant processes CAUTION: Keep out of reach from children.Do not spray in eyes or mouth If spray gets in eyes, flush with water. If swallowed do not induce vomitting, Call Physician</p>`,
    price: '5200.00',
    compareAtPrice: '6000.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/3708.png?v=1754928312', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Brushing_Door.png?v=1754930794', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Wooden_Door.png?v=1754930796', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Damaged_Door.jpg?v=1754930984'],
    variants: [
      { id: 48944268476662, title: 'Default Title', price: '5200.00', sku: '3708', available: true },
    ],
    productType: 'Specialty Products',
    tags: ['Automotive', 'Electronics', 'Speciality Products', 'Welding'],
    vendor: 'Micron Aerosols™',
    series: 'S2000',
    collection: 'industrial-welding-fabrication',
  },
  {
    id: 9127927873782,
    handle: '3608-protektor-polycoat-uv-5ltrs',
    title: '3608 - Protektor PolyCoat UV 5Ltrs',
    description: `<h2 data-end="373" data-start="342"><strong data-end="371" data-start="348">Product Description</strong></h2>
<p data-end="723" data-start="374">Protektor PolyCoat UV is a high-performance <strong data-end="473" data-start="412"> photopolymer resin coating</strong> specifically engineered to protect <strong data-end="529" data-start="509">PCBs</strong> from <strong data-end="548" data-start="535">corrosion</strong>, oxidation, and harsh environmental conditions. It forms a durable, transparent film with <strong data-end="661" data-start="639">excellent adhesion</strong>, superior <strong data-end="697" data-start="672">mechanical properties</strong>, and chemical resistance.</p>
<p data-end="1044" data-start="725">The coating cures instantly when exposed to a <strong data-end="812" data-start="771">medium-pressure mercury vapor UV lamp</strong>, delivering rapid line speeds and high productivity. With a <strong data-end="922" data-start="873">viscosity of 21 seconds (Zahn Cup #4 at 25°C)</strong> and <strong data-end="952" data-start="927">density of 1.13 g/cm³</strong>, the formulation is optimized for spray, dip, or roller application in industrial settings.</p>
<hr data-end="1049" data-start="1046">
<h2 data-end="1072" data-start="1051"><strong data-end="1072" data-start="1056">Key Benefits</strong></h2>
<ul data-end="1627" data-start="1074">
<li data-end="1160" data-start="1074">
<p data-end="1160" data-start="1076"><strong data-end="1090" data-start="1076">UV Curable</strong>: Rapid cure under UV light; improves throughput and reduces downtime.</p>
</li>
<li data-end="1251" data-start="1161">
<p data-end="1251" data-start="1163"><strong data-end="1184" data-start="1163">Superior Adhesion</strong>: Passes <strong data-end="1213" data-start="1193">Cross Hatch Test</strong>, ensuring excellent bond with metals.</p>
</li>
<li data-end="1348" data-start="1252">
<p data-end="1348" data-start="1254"><strong data-end="1283" data-start="1254">Anti-Corrosion Protection</strong>: Provides long-term resistance to rust, oxidation, and moisture.</p>
</li>
<li data-end="1447" data-start="1349">
<p data-end="1447" data-start="1351"><strong data-end="1367" data-start="1351">High Clarity</strong>: Dries clear and does not interfere with visual inspection of underlying parts.</p>
</li>
<li data-end="1537" data-start="1448">
<p data-end="1537" data-start="1450"><strong data-end="1486" data-start="1450">Mechanical &amp; Chemical Resistance</strong>: Withstands wear, abrasion, and chemical exposure.</p>
</li>
<li data-end="1627" data-start="1538">
<p data-end="1627" data-start="1540"><strong data-end="1572" data-start="1540">VOC-Compliant &amp; Solvent-Free</strong>: Reduced environmental impact and safer workplace use.</p>
</li>
</ul>
<hr data-end="1632" data-start="1629">
<h2 data-end="1657" data-start="1634"><strong data-end="1657" data-start="1641">Applications</strong></h2>
<ul data-end="1940" data-start="1659">
<li data-end="1756" data-start="1659">
<p data-end="1756" data-start="1661">Protective coating for <strong>PCBs,</strong> <strong data-end="1699" data-start="1684">metal tools</strong>, <strong data-end="1713" data-start="1701">fixtures</strong>, <strong data-end="1731" data-start="1715">sheet metals</strong>, and <strong data-end="1755" data-start="1737">machined parts</strong>.</p>
</li>
<li data-end="1863" data-start="1757">
<p data-end="1863" data-start="1759">Ideal for use in <strong data-end="1790" data-start="1776">automotive</strong>, <strong data-end="1805" data-start="1792">aerospace</strong>, <strong data-end="1831" data-start="1807">industrial machinery</strong>, and <strong data-end="1862" data-start="1837">precision electronics</strong>.</p>
</li>
<li data-end="1940" data-start="1864">
<p data-end="1940" data-start="1866">Suitable for <strong data-end="1906" data-start="1879">in-line UV cure systems</strong> or <strong data-end="1939" data-start="1910">batch-curing environments</strong>.</p>
</li>
</ul>
<hr data-end="1945" data-start="1942">
<h2 data-end="1981" data-start="1947"><strong data-end="1981" data-start="1953">Technical Specifications</strong></h2>
<div class="_tableContainer_16hzy_1">
<div class="_tableWrapper_16hzy_14 group flex w-fit flex-col-reverse" tabindex="-1">
<table class="w-fit min-w-(--thread-content-width)" data-end="2819" data-start="1983">
<thead data-end="2058" data-start="1983">
<tr data-end="2058" data-start="1983">
<th data-col-size="sm" data-end="2010" data-start="1983">Property</th>
<th data-col-size="md" data-end="2058" data-start="2010">Specification</th>
</tr>
</thead>
<tbody data-end="2819" data-start="2135">
<tr data-end="2210" data-start="2135">
<td data-col-size="sm" data-end="2162" data-start="2135"><strong data-end="2154" data-start="2137">Curing Method</strong></td>
<td data-col-size="md" data-end="2210" data-start="2162">UV – Medium Pressure Hg Vapor Lamp</td>
</tr>
<tr data-end="2287" data-start="2211">
<td data-col-size="sm" data-end="2238" data-start="2211"><strong data-end="2227" data-start="2213">Lamp Power</strong></td>
<td data-col-size="md" data-end="2287" data-start="2238">300 W/in (Total 3 kW)</td>
</tr>
<tr data-end="2363" data-start="2288">
<td data-col-size="sm" data-end="2315" data-start="2288"><strong data-end="2309" data-start="2290">Curing Distance</strong></td>
<td data-col-size="md" data-end="2363" data-start="2315">2 inches from lamp surface</td>
</tr>
<tr data-end="2439" data-start="2364">
<td data-col-size="sm" data-end="2391" data-start="2364"><strong data-end="2382" data-start="2366">Curing Speed</strong></td>
<td data-col-size="md" data-end="2439" data-start="2391">&gt; 100 ft/min</td>
</tr>
<tr data-end="2515" data-start="2440">
<td data-col-size="sm" data-end="2467" data-start="2440"><strong data-end="2455" data-start="2442">Viscosity</strong></td>
<td data-end="2515" data-start="2467" data-col-size="md">21 sec (Zahn Cup #4 @ 25°C)</td>
</tr>
<tr data-end="2591" data-start="2516">
<td data-col-size="sm" data-end="2543" data-start="2516"><strong data-end="2529" data-start="2518">Density</strong></td>
<td data-col-size="md" data-end="2591" data-start="2543">1.13 g/cm³</td>
</tr>
<tr data-end="2667" data-start="2592">
<td data-col-size="sm" data-end="2619" data-start="2592"><strong data-end="2608" data-start="2594">Appearance</strong></td>
<td data-col-size="md" data-end="2667" data-start="2619">Transparent, glossy film</td>
</tr>
<tr data-end="2743" data-start="2668">
<td data-col-size="sm" data-end="2695" data-start="2668"><strong data-end="2682" data-start="2670">Adhesion</strong></td>
<td data-col-size="md" data-end="2743" data-start="2695">Passes Cross Hatch Adhesion Test (ASTM D3359)</td>
</tr>
<tr data-end="2819" data-start="2744">
<td data-col-size="sm" data-end="2771" data-start="2744"><strong data-end="2763" data-start="2746">Film Hardness</strong></td>
<td data-col-size="md" data-end="2819" data-start="2771">Medium to Hard (Shore D scale)</td>
</tr>
</tbody>
</table>
<div class="sticky end-(--thread-content-margin) h-0 self-end select-none">
<div class="absolute end-0 flex items-end"><span data-state="closed" class=""><button class="bg-token-bg-primary hover:bg-token-bg-tertiary text-token-text-secondary my-1 rounded-sm p-1 transition-opacity group-[:not(:hover):not(:focus-within)]:pointer-events-none group-[:not(:hover):not(:focus-within)]:opacity-0"><svg class="icon-md-heavy" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewbox="0 0 20 20" height="20" width="20"><path d="M12.668 10.667C12.668 9.95614 12.668 9.46258 12.6367 9.0791C12.6137 8.79732 12.5758 8.60761 12.5244 8.46387L12.4688 8.33399C12.3148 8.03193 12.0803 7.77885 11.793 7.60254L11.666 7.53125C11.508 7.45087 11.2963 7.39395 10.9209 7.36328C10.5374 7.33197 10.0439 7.33203 9.33301 7.33203H6.5C5.78896 7.33203 5.29563 7.33195 4.91211 7.36328C4.63016 7.38632 4.44065 7.42413 4.29688 7.47559L4.16699 7.53125C3.86488 7.68518 3.61186 7.9196 3.43555 8.20703L3.36524 8.33399C3.28478 8.49198 3.22795 8.70352 3.19727 9.0791C3.16595 9.46259 3.16504 9.95611 3.16504 10.667V13.5C3.16504 14.211 3.16593 14.7044 3.19727 15.0879C3.22797 15.4636 3.28473 15.675 3.36524 15.833L3.43555 15.959C3.61186 16.2466 3.86474 16.4807 4.16699 16.6348L4.29688 16.6914C4.44063 16.7428 4.63025 16.7797 4.91211 16.8027C5.29563 16.8341 5.78896 16.835 6.5 16.835H9.33301C10.0439 16.835 10.5374 16.8341 10.9209 16.8027C11.2965 16.772 11.508 16.7152 11.666 16.6348L11.793 16.5645C12.0804 16.3881 12.3148 16.1351 12.4688 15.833L12.5244 15.7031C12.5759 15.5594 12.6137 15.3698 12.6367 15.0879C12.6681 14.7044 12.668 14.211 12.668 13.5V10.667ZM13.998 12.665C14.4528 12.6634 14.8011 12.6602 15.0879 12.6367C15.4635 12.606 15.675 12.5492 15.833 12.4688L15.959 12.3975C16.2466 12.2211 16.4808 11.9682 16.6348 11.666L16.6914 11.5361C16.7428 11.3924 16.7797 11.2026 16.8027 10.9209C16.8341 10.5374 16.835 10.0439 16.835 9.33301V6.5C16.835 5.78896 16.8341 5.29563 16.8027 4.91211C16.7797 4.63025 16.7428 4.44063 16.6914 4.29688L16.6348 4.16699C16.4807 3.86474 16.2466 3.61186 15.959 3.43555L15.833 3.36524C15.675 3.28473 15.4636 3.22797 15.0879 3.19727C14.7044 3.16593 14.211 3.16504 13.5 3.16504H10.667C9.9561 3.16504 9.46259 3.16595 9.0791 3.19727C8.79739 3.22028 8.6076 3.2572 8.46387 3.30859L8.33399 3.36524C8.03176 3.51923 7.77886 3.75343 7.60254 4.04102L7.53125 4.16699C7.4508 4.32498 7.39397 4.53655 7.36328 4.91211C7.33985 5.19893 7.33562 5.54719 7.33399 6.00195H9.33301C10.022 6.00195 10.5791 6.00131 11.0293 6.03809C11.4873 6.07551 11.8937 6.15471 12.2705 6.34668L12.4883 6.46875C12.984 6.7728 13.3878 7.20854 13.6533 7.72949L13.7197 7.87207C13.8642 8.20859 13.9292 8.56974 13.9619 8.9707C13.9987 9.42092 13.998 9.97799 13.998 10.667V12.665ZM18.165 9.33301C18.165 10.022 18.1657 10.5791 18.1289 11.0293C18.0961 11.4302 18.0311 11.7914 17.8867 12.1279L17.8203 12.2705C17.5549 12.7914 17.1509 13.2272 16.6553 13.5313L16.4365 13.6533C16.0599 13.8452 15.6541 13.9245 15.1963 13.9619C14.8593 13.9895 14.4624 13.9935 13.9951 13.9951C13.9935 14.4624 13.9895 14.8593 13.9619 15.1963C13.9292 15.597 13.864 15.9576 13.7197 16.2939L13.6533 16.4365C13.3878 16.9576 12.9841 17.3941 12.4883 17.6982L12.2705 17.8203C11.8937 18.0123 11.4873 18.0915 11.0293 18.1289C10.5791 18.1657 10.022 18.165 9.33301 18.165H6.5C5.81091 18.165 5.25395 18.1657 4.80371 18.1289C4.40306 18.0962 4.04235 18.031 3.70606 17.8867L3.56348 17.8203C3.04244 17.5548 2.60585 17.151 2.30176 16.6553L2.17969 16.4365C1.98788 16.0599 1.90851 15.6541 1.87109 15.1963C1.83431 14.746 1.83496 14.1891 1.83496 13.5V10.667C1.83496 9.978 1.83432 9.42091 1.87109 8.9707C1.90851 8.5127 1.98772 8.10625 2.17969 7.72949L2.30176 7.51172C2.60586 7.0159 3.04236 6.6122 3.56348 6.34668L3.70606 6.28027C4.04237 6.136 4.40303 6.07083 4.80371 6.03809C5.14051 6.01057 5.53708 6.00551 6.00391 6.00391C6.00551 5.53708 6.01057 5.14051 6.03809 4.80371C6.0755 4.34588 6.15483 3.94012 6.34668 3.56348L6.46875 3.34473C6.77282 2.84912 7.20856 2.44514 7.72949 2.17969L7.87207 2.11328C8.20855 1.96886 8.56979 1.90385 8.9707 1.87109C9.42091 1.83432 9.978 1.83496 10.667 1.83496H13.5C14.1891 1.83496 14.746 1.83431 15.1963 1.87109C15.6541 1.90851 16.0599 1.98788 16.4365 2.17969L16.6553 2.30176C17.151 2.60585 17.5548 3.04244 17.8203 3.56348L17.8867 3.70606C18.031 4.04235 18.0962 4.40306 18.1289 4.80371C18.1657 5.25395 18.165 5.81091 18.165 6.5V9.33301Z"></path></svg></button></span></div>
</div>
</div>
</div>
<hr data-end="2824" data-start="2821">
<h2 data-end="2854" data-start="2826">🧴 <strong data-end="2854" data-start="2832">Directions for Use</strong>
</h2>
<ol data-end="3568" data-start="2856">
<li data-end="3042" data-start="2856">
<p data-end="2884" data-start="2859"><strong data-end="2882" data-start="2859">Surface Preparation</strong></p>
<ul data-end="3042" data-start="2888">
<li data-end="2972" data-start="2888">
<p data-end="2972" data-start="2890">Ensure metal surface is <strong data-end="2928" data-start="2914">clean, dry</strong>, and <strong data-end="2971" data-start="2934">free from oil, dust, or oxidation</strong>.</p>
</li>
<li data-end="3042" data-start="2976">
<p data-end="3042" data-start="2978">Use an appropriate degreaser or solvent wipe to prepare surface.</p>
</li>
</ul>
</li>
<li data-end="3185" data-start="3044">
<p data-end="3072" data-start="3047"><strong data-end="3070" data-start="3047">Application Methods</strong></p>
<ul data-end="3185" data-start="3076">
<li data-end="3129" data-start="3076">
<p data-end="3129" data-start="3078"><strong data-end="3101" data-start="3078">Spray, dip, or roll</strong> uniformly over the surface.</p>
</li>
<li data-end="3185" data-start="3133">
<p data-end="3185" data-start="3135">Recommended wet film thickness: <strong data-end="3184" data-start="3167">30–50 microns</strong>.</p>
</li>
</ul>
</li>
<li data-end="3422" data-start="3187">
<p data-end="3213" data-start="3190"><strong data-end="3211" data-start="3190">UV Curing Process</strong></p>
<ul data-end="3422" data-start="3217">
<li data-end="3291" data-start="3217">
<p data-end="3291" data-start="3219">Use <strong data-end="3261" data-start="3223">medium pressure mercury vapor lamp</strong> (300 W/in; 3 kW total power).</p>
</li>
<li data-end="3351" data-start="3295">
<p data-end="3351" data-start="3297">Maintain <strong data-end="3332" data-start="3306">2-inch curing distance</strong> from lamp surface.</p>
</li>
<li data-end="3422" data-start="3355">
<p data-end="3422" data-start="3357">Pass substrate under lamp at <strong data-end="3401" data-start="3386">&gt;100 ft/min</strong> for optimal results.</p>
</li>
</ul>
</li>
<li data-end="3568" data-start="3424">
<p data-end="3451" data-start="3427"><strong data-end="3449" data-start="3427">Post-Cure Handling</strong></p>
<ul data-end="3568" data-start="3455">
<li data-end="3505" data-start="3455">
<p data-end="3505" data-start="3457">Cured surface is ready for handling immediately.</p>
</li>
<li data-end="3568" data-start="3509">
<p data-end="3568" data-start="3511">Full chemical resistance may develop within <strong data-end="3567" data-start="3555">24 hours</strong>.</p>
</li>
</ul>
</li>
</ol>
<hr data-end="3573" data-start="3570">
<h2 data-end="3596" data-start="3575"><strong data-end="3596" data-start="3581">Precautions</strong></h2>
<ul data-end="3892" data-start="3598">
<li data-end="3677" data-start="3598">
<p data-end="3677" data-start="3600">Store in a <strong data-end="3636" data-start="3611">cool, dark, dry place</strong> away from sunlight and ignition sources.</p>
</li>
<li data-end="3750" data-start="3678">
<p data-end="3750" data-start="3680">Avoid skin or eye contact. Use appropriate <strong data-end="3730" data-start="3723">PPE</strong> during application.</p>
</li>
<li data-end="3812" data-start="3751">
<p data-end="3812" data-start="3753">Do not use in confined spaces without adequate ventilation.</p>
</li>
<li data-end="3892" data-start="3813">
<p data-end="3892" data-start="3815">Ensure <strong data-end="3843" data-start="3822">UV safety shields</strong> are in place to protect operators during curing.</p>
</li>
</ul>`,
    descriptionHtml: `<h2 data-end="373" data-start="342"><strong data-end="371" data-start="348">Product Description</strong></h2>
<p data-end="723" data-start="374">Protektor PolyCoat UV is a high-performance <strong data-end="473" data-start="412"> photopolymer resin coating</strong> specifically engineered to protect <strong data-end="529" data-start="509">PCBs</strong> from <strong data-end="548" data-start="535">corrosion</strong>, oxidation, and harsh environmental conditions. It forms a durable, transparent film with <strong data-end="661" data-start="639">excellent adhesion</strong>, superior <strong data-end="697" data-start="672">mechanical properties</strong>, and chemical resistance.</p>
<p data-end="1044" data-start="725">The coating cures instantly when exposed to a <strong data-end="812" data-start="771">medium-pressure mercury vapor UV lamp</strong>, delivering rapid line speeds and high productivity. With a <strong data-end="922" data-start="873">viscosity of 21 seconds (Zahn Cup #4 at 25°C)</strong> and <strong data-end="952" data-start="927">density of 1.13 g/cm³</strong>, the formulation is optimized for spray, dip, or roller application in industrial settings.</p>
<hr data-end="1049" data-start="1046">
<h2 data-end="1072" data-start="1051"><strong data-end="1072" data-start="1056">Key Benefits</strong></h2>
<ul data-end="1627" data-start="1074">
<li data-end="1160" data-start="1074">
<p data-end="1160" data-start="1076"><strong data-end="1090" data-start="1076">UV Curable</strong>: Rapid cure under UV light; improves throughput and reduces downtime.</p>
</li>
<li data-end="1251" data-start="1161">
<p data-end="1251" data-start="1163"><strong data-end="1184" data-start="1163">Superior Adhesion</strong>: Passes <strong data-end="1213" data-start="1193">Cross Hatch Test</strong>, ensuring excellent bond with metals.</p>
</li>
<li data-end="1348" data-start="1252">
<p data-end="1348" data-start="1254"><strong data-end="1283" data-start="1254">Anti-Corrosion Protection</strong>: Provides long-term resistance to rust, oxidation, and moisture.</p>
</li>
<li data-end="1447" data-start="1349">
<p data-end="1447" data-start="1351"><strong data-end="1367" data-start="1351">High Clarity</strong>: Dries clear and does not interfere with visual inspection of underlying parts.</p>
</li>
<li data-end="1537" data-start="1448">
<p data-end="1537" data-start="1450"><strong data-end="1486" data-start="1450">Mechanical &amp; Chemical Resistance</strong>: Withstands wear, abrasion, and chemical exposure.</p>
</li>
<li data-end="1627" data-start="1538">
<p data-end="1627" data-start="1540"><strong data-end="1572" data-start="1540">VOC-Compliant &amp; Solvent-Free</strong>: Reduced environmental impact and safer workplace use.</p>
</li>
</ul>
<hr data-end="1632" data-start="1629">
<h2 data-end="1657" data-start="1634"><strong data-end="1657" data-start="1641">Applications</strong></h2>
<ul data-end="1940" data-start="1659">
<li data-end="1756" data-start="1659">
<p data-end="1756" data-start="1661">Protective coating for <strong>PCBs,</strong> <strong data-end="1699" data-start="1684">metal tools</strong>, <strong data-end="1713" data-start="1701">fixtures</strong>, <strong data-end="1731" data-start="1715">sheet metals</strong>, and <strong data-end="1755" data-start="1737">machined parts</strong>.</p>
</li>
<li data-end="1863" data-start="1757">
<p data-end="1863" data-start="1759">Ideal for use in <strong data-end="1790" data-start="1776">automotive</strong>, <strong data-end="1805" data-start="1792">aerospace</strong>, <strong data-end="1831" data-start="1807">industrial machinery</strong>, and <strong data-end="1862" data-start="1837">precision electronics</strong>.</p>
</li>
<li data-end="1940" data-start="1864">
<p data-end="1940" data-start="1866">Suitable for <strong data-end="1906" data-start="1879">in-line UV cure systems</strong> or <strong data-end="1939" data-start="1910">batch-curing environments</strong>.</p>
</li>
</ul>
<hr data-end="1945" data-start="1942">
<h2 data-end="1981" data-start="1947"><strong data-end="1981" data-start="1953">Technical Specifications</strong></h2>
<div class="_tableContainer_16hzy_1">
<div class="_tableWrapper_16hzy_14 group flex w-fit flex-col-reverse" tabindex="-1">
<table class="w-fit min-w-(--thread-content-width)" data-end="2819" data-start="1983">
<thead data-end="2058" data-start="1983">
<tr data-end="2058" data-start="1983">
<th data-col-size="sm" data-end="2010" data-start="1983">Property</th>
<th data-col-size="md" data-end="2058" data-start="2010">Specification</th>
</tr>
</thead>
<tbody data-end="2819" data-start="2135">
<tr data-end="2210" data-start="2135">
<td data-col-size="sm" data-end="2162" data-start="2135"><strong data-end="2154" data-start="2137">Curing Method</strong></td>
<td data-col-size="md" data-end="2210" data-start="2162">UV – Medium Pressure Hg Vapor Lamp</td>
</tr>
<tr data-end="2287" data-start="2211">
<td data-col-size="sm" data-end="2238" data-start="2211"><strong data-end="2227" data-start="2213">Lamp Power</strong></td>
<td data-col-size="md" data-end="2287" data-start="2238">300 W/in (Total 3 kW)</td>
</tr>
<tr data-end="2363" data-start="2288">
<td data-col-size="sm" data-end="2315" data-start="2288"><strong data-end="2309" data-start="2290">Curing Distance</strong></td>
<td data-col-size="md" data-end="2363" data-start="2315">2 inches from lamp surface</td>
</tr>
<tr data-end="2439" data-start="2364">
<td data-col-size="sm" data-end="2391" data-start="2364"><strong data-end="2382" data-start="2366">Curing Speed</strong></td>
<td data-col-size="md" data-end="2439" data-start="2391">&gt; 100 ft/min</td>
</tr>
<tr data-end="2515" data-start="2440">
<td data-col-size="sm" data-end="2467" data-start="2440"><strong data-end="2455" data-start="2442">Viscosity</strong></td>
<td data-end="2515" data-start="2467" data-col-size="md">21 sec (Zahn Cup #4 @ 25°C)</td>
</tr>
<tr data-end="2591" data-start="2516">
<td data-col-size="sm" data-end="2543" data-start="2516"><strong data-end="2529" data-start="2518">Density</strong></td>
<td data-col-size="md" data-end="2591" data-start="2543">1.13 g/cm³</td>
</tr>
<tr data-end="2667" data-start="2592">
<td data-col-size="sm" data-end="2619" data-start="2592"><strong data-end="2608" data-start="2594">Appearance</strong></td>
<td data-col-size="md" data-end="2667" data-start="2619">Transparent, glossy film</td>
</tr>
<tr data-end="2743" data-start="2668">
<td data-col-size="sm" data-end="2695" data-start="2668"><strong data-end="2682" data-start="2670">Adhesion</strong></td>
<td data-col-size="md" data-end="2743" data-start="2695">Passes Cross Hatch Adhesion Test (ASTM D3359)</td>
</tr>
<tr data-end="2819" data-start="2744">
<td data-col-size="sm" data-end="2771" data-start="2744"><strong data-end="2763" data-start="2746">Film Hardness</strong></td>
<td data-col-size="md" data-end="2819" data-start="2771">Medium to Hard (Shore D scale)</td>
</tr>
</tbody>
</table>
<div class="sticky end-(--thread-content-margin) h-0 self-end select-none">
<div class="absolute end-0 flex items-end"><span data-state="closed" class=""><button class="bg-token-bg-primary hover:bg-token-bg-tertiary text-token-text-secondary my-1 rounded-sm p-1 transition-opacity group-[:not(:hover):not(:focus-within)]:pointer-events-none group-[:not(:hover):not(:focus-within)]:opacity-0"><svg class="icon-md-heavy" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewbox="0 0 20 20" height="20" width="20"><path d="M12.668 10.667C12.668 9.95614 12.668 9.46258 12.6367 9.0791C12.6137 8.79732 12.5758 8.60761 12.5244 8.46387L12.4688 8.33399C12.3148 8.03193 12.0803 7.77885 11.793 7.60254L11.666 7.53125C11.508 7.45087 11.2963 7.39395 10.9209 7.36328C10.5374 7.33197 10.0439 7.33203 9.33301 7.33203H6.5C5.78896 7.33203 5.29563 7.33195 4.91211 7.36328C4.63016 7.38632 4.44065 7.42413 4.29688 7.47559L4.16699 7.53125C3.86488 7.68518 3.61186 7.9196 3.43555 8.20703L3.36524 8.33399C3.28478 8.49198 3.22795 8.70352 3.19727 9.0791C3.16595 9.46259 3.16504 9.95611 3.16504 10.667V13.5C3.16504 14.211 3.16593 14.7044 3.19727 15.0879C3.22797 15.4636 3.28473 15.675 3.36524 15.833L3.43555 15.959C3.61186 16.2466 3.86474 16.4807 4.16699 16.6348L4.29688 16.6914C4.44063 16.7428 4.63025 16.7797 4.91211 16.8027C5.29563 16.8341 5.78896 16.835 6.5 16.835H9.33301C10.0439 16.835 10.5374 16.8341 10.9209 16.8027C11.2965 16.772 11.508 16.7152 11.666 16.6348L11.793 16.5645C12.0804 16.3881 12.3148 16.1351 12.4688 15.833L12.5244 15.7031C12.5759 15.5594 12.6137 15.3698 12.6367 15.0879C12.6681 14.7044 12.668 14.211 12.668 13.5V10.667ZM13.998 12.665C14.4528 12.6634 14.8011 12.6602 15.0879 12.6367C15.4635 12.606 15.675 12.5492 15.833 12.4688L15.959 12.3975C16.2466 12.2211 16.4808 11.9682 16.6348 11.666L16.6914 11.5361C16.7428 11.3924 16.7797 11.2026 16.8027 10.9209C16.8341 10.5374 16.835 10.0439 16.835 9.33301V6.5C16.835 5.78896 16.8341 5.29563 16.8027 4.91211C16.7797 4.63025 16.7428 4.44063 16.6914 4.29688L16.6348 4.16699C16.4807 3.86474 16.2466 3.61186 15.959 3.43555L15.833 3.36524C15.675 3.28473 15.4636 3.22797 15.0879 3.19727C14.7044 3.16593 14.211 3.16504 13.5 3.16504H10.667C9.9561 3.16504 9.46259 3.16595 9.0791 3.19727C8.79739 3.22028 8.6076 3.2572 8.46387 3.30859L8.33399 3.36524C8.03176 3.51923 7.77886 3.75343 7.60254 4.04102L7.53125 4.16699C7.4508 4.32498 7.39397 4.53655 7.36328 4.91211C7.33985 5.19893 7.33562 5.54719 7.33399 6.00195H9.33301C10.022 6.00195 10.5791 6.00131 11.0293 6.03809C11.4873 6.07551 11.8937 6.15471 12.2705 6.34668L12.4883 6.46875C12.984 6.7728 13.3878 7.20854 13.6533 7.72949L13.7197 7.87207C13.8642 8.20859 13.9292 8.56974 13.9619 8.9707C13.9987 9.42092 13.998 9.97799 13.998 10.667V12.665ZM18.165 9.33301C18.165 10.022 18.1657 10.5791 18.1289 11.0293C18.0961 11.4302 18.0311 11.7914 17.8867 12.1279L17.8203 12.2705C17.5549 12.7914 17.1509 13.2272 16.6553 13.5313L16.4365 13.6533C16.0599 13.8452 15.6541 13.9245 15.1963 13.9619C14.8593 13.9895 14.4624 13.9935 13.9951 13.9951C13.9935 14.4624 13.9895 14.8593 13.9619 15.1963C13.9292 15.597 13.864 15.9576 13.7197 16.2939L13.6533 16.4365C13.3878 16.9576 12.9841 17.3941 12.4883 17.6982L12.2705 17.8203C11.8937 18.0123 11.4873 18.0915 11.0293 18.1289C10.5791 18.1657 10.022 18.165 9.33301 18.165H6.5C5.81091 18.165 5.25395 18.1657 4.80371 18.1289C4.40306 18.0962 4.04235 18.031 3.70606 17.8867L3.56348 17.8203C3.04244 17.5548 2.60585 17.151 2.30176 16.6553L2.17969 16.4365C1.98788 16.0599 1.90851 15.6541 1.87109 15.1963C1.83431 14.746 1.83496 14.1891 1.83496 13.5V10.667C1.83496 9.978 1.83432 9.42091 1.87109 8.9707C1.90851 8.5127 1.98772 8.10625 2.17969 7.72949L2.30176 7.51172C2.60586 7.0159 3.04236 6.6122 3.56348 6.34668L3.70606 6.28027C4.04237 6.136 4.40303 6.07083 4.80371 6.03809C5.14051 6.01057 5.53708 6.00551 6.00391 6.00391C6.00551 5.53708 6.01057 5.14051 6.03809 4.80371C6.0755 4.34588 6.15483 3.94012 6.34668 3.56348L6.46875 3.34473C6.77282 2.84912 7.20856 2.44514 7.72949 2.17969L7.87207 2.11328C8.20855 1.96886 8.56979 1.90385 8.9707 1.87109C9.42091 1.83432 9.978 1.83496 10.667 1.83496H13.5C14.1891 1.83496 14.746 1.83431 15.1963 1.87109C15.6541 1.90851 16.0599 1.98788 16.4365 2.17969L16.6553 2.30176C17.151 2.60585 17.5548 3.04244 17.8203 3.56348L17.8867 3.70606C18.031 4.04235 18.0962 4.40306 18.1289 4.80371C18.1657 5.25395 18.165 5.81091 18.165 6.5V9.33301Z"></path></svg></button></span></div>
</div>
</div>
</div>
<hr data-end="2824" data-start="2821">
<h2 data-end="2854" data-start="2826">🧴 <strong data-end="2854" data-start="2832">Directions for Use</strong>
</h2>
<ol data-end="3568" data-start="2856">
<li data-end="3042" data-start="2856">
<p data-end="2884" data-start="2859"><strong data-end="2882" data-start="2859">Surface Preparation</strong></p>
<ul data-end="3042" data-start="2888">
<li data-end="2972" data-start="2888">
<p data-end="2972" data-start="2890">Ensure metal surface is <strong data-end="2928" data-start="2914">clean, dry</strong>, and <strong data-end="2971" data-start="2934">free from oil, dust, or oxidation</strong>.</p>
</li>
<li data-end="3042" data-start="2976">
<p data-end="3042" data-start="2978">Use an appropriate degreaser or solvent wipe to prepare surface.</p>
</li>
</ul>
</li>
<li data-end="3185" data-start="3044">
<p data-end="3072" data-start="3047"><strong data-end="3070" data-start="3047">Application Methods</strong></p>
<ul data-end="3185" data-start="3076">
<li data-end="3129" data-start="3076">
<p data-end="3129" data-start="3078"><strong data-end="3101" data-start="3078">Spray, dip, or roll</strong> uniformly over the surface.</p>
</li>
<li data-end="3185" data-start="3133">
<p data-end="3185" data-start="3135">Recommended wet film thickness: <strong data-end="3184" data-start="3167">30–50 microns</strong>.</p>
</li>
</ul>
</li>
<li data-end="3422" data-start="3187">
<p data-end="3213" data-start="3190"><strong data-end="3211" data-start="3190">UV Curing Process</strong></p>
<ul data-end="3422" data-start="3217">
<li data-end="3291" data-start="3217">
<p data-end="3291" data-start="3219">Use <strong data-end="3261" data-start="3223">medium pressure mercury vapor lamp</strong> (300 W/in; 3 kW total power).</p>
</li>
<li data-end="3351" data-start="3295">
<p data-end="3351" data-start="3297">Maintain <strong data-end="3332" data-start="3306">2-inch curing distance</strong> from lamp surface.</p>
</li>
<li data-end="3422" data-start="3355">
<p data-end="3422" data-start="3357">Pass substrate under lamp at <strong data-end="3401" data-start="3386">&gt;100 ft/min</strong> for optimal results.</p>
</li>
</ul>
</li>
<li data-end="3568" data-start="3424">
<p data-end="3451" data-start="3427"><strong data-end="3449" data-start="3427">Post-Cure Handling</strong></p>
<ul data-end="3568" data-start="3455">
<li data-end="3505" data-start="3455">
<p data-end="3505" data-start="3457">Cured surface is ready for handling immediately.</p>
</li>
<li data-end="3568" data-start="3509">
<p data-end="3568" data-start="3511">Full chemical resistance may develop within <strong data-end="3567" data-start="3555">24 hours</strong>.</p>
</li>
</ul>
</li>
</ol>
<hr data-end="3573" data-start="3570">
<h2 data-end="3596" data-start="3575"><strong data-end="3596" data-start="3581">Precautions</strong></h2>
<ul data-end="3892" data-start="3598">
<li data-end="3677" data-start="3598">
<p data-end="3677" data-start="3600">Store in a <strong data-end="3636" data-start="3611">cool, dark, dry place</strong> away from sunlight and ignition sources.</p>
</li>
<li data-end="3750" data-start="3678">
<p data-end="3750" data-start="3680">Avoid skin or eye contact. Use appropriate <strong data-end="3730" data-start="3723">PPE</strong> during application.</p>
</li>
<li data-end="3812" data-start="3751">
<p data-end="3812" data-start="3753">Do not use in confined spaces without adequate ventilation.</p>
</li>
<li data-end="3892" data-start="3813">
<p data-end="3892" data-start="3815">Ensure <strong data-end="3843" data-start="3822">UV safety shields</strong> are in place to protect operators during curing.</p>
</li>
</ul>`,
    price: '9200.00',
    compareAtPrice: '12000.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/3608_A.png?v=1754558456', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/After_Curing.png?v=1759661215', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Post_Cure.png?v=1759661215', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/UV_Curable.png?v=1759661214'],
    variants: [
      { id: 48915376374006, title: 'Default Title', price: '9200.00', sku: '3508', available: true },
    ],
    productType: 'Electronics',
    tags: ['Automotive', 'Electronics', 'Industrial', 'Speciality Products', 'Welding'],
    vendor: 'Micron Aerosols™',
    series: 'S2000',
    collection: 'industrial-welding-fabrication',
  },
  {
    id: 9126773391606,
    handle: '2218-zinc-aluminium-touch-up-paint-500ml-copy',
    title: '2218 MetArmor Z Paint | 5000ml | Zinc Brite Touchup Paint',
    description: `<p data-start="216" data-end="655">Our MetArmor Z Paint is a high-performance touch up <strong data-start="276" data-end="302">coating</strong> designed to provide a <strong data-start="325" data-end="355">durable, weather-resistant</strong> barrier for galvanized and metal surfaces. Engineered for <strong data-start="414" data-end="465">industrial, automotive, and marine applications</strong>, this paint delivers a <strong data-start="489" data-end="516">quick-drying, zinc-rich</strong> finish that seamlessly blends with existing coatings, ensuring <strong data-start="580" data-end="652">maximum protection against rust, oxidation, and environmental damage</strong>.</p>
<h3 data-start="657" data-end="680"><strong data-start="661" data-end="678">Key Features:</strong></h3>
<p data-start="681" data-end="1222">✅ <strong data-start="683" data-end="716">Superior Protection</strong> – Forms a <strong data-start="727" data-end="753">sacrificial zinc layer</strong> that prevents rust and extends the life of metal surfaces.<br data-start="812" data-end="815">✅ <strong data-start="817" data-end="838">Seamless Touch-Up</strong> – Matches existing <strong data-start="858" data-end="881">galvanized coatings</strong> for a smooth, professional finish.<br data-start="916" data-end="919">✅ <strong data-start="921" data-end="944">Fast-Drying Formula</strong> – Quick to apply and <strong data-start="966" data-end="990">dries within minutes</strong> for <strong data-start="995" data-end="1017">instant protection</strong>.<br data-start="1018" data-end="1021">✅ <strong data-start="1023" data-end="1051" data-is-only-node="">Heat &amp; Weather Resistant</strong> – Withstands <strong data-start="1065" data-end="1113">high temperatures, moisture, and UV exposure</strong> for long-lasting performance.<br data-start="1143" data-end="1146">✅ <strong data-start="1148" data-end="1168">Easy Application</strong> – No need for complex tools—just brush and protect!</p>
<h3 data-start="1224" data-end="1247"><strong data-start="1228" data-end="1245">Where to Use:</strong></h3>
<p data-start="1248" data-end="1430">🔹 <strong data-start="1251" data-end="1290">Galvanized Steel &amp; Metal Structures</strong><br data-start="1290" data-end="1293">🔹 <strong data-start="1296" data-end="1343">Pipelines, Machinery &amp; Industrial Equipment</strong><br data-start="1343" data-end="1346">🔹 <strong data-start="1349" data-end="1383">Automobile &amp; Marine Components</strong><br data-start="1383" data-end="1386">🔹 <strong data-start="1389" data-end="1428">Fences, Railings &amp; Outdoor Fixtures</strong></p>
<p data-start="1432" data-end="1636">Perfect for <strong data-start="1444" data-end="1502">repairing weld seams, scratches, and worn-out coatings</strong>, our MetArmor Z Paint ensures your metal surfaces stay <strong data-start="1571" data-end="1615">strong, rust-free, and visually flawless</strong> for years to come.</p>
<h3 data-start="306" data-end="338">📦 <strong data-start="313" data-end="336">Product Description</strong>
</h3>
<p data-start="339" data-end="751"><strong data-start="339" data-end="368">MetArmor Zinc Brite Paint</strong> is a high-performance, brushable zinc-rich coating specially developed for <strong data-start="444" data-end="480">touch-up and repair applications</strong> on galvanized or bare ferrous metal surfaces. Designed for <strong data-start="540" data-end="592">industrial, automotive, marine, and construction</strong> sectors, this formulation offers <strong data-start="626" data-end="649">galvanic protection</strong> through a high-purity <strong data-start="672" data-end="688">zinc content</strong>, forming a sacrificial layer that prevents rust and corrosion.</p>
<p data-start="753" data-end="1104">Formulated with a <strong data-start="771" data-end="798">quick-drying resin base</strong>, <strong data-start="800" data-end="829">MetArmor Zinc Brite Paint</strong> dries to a hard, durable, metallic-grey finish that resembles hot-dip galvanization, making it ideal for <strong data-start="935" data-end="988">repairing weld seams, damaged galvanized coatings</strong>, or any exposed steel surface. It also serves as an <strong data-start="1041" data-end="1069">intermediate primer coat</strong> in multi-layer protective systems.</p>
<hr data-start="1106" data-end="1109">
<h3 data-start="1111" data-end="1133">✅ <strong data-start="1117" data-end="1133">Key Benefits</strong>
</h3>
<ul data-start="1134" data-end="1741">
<li data-start="1134" data-end="1227">
<p data-start="1136" data-end="1227"><strong data-start="1136" data-end="1157">High Zinc Content</strong>: Offers <strong data-start="1166" data-end="1189">cathodic protection</strong>, preventing rust beneath the coating.</p>
</li>
<li data-start="1228" data-end="1312">
<p data-start="1230" data-end="1312"><strong data-start="1230" data-end="1252">Brushable Touch-Up</strong>: Easy to apply on-site without spray equipment or downtime.</p>
</li>
<li data-start="1313" data-end="1414">
<p data-start="1315" data-end="1414"><strong data-start="1315" data-end="1336">Superior Adhesion</strong>: Bonds firmly to clean metal surfaces, including previously galvanized areas.</p>
</li>
<li data-start="1415" data-end="1499">
<p data-start="1417" data-end="1499"><strong data-start="1417" data-end="1432">Fast Drying</strong>: Touch-dry in 10–15 minutes (depending on temperature &amp; humidity).</p>
</li>
<li data-start="1500" data-end="1589">
<p data-start="1502" data-end="1589"><strong data-start="1502" data-end="1526">Corrosion Resistance</strong>: Forms a weather-resistant barrier against moisture and salts.</p>
</li>
<li data-start="1590" data-end="1668">
<p data-start="1592" data-end="1668"><strong data-start="1592" data-end="1604">Weldable</strong>: Post-cure weld-through compatibility for certain applications.</p>
</li>
<li data-start="1669" data-end="1741">
<p data-start="1671" data-end="1741"><strong data-start="1671" data-end="1702">Silver-Grey Metallic Finish</strong>: Matches galvanized surfaces visually.</p>
</li>
</ul>
<hr data-start="1743" data-end="1746">
<h3 data-start="1748" data-end="1778">🛠️ <strong data-start="1756" data-end="1778">Directions for Use</strong>
</h3>
<ol data-start="1779" data-end="2491">
<li data-start="1779" data-end="2015">
<p data-start="1782" data-end="1806"><strong data-start="1782" data-end="1805">Surface Preparation</strong>:</p>
<ul data-start="1810" data-end="2015">
<li data-start="1810" data-end="1890">
<p data-start="1812" data-end="1890">Clean the surface thoroughly to remove rust, grease, oil, dust, and old paint.</p>
</li>
<li data-start="1894" data-end="1956">
<p data-start="1896" data-end="1956">Use wire brushing, sandpaper, or blasting for best adhesion.</p>
</li>
<li data-start="1960" data-end="2015">
<p data-start="1962" data-end="2015">Ensure the surface is dry and free from contaminants.</p>
</li>
</ul>
</li>
<li data-start="2017" data-end="2119">
<p data-start="2020" data-end="2031"><strong data-start="2020" data-end="2030">Mixing</strong>:</p>
<ul data-start="2035" data-end="2119">
<li data-start="2035" data-end="2119">
<p data-start="2037" data-end="2119">Stir thoroughly before and during use to ensure even dispersion of zinc particles.</p>
</li>
</ul>
</li>
<li data-start="2121" data-end="2282">
<p data-start="2124" data-end="2140"><strong data-start="2124" data-end="2139">Application</strong>:</p>
<ul data-start="2144" data-end="2282">
<li data-start="2144" data-end="2186">
<p data-start="2146" data-end="2186">Apply using a <strong data-start="2160" data-end="2169">brush</strong> in even strokes.</p>
</li>
<li data-start="2190" data-end="2282">
<p data-start="2192" data-end="2282">For best results, apply <strong data-start="2216" data-end="2227">2 coats</strong>, allowing <strong data-start="2238" data-end="2267">15–30 minutes drying time</strong> between coats.</p>
</li>
</ul>
</li>
<li data-start="2284" data-end="2404">
<p data-start="2287" data-end="2321"><strong data-start="2287" data-end="2302">Drying Time</strong> (at 25°C, 50% RH):</p>
<ul data-start="2325" data-end="2404">
<li data-start="2325" data-end="2348">
<p data-start="2327" data-end="2348">Touch Dry: 10–15 mins</p>
</li>
<li data-start="2352" data-end="2376">
<p data-start="2354" data-end="2376">Handle Dry: 30–45 mins</p>
</li>
<li data-start="2380" data-end="2404">
<p data-start="2382" data-end="2404">Full Cure: 12–24 hours</p>
</li>
</ul>
</li>
<li data-start="2406" data-end="2491">
<p data-start="2409" data-end="2422"><strong data-start="2409" data-end="2421">Clean-Up</strong>:</p>
<ul data-start="2426" data-end="2491">
<li data-start="2426" data-end="2491">
<p data-start="2428" data-end="2491">Use <strong data-start="2432" data-end="2471">toluene, xylene, or lacquer thinner</strong> for cleaning tools.</p>
</li>
</ul>
</li>
</ol>
<hr data-start="2493" data-end="2496">
<h3 data-start="2498" data-end="2521">🧪 <strong data-start="2505" data-end="2521">Applications</strong>
</h3>
<ul data-start="2522" data-end="2848">
<li data-start="2522" data-end="2567">
<p data-start="2524" data-end="2567">Touch-up of <strong data-start="2536" data-end="2567">galvanized steel structures</strong></p>
</li>
<li data-start="2568" data-end="2628">
<p data-start="2570" data-end="2628">Repair of <strong data-start="2580" data-end="2595">weld joints</strong>, <strong data-start="2597" data-end="2610">scratches</strong>, or <strong data-start="2615" data-end="2628">cut edges</strong></p>
</li>
<li data-start="2629" data-end="2788">
<p data-start="2631" data-end="2660">Anti-corrosion protection of:</p>
<ul data-start="2663" data-end="2788">
<li data-start="2663" data-end="2680">
<p data-start="2665" data-end="2680">Pipes and tanks</p>
</li>
<li data-start="2683" data-end="2715">
<p data-start="2685" data-end="2715">Scaffolding and metal railings</p>
</li>
<li data-start="2718" data-end="2754">
<p data-start="2720" data-end="2754">Industrial enclosures and supports</p>
</li>
<li data-start="2757" data-end="2788">
<p data-start="2759" data-end="2788">Shipyard and marine equipment</p>
</li>
</ul>
</li>
<li data-start="2789" data-end="2848">
<p data-start="2791" data-end="2848">Base primer for heavy-duty anti-corrosion coating systems</p>
</li>
</ul>
<p data-start="1638" data-end="1714"><strong data-start="1641" data-end="1709">Defend Your Metal. Trust the Power of Zinc-Aluminium Protection!</strong></p>`,
    descriptionHtml: `<p data-start="216" data-end="655">Our MetArmor Z Paint is a high-performance touch up <strong data-start="276" data-end="302">coating</strong> designed to provide a <strong data-start="325" data-end="355">durable, weather-resistant</strong> barrier for galvanized and metal surfaces. Engineered for <strong data-start="414" data-end="465">industrial, automotive, and marine applications</strong>, this paint delivers a <strong data-start="489" data-end="516">quick-drying, zinc-rich</strong> finish that seamlessly blends with existing coatings, ensuring <strong data-start="580" data-end="652">maximum protection against rust, oxidation, and environmental damage</strong>.</p>
<h3 data-start="657" data-end="680"><strong data-start="661" data-end="678">Key Features:</strong></h3>
<p data-start="681" data-end="1222">✅ <strong data-start="683" data-end="716">Superior Protection</strong> – Forms a <strong data-start="727" data-end="753">sacrificial zinc layer</strong> that prevents rust and extends the life of metal surfaces.<br data-start="812" data-end="815">✅ <strong data-start="817" data-end="838">Seamless Touch-Up</strong> – Matches existing <strong data-start="858" data-end="881">galvanized coatings</strong> for a smooth, professional finish.<br data-start="916" data-end="919">✅ <strong data-start="921" data-end="944">Fast-Drying Formula</strong> – Quick to apply and <strong data-start="966" data-end="990">dries within minutes</strong> for <strong data-start="995" data-end="1017">instant protection</strong>.<br data-start="1018" data-end="1021">✅ <strong data-start="1023" data-end="1051" data-is-only-node="">Heat &amp; Weather Resistant</strong> – Withstands <strong data-start="1065" data-end="1113">high temperatures, moisture, and UV exposure</strong> for long-lasting performance.<br data-start="1143" data-end="1146">✅ <strong data-start="1148" data-end="1168">Easy Application</strong> – No need for complex tools—just brush and protect!</p>
<h3 data-start="1224" data-end="1247"><strong data-start="1228" data-end="1245">Where to Use:</strong></h3>
<p data-start="1248" data-end="1430">🔹 <strong data-start="1251" data-end="1290">Galvanized Steel &amp; Metal Structures</strong><br data-start="1290" data-end="1293">🔹 <strong data-start="1296" data-end="1343">Pipelines, Machinery &amp; Industrial Equipment</strong><br data-start="1343" data-end="1346">🔹 <strong data-start="1349" data-end="1383">Automobile &amp; Marine Components</strong><br data-start="1383" data-end="1386">🔹 <strong data-start="1389" data-end="1428">Fences, Railings &amp; Outdoor Fixtures</strong></p>
<p data-start="1432" data-end="1636">Perfect for <strong data-start="1444" data-end="1502">repairing weld seams, scratches, and worn-out coatings</strong>, our MetArmor Z Paint ensures your metal surfaces stay <strong data-start="1571" data-end="1615">strong, rust-free, and visually flawless</strong> for years to come.</p>
<h3 data-start="306" data-end="338">📦 <strong data-start="313" data-end="336">Product Description</strong>
</h3>
<p data-start="339" data-end="751"><strong data-start="339" data-end="368">MetArmor Zinc Brite Paint</strong> is a high-performance, brushable zinc-rich coating specially developed for <strong data-start="444" data-end="480">touch-up and repair applications</strong> on galvanized or bare ferrous metal surfaces. Designed for <strong data-start="540" data-end="592">industrial, automotive, marine, and construction</strong> sectors, this formulation offers <strong data-start="626" data-end="649">galvanic protection</strong> through a high-purity <strong data-start="672" data-end="688">zinc content</strong>, forming a sacrificial layer that prevents rust and corrosion.</p>
<p data-start="753" data-end="1104">Formulated with a <strong data-start="771" data-end="798">quick-drying resin base</strong>, <strong data-start="800" data-end="829">MetArmor Zinc Brite Paint</strong> dries to a hard, durable, metallic-grey finish that resembles hot-dip galvanization, making it ideal for <strong data-start="935" data-end="988">repairing weld seams, damaged galvanized coatings</strong>, or any exposed steel surface. It also serves as an <strong data-start="1041" data-end="1069">intermediate primer coat</strong> in multi-layer protective systems.</p>
<hr data-start="1106" data-end="1109">
<h3 data-start="1111" data-end="1133">✅ <strong data-start="1117" data-end="1133">Key Benefits</strong>
</h3>
<ul data-start="1134" data-end="1741">
<li data-start="1134" data-end="1227">
<p data-start="1136" data-end="1227"><strong data-start="1136" data-end="1157">High Zinc Content</strong>: Offers <strong data-start="1166" data-end="1189">cathodic protection</strong>, preventing rust beneath the coating.</p>
</li>
<li data-start="1228" data-end="1312">
<p data-start="1230" data-end="1312"><strong data-start="1230" data-end="1252">Brushable Touch-Up</strong>: Easy to apply on-site without spray equipment or downtime.</p>
</li>
<li data-start="1313" data-end="1414">
<p data-start="1315" data-end="1414"><strong data-start="1315" data-end="1336">Superior Adhesion</strong>: Bonds firmly to clean metal surfaces, including previously galvanized areas.</p>
</li>
<li data-start="1415" data-end="1499">
<p data-start="1417" data-end="1499"><strong data-start="1417" data-end="1432">Fast Drying</strong>: Touch-dry in 10–15 minutes (depending on temperature &amp; humidity).</p>
</li>
<li data-start="1500" data-end="1589">
<p data-start="1502" data-end="1589"><strong data-start="1502" data-end="1526">Corrosion Resistance</strong>: Forms a weather-resistant barrier against moisture and salts.</p>
</li>
<li data-start="1590" data-end="1668">
<p data-start="1592" data-end="1668"><strong data-start="1592" data-end="1604">Weldable</strong>: Post-cure weld-through compatibility for certain applications.</p>
</li>
<li data-start="1669" data-end="1741">
<p data-start="1671" data-end="1741"><strong data-start="1671" data-end="1702">Silver-Grey Metallic Finish</strong>: Matches galvanized surfaces visually.</p>
</li>
</ul>
<hr data-start="1743" data-end="1746">
<h3 data-start="1748" data-end="1778">🛠️ <strong data-start="1756" data-end="1778">Directions for Use</strong>
</h3>
<ol data-start="1779" data-end="2491">
<li data-start="1779" data-end="2015">
<p data-start="1782" data-end="1806"><strong data-start="1782" data-end="1805">Surface Preparation</strong>:</p>
<ul data-start="1810" data-end="2015">
<li data-start="1810" data-end="1890">
<p data-start="1812" data-end="1890">Clean the surface thoroughly to remove rust, grease, oil, dust, and old paint.</p>
</li>
<li data-start="1894" data-end="1956">
<p data-start="1896" data-end="1956">Use wire brushing, sandpaper, or blasting for best adhesion.</p>
</li>
<li data-start="1960" data-end="2015">
<p data-start="1962" data-end="2015">Ensure the surface is dry and free from contaminants.</p>
</li>
</ul>
</li>
<li data-start="2017" data-end="2119">
<p data-start="2020" data-end="2031"><strong data-start="2020" data-end="2030">Mixing</strong>:</p>
<ul data-start="2035" data-end="2119">
<li data-start="2035" data-end="2119">
<p data-start="2037" data-end="2119">Stir thoroughly before and during use to ensure even dispersion of zinc particles.</p>
</li>
</ul>
</li>
<li data-start="2121" data-end="2282">
<p data-start="2124" data-end="2140"><strong data-start="2124" data-end="2139">Application</strong>:</p>
<ul data-start="2144" data-end="2282">
<li data-start="2144" data-end="2186">
<p data-start="2146" data-end="2186">Apply using a <strong data-start="2160" data-end="2169">brush</strong> in even strokes.</p>
</li>
<li data-start="2190" data-end="2282">
<p data-start="2192" data-end="2282">For best results, apply <strong data-start="2216" data-end="2227">2 coats</strong>, allowing <strong data-start="2238" data-end="2267">15–30 minutes drying time</strong> between coats.</p>
</li>
</ul>
</li>
<li data-start="2284" data-end="2404">
<p data-start="2287" data-end="2321"><strong data-start="2287" data-end="2302">Drying Time</strong> (at 25°C, 50% RH):</p>
<ul data-start="2325" data-end="2404">
<li data-start="2325" data-end="2348">
<p data-start="2327" data-end="2348">Touch Dry: 10–15 mins</p>
</li>
<li data-start="2352" data-end="2376">
<p data-start="2354" data-end="2376">Handle Dry: 30–45 mins</p>
</li>
<li data-start="2380" data-end="2404">
<p data-start="2382" data-end="2404">Full Cure: 12–24 hours</p>
</li>
</ul>
</li>
<li data-start="2406" data-end="2491">
<p data-start="2409" data-end="2422"><strong data-start="2409" data-end="2421">Clean-Up</strong>:</p>
<ul data-start="2426" data-end="2491">
<li data-start="2426" data-end="2491">
<p data-start="2428" data-end="2491">Use <strong data-start="2432" data-end="2471">toluene, xylene, or lacquer thinner</strong> for cleaning tools.</p>
</li>
</ul>
</li>
</ol>
<hr data-start="2493" data-end="2496">
<h3 data-start="2498" data-end="2521">🧪 <strong data-start="2505" data-end="2521">Applications</strong>
</h3>
<ul data-start="2522" data-end="2848">
<li data-start="2522" data-end="2567">
<p data-start="2524" data-end="2567">Touch-up of <strong data-start="2536" data-end="2567">galvanized steel structures</strong></p>
</li>
<li data-start="2568" data-end="2628">
<p data-start="2570" data-end="2628">Repair of <strong data-start="2580" data-end="2595">weld joints</strong>, <strong data-start="2597" data-end="2610">scratches</strong>, or <strong data-start="2615" data-end="2628">cut edges</strong></p>
</li>
<li data-start="2629" data-end="2788">
<p data-start="2631" data-end="2660">Anti-corrosion protection of:</p>
<ul data-start="2663" data-end="2788">
<li data-start="2663" data-end="2680">
<p data-start="2665" data-end="2680">Pipes and tanks</p>
</li>
<li data-start="2683" data-end="2715">
<p data-start="2685" data-end="2715">Scaffolding and metal railings</p>
</li>
<li data-start="2718" data-end="2754">
<p data-start="2720" data-end="2754">Industrial enclosures and supports</p>
</li>
<li data-start="2757" data-end="2788">
<p data-start="2759" data-end="2788">Shipyard and marine equipment</p>
</li>
</ul>
</li>
<li data-start="2789" data-end="2848">
<p data-start="2791" data-end="2848">Base primer for heavy-duty anti-corrosion coating systems</p>
</li>
</ul>
<p data-start="1638" data-end="1714"><strong data-start="1641" data-end="1709">Defend Your Metal. Trust the Power of Zinc-Aluminium Protection!</strong></p>`,
    price: '5500.00',
    compareAtPrice: '4800.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/2218.png?v=1754543738', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Touch_Up_Spray.png?v=1754543738', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/a-silver-paint-being-applied-on-a-newly-welded-metal-component-by-brush.png?v=1754543738', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Zinc_Paint.png?v=1765863768', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/zinc-aluminium-finish-on-metal-surface.png?v=1765863768', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/a-closeup-shot-of-silver-paint-being-poured-in-a-painting-bowl.png?v=1765863768', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Touch_up_paint_1-min.png?v=1765864141', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Touchup_paint_3-min.png?v=1765864141', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/touch_up_paint_4-min.png?v=1765864141'],
    variants: [
      { id: 48912794222838, title: 'Default Title', price: '5500.00', sku: '10', available: true },
    ],
    productType: 'Welding',
    tags: [],
    vendor: 'Micron Aerosols™',
    series: 'S4000',
    collection: 'essentials',
  },
  {
    id: 9100067209462,
    handle: '3508-protektor-metacoat-uv-5ltrs',
    title: '3508 - Protektor MetaCoat UV 5Ltrs',
    description: `<p><img alt=""><img alt="">PRODUCT DESCRIPTION: Protektor Meta Coat UV is a fast drying single component acrylic lacquer to protect Metal Surfaces from harsh environments, moisture, corrosion, dirt &amp; dust, fungus, caustic vapors, etc.</p>
<p><img alt="">BENEFITS:</p>
<ul>
<li>Protects Metal Surfaces from harsh environments</li>
<li>Fast Drying and dry to touch time of less than few minutes </li>
<li>Single component Lacquer </li>
<li>Protects from Corrosion </li>
<li>Protects against Humidity, Salinity and Moisture</li>
<li>
<img src="data:image/png;base64,iVBORwoaCgpJSERSAjWJCAbUgsm/CXBIWXMuIy4jAXilP3YPRUlEQVR4nO3d29LrKA5A4aRr3v+V0xc97u2mOEhCAiyvr2qqZ/8xBwPGCiZhbXA7yff3+32e7q/dFfBAUANSIKgBKfwvOH/thp1vSC1wkmtM0NdXrNSAFKJXamrvxnmnDtxFBzVWZeDTCoRaj7d6AVMrb2n6Xtmt+s2UpT1Hadv1yohov/K4+78JcAHTTgpqLq0b+mivjuVGLk3vnU4bsEnKkqS31EmaP6txgOVOD2ou5c3x+7EHA6O8JTfrWrrrde0jt9/tv/fXvc5REvS08m+dTy//0coSAQ8gxBM2CvdufrXX7n8b3fyt6Vt10tZ1lKb1uvQcJYHDKP+ZtHxdNWCZ04MaS5Awes0rvYY0cNHsbbEEQxfJaklvz4w0LcucHtScihUIDiPZU2N5p77SyuO+z0WzqjIr6hwJzmmASauCmjImbmJzcDupTV6/23+Z3J0nXDOtOnLtP0Nv3o7sN8YExFYENdLnod9Pf1JrrfSMjv8W/5ak1ZjJVxLsSfMoz1Pajr0yR23Ym+Qk+WvTaZ6t99ohso7SJmx0OzTtLjmmlaass7QKVyZndDsivq79q9x7OSvGd+3fHvmP1MpbUSdtm0bQjC/JtWyZ5z3vER7zKsGbg5WPnyQdJmFtcDu5AbVe1wZDkrQjrbytdfLaTOddpiTtirbolSMpM6KO2r66zsFjVSJiEoy8XnpGfRs5viW88/fY/DpbJ+0eGQ9R42smYW1wO9+ItDPzKiZhbXA7rApqZiZhbXA7lPtkJ71JSeowOyZuYnNwOyTvHmo3rt5k5rEMr13h0JTZSzs6piZhbXA7ui0mbHQ7yhql856YfsX/twT6d9Z3g97XixfP8W1Z/fEYp738dtRpxwpB1PhaeY+ImlcxIfp7aiZsdDsnwlrH15apvdP2tAajdSKJfucmZ3Q7U6Ykbe+Ymf6pGb1D8ixrJmFtcDvdE0VdL7Mix7e1/B0rNKPyNfmeENCUf/Ocj1fcI7znVUx4ypfv9Tp+JmFtcDsKnl1BkrxevvMepZUEAZr6eJQZ8W7PWi/LZGEtS5NOI+pm5iHqehmxBKP3dBHXlHf+XgGNV51OCWgkr0Xma0m7al6F0lOCGiCjcrK7T5StCfGUx0CevFcvTvSGcwS2k+ypOSnKzDKhn7ZB72m+n/pm25kKgYhnXY05wczYqQWmJ58r5JhTDhO9UuN14UZsyAR2inz0+UQZz6l0wr4kIDXJSo3XJ0+s+WT8aNxpz7KfqLVas2tPiNVV/9o4L8/xaeO8dGL7S3lt4s/Qj/jjyWM6pZV7aiQX8pMudummwNoKd+V57ihTQlIvzceQJRsirZuvpR9Lx3re48iSvzSP0uynfKLOGWOnzquvtyKoKZdcRx/F1X5Ud+cmbmJzcDuaqVMvbdQ57ShTolb2aW0QUUfNR+J7x1hlm5A9+0iTl/b6sSZndDuGktYpW7+e7tR59ZVWfvle7aOyrWNbaU8aIPdHA71jWukmZ3Q7g7SeTm/Dz6ddr9HjpHsfSI7tlWVJ5/E4YcUqpmS8Jmd0O5X3OLLkr1Xm2Zr3ZurEKk2sU+fVV9v1Mwmtm0MvbS/NrgE1qlcv3ceY1mpHmRKtekXUydoG1n4mZ3Q7TXkeT6t/z+w4GrVNxPUjCmy0dcrUr6c7dV59re/vR4AJno8v3wMpENSAFAhqQAoENSAFghqQAkEKSIEmbmJzcDsGpEBQA1IgqAEpENSAFFb+9hPQkvX3iICWTGNe8oOywBKrghrJD0xxQdgwofwX7dFH+3VcGwmc9Pjp9+Hn2wGA0erHT70I+Ff8l2j5PehrvApjHghw0p6a6yK/BzeSIKhM31NbCRql05ajOb4M4DT1K4+1Jmx0O6NvlS8t06vNJYHsKB9te7RWBUfnbumrUdmWdtTeFC3jZbZMj9PfVzppe0jbXNsGvbTSJmx0O7zGu7Zsj/6eKb+Xp+cYldz4JGVp0o7S7+rzVl4zY3TmzYrmGt01l7I39AFOWqm5a92kehF0a4VHEnX3BrmkHEu9aiwXm+fjutFkEdnmNZp8pO1Ru7nVyhvRpvVuR824uqfXrHTMlhmRp3aMXq+33l17jAWP9LV0M221Yt6LcOpc6jWnIdhJG4VrNMvC2kEuSdcrR1oH6UAfpY1eUrO0X0SbR+YzSitt76i0mvOMnkAjypzNM2q8zV57EdeuZZxI8xnl4d33rfOfucZ6IufSiLkIjk4Pau4kKxLaZeXZcrTHW57dr7hYRu/ao9t8tZn2tqTVjiltGq+2jyjTK8+Ztu29Jmd0O3vteV67lnHiJaLvtUFIhrkUmz0pqJn1pJtuFt43WzpcO75oz8NJ9tRYIuJIlmfd92ex5WteMg/2XW0e3XdP6LMn1DGDbO28at6T1qO1X2y0f+UUp7QnBk7dKHzxGiyt56mem2zxX15tHtF3J06a2CPzWGDe80V7Jmd0O4AkqNnRUZZn61K1gemxcz3zgCZndDulzT3ykUxAJ93oMo+r3Z42FmZEzXvSsmurNU/edLuzPdFx4p6a0eMuz0mmt0u+V07t431ZJmFtcDu/u1VtvjOfFbRjSprGm6ae1k0mbmJzcDseeWrzl7x+Ass4mSnHWvbstbdyjl/hSXNReicFNeV3SVjePdW+j6L2t1EmZ3Q7vddbz1W19YoUUdaqNo/KR5omZ3Q7up+0Y2r0d4/6SttntqyIJmx0OyV5WQOenTdXyzgpj42Y91Y5bS71mosQbPWeGmnn95YlNRe2tOyylseG3nla8q+thu26blu82ypy3tMox13EHD9LMpd6zWkIctJGYY/lbO2yquX7EEbPgbXleCgnbO/yVrW5VyZndDuj9qjd4EbledCOqV6aUbpRPUbtUytzNvDwzlOS/6iMXWOhx6OtVs17EU6cS3fWCQqrfvsJdhutEni4k1ZqwGIUrESuYgI4CEEKgCxGy84ENEByJ336CSy+n3HAQkADvCs1siBwAV6OlRqQAkEKSIEmbmJzcDsGpEBQA1IgqAEp8OknrMSXJm5ic3A7Af/g2419ndaep9Vnpd65h98DvIMayW8uvLGTPbz5IqmhPfp2tY/md1fouzkRPw56Iq51u4xt1z2nHSs1GRsZVhkFjsyxeK2oJm5ic3A7pncxlT8rz4X3HvT1e9DX/qS/nH2fY+kHnCR8Jmx0O+5YqSl/wn104Ukv5F6aUTqPMiT5W36+viZsdDvW8kyyVb60TK82lwSyo3y07aFdop/pq1HZ3uNKkl4yXmbLnKUZF6Mx5dlftXw9xtgsyU9CtObViLlgpv8kdavVZdQGM+NAQ3vteLdVq2yP+8bIzPwmYW1wO72O1ee0c6PwdeG1tF6zTC6tdJ5lWAeiJmFtcDv9LOmydevvHm2uLVubjyQ/SZ4z9Vk9rqx2lBklor+u1yzpJOVqaPOy3PQlr9fqcc3lHitDs+lXzbG99tk1h6+6biPPXbMnr2r3p59agU0vqmyt8EjesUuPt5ShWfJtpe0d6zlgtbvSvdq8RZOPtD2+nWM0F4427c5xdU+vuZHPlnkSz/66Xu+txHiMsZ285oKeX/H/pUH9zNwX2R+j9onq+4h50rMOnudeq6/onE75nprepCH5m+R1zd/LgaFJMzJKGz0ZWtrPu82j8xmllbZ3VNqIcWW1o8wo3v3V+7tXuRJR78Aj5oITrJpjd7VPxCZsdDvpUQev8qfyOSWouZNcwGXEFlmGJY0mYW1wO0iTvOZl9K49ss13mGlvS9pd40orY39H9Zc1b0m+O3nPBVEryJ55eORvucazWHHu0213YlAz6ymTcCZhbXA73jdbJmx0O99v8D/E2tXOZZn3G2ErUGYmbHQ76NBeHfc9NZbVhUjajrs/3y7Tep5D5gG1q82j++4JffaEOqKN/kO0Vfe4R9u9UfgS8Syu3JzmWQ7+8GrziL7jRrPPW661FWPsupmdvnH7ftO1pMUY97iBe1CzozEsG/ekap3vMSlkHjSntLlHJmd0O5KL/KQmbmJzcDsn87jK6mljbJXrWq21TxkmbmJzcDu9sX28RN3jHm3nnprR4y7PwV52sqSM1vJexotwRZvvzmeFp4wrTT1PaP+otpG2/QnX/Kpx8rSxsZrlGtc4eaUr+txd7Ahqygpslnc5tU1wvY1x2k5oPbe01CtSRFkr2lyStzUfafrofjpxXEnbZ/XE1JssV9VlZpysHmOj8eBVrqU/Wm8gtceMeJ6j9fqaaR9L2oh50nr+J8wb1bKj9tRIT673efvRCsBSdm0ZtJemdvFZ6zXrvmwbmf/HUIbXY0RNJmd0O6P22NVXp4wrj/Y57ZF0BGk71F5bPcbKG6I2wNCUMzs2ZoLBVn22rwL836h9pI/VrOfjOU9qeZ27Rx2q5ez87Sfpca2Gmz2+l8b6/R3RN4FywHiXt6LNPcq9v9Zrj97NqFWeh1PGlaR9amXuCGZGdYmcKGfafscYG+Xt0X8njY2r3Ii5z3oTHvX7KO2nkl7ar57zpOX8Z87dS/Ocvr/fKcEvHOuaKN+4jyS73+fd/Zrq/E/5SDfsMApWIldGATgjqAGAuP0pONvbH1WkO38ePwGA32Z3G7FSAwQuQAoZf9ASvBBBCkiBJm5ic3A7BqRAUANSIKgBKRDUgBQIakAKBDUgBYIakAJBCkiBJm5ic3A7BqRAUANSIKgBKRDUgBQIakAKBDUgBYIakAJBCkiBJm5ic3A7BqRAUANSIKgBKRDUgBQIakAKBDUgBYIakAJBCkiBJm5ic3A7BqRAUANSIKgBKRDUgBT+BmIRGXly0EsGSUVORK5CYII=" alt="">Transparent</li>
<li>Can be removed with Protektor Thinner </li>
<li>Descent resistance to organic solvents</li>
<li>Descent resistance to Fungal Growth, dust, dirt</li>
</ul>
<p>DIRECTIONS TO USE: The cleaned metal blade are to be brushed, sprayed or dipped in the Meta Coat for in accordance to the relevant processes CAUTION: Keep out of reach from children.Do not spray in eyes or mouth If spray gets in eyes, flush with water. If swallowed do not induce vomitting, Call Physician</p>`,
    descriptionHtml: `<p><img alt=""><img alt="">PRODUCT DESCRIPTION: Protektor Meta Coat UV is a fast drying single component acrylic lacquer to protect Metal Surfaces from harsh environments, moisture, corrosion, dirt &amp; dust, fungus, caustic vapors, etc.</p>
<p><img alt="">BENEFITS:</p>
<ul>
<li>Protects Metal Surfaces from harsh environments</li>
<li>Fast Drying and dry to touch time of less than few minutes </li>
<li>Single component Lacquer </li>
<li>Protects from Corrosion </li>
<li>Protects against Humidity, Salinity and Moisture</li>
<li>
<img src="data:image/png;base64,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" alt="">Transparent</li>
<li>Can be removed with Protektor Thinner </li>
<li>Descent resistance to organic solvents</li>
<li>Descent resistance to Fungal Growth, dust, dirt</li>
</ul>
<p>DIRECTIONS TO USE: The cleaned metal blade are to be brushed, sprayed or dipped in the Meta Coat for in accordance to the relevant processes CAUTION: Keep out of reach from children.Do not spray in eyes or mouth If spray gets in eyes, flush with water. If swallowed do not induce vomitting, Call Physician</p>`,
    price: '5200.00',
    compareAtPrice: '6000.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/3508_c5f80c51-c5f7-458e-b561-8341ececc6fa.png?v=1750421084', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/a-circular-metal-saw-blade-in-a-well-lit-industrial-workshop.png?v=1754558456', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/a-circular-metal-saw-blade-being-sprayed-with-a-transparent-protective-coating-in-a-workshop.png?v=1754558456'],
    variants: [
      { id: 48607619416310, title: 'Default Title', price: '5200.00', sku: '3508', available: true },
    ],
    productType: 'Electronics',
    tags: ['Automotive', 'Electronics', 'Speciality Products', 'Welding'],
    vendor: 'Micron Aerosols™',
    series: 'S2000',
    collection: 'industrial-welding-fabrication',
  },
  {
    id: 8535944888566,
    handle: 'electrical-contact-cleaner',
    title: '3211 Non Flammable Contact Cleaner | M.A.M.A | 500ml',
    description: `<p data-end="209" data-start="159"><strong data-end="209" data-start="159">Safe. Fast. Effective. Even on Live Equipment.</strong></p>
<p data-end="668" data-start="211">Our <strong data-end="254" data-start="215">Non-Flammable Contact Cleaner Spray</strong> is a high-performance, precision-engineered cleaner formulated for safe and efficient removal of dirt, oil, flux, oxidation, and other contaminants from sensitive electronic and electrical components. Designed with a <strong data-end="502" data-start="472">non-flammable solvent base</strong> and propelled using <strong data-end="540" data-start="523">inert CO₂ gas</strong>, this spray is <strong data-end="667" data-start="556">completely safe to use on live control panels, connectors, relays, sensors, PCBs, and electrical assemblies</strong>.</p>
<p data-end="925" data-start="670">It leaves <strong data-end="694" data-start="680">no residue</strong>, <strong data-end="715" data-start="696">dries instantly</strong>, and ensures <strong data-end="749" data-start="729">minimal downtime</strong> during maintenance. Whether you're working in industrial automation, power distribution, telecom, or instrumentation, this contact cleaner is your go-to maintenance essential.</p>
<h3 data-end="955" data-start="932">✅ <strong data-end="954" data-start="938">Key Features</strong>:</h3>
<ul data-end="1268" data-start="956">
<li data-end="1025" data-start="956">
<p data-end="1025" data-start="958"><strong data-end="983" data-start="958">Non-Flammable Formula</strong> – Safe for use on <strong data-end="1025" data-start="1002">energized equipment</strong></p>
</li>
<li data-end="1058" data-start="1026">
<p data-end="1058" data-start="1028"><strong data-end="1058" data-start="1028">Fast Drying &amp; Residue-Free</strong></p>
</li>
<li data-end="1102" data-start="1059">
<p data-end="1102" data-start="1061"><strong data-end="1102" data-start="1061">Removes Oil, Grease, Flux &amp; Oxidation</strong></p>
</li>
<li data-end="1161" data-start="1103">
<p data-end="1161" data-start="1105"><strong data-end="1124" data-start="1105">Dielectric Safe</strong> – Suitable for sensitive electronics</p>
</li>
<li data-end="1198" data-start="1162">
<p data-end="1198" data-start="1164"><strong data-end="1198" data-start="1164">Non-Conductive &amp; Non-Corrosive</strong></p>
</li>
<li data-end="1268" data-start="1199">
<p data-end="1268" data-start="1201"><strong data-end="1240" data-start="1201">No Ozone-Depleting Substances (ODS)</strong> – Environmentally conscious</p>
</li>
</ul>
<hr data-end="1273" data-start="1270">
<h3 data-end="1304" data-start="1275">🛠️ <strong data-end="1303" data-start="1283">Ideal For Use On</strong>:</h3>
<div dir="ltr" align="left">
<table>
<colgroup><col width="459"></colgroup>
<tbody>
<tr>
<td>
<h3 dir="ltr"><span>Electrical &amp; Electronic Components</span></h3>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Printed Circuit Boards (PCBs)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Relay contacts</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Switches and buttons</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Terminal blocks</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Potentiometers (if sealed)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Sensors and actuators</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Solenoids</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Fuses and fuse holders</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Electric connectors (DIN, Molex, etc.)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Contact points and pins</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Socket assemblies</span></p>
</li>
</ul>
<h3 dir="ltr"><span>Mechanical &amp; Industrial Equipment</span></h3>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Control panels (energized and de-energized)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Motor terminals and windings</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Transformers (surface only, not immersed)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Inverter boards</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Contactors</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Servo drives</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Industrial robotics joints (non-lubricated zones)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Automation system interfaces</span></p>
</li>
</ul>
<h3 dir="ltr"><span>Office &amp; Computing Equipment</span></h3>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Keyboard internals</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Mouse circuit boards</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Laptop and desktop motherboards</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>USB ports and HDMI terminals</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Network switchboards and router ports</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Fan housings (after power off)</span></p>
</li>
</ul>
<p dir="ltr"><span>Automotive &amp; Transportation Systems</span></p>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>ECU connectors</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Fuse boxes and relay boards</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Sensor harness connectors</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Lighting module terminals</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>ABS/ESP unit contact points</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Battery connectors (dry cleaning only)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Ignition module boards</span></p>
</li>
</ul>
<h3 dir="ltr"><span>Aerospace &amp; Defense Applications</span></h3>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Avionics PCBs</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Communication equipment terminals</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Missile control boards (after testing for compatibility)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Radar and navigation modules</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>RF module connectors</span></p>
</li>
</ul>
<h3 dir="ltr"><span>Telecom &amp; Industrial Systems</span></h3>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Server racks &amp; data centers</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Antenna and RF module interfaces</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Telecom switchboards</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>SCADA terminals</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Control relays and PLCs</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Field sensor terminals</span></p>
</li>
</ul>
<h3 dir="ltr"><span>Tools &amp; Maintenance Equipment</span></h3>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Multimeter probe connectors</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Power tool contact zones</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Soldering station terminals</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Test bench relay boards</span></p>
</li>
</ul>
<p dir="ltr"><span>Home Appliances &amp; Consumer Electronics</span></p>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>TV circuit boards</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Power supply units</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Microwave control boards</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Washing machine control panels</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Fridge PCB &amp; display unit</span></p>
</li>
</ul>
<h2 dir="ltr"><span>Use With Caution / Test Compatibility First</span></h2>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Polycarbonate (PC)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Polystyrene (PS)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>ABS plastic (may stress crack)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Acrylic surfaces</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Varnished or lacquered surfaces</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Paint-coated surfaces</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>LCD screens (edges may delaminate)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Rubber or elastomeric gaskets</span><span><br><br></span></p>
</li>
</ul>
<h2 dir="ltr"><span>Not Compatible For</span></h2>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Energized equipment with exposed arcs</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Non-insulated high-voltage terminals under active load</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Fiber optics connectors (sensitive to solvents)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Immersion cleaning of components</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Painted decorative panels</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Rubber-sealed relays </span></p>
</li>
</ul>
</td>
</tr>
</tbody>
</table>
</div>
<p> </p>`,
    descriptionHtml: `<p data-end="209" data-start="159"><strong data-end="209" data-start="159">Safe. Fast. Effective. Even on Live Equipment.</strong></p>
<p data-end="668" data-start="211">Our <strong data-end="254" data-start="215">Non-Flammable Contact Cleaner Spray</strong> is a high-performance, precision-engineered cleaner formulated for safe and efficient removal of dirt, oil, flux, oxidation, and other contaminants from sensitive electronic and electrical components. Designed with a <strong data-end="502" data-start="472">non-flammable solvent base</strong> and propelled using <strong data-end="540" data-start="523">inert CO₂ gas</strong>, this spray is <strong data-end="667" data-start="556">completely safe to use on live control panels, connectors, relays, sensors, PCBs, and electrical assemblies</strong>.</p>
<p data-end="925" data-start="670">It leaves <strong data-end="694" data-start="680">no residue</strong>, <strong data-end="715" data-start="696">dries instantly</strong>, and ensures <strong data-end="749" data-start="729">minimal downtime</strong> during maintenance. Whether you're working in industrial automation, power distribution, telecom, or instrumentation, this contact cleaner is your go-to maintenance essential.</p>
<h3 data-end="955" data-start="932">✅ <strong data-end="954" data-start="938">Key Features</strong>:</h3>
<ul data-end="1268" data-start="956">
<li data-end="1025" data-start="956">
<p data-end="1025" data-start="958"><strong data-end="983" data-start="958">Non-Flammable Formula</strong> – Safe for use on <strong data-end="1025" data-start="1002">energized equipment</strong></p>
</li>
<li data-end="1058" data-start="1026">
<p data-end="1058" data-start="1028"><strong data-end="1058" data-start="1028">Fast Drying &amp; Residue-Free</strong></p>
</li>
<li data-end="1102" data-start="1059">
<p data-end="1102" data-start="1061"><strong data-end="1102" data-start="1061">Removes Oil, Grease, Flux &amp; Oxidation</strong></p>
</li>
<li data-end="1161" data-start="1103">
<p data-end="1161" data-start="1105"><strong data-end="1124" data-start="1105">Dielectric Safe</strong> – Suitable for sensitive electronics</p>
</li>
<li data-end="1198" data-start="1162">
<p data-end="1198" data-start="1164"><strong data-end="1198" data-start="1164">Non-Conductive &amp; Non-Corrosive</strong></p>
</li>
<li data-end="1268" data-start="1199">
<p data-end="1268" data-start="1201"><strong data-end="1240" data-start="1201">No Ozone-Depleting Substances (ODS)</strong> – Environmentally conscious</p>
</li>
</ul>
<hr data-end="1273" data-start="1270">
<h3 data-end="1304" data-start="1275">🛠️ <strong data-end="1303" data-start="1283">Ideal For Use On</strong>:</h3>
<div dir="ltr" align="left">
<table>
<colgroup><col width="459"></colgroup>
<tbody>
<tr>
<td>
<h3 dir="ltr"><span>Electrical &amp; Electronic Components</span></h3>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Printed Circuit Boards (PCBs)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Relay contacts</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Switches and buttons</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Terminal blocks</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Potentiometers (if sealed)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Sensors and actuators</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Solenoids</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Fuses and fuse holders</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Electric connectors (DIN, Molex, etc.)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Contact points and pins</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Socket assemblies</span></p>
</li>
</ul>
<h3 dir="ltr"><span>Mechanical &amp; Industrial Equipment</span></h3>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Control panels (energized and de-energized)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Motor terminals and windings</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Transformers (surface only, not immersed)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Inverter boards</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Contactors</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Servo drives</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Industrial robotics joints (non-lubricated zones)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Automation system interfaces</span></p>
</li>
</ul>
<h3 dir="ltr"><span>Office &amp; Computing Equipment</span></h3>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Keyboard internals</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Mouse circuit boards</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Laptop and desktop motherboards</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>USB ports and HDMI terminals</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Network switchboards and router ports</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Fan housings (after power off)</span></p>
</li>
</ul>
<p dir="ltr"><span>Automotive &amp; Transportation Systems</span></p>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>ECU connectors</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Fuse boxes and relay boards</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Sensor harness connectors</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Lighting module terminals</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>ABS/ESP unit contact points</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Battery connectors (dry cleaning only)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Ignition module boards</span></p>
</li>
</ul>
<h3 dir="ltr"><span>Aerospace &amp; Defense Applications</span></h3>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Avionics PCBs</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Communication equipment terminals</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Missile control boards (after testing for compatibility)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Radar and navigation modules</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>RF module connectors</span></p>
</li>
</ul>
<h3 dir="ltr"><span>Telecom &amp; Industrial Systems</span></h3>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Server racks &amp; data centers</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Antenna and RF module interfaces</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Telecom switchboards</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>SCADA terminals</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Control relays and PLCs</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Field sensor terminals</span></p>
</li>
</ul>
<h3 dir="ltr"><span>Tools &amp; Maintenance Equipment</span></h3>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Multimeter probe connectors</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Power tool contact zones</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Soldering station terminals</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Test bench relay boards</span></p>
</li>
</ul>
<p dir="ltr"><span>Home Appliances &amp; Consumer Electronics</span></p>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>TV circuit boards</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Power supply units</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Microwave control boards</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Washing machine control panels</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Fridge PCB &amp; display unit</span></p>
</li>
</ul>
<h2 dir="ltr"><span>Use With Caution / Test Compatibility First</span></h2>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Polycarbonate (PC)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Polystyrene (PS)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>ABS plastic (may stress crack)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Acrylic surfaces</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Varnished or lacquered surfaces</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Paint-coated surfaces</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>LCD screens (edges may delaminate)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Rubber or elastomeric gaskets</span><span><br><br></span></p>
</li>
</ul>
<h2 dir="ltr"><span>Not Compatible For</span></h2>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Energized equipment with exposed arcs</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Non-insulated high-voltage terminals under active load</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Fiber optics connectors (sensitive to solvents)</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Immersion cleaning of components</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Painted decorative panels</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Rubber-sealed relays </span></p>
</li>
</ul>
</td>
</tr>
</tbody>
</table>
</div>
<p> </p>`,
    price: '850.00',
    compareAtPrice: '1050.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/3701A.png?v=1750333505', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_23_64e599be-8bbd-4834-9811-b410de8454a5.png?v=1750333521', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Contact_Cleaner_0652727b-b7a5-414b-8c6e-8e28bd9debe9.png?v=1765864105', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_copy_2_54b5c444-2ccb-4da8-82b5-b0324957a79a.png?v=1765864029', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_copy_d897d87f-ae5c-471e-b079-60e102c65250.png?v=1765864029', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_copy_12_e49fecf8-7655-4dfd-ba4b-8d5d2cda4be6.png?v=1765864029', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_copy_11_8120471c-5468-4237-b0ac-d387d32b8a2f.png?v=1765864029', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_copy_13_86b4804f-a3f6-4aa5-b6ef-095b4d8e8ef1.png?v=1765864029', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_copy_14_10bcb680-e888-4205-8043-243ae3ffb4fb.png?v=1765864029', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_copy_3_0b22b167-3880-4298-b859-82a4e61e4b61.png?v=1765864029', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_af100c10-0b52-4b64-a984-868d6a766e37.png?v=1765864029'],
    variants: [
      { id: 46475378131190, title: 'Default Title', price: '850.00', sku: '3211', available: true },
    ],
    productType: '',
    tags: ['Electronics'],
    vendor: 'Micron Aerosols™',
    series: 'S3000',
    collection: 'electronics',
  },
  {
    id: 9038607188214,
    handle: 'm-a-m-a-silicon-spray-super-silicon-multipurpose-spray-550ml-odourless-colourless-toxin-free-lubricant',
    title: '4500 M.A.M.A Silicon Spray | Super SIlicon Multipurpose Spray | 550ml Odourless, Colourless, Toxin Free, Lubricant',
    description: `<h3 data-start="406" data-end="438">🧴 <strong data-start="413" data-end="436">Product Description</strong>
</h3>
<p data-start="439" data-end="757">A premium-grade, non-staining, colourless, odourless silicone spray designed to <strong data-start="519" data-end="562">lubricate, protect, shine, and preserve</strong>. Ideal for use on plastic, rubber, metal, glass, and wooden surfaces, this spray forms a durable, water-repellent film that reduces friction, prevents rust, and enhances longevity of components.</p>
<hr data-start="759" data-end="762">
<h3 data-start="764" data-end="786">⭐ <strong data-start="770" data-end="786">Key Benefits</strong>
</h3>
<ul data-start="788" data-end="1223">
<li data-start="788" data-end="850">
<p data-start="790" data-end="850">✔ <strong data-start="792" data-end="818">Odourless &amp; Colourless</strong> – Leaves no stains or residue</p>
</li>
<li data-start="851" data-end="932">
<p data-start="853" data-end="932">✔ <strong data-start="855" data-end="887">Anti-Rust &amp; Moisture Barrier</strong> – Protects against corrosion and oxidation</p>
</li>
<li data-start="933" data-end="988">
<p data-start="935" data-end="988">✔ <strong data-start="937" data-end="955">Non-Conductive</strong> – Safe for electrical contacts</p>
</li>
<li data-start="989" data-end="1066">
<p data-start="991" data-end="1066">✔ <strong data-start="993" data-end="1022">Prevents Sticking &amp; Aging</strong> – Preserves rubber and plastic components</p>
</li>
<li data-start="1067" data-end="1155">
<p data-start="1069" data-end="1155">✔ <strong data-start="1071" data-end="1094">Multi-Surface Shine</strong> – Enhances appearance of rubber, vinyl, plastic, and metal</p>
</li>
<li data-start="1156" data-end="1223">
<p data-start="1158" data-end="1223">✔ <strong data-start="1160" data-end="1191">Wide Temperature Resistance</strong> – Works in harsh environments</p>
</li>
</ul>
<hr data-start="1225" data-end="1228">
<h3 data-start="1230" data-end="1259">🛠️ <strong data-start="1238" data-end="1259">Directions to Use</strong>
</h3>
<ol data-start="1261" data-end="1586">
<li data-start="1261" data-end="1300">
<p data-start="1264" data-end="1300"><strong data-start="1264" data-end="1286">Shake the can well</strong> before use.</p>
</li>
<li data-start="1301" data-end="1357">
<p data-start="1304" data-end="1357"><strong data-start="1304" data-end="1325">Clean the surface</strong> of dirt, grease, or moisture.</p>
</li>
<li data-start="1358" data-end="1423">
<p data-start="1361" data-end="1423"><strong data-start="1361" data-end="1385">Hold the can upright</strong> 15–20 cm away from the target area.</p>
</li>
<li data-start="1424" data-end="1473">
<p data-start="1427" data-end="1473"><strong data-start="1427" data-end="1455">Spray a light, even coat</strong> on the surface.</p>
</li>
<li data-start="1474" data-end="1522">
<p data-start="1477" data-end="1522">Allow a few minutes for the film to settle.</p>
</li>
<li data-start="1523" data-end="1586">
<p data-start="1526" data-end="1586">For electrical parts, ensure power is OFF before spraying.</p>
</li>
</ol>
<blockquote data-start="1588" data-end="1636">
<p data-start="1590" data-end="1636"><em data-start="1590" data-end="1636">Wipe off excess with a soft cloth if needed.</em></p>
</blockquote>
<hr data-start="1638" data-end="1641">
<h3 data-start="1643" data-end="1665">🔧 <strong data-start="1650" data-end="1665">Common Uses</strong>
</h3>
<h4 data-start="1667" data-end="1691">🚗 <strong data-start="1675" data-end="1689">Automotive</strong>
</h4>
<ul data-start="1692" data-end="1821">
<li data-start="1692" data-end="1733">
<p data-start="1694" data-end="1733">Power window tracks, sunroof channels</p>
</li>
<li data-start="1734" data-end="1777">
<p data-start="1736" data-end="1777">Door hinges, rubber beading, seat rails</p>
</li>
<li data-start="1778" data-end="1821">
<p data-start="1780" data-end="1821">Dashboard polish, engine bay protection</p>
</li>
</ul>
<h4 data-start="1823" data-end="1855">🏠 <strong data-start="1831" data-end="1853">Home &amp; Maintenance</strong>
</h4>
<ul data-start="1856" data-end="1986">
<li data-start="1856" data-end="1893">
<p data-start="1858" data-end="1893">Door locks, sliding doors/windows</p>
</li>
<li data-start="1894" data-end="1935">
<p data-start="1896" data-end="1935">Curtain rods, drawer sliders, zippers</p>
</li>
<li data-start="1936" data-end="1986">
<p data-start="1938" data-end="1986">Kitchen appliances (exterior), sewing machines</p>
</li>
</ul>
<h4 data-start="1988" data-end="2012">⚙️ <strong data-start="1996" data-end="2010">Industrial</strong>
</h4>
<ul data-start="2013" data-end="2149">
<li data-start="2013" data-end="2060">
<p data-start="2015" data-end="2060">Mould release agent for plastic/rubber dies</p>
</li>
<li data-start="2061" data-end="2101">
<p data-start="2063" data-end="2101">Conveyor belts, pulleys, and rollers</p>
</li>
<li data-start="2102" data-end="2149">
<p data-start="2104" data-end="2149">Treadmills, CNC machinery, packing machines</p>
</li>
</ul>
<h4 data-start="2151" data-end="2175">💡 <strong data-start="2159" data-end="2173">Electrical</strong>
</h4>
<ul data-start="2176" data-end="2306">
<li data-start="2176" data-end="2218">
<p data-start="2178" data-end="2218">Switches, plugs, sockets (non-powered)</p>
</li>
<li data-start="2219" data-end="2261">
<p data-start="2221" data-end="2261">Battery terminals (prevents corrosion)</p>
</li>
<li data-start="2262" data-end="2306">
<p data-start="2264" data-end="2306">PCB and contact protection from moisture</p>
</li>
</ul>`,
    descriptionHtml: `<h3 data-start="406" data-end="438">🧴 <strong data-start="413" data-end="436">Product Description</strong>
</h3>
<p data-start="439" data-end="757">A premium-grade, non-staining, colourless, odourless silicone spray designed to <strong data-start="519" data-end="562">lubricate, protect, shine, and preserve</strong>. Ideal for use on plastic, rubber, metal, glass, and wooden surfaces, this spray forms a durable, water-repellent film that reduces friction, prevents rust, and enhances longevity of components.</p>
<hr data-start="759" data-end="762">
<h3 data-start="764" data-end="786">⭐ <strong data-start="770" data-end="786">Key Benefits</strong>
</h3>
<ul data-start="788" data-end="1223">
<li data-start="788" data-end="850">
<p data-start="790" data-end="850">✔ <strong data-start="792" data-end="818">Odourless &amp; Colourless</strong> – Leaves no stains or residue</p>
</li>
<li data-start="851" data-end="932">
<p data-start="853" data-end="932">✔ <strong data-start="855" data-end="887">Anti-Rust &amp; Moisture Barrier</strong> – Protects against corrosion and oxidation</p>
</li>
<li data-start="933" data-end="988">
<p data-start="935" data-end="988">✔ <strong data-start="937" data-end="955">Non-Conductive</strong> – Safe for electrical contacts</p>
</li>
<li data-start="989" data-end="1066">
<p data-start="991" data-end="1066">✔ <strong data-start="993" data-end="1022">Prevents Sticking &amp; Aging</strong> – Preserves rubber and plastic components</p>
</li>
<li data-start="1067" data-end="1155">
<p data-start="1069" data-end="1155">✔ <strong data-start="1071" data-end="1094">Multi-Surface Shine</strong> – Enhances appearance of rubber, vinyl, plastic, and metal</p>
</li>
<li data-start="1156" data-end="1223">
<p data-start="1158" data-end="1223">✔ <strong data-start="1160" data-end="1191">Wide Temperature Resistance</strong> – Works in harsh environments</p>
</li>
</ul>
<hr data-start="1225" data-end="1228">
<h3 data-start="1230" data-end="1259">🛠️ <strong data-start="1238" data-end="1259">Directions to Use</strong>
</h3>
<ol data-start="1261" data-end="1586">
<li data-start="1261" data-end="1300">
<p data-start="1264" data-end="1300"><strong data-start="1264" data-end="1286">Shake the can well</strong> before use.</p>
</li>
<li data-start="1301" data-end="1357">
<p data-start="1304" data-end="1357"><strong data-start="1304" data-end="1325">Clean the surface</strong> of dirt, grease, or moisture.</p>
</li>
<li data-start="1358" data-end="1423">
<p data-start="1361" data-end="1423"><strong data-start="1361" data-end="1385">Hold the can upright</strong> 15–20 cm away from the target area.</p>
</li>
<li data-start="1424" data-end="1473">
<p data-start="1427" data-end="1473"><strong data-start="1427" data-end="1455">Spray a light, even coat</strong> on the surface.</p>
</li>
<li data-start="1474" data-end="1522">
<p data-start="1477" data-end="1522">Allow a few minutes for the film to settle.</p>
</li>
<li data-start="1523" data-end="1586">
<p data-start="1526" data-end="1586">For electrical parts, ensure power is OFF before spraying.</p>
</li>
</ol>
<blockquote data-start="1588" data-end="1636">
<p data-start="1590" data-end="1636"><em data-start="1590" data-end="1636">Wipe off excess with a soft cloth if needed.</em></p>
</blockquote>
<hr data-start="1638" data-end="1641">
<h3 data-start="1643" data-end="1665">🔧 <strong data-start="1650" data-end="1665">Common Uses</strong>
</h3>
<h4 data-start="1667" data-end="1691">🚗 <strong data-start="1675" data-end="1689">Automotive</strong>
</h4>
<ul data-start="1692" data-end="1821">
<li data-start="1692" data-end="1733">
<p data-start="1694" data-end="1733">Power window tracks, sunroof channels</p>
</li>
<li data-start="1734" data-end="1777">
<p data-start="1736" data-end="1777">Door hinges, rubber beading, seat rails</p>
</li>
<li data-start="1778" data-end="1821">
<p data-start="1780" data-end="1821">Dashboard polish, engine bay protection</p>
</li>
</ul>
<h4 data-start="1823" data-end="1855">🏠 <strong data-start="1831" data-end="1853">Home &amp; Maintenance</strong>
</h4>
<ul data-start="1856" data-end="1986">
<li data-start="1856" data-end="1893">
<p data-start="1858" data-end="1893">Door locks, sliding doors/windows</p>
</li>
<li data-start="1894" data-end="1935">
<p data-start="1896" data-end="1935">Curtain rods, drawer sliders, zippers</p>
</li>
<li data-start="1936" data-end="1986">
<p data-start="1938" data-end="1986">Kitchen appliances (exterior), sewing machines</p>
</li>
</ul>
<h4 data-start="1988" data-end="2012">⚙️ <strong data-start="1996" data-end="2010">Industrial</strong>
</h4>
<ul data-start="2013" data-end="2149">
<li data-start="2013" data-end="2060">
<p data-start="2015" data-end="2060">Mould release agent for plastic/rubber dies</p>
</li>
<li data-start="2061" data-end="2101">
<p data-start="2063" data-end="2101">Conveyor belts, pulleys, and rollers</p>
</li>
<li data-start="2102" data-end="2149">
<p data-start="2104" data-end="2149">Treadmills, CNC machinery, packing machines</p>
</li>
</ul>
<h4 data-start="2151" data-end="2175">💡 <strong data-start="2159" data-end="2173">Electrical</strong>
</h4>
<ul data-start="2176" data-end="2306">
<li data-start="2176" data-end="2218">
<p data-start="2178" data-end="2218">Switches, plugs, sockets (non-powered)</p>
</li>
<li data-start="2219" data-end="2261">
<p data-start="2221" data-end="2261">Battery terminals (prevents corrosion)</p>
</li>
<li data-start="2262" data-end="2306">
<p data-start="2264" data-end="2306">PCB and contact protection from moisture</p>
</li>
</ul>`,
    price: '520.00',
    compareAtPrice: '600.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/3508.png?v=1747973743', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/4500_Features.png?v=1747973767'],
    variants: [
      { id: 48314216808694, title: 'Default Title', price: '520.00', sku: '', available: true },
    ],
    productType: 'Automotive',
    tags: ['Automotive', 'Speciality Products'],
    vendor: 'Micron Aerosols™',
    series: 'S4000',
    collection: 'essentials',
  },
  {
    id: 9019301757174,
    handle: 'ceramic-powder-coating-spray',
    title: '2131 Ceramic Powder Coating Spray',
    description: `<p>Ceramic Powder Coating Spray provides with a even Surface coating of Ceramic Powder with a fast evaporating solvent.</p>
<p>Used heavily in </p>
<ul class="marker:text-textOff list-disc">
<li>
<p class="my-0"><strong>Heat Treatment Operations:</strong><span> </span>Heat treatment involves exposing metals and components to high temperatures to alter their physical and mechanical properties. Ceramic coatings, especially high-temperature resistant ceramic sprays, are widely used in such environments to protect tooling, fixtures, and equipment surfaces from oxidation, scaling, and thermal degradation.</p>
</li>
<li>
<p class="my-0"><strong>Protective Coatings on Fixtures and Tooling:</strong><span> </span> Ceramic protective sprays can be applied on fixtures, jigs, and furnace parts to reduce wear and contamination during repeated thermal cycles.</p>
</li>
<li>
<p class="my-0"><strong>Thermal Barrier Coatings:</strong><span> </span>Ceramic sprays can act as thermal barriers on components undergoing heat treatment, potentially improving process consistency and reducing heat loss.</p>
</li>
<li>
<p class="my-0"><strong>Maintenance and Longevity:</strong><span> </span>Applying ceramic coatings on heat treatment equipment can reduce downtime caused by corrosion or surface damage, thus enhancing operational efficiency.</p>
</li>
</ul>`,
    descriptionHtml: `<p>Ceramic Powder Coating Spray provides with a even Surface coating of Ceramic Powder with a fast evaporating solvent.</p>
<p>Used heavily in </p>
<ul class="marker:text-textOff list-disc">
<li>
<p class="my-0"><strong>Heat Treatment Operations:</strong><span> </span>Heat treatment involves exposing metals and components to high temperatures to alter their physical and mechanical properties. Ceramic coatings, especially high-temperature resistant ceramic sprays, are widely used in such environments to protect tooling, fixtures, and equipment surfaces from oxidation, scaling, and thermal degradation.</p>
</li>
<li>
<p class="my-0"><strong>Protective Coatings on Fixtures and Tooling:</strong><span> </span> Ceramic protective sprays can be applied on fixtures, jigs, and furnace parts to reduce wear and contamination during repeated thermal cycles.</p>
</li>
<li>
<p class="my-0"><strong>Thermal Barrier Coatings:</strong><span> </span>Ceramic sprays can act as thermal barriers on components undergoing heat treatment, potentially improving process consistency and reducing heat loss.</p>
</li>
<li>
<p class="my-0"><strong>Maintenance and Longevity:</strong><span> </span>Applying ceramic coatings on heat treatment equipment can reduce downtime caused by corrosion or surface damage, thus enhancing operational efficiency.</p>
</li>
</ul>`,
    price: '2400.00',
    compareAtPrice: '2000.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/CeramicCoatingSpray.png?v=1745390830', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/2131_F_8fa02878-f483-4588-913a-9b580d32f5d9.png?v=1750399839'],
    variants: [
      { id: 48188101951734, title: 'Default Title', price: '2400.00', sku: '', available: true },
    ],
    productType: 'Industrial',
    tags: ['Industrial'],
    vendor: 'Micron Aerosols™',
    series: 'S2000',
    collection: 'speciality-products',
  },
  {
    id: 9009271210230,
    handle: 'protektor-pcb-cleaner-550ml',
    title: '3400 Protektor® PCB Cleaner',
    description: `<p>Protektor PCB Cleaner is a solvent based cleaner for use on printed circuit boards (PCBs) to efficiently remove light soiling such as thin oils, thermal paste, light flux residue, ink, solvent soluble coatings and grime.</p>
<ul>
<li>Excellent material compatibility</li>
<li>Specifically formulated for use on delicate electronics</li>
<li>Evaporates quickly, leaving a clean, dry, residue-free surface</li>
<li>Provides a clean surface for the re-application of conformal coating</li>
<li>Cleans and degreases printed circuit boards</li>
<li>Removes grime from electrical components</li>
<li>Cleans contact points on wires and terminals</li>
<li>Removes contaminants and post-processing residues</li>
<li>Efficient cleaning as part of scheduled maintenance</li>
<li>Excellent cleaning efficiency at room temperature</li>
<li>
<meta charset="utf-8">
<p>Non-ionic and non-corrosive <meta charset="utf-8"></p>
</li>
<li>
<p>Non-carcinogenic and relatively nontoxic</p>
</li>
</ul>
<p><meta charset="utf-8"><span>It is effective as a solvent to dissolve misprinted solder paste, wave soldered flux residues and other organic contaminants from electronic assemblies. It provides rapid, effective and safe cleaning action. This cleaning solvent is a non-ionic and relatively non-toxic liquid with a mild odour.</span><br></p>`,
    descriptionHtml: `<p>Protektor PCB Cleaner is a solvent based cleaner for use on printed circuit boards (PCBs) to efficiently remove light soiling such as thin oils, thermal paste, light flux residue, ink, solvent soluble coatings and grime.</p>
<ul>
<li>Excellent material compatibility</li>
<li>Specifically formulated for use on delicate electronics</li>
<li>Evaporates quickly, leaving a clean, dry, residue-free surface</li>
<li>Provides a clean surface for the re-application of conformal coating</li>
<li>Cleans and degreases printed circuit boards</li>
<li>Removes grime from electrical components</li>
<li>Cleans contact points on wires and terminals</li>
<li>Removes contaminants and post-processing residues</li>
<li>Efficient cleaning as part of scheduled maintenance</li>
<li>Excellent cleaning efficiency at room temperature</li>
<li>
<meta charset="utf-8">
<p>Non-ionic and non-corrosive <meta charset="utf-8"></p>
</li>
<li>
<p>Non-carcinogenic and relatively nontoxic</p>
</li>
</ul>
<p><meta charset="utf-8"><span>It is effective as a solvent to dissolve misprinted solder paste, wave soldered flux residues and other organic contaminants from electronic assemblies. It provides rapid, effective and safe cleaning action. This cleaning solvent is a non-ionic and relatively non-toxic liquid with a mild odour.</span><br></p>`,
    price: '720.00',
    compareAtPrice: '600.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/3400_A.png?v=1744360831', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/PCB_Cleaner_A.png?v=1744361199', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/a-closeup-shot-of-a-pcb-being-cleaned-by-a-clear-transparent-liquid-in-spray-form.png?v=1754551073', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/3407_A.png?v=1754551073', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/3407_B.png?v=1754551073', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/3400_B.png?v=1754551073', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/PCBCleaner.png?v=1754551073'],
    variants: [
      { id: 48157710156022, title: '550ml Aerosol', price: '720.00', sku: '', available: true },
      { id: 48157710188790, title: '1ltr Bulk Liquid', price: '1000.00', sku: '', available: true },
    ],
    productType: 'Electronics',
    tags: ['Electronics'],
    vendor: 'Micron Aerosols™',
    series: 'S3000',
    collection: 'electronics',
  },
  {
    id: 8777248145654,
    handle: 'zinc-aluminium-touch-up-paint-500ml',
    title: '2200 Zinc Aluminium Touch Up Paint | 500ml',
    description: `<p data-start="216" data-end="655">Our <strong data-start="220" data-end="253">Zinc Aluminium Touch-Up Spray</strong> is a high-performance touch up <strong data-start="276" data-end="302">coating</strong> designed to provide a <strong data-start="325" data-end="355">durable, weather-resistant</strong> barrier for galvanized and metal surfaces. Engineered for <strong data-start="414" data-end="465">industrial, automotive, and marine applications</strong>, this spray delivers a <strong data-start="489" data-end="516">quick-drying, zinc-rich</strong> finish that seamlessly blends with existing coatings, ensuring <strong data-start="580" data-end="652">maximum protection against rust, oxidation, and environmental damage</strong>.</p>
<h3 data-start="657" data-end="680"><strong data-start="661" data-end="678">Key Features:</strong></h3>
<p data-start="681" data-end="1222">✅ <strong data-start="683" data-end="716">Superior Protection</strong> – Forms a <strong data-start="727" data-end="753">sacrificial zinc layer</strong> that prevents rust and extends the life of metal surfaces.<br data-start="812" data-end="815">✅ <strong data-start="817" data-end="838">Seamless Touch-Up</strong> – Matches existing <strong data-start="858" data-end="881">galvanized coatings</strong> for a smooth, professional finish.<br data-start="916" data-end="919">✅ <strong data-start="921" data-end="944">Fast-Drying Formula</strong> – Quick to apply and <strong data-start="966" data-end="990">dries within minutes</strong> for <strong data-start="995" data-end="1017">instant protection</strong>.<br data-start="1018" data-end="1021">✅ <strong data-start="1023" data-end="1051" data-is-only-node="">Heat &amp; Weather Resistant</strong> – Withstands <strong data-start="1065" data-end="1113">high temperatures, moisture, and UV exposure</strong> for long-lasting performance.<br data-start="1143" data-end="1146">✅ <strong data-start="1148" data-end="1168">Easy Application</strong> – No need for complex tools—just spray and protect!</p>
<h3 data-start="1224" data-end="1247"><strong data-start="1228" data-end="1245">Where to Use:</strong></h3>
<p data-start="1248" data-end="1430">🔹 <strong data-start="1251" data-end="1290">Galvanized Steel &amp; Metal Structures</strong><br data-start="1290" data-end="1293">🔹 <strong data-start="1296" data-end="1343">Pipelines, Machinery &amp; Industrial Equipment</strong><br data-start="1343" data-end="1346">🔹 <strong data-start="1349" data-end="1383">Automobile &amp; Marine Components</strong><br data-start="1383" data-end="1386">🔹 <strong data-start="1389" data-end="1428">Fences, Railings &amp; Outdoor Fixtures</strong></p>
<p data-start="1432" data-end="1636">Perfect for <strong data-start="1444" data-end="1502">repairing weld seams, scratches, and worn-out coatings</strong>, our Zinc Aluminium Touch-Up Spray ensures your metal surfaces stay <strong data-start="1571" data-end="1615">strong, rust-free, and visually flawless</strong> for years to come.</p>
<p data-start="1638" data-end="1714"><strong data-start="1641" data-end="1709">Defend Your Metal. Trust the Power of Zinc-Aluminium Protection!</strong></p>`,
    descriptionHtml: `<p data-start="216" data-end="655">Our <strong data-start="220" data-end="253">Zinc Aluminium Touch-Up Spray</strong> is a high-performance touch up <strong data-start="276" data-end="302">coating</strong> designed to provide a <strong data-start="325" data-end="355">durable, weather-resistant</strong> barrier for galvanized and metal surfaces. Engineered for <strong data-start="414" data-end="465">industrial, automotive, and marine applications</strong>, this spray delivers a <strong data-start="489" data-end="516">quick-drying, zinc-rich</strong> finish that seamlessly blends with existing coatings, ensuring <strong data-start="580" data-end="652">maximum protection against rust, oxidation, and environmental damage</strong>.</p>
<h3 data-start="657" data-end="680"><strong data-start="661" data-end="678">Key Features:</strong></h3>
<p data-start="681" data-end="1222">✅ <strong data-start="683" data-end="716">Superior Protection</strong> – Forms a <strong data-start="727" data-end="753">sacrificial zinc layer</strong> that prevents rust and extends the life of metal surfaces.<br data-start="812" data-end="815">✅ <strong data-start="817" data-end="838">Seamless Touch-Up</strong> – Matches existing <strong data-start="858" data-end="881">galvanized coatings</strong> for a smooth, professional finish.<br data-start="916" data-end="919">✅ <strong data-start="921" data-end="944">Fast-Drying Formula</strong> – Quick to apply and <strong data-start="966" data-end="990">dries within minutes</strong> for <strong data-start="995" data-end="1017">instant protection</strong>.<br data-start="1018" data-end="1021">✅ <strong data-start="1023" data-end="1051" data-is-only-node="">Heat &amp; Weather Resistant</strong> – Withstands <strong data-start="1065" data-end="1113">high temperatures, moisture, and UV exposure</strong> for long-lasting performance.<br data-start="1143" data-end="1146">✅ <strong data-start="1148" data-end="1168">Easy Application</strong> – No need for complex tools—just spray and protect!</p>
<h3 data-start="1224" data-end="1247"><strong data-start="1228" data-end="1245">Where to Use:</strong></h3>
<p data-start="1248" data-end="1430">🔹 <strong data-start="1251" data-end="1290">Galvanized Steel &amp; Metal Structures</strong><br data-start="1290" data-end="1293">🔹 <strong data-start="1296" data-end="1343">Pipelines, Machinery &amp; Industrial Equipment</strong><br data-start="1343" data-end="1346">🔹 <strong data-start="1349" data-end="1383">Automobile &amp; Marine Components</strong><br data-start="1383" data-end="1386">🔹 <strong data-start="1389" data-end="1428">Fences, Railings &amp; Outdoor Fixtures</strong></p>
<p data-start="1432" data-end="1636">Perfect for <strong data-start="1444" data-end="1502">repairing weld seams, scratches, and worn-out coatings</strong>, our Zinc Aluminium Touch-Up Spray ensures your metal surfaces stay <strong data-start="1571" data-end="1615">strong, rust-free, and visually flawless</strong> for years to come.</p>
<p data-start="1638" data-end="1714"><strong data-start="1641" data-end="1709">Defend Your Metal. Trust the Power of Zinc-Aluminium Protection!</strong></p>`,
    price: '720.00',
    compareAtPrice: '600.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/2200_4c3a30ad-6578-4335-ad4f-91d96d31d2d7.png?v=1747974280', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Touch_Up_Spray.png?v=1754543738', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Zinc_spray.png?v=1765864141', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Touch_up_paint_1-min.png?v=1765864141', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Touchup_paint_3-min.png?v=1765864141', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/touch_up_paint_4-min.png?v=1765864141'],
    variants: [
      { id: 47045535236342, title: 'Default Title', price: '720.00', sku: '', available: true },
    ],
    productType: '',
    tags: [],
    vendor: 'Micron Aerosols™',
    series: 'S2000',
    collection: 'speciality-products',
  },
  {
    id: 8865041383670,
    handle: 'protektor-acrylic-sealant-1ltr-for-electronics',
    title: '3307 Protektor Acrylic Sealant 1ltr for Electronics',
    description: `<p>Our <strong>Acrylic Sealant</strong> is a highly specialized, high-performance, soft clear sealant coating designed to protect sensitive electronic components, such as <strong>exposed electrical solders, connections, PCBs, and sensors</strong>, from environmental factors that can degrade performance or cause failure. This versatile sealant forms a <strong>thin, durable, and transparent barrier</strong> over electronic surfaces, offering long-lasting protection against <strong>moisture, humidity, temperature fluctuations, corrosion, electric shocks, and fungal growth</strong>.</p>
<p>Key features of the <strong>Acrylic Sealant</strong> include:</p>
<ul>
<li>
<strong>Moisture and Humidity Resistance</strong>: Forms a robust, waterproof layer that prevents water ingress and moisture-induced corrosion, ensuring optimal functionality even in humid or damp environments.</li>
<li>
<strong>Temperature Stability</strong>: Offers excellent protection over a wide temperature range, making it suitable for electronics exposed to varying or extreme thermal conditions.</li>
<li>
<strong>Corrosion Inhibition</strong>: Protects sensitive electronic components from oxidation and environmental degradation, enhancing the durability of solder joints and connectors.</li>
<li>
<strong>Electrical Insulation</strong>: Provides a non-conductive barrier that prevents accidental short circuits and reduces the risk of electric shocks, keeping the system safe and reliable.</li>
<li>
<strong>Fungus Resistance</strong>: The sealant contains antifungal properties to prevent microbial growth, which can cause degradation of electronic components in humid environments.</li>
<li>
<strong>Easy Application</strong>: The sealant can be sprayed, brushed, or dipped onto electronic surfaces, forming a smooth, uniform coating that dries quickly and bonds well to a wide range of materials.</li>
</ul>
<h3>Applications:</h3>
<ul>
<li><strong>Printed Circuit Boards (PCBs)</strong></li>
<li><strong>Sensors and Connectors</strong></li>
<li><strong>Exposed Electrical Solder Joints</strong></li>
<li><strong>Delicate electronic assemblies in consumer electronics, automotive, aerospace, and industrial equipment</strong></li>
</ul>
<h3>Advantages:</h3>
<ul>
<li>
<strong>Transparent and Non-Yellowing</strong>: Maintains the appearance of components without altering their visual aesthetics.</li>
<li>
<strong>Fast Drying</strong>: Allows for quick turnaround times in manufacturing and repair environments.</li>
<li>
<strong>Environmentally Resistant</strong>: Withstands harsh conditions, including UV radiation, heat, cold, and exposure to chemicals.</li>
</ul>
<h3>Available Formats:</h3>
<p>The <strong>Acrylic Sealant for Electronics</strong> is available in various packaging formats such as  bulk liquid for dipping, and brush-on bottles, catering to different industrial and DIY applications.</p>
<p>This sealant provides a comprehensive protective solution for critical electronic components, ensuring <strong>extended lifespan, improved reliability, and enhanced performance</strong> across a wide range of applications.</p>`,
    descriptionHtml: `<p>Our <strong>Acrylic Sealant</strong> is a highly specialized, high-performance, soft clear sealant coating designed to protect sensitive electronic components, such as <strong>exposed electrical solders, connections, PCBs, and sensors</strong>, from environmental factors that can degrade performance or cause failure. This versatile sealant forms a <strong>thin, durable, and transparent barrier</strong> over electronic surfaces, offering long-lasting protection against <strong>moisture, humidity, temperature fluctuations, corrosion, electric shocks, and fungal growth</strong>.</p>
<p>Key features of the <strong>Acrylic Sealant</strong> include:</p>
<ul>
<li>
<strong>Moisture and Humidity Resistance</strong>: Forms a robust, waterproof layer that prevents water ingress and moisture-induced corrosion, ensuring optimal functionality even in humid or damp environments.</li>
<li>
<strong>Temperature Stability</strong>: Offers excellent protection over a wide temperature range, making it suitable for electronics exposed to varying or extreme thermal conditions.</li>
<li>
<strong>Corrosion Inhibition</strong>: Protects sensitive electronic components from oxidation and environmental degradation, enhancing the durability of solder joints and connectors.</li>
<li>
<strong>Electrical Insulation</strong>: Provides a non-conductive barrier that prevents accidental short circuits and reduces the risk of electric shocks, keeping the system safe and reliable.</li>
<li>
<strong>Fungus Resistance</strong>: The sealant contains antifungal properties to prevent microbial growth, which can cause degradation of electronic components in humid environments.</li>
<li>
<strong>Easy Application</strong>: The sealant can be sprayed, brushed, or dipped onto electronic surfaces, forming a smooth, uniform coating that dries quickly and bonds well to a wide range of materials.</li>
</ul>
<h3>Applications:</h3>
<ul>
<li><strong>Printed Circuit Boards (PCBs)</strong></li>
<li><strong>Sensors and Connectors</strong></li>
<li><strong>Exposed Electrical Solder Joints</strong></li>
<li><strong>Delicate electronic assemblies in consumer electronics, automotive, aerospace, and industrial equipment</strong></li>
</ul>
<h3>Advantages:</h3>
<ul>
<li>
<strong>Transparent and Non-Yellowing</strong>: Maintains the appearance of components without altering their visual aesthetics.</li>
<li>
<strong>Fast Drying</strong>: Allows for quick turnaround times in manufacturing and repair environments.</li>
<li>
<strong>Environmentally Resistant</strong>: Withstands harsh conditions, including UV radiation, heat, cold, and exposure to chemicals.</li>
</ul>
<h3>Available Formats:</h3>
<p>The <strong>Acrylic Sealant for Electronics</strong> is available in various packaging formats such as  bulk liquid for dipping, and brush-on bottles, catering to different industrial and DIY applications.</p>
<p>This sealant provides a comprehensive protective solution for critical electronic components, ensuring <strong>extended lifespan, improved reliability, and enhanced performance</strong> across a wide range of applications.</p>`,
    price: '1400.00',
    compareAtPrice: '1600.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/3307.png?v=1728107309'],
    variants: [
      { id: 47318590292214, title: 'Default Title', price: '1400.00', sku: '3507', available: true },
    ],
    productType: 'Electronics',
    tags: ['Electronics'],
    vendor: 'Micron Aerosols™',
    series: 'S3000',
    collection: 'electronics',
  },
  {
    id: 8819970048246,
    handle: 'mould-cleaner-550ml',
    title: '1220 Mould Cleaner | 550ml',
    description: `<p data-start="215" data-end="271" class=""><strong data-start="215" data-end="271">High-Performance Cleaner for Moulds, Dies, and Tools</strong></p>
<p data-start="273" data-end="708" class=""><strong data-start="273" data-end="286">Overview:</strong><br data-start="286" data-end="289">Micron Aerosols Mould Cleaner is a fast-evaporating, industrial-grade solvent cleaner engineered to deliver exceptional cleaning performance for all types of plastic moulds, metal dies, and industrial tools. Specially formulated to penetrate and dissolve stubborn residues, it removes grease, wax, oil, and light carbon deposits without leaving behind any residue — ensuring precision, speed, and efficiency in tool maintenance.</p>
<p data-start="710" data-end="985" class="">Designed for use in demanding manufacturing environments, Micron Mould Cleaner offers performance on par with (and in many cases exceeding) top global brands like Ambersil — while being proudly <strong data-start="904" data-end="921">Made in India</strong>, optimized for local conditions, and priced more competitively.</p>
<hr data-start="987" data-end="990" class="">
<h3 data-start="992" data-end="1013" class=""><strong data-start="996" data-end="1013">Key Features:</strong></h3>
<p data-start="1015" data-end="1127" class="">✅ <strong data-start="1017" data-end="1042">Fast Evaporation Rate</strong> – Dries rapidly to minimize downtime and preparation time between production cycles.</p>
<p data-start="1129" data-end="1259" class="">✅ <strong data-start="1131" data-end="1154">Residue-Free Finish</strong> – Leaves no film, ensuring no surface contamination that could affect mould performance or part quality.</p>
<p data-start="1261" data-end="1396" class="">✅ <strong data-start="1263" data-end="1288">Strong Solvency Power</strong> – Effectively removes grease, silicones, waxes, mould-release agents, and light carbon from metal surfaces.</p>
<p data-start="1398" data-end="1511" class="">✅ <strong data-start="1400" data-end="1418">Safe on Metals</strong> – Non-corrosive and compatible with most metals used in industrial tooling and mould-making.</p>
<p data-start="1513" data-end="1634" class="">✅ <strong data-start="1515" data-end="1549">Convenient Aerosol Application</strong> – Easy-to-use spray format allows for precise, targeted cleaning with minimal waste.</p>
<p data-start="1636" data-end="1716" class="">✅ <strong data-start="1638" data-end="1656">Non-Conductive</strong> – Safe for use around electrical components when fully dry.</p>
<p data-start="1718" data-end="1873" class="">✅ <strong data-start="1720" data-end="1756">Ideal for Preventive Maintenance</strong> – Helps extend mould life and maintain production quality by keeping moulds clean and free from contaminant buildup.</p>
<hr data-start="1875" data-end="1878" class="">
<h3 data-start="1880" data-end="1909" class=""><strong data-start="1884" data-end="1909">Typical Applications:</strong></h3>
<ul data-start="1911" data-end="2195">
<li data-start="1911" data-end="1950" class="">
<p data-start="1913" data-end="1950" class="">Injection moulding tool maintenance</p>
</li>
<li data-start="1951" data-end="1995" class="">
<p data-start="1953" data-end="1995" class="">Cleaning compression or extrusion moulds</p>
</li>
<li data-start="1996" data-end="2060" class="">
<p data-start="1998" data-end="2060" class="">Pre-treatment before applying anti-rust or protective sprays</p>
</li>
<li data-start="2061" data-end="2101" class="">
<p data-start="2063" data-end="2101" class="">Toolroom and die shop cleaning tasks</p>
</li>
<li data-start="2102" data-end="2144" class="">
<p data-start="2104" data-end="2144" class="">Automotive plastic part moulding units</p>
</li>
<li data-start="2145" data-end="2195" class="">
<p data-start="2147" data-end="2195" class="">Electronics and medical-grade component moulders</p>
</li>
</ul>
<hr data-start="2197" data-end="2200" class="">
<h3 data-start="2202" data-end="2269" class=""><strong data-start="2206" data-end="2269">Why Choose Micron Mould Cleaner Over Imported Alternatives?</strong></h3>
<ul data-start="2271" data-end="2616">
<li data-start="2271" data-end="2319" class="">
<p data-start="2273" data-end="2319" class="">🇮🇳 <strong data-start="2278" data-end="2317">Made in India for Indian Conditions</strong></p>
</li>
<li data-start="2320" data-end="2403" class="">
<p data-start="2322" data-end="2403" class="">💸 <strong data-start="2325" data-end="2349">Better Value per Use</strong> — comparable performance at a more economical price</p>
</li>
<li data-start="2404" data-end="2475" class="">
<p data-start="2406" data-end="2475" class="">🔄 <strong data-start="2409" data-end="2436">Easy Local Availability</strong> with fast logistics and distribution</p>
</li>
<li data-start="2476" data-end="2550" class="">
<p data-start="2478" data-end="2550" class="">🛠️ <strong data-start="2482" data-end="2512">Custom Formulation Support</strong> — available for high-volume clients</p>
</li>
<li data-start="2551" data-end="2616" class="">
<p data-start="2553" data-end="2616" class="">🧪 <strong data-start="2556" data-end="2616">Backed by Micron’s Proven Industrial Chemistry Expertise</strong></p>
</li>
</ul>
<hr data-start="2721" data-end="2724" class="">
<p data-start="2726" data-end="3071" class=""><strong data-start="2726" data-end="2750">Micron Aerosols</strong> is trusted by toolrooms, automotive OEMs, plastics manufacturers, and electronics firms across the country for its consistent quality and performance. If you’re looking to upgrade your maintenance without overpaying for imported brands, it’s time to switch to <strong data-start="3011" data-end="3035">Micron Aerosols Mould Cleaner</strong> — <strong data-start="3038" data-end="3071">cleaner tools, better output.</strong></p>
<!---->`,
    descriptionHtml: `<p data-start="215" data-end="271" class=""><strong data-start="215" data-end="271">High-Performance Cleaner for Moulds, Dies, and Tools</strong></p>
<p data-start="273" data-end="708" class=""><strong data-start="273" data-end="286">Overview:</strong><br data-start="286" data-end="289">Micron Aerosols Mould Cleaner is a fast-evaporating, industrial-grade solvent cleaner engineered to deliver exceptional cleaning performance for all types of plastic moulds, metal dies, and industrial tools. Specially formulated to penetrate and dissolve stubborn residues, it removes grease, wax, oil, and light carbon deposits without leaving behind any residue — ensuring precision, speed, and efficiency in tool maintenance.</p>
<p data-start="710" data-end="985" class="">Designed for use in demanding manufacturing environments, Micron Mould Cleaner offers performance on par with (and in many cases exceeding) top global brands like Ambersil — while being proudly <strong data-start="904" data-end="921">Made in India</strong>, optimized for local conditions, and priced more competitively.</p>
<hr data-start="987" data-end="990" class="">
<h3 data-start="992" data-end="1013" class=""><strong data-start="996" data-end="1013">Key Features:</strong></h3>
<p data-start="1015" data-end="1127" class="">✅ <strong data-start="1017" data-end="1042">Fast Evaporation Rate</strong> – Dries rapidly to minimize downtime and preparation time between production cycles.</p>
<p data-start="1129" data-end="1259" class="">✅ <strong data-start="1131" data-end="1154">Residue-Free Finish</strong> – Leaves no film, ensuring no surface contamination that could affect mould performance or part quality.</p>
<p data-start="1261" data-end="1396" class="">✅ <strong data-start="1263" data-end="1288">Strong Solvency Power</strong> – Effectively removes grease, silicones, waxes, mould-release agents, and light carbon from metal surfaces.</p>
<p data-start="1398" data-end="1511" class="">✅ <strong data-start="1400" data-end="1418">Safe on Metals</strong> – Non-corrosive and compatible with most metals used in industrial tooling and mould-making.</p>
<p data-start="1513" data-end="1634" class="">✅ <strong data-start="1515" data-end="1549">Convenient Aerosol Application</strong> – Easy-to-use spray format allows for precise, targeted cleaning with minimal waste.</p>
<p data-start="1636" data-end="1716" class="">✅ <strong data-start="1638" data-end="1656">Non-Conductive</strong> – Safe for use around electrical components when fully dry.</p>
<p data-start="1718" data-end="1873" class="">✅ <strong data-start="1720" data-end="1756">Ideal for Preventive Maintenance</strong> – Helps extend mould life and maintain production quality by keeping moulds clean and free from contaminant buildup.</p>
<hr data-start="1875" data-end="1878" class="">
<h3 data-start="1880" data-end="1909" class=""><strong data-start="1884" data-end="1909">Typical Applications:</strong></h3>
<ul data-start="1911" data-end="2195">
<li data-start="1911" data-end="1950" class="">
<p data-start="1913" data-end="1950" class="">Injection moulding tool maintenance</p>
</li>
<li data-start="1951" data-end="1995" class="">
<p data-start="1953" data-end="1995" class="">Cleaning compression or extrusion moulds</p>
</li>
<li data-start="1996" data-end="2060" class="">
<p data-start="1998" data-end="2060" class="">Pre-treatment before applying anti-rust or protective sprays</p>
</li>
<li data-start="2061" data-end="2101" class="">
<p data-start="2063" data-end="2101" class="">Toolroom and die shop cleaning tasks</p>
</li>
<li data-start="2102" data-end="2144" class="">
<p data-start="2104" data-end="2144" class="">Automotive plastic part moulding units</p>
</li>
<li data-start="2145" data-end="2195" class="">
<p data-start="2147" data-end="2195" class="">Electronics and medical-grade component moulders</p>
</li>
</ul>
<hr data-start="2197" data-end="2200" class="">
<h3 data-start="2202" data-end="2269" class=""><strong data-start="2206" data-end="2269">Why Choose Micron Mould Cleaner Over Imported Alternatives?</strong></h3>
<ul data-start="2271" data-end="2616">
<li data-start="2271" data-end="2319" class="">
<p data-start="2273" data-end="2319" class="">🇮🇳 <strong data-start="2278" data-end="2317">Made in India for Indian Conditions</strong></p>
</li>
<li data-start="2320" data-end="2403" class="">
<p data-start="2322" data-end="2403" class="">💸 <strong data-start="2325" data-end="2349">Better Value per Use</strong> — comparable performance at a more economical price</p>
</li>
<li data-start="2404" data-end="2475" class="">
<p data-start="2406" data-end="2475" class="">🔄 <strong data-start="2409" data-end="2436">Easy Local Availability</strong> with fast logistics and distribution</p>
</li>
<li data-start="2476" data-end="2550" class="">
<p data-start="2478" data-end="2550" class="">🛠️ <strong data-start="2482" data-end="2512">Custom Formulation Support</strong> — available for high-volume clients</p>
</li>
<li data-start="2551" data-end="2616" class="">
<p data-start="2553" data-end="2616" class="">🧪 <strong data-start="2556" data-end="2616">Backed by Micron’s Proven Industrial Chemistry Expertise</strong></p>
</li>
</ul>
<hr data-start="2721" data-end="2724" class="">
<p data-start="2726" data-end="3071" class=""><strong data-start="2726" data-end="2750">Micron Aerosols</strong> is trusted by toolrooms, automotive OEMs, plastics manufacturers, and electronics firms across the country for its consistent quality and performance. If you’re looking to upgrade your maintenance without overpaying for imported brands, it’s time to switch to <strong data-start="3011" data-end="3035">Micron Aerosols Mould Cleaner</strong> — <strong data-start="3038" data-end="3071">cleaner tools, better output.</strong></p>
<!---->`,
    price: '520.00',
    compareAtPrice: '600.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/1220A.png?v=1724666846', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/MOULD_CLEANER.png?v=1726214134', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Mould_Cleaner_c9a43cb8-4e84-4724-abbd-a1d3a63c48e8.png?v=1765864076', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Mould_Cleaner_F1.png?v=1765864076', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Mould_Cleaner_F3.png?v=1765864076', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Mould_Cleaner_F2.png?v=1765864076', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/1220B.png?v=1765864076', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/1220_U.png?v=1765864076'],
    variants: [
      { id: 47173132091638, title: 'Default Title', price: '520.00', sku: '1220', available: true },
    ],
    productType: 'Plastic Moulding',
    tags: ['Plastic Moulding'],
    vendor: 'Micron Aerosols™',
    series: 'S1000',
    collection: 'plastic-moulding',
  },
  {
    id: 8753722228982,
    handle: 'lighter-gas-refill-can-550ml-with-refill-adapter-micron-aerosols®-for-lighters-jeweller-torch-pack-of-2',
    title: '4200 Lighter Gas Refill Can 550ml | Metal Valve | Micron Aerosols® | For Lighters, Jeweller Torch',
    description: `<p>Micron Aerosols® Burner Gas 550ml is your perfect tool to refill Lighters and Jeweller Torches. Burner Gas comes with a versatile high quality plastic Refill Adapter to fill different types of Lighters and Torches. Now you can fill your favourite lighters and torches with high octane Butane Gas and use them for longer.</p>
<!---->`,
    descriptionHtml: `<p>Micron Aerosols® Burner Gas 550ml is your perfect tool to refill Lighters and Jeweller Torches. Burner Gas comes with a versatile high quality plastic Refill Adapter to fill different types of Lighters and Torches. Now you can fill your favourite lighters and torches with high octane Butane Gas and use them for longer.</p>
<!---->`,
    price: '399.00',
    compareAtPrice: '450.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/2_Burner_gas.png?v=1749639070', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/4200_F.png?v=1750600813', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Burner_Flame_gun.png?v=1750600813', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Burner_Gas_Metal_Tube_Filling.png?v=1750600813', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Burner_Gas_Metal_Tube.png?v=1750600813', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Burner_gas.png?v=1750600813', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_15.png?v=1750600813', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/BurnerGas2.png?v=1750600813', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/3.jpg?v=1750600813', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/2.jpg?v=1750600813'],
    variants: [
      { id: 47222656336118, title: 'Jet Flame Lighter + 550ml Lighter Refill Gas in Metal Valve', price: '399.00', sku: '', available: true },
      { id: 47222656401654, title: '550ml Burner Gas Lighter Refill Gas X 2 Metal Valve', price: '350.00', sku: '', available: true },
    ],
    productType: 'Specialty Products',
    tags: ['Trekking & Hiking'],
    vendor: 'Micron Aerosols™',
    series: 'S4000',
    collection: 'essentials',
  },
  {
    id: 8691077415158,
    handle: 'micron-aerosols®-butane-firefly-butane-gas-cartridge-400ml-for-portable-gas-stoves-flame-guns-flame-throwers-pack-of-4',
    title: '4300 Micron Aerosols® Butane Firefly | Butane Gas Cartridge | For Portable Gas Stoves, Flame Guns, Flame Throwers',
    description: `<ul class="a-unordered-list a-vertical a-spacing-mini">
<li class="a-spacing-mini"><span class="a-list-item">Universal Adaptor fits Global Standard Stoves, Torches, Brazing Guns, Fogging Machines</span></li>
<li class="a-spacing-mini"><span class="a-list-item">Super High Calorific Value, works for ~2.5Hrs with basic flame</span></li>
<li class="a-spacing-mini"><span class="a-list-item">De-odorized, Ultra-filtered Gas, Refined for Consistent Ignition, No Clogging of Valves</span></li>
<li class="a-spacing-mini"><span class="a-list-item">Planet Safe, Releases No CFC (ChloroFluoroCarbon) and Does not use Freon</span></li>
<li class="a-spacing-mini"><span class="a-list-item">Used for Trekking, Camping, Barbeque, Jewellery Making, Thawing, Soldering, Electronics Repair and More</span></li>
</ul>
<h3 class="a-spacing-mini">Portable Butane Fire Torch</h3>
<p><span class="a-text-bold">Unleash the Power of Fire: The Portable Butane Flame Torch!</span></p>
<ol class="a-ordered-list a-vertical">
<li><span class="a-list-item"><span class="a-text-bold">Culinary Wizardry:</span><span> </span>Channel your inner chef and transform your kitchen into a gourmet paradise! Perfect your crème brûlée with a golden, caramelized crust, sear your steaks to perfection, or add that smoky char to your veggies. Your dinner parties will never be the same!</span></li>
<li><span class="a-list-item"><span class="a-text-bold">Crafts and Hobbies</span>: Whether you’re a DIY enthusiast or a passionate crafter, the butane torch is your go-to tool for all things creative. Use it for jewellry making, glass sculpting, or even to create stunning resin art.</span></li>
<li><span class="a-list-item"><span class="a-text-bold">Camping and Outdoor Adventures</span>: Bring the heat to your camping trips with ease. Start campfires effortlessly, cook meals on the go, or even use it to light your BBQ grill.</span></li>
<li><span class="a-list-item"><span class="a-text-bold">Automotive Genius</span><span> </span>: For the gearheads and car enthusiasts, this torch is a game-changer. Use it for loosening stubborn bolts, repairing exhaust systems, or even for custom car modifications.</span></li>
</ol>
<!---->`,
    descriptionHtml: `<ul class="a-unordered-list a-vertical a-spacing-mini">
<li class="a-spacing-mini"><span class="a-list-item">Universal Adaptor fits Global Standard Stoves, Torches, Brazing Guns, Fogging Machines</span></li>
<li class="a-spacing-mini"><span class="a-list-item">Super High Calorific Value, works for ~2.5Hrs with basic flame</span></li>
<li class="a-spacing-mini"><span class="a-list-item">De-odorized, Ultra-filtered Gas, Refined for Consistent Ignition, No Clogging of Valves</span></li>
<li class="a-spacing-mini"><span class="a-list-item">Planet Safe, Releases No CFC (ChloroFluoroCarbon) and Does not use Freon</span></li>
<li class="a-spacing-mini"><span class="a-list-item">Used for Trekking, Camping, Barbeque, Jewellery Making, Thawing, Soldering, Electronics Repair and More</span></li>
</ul>
<h3 class="a-spacing-mini">Portable Butane Fire Torch</h3>
<p><span class="a-text-bold">Unleash the Power of Fire: The Portable Butane Flame Torch!</span></p>
<ol class="a-ordered-list a-vertical">
<li><span class="a-list-item"><span class="a-text-bold">Culinary Wizardry:</span><span> </span>Channel your inner chef and transform your kitchen into a gourmet paradise! Perfect your crème brûlée with a golden, caramelized crust, sear your steaks to perfection, or add that smoky char to your veggies. Your dinner parties will never be the same!</span></li>
<li><span class="a-list-item"><span class="a-text-bold">Crafts and Hobbies</span>: Whether you’re a DIY enthusiast or a passionate crafter, the butane torch is your go-to tool for all things creative. Use it for jewellry making, glass sculpting, or even to create stunning resin art.</span></li>
<li><span class="a-list-item"><span class="a-text-bold">Camping and Outdoor Adventures</span>: Bring the heat to your camping trips with ease. Start campfires effortlessly, cook meals on the go, or even use it to light your BBQ grill.</span></li>
<li><span class="a-list-item"><span class="a-text-bold">Automotive Genius</span><span> </span>: For the gearheads and car enthusiasts, this torch is a game-changer. Use it for loosening stubborn bolts, repairing exhaust systems, or even for custom car modifications.</span></li>
</ol>
<!---->`,
    price: '700.00',
    compareAtPrice: '1000.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Packof4-min.png?v=1718252428', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_23_copy.png?v=1726046294', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Firefly_Gold.png?v=1765864216', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Cooking_with_Firefly.png?v=1765864216', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Camping.png?v=1765864216', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Jewellery_Making.png?v=1765864216', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Fogging_Machine.png?v=1765864216', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Pack_of_4_550ml-min.png?v=1765864216', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_copy_4.png?v=1765864216', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_copy_6-1.png?v=1765864216', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_14.png?v=1765864216', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Flame_Gun.png?v=1765864216', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_22.png?v=1765864216', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_4.png?v=1765864216', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_12.png?v=1765864216', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_7.png?v=1765864216', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_8_copy.png?v=1765864216', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_11.png?v=1765864216', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_8.png?v=1765864216', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_10.png?v=1765864216', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_6.png?v=1765864216', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_13.png?v=1765864216', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_5_930a3c23-9222-4d10-b64e-e01da7b1cff1.png?v=1765864216'],
    variants: [
      { id: 47222625566966, title: '400ml Pack of 4', price: '700.00', sku: '', available: true },
      { id: 47222625599734, title: '550 ml Pack of 4', price: '900.00', sku: '', available: true },
      { id: 47222625665270, title: 'Mini Portable Gas Stove + 400ml X 4 Units', price: '1499.00', sku: '', available: true },
      { id: 47222625698038, title: 'Flame Gun + 400ml X 3 Units', price: '1499.00', sku: '', available: true },
    ],
    productType: 'Specialty Products',
    tags: ['Speciality Products', 'Trekking & Hiking'],
    vendor: 'Micron Aerosols™',
    series: 'S4000',
    collection: 'essentials',
  },
  {
    id: 8535961272566,
    handle: 'electrical-contact-cleaner-500ml',
    title: '3201 Electrical Contact Cleaner | M.A.M.A | 500ml',
    description: `<p><strong>1. General description</strong><br></p>
<ul>
<li>Precision cleaner for sensitive</li>
<li>electrical/electronic equipment.</li>
<li>Removes light contaminants, dust,</li>
<li>dirt, light oils and finger prints.</li>
<li>Leaves no residue. </li>
</ul>
<p><strong>2. Features</strong><br></p>
<ul>
<li><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">• No ozone depleting action.</span></li>
<li><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">• Does not leave a residue.</span></li>
<li><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">• Non corrosive.</span></li>
<li><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">• Non conductive.</span></li>
<li><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">• Safe on all metal surfaces, does not stain.</span></li>
<li><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">• Safe on most rubbers, plastics and coatings. Test on sensitive or stressed materials before use.</span></li>
<li><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">• High purity Butane propellant, giving an active product content of 95%.</span></li>
</ul>
<p>3. Applications<br></p>
<ul>
<li>• Fast cleaning action for removal of flux traces, light oils, finger prints and other contaminants.</li>
<li>• Electro-mechanical assemblies.</li>
<li>• Control assemblies.</li>
<li>• All electrical contacts.</li>
<li>• Electronic components.</li>
<li>• Printed circuit boards.</li>
<li>• Sensors.</li>
</ul>
<p>4. Directions<br></p>
<ul>
<li>• Spray liberally and allow to run off.</li>
<li>• Use extension tube for more precise application.</li>
<li>• Use only with adequate ventilation.</li>
<li>• Test before use on sensitive materials.</li>
<li>• Do not use on energized equipment.</li>
<li>• Do not use on sensitive electronic equipment.</li>
<li>• Allow to dry completely before reactivation.</li>
<li>• Protect and re-lubricate if necessary.</li>
</ul>`,
    descriptionHtml: `<p><strong>1. General description</strong><br></p>
<ul>
<li>Precision cleaner for sensitive</li>
<li>electrical/electronic equipment.</li>
<li>Removes light contaminants, dust,</li>
<li>dirt, light oils and finger prints.</li>
<li>Leaves no residue. </li>
</ul>
<p><strong>2. Features</strong><br></p>
<ul>
<li><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">• No ozone depleting action.</span></li>
<li><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">• Does not leave a residue.</span></li>
<li><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">• Non corrosive.</span></li>
<li><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">• Non conductive.</span></li>
<li><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">• Safe on all metal surfaces, does not stain.</span></li>
<li><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">• Safe on most rubbers, plastics and coatings. Test on sensitive or stressed materials before use.</span></li>
<li><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">• High purity Butane propellant, giving an active product content of 95%.</span></li>
</ul>
<p>3. Applications<br></p>
<ul>
<li>• Fast cleaning action for removal of flux traces, light oils, finger prints and other contaminants.</li>
<li>• Electro-mechanical assemblies.</li>
<li>• Control assemblies.</li>
<li>• All electrical contacts.</li>
<li>• Electronic components.</li>
<li>• Printed circuit boards.</li>
<li>• Sensors.</li>
</ul>
<p>4. Directions<br></p>
<ul>
<li>• Spray liberally and allow to run off.</li>
<li>• Use extension tube for more precise application.</li>
<li>• Use only with adequate ventilation.</li>
<li>• Test before use on sensitive materials.</li>
<li>• Do not use on energized equipment.</li>
<li>• Do not use on sensitive electronic equipment.</li>
<li>• Allow to dry completely before reactivation.</li>
<li>• Protect and re-lubricate if necessary.</li>
</ul>`,
    price: '550.00',
    compareAtPrice: '625.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/3201.png?v=1750397789', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_23_c498bdd0-492a-4efb-ad8d-29e1dad2fa1d.png?v=1750399904', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Contact_Cleaner_0652727b-b7a5-414b-8c6e-8e28bd9debe9.png?v=1765864105', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_copy_11_2b0e0576-0329-4cab-bfd8-2b1e659d6d8f.png?v=1765864105', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_copy_12_1769d8f8-a607-40b1-b660-08749c6ad058.png?v=1765864105', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_copy_13_c91fc4f1-f900-4eb7-a1d2-4294b4a8156f.png?v=1765864105', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_copy_14_68e3c118-cb51-45ef-b560-aa18ad492159.png?v=1765864105', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_copy_2_eb4f7288-f082-4c42-9ecd-925c856cc567.png?v=1765864105', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_copy_3_08560cd0-a27c-49a8-9bed-de41c439f6f1.png?v=1765864105', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_copy_326a9dc0-2ea3-49a2-86cc-7b9688de90b8.png?v=1765864105', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_db2a4f48-01a2-4f9d-831d-968705c5ec2d.png?v=1765864105'],
    variants: [
      { id: 47325664051446, title: '500ml Pack of 1', price: '550.00', sku: '3201', available: true },
      { id: 47325664084214, title: '100ml Pack of 3', price: '450.00', sku: '3202', available: true },
    ],
    productType: 'Electronics',
    tags: ['Automotive', 'Electronics'],
    vendor: 'Micron Aerosols™',
    series: 'S3000',
    collection: 'electronics',
  },
  {
    id: 8480672088310,
    handle: 'silicon-rubber-care-agent',
    title: '1105 Silicon Rubber Care Agent | 550ml',
    description: `<p class="usp_text" data-mce-fragment="1">Ensures long-lasting protection, preservation and insulation of vehicle exterior and interior plastic, rubber and metal parts; good lubricating properties</p>
<p class="usp_text" data-mce-fragment="1"><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">Protects, maintains, lubricates &amp; insulates plastic, rubber &amp; metal components can also be used as mould release agent.</span></p>
<div class="marketingSection AT_PublicationInstructions">
<div class="marketingSection AT_PublicationApplicationArea">
<p class="level1">Suitable For:</p>
<ul>
<ul>
<li>Imparts a high-gloss finish to plastic components (e.g. roofs etc.) &amp; prevents enbrittlement.</li>
</ul>
</ul>
<ul>
<ul>
<li>Rubber components (e.g. door &amp; bonnet or hood seals, rubber buffers, side molding, water hoses, tires, etc.) are maintained, do not become brittle, do not freeze up and do not stick fast.</li>
</ul>
</ul>
<ul>
<ul>
<li>Impregnates folding roofs and covers.</li>
</ul>
</ul>
<ul>
<ul>
<li>Has antistatic properties and thus does not attract dust.</li>
</ul>
</ul>
<ul>
<ul>
<li>Protects electric contacts against damp.</li>
<li>Eliminates annoying rattles and squeaks, particularly where different materials rub (e.g. metal / plastic) servesas fitting aid, e.g. for those connections.</li>
<li>
</li>
</ul>
</ul>
</div>
<div class="marketingSection AT_ManualPub marketingSubSection">
<span class="marketingSectionTitle">Instructions</span>
<ul>
<ul>
<li>Spray on clean surfaces from a distance of 20-30 cm and smooth out with a clean, soft cloth.</li>
</ul>
</ul>
<ul>
<ul>
<li>Cleaning and care of plastic parts, care product for door seals, especially in winter.</li>
<li>Lubrication of plastic rails.</li>
</ul>
</ul>
</div>
</div>`,
    descriptionHtml: `<p class="usp_text" data-mce-fragment="1">Ensures long-lasting protection, preservation and insulation of vehicle exterior and interior plastic, rubber and metal parts; good lubricating properties</p>
<p class="usp_text" data-mce-fragment="1"><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">Protects, maintains, lubricates &amp; insulates plastic, rubber &amp; metal components can also be used as mould release agent.</span></p>
<div class="marketingSection AT_PublicationInstructions">
<div class="marketingSection AT_PublicationApplicationArea">
<p class="level1">Suitable For:</p>
<ul>
<ul>
<li>Imparts a high-gloss finish to plastic components (e.g. roofs etc.) &amp; prevents enbrittlement.</li>
</ul>
</ul>
<ul>
<ul>
<li>Rubber components (e.g. door &amp; bonnet or hood seals, rubber buffers, side molding, water hoses, tires, etc.) are maintained, do not become brittle, do not freeze up and do not stick fast.</li>
</ul>
</ul>
<ul>
<ul>
<li>Impregnates folding roofs and covers.</li>
</ul>
</ul>
<ul>
<ul>
<li>Has antistatic properties and thus does not attract dust.</li>
</ul>
</ul>
<ul>
<ul>
<li>Protects electric contacts against damp.</li>
<li>Eliminates annoying rattles and squeaks, particularly where different materials rub (e.g. metal / plastic) servesas fitting aid, e.g. for those connections.</li>
<li>
</li>
</ul>
</ul>
</div>
<div class="marketingSection AT_ManualPub marketingSubSection">
<span class="marketingSectionTitle">Instructions</span>
<ul>
<ul>
<li>Spray on clean surfaces from a distance of 20-30 cm and smooth out with a clean, soft cloth.</li>
</ul>
</ul>
<ul>
<ul>
<li>Cleaning and care of plastic parts, care product for door seals, especially in winter.</li>
<li>Lubrication of plastic rails.</li>
</ul>
</ul>
</div>
</div>`,
    price: '250.00',
    compareAtPrice: null,
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/1105.png?v=1712925523', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/1105_F.png?v=1750399805'],
    variants: [
      { id: 46356739064054, title: 'Default Title', price: '250.00', sku: '1160', available: true },
    ],
    productType: 'Plastic Moulding',
    tags: ['Plastic Moulding'],
    vendor: 'Micron Aerosol',
    series: 'S1000',
    collection: 'plastic-moulding',
  },
  {
    id: 8357463654646,
    handle: 'rang-barse-pack-of-3-colour-snow-spray',
    title: '6114 Rang Barse™ Organic Colour Spray | Holi Gift Box | Safe and Toxin Free | Pack of 3',
    description: `<p>Made with 100% Organic, Toxin Free, Water Washable Colours, Rang Barse™  Holi Colour Spray Giftbox (Pack of 3) is the Most Ideal gift for your Loved ones this Holi</p>
<p>Key Features:<br><strong></strong></p>
<p><strong>Organic Colours: </strong>Formulated with Herbal Colours made from organic ingredients like Turmeric, Spirullina, Beet root etc.</p>
<p><strong>Safe &amp; Non Toxic:</strong> Formulated with Safe Water based colours, Rang Barse Coloured Snow Spray ensures worry-free and safe experience from medically unsafe Powdered colours.</p>
<p><strong>Water Washable:</strong> The colours wash off in a single wash by simply rinsing with water and soap. Made from completely water based pigments, this is the easiest way to play Holi without causing any Skin, Eye or Lung infection. </p>
<p><strong>Eco-friendly &amp; Sustainable Holi:</strong> Made with completely biodegradable packaging and eco-friendly material, this Holi take a step towards celebrating a sustainable, eco-friendly and Toxin Free Holi.</p>
<p><strong>Returns Policy:</strong><br>Goods sold once will not be refunded. Refunds will only be issued for Damaged Products or Faulty goods after necessary investigation. In case of Damaged or Faulty goods, please reach out to d2c@micronaero.com and share order id, images and any other required documentation. </p>`,
    descriptionHtml: `<p>Made with 100% Organic, Toxin Free, Water Washable Colours, Rang Barse™  Holi Colour Spray Giftbox (Pack of 3) is the Most Ideal gift for your Loved ones this Holi</p>
<p>Key Features:<br><strong></strong></p>
<p><strong>Organic Colours: </strong>Formulated with Herbal Colours made from organic ingredients like Turmeric, Spirullina, Beet root etc.</p>
<p><strong>Safe &amp; Non Toxic:</strong> Formulated with Safe Water based colours, Rang Barse Coloured Snow Spray ensures worry-free and safe experience from medically unsafe Powdered colours.</p>
<p><strong>Water Washable:</strong> The colours wash off in a single wash by simply rinsing with water and soap. Made from completely water based pigments, this is the easiest way to play Holi without causing any Skin, Eye or Lung infection. </p>
<p><strong>Eco-friendly &amp; Sustainable Holi:</strong> Made with completely biodegradable packaging and eco-friendly material, this Holi take a step towards celebrating a sustainable, eco-friendly and Toxin Free Holi.</p>
<p><strong>Returns Policy:</strong><br>Goods sold once will not be refunded. Refunds will only be issued for Damaged Products or Faulty goods after necessary investigation. In case of Damaged or Faulty goods, please reach out to d2c@micronaero.com and share order id, images and any other required documentation. </p>`,
    price: '300.00',
    compareAtPrice: '600.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/6114Box-min_ed67bb1a-ad57-47c0-8ee0-a935f45dabe3.png?v=1708515366', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/D2C_Set_of_3_RB_2025.png?v=1738750166', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Kids_Holi.png?v=1771652815', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Girl_With_RB_3.png?v=1771652815', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Girl_With_RB_4.png?v=1771652815', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Radhikka_Madan_3.jpg?v=1771652815', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Radhikka_Madan_1.jpg?v=1771652815', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/College_kids-min.png?v=1771652815', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Delhi_Aunties-min.png?v=1771652815', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Haveli_Women_a-min.png?v=1771652815', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Mumbai_Kids-min.png?v=1771652815', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/HoliBoxB-min.png?v=1771652815', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/D2C_RB_2025.png?v=1771652815', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Lilaca-min.png?v=1771652815', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Pink-min_f73b4363-1b3b-4673-ae07-5d6a9f39fbba.png?v=1771652815', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Yellow-min_30f3ba8d-4bc1-4f1b-a4f4-4a93cd9f6507.png?v=1771652815', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/HoliBoxA-min.png?v=1771652815'],
    variants: [
      { id: 45966821622006, title: 'Default Title', price: '300.00', sku: '6114', available: true },
    ],
    productType: 'Specialty Products',
    tags: ['FESTIVE SALE', 'Speciality Products'],
    vendor: 'Micron Aerosol',
    series: 'S4000',
    collection: 'essentials',
  },
  {
    id: 8334218363126,
    handle: 'riders-united-dashboard-polish',
    title: '5100 Riders United Dashboard Polish',
    description: `<meta charset="utf-8">
<div id="featurebullets_feature_div" class="celwidget" data-feature-name="featurebullets" data-csa-c-type="widget" data-csa-c-content-id="featurebullets" data-csa-c-slot-id="featurebullets_feature_div" data-csa-c-asin="B0C1T1PJLS" data-csa-c-is-in-initial-active-row="false" data-csa-c-id="hmn0il-gk6nm5-b9paco-wz1vwt" data-cel-widget="featurebullets_feature_div" data-mce-fragment="1">
<div id="feature-bullets" class="a-section a-spacing-medium a-spacing-top-small" data-mce-fragment="1">
<ul class="a-unordered-list a-vertical a-spacing-mini" data-mce-fragment="1">
<li class="a-spacing-mini" data-mce-fragment="1"><span class="a-list-item" data-mce-fragment="1">Riders United Dashboard Polish restores the Original Finish Of Faded Plastics. It Is Safe To Be Used On Most Interior Surfaces Of Your Car, Like Dashboard, Door Trims And Other Plastic/Fibre Parts.</span></li>
<li class="a-spacing-mini" data-mce-fragment="1"><span class="a-list-item" data-mce-fragment="1">Riders United Dashboard Polish is Infused with Powerful UV Blockers That Protect From Fading, Cracking &amp; Discolouration</span></li>
<li class="a-spacing-mini" data-mce-fragment="1"><span class="a-list-item" data-mce-fragment="1">Riders United Dashboard Polish is designed To Be Non-Greasy and is infused With Antistatic Additives Which Help Repel Dirt And Dust</span></li>
<li class="a-spacing-mini" data-mce-fragment="1"><span class="a-list-item" data-mce-fragment="1">Our Dashboard Polish For Car Interior Leaves A Pleasant Smell After Use</span></li>
</ul>
<span class="edp-feature-declaration" data-edp-feature-name="featurebullets" data-edp-asin="B0C1T1PJLS" data-data-hash="1101117591" data-defects='[{"id":"defect-mismatch-info","value":"Different from product"},{"id":"defect-missing-information","value":"Missing information"},{"id":"defect-unessential-info","value":"Unimportant information"},{"id":"defect-other-productinfo-issue","value":"Other"}]' data-metadata="CATALOG" data-feature-container-id="" data-custom-event-handler="" data-display-name="Bullet Points" data-edit-data-state="featureBulletsEDPEditData" data-position="" data-resolver="CQResolver" data-mce-fragment="1"></span>
</div>
</div>
<div id="provenanceCertifications_feature_div" class="celwidget" data-feature-name="provenanceCertifications" data-csa-c-type="widget" data-csa-c-content-id="provenanceCertifications" data-csa-c-slot-id="provenanceCertifications_feature_div" data-csa-c-asin="B0C1T1PJLS" data-csa-c-is-in-initial-active-row="false" data-csa-c-id="8iup37-kyccw7-kvjm4l-9pouyg" data-cel-widget="provenanceCertifications_feature_div" data-mce-fragment="1"><br data-mce-fragment="1"></div>
<div id="customerReviewsAttributeNoExceptions_feature_div" class="celwidget" data-feature-name="customerReviewsAttributeNoExceptions" data-csa-c-type="widget" data-csa-c-content-id="customerReviewsAttributeNoExceptions" data-csa-c-slot-id="customerReviewsAttributeNoExceptions_feature_div" data-csa-c-asin="B0C1T1PJLS" data-csa-c-is-in-initial-active-row="false" data-csa-c-id="gvpown-ecg3hk-2dzf2n-e8f2ep" data-cel-widget="customerReviewsAttributeNoExceptions_feature_div" data-mce-fragment="1"><br data-mce-fragment="1"></div>
<div id="globalStoreInfoBullets_feature_div" class="celwidget" data-feature-name="globalStoreInfoBullets" data-csa-c-type="widget" data-csa-c-content-id="globalStoreInfoBullets" data-csa-c-slot-id="globalStoreInfoBullets_feature_div" data-csa-c-asin="B0C1T1PJLS" data-csa-c-is-in-initial-active-row="false" data-csa-c-id="7a5wvw-q3errk-qeg37b-uq7lls" data-cel-widget="globalStoreInfoBullets_feature_div" data-mce-fragment="1"><br data-mce-fragment="1"></div>
<div id="bissProductSpecification_feature_div" class="celwidget" data-feature-name="bissProductSpecification" data-csa-c-type="widget" data-csa-c-content-id="bissProductSpecification" data-csa-c-slot-id="bissProductSpecification_feature_div" data-csa-c-asin="B0C1T1PJLS" data-csa-c-is-in-initial-active-row="false" data-csa-c-id="oy22i6-ck0hf7-a0bych-a5mi57" data-cel-widget="bissProductSpecification_feature_div" data-mce-fragment="1"><br data-mce-fragment="1"></div>
<div id="andonCord_feature_div" class="celwidget" data-feature-name="andonCord" data-csa-c-type="widget" data-csa-c-content-id="andonCord" data-csa-c-slot-id="andonCord_feature_div" data-csa-c-asin="B0C1T1PJLS" data-csa-c-is-in-initial-active-row="false" data-csa-c-id="j42aa0-43ema-801ykx-4bgn54" data-cel-widget="andonCord_feature_div" data-mce-fragment="1"><br data-mce-fragment="1"></div>
<div id="buyingOptionNostosBadge_feature_div" class="celwidget" data-feature-name="buyingOptionNostosBadge" data-csa-c-type="widget" data-csa-c-content-id="buyingOptionNostosBadge" data-csa-c-slot-id="buyingOptionNostosBadge_feature_div" data-csa-c-asin="B0C1T1PJLS" data-csa-c-is-in-initial-active-row="false" data-csa-c-id="i6arol-i6ivhe-j6fpmf-kbbul7" data-cel-widget="buyingOptionNostosBadge_feature_div" data-mce-fragment="1"><br data-mce-fragment="1"></div>
<div id="tellAmazon_feature_div" class="celwidget" data-feature-name="tellAmazon" data-csa-c-type="widget" data-csa-c-content-id="tellAmazon" data-csa-c-slot-id="tellAmazon_feature_div" data-csa-c-asin="B0C1T1PJLS" data-csa-c-is-in-initial-active-row="false" data-csa-c-id="wl3k0c-wkte35-a7ulor-v9np31" data-cel-widget="tellAmazon_feature_div" data-mce-fragment="1">
<div class="celwidget c-f" data-csa-op-log-render="" data-csa-c-content-id="DsUnknown" data-csa-c-slot-id="DsUnknown-2" data-csa-c-type="widget" data-csa-c-painter="tell-amazon-desktop-cards" data-csa-c-id="xp18dj-5fsa7h-shmory-9q2tsj" data-cel-widget="tell-amazon-desktop_DetailPage_1" data-mce-fragment="1" cel_widget_id="tell-amazon-desktop_DetailPage_1">
<div id="CardInstanceFJupw0oRRv8DWbdsQjgqwA" data-card-metrics-id="tell-amazon-desktop_DetailPage_1" data-acp-tracking="{}" data-mix-claimed="true" data-mce-fragment="1">
<div data-asin="B0C1T1PJLS" data-marketplace="A21TJRUUN4KGV" class="_tell-amazon-desktop_style_tell_amazon_div__1YDZk" data-mce-fragment="1"></div>
</div>
</div>
</div>`,
    descriptionHtml: `<meta charset="utf-8">
<div id="featurebullets_feature_div" class="celwidget" data-feature-name="featurebullets" data-csa-c-type="widget" data-csa-c-content-id="featurebullets" data-csa-c-slot-id="featurebullets_feature_div" data-csa-c-asin="B0C1T1PJLS" data-csa-c-is-in-initial-active-row="false" data-csa-c-id="hmn0il-gk6nm5-b9paco-wz1vwt" data-cel-widget="featurebullets_feature_div" data-mce-fragment="1">
<div id="feature-bullets" class="a-section a-spacing-medium a-spacing-top-small" data-mce-fragment="1">
<ul class="a-unordered-list a-vertical a-spacing-mini" data-mce-fragment="1">
<li class="a-spacing-mini" data-mce-fragment="1"><span class="a-list-item" data-mce-fragment="1">Riders United Dashboard Polish restores the Original Finish Of Faded Plastics. It Is Safe To Be Used On Most Interior Surfaces Of Your Car, Like Dashboard, Door Trims And Other Plastic/Fibre Parts.</span></li>
<li class="a-spacing-mini" data-mce-fragment="1"><span class="a-list-item" data-mce-fragment="1">Riders United Dashboard Polish is Infused with Powerful UV Blockers That Protect From Fading, Cracking &amp; Discolouration</span></li>
<li class="a-spacing-mini" data-mce-fragment="1"><span class="a-list-item" data-mce-fragment="1">Riders United Dashboard Polish is designed To Be Non-Greasy and is infused With Antistatic Additives Which Help Repel Dirt And Dust</span></li>
<li class="a-spacing-mini" data-mce-fragment="1"><span class="a-list-item" data-mce-fragment="1">Our Dashboard Polish For Car Interior Leaves A Pleasant Smell After Use</span></li>
</ul>
<span class="edp-feature-declaration" data-edp-feature-name="featurebullets" data-edp-asin="B0C1T1PJLS" data-data-hash="1101117591" data-defects='[{"id":"defect-mismatch-info","value":"Different from product"},{"id":"defect-missing-information","value":"Missing information"},{"id":"defect-unessential-info","value":"Unimportant information"},{"id":"defect-other-productinfo-issue","value":"Other"}]' data-metadata="CATALOG" data-feature-container-id="" data-custom-event-handler="" data-display-name="Bullet Points" data-edit-data-state="featureBulletsEDPEditData" data-position="" data-resolver="CQResolver" data-mce-fragment="1"></span>
</div>
</div>
<div id="provenanceCertifications_feature_div" class="celwidget" data-feature-name="provenanceCertifications" data-csa-c-type="widget" data-csa-c-content-id="provenanceCertifications" data-csa-c-slot-id="provenanceCertifications_feature_div" data-csa-c-asin="B0C1T1PJLS" data-csa-c-is-in-initial-active-row="false" data-csa-c-id="8iup37-kyccw7-kvjm4l-9pouyg" data-cel-widget="provenanceCertifications_feature_div" data-mce-fragment="1"><br data-mce-fragment="1"></div>
<div id="customerReviewsAttributeNoExceptions_feature_div" class="celwidget" data-feature-name="customerReviewsAttributeNoExceptions" data-csa-c-type="widget" data-csa-c-content-id="customerReviewsAttributeNoExceptions" data-csa-c-slot-id="customerReviewsAttributeNoExceptions_feature_div" data-csa-c-asin="B0C1T1PJLS" data-csa-c-is-in-initial-active-row="false" data-csa-c-id="gvpown-ecg3hk-2dzf2n-e8f2ep" data-cel-widget="customerReviewsAttributeNoExceptions_feature_div" data-mce-fragment="1"><br data-mce-fragment="1"></div>
<div id="globalStoreInfoBullets_feature_div" class="celwidget" data-feature-name="globalStoreInfoBullets" data-csa-c-type="widget" data-csa-c-content-id="globalStoreInfoBullets" data-csa-c-slot-id="globalStoreInfoBullets_feature_div" data-csa-c-asin="B0C1T1PJLS" data-csa-c-is-in-initial-active-row="false" data-csa-c-id="7a5wvw-q3errk-qeg37b-uq7lls" data-cel-widget="globalStoreInfoBullets_feature_div" data-mce-fragment="1"><br data-mce-fragment="1"></div>
<div id="bissProductSpecification_feature_div" class="celwidget" data-feature-name="bissProductSpecification" data-csa-c-type="widget" data-csa-c-content-id="bissProductSpecification" data-csa-c-slot-id="bissProductSpecification_feature_div" data-csa-c-asin="B0C1T1PJLS" data-csa-c-is-in-initial-active-row="false" data-csa-c-id="oy22i6-ck0hf7-a0bych-a5mi57" data-cel-widget="bissProductSpecification_feature_div" data-mce-fragment="1"><br data-mce-fragment="1"></div>
<div id="andonCord_feature_div" class="celwidget" data-feature-name="andonCord" data-csa-c-type="widget" data-csa-c-content-id="andonCord" data-csa-c-slot-id="andonCord_feature_div" data-csa-c-asin="B0C1T1PJLS" data-csa-c-is-in-initial-active-row="false" data-csa-c-id="j42aa0-43ema-801ykx-4bgn54" data-cel-widget="andonCord_feature_div" data-mce-fragment="1"><br data-mce-fragment="1"></div>
<div id="buyingOptionNostosBadge_feature_div" class="celwidget" data-feature-name="buyingOptionNostosBadge" data-csa-c-type="widget" data-csa-c-content-id="buyingOptionNostosBadge" data-csa-c-slot-id="buyingOptionNostosBadge_feature_div" data-csa-c-asin="B0C1T1PJLS" data-csa-c-is-in-initial-active-row="false" data-csa-c-id="i6arol-i6ivhe-j6fpmf-kbbul7" data-cel-widget="buyingOptionNostosBadge_feature_div" data-mce-fragment="1"><br data-mce-fragment="1"></div>
<div id="tellAmazon_feature_div" class="celwidget" data-feature-name="tellAmazon" data-csa-c-type="widget" data-csa-c-content-id="tellAmazon" data-csa-c-slot-id="tellAmazon_feature_div" data-csa-c-asin="B0C1T1PJLS" data-csa-c-is-in-initial-active-row="false" data-csa-c-id="wl3k0c-wkte35-a7ulor-v9np31" data-cel-widget="tellAmazon_feature_div" data-mce-fragment="1">
<div class="celwidget c-f" data-csa-op-log-render="" data-csa-c-content-id="DsUnknown" data-csa-c-slot-id="DsUnknown-2" data-csa-c-type="widget" data-csa-c-painter="tell-amazon-desktop-cards" data-csa-c-id="xp18dj-5fsa7h-shmory-9q2tsj" data-cel-widget="tell-amazon-desktop_DetailPage_1" data-mce-fragment="1" cel_widget_id="tell-amazon-desktop_DetailPage_1">
<div id="CardInstanceFJupw0oRRv8DWbdsQjgqwA" data-card-metrics-id="tell-amazon-desktop_DetailPage_1" data-acp-tracking="{}" data-mix-claimed="true" data-mce-fragment="1">
<div data-asin="B0C1T1PJLS" data-marketplace="A21TJRUUN4KGV" class="_tell-amazon-desktop_style_tell_amazon_div__1YDZk" data-mce-fragment="1"></div>
</div>
</div>
</div>`,
    price: '500.00',
    compareAtPrice: null,
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/5100-X.jpg?v=1704783651', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/5100A.jpg?v=1704783651', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/5104A.jpg?v=1704783651', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/5105A.jpg?v=1704783650', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/5108.jpg?v=1704783651', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/RidersUnited.jpg?v=1709010308', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/RidersUnitedIntor2.jpg?v=1709010308', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/RidersUnitedIntoPic.jpg?v=1709010309'],
    variants: [
      { id: 45858130591990, title: '550 ML', price: '500.00', sku: '5101', available: true },
      { id: 45858130624758, title: '200 ML', price: '250.00', sku: '5014', available: true },
      { id: 45858130690294, title: '5000 ML', price: '3000.00', sku: '5108', available: true },
    ],
    productType: 'Automotive',
    tags: ['Automotive'],
    vendor: 'Micron Aerosol',
    series: 'S5000',
    collection: 'automotive-care-performance',
  },
  {
    id: 8334214496502,
    handle: 'protektor-conformal-coating-thinner',
    title: '3308 Protektor® Conformal Coating Thinner | 5ltr',
    description: `<div class="elementor-element elementor-element-19da141 elementor-widget elementor-widget-woocommerce-product-content" data-id="19da141" data-element_type="widget" data-widget_type="woocommerce-product-content.default" data-mce-fragment="1">
<div class="elementor-widget-container" data-mce-fragment="1">
<p data-mce-fragment="1">Protektor Conformal Coating Thinner is a moderately fast-drying thinner for use with Micron Aerosol Protektor Conformal Coating<span data-mce-fragment="1"> </span>products. It is compatible with film forming paint products with acrylic, alkyd, cellulose acetate butyrate, epoxy, nitrocellulose, or polyester resins. With these resin systems, <meta charset="utf-8"><span data-mce-fragment="1">Protektor Conformal Coating</span><span data-mce-fragment="1"> t</span>hinner promotes good flow properties and suppresses blushing.</p>
</div>
</div>
<div class="elementor-element elementor-element-6c09971 elementor-widget elementor-widget-heading" data-id="6c09971" data-element_type="widget" data-widget_type="heading.default" data-mce-fragment="1">
<div class="elementor-widget-container" data-mce-fragment="1">
<h3 class="elementor-heading-title elementor-size-default" data-mce-fragment="1">Features &amp; Benefits</h3>
</div>
</div>
<div class="elementor-element elementor-element-5491ea2 elementor-widget elementor-widget-woocommerce-product-short-description" data-id="5491ea2" data-element_type="widget" data-widget_type="woocommerce-product-short-description.default" data-mce-fragment="1">
<div class="elementor-widget-container" data-mce-fragment="1">
<div class="product-short-description" data-mce-fragment="1">
<ul class="ul_arrow" data-mce-fragment="1">
<li data-mce-fragment="1">Plastic safe – compatible with most sensitive substrates used in electronic parts and enclosures</li>
<li data-mce-fragment="1">Blush resistant</li>
<li data-mce-fragment="1">Moderate evaporation rate</li>
<li data-mce-fragment="1">Excellent leveling and gloss</li>
<li data-mce-fragment="1">Not classified as a Hazardous Air Pollutant (HAP)</li>
<li data-mce-fragment="1">Highly miscible with other common organic solvents</li>
</ul>
</div>
</div>
</div>`,
    descriptionHtml: `<div class="elementor-element elementor-element-19da141 elementor-widget elementor-widget-woocommerce-product-content" data-id="19da141" data-element_type="widget" data-widget_type="woocommerce-product-content.default" data-mce-fragment="1">
<div class="elementor-widget-container" data-mce-fragment="1">
<p data-mce-fragment="1">Protektor Conformal Coating Thinner is a moderately fast-drying thinner for use with Micron Aerosol Protektor Conformal Coating<span data-mce-fragment="1"> </span>products. It is compatible with film forming paint products with acrylic, alkyd, cellulose acetate butyrate, epoxy, nitrocellulose, or polyester resins. With these resin systems, <meta charset="utf-8"><span data-mce-fragment="1">Protektor Conformal Coating</span><span data-mce-fragment="1"> t</span>hinner promotes good flow properties and suppresses blushing.</p>
</div>
</div>
<div class="elementor-element elementor-element-6c09971 elementor-widget elementor-widget-heading" data-id="6c09971" data-element_type="widget" data-widget_type="heading.default" data-mce-fragment="1">
<div class="elementor-widget-container" data-mce-fragment="1">
<h3 class="elementor-heading-title elementor-size-default" data-mce-fragment="1">Features &amp; Benefits</h3>
</div>
</div>
<div class="elementor-element elementor-element-5491ea2 elementor-widget elementor-widget-woocommerce-product-short-description" data-id="5491ea2" data-element_type="widget" data-widget_type="woocommerce-product-short-description.default" data-mce-fragment="1">
<div class="elementor-widget-container" data-mce-fragment="1">
<div class="product-short-description" data-mce-fragment="1">
<ul class="ul_arrow" data-mce-fragment="1">
<li data-mce-fragment="1">Plastic safe – compatible with most sensitive substrates used in electronic parts and enclosures</li>
<li data-mce-fragment="1">Blush resistant</li>
<li data-mce-fragment="1">Moderate evaporation rate</li>
<li data-mce-fragment="1">Excellent leveling and gloss</li>
<li data-mce-fragment="1">Not classified as a Hazardous Air Pollutant (HAP)</li>
<li data-mce-fragment="1">Highly miscible with other common organic solvents</li>
</ul>
</div>
</div>
</div>`,
    price: '2500.00',
    compareAtPrice: null,
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/3308.png?v=1704782991'],
    variants: [
      { id: 45858103492854, title: 'Default Title', price: '2500.00', sku: '3308', available: true },
    ],
    productType: 'Electronics',
    tags: ['Electronics'],
    vendor: 'Micron Aerosol',
    series: 'S3000',
    collection: 'electronics',
  },
  {
    id: 8334212071670,
    handle: 'k9-doctor-poop',
    title: 'K9 Doctor Poop | 300ml',
    description: `<p>Easy to Use Potty Training Aid for Dogs. Micron-K9 Doctor Poop helps train New Pups on where not to Pee/Poop in the house. </p>
<p>Territorial animals like Dogs, pee and poop to mark their areas as a part of their innate nature. They sniff out traces of their own pheromones to identify their territory and remark it with fresh Pee. In order to train them to not pee/poop in specific areas of the house, the pheromones need to be completely deodorised.</p>
<p>Dog Pee/Poop can have a strong nauseating odour that can cause headache and other fungal reactions. It is important to completely deodorise and disinfect the area for the well being of people living in the closed spaces. </p>
<p>How to Use: </p>
<ol>
<li>Wipe clean the Pee from with a wet cloth</li>
<li>Spray Doctor Poop on the Wiped Off Area</li>
<li>Let the contents sit on the surface for a minute</li>
<li>Wipe off the excess with a dry cloth.</li>
<li>You will be left with an natural fragrance that deodorises the existing pheromones and decontaminates the surface from 99.99% microbial germs </li>
</ol>`,
    descriptionHtml: `<p>Easy to Use Potty Training Aid for Dogs. Micron-K9 Doctor Poop helps train New Pups on where not to Pee/Poop in the house. </p>
<p>Territorial animals like Dogs, pee and poop to mark their areas as a part of their innate nature. They sniff out traces of their own pheromones to identify their territory and remark it with fresh Pee. In order to train them to not pee/poop in specific areas of the house, the pheromones need to be completely deodorised.</p>
<p>Dog Pee/Poop can have a strong nauseating odour that can cause headache and other fungal reactions. It is important to completely deodorise and disinfect the area for the well being of people living in the closed spaces. </p>
<p>How to Use: </p>
<ol>
<li>Wipe clean the Pee from with a wet cloth</li>
<li>Spray Doctor Poop on the Wiped Off Area</li>
<li>Let the contents sit on the surface for a minute</li>
<li>Wipe off the excess with a dry cloth.</li>
<li>You will be left with an natural fragrance that deodorises the existing pheromones and decontaminates the surface from 99.99% microbial germs </li>
</ol>`,
    price: '400.00',
    compareAtPrice: null,
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/6903A.jpg?v=1704782529', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/6903B.jpg?v=1704782529', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Dr_Poop_A.jpg?v=1719120264', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/How_to_Use_Doctor_Poop.jpg?v=1719120264', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Dr_Poop_2.jpg?v=1719120263', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Dr_Poop_1.jpg?v=1719120264', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Dr_Poop_3.jpg?v=1719120264', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Dr_Poop_Ad.jpg?v=1719120264'],
    variants: [
      { id: 45858079408374, title: 'Default Title', price: '400.00', sku: '6903', available: true },
    ],
    productType: 'Animals & Pet Supplies',
    tags: ['Consumer', 'Pet Products'],
    vendor: 'Micron Aerosol',
    series: 'S4000',
    collection: 'essentials',
  },
  {
    id: 8334203814134,
    handle: 'ceramic-anti-spatter',
    title: '2121 Ceramic Boron Nitride Powder Anti Spatter | 550ml | For temperatures upto 1200°C',
    description: `<h3 data-start="193" data-end="236" class=""><strong data-start="197" data-end="234">Ceramic Powder Anti Spatter Spray</strong></h3>
<p data-start="237" data-end="303" class=""><strong data-start="237" data-end="303">High-Temperature Spatter Shield for Welding Nozzles &amp; Surfaces</strong></p>
<p data-start="305" data-end="559" class=""><strong data-start="305" data-end="359">Micron Aerosols' Ceramic Powder Anti Spatter Spray</strong> is a high-performance, ceramic-based surface coating engineered to protect <strong data-start="435" data-end="492">welding nozzles, jigs, and surrounding metal surfaces</strong> from molten spatter adhesion during heavy-duty welding operations.</p>
<p data-start="561" data-end="797" class="">Formulated with <strong data-start="577" data-end="613">advanced ceramic micro-particles</strong>, this spray creates a <strong data-start="636" data-end="671">dry, heat-resistant powder film</strong> that acts as a physical barrier, preventing the buildup of slag and spatter even under <strong data-start="759" data-end="796">extreme temperatures up to 1200°C</strong>.</p>
<hr data-start="799" data-end="802" class="">
<h3 data-start="804" data-end="827" class="">✅ <strong data-start="810" data-end="827">Key Features:</strong>
</h3>
<ul data-start="828" data-end="1532">
<li data-start="828" data-end="932" class="">
<p data-start="830" data-end="932" class=""><strong data-start="830" data-end="862">Powder-Based Ceramic Coating</strong> – Leaves behind a durable, dry ceramic layer for extended protection.</p>
</li>
<li data-start="933" data-end="1036" class="">
<p data-start="935" data-end="1036" class=""><strong data-start="935" data-end="972">Ultra-High Temperature Resistance</strong> – Withstands radiant heat up to <strong data-start="1005" data-end="1015">1200°C</strong> without degradation.</p>
</li>
<li data-start="1037" data-end="1120" class="">
<p data-start="1039" data-end="1120" class=""><strong data-start="1039" data-end="1071">Non-Flammable &amp; Solvent-Free</strong> – Safe to use in high-heat welding environments.</p>
</li>
<li data-start="1121" data-end="1263" class="">
<p data-start="1123" data-end="1263" class=""><strong data-start="1123" data-end="1152">Prevents Spatter Adhesion</strong> – Keeps <strong data-start="1161" data-end="1214">welding nozzles, contact tips, and fixtures clean</strong>, reducing downtime and nozzle replacement costs.</p>
</li>
<li data-start="1264" data-end="1363" class="">
<p data-start="1266" data-end="1363" class=""><strong data-start="1266" data-end="1296">Excellent Surface Coverage</strong> – Quick-drying, consistent spray pattern for industrial-scale use.</p>
</li>
<li data-start="1364" data-end="1452" class="">
<p data-start="1366" data-end="1452" class=""><strong data-start="1366" data-end="1394">Increases Equipment Life</strong> – Minimizes wear and tear on critical welding components.</p>
</li>
<li data-start="1453" data-end="1532" class="">
<p data-start="1455" data-end="1532" class=""><strong data-start="1455" data-end="1472">Silicone-Free</strong> – Ensures paint compatibility and easy post-weld finishing.</p>
</li>
</ul>
<hr data-start="1534" data-end="1537" class="">
<h3 data-start="1539" data-end="1563" class="">🔧 <strong data-start="1546" data-end="1563">Applications:</strong>
</h3>
<ul data-start="1564" data-end="1829">
<li data-start="1564" data-end="1594" class="">
<p data-start="1566" data-end="1594" class="">MIG / MAG welding operations</p>
</li>
<li data-start="1595" data-end="1637" class="">
<p data-start="1597" data-end="1637" class="">Welding robots &amp; automated welding lines</p>
</li>
<li data-start="1638" data-end="1678" class="">
<p data-start="1640" data-end="1678" class="">Welding torches, nozzles, contact tips</p>
</li>
<li data-start="1679" data-end="1725" class="">
<p data-start="1681" data-end="1725" class="">Fixtures, jigs, welding beds, and workpieces</p>
</li>
<li data-start="1726" data-end="1829" class="">
<p data-start="1728" data-end="1829" class="">Ideal for <strong data-start="1738" data-end="1829">automotive, heavy fabrication, shipbuilding, pipelines, and structural steel industries</strong></p>
</li>
</ul>
<hr data-start="1831" data-end="1834" class="">
<h3 data-start="1836" data-end="1861" class="">💡 <strong data-start="1843" data-end="1859">Why Ceramic?</strong>
</h3>
<p data-start="1862" data-end="2205" class="">Unlike traditional anti-spatter sprays, ceramic coatings offer <strong data-start="1925" data-end="1961">long-lasting dry-film protection</strong>. Once applied, the coating does not evaporate or run, making it perfect for <strong data-start="2038" data-end="2065">continuous welding jobs</strong>, including <strong data-start="2077" data-end="2096">robotic welding</strong>. Its powder barrier resists welding slag adhesion, reducing torch cleaning time and increasing productivity.</p>
<hr data-start="2207" data-end="2210" class="">
<p data-start="2212" data-end="2391" class=""><strong data-start="2212" data-end="2290">Micron Aerosols – Trusted by Fabrication Experts for Precision Protection.</strong><br data-start="2290" data-end="2293"><strong data-start="2293" data-end="2391">Ceramic Powder Anti Spatter Spray — When your welding demands nothing but the toughest shield.</strong></p>
<hr data-start="2393" data-end="2396" class="">
<p data-start="2398" data-end="2474" class=""> </p>`,
    descriptionHtml: `<h3 data-start="193" data-end="236" class=""><strong data-start="197" data-end="234">Ceramic Powder Anti Spatter Spray</strong></h3>
<p data-start="237" data-end="303" class=""><strong data-start="237" data-end="303">High-Temperature Spatter Shield for Welding Nozzles &amp; Surfaces</strong></p>
<p data-start="305" data-end="559" class=""><strong data-start="305" data-end="359">Micron Aerosols' Ceramic Powder Anti Spatter Spray</strong> is a high-performance, ceramic-based surface coating engineered to protect <strong data-start="435" data-end="492">welding nozzles, jigs, and surrounding metal surfaces</strong> from molten spatter adhesion during heavy-duty welding operations.</p>
<p data-start="561" data-end="797" class="">Formulated with <strong data-start="577" data-end="613">advanced ceramic micro-particles</strong>, this spray creates a <strong data-start="636" data-end="671">dry, heat-resistant powder film</strong> that acts as a physical barrier, preventing the buildup of slag and spatter even under <strong data-start="759" data-end="796">extreme temperatures up to 1200°C</strong>.</p>
<hr data-start="799" data-end="802" class="">
<h3 data-start="804" data-end="827" class="">✅ <strong data-start="810" data-end="827">Key Features:</strong>
</h3>
<ul data-start="828" data-end="1532">
<li data-start="828" data-end="932" class="">
<p data-start="830" data-end="932" class=""><strong data-start="830" data-end="862">Powder-Based Ceramic Coating</strong> – Leaves behind a durable, dry ceramic layer for extended protection.</p>
</li>
<li data-start="933" data-end="1036" class="">
<p data-start="935" data-end="1036" class=""><strong data-start="935" data-end="972">Ultra-High Temperature Resistance</strong> – Withstands radiant heat up to <strong data-start="1005" data-end="1015">1200°C</strong> without degradation.</p>
</li>
<li data-start="1037" data-end="1120" class="">
<p data-start="1039" data-end="1120" class=""><strong data-start="1039" data-end="1071">Non-Flammable &amp; Solvent-Free</strong> – Safe to use in high-heat welding environments.</p>
</li>
<li data-start="1121" data-end="1263" class="">
<p data-start="1123" data-end="1263" class=""><strong data-start="1123" data-end="1152">Prevents Spatter Adhesion</strong> – Keeps <strong data-start="1161" data-end="1214">welding nozzles, contact tips, and fixtures clean</strong>, reducing downtime and nozzle replacement costs.</p>
</li>
<li data-start="1264" data-end="1363" class="">
<p data-start="1266" data-end="1363" class=""><strong data-start="1266" data-end="1296">Excellent Surface Coverage</strong> – Quick-drying, consistent spray pattern for industrial-scale use.</p>
</li>
<li data-start="1364" data-end="1452" class="">
<p data-start="1366" data-end="1452" class=""><strong data-start="1366" data-end="1394">Increases Equipment Life</strong> – Minimizes wear and tear on critical welding components.</p>
</li>
<li data-start="1453" data-end="1532" class="">
<p data-start="1455" data-end="1532" class=""><strong data-start="1455" data-end="1472">Silicone-Free</strong> – Ensures paint compatibility and easy post-weld finishing.</p>
</li>
</ul>
<hr data-start="1534" data-end="1537" class="">
<h3 data-start="1539" data-end="1563" class="">🔧 <strong data-start="1546" data-end="1563">Applications:</strong>
</h3>
<ul data-start="1564" data-end="1829">
<li data-start="1564" data-end="1594" class="">
<p data-start="1566" data-end="1594" class="">MIG / MAG welding operations</p>
</li>
<li data-start="1595" data-end="1637" class="">
<p data-start="1597" data-end="1637" class="">Welding robots &amp; automated welding lines</p>
</li>
<li data-start="1638" data-end="1678" class="">
<p data-start="1640" data-end="1678" class="">Welding torches, nozzles, contact tips</p>
</li>
<li data-start="1679" data-end="1725" class="">
<p data-start="1681" data-end="1725" class="">Fixtures, jigs, welding beds, and workpieces</p>
</li>
<li data-start="1726" data-end="1829" class="">
<p data-start="1728" data-end="1829" class="">Ideal for <strong data-start="1738" data-end="1829">automotive, heavy fabrication, shipbuilding, pipelines, and structural steel industries</strong></p>
</li>
</ul>
<hr data-start="1831" data-end="1834" class="">
<h3 data-start="1836" data-end="1861" class="">💡 <strong data-start="1843" data-end="1859">Why Ceramic?</strong>
</h3>
<p data-start="1862" data-end="2205" class="">Unlike traditional anti-spatter sprays, ceramic coatings offer <strong data-start="1925" data-end="1961">long-lasting dry-film protection</strong>. Once applied, the coating does not evaporate or run, making it perfect for <strong data-start="2038" data-end="2065">continuous welding jobs</strong>, including <strong data-start="2077" data-end="2096">robotic welding</strong>. Its powder barrier resists welding slag adhesion, reducing torch cleaning time and increasing productivity.</p>
<hr data-start="2207" data-end="2210" class="">
<p data-start="2212" data-end="2391" class=""><strong data-start="2212" data-end="2290">Micron Aerosols – Trusted by Fabrication Experts for Precision Protection.</strong><br data-start="2290" data-end="2293"><strong data-start="2293" data-end="2391">Ceramic Powder Anti Spatter Spray — When your welding demands nothing but the toughest shield.</strong></p>
<hr data-start="2393" data-end="2396" class="">
<p data-start="2398" data-end="2474" class=""> </p>`,
    price: '2200.00',
    compareAtPrice: '2400.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Ceramic_Anti_Spatter_Main_Image.png?v=1746682151', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Ceramic_Anti_Spatter_Features.png?v=1746682130', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Ceramic.png?v=1765863700', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_copy_2.png?v=1765863700', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Instagram_2_copy-min.png?v=1765863700', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_47e5b36d-ebfa-47b4-9ff5-a82b3041d4ca.png?v=1765863700', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_copy.png?v=1765863700', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1_copy_3.png?v=1765863700', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Instagram_3_copy.png?v=1765863700', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/AS1.png?v=1765864295', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Anti_Spatter_C5_9abbba42-558e-411e-b570-1004a389ccff.png?v=1765863700', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Anti_Spatter_C6_ee6b210e-61b7-49e7-998b-280c7d96635d.png?v=1765863700'],
    variants: [
      { id: 45858031272182, title: 'Default Title', price: '2200.00', sku: '2121', available: true },
    ],
    productType: 'Welding',
    tags: ['Welding'],
    vendor: 'Micron Aerosol',
    series: 'S2000',
    collection: 'industrial-welding-fabrication',
  },
  {
    id: 8334201716982,
    handle: 'mould-saver-anti-corrosive-wax-coating',
    title: '1201 Mould Saver | Anti Corrosive Wax Coating | 500ml',
    description: `<p>Safeguard metal surfaces during storage and transport with this temporary anti-corrosion wax coating. Perfect for protecting finely machined parts, such as tools, dies, and moulds, regardless of the environment. This film is thin, dry, and colorless, with the option for blue delivery. It is highly effective and won't require degreasing before use. With its lubricating properties, it offers outstanding corrosion and oxidation protection. Suitable for all climate zones and does not harm rubber or plastic. Grease-free and free of chlorinated solvents for compatibility with all lubricants.</p>
<p><span><meta charset="utf-8">
<b>Properties:</b><br></span></p>
<ul>
<li>For prevention of corrosion of stored metal parts like MOULDS, DIES, SPARES etc of every type of metal.</li>
<li>The coating effectively prevents corrosion when the metal items are exposed.</li>
<li>Over a long period of time to adverse weather conditions like humidity, moisture, salinity, industrial fumes, gases.</li>
<li>MICRON Mould saver coating is excellent storage protection for all metal parts.</li>
<li>Coated parts can be directly reused without much preparation.</li>
</ul>
<p><span><br><b>Advantages:</b><br><br></span></p>
<ul>
<li>Gives outstanding protection against corrosion. Prevents oxidation, rusting by forming a thin film. Forms very fine dry wax film due to aerosol mist spraying.</li>
<li>Fully compatible with lubricants, plastics, rubbers. Need not be removed before welding.</li>
<li>Easily removable before painting. </li>
</ul>
<p><span><br></span></p>`,
    descriptionHtml: `<p>Safeguard metal surfaces during storage and transport with this temporary anti-corrosion wax coating. Perfect for protecting finely machined parts, such as tools, dies, and moulds, regardless of the environment. This film is thin, dry, and colorless, with the option for blue delivery. It is highly effective and won't require degreasing before use. With its lubricating properties, it offers outstanding corrosion and oxidation protection. Suitable for all climate zones and does not harm rubber or plastic. Grease-free and free of chlorinated solvents for compatibility with all lubricants.</p>
<p><span><meta charset="utf-8">
<b>Properties:</b><br></span></p>
<ul>
<li>For prevention of corrosion of stored metal parts like MOULDS, DIES, SPARES etc of every type of metal.</li>
<li>The coating effectively prevents corrosion when the metal items are exposed.</li>
<li>Over a long period of time to adverse weather conditions like humidity, moisture, salinity, industrial fumes, gases.</li>
<li>MICRON Mould saver coating is excellent storage protection for all metal parts.</li>
<li>Coated parts can be directly reused without much preparation.</li>
</ul>
<p><span><br><b>Advantages:</b><br><br></span></p>
<ul>
<li>Gives outstanding protection against corrosion. Prevents oxidation, rusting by forming a thin film. Forms very fine dry wax film due to aerosol mist spraying.</li>
<li>Fully compatible with lubricants, plastics, rubbers. Need not be removed before welding.</li>
<li>Easily removable before painting. </li>
</ul>
<p><span><br></span></p>`,
    price: '500.00',
    compareAtPrice: '850.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/1201A.jpg?v=1704780551', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/MOULD_SAVER.png?v=1726209451', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Mould_Saver_1.png?v=1726209453', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Mould_Saver_2.png?v=1726209458', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Mould_Saver_3.png?v=1726209457', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Mould_Saver_4.png?v=1726209456', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/1201_B.png?v=1726209434'],
    variants: [
      { id: 47230724473078, title: 'Green', price: '500.00', sku: '1201', available: true },
      { id: 47230724505846, title: 'White', price: '500.00', sku: '1202', available: true },
    ],
    productType: 'Plastic Moulding',
    tags: ['Plastic Moulding'],
    vendor: 'Micron Aerosol',
    series: 'S1000',
    collection: 'plastic-moulding',
  },
  {
    id: 8334199947510,
    handle: 'water-based-anti-spatter',
    title: '2118 Water based Anti Spatter | 5ltr',
    description: `<h3 class="" data-end="246" data-start="197"><strong data-end="246" data-start="201">Water-Based Anti-Spatter Liquid – 5 Litre</strong></h3>
<p class="" data-end="294" data-start="247"><strong data-end="294" data-start="247">Eco-Friendly | Paint-Ready | Weld-Optimized</strong></p>
<p class="" data-end="700" data-start="296"><strong data-end="312" data-start="296">Description:</strong><br data-end="315" data-start="312">Micron Aerosols' <em data-end="365" data-start="332">Water-Based Anti-Spatter Liquid</em> is an advanced, <strong data-end="399" data-start="382">non-flammable</strong>, <strong data-end="414" data-start="401">non-toxic</strong>, and <strong data-end="436" data-start="420">eco-friendly</strong> welding aid designed to prevent spatter adhesion on welding surfaces, tools, and jigs during manual or automated welding operations. It is ideal for industrial environments that prioritize worker safety, environmental sustainability, and post-weld finish quality.</p>
<hr class="" data-end="705" data-start="702">
<h3 class="" data-end="730" data-start="707">✅ <strong data-end="730" data-start="713">Key Features:</strong>
</h3>
<ul data-end="2082" data-start="732">
<li class="" data-end="909" data-start="732">
<p class="" data-end="909" data-start="734"><strong data-end="760" data-start="734">Water-Soluble Formula:</strong><br data-end="763" data-start="760">Easily washable with water, leaving no oily or sticky residue — ensuring a clean and <strong data-end="873" data-start="850">paint-ready surface</strong> without any additional preparation.</p>
</li>
<li class="" data-end="1098" data-start="913">
<p class="" data-end="1098" data-start="915"><strong data-end="939" data-start="915">Paint Compatibility:</strong><br data-end="942" data-start="939">Guaranteed to be <strong data-end="978" data-start="961">silicone-free</strong> and <strong data-end="1004" data-start="983">non-contaminating</strong>, making it perfect for parts that require <strong data-end="1098" data-start="1047">post-weld painting, powder coating, or plating.</strong></p>
</li>
<li class="" data-end="1292" data-start="1100">
<p class="" data-end="1292" data-start="1102"><strong data-end="1135" data-start="1102">Effective Spatter Prevention:</strong><br data-end="1138" data-start="1135">Forms a thin film barrier that prevents molten metal spatter from bonding to metal surfaces — increasing weld accuracy, productivity, and tool lifespan.</p>
</li>
<li class="" data-end="1487" data-start="1294">
<p class="" data-end="1487" data-start="1296"><strong data-end="1317" data-start="1296">Safe &amp; Non-Toxic:</strong><br data-end="1320" data-start="1317">Free from harsh solvents and VOCs (Volatile Organic Compounds). Completely safe for operators and surrounding equipment. Can be used without special protective gear.</p>
</li>
<li class="" data-end="1639" data-start="1489">
<p class="" data-end="1639" data-start="1491"><strong data-end="1536" data-start="1491">Biodegradable &amp; Environmentally Friendly:</strong><br data-end="1539" data-start="1536">A water-based, non-polluting formulation that supports modern industrial sustainability practices.</p>
</li>
<li class="" data-end="1748" data-start="1641">
<p class="" data-end="1748" data-start="1643"><strong data-end="1667" data-start="1643">Corrosion Resistant:</strong><br data-end="1670" data-start="1667">Offers mild rust protection for temporary storage before further processing.</p>
</li>
<li class="" data-end="1934" data-start="1750">
<p class="" data-end="1934" data-start="1752"><strong data-end="1773" data-start="1752">Easy Application:</strong><br data-end="1776" data-start="1773">Can be applied by <strong data-end="1828" data-start="1796">spray, brush, or dip methods</strong>, depending on production line setup. Best suited for spray-on application in large-volume welding setups.</p>
</li>
<li class="" data-end="2082" data-start="1936">
<p class="" data-end="2082" data-start="1938"><strong data-end="1963" data-start="1938">Ideal for Automation:</strong><br data-end="1966" data-start="1963">Perfectly suited for <strong data-end="2034" data-start="1989">robotic or semi-automatic welding systems</strong>, reducing machine downtime and cleaning cycles.</p>
</li>
</ul>
<hr class="" data-end="2087" data-start="2084">
<h3 class="" data-end="2113" data-start="2089">⚙️ <strong data-end="2113" data-start="2096">Applications:</strong>
</h3>
<ul data-end="2349" data-start="2115">
<li class="" data-end="2148" data-start="2115">
<p class="" data-end="2148" data-start="2117">Fabrication &amp; Heavy Engineering</p>
</li>
<li class="" data-end="2180" data-start="2149">
<p class="" data-end="2180" data-start="2151">Automotive &amp; Auto Ancillaries</p>
</li>
<li class="" data-end="2214" data-start="2181">
<p class="" data-end="2214" data-start="2183">Shipbuilding &amp; Marine Equipment</p>
</li>
<li class="" data-end="2248" data-start="2215">
<p class="" data-end="2248" data-start="2217">Railways &amp; Metro Infrastructure</p>
</li>
<li class="" data-end="2277" data-start="2249">
<p class="" data-end="2277" data-start="2251">Structural Steel &amp; Bridges</p>
</li>
<li class="" data-end="2314" data-start="2278">
<p class="" data-end="2314" data-start="2280">Industrial Equipment Manufacturing</p>
</li>
<li class="" data-end="2349" data-start="2315">
<p class="" data-end="2349" data-start="2317">Precision Sheet Metal Components</p>
</li>
</ul>
<hr class="" data-end="2354" data-start="2351">
<h3 class="" data-end="2384" data-start="2356">📦 <strong data-end="2382" data-start="2363">Packaging Size:</strong>
</h3>
<p class="" data-end="2474" data-start="2385">5 Litre HDPE Can – Designed for easy industrial use and compatibility with spray systems.</p>
<hr class="" data-end="2479" data-start="2476">
<h3 class="" data-end="2537" data-start="2481">🔍 <strong data-end="2537" data-start="2488">Why Choose Micron's Water-Based Anti-Spatter?</strong>
</h3>
<ul data-end="2746" data-start="2539">
<li class="" data-end="2578" data-start="2539">
<p class="" data-end="2578" data-start="2541">Silicone-Free &amp; Paint Shop Approved</p>
</li>
<li class="" data-end="2608" data-start="2579">
<p class="" data-end="2608" data-start="2581">Increases Weld Efficiency</p>
</li>
<li class="" data-end="2648" data-start="2609">
<p class="" data-end="2648" data-start="2611">Reduces Cleaning Time and Tool Wear</p>
</li>
<li class="" data-end="2697" data-start="2649">
<p class="" data-end="2697" data-start="2651">Safe for Workers, Better for the Environment</p>
</li>
<li class="" data-end="2746" data-start="2698">
<p class="" data-end="2746" data-start="2700">Backed by Industrial-Grade Quality and Service</p>
</li>
</ul>`,
    descriptionHtml: `<h3 class="" data-end="246" data-start="197"><strong data-end="246" data-start="201">Water-Based Anti-Spatter Liquid – 5 Litre</strong></h3>
<p class="" data-end="294" data-start="247"><strong data-end="294" data-start="247">Eco-Friendly | Paint-Ready | Weld-Optimized</strong></p>
<p class="" data-end="700" data-start="296"><strong data-end="312" data-start="296">Description:</strong><br data-end="315" data-start="312">Micron Aerosols' <em data-end="365" data-start="332">Water-Based Anti-Spatter Liquid</em> is an advanced, <strong data-end="399" data-start="382">non-flammable</strong>, <strong data-end="414" data-start="401">non-toxic</strong>, and <strong data-end="436" data-start="420">eco-friendly</strong> welding aid designed to prevent spatter adhesion on welding surfaces, tools, and jigs during manual or automated welding operations. It is ideal for industrial environments that prioritize worker safety, environmental sustainability, and post-weld finish quality.</p>
<hr class="" data-end="705" data-start="702">
<h3 class="" data-end="730" data-start="707">✅ <strong data-end="730" data-start="713">Key Features:</strong>
</h3>
<ul data-end="2082" data-start="732">
<li class="" data-end="909" data-start="732">
<p class="" data-end="909" data-start="734"><strong data-end="760" data-start="734">Water-Soluble Formula:</strong><br data-end="763" data-start="760">Easily washable with water, leaving no oily or sticky residue — ensuring a clean and <strong data-end="873" data-start="850">paint-ready surface</strong> without any additional preparation.</p>
</li>
<li class="" data-end="1098" data-start="913">
<p class="" data-end="1098" data-start="915"><strong data-end="939" data-start="915">Paint Compatibility:</strong><br data-end="942" data-start="939">Guaranteed to be <strong data-end="978" data-start="961">silicone-free</strong> and <strong data-end="1004" data-start="983">non-contaminating</strong>, making it perfect for parts that require <strong data-end="1098" data-start="1047">post-weld painting, powder coating, or plating.</strong></p>
</li>
<li class="" data-end="1292" data-start="1100">
<p class="" data-end="1292" data-start="1102"><strong data-end="1135" data-start="1102">Effective Spatter Prevention:</strong><br data-end="1138" data-start="1135">Forms a thin film barrier that prevents molten metal spatter from bonding to metal surfaces — increasing weld accuracy, productivity, and tool lifespan.</p>
</li>
<li class="" data-end="1487" data-start="1294">
<p class="" data-end="1487" data-start="1296"><strong data-end="1317" data-start="1296">Safe &amp; Non-Toxic:</strong><br data-end="1320" data-start="1317">Free from harsh solvents and VOCs (Volatile Organic Compounds). Completely safe for operators and surrounding equipment. Can be used without special protective gear.</p>
</li>
<li class="" data-end="1639" data-start="1489">
<p class="" data-end="1639" data-start="1491"><strong data-end="1536" data-start="1491">Biodegradable &amp; Environmentally Friendly:</strong><br data-end="1539" data-start="1536">A water-based, non-polluting formulation that supports modern industrial sustainability practices.</p>
</li>
<li class="" data-end="1748" data-start="1641">
<p class="" data-end="1748" data-start="1643"><strong data-end="1667" data-start="1643">Corrosion Resistant:</strong><br data-end="1670" data-start="1667">Offers mild rust protection for temporary storage before further processing.</p>
</li>
<li class="" data-end="1934" data-start="1750">
<p class="" data-end="1934" data-start="1752"><strong data-end="1773" data-start="1752">Easy Application:</strong><br data-end="1776" data-start="1773">Can be applied by <strong data-end="1828" data-start="1796">spray, brush, or dip methods</strong>, depending on production line setup. Best suited for spray-on application in large-volume welding setups.</p>
</li>
<li class="" data-end="2082" data-start="1936">
<p class="" data-end="2082" data-start="1938"><strong data-end="1963" data-start="1938">Ideal for Automation:</strong><br data-end="1966" data-start="1963">Perfectly suited for <strong data-end="2034" data-start="1989">robotic or semi-automatic welding systems</strong>, reducing machine downtime and cleaning cycles.</p>
</li>
</ul>
<hr class="" data-end="2087" data-start="2084">
<h3 class="" data-end="2113" data-start="2089">⚙️ <strong data-end="2113" data-start="2096">Applications:</strong>
</h3>
<ul data-end="2349" data-start="2115">
<li class="" data-end="2148" data-start="2115">
<p class="" data-end="2148" data-start="2117">Fabrication &amp; Heavy Engineering</p>
</li>
<li class="" data-end="2180" data-start="2149">
<p class="" data-end="2180" data-start="2151">Automotive &amp; Auto Ancillaries</p>
</li>
<li class="" data-end="2214" data-start="2181">
<p class="" data-end="2214" data-start="2183">Shipbuilding &amp; Marine Equipment</p>
</li>
<li class="" data-end="2248" data-start="2215">
<p class="" data-end="2248" data-start="2217">Railways &amp; Metro Infrastructure</p>
</li>
<li class="" data-end="2277" data-start="2249">
<p class="" data-end="2277" data-start="2251">Structural Steel &amp; Bridges</p>
</li>
<li class="" data-end="2314" data-start="2278">
<p class="" data-end="2314" data-start="2280">Industrial Equipment Manufacturing</p>
</li>
<li class="" data-end="2349" data-start="2315">
<p class="" data-end="2349" data-start="2317">Precision Sheet Metal Components</p>
</li>
</ul>
<hr class="" data-end="2354" data-start="2351">
<h3 class="" data-end="2384" data-start="2356">📦 <strong data-end="2382" data-start="2363">Packaging Size:</strong>
</h3>
<p class="" data-end="2474" data-start="2385">5 Litre HDPE Can – Designed for easy industrial use and compatibility with spray systems.</p>
<hr class="" data-end="2479" data-start="2476">
<h3 class="" data-end="2537" data-start="2481">🔍 <strong data-end="2537" data-start="2488">Why Choose Micron's Water-Based Anti-Spatter?</strong>
</h3>
<ul data-end="2746" data-start="2539">
<li class="" data-end="2578" data-start="2539">
<p class="" data-end="2578" data-start="2541">Silicone-Free &amp; Paint Shop Approved</p>
</li>
<li class="" data-end="2608" data-start="2579">
<p class="" data-end="2608" data-start="2581">Increases Weld Efficiency</p>
</li>
<li class="" data-end="2648" data-start="2609">
<p class="" data-end="2648" data-start="2611">Reduces Cleaning Time and Tool Wear</p>
</li>
<li class="" data-end="2697" data-start="2649">
<p class="" data-end="2697" data-start="2651">Safe for Workers, Better for the Environment</p>
</li>
<li class="" data-end="2746" data-start="2698">
<p class="" data-end="2746" data-start="2700">Backed by Industrial-Grade Quality and Service</p>
</li>
</ul>`,
    price: '4000.00',
    compareAtPrice: '4500.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/WASP2118.png?v=1704780165', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/1_copy_7.png?v=1750661275', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/WASP_-min.png?v=1750661275', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Anti_Spatter_C5_9abbba42-558e-411e-b570-1004a389ccff.png?v=1765863700', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Anti_Spatter_C6_ee6b210e-61b7-49e7-998b-280c7d96635d.png?v=1765863700', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Instagram2-min_fa3e0a2e-390e-4415-936e-c8b4c18e4cc2.png?v=1750661275', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Instagram3-min_ef5f4dd3-7343-4d61-8a64-4dcb50cd6a81.png?v=1750661275', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/AS1.png?v=1765864295'],
    variants: [
      { id: 45858018722038, title: 'Default Title', price: '4000.00', sku: '2118', available: true },
    ],
    productType: 'Welding',
    tags: ['Welding'],
    vendor: 'Micron Aerosol',
    series: 'S2000',
    collection: 'industrial-welding-fabrication',
  },
  {
    id: 8331193712886,
    handle: 'protektor-conformal-coating',
    title: '3100 Protektor® Conformal Coating for PCBs, Electronics | Military Grade',
    description: `<p><meta charset="utf-8">Conformal Coating - <meta charset="utf-8">Protektor<span data-mce-fragment="1">®</span> is a fast drying single component acrylic lacquer for PCBs to protect them from harsh environments, moisture, corrosion, dirt &amp; dust, fungus, caustic vapors, thermal shocks, dielectric shocks, Chemical reactions etc.<br data-mce-fragment="1"><br data-mce-fragment="1">The high dielectric strength prevents the component from high voltage arcing and corona effect while the coating further protects and insulates the electrical and electronic components.</p>
<p>It conforms to <strong>IPC-830CC</strong>-Military Grade <strong data-mce-fragment="1">MIL-I-46058C</strong> specification, is approved by Centre for Development of Telematics (<strong data-mce-fragment="1">C-DOT</strong>) and is <strong data-mce-fragment="1">RoHS</strong> compliant and environment friendly.</p>
<div dir="ltr" align="left">
<table>
<colgroup> <col width="138"> <col width="227"> <col width="236"> </colgroup>
<tbody>
<tr>
<td><br></td>
<td>
<p dir="ltr"><span>Liquid Variant</span></p>
</td>
<td>
<p dir="ltr"><span>Spray Variant</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Description</span></p>
</td>
<td>
<p dir="ltr"><span>Conformal Coating Brushable Clear for PCB Assemblies, Electrical/Electronic Insulators </span></p>
</td>
<td>
<p dir="ltr"><span>Conformal Coating Brushable Clear for PCB Assemblies, Electrical/Electronic Insulators </span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Product Photo</span></p>
</td>
<td>
<p dir="ltr"><span><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXe2IfaDrBqqNlM_IIa-cdpNE9STUS3L8H2U5PwktGUs8MOEfFhYX3McZwfJsY-GYnrRRm5oTIyfax2KGIdb_o5DcOgQRO7SFtWJKOQLNeQSJhyTuO7gC0utedxyWESYSkyWC11ZMCDBYPGA7oolyiI_cHFW?key=MJltN0Qxf0J1I4b-JiL6OA" width="177" height="260.6196495746771"></span></p>
</td>
<td>
<p dir="ltr"><span><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdZe499t0LtZhr3IRxori-lTov4svASD6zHzvoiUsEoeFw1DgEgmrLYr7ysFdK8y02GTqmd2t8ux9HopfvEmxm_OBeV98QBYNAeNKMnHk-C9wc5GQSTud_7ybVYVfpVBLHBqfOMR6T7bR-tVvmr5Kckg1zL?key=MJltN0Qxf0J1I4b-JiL6OA" width="176" height="251.629576453697"></span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Packing </span></p>
</td>
<td>
<p dir="ltr"><span>5 ltr in Carboy for Brushable coating </span></p>
</td>
<td>
<p dir="ltr"><span>550ml Aerosol Spray </span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Type</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>Acrylic Resin (AR)</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Appearance</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>Clear Transparent</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Specific Gravity</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>0.95</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Propellent</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>Non CFC, Flammable</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Temperature Resistance</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>-70</span><span>o</span><span> C to 120</span><span>o</span><span> C</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Dry to Touch Time</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>30 Mins</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Film Thickness</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>26 Micron</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Clarity</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>Clear transparent</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Shelf Life</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>18 Months</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>GRADE</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>MIL – I – 46058C</span></p>
</td>
</tr>
</tbody>
</table>
</div>
<h3 dir="ltr">
<span>2.</span><span><span class="Apple-tab-span"> </span></span><span>Electrical Properties</span>
</h3>
<div dir="ltr" align="left">
<table>
<colgroup> <col width="211"> <col width="389"> </colgroup>
<tbody>
<tr>
<td>
<p dir="ltr"><span>Insulation Resistance after  Chamber Test</span></p>
</td>
<td>
<p dir="ltr"><span> 2.5 X 10</span><span>11</span><span> Ohms</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Breakdown Voltage</span></p>
</td>
<td>
<p dir="ltr"><span>700 V at 26 Micron</span></p>
</td>
</tr>
</tbody>
</table>
</div>
<h3 dir="ltr"><span>3. Specifications</span></h3>
<div dir="ltr" align="left">
<table>
<colgroup> <col width="152"> <col width="447"> </colgroup>
<tbody>
<tr>
<td>
<p dir="ltr"><span>Advantages</span></p>
</td>
<td>
<ol>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Fast Drying</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Single Component spray for Printed Circuit Board assemblies</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Protects from Humidity, Fungus &amp; Corrosion by forming film on components </span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Provides Insulation against high voltage arcing</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Excellent Flexibility &amp; Solderability</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Black Coated Components can hide your circuits.</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Easy to Handle with Dry to tough time at 30mins</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Convenient to apply as aerosol and efficient for assembly line operations</span></p>
</li>
</ol>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Fields of Application</span></p>
</td>
<td>
<ol>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Telephone and Telephone Exchanges Manufacturing</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Computer Process Control Equipments</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Programmable Logic Controllers</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Electronic Equipments like Weighing Scales, Multimeters</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>LCD LED Bulbs, CFL</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Variable Frequency Drives</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Mobiles, Computers, Laptops, Tablets, Hard Drive PCBs</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Automobile Control Computers </span></p>
</li>
</ol>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Packaging</span></p>
</td>
<td>
<ol>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>550ml Aerosol Spray Can</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>5 Ltr Carboy ( For Brushable coating)</span></p>
</li>
</ol>
</td>
</tr>
</tbody>
</table>
</div>
<p><b><br></b></p>
<p dir="ltr"><span>Cured film can be easily removed  by using  </span><span>Protektor</span><span> Conformal Coating Thinner </span><span><span class="Apple-tab-span"> </span></span><span>The information in the sheet was written based on the best knowledge and experience currently available. The information provided in this Safety Data Sheet is correct to the best of our knowledge, information and belief at the date of its publication. The information given is designed only as a guidance for safe handling, use, processing, storage, transportation, disposal and release and is not to be considered a warranty or quality specification. The information relates only to the specific material designated and may not be valid for such material used in combination with any other materials or in any process, unless specified in the text.</span><span><span class="Apple-tab-span"> </span></span></p>
<p dir="ltr"><iframe width="560" height="315" src="https://www.youtube.com/embed/livUN16a4XQ?si=-qv2aORBuOJTJku5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe></p>
<p><img src="https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Protektor_BG.png?v=1726044219" alt="" data-mce-src="https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Protektor_BG.png?v=1726044219"></p>
<table width="100%">
<tbody>
<tr>
<td> </td>
</tr>
</tbody>
</table>`,
    descriptionHtml: `<p><meta charset="utf-8">Conformal Coating - <meta charset="utf-8">Protektor<span data-mce-fragment="1">®</span> is a fast drying single component acrylic lacquer for PCBs to protect them from harsh environments, moisture, corrosion, dirt &amp; dust, fungus, caustic vapors, thermal shocks, dielectric shocks, Chemical reactions etc.<br data-mce-fragment="1"><br data-mce-fragment="1">The high dielectric strength prevents the component from high voltage arcing and corona effect while the coating further protects and insulates the electrical and electronic components.</p>
<p>It conforms to <strong>IPC-830CC</strong>-Military Grade <strong data-mce-fragment="1">MIL-I-46058C</strong> specification, is approved by Centre for Development of Telematics (<strong data-mce-fragment="1">C-DOT</strong>) and is <strong data-mce-fragment="1">RoHS</strong> compliant and environment friendly.</p>
<div dir="ltr" align="left">
<table>
<colgroup> <col width="138"> <col width="227"> <col width="236"> </colgroup>
<tbody>
<tr>
<td><br></td>
<td>
<p dir="ltr"><span>Liquid Variant</span></p>
</td>
<td>
<p dir="ltr"><span>Spray Variant</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Description</span></p>
</td>
<td>
<p dir="ltr"><span>Conformal Coating Brushable Clear for PCB Assemblies, Electrical/Electronic Insulators </span></p>
</td>
<td>
<p dir="ltr"><span>Conformal Coating Brushable Clear for PCB Assemblies, Electrical/Electronic Insulators </span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Product Photo</span></p>
</td>
<td>
<p dir="ltr"><span><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXe2IfaDrBqqNlM_IIa-cdpNE9STUS3L8H2U5PwktGUs8MOEfFhYX3McZwfJsY-GYnrRRm5oTIyfax2KGIdb_o5DcOgQRO7SFtWJKOQLNeQSJhyTuO7gC0utedxyWESYSkyWC11ZMCDBYPGA7oolyiI_cHFW?key=MJltN0Qxf0J1I4b-JiL6OA" width="177" height="260.6196495746771"></span></p>
</td>
<td>
<p dir="ltr"><span><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdZe499t0LtZhr3IRxori-lTov4svASD6zHzvoiUsEoeFw1DgEgmrLYr7ysFdK8y02GTqmd2t8ux9HopfvEmxm_OBeV98QBYNAeNKMnHk-C9wc5GQSTud_7ybVYVfpVBLHBqfOMR6T7bR-tVvmr5Kckg1zL?key=MJltN0Qxf0J1I4b-JiL6OA" width="176" height="251.629576453697"></span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Packing </span></p>
</td>
<td>
<p dir="ltr"><span>5 ltr in Carboy for Brushable coating </span></p>
</td>
<td>
<p dir="ltr"><span>550ml Aerosol Spray </span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Type</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>Acrylic Resin (AR)</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Appearance</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>Clear Transparent</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Specific Gravity</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>0.95</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Propellent</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>Non CFC, Flammable</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Temperature Resistance</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>-70</span><span>o</span><span> C to 120</span><span>o</span><span> C</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Dry to Touch Time</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>30 Mins</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Film Thickness</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>26 Micron</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Clarity</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>Clear transparent</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Shelf Life</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>18 Months</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>GRADE</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>MIL – I – 46058C</span></p>
</td>
</tr>
</tbody>
</table>
</div>
<h3 dir="ltr">
<span>2.</span><span><span class="Apple-tab-span"> </span></span><span>Electrical Properties</span>
</h3>
<div dir="ltr" align="left">
<table>
<colgroup> <col width="211"> <col width="389"> </colgroup>
<tbody>
<tr>
<td>
<p dir="ltr"><span>Insulation Resistance after  Chamber Test</span></p>
</td>
<td>
<p dir="ltr"><span> 2.5 X 10</span><span>11</span><span> Ohms</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Breakdown Voltage</span></p>
</td>
<td>
<p dir="ltr"><span>700 V at 26 Micron</span></p>
</td>
</tr>
</tbody>
</table>
</div>
<h3 dir="ltr"><span>3. Specifications</span></h3>
<div dir="ltr" align="left">
<table>
<colgroup> <col width="152"> <col width="447"> </colgroup>
<tbody>
<tr>
<td>
<p dir="ltr"><span>Advantages</span></p>
</td>
<td>
<ol>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Fast Drying</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Single Component spray for Printed Circuit Board assemblies</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Protects from Humidity, Fungus &amp; Corrosion by forming film on components </span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Provides Insulation against high voltage arcing</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Excellent Flexibility &amp; Solderability</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Black Coated Components can hide your circuits.</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Easy to Handle with Dry to tough time at 30mins</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Convenient to apply as aerosol and efficient for assembly line operations</span></p>
</li>
</ol>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Fields of Application</span></p>
</td>
<td>
<ol>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Telephone and Telephone Exchanges Manufacturing</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Computer Process Control Equipments</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Programmable Logic Controllers</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Electronic Equipments like Weighing Scales, Multimeters</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>LCD LED Bulbs, CFL</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Variable Frequency Drives</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Mobiles, Computers, Laptops, Tablets, Hard Drive PCBs</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Automobile Control Computers </span></p>
</li>
</ol>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Packaging</span></p>
</td>
<td>
<ol>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>550ml Aerosol Spray Can</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>5 Ltr Carboy ( For Brushable coating)</span></p>
</li>
</ol>
</td>
</tr>
</tbody>
</table>
</div>
<p><b><br></b></p>
<p dir="ltr"><span>Cured film can be easily removed  by using  </span><span>Protektor</span><span> Conformal Coating Thinner </span><span><span class="Apple-tab-span"> </span></span><span>The information in the sheet was written based on the best knowledge and experience currently available. The information provided in this Safety Data Sheet is correct to the best of our knowledge, information and belief at the date of its publication. The information given is designed only as a guidance for safe handling, use, processing, storage, transportation, disposal and release and is not to be considered a warranty or quality specification. The information relates only to the specific material designated and may not be valid for such material used in combination with any other materials or in any process, unless specified in the text.</span><span><span class="Apple-tab-span"> </span></span></p>
<p dir="ltr"><iframe width="560" height="315" src="https://www.youtube.com/embed/livUN16a4XQ?si=-qv2aORBuOJTJku5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe></p>
<p><img src="https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Protektor_BG.png?v=1726044219" alt="" data-mce-src="https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Protektor_BG.png?v=1726044219"></p>
<table width="100%">
<tbody>
<tr>
<td> </td>
</tr>
</tbody>
</table>`,
    price: '600.00',
    compareAtPrice: '850.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/3100A.jpg?v=1704708768', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/PROTEKTOR.png?v=1726143194', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Drone_Protektor.png?v=1765863858', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_17_c722c093-c192-4d84-a7e1-d8bd9ce16624.png?v=1765863858', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_17_copy.png?v=1765863858', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Protektor_Raw_2.png?v=1765863834', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Protektor_Raw_3.png?v=1765863834', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Protektor_Raw_4.png?v=1765863834', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/0.png?v=1765863858', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/1.png?v=1765863858', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/2.png?v=1765863858', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/4.png?v=1765863858', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/3108_9507c125-b350-4ce3-8570-8256c9b8eaa3.png?v=1765863834'],
    variants: [
      { id: 47222794879222, title: 'Aerosol Spray 550ml', price: '600.00', sku: '3100', available: true },
      { id: 47222794911990, title: 'Bulk Carbouy 5000ml', price: '4000.00', sku: '3101', available: true },
    ],
    productType: 'Electronics',
    tags: ['Electronics'],
    vendor: 'Micron Aerosol',
    series: 'S3000',
    collection: 'electronics',
  },
  {
    id: 8331142103286,
    handle: 'non-silicon-mould-release-agent',
    title: '1110 Non Silicon Mould Release Agent | 550ml',
    description: `<meta charset="utf-8">
<p data-mce-fragment="1">Non Silicon Mould Release Agent (NSMRA) forms a thin, anti-stick and crystal clear lubricating layer, of high-temperature resistant coating between mould and the plastic material, which reduces flow friction and assures full shots of injected plastic in injection moulding. The atomized particles ejected from MRA can reach interior portions of intricate moulds and enable multiple shots based on the grade of MRA and plastic material used.</p>
<p data-mce-fragment="1">Grades available for Polycarbonate, Acrylic, Nylon, PP, HDPE, ABS</p>
<p>Lubricate intricate plastic injection moulds of</p>
<ul>
<li>Crates,</li>
<li>Bags,</li>
<li>Vehicle Plastic Parts,</li>
<li>Battery Containers,</li>
<li>TV / Audio Casing Manufacturers,</li>
<li>Plastic Furniture,</li>
<li>Rubber Molding etc.</li>
<li>Blow Moulding manufacturers</li>
<li>PET Bottles</li>
</ul>
<ol>
<li><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">Non-staining lubricant for synthetic curtain</span></li>
<li><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">Treadmill Lubricant</span></li>
<li><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">Anti Stick agent for Book-binding</span></li>
</ol>
<ul>
<li>Lubricates intricate plastic injection moulds</li>
<li>High-Temperature Resistant</li>
<li>Reaches interior portions of intricate moulds</li>
<li>Superior Finish with clear contours in final products</li>
<li>Also works for Bakelite Mouldings and Non-Ferrous Die Casting</li>
<li>Anti-Stick agent</li>
<li>Water-repellent for natural and synthetic fibres</li>
<li>No CFC</li>
<li>Non-toxic</li>
<li>Crystal Clear</li>
<li>Non-staining</li>
</ul>`,
    descriptionHtml: `<meta charset="utf-8">
<p data-mce-fragment="1">Non Silicon Mould Release Agent (NSMRA) forms a thin, anti-stick and crystal clear lubricating layer, of high-temperature resistant coating between mould and the plastic material, which reduces flow friction and assures full shots of injected plastic in injection moulding. The atomized particles ejected from MRA can reach interior portions of intricate moulds and enable multiple shots based on the grade of MRA and plastic material used.</p>
<p data-mce-fragment="1">Grades available for Polycarbonate, Acrylic, Nylon, PP, HDPE, ABS</p>
<p>Lubricate intricate plastic injection moulds of</p>
<ul>
<li>Crates,</li>
<li>Bags,</li>
<li>Vehicle Plastic Parts,</li>
<li>Battery Containers,</li>
<li>TV / Audio Casing Manufacturers,</li>
<li>Plastic Furniture,</li>
<li>Rubber Molding etc.</li>
<li>Blow Moulding manufacturers</li>
<li>PET Bottles</li>
</ul>
<ol>
<li><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">Non-staining lubricant for synthetic curtain</span></li>
<li><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">Treadmill Lubricant</span></li>
<li><span style="font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; font-size: 0.875rem;">Anti Stick agent for Book-binding</span></li>
</ol>
<ul>
<li>Lubricates intricate plastic injection moulds</li>
<li>High-Temperature Resistant</li>
<li>Reaches interior portions of intricate moulds</li>
<li>Superior Finish with clear contours in final products</li>
<li>Also works for Bakelite Mouldings and Non-Ferrous Die Casting</li>
<li>Anti-Stick agent</li>
<li>Water-repellent for natural and synthetic fibres</li>
<li>No CFC</li>
<li>Non-toxic</li>
<li>Crystal Clear</li>
<li>Non-staining</li>
</ul>`,
    price: '520.00',
    compareAtPrice: null,
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/1110A.jpg?v=1704708152', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/1_copy_3.png?v=1726047114', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_11_ff73c6dd-97e7-44ce-be8e-486f593cce0f.png?v=1726043267', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_5_copy.png?v=1726047731', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_7_copy.png?v=1726047794', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_6_copy.png?v=1726047799', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/1148.png?v=1704782721'],
    variants: [
      { id: 45858083995894, title: '550 ML', price: '520.00', sku: '1110', available: true },
      { id: 45858084028662, title: '5000 ML', price: '5500.00', sku: '1148', available: true },
    ],
    productType: 'Plastic Moulding',
    tags: ['Plastic Moulding'],
    vendor: 'Micron Aerosol',
    series: 'S1000',
    collection: 'plastic-moulding',
  },
  {
    id: 8331123720438,
    handle: 'silicon-mould-release-agent',
    title: '1100 Silicon Mould Release Agent',
    description: `<p data-start="252" data-end="315" class=""><strong data-start="252" data-end="315">Effortless Demoulding | Flawless Finish | Longer Mould Life</strong></p>
<p data-start="317" data-end="653" class="">Micron Aerosols’ <strong data-start="334" data-end="365">Silicon Mould Release Agent</strong> is a premium-grade, silicone-based aerosol spray designed to provide an ultra-smooth, non-stick release film for a wide range of moulding applications. Engineered for efficiency, it ensures clean, repeatable demoulding with minimal buildup, reducing cycle times and extending mould life.</p>
<hr data-start="655" data-end="658" class="">
<h3 data-start="660" data-end="683" class="">✅ <strong data-start="666" data-end="683">Key Features:</strong>
</h3>
<ul data-start="685" data-end="1724">
<li data-start="685" data-end="855" class="">
<p data-start="687" data-end="855" class=""><strong data-start="687" data-end="725">High-Performance Silicone Formula:</strong><br data-start="725" data-end="728">Forms a heat-resistant, durable film that prevents sticking and material buildup — ideal for high-volume, precision moulding.</p>
</li>
<li data-start="857" data-end="1004" class="">
<p data-start="859" data-end="1004" class=""><strong data-start="859" data-end="903">Multiple Release Cycles per Application:</strong><br data-start="903" data-end="906">One spray delivers multiple releases, significantly reducing downtime and reapplication efforts.</p>
</li>
<li data-start="1006" data-end="1163" class="">
<p data-start="1008" data-end="1163" class=""><strong data-start="1008" data-end="1043">Non-Staining &amp; Non-Carbonizing:</strong><br data-start="1043" data-end="1046">Leaves no sticky residue or carbon deposits — ensuring <strong data-start="1103" data-end="1130">flawless surface finish</strong> and minimal post-mould cleaning.</p>
</li>
<li data-start="1165" data-end="1303" class="">
<p data-start="1167" data-end="1303" class=""><strong data-start="1167" data-end="1190">Wide Compatibility:</strong><br data-start="1190" data-end="1193">Suitable for <strong data-start="1208" data-end="1292">plastics (PVC, ABS, Polypropylene, Nylon), rubber, PU foams, die-cast components</strong>, and more.</p>
</li>
<li data-start="1305" data-end="1452" class="">
<p data-start="1307" data-end="1452" class=""><strong data-start="1307" data-end="1333">Temperature Resilient:</strong><br data-start="1333" data-end="1336">Performs consistently in <strong data-start="1363" data-end="1390">high-temperature moulds</strong> used in injection, compression, and vacuum forming processes.</p>
</li>
<li data-start="1454" data-end="1585" class="">
<p data-start="1456" data-end="1585" class=""><strong data-start="1456" data-end="1481">Prevents Wear &amp; Tear:</strong><br data-start="1481" data-end="1484">Reduces mechanical abrasion and corrosion, <strong data-start="1529" data-end="1584">prolonging the life of expensive tooling and moulds</strong>.</p>
</li>
<li data-start="1587" data-end="1724" class="">
<p data-start="1589" data-end="1724" class=""><strong data-start="1589" data-end="1621">User-Friendly Aerosol Spray:</strong><br data-start="1621" data-end="1624">Provides <strong data-start="1635" data-end="1667">even coverage with precision</strong>, ensuring clean application without dripping or wastage.</p>
</li>
</ul>
<hr data-start="1726" data-end="1729" class="">
<h3 data-start="1731" data-end="1755" class="">⚙️ <strong data-start="1738" data-end="1755">Applications:</strong>
</h3>
<ul data-start="1757" data-end="1995">
<li data-start="1757" data-end="1779" class="">
<p data-start="1759" data-end="1779" class="">Injection Moulding</p>
</li>
<li data-start="1780" data-end="1804" class="">
<p data-start="1782" data-end="1804" class="">Compression Moulding</p>
</li>
<li data-start="1805" data-end="1847" class="">
<p data-start="1807" data-end="1847" class="">Thermoplastic and Thermoset Processing</p>
</li>
<li data-start="1848" data-end="1877" class="">
<p data-start="1850" data-end="1877" class="">Rubber Component Moulding</p>
</li>
<li data-start="1878" data-end="1912" class="">
<p data-start="1880" data-end="1912" class="">Polyurethane and Foam Moulding</p>
</li>
<li data-start="1913" data-end="1955" class="">
<p data-start="1915" data-end="1955" class="">Die Casting and Metal Injection Moulds</p>
</li>
<li data-start="1956" data-end="1995" class="">
<p data-start="1958" data-end="1995" class="">Electronics Potting and Encapsulation</p>
</li>
</ul>
<hr data-start="1997" data-end="2000" class="">
<h3 data-start="2002" data-end="2025" class="">📦 <strong data-start="2009" data-end="2023">Packaging:</strong>
</h3>
<p data-start="2026" data-end="2107" class="">Available in <strong data-start="2039" data-end="2067">500ml aerosol spray cans</strong> for convenient, on-site industrial use.</p>
<hr data-start="2109" data-end="2112" class="">
<h3 data-start="2114" data-end="2173" class="">💡 <strong data-start="2121" data-end="2173">Why Choose Micron's Silicon Mould Release Spray?</strong>
</h3>
<ul data-start="2175" data-end="2350">
<li data-start="2175" data-end="2207" class="">
<p data-start="2177" data-end="2207" class="">Industrial-Grade Formulation</p>
</li>
<li data-start="2208" data-end="2238" class="">
<p data-start="2210" data-end="2238" class="">Clean, Repeatable Releases</p>
</li>
<li data-start="2239" data-end="2281" class="">
<p data-start="2241" data-end="2281" class="">Reduces Rejections and Improves Output</p>
</li>
<li data-start="2282" data-end="2312" class="">
<p data-start="2284" data-end="2312" class="">Protects Expensive Tooling</p>
</li>
<li data-start="2313" data-end="2350" class="">
<p data-start="2315" data-end="2350" class="">Trusted by Manufacturers Since 1989</p>
</li>
</ul>
<hr data-start="2352" data-end="2355" class="">
<p data-start="2357" data-end="2533" class=""><strong data-start="2357" data-end="2419">Micron Aerosols – Precision Chemistry. Proven Performance.</strong><br data-start="2419" data-end="2422">Let your moulds breathe easy and your production run smoother with India’s most trusted Mould Release solution.</p>`,
    descriptionHtml: `<p data-start="252" data-end="315" class=""><strong data-start="252" data-end="315">Effortless Demoulding | Flawless Finish | Longer Mould Life</strong></p>
<p data-start="317" data-end="653" class="">Micron Aerosols’ <strong data-start="334" data-end="365">Silicon Mould Release Agent</strong> is a premium-grade, silicone-based aerosol spray designed to provide an ultra-smooth, non-stick release film for a wide range of moulding applications. Engineered for efficiency, it ensures clean, repeatable demoulding with minimal buildup, reducing cycle times and extending mould life.</p>
<hr data-start="655" data-end="658" class="">
<h3 data-start="660" data-end="683" class="">✅ <strong data-start="666" data-end="683">Key Features:</strong>
</h3>
<ul data-start="685" data-end="1724">
<li data-start="685" data-end="855" class="">
<p data-start="687" data-end="855" class=""><strong data-start="687" data-end="725">High-Performance Silicone Formula:</strong><br data-start="725" data-end="728">Forms a heat-resistant, durable film that prevents sticking and material buildup — ideal for high-volume, precision moulding.</p>
</li>
<li data-start="857" data-end="1004" class="">
<p data-start="859" data-end="1004" class=""><strong data-start="859" data-end="903">Multiple Release Cycles per Application:</strong><br data-start="903" data-end="906">One spray delivers multiple releases, significantly reducing downtime and reapplication efforts.</p>
</li>
<li data-start="1006" data-end="1163" class="">
<p data-start="1008" data-end="1163" class=""><strong data-start="1008" data-end="1043">Non-Staining &amp; Non-Carbonizing:</strong><br data-start="1043" data-end="1046">Leaves no sticky residue or carbon deposits — ensuring <strong data-start="1103" data-end="1130">flawless surface finish</strong> and minimal post-mould cleaning.</p>
</li>
<li data-start="1165" data-end="1303" class="">
<p data-start="1167" data-end="1303" class=""><strong data-start="1167" data-end="1190">Wide Compatibility:</strong><br data-start="1190" data-end="1193">Suitable for <strong data-start="1208" data-end="1292">plastics (PVC, ABS, Polypropylene, Nylon), rubber, PU foams, die-cast components</strong>, and more.</p>
</li>
<li data-start="1305" data-end="1452" class="">
<p data-start="1307" data-end="1452" class=""><strong data-start="1307" data-end="1333">Temperature Resilient:</strong><br data-start="1333" data-end="1336">Performs consistently in <strong data-start="1363" data-end="1390">high-temperature moulds</strong> used in injection, compression, and vacuum forming processes.</p>
</li>
<li data-start="1454" data-end="1585" class="">
<p data-start="1456" data-end="1585" class=""><strong data-start="1456" data-end="1481">Prevents Wear &amp; Tear:</strong><br data-start="1481" data-end="1484">Reduces mechanical abrasion and corrosion, <strong data-start="1529" data-end="1584">prolonging the life of expensive tooling and moulds</strong>.</p>
</li>
<li data-start="1587" data-end="1724" class="">
<p data-start="1589" data-end="1724" class=""><strong data-start="1589" data-end="1621">User-Friendly Aerosol Spray:</strong><br data-start="1621" data-end="1624">Provides <strong data-start="1635" data-end="1667">even coverage with precision</strong>, ensuring clean application without dripping or wastage.</p>
</li>
</ul>
<hr data-start="1726" data-end="1729" class="">
<h3 data-start="1731" data-end="1755" class="">⚙️ <strong data-start="1738" data-end="1755">Applications:</strong>
</h3>
<ul data-start="1757" data-end="1995">
<li data-start="1757" data-end="1779" class="">
<p data-start="1759" data-end="1779" class="">Injection Moulding</p>
</li>
<li data-start="1780" data-end="1804" class="">
<p data-start="1782" data-end="1804" class="">Compression Moulding</p>
</li>
<li data-start="1805" data-end="1847" class="">
<p data-start="1807" data-end="1847" class="">Thermoplastic and Thermoset Processing</p>
</li>
<li data-start="1848" data-end="1877" class="">
<p data-start="1850" data-end="1877" class="">Rubber Component Moulding</p>
</li>
<li data-start="1878" data-end="1912" class="">
<p data-start="1880" data-end="1912" class="">Polyurethane and Foam Moulding</p>
</li>
<li data-start="1913" data-end="1955" class="">
<p data-start="1915" data-end="1955" class="">Die Casting and Metal Injection Moulds</p>
</li>
<li data-start="1956" data-end="1995" class="">
<p data-start="1958" data-end="1995" class="">Electronics Potting and Encapsulation</p>
</li>
</ul>
<hr data-start="1997" data-end="2000" class="">
<h3 data-start="2002" data-end="2025" class="">📦 <strong data-start="2009" data-end="2023">Packaging:</strong>
</h3>
<p data-start="2026" data-end="2107" class="">Available in <strong data-start="2039" data-end="2067">500ml aerosol spray cans</strong> for convenient, on-site industrial use.</p>
<hr data-start="2109" data-end="2112" class="">
<h3 data-start="2114" data-end="2173" class="">💡 <strong data-start="2121" data-end="2173">Why Choose Micron's Silicon Mould Release Spray?</strong>
</h3>
<ul data-start="2175" data-end="2350">
<li data-start="2175" data-end="2207" class="">
<p data-start="2177" data-end="2207" class="">Industrial-Grade Formulation</p>
</li>
<li data-start="2208" data-end="2238" class="">
<p data-start="2210" data-end="2238" class="">Clean, Repeatable Releases</p>
</li>
<li data-start="2239" data-end="2281" class="">
<p data-start="2241" data-end="2281" class="">Reduces Rejections and Improves Output</p>
</li>
<li data-start="2282" data-end="2312" class="">
<p data-start="2284" data-end="2312" class="">Protects Expensive Tooling</p>
</li>
<li data-start="2313" data-end="2350" class="">
<p data-start="2315" data-end="2350" class="">Trusted by Manufacturers Since 1989</p>
</li>
</ul>
<hr data-start="2352" data-end="2355" class="">
<p data-start="2357" data-end="2533" class=""><strong data-start="2357" data-end="2419">Micron Aerosols – Precision Chemistry. Proven Performance.</strong><br data-start="2419" data-end="2422">Let your moulds breathe easy and your production run smoother with India’s most trusted Mould Release solution.</p>`,
    price: '480.00',
    compareAtPrice: null,
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/1100A.jpg?v=1704707933', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/1_copy.png?v=1726047854', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/1108.png?v=1704710096', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_11_ff73c6dd-97e7-44ce-be8e-486f593cce0f.png?v=1726043267', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_5_78c15104-a973-4034-9a74-a8ccaf4780a3.png?v=1726043337', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_7_3f3d1395-6438-467f-b0c1-8ef771da9e1a.png?v=1726043580', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_6_94a17b7a-0c3e-40f4-9e15-af411daa6ee8.png?v=1726043597', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_16_3699d973-26b4-487b-9b4d-d141a9842829.png?v=1726043644', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_15_e52fb4b8-57e7-4452-92fd-ed8a58564ae6.png?v=1726043670', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/1102_A.png?v=1772041343'],
    variants: [
      { id: 45838949286134, title: '550 ML', price: '480.00', sku: '1100', available: true },
      { id: 45838949318902, title: '5000 ML', price: '5200.00', sku: '1108', available: true },
      { id: 50049739063542, title: '400 ML', price: '320.00', sku: '1102', available: true },
    ],
    productType: 'Plastic Moulding',
    tags: ['Plastic Moulding'],
    vendor: 'Micron Aerosol',
    series: 'S1000',
    collection: 'plastic-moulding',
  },
  {
    id: 8331079778550,
    handle: 'non-silicon-anti-spatter',
    title: '2110 Non Silicon Anti Spatter | 550ml',
    description: `<p>Non Silicon Anti-Spatter Spray is non Silicon Based Spray used to clean welding nozzles and to keep them clean. At the same time, it protects the work piece to be welded against the effect of weld splashes without impairing the welding seam.</p>
<p><meta charset="utf-8"><span data-mce-fragment="1">Non Silicon</span><span data-mce-fragment="1"> </span>Anti-Spatter Spray prevents the adhesion of welding splashes on gas nozzles and workpiece surfaces, offers gap-free protection for the welding process, and makes follow-up cleaning of the work-pieces with a spatula, brush or chisel superfluous.</p>
<p><meta charset="utf-8"><b data-mce-fragment="1">Features</b><span data-mce-fragment="1">:</span><br data-mce-fragment="1"></p>
<ul data-mce-fragment="1">
<li data-mce-fragment="1">Long Term Adhesive</li>
<li data-mce-fragment="1">Improves Surface Finish</li>
<li data-mce-fragment="1">Extends Nozzles Life</li>
</ul>
<p><b data-mce-fragment="1">Application:</b><br data-mce-fragment="1"></p>
<ul data-mce-fragment="1">
<li data-mce-fragment="1">Electrodes holders</li>
<li data-mce-fragment="1">Weldments</li>
<li data-mce-fragment="1">Contact tips, tools, metal moulds</li>
<li data-mce-fragment="1">Mig and Tig tips</li>
<li data-mce-fragment="1">Bench tops splash guards</li>
<li data-mce-fragment="1">Resistance welding tips</li>
</ul>
<p><b data-mce-fragment="1">Benefits:</b><span data-mce-fragment="1"></span></p>
<ul data-mce-fragment="1">
<li data-mce-fragment="1">Provide long lasting anti adherent effect.</li>
<li data-mce-fragment="1">Paint Compatible.</li>
<li data-mce-fragment="1">Improves surface finish.</li>
<li data-mce-fragment="1">Eliminates the need for chiseling, grinding Or brushing after welding.</li>
<li data-mce-fragment="1">Extends nozzle life.</li>
<li data-mce-fragment="1">Prevents burning of wielding spatters on contact tips &amp; work pieces.</li>
</ul>`,
    descriptionHtml: `<p>Non Silicon Anti-Spatter Spray is non Silicon Based Spray used to clean welding nozzles and to keep them clean. At the same time, it protects the work piece to be welded against the effect of weld splashes without impairing the welding seam.</p>
<p><meta charset="utf-8"><span data-mce-fragment="1">Non Silicon</span><span data-mce-fragment="1"> </span>Anti-Spatter Spray prevents the adhesion of welding splashes on gas nozzles and workpiece surfaces, offers gap-free protection for the welding process, and makes follow-up cleaning of the work-pieces with a spatula, brush or chisel superfluous.</p>
<p><meta charset="utf-8"><b data-mce-fragment="1">Features</b><span data-mce-fragment="1">:</span><br data-mce-fragment="1"></p>
<ul data-mce-fragment="1">
<li data-mce-fragment="1">Long Term Adhesive</li>
<li data-mce-fragment="1">Improves Surface Finish</li>
<li data-mce-fragment="1">Extends Nozzles Life</li>
</ul>
<p><b data-mce-fragment="1">Application:</b><br data-mce-fragment="1"></p>
<ul data-mce-fragment="1">
<li data-mce-fragment="1">Electrodes holders</li>
<li data-mce-fragment="1">Weldments</li>
<li data-mce-fragment="1">Contact tips, tools, metal moulds</li>
<li data-mce-fragment="1">Mig and Tig tips</li>
<li data-mce-fragment="1">Bench tops splash guards</li>
<li data-mce-fragment="1">Resistance welding tips</li>
</ul>
<p><b data-mce-fragment="1">Benefits:</b><span data-mce-fragment="1"></span></p>
<ul data-mce-fragment="1">
<li data-mce-fragment="1">Provide long lasting anti adherent effect.</li>
<li data-mce-fragment="1">Paint Compatible.</li>
<li data-mce-fragment="1">Improves surface finish.</li>
<li data-mce-fragment="1">Eliminates the need for chiseling, grinding Or brushing after welding.</li>
<li data-mce-fragment="1">Extends nozzle life.</li>
<li data-mce-fragment="1">Prevents burning of wielding spatters on contact tips &amp; work pieces.</li>
</ul>`,
    price: '320.00',
    compareAtPrice: '600.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/2110_A.png?v=1745908640', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/2110.png?v=1745908640', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Anti_Spatter_C5.png?v=1745908640', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Anti_Spatter_C6.png?v=1745908640', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Non_Silicon_2.png?v=1745908640', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Non_Silicon_5.png?v=1745908640', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Non_Silicon_1.png?v=1745908640', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Non_Silicon_3.png?v=1745908640', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Non_Silicon_4.png?v=1745908640', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Instagram2-min_1c4a11bf-a458-49cf-b3fd-f17ce9b5c8fc.png?v=1745908640', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Anti_Spatter_C7.png?v=1745908640', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Instagram3-min_b24842e2-f55a-4c89-82e9-5aa9db15fb5c.png?v=1745908640'],
    variants: [
      { id: 45837574177014, title: 'Default Title', price: '320.00', sku: '2110', available: true },
    ],
    productType: 'Welding',
    tags: ['Welding'],
    vendor: 'Micron Aerosol',
    series: 'S2000',
    collection: 'industrial-welding-fabrication',
  },
  {
    id: 8331033805046,
    handle: 'silicon-anti-spatter',
    title: '2100 Silicon Anti Spatter | 550ml',
    description: `<p>Silicon Anti-Spatter Spray is used to clean welding nozzles and to keep them clean. At the same time, it protects the work piece to be welded against the effect of weld splashes without impairing the welding seam.</p>
<p>Anti-Spatter Spray prevents the adhesion of welding splashes on gas nozzles and workpiece surfaces, offers gap-free protection for the welding process, and makes follow-up cleaning of the work-pieces with a spatula, brush or chisel superfluous.</p>
<p><meta charset="utf-8"><b data-mce-fragment="1">Features</b><span data-mce-fragment="1">:</span><br data-mce-fragment="1"></p>
<ul data-mce-fragment="1">
<li data-mce-fragment="1">Long Term Adhesive</li>
<li data-mce-fragment="1">Improves Surface Finish</li>
<li data-mce-fragment="1">Extends Nozzles Life</li>
</ul>
<p><b data-mce-fragment="1">Application:</b><br data-mce-fragment="1"></p>
<ul data-mce-fragment="1">
<li data-mce-fragment="1">Electrodes holders</li>
<li data-mce-fragment="1">Weldments</li>
<li data-mce-fragment="1">Contact tips, tools, metal moulds</li>
<li data-mce-fragment="1">Mig and Tig tips</li>
<li data-mce-fragment="1">Bench tops splash guards</li>
<li data-mce-fragment="1">Resistance welding tips</li>
</ul>
<p><b data-mce-fragment="1">Benefits:</b><span data-mce-fragment="1"></span></p>
<ul data-mce-fragment="1">
<li data-mce-fragment="1">Provide long lasting anti adherent effect.</li>
<li data-mce-fragment="1">Paint Compatible.</li>
<li data-mce-fragment="1">Improves surface finish.</li>
<li data-mce-fragment="1">Eliminates the need for chiseling, grinding Or brushing after welding.</li>
<li data-mce-fragment="1">Extends nozzle life.</li>
<li data-mce-fragment="1">Prevents burning of wielding spatters on contact tips &amp; work pieces.</li>
</ul>`,
    descriptionHtml: `<p>Silicon Anti-Spatter Spray is used to clean welding nozzles and to keep them clean. At the same time, it protects the work piece to be welded against the effect of weld splashes without impairing the welding seam.</p>
<p>Anti-Spatter Spray prevents the adhesion of welding splashes on gas nozzles and workpiece surfaces, offers gap-free protection for the welding process, and makes follow-up cleaning of the work-pieces with a spatula, brush or chisel superfluous.</p>
<p><meta charset="utf-8"><b data-mce-fragment="1">Features</b><span data-mce-fragment="1">:</span><br data-mce-fragment="1"></p>
<ul data-mce-fragment="1">
<li data-mce-fragment="1">Long Term Adhesive</li>
<li data-mce-fragment="1">Improves Surface Finish</li>
<li data-mce-fragment="1">Extends Nozzles Life</li>
</ul>
<p><b data-mce-fragment="1">Application:</b><br data-mce-fragment="1"></p>
<ul data-mce-fragment="1">
<li data-mce-fragment="1">Electrodes holders</li>
<li data-mce-fragment="1">Weldments</li>
<li data-mce-fragment="1">Contact tips, tools, metal moulds</li>
<li data-mce-fragment="1">Mig and Tig tips</li>
<li data-mce-fragment="1">Bench tops splash guards</li>
<li data-mce-fragment="1">Resistance welding tips</li>
</ul>
<p><b data-mce-fragment="1">Benefits:</b><span data-mce-fragment="1"></span></p>
<ul data-mce-fragment="1">
<li data-mce-fragment="1">Provide long lasting anti adherent effect.</li>
<li data-mce-fragment="1">Paint Compatible.</li>
<li data-mce-fragment="1">Improves surface finish.</li>
<li data-mce-fragment="1">Eliminates the need for chiseling, grinding Or brushing after welding.</li>
<li data-mce-fragment="1">Extends nozzle life.</li>
<li data-mce-fragment="1">Prevents burning of wielding spatters on contact tips &amp; work pieces.</li>
</ul>`,
    price: '320.00',
    compareAtPrice: '600.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/2100_4041072c-cb5e-4aa8-8710-3d1c6682db65.png?v=1745908757', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/2100.png?v=1745908757', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Welding.png?v=1765864295', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Silicon_2.png?v=1765864295', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Silicon_5.png?v=1765864295', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Silicon_3.png?v=1765864295', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Silicon_1.png?v=1765864295', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Instagram2-min.png?v=1765864295', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Instagram3-min.png?v=1765864295', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Silicon_4.png?v=1765864295', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/AS1.png?v=1765864295'],
    variants: [
      { id: 45837358956790, title: 'Default Title', price: '320.00', sku: '2100', available: true },
    ],
    productType: 'Welding',
    tags: ['Welding'],
    vendor: 'Micron Aerosol',
    series: 'S2000',
    collection: 'industrial-welding-fabrication',
  },
  {
    id: 8330946511094,
    handle: 'protektor-conformal-coating-uv',
    title: '3110 Protektor® Conformal Coating Spray - UV for PCBs, Electronics | With UV Tracer - Glows under UV Light',
    description: `<p><meta charset="utf-8">UV Tracable Conformal Coating - <meta charset="utf-8">Protektor<span data-mce-fragment="1">®</span> is a fast drying single component acrylic lacquer for PCBs to protect them from harsh environments, moisture, corrosion, dirt &amp; dust, fungus, caustic vapors, etc.<br data-mce-fragment="1"><br data-mce-fragment="1">The high dielectric strength prevents the component from high voltage arcing and corona effect while the coating further protects and insulates the electrical and electronic components. This variant comes with <strong data-mce-fragment="1">UV based Inspection</strong> ability<br data-mce-fragment="1"><br data-mce-fragment="1">It conforms to <strong>IPC-830CC</strong>-Military Grade <strong data-mce-fragment="1">MIL-I-46058C</strong> specification, is approved by Centre for Development of Telematics (<strong data-mce-fragment="1">C-DOT</strong>) and is <strong data-mce-fragment="1">RoHS</strong> compliant and environment friendly.</p>
<div dir="ltr" align="left">
<table>
<colgroup> <col width="138"> <col width="227"> <col width="236"> </colgroup>
<tbody>
<tr>
<td><br></td>
<td>
<p dir="ltr"><span>Liquid Variant</span></p>
</td>
<td>
<p dir="ltr"><span>Spray Variant</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Description</span></p>
</td>
<td>
<p dir="ltr"><span>Conformal Coating Brushable UV for PCB Assemblies, Electrical/Electronic Insulators </span></p>
</td>
<td>
<p dir="ltr"><span>Conformal Coating Brushable  UV for PCB Assemblies, Electrical/Electronic Insulators </span></p>
</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Packing </span></p>
</td>
<td>
<p dir="ltr"><span>5 ltr in Carboy for Brushable coating </span></p>
</td>
<td>
<p dir="ltr"><span>550ml Aerosol Spray </span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Type</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>Acrylic Resin (AR)</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Appearance</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>Clear Transparent</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Specific Gravity</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>0.95</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Propellent</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>Non CFC, Flammable</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Temperature Resistance</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>-70</span><span>o</span><span> C to 120</span><span>o</span><span> C</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Dry to Touch Time</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>30 Mins</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Film Thickness</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>26 Micron</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Clarity</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>Clear transparent</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Shelf Life</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>18 Months</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>GRADE</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>MIL – I – 46058C</span></p>
</td>
</tr>
</tbody>
</table>
</div>
<h3 dir="ltr">
<span>2.</span><span><span class="Apple-tab-span"> </span></span><span>Electrical Properties</span>
</h3>
<div dir="ltr" align="left">
<table>
<colgroup> <col width="211"> <col width="389"> </colgroup>
<tbody>
<tr>
<td>
<p dir="ltr"><span>Insulation Resistance after  Chamber Test</span></p>
</td>
<td>
<p dir="ltr"><span> 2.5 X 10</span><span>11</span><span> Ohms</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Breakdown Voltage</span></p>
</td>
<td>
<p dir="ltr"><span>700 V at 26 Micron</span></p>
</td>
</tr>
</tbody>
</table>
</div>
<h3 dir="ltr"><span>3. Specifications</span></h3>
<div dir="ltr" align="left">
<table>
<colgroup> <col width="152"> <col width="447"> </colgroup>
<tbody>
<tr>
<td>
<p dir="ltr"><span>Advantages</span></p>
</td>
<td>
<ol>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Fast Drying</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Single Component spray for Printed Circuit Board assemblies</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Protects from Humidity, Fungus &amp; Corrosion by forming film on components </span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Provides Insulation against high voltage arcing</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Excellent Flexibility &amp; Solderability</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Black Coated Components can hide your circuits.</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Easy to Handle with Dry to tough time at 30mins</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Convenient to apply as aerosol and efficient for assembly line operations</span></p>
</li>
</ol>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Fields of Application</span></p>
</td>
<td>
<ol>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Telephone and Telephone Exchanges Manufacturing</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Computer Process Control Equipments</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Programmable Logic Controllers</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Electronic Equipments like Weighing Scales, Multimeters</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>LCD LED Bulbs, CFL</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Variable Frequency Drives</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Mobiles, Computers, Laptops, Tablets, Hard Drive PCBs</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Automobile Control Computers </span></p>
</li>
</ol>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Packaging</span></p>
</td>
<td>
<ol>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>550ml Aerosol Spray Can</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>5 Ltr Carboy ( For Brushable coating)</span></p>
</li>
</ol>
</td>
</tr>
</tbody>
</table>
</div>
<p><b><br></b></p>
<p dir="ltr"><span>Cured film can be easily removed  by using  </span><span>Protektor</span><span> Conformal Coating Thinner </span><span><span class="Apple-tab-span"> </span></span><span>The information in the sheet was written based on the best knowledge and experience currently available. The information provided in this Safety Data Sheet is correct to the best of our knowledge, information and belief at the date of its publication. The information given is designed only as a guidance for safe handling, use, processing, storage, transportation, disposal and release and is not to be considered a warranty or quality specification. The information relates only to the specific material designated and may not be valid for such material used in combination with any other materials or in any process, unless specified in the text.</span><span><span class="Apple-tab-span"> </span></span></p>
<p><iframe title="YouTube video player" src="https://www.youtube.com/embed/livUN16a4XQ?si=4SSO-fspMLK6nzOA" height="315" width="560"></iframe></p>
<p><img src="https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Protektor_BG.png?v=1726044219" alt=""></p>`,
    descriptionHtml: `<p><meta charset="utf-8">UV Tracable Conformal Coating - <meta charset="utf-8">Protektor<span data-mce-fragment="1">®</span> is a fast drying single component acrylic lacquer for PCBs to protect them from harsh environments, moisture, corrosion, dirt &amp; dust, fungus, caustic vapors, etc.<br data-mce-fragment="1"><br data-mce-fragment="1">The high dielectric strength prevents the component from high voltage arcing and corona effect while the coating further protects and insulates the electrical and electronic components. This variant comes with <strong data-mce-fragment="1">UV based Inspection</strong> ability<br data-mce-fragment="1"><br data-mce-fragment="1">It conforms to <strong>IPC-830CC</strong>-Military Grade <strong data-mce-fragment="1">MIL-I-46058C</strong> specification, is approved by Centre for Development of Telematics (<strong data-mce-fragment="1">C-DOT</strong>) and is <strong data-mce-fragment="1">RoHS</strong> compliant and environment friendly.</p>
<div dir="ltr" align="left">
<table>
<colgroup> <col width="138"> <col width="227"> <col width="236"> </colgroup>
<tbody>
<tr>
<td><br></td>
<td>
<p dir="ltr"><span>Liquid Variant</span></p>
</td>
<td>
<p dir="ltr"><span>Spray Variant</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Description</span></p>
</td>
<td>
<p dir="ltr"><span>Conformal Coating Brushable UV for PCB Assemblies, Electrical/Electronic Insulators </span></p>
</td>
<td>
<p dir="ltr"><span>Conformal Coating Brushable  UV for PCB Assemblies, Electrical/Electronic Insulators </span></p>
</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Packing </span></p>
</td>
<td>
<p dir="ltr"><span>5 ltr in Carboy for Brushable coating </span></p>
</td>
<td>
<p dir="ltr"><span>550ml Aerosol Spray </span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Type</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>Acrylic Resin (AR)</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Appearance</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>Clear Transparent</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Specific Gravity</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>0.95</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Propellent</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>Non CFC, Flammable</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Temperature Resistance</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>-70</span><span>o</span><span> C to 120</span><span>o</span><span> C</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Dry to Touch Time</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>30 Mins</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Film Thickness</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>26 Micron</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Clarity</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>Clear transparent</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Shelf Life</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>18 Months</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>GRADE</span></p>
</td>
<td colspan="2">
<p dir="ltr"><span>MIL – I – 46058C</span></p>
</td>
</tr>
</tbody>
</table>
</div>
<h3 dir="ltr">
<span>2.</span><span><span class="Apple-tab-span"> </span></span><span>Electrical Properties</span>
</h3>
<div dir="ltr" align="left">
<table>
<colgroup> <col width="211"> <col width="389"> </colgroup>
<tbody>
<tr>
<td>
<p dir="ltr"><span>Insulation Resistance after  Chamber Test</span></p>
</td>
<td>
<p dir="ltr"><span> 2.5 X 10</span><span>11</span><span> Ohms</span></p>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Breakdown Voltage</span></p>
</td>
<td>
<p dir="ltr"><span>700 V at 26 Micron</span></p>
</td>
</tr>
</tbody>
</table>
</div>
<h3 dir="ltr"><span>3. Specifications</span></h3>
<div dir="ltr" align="left">
<table>
<colgroup> <col width="152"> <col width="447"> </colgroup>
<tbody>
<tr>
<td>
<p dir="ltr"><span>Advantages</span></p>
</td>
<td>
<ol>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Fast Drying</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Single Component spray for Printed Circuit Board assemblies</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Protects from Humidity, Fungus &amp; Corrosion by forming film on components </span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Provides Insulation against high voltage arcing</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Excellent Flexibility &amp; Solderability</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Black Coated Components can hide your circuits.</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Easy to Handle with Dry to tough time at 30mins</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Convenient to apply as aerosol and efficient for assembly line operations</span></p>
</li>
</ol>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Fields of Application</span></p>
</td>
<td>
<ol>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Telephone and Telephone Exchanges Manufacturing</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Computer Process Control Equipments</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Programmable Logic Controllers</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Electronic Equipments like Weighing Scales, Multimeters</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>LCD LED Bulbs, CFL</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Variable Frequency Drives</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Mobiles, Computers, Laptops, Tablets, Hard Drive PCBs</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>Automobile Control Computers </span></p>
</li>
</ol>
</td>
</tr>
<tr>
<td>
<p dir="ltr"><span>Packaging</span></p>
</td>
<td>
<ol>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>550ml Aerosol Spray Can</span></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><span>5 Ltr Carboy ( For Brushable coating)</span></p>
</li>
</ol>
</td>
</tr>
</tbody>
</table>
</div>
<p><b><br></b></p>
<p dir="ltr"><span>Cured film can be easily removed  by using  </span><span>Protektor</span><span> Conformal Coating Thinner </span><span><span class="Apple-tab-span"> </span></span><span>The information in the sheet was written based on the best knowledge and experience currently available. The information provided in this Safety Data Sheet is correct to the best of our knowledge, information and belief at the date of its publication. The information given is designed only as a guidance for safe handling, use, processing, storage, transportation, disposal and release and is not to be considered a warranty or quality specification. The information relates only to the specific material designated and may not be valid for such material used in combination with any other materials or in any process, unless specified in the text.</span><span><span class="Apple-tab-span"> </span></span></p>
<p><iframe title="YouTube video player" src="https://www.youtube.com/embed/livUN16a4XQ?si=4SSO-fspMLK6nzOA" height="315" width="560"></iframe></p>
<p><img src="https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Protektor_BG.png?v=1726044219" alt=""></p>`,
    price: '800.00',
    compareAtPrice: '950.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/3110A.jpg?v=1704705891', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/PROTEKTOR_UV.png?v=1726143194', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Drone_Protektor.png?v=1765863858', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_17_copy.png?v=1765863858', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_17_c722c093-c192-4d84-a7e1-d8bd9ce16624.png?v=1765863858', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/4.png?v=1765863858', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/0.png?v=1765863858', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/2.png?v=1765863858', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/1.png?v=1765863858', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/3118_fb179c1f-36ef-4306-bdab-e9faf6fe7e2c.png?v=1765863858', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/3110_B.png?v=1765863858'],
    variants: [
      { id: 47222822863094, title: 'Aerosol Spray 550 ml', price: '800.00', sku: '3110', available: true },
      { id: 47222822895862, title: 'Bulk Carbouy 5000ml', price: '4500.00', sku: '3111', available: true },
    ],
    productType: 'Electronics',
    tags: ['Electronics'],
    vendor: 'Micron Aerosol',
    series: 'S3000',
    collection: 'electronics',
  },
  {
    id: 8330615914742,
    handle: 'multi-application-maintenance-aid-rust-protection-lubrication-400ml',
    title: '4100 M.A.M.A® Multi Application Maintenance Aid®',
    description: `<p><img src="https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1.png?v=1713347521" alt=""></p>
<p><strong>Multi Application Maintenance Aid - Super Speciality Spray</strong></p>
<p>Our Multi Application Maintenance Aid is a high-performance spray designed for versatile use cases. This specialty spray offers superior protection and maintenance for metal surfaces and machinery.</p>
<p><strong>Key Features:</strong></p>
<ul>
<li>
<strong>Rust and Corrosion Protection</strong>: Shields metal from rust and corrosion, extending the lifespan of your tools and equipment.</li>
<li>
<strong>Penetrates Stuck Parts</strong>: Easily penetrates and loosens jammed or stuck parts, making maintenance a breeze.</li>
<li>
<strong>Moisture Displacement</strong>: Displaces moisture to prevent damage and rusting, ensuring optimal performance in humid environments.</li>
<li>
<strong>Versatile Lubrication</strong>: Provides industrial-grade lubrication for machinery, reducing friction and wear.</li>
<li>
<strong>Rust Bond Breaking</strong>: Instantly releases rust-metal bonds by breaking ferric oxide bonds, simplifying disassembly and repair.</li>
<li>
<strong>Quick Drying</strong>: Dries quickly, leaving no sticky residue, making it easy and efficient to use.</li>
<li>
<strong>Electrical Contact Cleaner</strong>: Cleans and restores electrical contacts, removing dirt and carbon buildup from arcing.</li>
<li>
<strong>Non-Sticky Formula</strong>: Leaves a clean, non-sticky finish, ensuring smooth operation of moving parts.</li>
</ul>
<p><strong>Applications:</strong></p>
<ul>
<li>Metal protection and maintenance</li>
<li>Loosening rusted and jammed parts</li>
<li>Moisture displacement on metal surfaces</li>
<li>Industrial-grade lubrication for machinery</li>
<li>Cleaning and protecting electrical contacts</li>
<li>Preventing further rust and corrosion</li>
</ul>
<p><strong>Benefits &amp; USP:</strong></p>
<ul>
<li>
<strong>Low Surface Tension</strong>: Easily penetrates any crack or crevice, ensuring thorough protection and lubrication.</li>
<li>
<strong>Rust Inhibition</strong>: Cleans metal surfaces from rust, oil, and other contaminants while preventing future rust.</li>
<li>
<strong>Quick-Dry Formula</strong>: Dries rapidly, allowing for immediate use without waiting.</li>
<li>
<strong>Ease of Application</strong>: Designed for easy application, providing effective maintenance with minimal effort.</li>
</ul>
<p data-mce-fragment="1"><strong>More details: </strong>Check the Product Catalog below:</p>
<p>Upgrade your maintenance routine with our Multi Application Maintenance Aid Spray MAMA, the perfect alternative to WD-40. Whether for industrial use or household tasks, this spray ensures reliable performance and protection</p>
<p><img src="https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_3.png?v=1713347519" alt=""></p>
<p> </p>`,
    descriptionHtml: `<p><img src="https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_1.png?v=1713347521" alt=""></p>
<p><strong>Multi Application Maintenance Aid - Super Speciality Spray</strong></p>
<p>Our Multi Application Maintenance Aid is a high-performance spray designed for versatile use cases. This specialty spray offers superior protection and maintenance for metal surfaces and machinery.</p>
<p><strong>Key Features:</strong></p>
<ul>
<li>
<strong>Rust and Corrosion Protection</strong>: Shields metal from rust and corrosion, extending the lifespan of your tools and equipment.</li>
<li>
<strong>Penetrates Stuck Parts</strong>: Easily penetrates and loosens jammed or stuck parts, making maintenance a breeze.</li>
<li>
<strong>Moisture Displacement</strong>: Displaces moisture to prevent damage and rusting, ensuring optimal performance in humid environments.</li>
<li>
<strong>Versatile Lubrication</strong>: Provides industrial-grade lubrication for machinery, reducing friction and wear.</li>
<li>
<strong>Rust Bond Breaking</strong>: Instantly releases rust-metal bonds by breaking ferric oxide bonds, simplifying disassembly and repair.</li>
<li>
<strong>Quick Drying</strong>: Dries quickly, leaving no sticky residue, making it easy and efficient to use.</li>
<li>
<strong>Electrical Contact Cleaner</strong>: Cleans and restores electrical contacts, removing dirt and carbon buildup from arcing.</li>
<li>
<strong>Non-Sticky Formula</strong>: Leaves a clean, non-sticky finish, ensuring smooth operation of moving parts.</li>
</ul>
<p><strong>Applications:</strong></p>
<ul>
<li>Metal protection and maintenance</li>
<li>Loosening rusted and jammed parts</li>
<li>Moisture displacement on metal surfaces</li>
<li>Industrial-grade lubrication for machinery</li>
<li>Cleaning and protecting electrical contacts</li>
<li>Preventing further rust and corrosion</li>
</ul>
<p><strong>Benefits &amp; USP:</strong></p>
<ul>
<li>
<strong>Low Surface Tension</strong>: Easily penetrates any crack or crevice, ensuring thorough protection and lubrication.</li>
<li>
<strong>Rust Inhibition</strong>: Cleans metal surfaces from rust, oil, and other contaminants while preventing future rust.</li>
<li>
<strong>Quick-Dry Formula</strong>: Dries rapidly, allowing for immediate use without waiting.</li>
<li>
<strong>Ease of Application</strong>: Designed for easy application, providing effective maintenance with minimal effort.</li>
</ul>
<p data-mce-fragment="1"><strong>More details: </strong>Check the Product Catalog below:</p>
<p>Upgrade your maintenance routine with our Multi Application Maintenance Aid Spray MAMA, the perfect alternative to WD-40. Whether for industrial use or household tasks, this spray ensures reliable performance and protection</p>
<p><img src="https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Artboard_3.png?v=1713347519" alt=""></p>
<p> </p>`,
    price: '410.00',
    compareAtPrice: '405.00',
    images: ['https://cdn.shopify.com/s/files/1/0683/2622/8214/files/4102A_31dc6ba1-c1b6-483d-9be9-01834489ce46.jpg?v=1704709828', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/1_1655ed1b-16bc-485f-ac07-1570b6e0885d.png?v=1726038050', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Cycle_Chain_MAMA.png?v=1765863942', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Cycling_2.png?v=1765863942', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/MAMA_Bike_0.png?v=1765863942', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/2_7ee037c7-7d8c-4c95-8d19-f5b053390c79.png?v=1765863942', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/3.png?v=1765863942', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/4_970ec091-5f30-4d04-8593-6c603fcfca9c.png?v=1765863942', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/5.png?v=1765863942', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/6.png?v=1765863942', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/7.png?v=1765863942', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/8.png?v=1765863942', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/Cycling.png?v=1765863942', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/MAMA_32_8.png?v=1765863942', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/4105Packof3.png?v=1765863942', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/4104_Pack_of_3.png?v=1765863942', 'https://cdn.shopify.com/s/files/1/0683/2622/8214/files/4103A.jpg?v=1765863942'],
    variants: [
      { id: 47222474080502, title: '400 ml', price: '410.00', sku: '4102', available: true },
      { id: 47222474113270, title: '300 ml', price: '350.00', sku: '4103', available: true },
      { id: 47222474146038, title: '200 ml Pack of 3', price: '660.00', sku: '4104', available: true },
      { id: 47222474178806, title: '100ml Pack of 3', price: '375.00', sku: '4105', available: true },
      { id: 47222474211574, title: '30ml Pack of 8', price: '800.00', sku: '4106', available: true },
    ],
    productType: 'Specialty Products',
    tags: ['Automotive', 'Speciality Products'],
    vendor: 'Micron Aerosol',
    series: 'S4000',
    collection: 'essentials',
  },
];

export const collections: Collection[] = [
  {
    handle: 'high-specialty',
    title: 'High Specialty',
    description: ``,
    image: null,
    productHandles: ['2138-ceracoat-z-water-based-boron-nitride-coating-5ltr'],
  },
  {
    handle: 'frontpage',
    title: 'Home page',
    description: ``,
    image: null,
    productHandles: ['lighter-gas-refill-can-550ml-with-refill-adapter-micron-aerosols®-for-lighters-jeweller-torch-pack-of-2', 'ceramic-powder-coating-spray', 'multi-application-maintenance-aid-rust-protection-lubrication-400ml', '7104-dentalube-dental-hand-piece-lubricant-spray', '3708-protektor-hydracoat-5ltrs', '3508-protektor-metacoat-uv-5ltrs', '2218-zinc-aluminium-touch-up-paint-500ml-copy', 'm-a-m-a-silicon-spray-super-silicon-multipurpose-spray-550ml-odourless-colourless-toxin-free-lubricant', 'protektor-acrylic-sealant-1ltr-for-electronics', 'mould-cleaner-550ml'],
  },
  {
    handle: 'outdoor-living',
    title: 'Outdoor Living',
    description: ``,
    image: 'https://cdn.shopify.com/s/files/1/0683/2622/8214/collections/Outdoor_Living.png?v=1718953641',
    productHandles: ['lighter-gas-refill-can-550ml-with-refill-adapter-micron-aerosols®-for-lighters-jeweller-torch-pack-of-2', 'micron-aerosols®-butane-firefly-butane-gas-cartridge-400ml-for-portable-gas-stoves-flame-guns-flame-throwers-pack-of-4'],
  },
  {
    handle: 'riders-united™',
    title: 'Riders United™',
    description: ``,
    image: 'https://cdn.shopify.com/s/files/1/0683/2622/8214/collections/RidersUnitedIntoPic.jpg?v=1768112126',
    productHandles: ['5201-ptfe-enhanced-chain-lubricant-spray-riders-united'],
  },
  {
    handle: 'plastic-moulding',
    title: 'S1000 Plastic Moulding Solutions',
    description: ``,
    image: 'https://cdn.shopify.com/s/files/1/0683/2622/8214/collections/Plastic_Molding.png?v=1713864385',
    productHandles: ['silicon-rubber-care-agent', 'mould-saver-anti-corrosive-wax-coating', 'silicon-mould-release-agent', 'mould-cleaner-550ml', 'non-silicon-mould-release-agent'],
  },
  {
    handle: 'industrial-welding-fabrication',
    title: 'S2000 Welding & Fabrication',
    description: ``,
    image: 'https://cdn.shopify.com/s/files/1/0683/2622/8214/collections/Welding_3x_57241829-db7f-4324-8fa7-6938e61227d5.png?v=1713866145',
    productHandles: ['water-based-anti-spatter', '3708-protektor-hydracoat-5ltrs', '3508-protektor-metacoat-uv-5ltrs', '3608-protektor-polycoat-uv-5ltrs', 'ceramic-anti-spatter', 'non-silicon-anti-spatter', 'silicon-anti-spatter'],
  },
  {
    handle: 'electronics',
    title: 'S3000 Electronics Protection',
    description: ``,
    image: 'https://cdn.shopify.com/s/files/1/0683/2622/8214/collections/Electronics-min.png?v=1713866164',
    productHandles: ['protektor-conformal-coating', 'protektor-conformal-coating-uv', '3708-protektor-hydracoat-5ltrs', '3508-protektor-metacoat-uv-5ltrs', '3608-protektor-polycoat-uv-5ltrs', 'electrical-contact-cleaner', 'protektor-pcb-cleaner-550ml', 'protektor-acrylic-sealant-1ltr-for-electronics', 'electrical-contact-cleaner-500ml', 'protektor-conformal-coating-thinner'],
  },
  {
    handle: 'essentials',
    title: 'S4000 Essentials',
    description: ``,
    image: 'https://cdn.shopify.com/s/files/1/0683/2622/8214/collections/Essentials_3x-min.png?v=1713866114',
    productHandles: ['rang-barse-pack-of-3-colour-snow-spray', 'lighter-gas-refill-can-550ml-with-refill-adapter-micron-aerosols®-for-lighters-jeweller-torch-pack-of-2', 'micron-aerosols®-butane-firefly-butane-gas-cartridge-400ml-for-portable-gas-stoves-flame-guns-flame-throwers-pack-of-4', 'multi-application-maintenance-aid-rust-protection-lubrication-400ml', '3708-protektor-hydracoat-5ltrs', '3608-protektor-polycoat-uv-5ltrs', '2218-zinc-aluminium-touch-up-paint-500ml-copy', '3508-protektor-metacoat-uv-5ltrs', 'electrical-contact-cleaner', 'm-a-m-a-silicon-spray-super-silicon-multipurpose-spray-550ml-odourless-colourless-toxin-free-lubricant', 'k9-doctor-poop'],
  },
  {
    handle: 'automotive-care-performance',
    title: 'S5000 Automotive Maintenance',
    description: ``,
    image: 'https://cdn.shopify.com/s/files/1/0683/2622/8214/collections/Automobile-min.png?v=1713866289',
    productHandles: ['multi-application-maintenance-aid-rust-protection-lubrication-400ml', '5201-ptfe-enhanced-chain-lubricant-spray-riders-united', '3708-protektor-hydracoat-5ltrs', '3508-protektor-metacoat-uv-5ltrs', '3608-protektor-polycoat-uv-5ltrs', 'm-a-m-a-silicon-spray-super-silicon-multipurpose-spray-550ml-odourless-colourless-toxin-free-lubricant', 'electrical-contact-cleaner-500ml', 'riders-united-dashboard-polish'],
  },
  {
    handle: 'speciality-products',
    title: 'S6000 Speciality Products',
    description: ``,
    image: 'https://cdn.shopify.com/s/files/1/0683/2622/8214/collections/Speciality-min.png?v=1713866131',
    productHandles: ['rang-barse-pack-of-3-colour-snow-spray', 'micron-aerosols®-butane-firefly-butane-gas-cartridge-400ml-for-portable-gas-stoves-flame-guns-flame-throwers-pack-of-4', 'multi-application-maintenance-aid-rust-protection-lubrication-400ml', '5201-ptfe-enhanced-chain-lubricant-spray-riders-united', '3708-protektor-hydracoat-5ltrs', '3608-protektor-polycoat-uv-5ltrs', '3508-protektor-metacoat-uv-5ltrs', 'm-a-m-a-silicon-spray-super-silicon-multipurpose-spray-550ml-odourless-colourless-toxin-free-lubricant'],
  },
];

// Helper functions
export const getProductByHandle = (handle: string): Product | undefined =>
  products.find((p) => p.handle === handle);

export const getProductsBySeries = (series: string): Product[] =>
  products.filter((p) => p.series === series);

export const getProductsByCollection = (collectionHandle: string): Product[] => {
  const collection = collections.find((c) => c.handle === collectionHandle);
  if (!collection) return [];
  return collection.productHandles
    .map((h) => products.find((p) => p.handle === h))
    .filter((p): p is Product => p !== undefined);
};

export const getCollectionByHandle = (handle: string): Collection | undefined =>
  collections.find((c) => c.handle === handle);

export const seriesCollections = [
  { series: 'S1000', handle: 'plastic-moulding', title: 'S1000 Plastic Moulding Solutions' },
  { series: 'S2000', handle: 'industrial-welding-fabrication', title: 'S2000 Welding & Fabrication' },
  { series: 'S3000', handle: 'electronics', title: 'S3000 Electronics Protection' },
  { series: 'S4000', handle: 'essentials', title: 'S4000 Essentials' },
  { series: 'S5000', handle: 'automotive-care-performance', title: 'S5000 Automotive Maintenance' },
  { series: 'S6000', handle: 'speciality-products', title: 'S6000 Speciality Products' },
];
