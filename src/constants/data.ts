import { OptionsType, RGB } from "@/types/common";
import { COLORS_MODES } from "@/types/enums";

export const colorOptions: OptionsType[] = [
  { label: "HEX", value: COLORS_MODES.HEX },
  { label: "RGB", value: COLORS_MODES.RGB },
  { label: "RGBA", value: COLORS_MODES.RGBA },
  { label: "HSL", value: COLORS_MODES.HSL },
  { label: "HSB", value: COLORS_MODES.HSB },
  { label: "HTML", value: COLORS_MODES.HTML },
];

export const singleColors = [
  { name: "Purple", hex: "#6E3DE9", slug: "purple" },
  { name: "Pink", hex: "#F6B2FF", slug: "pink" },
  { name: "Blue", hex: "#3B82F6", slug: "blue" },
  { name: "Green", hex: "#22C55E", slug: "green" },
  { name: "Yellow", hex: "#FDE047", slug: "yellow" },
  { name: "Orange", hex: "#FFA81C", slug: "orange" },
  { name: "Gray", hex: "#848484", slug: "gray" },
  { name: "Brown", hex: "#B18037", slug: "brown" },
  { name: "Red", hex: "#F55959", slug: "red" },
  { name: "Sage", hex: "#94A684", slug: "sage" },
  { name: "Beige", hex: "#F9DEC9", slug: "beige" },
  { name: "Black", hex: "#19191B", slug: "black" },
  { name: "Maroon", hex: "#952323", slug: "maroon" },
  { name: "Peach", hex: "#EF9595", slug: "peach" },
  { name: "Navy", hex: "#2E4374", slug: "navy" },
  { name: "Teal", hex: "#49AEA8", slug: "teal" },
  { name: "Gold", hex: "#EBAE17", slug: "gold" },
  { name: "Silver", hex: "#EBEBEB", slug: "silver" },
];

export const gradients = [
  // Original purple gradient
  [
    "#461873",
    "#58148e",
    "#6910a8",
    "#8c07dd",
    "#9f21e3",
    "#b333e9",
    "#cb5df1",
    "#dc93f6",
    "#eabffa",
    "#f7ebfd",
  ],
  // Blue gradient
  [
    "#0a2472",
    "#104291",
    "#1660b0",
    "#1a7ecf",
    "#0f9cf0",
    "#41b0f5",
    "#73c3f9",
    "#a5d7fc",
    "#d7eefe",
  ],
  // Green gradient
  [
    "#0a4c25",
    "#0e6331",
    "#127a3d",
    "#17934a",
    "#1cac56",
    "#24cc66",
    "#4dd782",
    "#84e4a7",
    "#bbf0cd",
    "#e5faf0",
  ],
  // Red gradient
  [
    "#6e0e0a",
    "#8c110d",
    "#aa1511",
    "#ca1914",
    "#e71d16",
    "#f04239",
    "#f46d66",
    "#f99693",
    "#fcc5c3",
    "#feeae9",
  ],
  // Teal gradient
  [
    "#0a4c4c",
    "#0e6363",
    "#127a7a",
    "#179393",
    "#1caaaa",
    "#32c5c5",
    "#59d8d8",
    "#8be6e6",
    "#bdf3f3",
    "#e3fbfb",
  ],
  // Orange gradient
  [
    "#783c00",
    "#954a00",
    "#b25a00",
    "#cf6a00",
    "#ec7a00",
    "#ff8c14",
    "#ffa347",
    "#ffba7a",
    "#ffd4ad",
    "#ffeee0",
  ],
  // Pink gradient
  [
    "#7a0036",
    "#960042",
    "#b2004f",
    "#cc005c",
    "#e60069",
    "#ff1480",
    "#ff4799",
    "#ff7ab3",
    "#ffadcc",
    "#ffe0ea",
  ],
  // Yellow gradient
  [
    "#6e5400",
    "#8c6c00",
    "#ab8400",
    "#c99c00",
    "#e8b400",
    "#ffca0e",
    "#ffd641",
    "#ffe374",
    "#ffefa7",
    "#fffbe0",
  ],
  // Lavender gradient (10 shades)
  [
    "#2d1a40",
    "#3c2255",
    "#4b2a6a",
    "#5a337f",
    "#693b94",
    "#7a4cac",
    "#8c62bb",
    "#9e78ca",
    "#b08fd9",
    "#d9cced",
  ],
  // Navy gradient (8 shades)
  [
    "#001233",
    "#001845",
    "#002855",
    "#023e7d",
    "#0353a4",
    "#0466c8",
    "#0582ca",
    "#48cae4",
  ],
  // Coral gradient (7 shades)
  ["#4f0000", "#800000", "#b30000", "#e60000", "#ff5233", "#ff8c66", "#ffc8b3"],
  // Forest green gradient (6 shades)
  ["#1b4332", "#2d6a4f", "#40916c", "#52b788", "#74c69d", "#b7e4c7"],
  // Burgundy gradient (5 shades)
  ["#4a0000", "#6a0026", "#8c0033", "#a4133c", "#c9184a"],
  // Sky blue gradient (9 shades)
  [
    "#023e8a",
    "#0077b6",
    "#0096c7",
    "#00b4d8",
    "#48cae4",
    "#90e0ef",
    "#ade8f4",
    "#caf0f8",
    "#e6f8fb",
  ],
  // Olive gradient (6 shades)
  ["#3a3a00", "#5c5c00", "#808000", "#a3a300", "#c6c600", "#e9e900"],
  // Plum gradient (7 shades)
  ["#370617", "#6a040f", "#9d0208", "#d00000", "#dc2f02", "#e85d04", "#f48c06"],
  // Mint gradient (5 shades)
  ["#2d6a4f", "#40916c", "#52b788", "#74c69d", "#b7e4c7"],
  // Salmon gradient (7 shades)
  ["#780116", "#9b0000", "#bf0603", "#e2313b", "#f26a4f", "#f49e79", "#fad2b8"],
  // Slate gradient (8 shades)
  [
    "#1e293b",
    "#334155",
    "#475569",
    "#64748b",
    "#94a3b8",
    "#cbd5e1",
    "#e2e8f0",
    "#f8fafc",
  ],
  // Ruby gradient (6 shades)
  ["#67001a", "#851e2c", "#a4243b", "#c32f4b", "#e25563", "#f88f9c"],
  // Emerald gradient (10 shades)
  [
    "#064e3b",
    "#065f46",
    "#047857",
    "#059669",
    "#10b981",
    "#34d399",
    "#6ee7b7",
    "#a7f3d0",
    "#d1fae5",
    "#ecfdf5",
  ],
  // Amethyst gradient (8 shades)
  [
    "#2e1065",
    "#3b0764",
    "#4c0519",
    "#6d28d9",
    "#7c3aed",
    "#8b5cf6",
    "#a78bfa",
    "#c4b5fd",
  ],
  // Gold gradient (5 shades)
  ["#8d5b07", "#b27b0e", "#d69a16", "#f8bc1d", "#ffd966"],
  // Ocean gradient (9 shades)
  [
    "#03045e",
    "#023e8a",
    "#0077b6",
    "#0096c7",
    "#00b4d8",
    "#48cae4",
    "#90e0ef",
    "#ade8f4",
    "#caf0f8",
  ],
  // Lime gradient (7 shades)
  ["#1e5302", "#326c05", "#478407", "#5c9c0a", "#71b40d", "#9cd354", "#c8e69c"],
  // Peach gradient (6 shades)
  ["#a05511", "#c46818", "#e87c1f", "#ff9130", "#ffb370", "#ffd9b6"],
  // Indigo gradient (9 shades)
  [
    "#1a1a2e",
    "#16213e",
    "#0f3460",
    "#0f52ba",
    "#4169e1",
    "#6495ed",
    "#87ceeb",
    "#a6c8ff",
    "#c4e0ff",
  ],
  // Turquoise gradient (8 shades)
  [
    "#004a5b",
    "#00606e",
    "#007680",
    "#008c93",
    "#00a2a5",
    "#00b9b7",
    "#00d1c9",
    "#a9f0ea",
  ],
  // Amber gradient (7 shades)
  ["#653800", "#8a4f00", "#b06600", "#d57e00", "#f59e0b", "#f8c056", "#ffe0a3"],
  // Crimson gradient (6 shades)
  ["#570000", "#750000", "#930000", "#b10000", "#cf0000", "#ff5656"],
  // Azure gradient (10 shades)
  [
    "#012a4a",
    "#013a63",
    "#01497c",
    "#014f86",
    "#0466c8",
    "#0582ca",
    "#0b9ed9",
    "#48cae4",
    "#90e0ef",
    "#e0fbfc",
  ],
  // Copper gradient (5 shades)
  ["#5e2e08", "#824010", "#a75219", "#cb6322", "#f08033"],
  // Sapphire gradient (9 shades)
  [
    "#0c1446",
    "#142070",
    "#1c2c9b",
    "#2439c6",
    "#3151f5",
    "#5170f8",
    "#7891fc",
    "#9fb3fd",
    "#c6d4fe",
  ],
  // Jade gradient (8 shades)
  [
    "#064e3b",
    "#065f46",
    "#047857",
    "#059669",
    "#10b981",
    "#34d399",
    "#6ee7b7",
    "#a7f3d0",
  ],
  // Sienna gradient (7 shades)
  ["#4b1c03", "#6c2d07", "#8c3d0a", "#ad4e0e", "#ce5e11", "#e66e15", "#fd7e14"],
  // Violet gradient (6 shades)
  ["#240046", "#3c096c", "#5a189a", "#7b2cbf", "#9d4edd", "#c77dff"],
  // Charcoal gradient (10 shades)
  [
    "#0b090a",
    "#161a1d",
    "#212529",
    "#343a40",
    "#495057",
    "#6c757d",
    "#8d99ae",
    "#adb5bd",
    "#ced4da",
    "#dee2e6",
  ],
  // Magenta gradient (7 shades)
  ["#770045", "#90005c", "#a80072", "#c00088", "#d8009f", "#f000b5", "#ff5ccb"],
  // Lemon gradient (6 shades)
  ["#9c6c00", "#b87e00", "#d39100", "#efa300", "#ffbf00", "#ffea80"],
  // Pewter gradient (8 shades)
  [
    "#2d3033",
    "#404447",
    "#53585c",
    "#666c70",
    "#797f84",
    "#8c9398",
    "#a6aeb5",
    "#c0c7ce",
  ],
  // Raspberry gradient (9 shades)
  [
    "#590e21",
    "#77142c",
    "#951a36",
    "#b32041",
    "#d1264c",
    "#e43563",
    "#ee5c7f",
    "#f5889e",
    "#fab3be",
  ],
  // Cobalt gradient (7 shades)
  ["#001845", "#002855", "#023e7d", "#0353a4", "#0466c8", "#0582ca", "#48cae4"],
  // Apricot gradient (5 shades)
  ["#953d19", "#be5823", "#e6742e", "#ff903f", "#ffbe8a"],
  // Periwinkle gradient (8 shades)
  [
    "#343b80",
    "#484fb2",
    "#585ce3",
    "#686df8",
    "#8892fc",
    "#a9b0ff",
    "#caceff",
    "#e9ebff",
  ],
  // Mahogany gradient (7 shades)
  ["#3f0d00", "#561300", "#6c1900", "#831f00", "#992500", "#b02b00", "#c73200"],
  // Aqua gradient (9 shades)
  [
    "#046075",
    "#05768c",
    "#068da3",
    "#07a3ba",
    "#08bad1",
    "#26d0e8",
    "#55dfef",
    "#84eef7",
    "#b4f8fd",
  ],
  // Fuchsia gradient (6 shades)
  ["#6c0e5e", "#871877", "#a22190", "#bd2ba9", "#d834c2", "#f354db"],
  // Coffee gradient (7 shades)
  ["#301902", "#4a2504", "#633006", "#7d3c08", "#96470a", "#b0530b", "#c9600d"],
  // Bronze gradient (5 shades)
  ["#573a14", "#78501c", "#9a6724", "#bc7e2c", "#dda052"],
  // Cyan gradient (10 shades)
  [
    "#00323d",
    "#004354",
    "#00546b",
    "#006582",
    "#007699",
    "#0087b0",
    "#0099c7",
    "#00aade",
    "#00bbf5",
    "#88d8ff",
  ],
  // Rose gradient (8 shades)
  [
    "#650031",
    "#85003f",
    "#a5004e",
    "#c5005d",
    "#e5006c",
    "#ff3384",
    "#ff669c",
    "#ff99b4",
  ],
  // Steel gradient (9 shades)
  [
    "#1b262c",
    "#2c3e50",
    "#3e5c76",
    "#546e7a",
    "#607d8b",
    "#78909c",
    "#90a4ae",
    "#b0bec5",
    "#cfd8dc",
  ],
  // Lilac gradient (7 shades)
  ["#4d1d7a", "#63259e", "#7a2cc3", "#9041dc", "#a655e8", "#bc6af3", "#d380ff"],
  // Mauve gradient (6 shades)
  ["#572147", "#733062", "#8f3f7d", "#ab4e97", "#c75db2", "#e36ccd"],
  // Honey gradient (8 shades)
  [
    "#8a5a00",
    "#a87000",
    "#c78600",
    "#e59c00",
    "#ffb300",
    "#ffc233",
    "#ffd166",
    "#ffdf99",
  ],
  // Berry gradient (9 shades)
  [
    "#370317",
    "#55051f",
    "#730728",
    "#900930",
    "#ae0b39",
    "#cc0d42",
    "#e53f66",
    "#ee658b",
    "#f88daf",
  ],
  // Pine gradient (7 shades)
  ["#0a3615", "#10471c", "#155724", "#1b682c", "#207934", "#258a3c", "#2a9b43"],
  // Cerulean gradient (8 shades)
  [
    "#003459",
    "#00476a",
    "#005a7c",
    "#006d8d",
    "#00809e",
    "#0093b0",
    "#00a6c1",
    "#00b9d3",
  ],
  // Blood orange gradient (6 shades)
  ["#6b1003", "#861304", "#a11704", "#bc1b05", "#d61f06", "#f12306"],
  // Maroon gradient (10 shades)
  [
    "#370d1a",
    "#4e1425",
    "#661b30",
    "#7d223b",
    "#952946",
    "#ac3052",
    "#c4375d",
    "#db3e68",
    "#f34573",
    "#f97093",
  ],
  // Citron gradient (5 shades)
  ["#7f8000", "#9c9d00", "#b9ba00", "#d6d700", "#f3f500"],
  // Pumpkin gradient (7 shades)
  ["#773204", "#973f05", "#b64c05", "#d65906", "#f56606", "#ff8533", "#ffa366"],
  // Mulberry gradient (8 shades)
  [
    "#370926",
    "#4c0c35",
    "#620f43",
    "#771252",
    "#8d1561",
    "#a2186f",
    "#b81b7e",
    "#ce1e8d",
  ],
  // Graphite gradient (9 shades)
  [
    "#0f0f0f",
    "#1d1d1d",
    "#2b2b2b",
    "#3a3a3a",
    "#484848",
    "#565656",
    "#646464",
    "#737373",
    "#818181",
  ],
  // Orchid gradient (7 shades)
  ["#5a1aa7", "#6f22cc", "#802df0", "#9653f3", "#ac79f6", "#c39ff9", "#d9c5fc"],
  // Clay gradient (6 shades)
  ["#8c3503", "#a74204", "#c14e04", "#dc5b05", "#f66805", "#ff883d"],
  // Sage gradient (10 shades)
  [
    "#2f3e46",
    "#354f52",
    "#3b6064",
    "#417177",
    "#46828a",
    "#5a9ca7",
    "#6fb6c4",
    "#84d0e0",
    "#9de9fd",
    "#caf8ff",
  ],
  // Rust gradient (7 shades)
  ["#600800", "#7c0a00", "#980d00", "#b40f00", "#d01100", "#e31400", "#f51600"],
  // Cream gradient (5 shades)
  ["#e6ca99", "#edd2ab", "#f3dabc", "#f9e2ce", "#ffeadf"],
  // Umber gradient (8 shades)
  [
    "#3b2200",
    "#512e00",
    "#683a00",
    "#7e4600",
    "#955200",
    "#ab5f00",
    "#c26b00",
    "#d87700",
  ],
  // Cornflower gradient (9 shades)
  [
    "#1d3c7c",
    "#274d9e",
    "#305fc0",
    "#3970e2",
    "#5286e7",
    "#6b9cec",
    "#85b1f1",
    "#9ec7f6",
    "#b8dcfb",
  ],
  // Tangerine gradient (6 shades)
  ["#a03f00", "#c44d00", "#e85a00", "#ff6a0a", "#ff8c41", "#ffad78"],
  // Hunter green gradient (7 shades)
  ["#0f2417", "#183220", "#214029", "#294e32", "#325c3a", "#3b6a43", "#44784c"],
  // Brick gradient (8 shades)
  [
    "#4d1309",
    "#60180b",
    "#731c0d",
    "#86210f",
    "#992611",
    "#ac2b13",
    "#bf2f15",
    "#d23417",
  ],
  // Wisteria gradient (10 shades)
  [
    "#4a1c96",
    "#5b24b6",
    "#6c2cd6",
    "#7d35f5",
    "#8f4df7",
    "#a165f9",
    "#b27dfb",
    "#c495fd",
    "#d5aefe",
    "#e7c7ff",
  ],
  // Desert gradient (5 shades)
  ["#9f6a3b", "#b77f47", "#cf9453", "#e7a95e", "#ffbe6a"],
  // Midnight gradient (9 shades)
  [
    "#02020a",
    "#060618",
    "#0a0a26",
    "#0e0e34",
    "#121242",
    "#161650",
    "#1a1a5e",
    "#1e1e6c",
    "#22227a",
  ],
  // Moss gradient (7 shades)
  ["#2a4014", "#38551c", "#466a24", "#54802c", "#629534", "#70aa3c", "#7ebf44"],
  // Cantaloupe gradient (6 shades)
  ["#b85504", "#d16304", "#ea7105", "#ff7e0f", "#ff9942", "#ffb475"],
  // Eggplant gradient (8 shades)
  [
    "#2a0934",
    "#370c45",
    "#450f56",
    "#521267",
    "#601578",
    "#6d1889",
    "#7b1b9a",
    "#881eab",
  ],
  // Fog gradient (5 shades)
  ["#b3b3b3", "#c2c2c2", "#d1d1d1", "#e0e0e0", "#efefef"],
  // Cocoa gradient (7 shades)
  ["#3d1c02", "#552703", "#6d3204", "#853d05", "#9c4806", "#b45307", "#cc5e07"],
  // Bisque gradient (6 shades)
  ["#d19964", "#daa87c", "#e3b793", "#ecc6ab", "#f5d5c2", "#ffe4da"],
  // Smoke gradient (10 shades)
  [
    "#1a1a1a",
    "#2e2e2e",
    "#434343",
    "#575757",
    "#6c6c6c",
    "#808080",
    "#959595",
    "#a9a9a9",
    "#bebebe",
    "#d2d2d2",
  ],
  // Firebrick gradient (8 shades)
  [
    "#5c0002",
    "#710003",
    "#870003",
    "#9c0004",
    "#b10004",
    "#c60005",
    "#db0005",
    "#f00006",
  ],
  // Marigold gradient (7 shades)
  ["#a66200", "#c27400", "#de8600", "#f99800", "#ffab29", "#ffbc55", "#ffcd81"],
  // Sea foam gradient (9 shades)
  [
    "#0d665b",
    "#10786c",
    "#148a7d",
    "#179c8e",
    "#1bae9f",
    "#1fbfb0",
    "#36d1c4",
    "#5fe3d8",
    "#88f5ed",
  ],
  // Terracotta gradient (6 shades)
  ["#6a2e01", "#803701", "#954001", "#ab4901", "#c05202", "#d65b02"],
  // Blush gradient (8 shades)
  [
    "#ab293b",
    "#c4314a",
    "#dc3859",
    "#f44068",
    "#f75f82",
    "#fa7d9b",
    "#fc9cb5",
    "#fdbace",
  ],
  // Iris gradient (7 shades)
  ["#352a87", "#4031a2", "#4a39bc", "#5540d7", "#6e5cdd", "#8778e4", "#a094ea"],
  // Hickory gradient (5 shades)
  ["#552200", "#6b2b00", "#823300", "#983c00", "#ae4400"],
  // Silver gradient (10 shades)
  [
    "#707070",
    "#808080",
    "#909090",
    "#a0a0a0",
    "#b0b0b0",
    "#c0c0c0",
    "#d0d0d0",
    "#e0e0e0",
    "#f0f0f0",
    "#ffffff",
  ],
  // Raisin gradient (7 shades)
  ["#1e0a29", "#280d36", "#321144", "#3c1451", "#46185e", "#501b6b", "#5a1f78"],
  // Opal gradient (9 shades)
  [
    "#00595e",
    "#006e73",
    "#008287",
    "#00979c",
    "#00abb1",
    "#00c0c6",
    "#22d4da",
    "#55e9ee",
    "#88fdff",
  ],
  // Carrot gradient (6 shades)
  ["#a73600", "#c34000", "#e04a00", "#fc5500", "#ff7333", "#ff9166"],
  // Denim gradient (8 shades)
  [
    "#0c2e5c",
    "#0f3870",
    "#134284",
    "#164c98",
    "#1a56ac",
    "#1d60c0",
    "#2174e8",
    "#4289ec",
  ],
  // Caramel gradient (7 shades)
  ["#8c4600", "#a45300", "#bc6000", "#d36d00", "#eb7a00", "#ff8800", "#ff9d33"],
  // Evergreen gradient (5 shades)
  ["#0e4429", "#125735", "#166b40", "#1a7e4c", "#1e9258"],
  // Lapis gradient (10 shades)
  [
    "#131c60",
    "#182576",
    "#1c2e8c",
    "#2137a2",
    "#2540b8",
    "#294ade",
    "#3a5ae4",
    "#5b76ea",
    "#7c92f0",
    "#9daef6",
  ],
  // Tangerine (2 shades)
  ["#ff8c00", "#ffc04d"],
  // Mint (2 shades)
  ["#4cd964", "#a5eab7"],
  // Lavender (2 shades)
  ["#9678d3", "#c7b6e3"],
  // Berry (2 shades)
  ["#d40060", "#ff5c99"],
  // Slate (2 shades)
  ["#708090", "#b0c4de"],
  // Seafoam (3 shades)
  ["#16a085", "#48c9b0", "#a1e8da"],
  // Coral (3 shades)
  ["#ff6f61", "#ff9f8f", "#ffd0c7"],
  // Amber (3 shades)
  ["#ffbf00", "#ffd54f", "#ffecb3"],
  // Cobalt (3 shades)
  ["#0047ab", "#4169e1", "#87ceeb"],
  // Ruby (3 shades)
  ["#e0115f", "#eb4887", "#f590b0"],
  // Ash (2 shades)
  ["#666666", "#b2b2b2"],
  // Mustard (2 shades)
  ["#e1ad01", "#f4d35e"],
  // Rose gold (3 shades)
  ["#b76e79", "#d8a3ad", "#f8d4d9"],
];

export const baseColors: Record<string, number[]> = {
  Red: [245, 89, 89],
  Purple: [140, 7, 221],
  Blue: [26, 126, 207],
  Green: [28, 172, 86],
  Orange: [255, 168, 28],
  Yellow: [253, 224, 71],
  Pink: [246, 178, 255],
  Brown: [177, 128, 55],
  Gray: [132, 132, 132],
  Teal: [73, 174, 168],
  Navy: [46, 67, 116],
  Black: [25, 25, 27],
};
