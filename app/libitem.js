/* SPDX-License-Identifier: Apache-2.0 */
/**
 * libitem.js — the "CadCraft library item", format 1 (docs/LIBRARY-SPEC.md §1), and the file adapters
 * that need nothing but bytes or an already-parsed file (§2). No DOM, no Node-only APIs, one import (./packver.js, the version rule):
 * BimCraft, CadCraft (a byte-identical copy at cadcraft/dev/libitem.js), the server-side converter
 * (tools/library/convert.mjs) and the tests all run this same file.
 *
 * An item is one JSON document per version. Lengths in mm, angles in DEGREES, Z up, plan in XY at z 0,
 * insertion point (0,0,0), the item's front faces −Y and its back is the +Y side.
 *
 *   validateItem(obj, { partial })  → { ok, errors[] }   (partial = converter output: no uuid/version/license/provenance yet)
 *   itemHash(obj)                   → Promise<sha256 hex> of canonicalJson(obj without provenance)
 *   canonicalJson(v)                → keys sorted at every level, no whitespace, numbers as JSON.stringify writes them
 *   planBounds(plan)                → { minX, minY, maxX, maxY } | null   (geometry; text counts by its anchor point)
 *   boxFromPlan(plan, h, z = 0)     → { type:'box', x, y, z, w, d, h } | null
 *   paramsFromAttrs(attrs, { mmPerUnit }) → params (canonical fields) from KCL-style / plain attributes
 *   attrsInfo(attrs)                → { maker, model, title, itemNo, qty } (item number and quantity belong to a placement)
 *   variantList(item) / variantOf(item, id) / itemAsVariant(item, id)   0.7 W3.19: an item with `variants` read as its variants
 *   portsOf(item, variant?)         → the item's ports, or the variant's own when it has them
 *   bodyBox(body)                   → { x, y, z, w, d, h } of a box body or a mesh body's extent, null without a body
 *   decodeElec / elecText / plumbSize — the KCL field decoders (dwg-equipment.js uses these)
 *
 * Adapters — each returns { items, notes } (notes: plain sentences; nothing is guessed silently):
 *   itemsFromCsv(text, { category, kind })
 *   itemFromMesh(bytes, 'gltf'|'glb'|'obj'|'stl', { units, upAxis, name })
 *   itemsFromDwg(db, { units, blocks, fileName, list })  (+ candidates[]; db = the drawing model: readDwg / dxf-model.js)
 *   itemFromBlock(db, name, { units, fileName })          → { item, notes }
 *   itemFromRfa(info)                                     (info = rvt-reader.js readRevit() result: PartAtom only)
 * IFC types → items is in libitem-ifc.js (needs web-ifc).
 *
 * Plan entities (every one has `layer` and `color`: null by layer, 0 by block, 1–255 ACI, '#rrggbb'):
 *   line {x1,y1,x2,y2} · circle {x,y,r} · arc {x,y,r,a0,a1} (CCW, degrees) · poly {pts:[[x,y]|[x,y,bulge]…], closed}
 *   ellipse {cx,cy,mx,my,ratio,t0,t1} (major axis vector mx,my; parameters in degrees) · text {x,y,h,rot,value}
 *   (x,y = left end of the baseline) · point {x,y} · hatch {loops:[[x,y,x,y,…]…], solid:true}
 */

import { validatePackVersion } from './packver.js';   // BK.153/154: the one version + changelog rule (lib/packver; PHP twin PackVersioning)
import { escXml as esc } from './util.js';   // shared helpers (0.11 PERF.74)

export const FORMAT = 'cadcraft-library-item';
export const FORMAT_VERSION = 1;

// ---- words (docs/LANG.md § Shared libraries; node tools/lang/lib-keys.mjs copies MESSAGES into the apps' lang/en.json)
/* i18n-ignore-start: the English source of the keys below */
export const MESSAGES = {
  'libitem.cat.foodservice.cooking': 'Cooking',
  'libitem.cat.foodservice.refrigeration': 'Refrigeration',
  'libitem.cat.foodservice.sinks': 'Sinks',
  'libitem.cat.foodservice.worktables': 'Work tables',
  'libitem.cat.foodservice.shelving': 'Shelving',
  'libitem.cat.foodservice.warewashing': 'Warewashing',
  'libitem.cat.foodservice.ventilation': 'Ventilation and hoods',
  'libitem.cat.foodservice.prep': 'Food preparation',
  'libitem.cat.foodservice.holding': 'Holding and warming',
  'libitem.cat.foodservice.beverage': 'Beverage',
  'libitem.cat.foodservice.ice': 'Ice',
  'libitem.cat.foodservice.serving': 'Serving and display',
  'libitem.cat.foodservice.other': 'Other foodservice',
  'libitem.cat.furniture.seating': 'Seating',
  'libitem.cat.furniture.tables': 'Tables',
  'libitem.cat.furniture.desks': 'Desks',
  'libitem.cat.furniture.storage': 'Storage',
  'libitem.cat.furniture.beds': 'Beds',
  'libitem.cat.furniture.other': 'Other furniture',
  'libitem.cat.casework.base': 'Base cabinets',
  'libitem.cat.casework.wall': 'Wall cabinets',
  'libitem.cat.casework.tall': 'Tall cabinets',
  'libitem.cat.plumbing.fixtures': 'Plumbing fixtures',
  'libitem.cat.plumbing.equipment': 'Plumbing equipment',
  'libitem.cat.electrical.fixtures': 'Light fixtures',
  'libitem.cat.electrical.equipment': 'Electrical equipment',
  'libitem.cat.mechanical.equipment': 'Mechanical equipment',
  'libitem.cat.appliances.residential': 'Residential appliances',
  'libitem.cat.medical.patientcare': 'Patient care',
  'libitem.cat.medical.surgical': 'Surgical',
  'libitem.cat.medical.imaging': 'Imaging and diagnostics',
  'libitem.cat.medical.laboratory': 'Laboratory',
  'libitem.cat.medical.support': 'Sterile processing and pharmacy',
  'libitem.cat.construction.equipment': 'Construction equipment',
  'libitem.cat.construction.temporary': 'Temporary works and site facilities',
  'libitem.cat.construction.formwork': 'Formwork and scaffolding',
  'libitem.cat.construction.tools': 'Tools and plant',
  'libitem.cat.earthmoving.excavators': 'Excavators',
  'libitem.cat.earthmoving.loaders': 'Dozers, loaders and graders',
  'libitem.cat.earthmoving.haulage': 'Haulage and trucks',
  'libitem.cat.earthmoving.compaction': 'Compaction and paving',
  'libitem.cat.earthmoving.attachments': 'Attachments',
  'libitem.cat.mining.surface': 'Surface mining',
  'libitem.cat.mining.underground': 'Underground mining',
  'libitem.cat.mining.processing': 'Mineral processing',
  'libitem.cat.mining.support': 'Mine support and facilities',
  'libitem.cat.aviation.aircraft': 'Aircraft',
  'libitem.cat.aviation.groundsupport': 'Ground support equipment',
  'libitem.cat.aviation.airfield': 'Airfield',
  'libitem.cat.aviation.hangar': 'Hangar and maintenance',
  'libitem.cat.aviation.rescue': 'Rescue and fire fighting',
  'libitem.cat.printing.printers': 'Printers and build plates',
  'libitem.cat.printing.parts': 'Printed parts and brackets',
  'libitem.cat.printing.fixtures': 'Jigs, fixtures and holders',
  'libitem.cat.printing.calibration': 'Calibration and test prints',
  'libitem.cat.aerospace.launch': 'Launch vehicles and pads',
  'libitem.cat.aerospace.spacecraft': 'Spacecraft and satellites',
  'libitem.cat.aerospace.structures': 'Airframe and structural parts',
  'libitem.cat.aerospace.ground': 'Ground and test equipment',
  'libitem.cat.agriculture.machinery': 'Tractors and machinery',
  'libitem.cat.agriculture.buildings': 'Barns, silos and sheds',
  'libitem.cat.agriculture.livestock': 'Livestock equipment',
  'libitem.cat.agriculture.irrigation': 'Irrigation and crop equipment',
  'libitem.cat.architecture.envelope': 'Facade and envelope elements',
  'libitem.cat.architecture.circulation': 'Stairs, ramps and circulation',
  'libitem.cat.architecture.details': 'Architectural details',
  'libitem.cat.architecture.massing': 'Massing and models',
  'libitem.cat.automotive.vehicles': 'Vehicles by class',
  'libitem.cat.automotive.components': 'Engines and components',
  'libitem.cat.automotive.workshop': 'Workshop and garage',
  'libitem.cat.automotive.charging': 'Fuel and charging',
  'libitem.cat.computer.desktop': 'Computers and displays',
  'libitem.cat.computer.peripherals': 'Peripherals',
  'libitem.cat.computer.servers': 'Servers and racks',
  'libitem.cat.computer.network': 'Network equipment',
  'libitem.cat.educational.classroom': 'Classroom equipment',
  'libitem.cat.educational.laboratory': 'Teaching laboratory',
  'libitem.cat.educational.models': 'Teaching models',
  'libitem.cat.educational.playground': 'Learning and play',
  'libitem.cat.energy.generation': 'Generation',
  'libitem.cat.energy.renewable': 'Solar, wind and storage',
  'libitem.cat.energy.distribution': 'Transmission and distribution',
  'libitem.cat.energy.oilgas': 'Oil and gas',
  'libitem.cat.fixtures.lighting': 'Light fixtures',
  'libitem.cat.fixtures.bath': 'Bath and plumbing fixtures',
  'libitem.cat.fixtures.hardware': 'Door and cabinet hardware',
  'libitem.cat.fixtures.fittings': 'Wall and ceiling fittings',
  'libitem.cat.hobby.craft': 'Craft and workshop',
  'libitem.cat.hobby.models': 'Model making',
  'libitem.cat.hobby.collecting': 'Collecting and display',
  'libitem.cat.hobby.outdoor': 'Outdoor hobbies',
  'libitem.cat.household.kitchenware': 'Kitchenware',
  'libitem.cat.household.cleaning': 'Cleaning and laundry',
  'libitem.cat.household.storage': 'Storage and organizers',
  'libitem.cat.household.decor': 'Home accessories',
  'libitem.cat.industrial.products': 'Consumer products',
  'libitem.cat.industrial.handheld': 'Handheld devices',
  'libitem.cat.industrial.packaging': 'Packaging and containers',
  'libitem.cat.industrial.enclosures': 'Enclosures and housings',
  'libitem.cat.interior.lighting': 'Lamps and lighting',
  'libitem.cat.interior.soft': 'Soft furnishings',
  'libitem.cat.interior.accessories': 'Accessories and decor',
  'libitem.cat.interior.finishes': 'Wall and floor features',
  'libitem.cat.jewellery.rings': 'Rings',
  'libitem.cat.jewellery.necklaces': 'Pendants and chains',
  'libitem.cat.jewellery.earrings': 'Earrings and bracelets',
  'libitem.cat.jewellery.settings': 'Settings, stones and cases',
  'libitem.cat.fun.characters': 'Characters and figures',
  'libitem.cat.fun.novelty': 'Novelty objects',
  'libitem.cat.fun.puzzles': 'Puzzles and mazes',
  'libitem.cat.fun.fantasy': 'Fantasy and sci-fi props',
  'libitem.cat.machine.fasteners': 'Fasteners and fittings',
  'libitem.cat.machine.transmission': 'Gears, shafts and bearings',
  'libitem.cat.machine.frames': 'Frames and housings',
  'libitem.cat.machine.mechanisms': 'Mechanisms and actuators',
  'libitem.cat.marine.boats': 'Boats and hulls',
  'libitem.cat.marine.deck': 'Deck hardware and fittings',
  'libitem.cat.marine.harbour': 'Harbour and dock equipment',
  'libitem.cat.marine.offshore': 'Offshore and subsea',
  'libitem.cat.military.vehicles': 'Generic vehicles',
  'libitem.cat.military.shelters': 'Shelters and field facilities',
  'libitem.cat.military.field': 'Field equipment and gear',
  'libitem.cat.military.support': 'Logistics and support',
  'libitem.cat.nature.rocks': 'Rocks and terrain',
  'libitem.cat.nature.trees': 'Trees and shrubs',
  'libitem.cat.nature.water': 'Water features',
  'libitem.cat.nature.wildlife': 'Animals and wildlife',
  'libitem.cat.piping.fittings': 'Pipe fittings',
  'libitem.cat.piping.valves': 'Valves',
  'libitem.cat.piping.supports': 'Pipe supports and hangers',
  'libitem.cat.piping.spools': 'Spools and skids',
  'libitem.cat.robotics.arms': 'Robot arms and grippers',
  'libitem.cat.robotics.mobile': 'Mobile robots',
  'libitem.cat.robotics.parts': 'Robot parts and sensors',
  'libitem.cat.robotics.cells': 'Work cells and guarding',
  'libitem.cat.speedrun.setups': 'Run setups and desks',
  'libitem.cat.speedrun.gear': 'Controllers and capture gear',
  'libitem.cat.speedrun.tracks': 'Timing and race tracks',
  'libitem.cat.speedrun.trophies': 'Trophies and boards',
  'libitem.cat.sport.courts': 'Courts and fields',
  'libitem.cat.sport.equipment': 'Sports equipment',
  'libitem.cat.sport.fitness': 'Fitness equipment',
  'libitem.cat.sport.venues': 'Stadium and venue items',
  'libitem.cat.tech.gadgets': 'Consumer gadgets',
  'libitem.cat.tech.audio': 'Audio and video',
  'libitem.cat.tech.iot': 'Sensors and smart devices',
  'libitem.cat.tech.wearables': 'Wearables and mobile',
  'libitem.cat.tools.hand': 'Hand tools',
  'libitem.cat.tools.power': 'Power tools',
  'libitem.cat.tools.machine': 'Workshop machines',
  'libitem.cat.tools.storage': 'Tool storage',
  'libitem.cat.toys.blocks': 'Blocks and building toys',
  'libitem.cat.toys.vehicles': 'Toy vehicles',
  'libitem.cat.toys.dolls': 'Figures and playsets',
  'libitem.cat.toys.games': 'Games and ride-ons',
  'libitem.cat.site.landscape': 'Landscape',
  'libitem.cat.site.vehicles': 'Vehicles',
  'libitem.cat.people.entourage': 'People',
  'libitem.cat.symbols.annotation': 'Annotation symbols',
  'libitem.cat.symbols.electrical': 'Electrical symbols',
  'libitem.cat.symbols.plumbing': 'Plumbing symbols',
  'libitem.cat.details.generic': 'Details',
  'libitem.cat.other.other': 'Other',
  'libitem.cat.regulations.building': 'Building regulations',
  'libitem.cat.components.process': 'Process components',
  'libitem.cat.plants.species': 'Plants',
  'libitem.cat.openings.doors': 'Doors',
  'libitem.cat.openings.windows': 'Windows',
  'libitem.cat.templates.specification': 'Document templates',
  'libitem.cat.types.walls': 'Wall types',
  'libitem.cat.types.floors': 'Floor types',
  'libitem.cat.types.roofs': 'Roof types',
  'libitem.cat.types.ceilings': 'Ceiling types',
  'libitem.cat.types.barriers': 'Barriers',
  'libitem.cat.kits.templates': 'Project templates',
  'libitem.cat.kits.quick': 'Quick Kits',
  'libitem.v.not_object': 'not a JSON object',
  'libitem.v.not_json': 'cannot be written as JSON',
  'libitem.v.too_large': 'larger than 8 MB',
  'libitem.v.number': 'must be a number',
  'libitem.v.range': 'out of range',
  'libitem.v.positive': 'must be greater than 0',
  'libitem.v.whole': 'must be a whole number',
  'libitem.v.text': 'must be text',
  'libitem.v.too_long': 'longer than {n} characters',
  'libitem.v.empty': 'is empty',
  'libitem.v.object': 'must be an object',
  'libitem.v.unknown_key': 'is not part of the format',
  'libitem.v.aci': 'ACI colour must be 0–256',
  'libitem.v.color': 'must be null, 0–256 or #rrggbb',
  'libitem.v.required': 'is required',
  'libitem.v.must_be': 'must be "{value}"',
  'libitem.v.must_be_1': 'must be 1',
  'libitem.v.uuid': 'must be a UUID',
  'libitem.v.one_of': 'must be one of {list}',
  'libitem.v.taxonomy': 'is not in the taxonomy',
  'libitem.v.ifc_class': 'must be an IFC class name',
  'libitem.v.ifc_required': 'is required: every item placed in a drawing or model names its IFC class (ifc.class, for example IfcFurniture; IfcAnnotation for a drawing-only symbol or detail), so other software reads it as what it is',
  'libitem.v.ifc_door': 'must be IfcDoor for a door',
  'libitem.v.license_required': 'is required: every item states the licence it is shared under (CC0, CC BY, CC BY-SA, the maker\'s own terms or team-only), so people know what they may do with it',
  'libitem.v.lod': 'must be one of {list} (a whole number)',
  'libitem.v.lod_required': 'is required: every item states its level of development (LOD 100, 200, 300, 350, 400 or 500; the number means the same in every library)',
  'libitem.v.class_list': 'must be a list of at most 12 codes: [{{"system": "uniclass", "code": "Pr_40_50_30"}}]',
  'libitem.v.class_twice': 'is listed twice: one code per system',
  'libitem.v.class_code': 'must be a classification code such as Pr_40_50_30 (letters, digits, dots, dashes, underscores; at most 40 characters), not a description',
  'libitem.v.class_required': 'is required: every item carries a classification code (for example Uniclass Pr_40_50_30), not just a name, so schedules and other software can group it',
  'libitem.v.type_kind': 'only an item of kind type has one',
  'libitem.v.type_required': 'is required for a type',
  'libitem.v.type_ifc_required': 'is required: a type names its IFC type class ({list})',
  'libitem.v.type_ifc_class': 'must be one of {list} for a type',
  'libitem.v.type_body': 'must be null for a type',
  'libitem.v.type_plan': 'must have no entities for a type',
  'libitem.v.type_extra': 'a type has no ports or variants',
  'libitem.v.type_lod_twice': 'differs from the item\'s own lod: state it once',
  'libitem.v.type_thickness_req': 'is required (mm)',
  'libitem.v.type_gt0': 'must be more than 0',
  'libitem.v.type_layers_req': 'is required (how many layers)',
  'libitem.v.type_pack_req': 'is required: a cadcraft-type-pack holding exactly this type and the materials its layers use',
  'libitem.v.type_pack_big': 'is larger than 1 MB',
  'libitem.v.type_pack_one': 'must hold exactly one type',
  'libitem.v.type_pack_list': 'must be a list',
  'libitem.v.type_pack_object': 'must be an object',
  'libitem.v.type_pack_same': 'must be the same as type.element',
  'libitem.v.type_layers_n': 'must be {n}, the number of layers in the pack',
  'libitem.v.type_thickness_sum': 'must be {n} mm, the sum of the pack\'s layers',
  'libitem.v.barrier_ifc': 'must be IfcRailingType for a barrier type',
  'libitem.v.barrier_cat': 'must be types/barriers for a barrier type',
  'libitem.v.barrier_ifc_only': 'is for barrier types only (type.element barrier)',
  'libitem.v.barrier_cat_only': 'holds barrier types only (type.element barrier)',
  'libitem.v.barrier_req': 'is required for a barrier type (its subtype, height and settings)',
  'libitem.v.barrier_height_req': 'is required (mm)',
  'libitem.v.barrier_predefined': 'must be {value} for a {sub} barrier type (IfcRailingTypeEnum, IFC4X3)',
  'libitem.v.kit_kind': 'only an item of kind kit has one',
  'libitem.v.kit_required': 'is required for a project template or Quick Kit',
  'libitem.v.kit_body': 'must be null for a kit',
  'libitem.v.kit_plan': 'must have no entities for a kit',
  'libitem.v.kit_extra': 'a kit has no ports or variants',
  'libitem.v.kit_app': 'must be an app name in lower case, like bimcraft',
  'libitem.v.kit_apps': 'must be a list of at most 8 app names',
  'libitem.v.kit_app_name': 'must be an app name in lower case',
  'libitem.v.kit_app_req': 'is required for a project template: the app that opens it',
  'libitem.v.kit_file_req': 'is required for a project template: the template as an IFC file',
  'libitem.v.kit_file_format': 'must be ifc-step: a project template is shared as an IFC file',
  'libitem.v.kit_file_data': 'must be the text of an IFC (STEP) file, starting ISO-10303-21;',
  'libitem.v.kit_file_big': 'is larger than 4 MB',
  'libitem.v.kit_members_tpl': 'a project template has no members: they belong to a Quick Kit',
  'libitem.v.kit_file_qk': 'a Quick Kit has no file: it names Library items in members',
  'libitem.v.kit_members_req': 'is required for a Quick Kit: the Library items it brings',
  'libitem.v.kit_members_list': 'must be a list of 1 to 200 Library items',
  'libitem.v.kit_member_uuid': 'must be the UUID of a Library item',
  'libitem.v.ifc_window': 'must be IfcWindow for a window',
  'libitem.v.enum': 'must be an enumeration value',
  'libitem.v.list': 'must be a list',
  'libitem.v.too_many_entities': 'more than {n} entities',
  'libitem.v.entity_type': 'unknown entity type',
  'libitem.v.boolean': 'must be true or false',
  'libitem.v.two_points': 'needs at least 2 points',
  'libitem.v.point': 'must be [x, y] or [x, y, bulge]',
  'libitem.v.one_loop': 'needs at least one loop',
  'libitem.v.loop': 'must be a flat list of at least 3 points',
  'libitem.v.bad_coord': 'has a bad coordinate',
  'libitem.v.solid_hatch': 'only solid hatches are part of format 1',
  'libitem.v.positions': 'must be a flat list of x, y, z',
  'libitem.v.bad_coord_at': 'has a bad coordinate at {i}',
  'libitem.v.triangles': 'must be a flat list of triangles',
  'libitem.v.too_many_triangles': 'more than {n} triangles',
  'libitem.v.index_range': 'index out of range at {i}',
  'libitem.v.body_type': 'must be box or mesh (or body null)',
  'libitem.v.attr_name': 'a name is longer than 255 characters',
  'libitem.v.license': 'is not an allowed license',
  'libitem.v.locale': 'is not a language tag (like es or es-MX)',
  'libitem.v.locales': 'has more than 40 languages',
  'libitem.v.label_key': 'is not a parameter key',
  'libitem.v.port_system': 'must be one of {list}',
  'libitem.v.port_direction': 'must be in, out or both',
  'libitem.v.port_shape': 'must be round, rect or oval',
  'libitem.v.port_axis': 'must be [x, y, z] with a length above 0',
  'libitem.v.port_nominal': 'must be 1–20 characters, like 2 or DN50',
  'libitem.v.too_many_items': 'has more than {n} entries',
  'libitem.v.duplicate': 'is used twice',
  'libitem.v.variant_id': 'must be 1–60 letters, digits, dots, dashes or underscores',
  'libitem.v.variant_columns': 'needs at least one column',
  'libitem.v.variant_rows': 'needs at least one variant',
  'libitem.v.variant_value': 'must be a number or text',
  'libitem.v.variant_cell_extra': 'has a value for "{key}", which is not a column',
  'libitem.v.variant_cell_missing': 'has no value for the column "{key}"',
  'libitem.v.variant_default': 'is not the id of a variant',
  'libitem.v.variants_material': 'a material has no variants',
  'libitem.v.regulation_kind': 'only an item of kind regulation has one',
  'libitem.v.regulation_pack': 'is not a building regulation pack (format cadcraft-regulation-pack, version 1, an id and a list of at most 200 rules)',
  'libitem.v.regulation_big': 'is larger than 256 KB',
  'libitem.v.regulation_body': 'must be null for a regulation pack',
  'libitem.v.regulation_plan': 'must have no entities for a regulation pack',
  'libitem.v.regulation_extra': 'a regulation pack has no ports or variants',
  'libitem.v.component_kind': 'only an item of kind component has one',
  'libitem.v.component_required': 'is required for a component',
  'libitem.v.component_body': 'must be null for a component',
  'libitem.v.component_plan': 'must have no entities for a component',
  'libitem.v.component_extra': 'a component has no ports or variants',
  'libitem.v.component_bad': 'a component record: {what}',
  'libitem.v.plant_kind': 'only an item of kind plant has one',
  'libitem.v.plant_required': 'is required for a plant',
  'libitem.v.plant_body': 'must be null for a plant',
  'libitem.v.plant_plan': 'must have no entities for a plant',
  'libitem.v.plant_extra': 'a plant has no ports or variants',
  'libitem.v.plant_bad': 'a plant record: {what}',
  'libitem.v.template_kind': 'only an item of kind template has one',
  'libitem.v.template_required': 'is required for a template',
  'libitem.v.template_body': 'must be null for a template',
  'libitem.v.template_plan': 'must have no entities for a template',
  'libitem.v.template_extra': 'a template has no ports or variants',
  'libitem.v.template_bad': 'a document template: {what}',
  'libitem.elec.direct': 'direct connection',
  'libitem.elec.plug': 'cord and plug',
  'libitem.elec.plug_nema': 'cord and plug {nema}',
  'libitem.csv.no_rows': 'The CSV has no data rows (the first row must be the column names).',
  'libitem.csv.no_name_column': 'The CSV needs a "name" column.',
  'libitem.csv.no_units': 'Row {row}: {column} has no units; give a units column or a "(in)"/"(mm)" header.',
  'libitem.csv.not_length': 'Row {row}: {column} "{value}" is not a length.',
  'libitem.csv.no_name': 'Row {row} has no name; skipped.',
  'libitem.csv.no_size': 'Row {row} ({name}) needs a width and a depth; skipped.',
  'libitem.csv.category_unknown': 'Row {row} ({name}): category "{category}" is not in the taxonomy; set to {set}.',
  'libitem.csv.category_missing': 'Row {row} ({name}): category not given; set to {set}.',
  'libitem.csv.no_height': 'Row {row} ({name}) has no height: a 2D symbol only.',
  'libitem.mesh.obj_units': 'OBJ files carry no units: read as millimeters. Choose the units if that is wrong.',
  'libitem.mesh.obj_up': 'Read with Y up (the usual OBJ convention). Choose Z up if the item lies on its back.',
  'libitem.mesh.stl_units': 'STL files carry no units: read as millimeters. Choose the units if that is wrong.',
  'libitem.mesh.stl_up': 'Read with Z up (the usual STL convention). Choose Y up if the item lies on its back.',
  'libitem.mesh.gltf_units': 'glTF is in meters by definition; read as {units} as asked.',
  'libitem.mesh.too_many': 'The mesh has {n} triangles; the limit is {limit}.',
  'libitem.mesh.flat': 'The mesh is flat or empty.',
  'libitem.mesh.moved': 'Moved so the middle of the back, at the bottom, is the insertion point.',
  'libitem.mesh.obj_faces_skipped': { one: '{n} face pointed at missing vertices and was left out.', other: '{n} faces pointed at missing vertices and were left out.' },
  'libitem.mesh.obj_none': 'No triangles found in the OBJ file.',
  'libitem.mesh.stl_unreadable': 'Not a readable STL file.',
  'libitem.mesh.stl_corner': 'The STL file has a corner that is not a number.',
  'libitem.mesh.stl_degenerate': { one: '{n} triangle with no area was left out.', other: '{n} triangles with no area were left out.' },
  'libitem.mesh.stl_none': 'No triangles found in the STL file.',
  'libitem.mesh.gltf_version': 'Only glTF 2.0 is supported.',
  'libitem.mesh.gltf_unreadable': 'Not a readable glTF file.',
  'libitem.mesh.gltf_extension': 'The file needs the {extension} extension, which is not supported.',
  'libitem.mesh.gltf_buffer': 'Buffer {n} is a separate file ({uri}); only embedded buffers are read. Use .glb.',
  'libitem.mesh.gltf_lines': { one: '{n} part is lines or points, not triangles, and was left out.', other: '{n} parts are lines or points, not triangles, and were left out.' },
  'libitem.mesh.gltf_none': 'No triangles found in the glTF file.',
  'libitem.category.suggested_name': 'Category {category} suggested from the name; check it.',
  'libitem.category.suggested_from': 'Category {category} suggested from "{from}"; check it.',
  'libitem.category.suggested_family': 'Category {category} suggested from the family; check it.',
  'libitem.category.set': 'Category set to {category}; choose one.',
  'libitem.units.unknown': 'Unknown units "{units}". Use one of {list}.',
  'libitem.units.assumed_mm': 'The drawing does not say what its units are; read as millimeters (its measurement setting is metric). Choose the units if that is wrong.',
  'libitem.units.assumed_in': 'The drawing does not say what its units are; read as inches (its measurement setting is imperial). Choose the units if that is wrong.',
  'libitem.block.empty': 'Block {name} draws nothing; skipped.',
  'libitem.block.not_in_drawing': 'No block named {name} in the drawing.',
  'libitem.block.missing': 'No block named {name}.',
  'libitem.block.skip.limit': 'over the entity limit',
  'libitem.block.skip.missing': 'INSERT (missing block)',
  'libitem.block.skip.xref': 'linked drawing',
  'libitem.block.skip.deep': 'INSERT (nested too deep)',
  'libitem.block.faces_body': { one: 'Body made from the block\'s {n} 3D face triangle.', other: 'Body made from the block\'s {n} 3D face triangles.' },
  'libitem.block.faces_over': 'The block\'s 3D faces are over the triangle limit; no body.',
  'libitem.block.box_body': 'Body is a box from the plan outline, {h} mm tall.',
  'libitem.block.no_height': 'No height in the block\'s data: a 2D symbol (no 3D body). A height can be given when placing.',
  'libitem.block.draws_nothing': 'The block draws nothing that the format keeps.',
  'libitem.block.not_converted': 'Not converted: {list}.',
  'libitem.block.from_tag': 'Item data comes from the item tag that names this block.',
  'libitem.rfa.no_family': 'This file has no family data (PartAtom); it may be a project, not a family.',
  'libitem.rfa.box': 'Geometry not read from this family; a box stands in.',
  'libitem.rfa.outline': 'Geometry not read from this family; no height parameter, so a 2D outline only.',
  'libitem.rfa.types': 'This family has {n} types: each is a variant of the item, with its own values and box.',
  'libitem.rfa.types_catalog': '{n} types read from the type catalog beside the family: each is a variant of the item.',
  'libitem.rfa.one_type': 'One type in this family ({name}): its values fill the item.',
  'libitem.rfa.types_cut': 'Only the first {n} types are kept.',
  'libitem.rfa.columns_cut': 'Only the first {n} parameters that differ between types are kept as columns.',
  'libitem.rfa.shape': 'Shape taken from {file}: the family file gave the data, that file the geometry.',
  'libitem.rfa.no_geometry': 'Geometry not read from this family, and it has no Width and Depth parameters: the item has no geometry (data only).',
  'libitem.w.must_be_text': 'must be text',
  'libitem.w.longer_than_500_characters': 'longer than 500 characters',
  'libitem.w.is_empty': 'is empty',
  'libitem.w.is_not_part_of_the': 'is not part of the format',
  'libitem.w.must_be_cadcraft_component': 'must be cadcraft-component',
  'libitem.w.must_be_1': 'must be 1',
  'libitem.w.must_be_a_lower_case': 'must be a lower-case id (a-z, 0-9, dots and dashes)',
  'libitem.w.must_be_one_of': 'must be one of {list}',
  'libitem.w.must_be_a_list': 'must be a list',
  'libitem.w.at_most_40_sources': 'at most 40 sources',
  'libitem.w.must_be_an_object': 'must be an object',
  'libitem.w.must_be_1_32_letters': 'must be 1–32 letters, digits, dots, dashes or underscores',
  'libitem.w.is_used_twice': 'is used twice',
  'libitem.w.must_be_an_https_link': 'must be an https link',
  'libitem.w.at_most_120_properties': 'at most 120 properties',
  'libitem.w.must_be_a_number_or': 'must be a number or text',
  'libitem.w.must_name_a_source_key': 'must name a source key of this record',
  'libitem.w.at_most_200_failure_rates': 'at most 200 failure rates',
  'libitem.w.must_be_a_number_0': 'must be a number, 0 or more',
  'libitem.w.must_be_user_or_community': 'must be user or community: failure rates are never supplied by the system',
  'libitem.w.needs_a_state_unchecked_draft': 'needs a state: unchecked, draft or reviewed',
  'libitem.w.is_required_when_reviewed': 'is required when reviewed',
  'libitem.w.must_be_cadcraft_doc_template': 'must be cadcraft-doc-template',
  'libitem.w.must_be_a_lower_case2': 'must be a lower-case key (a-z, 0-9, dashes)',
  'libitem.w.must_be_text_of_1': 'must be text of 1 to 120 characters',
  'libitem.w.is_longer_than_bytes': 'is longer than {n} bytes',
  'libitem.w.holds_markup_that_a_document': 'holds markup that a document cannot carry',
  'libitem.w.at_most_40_tag_definitions': 'at most 40 tag definitions',
  'libitem.w.must_be_text_of_12': 'must be text of 1 to 80 characters',
  'libitem.w.must_be_a_list_of': 'must be a list of at most 60',
  'libitem.w.has_a_value_that_is': 'has a value that is not short text or a number',
  'libitem.w.must_be_cadcraft_plant': 'must be cadcraft-plant',
  'libitem.w.at_most_40_languages': 'at most 40 languages',
  'libitem.w.is_not_a_language_tag': 'is not a language tag (like es or es-MX)',
  'libitem.w.has_a_value_that_is2': 'has a value that is not one of {list}',
  'libitem.w.must_be_a_number_above': 'must be a number above 0 and at most {max}',
  'libitem.w.needs_whole_usda_zones_1': 'needs whole USDA zones 1 to 13, min not above max',
  'libitem.w.must_be_a_number_from': 'must be a number from 0 (seed or turf) to 50',
  'libitem.w.must_be_empty_or_one': 'must be empty or one of {list}',
};
/* i18n-ignore-end */

const FILL_RE_ = /\{\{|\}\}|\{([A-Za-z_][A-Za-z0-9_]*)\}/g;
/** The text for key (libitem.*) with its fills: the page's language through globalThis.ccI18n (i18n.js) when it has the key,
 * else the English in MESSAGES — so Node and the site's converter read that English (docs/LANG.md § Shared libraries). */
function msg(key, fills = {}) {
  const i18n = globalThis.ccI18n;
  if (i18n && typeof i18n.has === 'function' && i18n.has(key)) return i18n.t(key, fills);
  let s = MESSAGES[key];
  if (s === undefined) return key;
  if (typeof s === 'object') s = s['=' + fills.n] ?? (Number(fills.n) === 1 ? s.one : s.other) ?? s.other;
  return s.replace(FILL_RE_, (m, k) => (m === '{{' ? '{' : m === '}}' ? '}' : fills[k] !== undefined && fills[k] !== null ? String(fills[k]) : m));
}

/** Kept in step with core/classes/LibraryCatalog.php (CATEGORIES, KINDS, LICENSES, limits). Labels in the page's language. */
export const CATEGORIES = {};
for (const k of [
  'foodservice/cooking', 'foodservice/refrigeration', 'foodservice/sinks', 'foodservice/worktables', 'foodservice/shelving',
  'foodservice/warewashing', 'foodservice/ventilation', 'foodservice/prep', 'foodservice/holding', 'foodservice/beverage',
  'foodservice/ice', 'foodservice/serving', 'foodservice/other', 'furniture/seating', 'furniture/tables',
  'furniture/desks', 'furniture/storage', 'furniture/beds', 'furniture/other', 'casework/base', 'casework/wall',
  'casework/tall', 'openings/doors', 'openings/windows', 'plumbing/fixtures', 'plumbing/equipment', 'electrical/fixtures', 'electrical/equipment',
  'mechanical/equipment', 'mechanical/parts', 'structural/steel', 'appliances/residential', 'site/landscape', 'site/vehicles', 'people/entourage',
  'medical/patientcare', 'medical/surgical', 'medical/imaging', 'medical/laboratory', 'medical/support', 'construction/equipment', 'construction/temporary', 'construction/formwork', 'construction/tools', 'earthmoving/excavators', 'earthmoving/loaders', 'earthmoving/haulage', 'earthmoving/compaction', 'earthmoving/attachments', 'mining/surface', 'mining/underground', 'mining/processing', 'mining/support', 'aviation/aircraft', 'aviation/groundsupport', 'aviation/airfield', 'aviation/hangar', 'aviation/rescue',
  'printing/printers', 'printing/parts', 'printing/fixtures', 'printing/calibration', 'aerospace/launch', 'aerospace/spacecraft', 'aerospace/structures', 'aerospace/ground', 'agriculture/machinery', 'agriculture/buildings', 'agriculture/livestock', 'agriculture/irrigation', 'architecture/envelope', 'architecture/circulation', 'architecture/details', 'architecture/massing', 'automotive/vehicles', 'automotive/components', 'automotive/workshop', 'automotive/charging', 'computer/desktop', 'computer/peripherals', 'computer/servers', 'computer/network', 'educational/classroom', 'educational/laboratory', 'educational/models', 'educational/playground', 'energy/generation', 'energy/renewable', 'energy/distribution', 'energy/oilgas', 'fixtures/lighting', 'fixtures/bath', 'fixtures/hardware', 'fixtures/fittings', 'hobby/craft', 'hobby/models', 'hobby/collecting', 'hobby/outdoor', 'household/kitchenware', 'household/cleaning', 'household/storage', 'household/decor', 'industrial/products', 'industrial/handheld', 'industrial/packaging', 'industrial/enclosures', 'interior/lighting', 'interior/soft', 'interior/accessories', 'interior/finishes', 'jewellery/rings', 'jewellery/necklaces', 'jewellery/earrings', 'jewellery/settings', 'fun/characters', 'fun/novelty', 'fun/puzzles', 'fun/fantasy', 'machine/fasteners', 'machine/transmission', 'machine/frames', 'machine/mechanisms', 'marine/boats', 'marine/deck', 'marine/harbour', 'marine/offshore', 'military/vehicles', 'military/shelters', 'military/field', 'military/support', 'nature/rocks', 'nature/trees', 'nature/water', 'nature/wildlife', 'piping/fittings', 'piping/valves', 'piping/supports', 'piping/spools', 'robotics/arms', 'robotics/mobile', 'robotics/parts', 'robotics/cells', 'speedrun/setups', 'speedrun/gear', 'speedrun/tracks', 'speedrun/trophies', 'sport/courts', 'sport/equipment', 'sport/fitness', 'sport/venues', 'tech/gadgets', 'tech/audio', 'tech/iot', 'tech/wearables', 'tools/hand', 'tools/power', 'tools/machine', 'tools/storage', 'toys/blocks', 'toys/vehicles', 'toys/dolls', 'toys/games',
  'symbols/annotation', 'symbols/electrical', 'symbols/plumbing', 'details/generic', 'other/other',
  // 0.7 MT.3 (session `materials`): surface materials (kind material: a node graph + map pictures, no geometry)
  'materials/brick', 'materials/wood', 'materials/stone', 'materials/tile', 'materials/concrete', 'materials/plaster', 'materials/metal',
  'materials/roofing', 'materials/fabric', 'materials/ground', 'materials/other',
  // 0.8 REG.1a: building regulation packs (kind regulation: a pack of numbers and clause numbers by jurisdiction, no geometry)
  'regulations/building',
  // 0.8 IND.7: process components (kind component: a record with its sources, cited properties, failure rates and review state)
  'components/process',
  // 0.8 LD.1: plants (kind plant: one species with its sizes, growth, light, water, soil, zone and source)
  'plants/species',
  // 0.8 SU.889: per-trade document templates (kind template: Markdown with fields, filled from the open IFC)
  'templates/specification',
  // 2026-11-11 BK.21 / BK.98: Types (kind type) and Quick Kits / project templates (kind kit)
  'types/walls', 'types/floors', 'types/roofs', 'types/ceilings', 'kits/templates', 'kits/quick',
  // 0.11 su-finish-11 barriers (owner 2026-11-21): guards, handrails, balustrades, fences and road guardrails as one Type category
  'types/barriers',
]) {
  Object.defineProperty(CATEGORIES, k, { enumerable: true, get: () => msg('libitem.cat.' + k.replace('/', '.')) });
}
export const KINDS = ['equipment', 'furniture', 'fixture', 'door', 'window', 'symbol', 'detail', 'material', 'regulation', 'component', 'plant', 'template', 'type', 'kit'];
/**
 * BK.21: the three kinds of Library item people see, a class over the item kinds: Symbols (drawing conventions, 2D), Types (what an element is made
 * of: layers, LOD), Assets (physical objects, plan view plus 3D). A kind in no class (material, regulation, template, kit) is data. The PHP twin is
 * LibraryCatalog::ITEM_CLASSES / KIND_CLASS. Both apps' pickers read this, so the names live in one place.
 */
export const ITEM_CLASSES = ['symbol', 'type', 'asset'];
export const KIND_CLASS = { symbol: 'symbol', detail: 'symbol', type: 'type', door: 'asset', window: 'asset', furniture: 'asset', fixture: 'asset', equipment: 'asset', component: 'asset', plant: 'asset', family: 'asset' };
export const classOfKind = (kind) => KIND_CLASS[kind] || '';
export const kindsOfClass = (cls) => Object.keys(KIND_CLASS).filter((k) => KIND_CLASS[k] === cls);
/** BK.18: the LOD scale (walls/lod.js LOD_SCALE), classification systems, and which kinds must state a LOD or carry a code (the content rules). */
export const LOD_SCALE = [100, 200, 300, 350, 400, 500];
export const CLASSIFICATION_SYSTEMS = ['uniclass', 'omniclass', 'uniformat'];
export const LOD_KINDS = ['equipment', 'furniture', 'fixture', 'door', 'window', 'type'];
export const CLASSIFIED_KINDS = ['equipment', 'furniture', 'fixture', 'door', 'window', 'symbol', 'detail', 'plant', 'type'];
export const TYPE_ELEMENTS = ['wall', 'floor', 'roof', 'ceiling', 'barrier'];
export const TYPE_IFC_CLASSES = ['IfcWallType', 'IfcSlabType', 'IfcRoofType', 'IfcCoveringType', 'IfcRailingType'];
/**
 * 0.11 su-finish-11 barriers: a Barriers type (element barrier + category types/barriers + IfcRailingType, only together) has no layers:
 * item.type = { element: 'barrier', lod?, barrier: { subtype, height (mm), …the settings BARRIER_FIELDS lists for it } }; ifc.predefined is the
 * sub-type's IfcRailingTypeEnum value (IFC4X3_ADD2). Twin of LibraryCatalog::BARRIER_* (bin/test-library-barriers.php compares them).
 */
export const BARRIER_CATEGORY = 'types/barriers';
export const BARRIER_IFC_CLASS = 'IfcRailingType';
export const BARRIER_SUBTYPES = { guard: 'GUARDRAIL', handrail: 'HANDRAIL', balustrade: 'BALUSTRADE', fence: 'FENCE', guardrail: 'GUARDRAIL' };
const INFILL_ = ['balusters', 'panel', 'cable', 'mesh', 'rails'];
export const BARRIER_FIELDS = {
  fence: { style: ['panel', 'rails', 'pickets'], terrain: ['raked', 'stepped'], postSize: 'mm', postSpacing: 'mm', rails: 'int', railSize: 'mm', picketW: 'mm', picketGap: 'mm', panelThk: 'mm', gap: 'mm', maxGap: 'mm', embed: 'mm' },
  guard: { infill: INFILL_, postSize: 'mm', postSpacing: 'mm', railSize: 'mm', infillSize: 'mm', infillGap: 'mm' },
  balustrade: { infill: INFILL_, postSize: 'mm', postSpacing: 'mm', railSize: 'mm', infillSize: 'mm', infillGap: 'mm' },
  handrail: { profile: ['round', 'rect'], railSize: 'mm', wallGap: 'mm', bracketSpacing: 'mm' },
  guardrail: { beam: ['w-beam', 'thrie-beam', 'box-beam', 'cable'], postSize: 'mm', postSpacing: 'mm', beamDepth: 'mm' },
};
export const KIT_TYPES = ['project-template', 'quick-kit'];
export const MAX_KIT_BYTES = 4194304;
const CLASS_CODE_RE = /^[A-Za-z0-9][A-Za-z0-9 ._:\/-]{0,39}$/;
const APP_RE = /^[a-z][a-z0-9-]{1,30}$/;
/**
 * BK.96: the kinds that are placed in a drawing or model. Each must name its IFC class (`ifc.class`), whatever library it came from; a door is an
 * IfcDoor and a window an IfcWindow. A drawing-only symbol or detail that stands for no physical thing uses IfcAnnotation. The other kinds
 * (material, regulation, component, template) are records, not elements, and need no class. LibraryCatalog::ELEMENT_KINDS is the PHP twin.
 */
export const ELEMENT_KINDS = ['equipment', 'furniture', 'fixture', 'door', 'window', 'symbol', 'detail', 'plant'];
/** 0.8 IND.7: a component record's vocabulary. LibraryCatalog.php has the same lists. */
export const COMPONENT = {
  classes: ['substance', 'equipment', 'instrument', 'other'],
  sourceKinds: ['textbook', 'standard', 'government-table', 'paper', 'manufacturer', 'user', 'community'],
  rateUnits: ['per_hour', 'per_demand', 'per_year'],
  suppliedBy: ['user', 'community'],
  reviewStates: ['unchecked', 'draft', 'reviewed'],
};
/** 0.7 MT.3: a material item's map names (ModelCraft's shading/texset.js roles) and picture types; LibraryCatalog.php has the same. */
export const MATERIAL_MAPS = ['color', 'roughness', 'gloss', 'metalness', 'normal', 'height', 'ao', 'opacity', 'emission'];
export const MATERIAL_MEDIA = ['image/png', 'image/jpeg', 'image/webp'];
/** 0.7 W3.19: a connection point of an item (ports) and the variants of one item (variants). Kept in step with LibraryItemFormat.php.
 * Port systems are BimCraft's pipe and duct systems (mep-model.js PIPE_SYSTEMS, DUCT_SYSTEMS) plus 'other'. */
export const PORT_SYSTEMS = ['cw', 'hw', 'hwr', 'san', 'vent', 'storm', 'chw', 'hhw', 'gas', 'fire', 'supply', 'return', 'exhaust', 'outside', 'other'];
/** Flow direction at the port: into the item, out of it, or either way. */
export const PORT_DIRECTIONS = ['in', 'out', 'both'];
export const PORT_SHAPES = ['round', 'rect', 'oval'];
export const VARIANT_LIMITS = { rows: 200, columns: 24, ports: 32 };
const VARIANT_ID_RE = /^[A-Za-z0-9_.-]{1,60}$/;
export const LICENSES = ['CC0-1.0', 'CC-BY-4.0', 'CC-BY-3.0', 'CC-BY-SA-4.0', 'MAKER-TERMS', 'TEAM-ONLY', 'PRIVATE'];   // PRIVATE (PO.1): a private object in My objects; the server sets it, nobody chooses it
export const LIMITS = { bytes: 8 * 1024 * 1024, triangles: 200000, entities: 50000, text: 500, coord: 1e7 };
/** Length units → mm. */
export const UNIT_MM = { mm: 1, cm: 10, dm: 100, m: 1000, km: 1e6, in: 25.4, ft: 304.8, yd: 914.4, mi: 1609344, mil: 0.0254, um: 0.001 };
/** DWG INSUNITS → UNIT_MM key ('' = unitless). */
const INSUNITS = { 0: '', 1: 'in', 2: 'ft', 3: 'mi', 4: 'mm', 5: 'cm', 6: 'm', 7: 'km', 9: 'mil', 10: 'yd', 13: 'um', 14: 'dm' };

const ELEC_KEYS = ['volts', 'phase', 'amps', 'kw', 'hp', 'hz', 'plug', 'nema', 'direct'];
const PLUMB_KEYS = ['cw', 'hw', 'dd', 'id', 'gas'];

// ---------------------------------------------------------------------------
// Validation

const ENTITY_KEYS = {
  line: ['x1', 'y1', 'x2', 'y2'], circle: ['x', 'y', 'r'], arc: ['x', 'y', 'r', 'a0', 'a1'], poly: ['pts', 'closed'],
  ellipse: ['cx', 'cy', 'mx', 'my', 'ratio', 't0', 't1'], text: ['x', 'y', 'h', 'rot', 'value'], point: ['x', 'y'], hatch: ['loops', 'solid'],
};
const TOP_KEYS = ['format', 'format_version', 'uuid', 'version', 'name', 'kind', 'category', 'description', 'maker', 'model', 'ifc', 'lod', 'classification',
  'plan', 'body', 'clearances', 'params', 'material', 'regulation', 'component', 'plant', 'template', 'type', 'kit', 'source_attrs', 'license', 'provenance', 'i18n', 'ports', 'variants'];

/**
 * 0.8 IND.7: the shape of a component record (format cadcraft-component, version 1). Mirrors LibraryItemFormat::component: every
 * property and failure rate cites a source row of the record; failure rates come only from a user or the community.
 */
function checkComponent(c, err) {
  const bad = (p, what) => err(p, msg('libitem.v.component_bad', { what }));
  const text = (p, v, required = false) => {
    if (typeof v !== 'string') return bad(p, msg('libitem.w.must_be_text'));
    if ([...v].length > 500) return bad(p, msg('libitem.w.longer_than_500_characters'));
    if (required && v.trim() === '') bad(p, msg('libitem.w.is_empty'));
  };
  const plain = (v) => v && typeof v === 'object' && !Array.isArray(v);
  const allowed = (p, o, names) => { for (const k of Object.keys(o)) if (!names.includes(k)) bad(p + '.' + k, msg('libitem.w.is_not_part_of_the')); };
  allowed('component', c, ['format', 'version', 'id', 'class', 'formula', 'sources', 'properties', 'failure_data', 'review']);
  if (c.format !== 'cadcraft-component') bad('component.format', msg('libitem.w.must_be_cadcraft_component'));
  if (c.version !== 1) bad('component.version', msg('libitem.w.must_be_1'));
  if (typeof c.id !== 'string' || !/^[a-z0-9][a-z0-9.-]{1,63}$/.test(c.id)) bad('component.id', msg('libitem.w.must_be_a_lower_case'));
  if (!COMPONENT.classes.includes(c.class)) bad('component.class', msg('libitem.w.must_be_one_of', { list: COMPONENT.classes.join(', ') }));
  if ('formula' in c) text('component.formula', c.formula);
  const keys = new Set();
  if (!Array.isArray(c.sources)) bad('component.sources', msg('libitem.w.must_be_a_list'));
  else if (c.sources.length > 40) bad('component.sources', msg('libitem.w.at_most_40_sources'));
  else c.sources.forEach((s, i) => {
    // i18n-ignore: a path in the record, not a sentence (words-11)
    const p = `component.sources[${i}]`;
    if (!plain(s)) return bad(p, msg('libitem.w.must_be_an_object'));
    allowed(p, s, ['key', 'kind', 'title', 'url', 'date', 'note']);
    if (typeof s.key !== 'string' || !/^[A-Za-z0-9._-]{1,32}$/.test(s.key)) bad(p + '.key', msg('libitem.w.must_be_1_32_letters'));
    else if (keys.has(s.key)) bad(p + '.key', msg('libitem.w.is_used_twice'));
    else keys.add(s.key);
    if (!COMPONENT.sourceKinds.includes(s.kind)) bad(p + '.kind', msg('libitem.w.must_be_one_of', { list: COMPONENT.sourceKinds.join(', ') }));
    text(p + '.title', s.title, true);
    if ('url' in s && !(typeof s.url === 'string' && /^https:\/\//.test(s.url))) bad(p + '.url', msg('libitem.w.must_be_an_https_link'));
    for (const k of ['date', 'note']) if (k in s) text(`${p}.${k}`, s[k]);
  });
  if (!Array.isArray(c.properties)) bad('component.properties', msg('libitem.w.must_be_a_list'));
  else if (c.properties.length > 120) bad('component.properties', msg('libitem.w.at_most_120_properties'));
  else c.properties.forEach((pr, i) => {
    // i18n-ignore: a path in the record, not a sentence (words-11)
    const p = `component.properties[${i}]`;
    if (!plain(pr)) return bad(p, msg('libitem.w.must_be_an_object'));
    allowed(p, pr, ['key', 'value', 'unit', 'src', 'table']);
    text(p + '.key', pr.key, true);
    if (!(typeof pr.value === 'string' || (typeof pr.value === 'number' && Number.isFinite(pr.value)))) bad(p + '.value', msg('libitem.w.must_be_a_number_or'));
    if ('unit' in pr) text(p + '.unit', pr.unit);
    if (!keys.has(pr.src)) bad(p + '.src', msg('libitem.w.must_name_a_source_key'));
    if ('table' in pr) text(p + '.table', pr.table);
  });
  const fd = c.failure_data ?? [];
  if (!Array.isArray(fd)) bad('component.failure_data', msg('libitem.w.must_be_a_list'));
  else if (fd.length > 200) bad('component.failure_data', msg('libitem.w.at_most_200_failure_rates'));
  else fd.forEach((f, i) => {
    // i18n-ignore: a path in the record, not a sentence (words-11)
    const p = `component.failure_data[${i}]`;
    if (!plain(f)) return bad(p, msg('libitem.w.must_be_an_object'));
    allowed(p, f, ['mode', 'rate', 'unit', 'basis', 'source', 'supplied_by']);
    text(p + '.mode', f.mode, true);
    if (typeof f.rate !== 'number' || !Number.isFinite(f.rate) || f.rate < 0) bad(p + '.rate', msg('libitem.w.must_be_a_number_0'));
    if (!COMPONENT.rateUnits.includes(f.unit)) bad(p + '.unit', msg('libitem.w.must_be_one_of', { list: COMPONENT.rateUnits.join(', ') }));
    if ('basis' in f) text(p + '.basis', f.basis);
    if (!keys.has(f.source)) bad(p + '.source', msg('libitem.w.must_name_a_source_key'));
    if (!COMPONENT.suppliedBy.includes(f.supplied_by)) bad(p + '.supplied_by', msg('libitem.w.must_be_user_or_community'));
  });
  const r = c.review;
  if (!plain(r) || !COMPONENT.reviewStates.includes(r.state)) bad('component.review', msg('libitem.w.needs_a_state_unchecked_draft'));
  else {
    allowed('component.review', r, ['state', 'note', 'checked_by']);
    if (r.state === 'reviewed' && String(r.checked_by ?? '').trim() === '') bad('component.review.checked_by', msg('libitem.w.is_required_when_reviewed'));
    if ('note' in r) text('component.review.note', r.note);
  }
}

/** 0.8 SU.889: the shape of a document template (format cadcraft-doc-template, version 1). Mirrors LibraryItemFormat::template. */
export const TEMPLATE = { tagKinds: ['text', 'integer', 'number', 'length', 'angle', 'yesno'], maxText: 65536 };
function checkTemplate(c, err) {
  const bad = (p, what) => err(p, msg('libitem.v.template_bad', { what }));
  const plain = (v) => v && typeof v === 'object' && !Array.isArray(v);
  for (const k of Object.keys(c)) if (!['format', 'version', 'key', 'trade', 'title', 'tags', 'text'].includes(k)) bad('template.' + k, msg('libitem.w.is_not_part_of_the'));
  if (c.format !== 'cadcraft-doc-template') bad('template.format', msg('libitem.w.must_be_cadcraft_doc_template'));
  if (c.version !== 1) bad('template.version', msg('libitem.w.must_be_1'));
  if (typeof c.key !== 'string' || !/^[a-z0-9][a-z0-9-]{1,63}$/.test(c.key)) bad('template.key', msg('libitem.w.must_be_a_lower_case2'));
  for (const f of ['trade', 'title']) if (typeof c[f] !== 'string' || c[f].trim() === '' || [...c[f]].length > 120) bad('template.' + f, msg('libitem.w.must_be_text_of_1'));
  if (typeof c.text !== 'string' || c.text.trim() === '') bad('template.text', msg('libitem.w.is_empty'));
  else if (new TextEncoder().encode(c.text).length > TEMPLATE.maxText) bad('template.text', msg('libitem.w.is_longer_than_bytes', { n: TEMPLATE.maxText }));
  else if (/<\s*(script|iframe|object|embed)/i.test(c.text)) bad('template.text', msg('libitem.w.holds_markup_that_a_document'));
  if (!Array.isArray(c.tags)) { bad('template.tags', msg('libitem.w.must_be_a_list')); return; }
  if (c.tags.length > 40) bad('template.tags', msg('libitem.w.at_most_40_tag_definitions'));
  c.tags.forEach((d, i) => {
    const p = 'template.tags.' + i;
    if (!plain(d)) { bad(p, msg('libitem.w.must_be_an_object')); return; }
    for (const k of Object.keys(d)) if (!['name', 'kind', 'values', 'classes', 'note'].includes(k)) bad(p + '.' + k, msg('libitem.w.is_not_part_of_the'));
    if (typeof d.name !== 'string' || d.name.trim() === '' || [...d.name].length > 80) bad(p + '.name', msg('libitem.w.must_be_text_of_12'));
    if (!TEMPLATE.tagKinds.includes(d.kind)) bad(p + '.kind', msg('libitem.w.must_be_one_of', { list: TEMPLATE.tagKinds.join(', ') }));
    for (const f of ['values', 'classes']) {
      if (!(f in d)) continue;
      if (!Array.isArray(d[f]) || d[f].length > 60) { bad(p + '.' + f, msg('libitem.w.must_be_a_list_of')); continue; }
      if (d[f].some((x) => !(typeof x === 'string' || typeof x === 'number') || String(x).length > 80)) bad(p + '.' + f, msg('libitem.w.has_a_value_that_is'));
    }
    if ('note' in d && typeof d.note !== 'string') bad(p + '.note', msg('libitem.w.must_be_text'));
  });
}
/** 0.8 LD.1: the shape of a plant record (format cadcraft-plant, version 1). Mirrors LibraryItemFormat::plant. Lengths in metres. */
export const PLANT = {
  types: ['tree', 'shrub', 'hedge', 'grass', 'perennial', 'groundcover', 'climber'],
  forms: ['broadleaf', 'conifer', 'columnar', 'palm', 'weeping', 'multistem', 'rounded', 'upright', 'spreading', 'mounded', 'clumping', 'turf', 'mat', 'vine', 'fern', 'succulent'],
  foliage: ['evergreen', 'deciduous', 'semi'], growth: ['slow', 'medium', 'fast'], light: ['sun', 'part', 'shade'], water: ['low', 'medium', 'high'],
  soils: ['any', 'well-drained', 'moist', 'wet', 'dry', 'sandy', 'loam', 'clay', 'chalk', 'acid', 'neutral', 'alkaline', 'saline'],
  regions: ['temperate', 'mediterranean', 'subtropical', 'coastal'],
  symbols: ['canopy', 'canopy-scallop', 'conifer', 'palm', 'shrub', 'grass', 'groundcover', 'climber', 'hedge'],
};
function checkPlant(c, err) {
  const bad = (p, what) => err(p, msg('libitem.v.plant_bad', { what }));
  const plain = (v) => v && typeof v === 'object' && !Array.isArray(v);
  const text = (p, v, required = false) => {
    if (typeof v !== 'string') return bad(p, msg('libitem.w.must_be_text'));
    if ([...v].length > 500) return bad(p, msg('libitem.w.longer_than_500_characters'));
    if (required && v.trim() === '') bad(p, msg('libitem.w.is_empty'));
  };
  const names = ['format', 'version', 'key', 'botanical', 'names', 'type', 'form', 'foliage', 'size', 'growth', 'light', 'water', 'soil', 'zone', 'spacing', 'container', 'region', 'notes', 'symbol', 'model', 'source'];
  for (const k of Object.keys(c)) if (!names.includes(k)) bad('plant.' + k, msg('libitem.w.is_not_part_of_the'));
  if (c.format !== 'cadcraft-plant') bad('plant.format', msg('libitem.w.must_be_cadcraft_plant'));
  if (c.version !== 1) bad('plant.version', msg('libitem.w.must_be_1'));
  if (typeof c.key !== 'string' || !/^[a-z0-9][a-z0-9-]{1,63}$/.test(c.key)) bad('plant.key', msg('libitem.w.must_be_a_lower_case2'));
  text('plant.botanical', c.botanical, true);
  if (!plain(c.names)) bad('plant.names', msg('libitem.w.must_be_an_object'));
  else {
    if (Object.keys(c.names).length > 40) bad('plant.names', msg('libitem.w.at_most_40_languages'));
    for (const [l, n] of Object.entries(c.names)) {
      if (!/^[a-z]{2,3}(-[A-Z][a-z]{3})?(-([A-Z]{2}|[0-9]{3}))?$/.test(l)) bad('plant.names', msg('libitem.w.is_not_a_language_tag'));
      else text('plant.names.' + l, n);
    }
  }
  const one = (f, allowed) => { if (!allowed.includes(c[f])) bad('plant.' + f, msg('libitem.w.must_be_one_of', { list: allowed.join(', ') })); };
  one('type', PLANT.types); one('form', PLANT.forms); one('foliage', PLANT.foliage); one('growth', PLANT.growth); one('water', PLANT.water);
  for (const [f, allowed] of [['light', PLANT.light], ['soil', PLANT.soils], ['region', PLANT.regions]]) {
    if (!Array.isArray(c[f])) { bad('plant.' + f, msg('libitem.w.must_be_a_list')); continue; }
    if (c[f].some((x) => !allowed.includes(x))) bad('plant.' + f, msg('libitem.w.has_a_value_that_is2', { list: allowed.join(', ') }));
  }
  const len = (p, v, max) => { if (typeof v !== 'number' || !(v > 0) || v > max) bad(p, msg('libitem.w.must_be_a_number_above', { max })); };
  if (!plain(c.size)) bad('plant.size', msg('libitem.w.must_be_an_object'));
  else {
    for (const k of Object.keys(c.size)) if (!['plant', 'mature'].includes(k)) bad('plant.size.' + k, msg('libitem.w.is_not_part_of_the'));
    if (!plain(c.size.mature)) bad('plant.size.mature', msg('libitem.w.must_be_an_object'));
    else { len('plant.size.mature.h', c.size.mature.h, 150); len('plant.size.mature.s', c.size.mature.s, 60); }
    if (c.size.plant != null) {
      if (!plain(c.size.plant)) bad('plant.size.plant', msg('libitem.w.must_be_an_object'));
      else { len('plant.size.plant.h', c.size.plant.h, 150); len('plant.size.plant.s', c.size.plant.s, 60); }
    }
  }
  if (c.zone != null) {
    if (!plain(c.zone)) bad('plant.zone', msg('libitem.w.must_be_an_object'));
    else if (!Number.isInteger(c.zone.min) || !Number.isInteger(c.zone.max) || c.zone.min < 1 || c.zone.max > 13 || c.zone.min > c.zone.max) bad('plant.zone', msg('libitem.w.needs_whole_usda_zones_1'));
  }
  if (c.spacing != null && (typeof c.spacing !== 'number' || !(c.spacing >= 0) || c.spacing > 50)) bad('plant.spacing', msg('libitem.w.must_be_a_number_from'));
  for (const f of ['container', 'notes', 'model', 'source']) if (f in c) text('plant.' + f, c[f]);
  if ('symbol' in c && c.symbol !== '' && !PLANT.symbols.includes(c.symbol)) bad('plant.symbol', msg('libitem.w.must_be_empty_or_one', { list: PLANT.symbols.join(', ') }));
}

/** 0.11 su-finish-11 barriers: item.type.barrier = { subtype, height (mm > 0), + BARRIER_FIELDS[subtype] }. Twin of LibraryItemFormat::barrierBlock. */
function checkBarrier(t, item, { err, num, keys, obj_ }) {
  if (!('barrier' in t)) { err('type.barrier', msg('libitem.v.barrier_req')); return; }
  if (!obj_('type.barrier', t.barrier)) return;
  const b = t.barrier, sub = b.subtype;
  if (typeof sub !== 'string' || !Object.prototype.hasOwnProperty.call(BARRIER_SUBTYPES, sub)) { err('type.barrier.subtype', msg('libitem.v.one_of', { list: Object.keys(BARRIER_SUBTYPES).join(', ') })); return; }
  const fields = BARRIER_FIELDS[sub];
  keys('type.barrier', b, ['subtype', 'height', ...Object.keys(fields)]);
  if (!('height' in b)) err('type.barrier.height', msg('libitem.v.barrier_height_req')); else num('type.barrier.height', b.height, { min: 0, max: 10000, positive: true });
  for (const [k, kind] of Object.entries(fields)) {
    if (!(k in b)) continue;
    const p = 'type.barrier.' + k;
    if (Array.isArray(kind)) { if (!kind.includes(b[k])) err(p, msg('libitem.v.one_of', { list: kind.join(', ') })); } else if (kind === 'int') num(p, b[k], { min: 1, max: 8, int: true }); else num(p, b[k], { min: 0, max: 10000 });
  }
  const want = BARRIER_SUBTYPES[sub], pre = item.ifc && typeof item.ifc === 'object' && !Array.isArray(item.ifc) ? item.ifc.predefined : undefined;
  if (pre !== want) err('ifc.predefined', msg('libitem.v.barrier_predefined', { value: want, sub }));
}

/** BK.21: item.type = { element, lod?, thickness (mm, the layers' sum), layers (how many), pack (a cadcraft-type-pack holding exactly this type) }. Twin of LibraryItemFormat::typeBlock. */
function checkTypeBlock(t, item, { err, num, keys, obj_ }) {
  const isNum = (v) => typeof v === 'number' && Number.isFinite(v);
  const isBarrier = t.element === 'barrier';   // 0.11 su-finish-11 barriers: no layers, its own block
  keys('type', t, isBarrier ? ['element', 'lod', 'barrier'] : ['element', 'lod', 'thickness', 'layers', 'pack']);
  if (!TYPE_ELEMENTS.includes(t.element)) err('type.element', msg('libitem.v.one_of', { list: TYPE_ELEMENTS.join(', ') }));
  if ('lod' in t && !LOD_SCALE.includes(t.lod)) err('type.lod', msg('libitem.v.lod', { list: LOD_SCALE.join(', ') }));
  if ('lod' in t && 'lod' in item && t.lod !== item.lod) err('type.lod', msg('libitem.v.type_lod_twice'));
  if (isBarrier) { checkBarrier(t, item, { err, num, keys, obj_ }); return; }
  if (!('thickness' in t)) err('type.thickness', msg('libitem.v.type_thickness_req')); else num('type.thickness', t.thickness, { min: 0, max: 20000 });
  if (isNum(t.thickness) && !(t.thickness > 0)) err('type.thickness', msg('libitem.v.type_gt0'));
  if (!('layers' in t)) err('type.layers', msg('libitem.v.type_layers_req')); else num('type.layers', t.layers, { min: 1, max: 60, int: true });
  if (!('pack' in t)) { err('type.pack', msg('libitem.v.type_pack_req')); return; }
  const pk = t.pack;
  if (!pk || typeof pk !== 'object' || Array.isArray(pk)) { err('type.pack', msg('libitem.v.object')); return; }
  if (JSON.stringify(pk).length > 1048576) { err('type.pack', msg('libitem.v.type_pack_big')); return; }
  if (pk.format !== 'cadcraft-type-pack') err('type.pack.format', msg('libitem.v.must_be', { value: 'cadcraft-type-pack' }));
  if (pk.version !== 1) err('type.pack.version', msg('libitem.v.must_be_1'));
  if (!Array.isArray(pk.types) || pk.types.length !== 1) { err('type.pack.types', msg('libitem.v.type_pack_one')); return; }
  if (!Array.isArray(pk.materials)) err('type.pack.materials', msg('libitem.v.type_pack_list'));
  const ty = pk.types[0];
  if (!ty || typeof ty !== 'object' || Array.isArray(ty)) { err('type.pack.types[0]', msg('libitem.v.type_pack_object')); return; }
  if (ty.kind !== (t.element ?? '')) err('type.pack.types[0].kind', msg('libitem.v.type_pack_same'));
  const layers = ty.recipe && typeof ty.recipe === 'object' ? ty.recipe.layers : null;
  if (Array.isArray(layers) && isNum(t.layers) && layers.length !== t.layers) err('type.layers', msg('libitem.v.type_layers_n', { n: layers.length }));
  if (Array.isArray(layers) && isNum(t.thickness)) {
    let sum = 0;
    for (const l of layers) if (l && typeof l === 'object' && isNum(l.t)) sum += l.t;
    if (Math.abs(sum - t.thickness) > 0.01) err('type.thickness', msg('libitem.v.type_thickness_sum', { n: String(Number(sum.toFixed(4))) }));
  }
}

/** BK.98: item.kit (see LibraryItemFormat::kit, its twin). The version, adopted and changelog go through packver.js, the one rule for packs and documents. */
function checkKit(k, { err, keys, obj_, str }) {
  keys('kit', k, ['type', 'app', 'apps', 'summary', 'file', 'members', 'version', 'adopted', 'changelog']);
  if (!KIT_TYPES.includes(k.type)) err('kit.type', msg('libitem.v.one_of', { list: KIT_TYPES.join(', ') }));
  if ('app' in k && (typeof k.app !== 'string' || !APP_RE.test(k.app))) err('kit.app', msg('libitem.v.kit_app'));
  if ('apps' in k) {
    if (!Array.isArray(k.apps) || k.apps.length > 8) err('kit.apps', msg('libitem.v.kit_apps'));
    else k.apps.forEach((a, i) => { if (typeof a !== 'string' || !APP_RE.test(a)) err('kit.apps[' + i + ']', msg('libitem.v.kit_app_name')); });
  }
  if ('summary' in k) str('kit.summary', k.summary);
  if (k.type === 'project-template') {
    if (!('app' in k)) err('kit.app', msg('libitem.v.kit_app_req'));
    if (!('file' in k)) err('kit.file', msg('libitem.v.kit_file_req'));
    else if (obj_('kit.file', k.file)) {
      keys('kit.file', k.file, ['format', 'data']);
      const d = k.file.data;
      if (k.file.format !== 'ifc-step') err('kit.file.format', msg('libitem.v.kit_file_format'));
      if (typeof d !== 'string' || !d.trimStart().startsWith('ISO-10303-21;')) err('kit.file.data', msg('libitem.v.kit_file_data'));
      else if (new TextEncoder().encode(d).length > MAX_KIT_BYTES) err('kit.file.data', msg('libitem.v.kit_file_big'));
    }
    if ('members' in k) err('kit.members', msg('libitem.v.kit_members_tpl'));
  } else if (k.type === 'quick-kit') {
    if ('file' in k) err('kit.file', msg('libitem.v.kit_file_qk'));
    if (!('members' in k)) err('kit.members', msg('libitem.v.kit_members_req'));
    else if (!Array.isArray(k.members) || !k.members.length || k.members.length > 200) err('kit.members', msg('libitem.v.kit_members_list'));
    else k.members.forEach((m, i) => {
      if (!obj_('kit.members[' + i + ']', m)) return;
      keys('kit.members[' + i + ']', m, ['uuid', 'name']);
      if (typeof m.uuid !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(m.uuid)) err('kit.members[' + i + '].uuid', msg('libitem.v.kit_member_uuid'));
      if ('name' in m) str('kit.members[' + i + '].name', m.name);
    });
  }
  const sub = {}; for (const f of ['version', 'adopted', 'changelog']) if (f in k) sub[f] = k[f];
  for (const e of validatePackVersion(sub, 'kit').errors) { const i = e.indexOf(': '); err(e.slice(0, i), e.slice(i + 2)); }
}

export function validateItem(obj, { partial = false, content = false } = {}) {
  const errors = [];
  const err = (path, text) => { if (errors.length < 50) errors.push(path + ': ' + text); };
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return { ok: false, errors: ['item: ' + msg('libitem.v.not_object')] };
  let size = 0;
  try { size = new TextEncoder().encode(JSON.stringify(obj)).length; } catch (e) { return { ok: false, errors: ['item: ' + msg('libitem.v.not_json')] }; }
  if (size > LIMITS.bytes) err('item', msg('libitem.v.too_large'));

  const isNum = (v) => typeof v === 'number' && Number.isFinite(v);
  const num = (path, v, { min = -LIMITS.coord, max = LIMITS.coord, positive = false, int = false } = {}) => {
    if (!isNum(v)) return err(path, msg('libitem.v.number'));
    if (v < min || v > max) return err(path, msg('libitem.v.range'));
    if (positive && !(v > 0)) return err(path, msg('libitem.v.positive'));
    if (int && !Number.isInteger(v)) err(path, msg('libitem.v.whole'));
  };
  const str = (path, v, { required = false } = {}) => {
    if (typeof v !== 'string') return err(path, msg('libitem.v.text'));
    if (v.length > LIMITS.text) err(path, msg('libitem.v.too_long', { n: LIMITS.text }));
    if (required && !v.trim()) err(path, msg('libitem.v.empty'));
  };
  const obj_ = (path, v) => { if (!v || typeof v !== 'object' || Array.isArray(v)) { err(path, msg('libitem.v.object')); return false; } return true; };
  const keys = (path, v, allowed) => { for (const k of Object.keys(v)) if (!allowed.includes(k)) err(path + '.' + k, msg('libitem.v.unknown_key')); };
  const color = (path, v) => {
    if (v === null) return;
    if (typeof v === 'number') { if (!Number.isInteger(v) || v < 0 || v > 256) err(path, msg('libitem.v.aci')); return; }
    if (typeof v !== 'string' || !/^#[0-9a-fA-F]{6}$/.test(v)) err(path, msg('libitem.v.color'));
  };

  keys('item', obj, TOP_KEYS);
  const required = ['format', 'format_version', 'name', 'kind', 'category', 'plan', 'body', 'params'];
  if (!partial) required.push('uuid', 'version', 'license');
  for (const k of required) if (!(k in obj)) err(k, msg(k === 'license' ? 'libitem.v.license_required' : 'libitem.v.required'));   // BK.155: a licence on every item, with its reason

  if ('format' in obj && obj.format !== FORMAT) err('format', msg('libitem.v.must_be', { value: FORMAT }));
  if ('format_version' in obj && obj.format_version !== FORMAT_VERSION) err('format_version', msg('libitem.v.must_be_1'));
  if ('uuid' in obj && (typeof obj.uuid !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(obj.uuid))) err('uuid', msg('libitem.v.uuid'));
  if ('version' in obj) num('version', obj.version, { min: 1, int: true });
  if ('name' in obj) str('name', obj.name, { required: true });
  if ('kind' in obj && !KINDS.includes(obj.kind)) err('kind', msg('libitem.v.one_of', { list: KINDS.join(', ') }));
  if ('category' in obj && !Object.prototype.hasOwnProperty.call(CATEGORIES, obj.category)) err('category', msg('libitem.v.taxonomy'));
  for (const k of ['description', 'maker', 'model']) if (k in obj) str(k, obj[k]);

  if ('ifc' in obj && obj_('ifc', obj.ifc)) {
    keys('ifc', obj.ifc, ['class', 'predefined']);
    if (typeof obj.ifc.class !== 'string' || !/^Ifc[A-Za-z]{2,60}$/.test(obj.ifc.class)) err('ifc.class', msg('libitem.v.ifc_class'));
    if ('predefined' in obj.ifc && (typeof obj.ifc.predefined !== 'string' || !/^[A-Z_]{1,60}$/.test(obj.ifc.predefined))) err('ifc.predefined', msg('libitem.v.enum'));
    const okClass = typeof obj.ifc.class === 'string' && /^Ifc[A-Za-z]{2,60}$/.test(obj.ifc.class);
    if (okClass && obj.kind === 'door' && obj.ifc.class !== 'IfcDoor') err('ifc.class', msg('libitem.v.ifc_door'));
    if (okClass && obj.kind === 'window' && obj.ifc.class !== 'IfcWindow') err('ifc.class', msg('libitem.v.ifc_window'));
  } else if (!('ifc' in obj) && ELEMENT_KINDS.includes(obj.kind)) err('ifc', msg('libitem.v.ifc_required'));   // BK.96: no class, no upload

  // BK.18: LOD and classification codes. Their shape is always checked; that they are there is a content rule ({ content: true }; the server's twin is
  // LibraryCatalog::contentRules, its switch LIBRARY_CONTENT_RULES).
  const lodNow = obj.kind === 'type' && obj.type && typeof obj.type === 'object' ? (obj.type.lod ?? obj.lod) : obj.lod;
  if ('lod' in obj && !LOD_SCALE.includes(obj.lod)) err('lod', msg('libitem.v.lod', { list: LOD_SCALE.join(', ') }));
  let classCodes = 0;
  if ('classification' in obj) {
    if (!Array.isArray(obj.classification) || obj.classification.length > 12) err('classification', msg('libitem.v.class_list'));
    else {
      const seenSys = new Set();
      obj.classification.forEach((c, i) => {
        const q = 'classification[' + i + ']';
        if (!obj_(q, c)) return;
        keys(q, c, ['system', 'code', 'title']);
        if (typeof c.system !== 'string' || !CLASSIFICATION_SYSTEMS.includes(c.system)) err(q + '.system', msg('libitem.v.one_of', { list: CLASSIFICATION_SYSTEMS.join(', ') }));
        else if (seenSys.has(c.system)) err(q + '.system', msg('libitem.v.class_twice'));
        else seenSys.add(c.system);
        if (typeof c.code !== 'string' || !CLASS_CODE_RE.test(c.code)) err(q + '.code', msg('libitem.v.class_code'));
        else classCodes++;
        if ('title' in c) str(q + '.title', c.title);
      });
    }
  }
  if (content && typeof obj.kind === 'string') {
    if (LOD_KINDS.includes(obj.kind) && (lodNow === undefined || lodNow === null)) err(obj.kind === 'type' ? 'type.lod' : 'lod', msg('libitem.v.lod_required'));
    const annot = obj.ifc && typeof obj.ifc === 'object' && obj.ifc.class === 'IfcAnnotation';
    if (CLASSIFIED_KINDS.includes(obj.kind) && !annot && classCodes === 0 && (!('classification' in obj) || (Array.isArray(obj.classification) && !obj.classification.length))) err('classification', msg('libitem.v.class_required'));
  }
  if ('plan' in obj && obj_('plan', obj.plan)) {
    const plan = obj.plan;
    keys('plan', plan, ['layers', 'entities']);
    if (!Array.isArray(plan.layers)) err('plan.layers', msg('libitem.v.list'));
    else plan.layers.forEach((l, i) => {
      const p = 'plan.layers[' + i + ']';
      if (!obj_(p, l)) return;
      keys(p, l, ['name', 'color']);
      str(p + '.name', l.name, { required: true });
      if ('color' in l) color(p + '.color', l.color);
    });
    if (!Array.isArray(plan.entities)) err('plan.entities', msg('libitem.v.list'));
    else {
      if (plan.entities.length > LIMITS.entities) err('plan.entities', msg('libitem.v.too_many_entities', { n: LIMITS.entities }));
      plan.entities.slice(0, LIMITS.entities).forEach((e, i) => {
        const p = 'plan.entities[' + i + ']';
        if (!obj_(p, e)) return;
        const want = ENTITY_KEYS[e.type];
        if (!want) return err(p + '.type', msg('libitem.v.entity_type'));
        keys(p, e, ['type', 'layer', 'color', ...want]);
        if (!('layer' in e)) err(p + '.layer', msg('libitem.v.required')); else str(p + '.layer', e.layer);
        if (!('color' in e)) err(p + '.color', msg('libitem.v.required')); else color(p + '.color', e.color);
        for (const k of want) {
          if (!(k in e)) { err(p + '.' + k, msg('libitem.v.required')); continue; }
          const v = e[k];
          if (k === 'value') str(p + '.value', v);
          else if (k === 'closed' || k === 'solid') { if (typeof v !== 'boolean') err(p + '.' + k, msg('libitem.v.boolean')); }
          else if (k === 'pts') {
            if (!Array.isArray(v) || v.length < 2) err(p + '.pts', msg('libitem.v.two_points'));
            else v.forEach((q, j) => {
              if (!Array.isArray(q) || (q.length !== 2 && q.length !== 3)) return err(p + '.pts[' + j + ']', msg('libitem.v.point'));
              q.forEach((c) => num(p + '.pts[' + j + ']', c));
            });
          } else if (k === 'loops') {
            if (!Array.isArray(v) || !v.length) err(p + '.loops', msg('libitem.v.one_loop'));
            else v.forEach((loop, j) => {
              if (!Array.isArray(loop) || loop.length < 6 || loop.length % 2) return err(p + '.loops[' + j + ']', msg('libitem.v.loop'));
              for (const c of loop) if (!isNum(c) || Math.abs(c) > LIMITS.coord) { err(p + '.loops[' + j + ']', msg('libitem.v.bad_coord')); break; }
            });
          } else if (k === 'r' || k === 'h') num(p + '.' + k, v, { positive: true });
          else if (k === 'ratio') num(p + '.ratio', v, { positive: true, max: 1 });
          else num(p + '.' + k, v);
        }
        if (e.type === 'hatch' && e.solid !== true) err(p + '.solid', msg('libitem.v.solid_hatch'));
      });
    }
  }

  const box = (p, b, named) => {
    keys(p, b, named ? ['name', 'x', 'y', 'z', 'w', 'd', 'h'] : ['type', 'x', 'y', 'z', 'w', 'd', 'h']);
    for (const k of ['x', 'y', 'z']) num(p + '.' + k, b[k]);
    for (const k of ['w', 'd', 'h']) num(p + '.' + k, b[k], { positive: true });
  };
  // a body (the item's, or a variant's): a box or a mesh
  const bodyCheck = (p, b) => {
    if (b.type === 'box') box(p, b, false);
    else if (b.type === 'mesh') {
      keys(p, b, ['type', 'positions', 'indices']);
      const P = b.positions, I = b.indices;
      if (!Array.isArray(P) || P.length < 9 || P.length % 3) err(p + '.positions', msg('libitem.v.positions'));
      else for (let i = 0; i < P.length; i++) if (!isNum(P[i]) || Math.abs(P[i]) > LIMITS.coord) { err(p + '.positions', msg('libitem.v.bad_coord_at', { i })); break; }
      if (!Array.isArray(I) || !I.length || I.length % 3) err(p + '.indices', msg('libitem.v.triangles'));
      else {
        if (I.length / 3 > LIMITS.triangles) err(p + '.indices', msg('libitem.v.too_many_triangles', { n: LIMITS.triangles }));
        const n = Array.isArray(P) ? P.length / 3 : 0;
        for (let i = 0; i < I.length; i++) if (!Number.isInteger(I[i]) || I[i] < 0 || I[i] >= n) { err(p + '.indices', msg('libitem.v.index_range', { i })); break; }
      }
    } else err(p + '.type', msg('libitem.v.body_type'));
  };
  if ('body' in obj && obj.body !== null && obj_('body', obj.body)) bodyCheck('body', obj.body);
  if ('clearances' in obj) {
    if (!Array.isArray(obj.clearances)) err('clearances', msg('libitem.v.list'));
    else obj.clearances.forEach((c, i) => { if (obj_('clearances[' + i + ']', c)) { box('clearances[' + i + ']', c, true); str('clearances[' + i + '].name', c.name); } });
  }

  if ('params' in obj && obj_('params', obj.params)) {
    const p = obj.params;
    keys('params', p, ['width', 'depth', 'height', 'weight_kg', 'elec', 'plumb', 'remarks']);
    for (const k of ['width', 'depth', 'height']) if (k in p) num('params.' + k, p[k], { min: 0 });
    if ('weight_kg' in p) num('params.weight_kg', p.weight_kg, { min: 0 });
    if ('remarks' in p) str('params.remarks', p.remarks);
    for (const [k, list] of [['elec', ELEC_KEYS], ['plumb', PLUMB_KEYS]]) {
      if (!(k in p)) continue;
      if (!obj_('params.' + k, p[k])) continue;
      keys('params.' + k, p[k], list);
      for (const f of Object.keys(p[k])) if (list.includes(f)) str('params.' + k + '.' + f, p[k][f]);
    }
  }
  if ('source_attrs' in obj && obj_('source_attrs', obj.source_attrs)) {
    for (const [k, v] of Object.entries(obj.source_attrs)) {
      if (k.length > 255) err('source_attrs', msg('libitem.v.attr_name'));
      str('source_attrs.' + k.slice(0, 40), v);
    }
  }
  if ('license' in obj && obj_('license', obj.license)) {
    keys('license', obj.license, ['id', 'holder', 'attribution', 'url']);
    if (!LICENSES.includes(obj.license.id)) err('license.id', msg('libitem.v.license'));
    for (const k of ['holder', 'attribution', 'url']) if (k in obj.license) str('license.' + k, obj.license[k]);
  }
  // 0.6 WL.7: the item in other languages — { "<tag>": { name, description, type, params: { "<param key>": label } } }
  if ('i18n' in obj && obj_('i18n', obj.i18n)) {
    const tags = Object.keys(obj.i18n);
    if (tags.length > I18N_MAX) err('i18n', msg('libitem.v.locales'));
    for (const tag of tags.slice(0, I18N_MAX)) {
      const p = 'i18n.' + tag.slice(0, 20);
      if (!LOCALE_RE.test(tag)) { err(p, msg('libitem.v.locale')); continue; }
      const t = obj.i18n[tag];
      if (!obj_(p, t)) continue;
      keys(p, t, ['name', 'description', 'type', 'params']);
      for (const k of ['name', 'description', 'type']) if (k in t) str(p + '.' + k, t[k]);
      if ('params' in t && obj_(p + '.params', t.params)) {
        for (const [k, v] of Object.entries(t.params)) {
          if (!LABEL_KEY_RE.test(k)) { err(p + '.params', msg('libitem.v.label_key')); continue; }
          str(p + '.params.' + k, v);
        }
      }
    }
  }
  // 0.7 MT.3: a material item — {graph (JSON text of a cc-material graph), maps {role: {file, sha256, media, bytes, convention?}}, size [w, h] m}
  const isMat = obj.kind === 'material';
  if ('material' in obj) {
    if (!isMat) err('material', msg('libitem.v.material_kind'));
    else if (obj_('material', obj.material)) {
      const m = obj.material;
      keys('material', m, ['graph', 'maps', 'size']);
      const g = m.graph;
      if (typeof g !== 'string' || !g || new TextEncoder().encode(g).length > 524288) err('material.graph', msg('libitem.v.material_graph'));
      else {
        let j = null;
        try { j = JSON.parse(g); } catch (e) { j = null; }
        if (!j || typeof j !== 'object' || j.format !== 'cc-material' || !Array.isArray(j.nodes)) err('material.graph', msg('libitem.v.material_graph_bad'));
        else if (j.nodes.length > 256 || (Array.isArray(j.links) ? j.links.length : 0) > 1024) err('material.graph', msg('libitem.v.material_graph_big'));
      }
      if (!('maps' in m)) err('material.maps', msg('libitem.v.required'));
      else if (obj_('material.maps', m.maps)) {
        if (Object.keys(m.maps).length > MATERIAL_MAPS.length) err('material.maps', msg('libitem.v.material_maps_many'));
        for (const [role, f] of Object.entries(m.maps)) {
          const p = 'material.maps.' + role.slice(0, 20);
          if (!MATERIAL_MAPS.includes(role)) { err(p, msg('libitem.v.material_map_name')); continue; }
          if (!obj_(p, f)) continue;
          keys(p, f, ['file', 'sha256', 'media', 'bytes', 'convention']);
          str(p + '.file', f.file, { required: true });
          if (typeof f.sha256 !== 'string' || !/^[0-9a-f]{64}$/.test(f.sha256)) err(p + '.sha256', msg('libitem.v.sha256'));
          if (!MATERIAL_MEDIA.includes(f.media)) err(p + '.media', msg('libitem.v.media'));
          num(p + '.bytes', f.bytes, { min: 1, max: 33554432, int: true });
          if ('convention' in f && f.convention !== 'opengl' && f.convention !== 'directx') err(p + '.convention', msg('libitem.v.convention'));
        }
      }
      if (!Array.isArray(m.size) || m.size.length !== 2) err('material.size', msg('libitem.v.material_size'));
      else m.size.forEach((x, i) => num('material.size[' + i + ']', x, { min: 0.001, max: 1000 }));
    }
  } else if (isMat) err('material', msg('libitem.v.required'));
  if (isMat) {
    if ('body' in obj && obj.body !== null) err('body', msg('libitem.v.material_body'));
    if (obj.plan && Array.isArray(obj.plan.entities) && obj.plan.entities.length) err('plan', msg('libitem.v.material_plan'));
  }
  // 0.8 REG.1a: a regulation item carries a building regulation pack. Only its shape is checked here (this file imports nothing); the
  // Building regulations add-on checks every rule (regs.js cleanPack) and the server stores exactly what that makes of it
  // (LibraryRegulations::clean).
  const isReg = obj.kind === 'regulation';
  if ('regulation' in obj) {
    const g = obj.regulation;
    if (!isReg) err('regulation', msg('libitem.v.regulation_kind'));
    else if (!g || typeof g !== 'object' || Array.isArray(g) || g.format !== 'cadcraft-regulation-pack' || g.version !== 1
      || typeof g.id !== 'string' || !/^[a-z0-9][a-z0-9-]{1,47}$/.test(g.id) || !Array.isArray(g.rules) || g.rules.length > 200) err('regulation', msg('libitem.v.regulation_pack'));
    else if (new TextEncoder().encode(JSON.stringify(g)).length > 262144) err('regulation', msg('libitem.v.regulation_big'));
  } else if (isReg) err('regulation', msg('libitem.v.required'));
  // 0.8 IND.7: a component item carries a component record (checkComponent; LibraryItemFormat::component is the server's twin)
  const isComp = obj.kind === 'component';
  if ('component' in obj) {
    if (!isComp) err('component', msg('libitem.v.component_kind'));
    else if (!obj.component || typeof obj.component !== 'object' || Array.isArray(obj.component)) err('component', msg('libitem.v.object'));
    else checkComponent(obj.component, err);
  } else if (isComp) err('component', msg('libitem.v.component_required'));
  if (isComp) {
    if ('body' in obj && obj.body !== null) err('body', msg('libitem.v.component_body'));
    if (obj.plan && Array.isArray(obj.plan.entities) && obj.plan.entities.length) err('plan', msg('libitem.v.component_plan'));
    if ('ports' in obj || 'variants' in obj) err('item', msg('libitem.v.component_extra'));
  }
  // 0.8 LD.1: a plant item carries a plant record (checkPlant; LibraryItemFormat::plant is the server's twin)
  const isPlant = obj.kind === 'plant';
  if ('plant' in obj) {
    if (!isPlant) err('plant', msg('libitem.v.plant_kind'));
    else if (!obj.plant || typeof obj.plant !== 'object' || Array.isArray(obj.plant)) err('plant', msg('libitem.v.object'));
    else checkPlant(obj.plant, err);
  } else if (isPlant) err('plant', msg('libitem.v.plant_required'));
  if (isPlant) {
    if ('body' in obj && obj.body !== null) err('body', msg('libitem.v.plant_body'));
    if (obj.plan && Array.isArray(obj.plan.entities) && obj.plan.entities.length) err('plan', msg('libitem.v.plant_plan'));
    if ('ports' in obj || 'variants' in obj) err('item', msg('libitem.v.plant_extra'));
  }
  // 0.8 SU.889: a template item carries a document template (checkTemplate; LibraryItemFormat::template is the server's twin)
  const isTpl = obj.kind === 'template';
  if ('template' in obj) {
    if (!isTpl) err('template', msg('libitem.v.template_kind'));
    else if (!obj.template || typeof obj.template !== 'object' || Array.isArray(obj.template)) err('template', msg('libitem.v.object'));
    else checkTemplate(obj.template, err);
  } else if (isTpl) err('template', msg('libitem.v.template_required'));
  if (isTpl) {
    if ('body' in obj && obj.body !== null) err('body', msg('libitem.v.template_body'));
    if (obj.plan && Array.isArray(obj.plan.entities) && obj.plan.entities.length) err('plan', msg('libitem.v.template_plan'));
    if ('ports' in obj || 'variants' in obj) err('item', msg('libitem.v.template_extra'));
  }
  // BK.21: a type item (what an element is made of): the block, the class, no geometry. The recipe is type-pack.js's to read.
  const isType = obj.kind === 'type';
  if ('type' in obj) {
    if (!isType) err('type', msg('libitem.v.type_kind'));
    else if (obj_('type', obj.type)) checkTypeBlock(obj.type, obj, { err, num, keys, obj_ });
  } else if (isType) err('type', msg('libitem.v.type_required'));
  if (isType) {
    if (!obj.ifc || typeof obj.ifc !== 'object' || Array.isArray(obj.ifc)) err('ifc', msg('libitem.v.type_ifc_required', { list: TYPE_IFC_CLASSES.join(', ') }));
    else if (typeof obj.ifc.class === 'string' && !TYPE_IFC_CLASSES.includes(obj.ifc.class)) err('ifc.class', msg('libitem.v.type_ifc_class', { list: TYPE_IFC_CLASSES.join(', ') }));
    // 0.11 su-finish-11 barriers: element barrier, IfcRailingType and category types/barriers go together, and only together
    const elNow = obj.type && typeof obj.type === 'object' && !Array.isArray(obj.type) ? obj.type.element : undefined;
    const clsNow = obj.ifc && typeof obj.ifc === 'object' && !Array.isArray(obj.ifc) ? obj.ifc.class : undefined;
    if (elNow === 'barrier') {
      if (typeof clsNow === 'string' && TYPE_IFC_CLASSES.includes(clsNow) && clsNow !== BARRIER_IFC_CLASS) err('ifc.class', msg('libitem.v.barrier_ifc'));
      if (obj.category !== BARRIER_CATEGORY) err('category', msg('libitem.v.barrier_cat'));
    } else {
      if (clsNow === BARRIER_IFC_CLASS) err('ifc.class', msg('libitem.v.barrier_ifc_only'));
      if (obj.category === BARRIER_CATEGORY) err('category', msg('libitem.v.barrier_cat_only'));
    }
    if ('body' in obj && obj.body !== null) err('body', msg('libitem.v.type_body'));
    if (obj.plan && Array.isArray(obj.plan.entities) && obj.plan.entities.length) err('plan', msg('libitem.v.type_plan'));
    if ('ports' in obj || 'variants' in obj) err('item', msg('libitem.v.type_extra'));
  }
  // BK.98: a kit item (a project template or a Quick Kit shared through the Library), versioned like every pack (packver.js)
  const isKit = obj.kind === 'kit';
  if ('kit' in obj) {
    if (!isKit) err('kit', msg('libitem.v.kit_kind'));
    else if (obj_('kit', obj.kit)) checkKit(obj.kit, { err, keys, obj_, str });
  } else if (isKit) err('kit', msg('libitem.v.kit_required'));
  if (isKit) {
    if ('body' in obj && obj.body !== null) err('body', msg('libitem.v.kit_body'));
    if (obj.plan && Array.isArray(obj.plan.entities) && obj.plan.entities.length) err('plan', msg('libitem.v.kit_plan'));
    if ('ports' in obj || 'variants' in obj) err('item', msg('libitem.v.kit_extra'));
  }
  if (isReg) {
    if ('body' in obj && obj.body !== null) err('body', msg('libitem.v.regulation_body'));
    if (obj.plan && Array.isArray(obj.plan.entities) && obj.plan.entities.length) err('plan', msg('libitem.v.regulation_plan'));
    if ('ports' in obj || 'variants' in obj) err('item', msg('libitem.v.regulation_extra'));
  }
  // 0.7 W3.19: ports — where pipes, ducts and cables meet the item: [{ name, system, direction, shape, size, h?, x, y, z, axis? }]
  // (mm, item coordinates; size = diameter of a round port, width of a rect or oval one, h = its height; nominal = the pipe's
  // nominal size as its table writes it, "2" for NPS 2, "DN50"; axis = the way the port faces, out of the item; absent = the
  // nearest face of the body's box). Names are unique within one list.
  const portsCheck = (p, list) => {
    if (!Array.isArray(list)) return err(p, msg('libitem.v.list'));
    if (list.length > VARIANT_LIMITS.ports) err(p, msg('libitem.v.too_many_items', { n: VARIANT_LIMITS.ports }));
    const seen = new Set();
    list.slice(0, VARIANT_LIMITS.ports).forEach((o, i) => {
      const q = p + '[' + i + ']';
      if (!obj_(q, o)) return;
      keys(q, o, ['name', 'system', 'direction', 'shape', 'size', 'h', 'nominal', 'x', 'y', 'z', 'axis']);
      for (const k of ['name', 'system', 'direction', 'shape', 'size']) if (!(k in o)) err(q + '.' + k, msg('libitem.v.required'));
      if ('name' in o) {
        str(q + '.name', o.name, { required: true });
        if (typeof o.name === 'string' && seen.has(o.name)) err(q + '.name', msg('libitem.v.duplicate'));
        seen.add(o.name);
      }
      if ('nominal' in o && (typeof o.nominal !== 'string' || !o.nominal.trim() || o.nominal.length > 20)) err(q + '.nominal', msg('libitem.v.port_nominal'));
      if ('system' in o && !PORT_SYSTEMS.includes(o.system)) err(q + '.system', msg('libitem.v.port_system', { list: PORT_SYSTEMS.join(', ') }));
      if ('direction' in o && !PORT_DIRECTIONS.includes(o.direction)) err(q + '.direction', msg('libitem.v.port_direction'));
      if ('shape' in o && !PORT_SHAPES.includes(o.shape)) err(q + '.shape', msg('libitem.v.port_shape'));
      if ('size' in o) num(q + '.size', o.size, { positive: true });
      if ('h' in o) num(q + '.h', o.h, { positive: true });
      else if (o.shape === 'rect' || o.shape === 'oval') err(q + '.h', msg('libitem.v.required'));
      for (const k of ['x', 'y', 'z']) { if (!(k in o)) err(q + '.' + k, msg('libitem.v.required')); else num(q + '.' + k, o[k]); }
      if ('axis' in o) {
        const a = o.axis;
        if (!Array.isArray(a) || a.length !== 3 || !a.every((c) => isNum(c) && Math.abs(c) <= LIMITS.coord) || !(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] > 0)) err(q + '.axis', msg('libitem.v.port_axis'));
      }
    });
  };
  if ('ports' in obj) portsCheck('ports', obj.ports);
  // 0.7 W3.19: variants — one item in several sizes or options. columns = the parameter table's columns; rows = one per
  // variant: its values (every column), and optionally its own body, footprint and ports (absent = the item's). The item's own
  // plan / body / ports are what a reader that knows no variants sees; they should be the default variant's.
  if ('variants' in obj) {
    if (isMat) err('variants', msg('libitem.v.variants_material'));
    else if (obj_('variants', obj.variants)) {
      const v = obj.variants;
      keys('variants', v, ['columns', 'rows', 'default']);
      const cols = [];
      if (!('columns' in v)) err('variants.columns', msg('libitem.v.required'));
      else if (!Array.isArray(v.columns) || !v.columns.length) err('variants.columns', Array.isArray(v.columns) ? msg('libitem.v.variant_columns') : msg('libitem.v.list'));
      else {
        if (v.columns.length > VARIANT_LIMITS.columns) err('variants.columns', msg('libitem.v.too_many_items', { n: VARIANT_LIMITS.columns }));
        v.columns.slice(0, VARIANT_LIMITS.columns).forEach((c, i) => {
          const p = 'variants.columns[' + i + ']';
          if (!obj_(p, c)) return;
          keys(p, c, ['key', 'label', 'unit']);
          if (!('key' in c)) err(p + '.key', msg('libitem.v.required'));
          else if (typeof c.key !== 'string' || !LABEL_KEY_RE.test(c.key)) err(p + '.key', msg('libitem.v.label_key'));
          else if (cols.includes(c.key)) err(p + '.key', msg('libitem.v.duplicate'));
          else cols.push(c.key);
          for (const k of ['label', 'unit']) if (k in c) str(p + '.' + k, c[k]);
        });
      }
      const ids = [];
      if (!('rows' in v)) err('variants.rows', msg('libitem.v.required'));
      else if (!Array.isArray(v.rows) || !v.rows.length) err('variants.rows', Array.isArray(v.rows) ? msg('libitem.v.variant_rows') : msg('libitem.v.list'));
      else {
        if (v.rows.length > VARIANT_LIMITS.rows) err('variants.rows', msg('libitem.v.too_many_items', { n: VARIANT_LIMITS.rows }));
        v.rows.slice(0, VARIANT_LIMITS.rows).forEach((r, i) => {
          const p = 'variants.rows[' + i + ']';
          if (!obj_(p, r)) return;
          keys(p, r, ['id', 'name', 'values', 'body', 'footprint', 'ports']);
          if (!('id' in r)) err(p + '.id', msg('libitem.v.required'));
          else if (typeof r.id !== 'string' || !VARIANT_ID_RE.test(r.id)) err(p + '.id', msg('libitem.v.variant_id'));
          else if (ids.includes(r.id)) err(p + '.id', msg('libitem.v.duplicate'));
          else ids.push(r.id);
          if (!('name' in r)) err(p + '.name', msg('libitem.v.required')); else str(p + '.name', r.name, { required: true });
          if (!('values' in r)) err(p + '.values', msg('libitem.v.required'));
          else if (obj_(p + '.values', r.values)) {
            for (const [k, x] of Object.entries(r.values)) {
              if (!cols.includes(k)) { err(p + '.values', msg('libitem.v.variant_cell_extra', { key: k.slice(0, 40) })); continue; }
              if (typeof x === 'string') str(p + '.values.' + k, x);
              else if (!isNum(x) || Math.abs(x) > LIMITS.coord) err(p + '.values.' + k, msg('libitem.v.variant_value'));
            }
            for (const k of cols) if (!(k in r.values)) err(p + '.values', msg('libitem.v.variant_cell_missing', { key: k.slice(0, 40) }));
          }
          if ('body' in r && r.body !== null && obj_(p + '.body', r.body)) bodyCheck(p + '.body', r.body);
          if ('footprint' in r && obj_(p + '.footprint', r.footprint)) {
            const f = r.footprint;
            keys(p + '.footprint', f, ['x', 'y', 'w', 'd']);
            for (const k of ['x', 'y']) { if (!(k in f)) err(p + '.footprint.' + k, msg('libitem.v.required')); else num(p + '.footprint.' + k, f[k]); }
            for (const k of ['w', 'd']) { if (!(k in f)) err(p + '.footprint.' + k, msg('libitem.v.required')); else num(p + '.footprint.' + k, f[k], { positive: true }); }
          }
          if ('ports' in r) portsCheck(p + '.ports', r.ports);
        });
      }
      if ('default' in v && (typeof v.default !== 'string' || !ids.includes(v.default))) err('variants.default', msg('libitem.v.variant_default'));
    }
  }
  if ('provenance' in obj && obj_('provenance', obj.provenance)) {
    const pv = obj.provenance;
    keys('provenance', pv, ['library', 'item', 'version', 'sha256', 'source_file', 'source_sha256', 'published_at']);
    for (const k of ['library', 'item', 'sha256', 'source_file', 'source_sha256', 'published_at']) if (k in pv && pv[k] !== null) str('provenance.' + k, pv[k]);
    if ('version' in pv) num('provenance.version', pv.version, { min: 1, int: true });
  }
  return { ok: errors.length === 0, errors };
}

// ---------------------------------------------------------------------------
// Hash

/** Keys sorted at every level, no whitespace; undefined members dropped. PHP: ksort recursively, then
 * json_encode(…, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_LINE_TERMINATORS). */
export function canonicalJson(v) {
  if (Array.isArray(v)) return '[' + v.map((x) => (x === undefined ? 'null' : canonicalJson(x))).join(',') + ']';
  if (v && typeof v === 'object') {
    return '{' + Object.keys(v).sort().filter((k) => v[k] !== undefined).map((k) => JSON.stringify(k) + ':' + canonicalJson(v[k])).join(',') + '}';
  }
  return JSON.stringify(v);
}

/** sha256 (hex) of the item's canonical JSON without `provenance` (provenance.sha256 holds it). */
export async function itemHash(obj) {
  const { provenance, ...rest } = obj || {};
  const data = new TextEncoder().encode(canonicalJson(rest));
  // crypto.subtle exists only in secure contexts; a Studio Live browser joiner's page is plain http on the LAN (0.5): then
  // the same SHA-256 in plain JS
  const subtle = globalThis.crypto?.subtle;
  const buf = subtle ? new Uint8Array(await subtle.digest('SHA-256', data)) : sha256(data);
  return [...buf].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** SHA-256 (FIPS 180-4) of bytes, in plain JS — itemHash's fallback where crypto.subtle is missing. */
export function sha256(bytes) {
  const K = new Uint32Array([0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2]);
  const H = new Uint32Array([0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19]);
  const n = bytes.length, total = Math.ceil((n + 9) / 64) * 64, m = new Uint8Array(total);
  m.set(bytes); m[n] = 0x80;
  const bits = n * 8, dv = new DataView(m.buffer);
  dv.setUint32(total - 8, Math.floor(bits / 0x100000000)); dv.setUint32(total - 4, bits >>> 0);
  const W = new Uint32Array(64), rot = (x, k) => (x >>> k) | (x << (32 - k));
  for (let off = 0; off < total; off += 64) {
    for (let i = 0; i < 16; i++) W[i] = dv.getUint32(off + i * 4);
    for (let i = 16; i < 64; i++) {
      const a = W[i - 15], b = W[i - 2];
      W[i] = (W[i - 16] + (rot(a, 7) ^ rot(a, 18) ^ (a >>> 3)) + W[i - 7] + (rot(b, 17) ^ rot(b, 19) ^ (b >>> 10))) >>> 0;
    }
    let [a, b, c, d, e, f, g, h] = H;
    for (let i = 0; i < 64; i++) {
      const t1 = (h + (rot(e, 6) ^ rot(e, 11) ^ rot(e, 25)) + ((e & f) ^ (~e & g)) + K[i] + W[i]) >>> 0;
      const t2 = ((rot(a, 2) ^ rot(a, 13) ^ rot(a, 22)) + ((a & b) ^ (a & c) ^ (b & c))) >>> 0;
      h = g; g = f; f = e; e = (d + t1) >>> 0; d = c; c = b; b = a; a = (t1 + t2) >>> 0;
    }
    H[0] += a; H[1] += b; H[2] += c; H[3] += d; H[4] += e; H[5] += f; H[6] += g; H[7] += h;
  }
  const out = new Uint8Array(32), ov = new DataView(out.buffer);
  for (let i = 0; i < 8; i++) ov.setUint32(i * 4, H[i]);
  return out;
}

// ---------------------------------------------------------------------------
// Geometry helpers

const D2R = Math.PI / 180;
const r4 = (v) => Math.round(v * 10000) / 10000;     // coordinates: 0.1 µm is plenty
const r2 = (v) => Math.round(v * 100) / 100;

/** Points along an entity (arcs and ellipses sampled), for bounds and outlines. */
function entityPoints(e) {
  switch (e.type) {
    case 'line': return [[e.x1, e.y1], [e.x2, e.y2]];
    case 'circle': return [[e.x - e.r, e.y - e.r], [e.x + e.r, e.y + e.r]];
    case 'arc': return arcSample(e.x, e.y, e.r, e.a0, e.a1);
    case 'poly': return polyPoints(e.pts, e.closed);
    case 'ellipse': return ellipseSample(e);
    case 'point': case 'text': return [[e.x, e.y]];
    case 'hatch': return e.loops.flatMap((l) => { const o = []; for (let i = 0; i < l.length; i += 2) o.push([l[i], l[i + 1]]); return o; });
    default: return [];
  }
}
function arcSample(cx, cy, r, a0, a1) {
  let sweep = a1 - a0;
  while (sweep <= 0) sweep += 360;
  const n = Math.max(4, Math.ceil(sweep / 10)), out = [];
  for (let i = 0; i <= n; i++) { const a = (a0 + sweep * i / n) * D2R; out.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); }
  return out;
}
function ellipseSample(e) {
  let sweep = e.t1 - e.t0;
  while (sweep <= 0) sweep += 360;
  const len = Math.hypot(e.mx, e.my), rot = Math.atan2(e.my, e.mx), c = Math.cos(rot), s = Math.sin(rot);
  const n = Math.max(8, Math.ceil(sweep / 10)), out = [];
  for (let i = 0; i <= n; i++) {
    const t = (e.t0 + sweep * i / n) * D2R, x = len * Math.cos(t), y = len * e.ratio * Math.sin(t);
    out.push([e.cx + x * c - y * s, e.cy + x * s + y * c]);
  }
  return out;
}
/** Polyline points with bulged segments sampled. */
function polyPoints(pts, closed) {
  const out = [], n = pts.length;
  for (let i = 0; i < n; i++) {
    const a = pts[i];
    out.push([a[0], a[1]]);
    if (i === n - 1 && !closed) break;
    const b = pts[(i + 1) % n], bulge = a[2] || 0;
    if (Math.abs(bulge) > 1e-9) out.push(...bulgeSample(a, b, bulge));
  }
  return out;
}
function bulgeSample(a, b, bulge) {
  const theta = 4 * Math.atan(bulge), chord = Math.hypot(b[0] - a[0], b[1] - a[1]);
  if (!(chord > 0)) return [];
  const r = chord / (2 * Math.sin(theta / 2)), mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, h = r * Math.cos(theta / 2);
  const ux = -(b[1] - a[1]) / chord, uy = (b[0] - a[0]) / chord, cx = mx + ux * h, cy = my + uy * h;
  const a0 = Math.atan2(a[1] - cy, a[0] - cx), steps = Math.max(2, Math.ceil(Math.abs(theta) / (10 * D2R))), out = [];
  for (let k = 1; k < steps; k++) { const t = a0 + theta * k / steps; out.push([cx + Math.abs(r) * Math.cos(t), cy + Math.abs(r) * Math.sin(t)]); }
  return out;
}

/** Bounds of the plan's geometry in mm; text counts by its anchor point only. null when empty. */
export function planBounds(plan) {
  const b = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
  for (const e of plan?.entities || []) {
    for (const [x, y] of entityPoints(e)) {
      if (!Number.isFinite(x) || !Number.isFinite(y)) continue;
      if (x < b.minX) b.minX = x; if (x > b.maxX) b.maxX = x;
      if (y < b.minY) b.minY = y; if (y > b.maxY) b.maxY = y;
    }
  }
  return b.minX <= b.maxX ? b : null;
}

/** A box body standing on the plan's bounds, `h` mm tall from `z`. null without a plan or a height. */
export function boxFromPlan(plan, h, z = 0) {
  const b = planBounds(plan);
  if (!b || !(h > 0)) return null;
  const w = b.maxX - b.minX, d = b.maxY - b.minY;
  if (!(w > 0) || !(d > 0)) return null;
  return { type: 'box', x: r4(b.minX), y: r4(b.minY), z: r4(z), w: r4(w), d: r4(d), h: r4(h) };
}

// ---------------------------------------------------------------------------
// Variants and ports (0.7 W3.19)

/** The item's variants: [{ id, name, values, default }] (default: exactly one — `variants.default`, else the first); [] for an item without. */
export function variantList(item) {
  const v = item && item.variants;
  if (!v || !Array.isArray(v.rows) || !v.rows.length) return [];
  const def = v.rows.some((r) => r.id === v.default) ? v.default : v.rows[0].id;
  return v.rows.map((r) => ({ id: r.id, name: r.name, values: r.values || {}, default: r.id === def }));
}

/** One variant's row of the item (id absent or unknown → the default variant); null for an item without variants. */
export function variantOf(item, id = null) {
  const list = variantList(item);
  if (!list.length) return null;
  const pick = list.find((x) => x.id === id) || list.find((x) => x.default);
  return item.variants.rows.find((r) => r.id === pick.id);
}

/** The ports of the item, or of its variant when that variant lists its own. */
export function portsOf(item, id = null) {
  const row = id === null ? null : variantOf(item, id);
  if (row && Array.isArray(row.ports)) return row.ports;
  return Array.isArray(item?.ports) ? item.ports : [];
}

/** The item as one of its variants: a plain item (no `variants`) with that variant's body, ports and — when it gives a
 * footprint — a plan that is that rectangle (layer "0"); everything else is the item's. params width / depth / height follow
 * the variant's box when it has one. With { named: true } its name is "<item> — <variant>" (what a model shows). An item
 * without variants comes back as it is. */
export function itemAsVariant(item, id = null, { named = false } = {}) {
  const row = variantOf(item, id);
  if (!row) return item;
  const { variants, ...out } = item;
  if (named) out.name = (item.name + ' — ' + row.name).slice(0, LIMITS.text);   // placed in a model: "Mounting plate — Large" is its name
  if ('body' in row) out.body = row.body;
  if (Array.isArray(row.ports)) out.ports = row.ports;
  if (row.footprint) {
    const f = row.footprint;
    const layers = (out.plan?.layers || []).some((l) => l.name === '0') ? out.plan.layers : [{ name: '0' }, ...(out.plan?.layers || [])];
    out.plan = { layers, entities: [{ type: 'poly', layer: '0', color: null, closed: true, pts: [[f.x, f.y], [f.x + f.w, f.y], [f.x + f.w, f.y + f.d], [f.x, f.y + f.d]] }] };
  }
  const b = bodyBox(out.body), fp = row.footprint || null;
  if (b || fp) out.params = { ...(out.params || {}), width: fp ? fp.w : b.w, depth: fp ? fp.d : b.d, ...(b ? { height: b.h } : {}) };
  return out;
}

/** The box a body fills: a box body itself, a mesh body's extent; null for no body. */
export function bodyBox(body) {
  if (!body) return null;
  if (body.type === 'box') return { x: body.x, y: body.y, z: body.z, w: body.w, d: body.d, h: body.h };
  if (body.type !== 'mesh' || !Array.isArray(body.positions) || body.positions.length < 3) return null;
  const P = body.positions, lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i + 2 < P.length; i += 3) for (let k = 0; k < 3; k++) { if (P[i + k] < lo[k]) lo[k] = P[i + k]; if (P[i + k] > hi[k]) hi[k] = P[i + k]; }
  return { x: r4(lo[0]), y: r4(lo[1]), z: r4(lo[2]), w: r4(hi[0] - lo[0]), d: r4(hi[1] - lo[1]), h: r4(hi[2] - lo[2]) };
}

/** Convex hull (monotone chain) of [[x,y]…] → CCW points. */
export function convexHull(points) {
  const p = [...new Map(points.map(([x, y]) => [r2(x) + ',' + r2(y), [r2(x), r2(y)]])).values()].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  if (p.length < 3) return p;
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [], hi = [];
  for (const q of p) { while (lo.length >= 2 && cross(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop(); lo.push(q); }
  for (const q of p.slice().reverse()) { while (hi.length >= 2 && cross(hi[hi.length - 2], hi[hi.length - 1], q) <= 0) hi.pop(); hi.push(q); }
  return lo.slice(0, -1).concat(hi.slice(0, -1));
}

function baseItem(name) {
  return {
    format: FORMAT, format_version: FORMAT_VERSION, name: clip(name || 'Unnamed item'), kind: 'equipment', category: 'other/other',   // i18n-ignore: item data, the same in every language (the server converter writes it too)
    description: '', maker: '', model: '', ifc: { class: 'IfcFurnishingElement', predefined: 'NOTDEFINED' },
    plan: { layers: [], entities: [] }, body: null, clearances: [], params: {}, source_attrs: {},
  };
}
const clip = (s, n = LIMITS.text) => { const t = String(s ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').trim(); return t.length > n ? t.slice(0, n) : t; };

/** A rectangle plan (+ the name as text) and box body centred in X with its back on y = 0. */
function boxItemGeometry(item, w, d, h, z, label) {
  const layer = 'EQUIP';
  item.plan.layers = [{ name: layer, color: 7 }];
  const x0 = -w / 2, y0 = -d;
  item.plan.entities = [{ type: 'poly', layer, color: null, pts: [[r4(x0), r4(y0)], [r4(x0 + w), r4(y0)], [r4(x0 + w), 0], [r4(x0), 0]], closed: true }];
  const text = clip(label, 120);
  if (text) {
    let th = Math.min(d * 0.18, 150);
    const wide = text.length * th * 0.6;
    if (wide > w * 0.9) th = (w * 0.9) / (text.length * 0.6);
    if (th > 1) item.plan.entities.push({ type: 'text', layer, color: null, x: r4(-text.length * th * 0.3), y: r4(-d / 2 - th / 2), h: r4(th), rot: 0, value: text });
  }
  item.body = h > 0 ? { type: 'box', x: r4(x0), y: r4(y0), z: r4(z || 0), w: r4(w), d: r4(d), h: r4(h) } : null;
  item.params.width = r4(w); item.params.depth = r4(d);
  if (h > 0) item.params.height = r4(h);
}

// ---------------------------------------------------------------------------
// Attributes (KCL-style and plain) → canonical params

const clean = (s) => String(s ?? '').replace(/\p{C}/gu, '').trim();
const joinText = (...xs) => xs.map(clean).filter(Boolean).filter((x, i, a) => a.indexOf(x) === i).join(' ');

/** KCL electrical field "45~15~~208~3~60~X~~~…" (connections joined by ^) → [{ amps, kw, hp, volts, phase, hz, conn, nema }]. */
export function decodeElec(s) {
  if (!s) return [];
  return String(s).split('^').map((c) => {
    const f = c.split('~').map((v) => v.trim());
    return { amps: f[0] || '', kw: f[1] || '', hp: f[2] || '', volts: f[3] || '', phase: f[4] || '', hz: f[5] || '',
      conn: f[6] ? 'direct' : f[7] ? 'cord and plug' : '', nema: f[8] || '' };   // i18n-ignore: an internal value, never shown
  }).filter((c) => Object.values(c).some(Boolean));
}

export function elecText(c) {
  const parts = [];
  if (c.volts) parts.push(c.volts + ' V' + (c.phase ? ' ' + c.phase + ' ph' : ''));
  if (c.amps) parts.push(c.amps + ' A');
  if (c.kw) parts.push(c.kw + ' kW');
  if (c.hp) parts.push(c.hp + ' HP');
  if (c.conn) parts.push(c.conn === 'direct' ? msg('libitem.elec.direct') : c.nema ? msg('libitem.elec.plug_nema', { nema: c.nema }) : msg('libitem.elec.plug'));
  return parts.join(', ');
}

/** KCL plumbing field "0.5~39~~" (several connections joined by ^) → '1/2"' or '(2) 1 1/2"'. */
export function plumbSize(s) {
  if (!s) return '';
  const sizes = String(s).split('^').map((c) => c.split('~')[0].trim()).filter(Boolean);
  if (!sizes.length) return '';
  const counts = new Map();
  for (const z of sizes) counts.set(z, (counts.get(z) || 0) + 1);
  return [...counts].map(([z, n]) => (n > 1 ? '(' + n + ') ' : '') + inches(z)).join(', ');
}
function inches(v) {
  const n = Number(v);
  if (!Number.isFinite(n) || n <= 0) return v;
  const whole = Math.floor(n), eighths = Math.round((n - whole) * 8);
  if (eighths === 8) return (whole + 1) + '"';
  const f = eighths ? ['', '1/8', '1/4', '3/8', '1/2', '5/8', '3/4', '7/8'][eighths] : '';
  return (whole ? whole + (f ? ' ' : '') : '') + f + '"';
}

/** "30", 30" , 2'-6", 2' 6 1/2", 762 mm, 76.2 cm, 0.76 m → mm (bare numbers × mmPerUnit). NaN if not a length. */
export function parseLength(s, mmPerUnit = 1) {
  const t = String(s ?? '').trim().replace(/[\u2032\u2019]/g, "'").replace(/[\u2033\u201d]/g, '"').toLowerCase();
  if (!t) return NaN;
  let m = t.match(/^(-?\d+(?:\.\d+)?)\s*(mm|cm|m|in|ft)$/);
  if (m) return Number(m[1]) * UNIT_MM[m[2]];
  m = t.match(/^(?:(\d+(?:\.\d+)?)\s*'\s*-?\s*)?(?:(\d+(?:\.\d+)?)(?:\s+(\d+)\/(\d+))?|(\d+)\/(\d+))?\s*(?:"|in)?$/);
  if (m && (m[1] || m[2] || m[5]) && /['"]/.test(t)) {
    const ft = Number(m[1] || 0), inch = Number(m[2] || 0) + (m[3] ? Number(m[3]) / Number(m[4]) : 0) + (m[5] ? Number(m[5]) / Number(m[6]) : 0);
    return (ft * 12 + inch) * 25.4;
  }
  if (/^-?\d+(\.\d+)?$/.test(t)) return Number(t) * mmPerUnit;
  return NaN;
}

const upper = (attrs) => { const a = {}; for (const [k, v] of Object.entries(attrs || {})) a[String(k).toUpperCase()] = clean(v); return a; };
const pick = (a, ...names) => { for (const n of names) if (a[n]) return a[n]; return ''; };

/** Maker, model, a title, and the per-placement item number and quantity (which never go into the item). */
export function attrsInfo(attrs) {
  const a = upper(attrs);
  return {
    maker: pick(a, 'KCL-MFR-SCHDNAME', 'KCL-MFR', 'MANUFACTURER', 'MAKER', 'MFR'),
    model: pick(a, 'KCL-MODEL', 'MODEL', 'MODEL NUMBER', 'MODELNUMBER'),
    title: pick(a, 'KCL-CATEGORY', 'DESCRIPTION', 'NAME', 'TITLE'),
    itemNo: pick(a, 'KCL-ITEM', 'ITEM', 'ITEMNO', 'ITEM NUMBER'),
    qty: pick(a, 'KCL-QTY', 'QTY', 'QUANTITY'),
  };
}
/** Attribute names that belong to one placement, not to the item. */
export const PLACEMENT_ATTRS = ['KCL-ITEM', 'KCL-QTY'];

/**
 * Canonical params from attributes (KCL-style: KCL-ELEC → elec, KCL-CW/HW/DD/ID/GAS → plumb, remarks;
 * plain: WIDTH/DEPTH/HEIGHT/LENGTH, VOLTS/AMPS/…). Lengths without a unit are in drawing units × mmPerUnit.
 */
export function paramsFromAttrs(attrs, { mmPerUnit = 1 } = {}) {
  const a = upper(attrs), p = {};
  const len = (v) => { const n = parseLength(v, mmPerUnit); return Number.isFinite(n) && n > 0 ? r4(n) : null; };
  const dims = { width: pick(a, 'WIDTH', 'W', 'KCL-WIDTH', 'LENGTH'), depth: pick(a, 'DEPTH', 'D', 'KCL-DEPTH'), height: pick(a, 'HEIGHT', 'H', 'KCL-HEIGHT') };
  const dim = a['KCL-EQUIP-DIM'] || a['DIMENSIONS'] || '';
  if (dim) {   // "30 x 24 x 34" — width × depth × height
    const parts = dim.split(/\s*[x×]\s*/i);
    if (parts.length === 3) { if (!dims.width) dims.width = parts[0]; if (!dims.depth) dims.depth = parts[1]; if (!dims.height) dims.height = parts[2]; }
  }
  for (const k of ['width', 'depth', 'height']) { const v = dims[k] ? len(dims[k]) : null; if (v) p[k] = v; }
  const kg = Number(pick(a, 'WEIGHT_KG', 'WEIGHT (KG)'));
  if (Number.isFinite(kg) && kg > 0) p.weight_kg = kg;

  const conns = decodeElec(a['KCL-ELEC']);
  const elec = {};
  if (conns.length) {
    const join = (f) => { const vs = conns.map(f); return vs.some(Boolean) ? (vs.length > 1 ? vs.map((v) => v || '-').join(' + ') : vs[0]) : ''; };
    Object.assign(elec, { volts: join((c) => c.volts), phase: join((c) => c.phase), amps: join((c) => c.amps), kw: join((c) => c.kw),
      hp: join((c) => c.hp), hz: join((c) => c.hz), nema: join((c) => c.nema),
      direct: join((c) => (c.conn === 'direct' ? 'yes' : '')), plug: join((c) => (c.conn === 'cord and plug' ? 'yes' : '')) });   // i18n-ignore: an internal value, never shown
  }
  for (const [k, names] of Object.entries({ volts: ['VOLTS', 'VOLTAGE'], phase: ['PHASE'], amps: ['AMPS'], kw: ['KW'], hp: ['HP'], hz: ['HZ'], nema: ['NEMA'], plug: ['PLUG'] })) {
    if (!elec[k]) { const v = pick(a, ...names); if (v) elec[k] = clip(v); }
  }
  const e2 = Object.fromEntries(Object.entries(elec).filter(([, v]) => v));
  if (Object.keys(e2).length) p.elec = e2;

  const plumb = {};
  for (const k of PLUMB_KEYS) {
    const kcl = a['KCL-' + k.toUpperCase()];
    const v = kcl ? plumbSize(kcl) : a[k.toUpperCase()] || '';
    if (v) plumb[k] = clip(v);
  }
  if (Object.keys(plumb).length) p.plumb = plumb;
  const remarks = joinText(a['KCL-REMARK-USER-EQUIP'], a['KCL-REMARK'], a['REMARKS'], a['REMARK']);
  if (remarks) p.remarks = clip(remarks);
  return p;
}

/** Verbatim attributes minus the per-placement ones; empty values dropped. */
function sourceAttrs(attrs) {
  const out = {};
  for (const [k, v] of Object.entries(attrs || {})) {
    if (PLACEMENT_ATTRS.includes(String(k).toUpperCase())) continue;
    const s = String(v ?? '');
    if (s.trim() === '') continue;
    out[String(k).slice(0, 255)] = s.length > LIMITS.text ? s.slice(0, LIMITS.text) : s;
  }
  return out;
}

/** 'door' | 'window' for the doors and windows categories, else null. */
export const opening = (category) => (category === 'openings/doors' ? 'door' : category === 'openings/windows' ? 'window' : null);

/** A taxonomy key suggested from free text (KCL category, IFC class, file name); null when nothing fits. */
export function suggestCategory(text) {
  const t = String(text || '').toLowerCase();
  const rules = [
    [/sink|faucet|lavator/, 'foodservice/sinks'], [/refrig|freezer|cooler|walk-?in|reach-?in|chiller/, 'foodservice/refrigeration'],
    [/range|fryer|oven|griddle|broiler|kettle|steamer|cooktop|grill|braising|charbroil/, 'foodservice/cooking'],
    [/shelf|shelving|rack(?! conveyor)/, 'foodservice/shelving'], [/dish|warewash|disposer|rack conveyor/, 'foodservice/warewashing'],
    [/hood|ventilat|exhaust/, 'foodservice/ventilation'], [/table|counter/, 'foodservice/worktables'],
    [/warm|holding|heated|hot well|food well/, 'foodservice/holding'], [/ice/, 'foodservice/ice'],
    [/beverage|coffee|tea|soda|dispenser/, 'foodservice/beverage'], [/mixer|slicer|prep|scale|processor/, 'foodservice/prep'],
    [/serving|display|sneeze|buffet|cashier|tray/, 'foodservice/serving'],
    // after the foodservice words, so a "two-door reach-in" stays refrigeration
    [/\bdoors?\b/, 'openings/doors'], [/\bwindows?\b/, 'openings/windows'],
  ];
  for (const [re, key] of rules) if (re.test(t)) return key;
  return null;
}

// ---------------------------------------------------------------------------
// CSV

function parseCsv(text) {
  const rows = [];
  let row = [], cell = '', q = false;
  const s = String(text || '').replace(/^\ufeff/, '');
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (q) {
      if (c === '"') { if (s[i + 1] === '"') { cell += '"'; i++; } else q = false; } else cell += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') { if (c === '\r' && s[i + 1] === '\n') i++; row.push(cell); rows.push(row); row = []; cell = ''; }
    else cell += c;
  }
  if (cell !== '' || row.length) { row.push(cell); rows.push(row); }
  return rows.filter((r) => r.some((x) => x.trim() !== ''));
}

/**
 * Spec rows → box items. Columns (any order, case-insensitive): name*, maker, model, category, kind, description,
 * width*, depth*, height, z (mounting height of the box's bottom), units (in|mm|…; or a header suffix "(in)"/"(mm)"),
 * volts phase amps kw hp hz plug nema direct, cw hw dd id gas, remarks, ifc_class.
 */
export function itemsFromCsv(text, { category = null, kind = null } = {}) {
  const rows = parseCsv(text), notes = [], items = [];
  if (rows.length < 2) return { items, notes: [msg('libitem.csv.no_rows')] };
  const head = rows[0].map((h) => {
    const m = h.trim().toLowerCase().match(/^(.*?)\s*(?:\((in|mm|cm|m|ft)\))?$/);
    return { key: m[1].replace(/[\s-]+/g, '_'), unit: m[2] || null };
  });
  const col = (name) => head.findIndex((h) => h.key === name);
  if (col('name') < 0) return { items, notes: [msg('libitem.csv.no_name_column')] };
  rows.slice(1).forEach((r, n) => {
    const line = n + 2;
    const get = (name) => { const i = col(name); return i >= 0 ? clean(r[i]) : ''; };
    const unitOf = (name) => { const i = col(name); const u = (i >= 0 && head[i].unit) || get('units').toLowerCase() || ''; return u; };
    const mm = (name) => {
      const raw = get(name);
      if (!raw) return null;
      const u = unitOf(name);
      if (!u && /^-?\d+(\.\d+)?$/.test(raw)) { notes.push(msg('libitem.csv.no_units', { row: line, column: name })); return NaN; }
      const v = parseLength(raw, UNIT_MM[u] || 1);
      if (!Number.isFinite(v)) { notes.push(msg('libitem.csv.not_length', { row: line, column: name, value: raw })); return NaN; }
      return v;
    };
    const name = get('name');
    if (!name) { notes.push(msg('libitem.csv.no_name', { row: line })); return; }
    const w = mm('width'), d = mm('depth'), h = mm('height'), z = mm('z');
    if (!(w > 0) || !(d > 0)) { notes.push(msg('libitem.csv.no_size', { row: line, name })); return; }
    const it = baseItem(name);
    it.maker = clip(get('maker')); it.model = clip(get('model')); it.description = clip(get('description'));
    const cat = get('category') || category;
    if (cat && CATEGORIES[cat]) it.category = cat;
    else { const s = suggestCategory(name); it.category = s || 'other/other'; notes.push(cat ? msg('libitem.csv.category_unknown', { row: line, name, category: cat, set: it.category }) : msg('libitem.csv.category_missing', { row: line, name, set: it.category })); }
    const k = get('kind') || kind;
    it.kind = KINDS.includes(k) ? k : opening(it.category) || (it.category.startsWith('furniture') || it.category.startsWith('casework') ? 'furniture' : 'equipment');
    if (opening(it.category) && !get('ifc_class')) it.ifc.class = opening(it.category) === 'door' ? 'IfcDoor' : 'IfcWindow';
    const cls = get('ifc_class');
    if (/^Ifc[A-Za-z]{2,60}$/.test(cls)) it.ifc.class = cls;
    boxItemGeometry(it, w, d, h > 0 ? h : 0, z > 0 ? z : 0, name);
    if (!(h > 0)) notes.push(msg('libitem.csv.no_height', { row: line, name }));
    const elec = {}, plumb = {};
    for (const f of ELEC_KEYS) { const v = get(f); if (v) elec[f] = clip(v); }
    for (const f of PLUMB_KEYS) { const v = get(f); if (v) plumb[f] = clip(v); }
    if (Object.keys(elec).length) it.params.elec = elec;
    if (Object.keys(plumb).length) it.params.plumb = plumb;
    const rem = get('remarks'); if (rem) it.params.remarks = clip(rem);
    items.push(it);
  });
  return { items, notes };
}

// ---------------------------------------------------------------------------
// Meshes: glTF 2.0 (.glb, .gltf with embedded buffers), OBJ and STL

/**
 * One item from a mesh file. units: what one file unit is (glTF is meters by its spec; OBJ and STL have no units —
 * pass them; default mm with a note). upAxis 'y' (glTF's and most OBJ exporters') or 'z' (STL's default). The mesh is moved
 * so its bounding box is centred in X, its back (max Y) is on y = 0 and its bottom on z = 0.
 */
export function itemFromMesh(bytes, kind, { units = null, upAxis = null, name = '' } = {}) {
  const notes = [];
  const u8 = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let tri;
  if (kind === 'obj') {
    tri = readObj(new TextDecoder().decode(u8), notes);
    if (!units) notes.push(msg('libitem.mesh.obj_units'));
    if (!upAxis) notes.push(msg('libitem.mesh.obj_up'));
  } else if (kind === 'stl') {
    tri = readStl(u8, notes);
    if (!units) notes.push(msg('libitem.mesh.stl_units'));
    if (!upAxis) notes.push(msg('libitem.mesh.stl_up'));
  } else {
    tri = readGltf(u8, notes);
    if (units && units !== 'm') notes.push(msg('libitem.mesh.gltf_units', { units }));
  }
  if (!tri) return { items: [], notes };
  const scale = UNIT_MM[units || (kind === 'obj' || kind === 'stl' ? 'mm' : 'm')] || 1;
  const up = upAxis || (kind === 'stl' ? 'z' : 'y');
  const P = tri.positions, n = P.length / 3;
  if (tri.indices.length / 3 > LIMITS.triangles) return { items: [], notes: [...notes, msg('libitem.mesh.too_many', { n: tri.indices.length / 3, limit: LIMITS.triangles })] };
  const out = new Array(P.length);
  let minX = Infinity, minY = Infinity, minZ = Infinity, maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
  for (let i = 0; i < n; i++) {
    let x = P[i * 3] * scale, y = P[i * 3 + 1] * scale, z = P[i * 3 + 2] * scale;
    if (up === 'y') { const t = y; y = -z; z = t; }   // Y-up → Z-up
    out[i * 3] = x; out[i * 3 + 1] = y; out[i * 3 + 2] = z;
    if (x < minX) minX = x; if (x > maxX) maxX = x; if (y < minY) minY = y; if (y > maxY) maxY = y; if (z < minZ) minZ = z; if (z > maxZ) maxZ = z;
  }
  if (!(maxX > minX) || !(maxY > minY)) return { items: [], notes: [...notes, msg('libitem.mesh.flat')] };
  const cx = (minX + maxX) / 2;
  for (let i = 0; i < n; i++) { out[i * 3] = r4(out[i * 3] - cx); out[i * 3 + 1] = r4(out[i * 3 + 1] - maxY); out[i * 3 + 2] = r4(out[i * 3 + 2] - minZ); }
  notes.push(msg('libitem.mesh.moved'));
  const it = baseItem(name || tri.name || 'Mesh item');   // i18n-ignore: item data, the same in every language (the server converter writes it too)
  it.body = { type: 'mesh', positions: out, indices: Array.from(tri.indices) };
  const hull = convexHull(Array.from({ length: n }, (_, i) => [out[i * 3], out[i * 3 + 1]]));
  it.plan.layers = [{ name: 'EQUIP', color: 7 }];
  if (hull.length >= 3) it.plan.entities.push({ type: 'poly', layer: 'EQUIP', color: null, pts: hull, closed: true });
  it.params = { width: r4(maxX - minX), depth: r4(maxY - minY), height: r4(maxZ - minZ) };
  const s = suggestCategory(it.name);
  if (s) {
    it.category = s; notes.push(msg('libitem.category.suggested_name', { category: s }));
    const o = opening(s); if (o) { it.kind = o; it.ifc = { ...(it.ifc || {}), class: o === 'door' ? 'IfcDoor' : 'IfcWindow' }; }
  }
  else notes.push(msg('libitem.category.set', { category: 'other/other' }));
  return { items: [it], notes };
}

function readObj(text, notes) {
  const v = [], idx = [];
  let name = '', skipped = 0;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (line.startsWith('v ')) { const p = line.split(/\s+/); v.push(+p[1], +p[2], +p[3]); }
    else if (line.startsWith('f ')) {
      const ids = line.split(/\s+/).slice(1).map((t) => { const k = parseInt(t.split('/')[0], 10); return k < 0 ? v.length / 3 + k : k - 1; });
      if (ids.some((k) => !Number.isInteger(k) || k < 0 || k >= v.length / 3)) { skipped++; continue; }
      for (let i = 1; i + 1 < ids.length; i++) idx.push(ids[0], ids[i], ids[i + 1]);
    } else if (!name && (line.startsWith('o ') || line.startsWith('g '))) name = line.slice(2).trim();
  }
  if (skipped) notes.push(msg('libitem.mesh.obj_faces_skipped', { n: skipped }));
  if (!idx.length || v.some((x) => !Number.isFinite(x))) { notes.push(msg('libitem.mesh.obj_none')); return null; }
  return { positions: v, indices: idx, name };
}

/**
 * STL, binary or ASCII. Binary when the 84-byte header's triangle count matches the file size (some binary
 * files start with "solid" too). Corners shared by several triangles are merged when they are the same
 * point, so the item stores each one once.
 */
function readStl(u8, notes) {
  const dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
  const positions = [], indices = [], seen = new Map();
  let name = '', degenerate = 0;
  const corner = (x, y, z) => {
    const k = x + ',' + y + ',' + z;
    let i = seen.get(k);
    if (i === undefined) { i = positions.length / 3; seen.set(k, i); positions.push(x, y, z); }
    return i;
  };
  const tri = (a, b, c) => { if (a === b || b === c || a === c) degenerate++; else indices.push(a, b, c); };
  if (u8.length >= 84 && 84 + dv.getUint32(80, true) * 50 === u8.length) {
    const n = dv.getUint32(80, true);
    for (let t = 0; t < n; t++) {
      const o = 84 + t * 50 + 12, v = [];
      for (let k = 0; k < 3; k++) v.push(corner(dv.getFloat32(o + k * 12, true), dv.getFloat32(o + k * 12 + 4, true), dv.getFloat32(o + k * 12 + 8, true)));
      tri(v[0], v[1], v[2]);
    }
  } else {
    const text = new TextDecoder().decode(u8);
    if (!/^\s*solid\b/.test(text)) { notes.push(msg('libitem.mesh.stl_unreadable')); return null; }
    name = clip((/^\s*solid[ \t]*([^\r\n]*)/.exec(text) || [])[1] || '', 120).trim();
    let v = [];
    for (const m of text.matchAll(/vertex\s+(\S+)\s+(\S+)\s+(\S+)|endloop/g)) {
      if (m[0] === 'endloop') { for (let i = 1; i + 1 < v.length; i++) tri(v[0], v[i], v[i + 1]); v = []; continue; }
      const x = +m[1], y = +m[2], z = +m[3];
      if (![x, y, z].every(Number.isFinite)) { notes.push(msg('libitem.mesh.stl_corner')); return null; }
      v.push(corner(x, y, z));
    }
  }
  if (degenerate) notes.push(msg('libitem.mesh.stl_degenerate', { n: degenerate }));
  if (!indices.length || positions.some((x) => !Number.isFinite(x))) { notes.push(msg('libitem.mesh.stl_none')); return null; }
  return { positions, indices, name };
}

function readGltf(u8, notes) {
  let json, bin = null;
  const dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
  try {
    if (u8.length >= 12 && dv.getUint32(0, true) === 0x46546c67) {   // 'glTF'
      if (dv.getUint32(4, true) !== 2) { notes.push(msg('libitem.mesh.gltf_version')); return null; }
      let off = 12;
      while (off + 8 <= u8.length) {
        const len = dv.getUint32(off, true), type = dv.getUint32(off + 4, true), body = u8.subarray(off + 8, off + 8 + len);
        if (type === 0x4e4f534a) json = JSON.parse(new TextDecoder().decode(body));
        else if (type === 0x004e4942) bin = body;
        off += 8 + len;
      }
    } else json = JSON.parse(new TextDecoder().decode(u8));
  } catch (e) { notes.push(msg('libitem.mesh.gltf_unreadable')); return null; }
  if (!json || !json.asset || String(json.asset.version || '').split('.')[0] !== '2') { notes.push(msg('libitem.mesh.gltf_version')); return null; }
  for (const ext of json.extensionsRequired || []) { notes.push(msg('libitem.mesh.gltf_extension', { extension: ext })); return null; }
  const buffers = (json.buffers || []).map((b, i) => {
    if (b.uri === undefined) return i === 0 ? bin : null;
    const m = /^data:[^,]*;base64,(.*)$/.exec(b.uri);
    if (!m) { notes.push(msg('libitem.mesh.gltf_buffer', { n: i, uri: clip(b.uri, 80) })); return null; }
    const s = atob(m[1]), out = new Uint8Array(s.length);
    for (let k = 0; k < s.length; k++) out[k] = s.charCodeAt(k);
    return out;
  });
  const read = (ai, comps) => {
    const a = json.accessors?.[ai];
    if (!a || a.sparse) return null;
    const bv = json.bufferViews?.[a.bufferView], buf = bv && buffers[bv.buffer];
    if (!buf) return null;
    const size = { 5120: 1, 5121: 1, 5122: 2, 5123: 2, 5125: 4, 5126: 4 }[a.componentType];
    const n = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4 }[a.type];
    if (!size || n !== comps) return null;
    const stride = bv.byteStride || size * n, base = (bv.byteOffset || 0) + (a.byteOffset || 0);
    const d = new DataView(buf.buffer, buf.byteOffset, buf.byteLength), out = new Array(a.count * n);
    for (let i = 0; i < a.count; i++) for (let c = 0; c < n; c++) {
      const o = base + i * stride + c * size;
      out[i * n + c] = a.componentType === 5126 ? d.getFloat32(o, true) : a.componentType === 5125 ? d.getUint32(o, true)
        : a.componentType === 5123 ? d.getUint16(o, true) : a.componentType === 5121 ? d.getUint8(o) : a.componentType === 5122 ? d.getInt16(o, true) : d.getInt8(o);
    }
    return out;
  };
  const positions = [], indices = [];
  let skippedModes = 0;
  const mat = (node) => {
    if (node.matrix) return node.matrix.slice();
    const [tx, ty, tz] = node.translation || [0, 0, 0], [qx, qy, qz, qw] = node.rotation || [0, 0, 0, 1], [sx, sy, sz] = node.scale || [1, 1, 1];
    return [
      (1 - 2 * (qy * qy + qz * qz)) * sx, 2 * (qx * qy + qz * qw) * sx, 2 * (qx * qz - qy * qw) * sx, 0,
      2 * (qx * qy - qz * qw) * sy, (1 - 2 * (qx * qx + qz * qz)) * sy, 2 * (qy * qz + qx * qw) * sy, 0,
      2 * (qx * qz + qy * qw) * sz, 2 * (qy * qz - qx * qw) * sz, (1 - 2 * (qx * qx + qy * qy)) * sz, 0, tx, ty, tz, 1];
  };
  const mul = (a, b) => { const o = new Array(16); for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) { let s = 0; for (let k = 0; k < 4; k++) s += a[k * 4 + r] * b[c * 4 + k]; o[c * 4 + r] = s; } return o; };
  const visit = (ni, parent, depth) => {
    const node = json.nodes?.[ni];
    if (!node || depth > 64) return;
    const m = mul(parent, mat(node));
    const mesh = node.mesh !== undefined ? json.meshes?.[node.mesh] : null;
    for (const prim of mesh?.primitives || []) {
      if ((prim.mode ?? 4) !== 4) { skippedModes++; continue; }
      const pos = read(prim.attributes?.POSITION, 3);
      if (!pos) continue;
      const base = positions.length / 3;
      for (let i = 0; i < pos.length; i += 3) {
        const x = pos[i], y = pos[i + 1], z = pos[i + 2];
        positions.push(m[0] * x + m[4] * y + m[8] * z + m[12], m[1] * x + m[5] * y + m[9] * z + m[13], m[2] * x + m[6] * y + m[10] * z + m[14]);
      }
      const ix = prim.indices !== undefined ? read(prim.indices, 1) : Array.from({ length: pos.length / 3 }, (_, i) => i);
      if (ix) for (const k of ix) indices.push(base + k);
    }
    for (const c of node.children || []) visit(c, m, depth + 1);
  };
  const I = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  const scene = json.scenes?.[json.scene ?? 0];
  const roots = scene ? scene.nodes || [] : (json.nodes || []).map((_, i) => i);
  for (const r of roots) visit(r, I, 0);
  if (skippedModes) notes.push(msg('libitem.mesh.gltf_lines', { n: skippedModes }));
  if (!indices.length) { notes.push(msg('libitem.mesh.gltf_none')); return null; }
  return { positions, indices, name: clip(scene?.name || json.meshes?.[0]?.name || '', 120) };
}

// ---------------------------------------------------------------------------
// DWG / DXF blocks (the drawing model of docs/DWG-LIB-SPEC.md: cc-dwg's readDwg or dxf-model.js, as BimCraft's 2D view uses)

/** Drawing units → mm per unit, the key, and a note when the drawing does not say. */
export function drawingUnits(db, override) {
  if (override) {
    if (!UNIT_MM[override]) throw new Error(msg('libitem.units.unknown', { units: override, list: Object.keys(UNIT_MM).join(', ') }));
    return { key: override, mm: UNIT_MM[override], note: null };
  }
  const key = INSUNITS[db.header?.INSUNITS ?? 0];
  if (key) return { key, mm: UNIT_MM[key], note: null };
  const metric = Number(db.header?.MEASUREMENT) === 1;
  const k = metric ? 'mm' : 'in';
  return { key: k, mm: UNIT_MM[k], note: msg(metric ? 'libitem.units.assumed_mm' : 'libitem.units.assumed_in') };
}

const attText = (t) => clean(t?.value);

/** Every named, non-anonymous, non-xref block: name, entity count, attribute definitions and values. */
export function blockCandidates(db) {
  const records = db.blocks || [];
  // First model-space instance of each block with attributes; and KCL item tags naming a block (KCL-FILENAME), in
  // model space and on the sheets.
  const firstAttrs = new Map(), tagFor = new Map();
  for (const sp of records) {
    if (!/^\*(model|paper)_space/i.test(sp.name)) continue;
    const inModel = /^\*model_space$/i.test(sp.name);
    for (const e of sp.entities) {
      if ((e.type !== 'INSERT' && e.type !== 'MINSERT') || !e.attribs?.length) continue;
      const a = {};
      for (const t of e.attribs) if (t.tag) a[t.tag] = attText(t);
      if (inModel && !firstAttrs.has(e.block)) firstAttrs.set(e.block, a);
      const fn = a['KCL-FILENAME'];
      if (fn && !tagFor.has(fn.toUpperCase())) tagFor.set(fn.toUpperCase(), a);
    }
  }
  const keys = new Set(), out = [];
  for (const b of records) {
    const name = itemBlockName(b, records);
    if (!name || name.startsWith('*') || (b.flags & 4) || (b.flags & 16) || name.includes('|')) continue;
    const ents = b.entities || [];
    const defs = ents.filter((e) => e.type === 'ATTDEF');
    const drawn = ents.filter((e) => e.type !== 'ATTDEF');
    let attrs = {}, from = null;
    // An item-tag block (it defines KCL-ITEM) carries one placement's data, never an item's: its values stay out.
    const isTag = defs.some((d) => PLACEMENT_ATTRS.includes(String(d.tag || '').toUpperCase()));
    if (isTag) from = 'item tag block';   // i18n-ignore: an internal value, never shown
    else if (firstAttrs.has(b.name)) { attrs = firstAttrs.get(b.name); from = 'instance'; }
    else if (defs.length) { for (const d of defs) if (d.tag) attrs[d.tag] = attText(d); from = 'defaults'; }
    const tag = tagFor.get(name.toUpperCase());
    if (tag) { attrs = { ...tag, ...Object.fromEntries(Object.entries(attrs).filter(([, v]) => v)) }; from = 'item tag'; }   // i18n-ignore: an internal value, never shown
    const has3d = drawn.some((e) => e.type === '3DFACE');
    let key = name.toLowerCase().replace(/[^a-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'block';
    let k = key, n = 2;
    while (keys.has(k)) k = key + '-' + n++;
    keys.add(k);
    const visible = Object.fromEntries(Object.entries(attrs).filter(([t]) => !PLACEMENT_ATTRS.includes(t.toUpperCase())));
    const p = paramsFromAttrs(visible);
    const base = { attdefs: defs.map((d) => d.tag).filter(Boolean), attrs: visible, attrs_from: from, tag: isTag, has_body: has3d || !!p.height };
    // 0.5 DB.11: a dynamic block with visibility states offers each state as its own candidate ("Sink: Double bowl"), drawn
    // with only that state's objects (the definition's handles per state, cc-dwg DB.2)
    const states = visibilityStates(b);
    if (states) {
      for (const st of states) {
        const nm = name + ': ' + st.name;
        let sk = (key + '-' + st.name.toLowerCase().replace(/[^a-z0-9_-]+/g, '-')).replace(/-+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || key;
        let s2 = sk, n2 = 2;
        while (keys.has(s2)) s2 = sk + '-' + n2++;
        keys.add(s2);
        out.push({ key: s2, name: nm, block: name, state: st.name, entities: drawn.filter((e) => st.handles.has(String(e.handle))).length, ...base });
      }
      continue;
    }
    out.push({ key: k, name, entities: drawn.length, ...base });
  }
  return out;
}

/** A dynamic block definition's visibility states (DB.2: block.dynamic.params[].states), each with its entity handles, or null. */
function visibilityStates(b) {
  const p = (b?.dynamic?.params || []).find((x) => Array.isArray(x.states) && x.states.length > 1);
  return p ? p.states.map((st) => ({ name: clean(String(st.name ?? '')) || '?', handles: new Set((st.entities || []).map(String)) })) : null;
}

/**
 * A block's name for an item: its own, or for an anonymous "*U…" block its dynamic-block true name (AutoCAD 2007 and
 * older keep a dynamic block's definition under "*U…" with the name in xdata) when no block has that name already.
 */
function itemBlockName(b, all) {
  if (!b.name || !b.name.startsWith('*') || !b.trueName || b.trueName.startsWith('*')) return b.name;
  return all.some((x) => x.name === b.trueName) ? b.name : b.trueName;
}

/** Items (or only candidates, with `list`) from a drawing's blocks. `blocks` = names to convert (default: all). */
export function itemsFromDwg(db, { units = null, blocks = null, fileName = '', list = false } = {}) {
  const candidates = blockCandidates(db);
  const notes = [];
  const u = drawingUnits(db, units);
  if (u.note) notes.push(u.note);
  if (list) return { items: [], notes, candidates };
  const want = blocks && blocks.length ? new Set(blocks.map((b) => b.toLowerCase())) : null;
  const items = [];
  for (const c of candidates) {
    if (want && !want.has(c.name.toLowerCase()) && !want.has(c.key)) continue;
    if (!c.entities) { notes.push(msg('libitem.block.empty', { name: c.name })); continue; }
    const r = itemFromBlock(db, c.name, { units, fileName, candidate: c });
    if (r.item) { r.item._key = c.key; items.push(r.item); }
    for (const n of r.notes) notes.push(c.name + ': ' + n);
  }
  if (want) for (const w of want) if (!candidates.some((c) => c.name.toLowerCase() === w || c.key === w)) notes.push(msg('libitem.block.not_in_drawing', { name: w }));
  return { items, notes, candidates };
}

/**
 * One block → an item: nested inserts exploded (layer 0 / by-block colour inherit from the insert), units → mm,
 * plan entities, params from the attributes (its own, or the KCL item tag that names it), source_attrs, and a body:
 * the block's 3D faces as a mesh when it has them, else a box from the plan with the height from the attributes, else null.
 */
export function itemFromBlock(db, name, { units = null, fileName = '', candidate = null } = {}) {
  const notes = [];
  const blocks = new Map((db.blocks || []).map((b) => [b.name, b]));
  for (const b of db.blocks || []) { const n = itemBlockName(b, db.blocks); if (n !== b.name && !blocks.has(n)) blocks.set(n, b); }
  // 0.5 DB.11: "Sink: Double bowl" (a state candidate) is found through the candidates when no candidate was handed in
  if (!candidate && !blocks.has(name)) candidate = blockCandidates(db).find((x) => x.name === name) || null;
  const blk = blocks.get(candidate?.block || name);
  if (!blk) return { item: null, notes: [msg('libitem.block.missing', { name })] };
  // one visibility state of a dynamic block — its own objects only, whatever state the definition was saved in
  const only = candidate?.state ? (visibilityStates(blk) || []).find((x) => x.name === candidate.state)?.handles || null : null;
  const u = drawingUnits(db, units);
  const rec = (db.tables?.blockRecords || []).find((r) => r.handle === blk.record);
  const blockUnits = INSUNITS[rec?.insertUnits] || null;
  const mm = units ? u.mm : blockUnits ? UNIT_MM[blockUnits] : u.mm;
  const c = candidate || blockCandidates(db).find((x) => x.name === name);
  const attrs = c ? c.attrs : {};

  const layerTable = new Map((db.tables?.layers || []).map((l) => [l.name, l]));
  const usedLayers = new Map();
  const entities = [], faces = [], skipped = {};
  const skip = (t) => { skipped[t] = (skipped[t] || 0) + 1; };
  const base = blk.base || { x: 0, y: 0, z: 0 };
  // m: 2D affine [a,b,c,d,e,f] in mm; zs: z scale; zo: z offset (mm)
  const root = { m: [mm, 0, 0, mm, -base.x * mm, -base.y * mm], zs: mm, zo: -(base.z || 0) * mm, layer: null, color: null, depth: 0 };

  const P = (m, x, y) => [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]];
  const lin = (m, x, y) => [m[0] * x + m[2] * y, m[1] * x + m[3] * y];
  const det = (m) => m[0] * m[3] - m[1] * m[2];
  const similar = (m) => Math.abs(Math.hypot(m[0], m[1]) - Math.hypot(m[2], m[3])) < 1e-9 * Math.hypot(m[0], m[1]) && Math.abs(m[0] * m[2] + m[1] * m[3]) < 1e-9 * (m[0] * m[0] + m[1] * m[1]);
  const scaleOf = (m) => Math.sqrt(Math.abs(det(m)));
  const ang = (x, y) => { let a = Math.atan2(y, x) / D2R; if (a < 0) a += 360; return r4(a); };
  const colorOf = (e, ctx) => {
    const c = e.color || { index: 256 };
    if (c.rgb !== undefined) return '#' + (c.rgb & 0xffffff).toString(16).padStart(6, '0');
    if (c.index === 0) return ctx.color !== null ? ctx.color : 0;
    if (c.index === undefined || c.index === 256) return null;
    return Math.max(1, Math.min(255, Math.abs(c.index)));
  };
  const layerOf = (e, ctx) => { const l = e.layer || '0'; return l === '0' && ctx.layer ? ctx.layer : l; };
  const push = (ent) => {
    if (entities.length >= LIMITS.entities) { skip(msg('libitem.block.skip.limit')); return; }
    usedLayers.set(ent.layer, true);
    entities.push(ent);
  };
  const polyFrom = (pts, closed, ctx, layer, color) => {
    if (pts.length < 2) return;
    push({ type: 'poly', layer, color, pts: pts.map((q) => q.map(r4)), closed: !!closed });
  };
  const tess = (pts2d, m) => pts2d.map(([x, y]) => P(m, x, y));

  const textEnt = (t, ctx, layer, color, valueOverride) => {   // t: TEXT / ATTRIB fields (value height insert align hAlign vAlign)
    const value = clip(plainText(valueOverride ?? t.value));
    if (!value || !(t.height > 0)) return;
    const m = ctx.m, sy = Math.hypot(m[2], m[3]);
    const aligned = (t.hAlign || 0) !== 0 || (t.vAlign || 0) !== 0;
    const p = aligned && t.align && (t.align.x || t.align.y) ? t.align : t.insert || { x: 0, y: 0 };
    const h = t.height, w = value.length * h * 0.6 * (t.widthFactor || 1), rot = t.rotation || 0;
    const ha = [0, 1, 2, 0, 1, 0][t.hAlign || 0], va = t.hAlign === 4 ? 2 : (t.vAlign || 0);
    const dx = ha === 1 ? -w / 2 : ha === 2 ? -w : 0, dy = va === 2 ? -h / 2 : va === 3 ? -h : 0;
    const lx = p.x + dx * Math.cos(rot) - dy * Math.sin(rot), ly = p.y + dx * Math.sin(rot) + dy * Math.cos(rot);
    const [x, y] = P(m, lx, ly), [ux, uy] = lin(m, Math.cos(rot), Math.sin(rot));
    push({ type: 'text', layer, color, x: r4(x), y: r4(y), h: r4(h * sy), rot: ang(ux, uy), value });
  };

  const emit = (e, ctx) => {
    if (e.invisible) return;
    const layer = layerOf(e, ctx), color = colorOf(e, ctx), m = e.extrusion && e.extrusion.z < -0.5 ? mulA(ctx.m, [-1, 0, 0, 1, 0, 0]) : ctx.m;
    const sim = similar(m), s = scaleOf(m), flip = det(m) < 0;
    switch (e.type) {
      case 'LINE': { const [x1, y1] = P(m, e.start.x, e.start.y), [x2, y2] = P(m, e.end.x, e.end.y); push({ type: 'line', layer, color, x1: r4(x1), y1: r4(y1), x2: r4(x2), y2: r4(y2) }); break; }
      case 'CIRCLE': {
        if (sim) { const [x, y] = P(m, e.center.x, e.center.y); push({ type: 'circle', layer, color, x: r4(x), y: r4(y), r: r4(e.radius * s) }); }
        else polyFrom(tess(sampleArcRad(e.center.x, e.center.y, e.radius, 0, 2 * Math.PI), m), true, ctx, layer, color);
        break;
      }
      case 'ARC': {
        if (sim) {
          const [x, y] = P(m, e.center.x, e.center.y);
          const s0 = lin(m, Math.cos(e.startAngle), Math.sin(e.startAngle)), s1 = lin(m, Math.cos(e.endAngle), Math.sin(e.endAngle));
          const a0 = ang(...s0), a1 = ang(...s1);
          push({ type: 'arc', layer, color, x: r4(x), y: r4(y), r: r4(e.radius * s), a0: flip ? a1 : a0, a1: flip ? a0 : a1 });
        } else polyFrom(tess(sampleArcRad(e.center.x, e.center.y, e.radius, e.startAngle, e.endAngle), m), false, ctx, layer, color);
        break;
      }
      case 'LWPOLYLINE': case 'POLYLINE_2D': case 'POLYLINE_3D': {
        const vs = (e.vertices || []).filter((v) => !(v.flags & 16));
        // The model's `closed` (LWPOLYLINE: the DWG flag 512, not 1 = has extrusion; POLYLINE: flag 1).
        const closed = !!e.closed;
        if (e.type !== 'POLYLINE_3D' && sim) {
          polyFrom(vs.map((v) => { const [x, y] = P(m, v.x, v.y); const b = (v.bulge || 0) * (flip ? -1 : 1); return Math.abs(b) > 1e-9 ? [x, y, b] : [x, y]; }), closed, ctx, layer, color);
        } else {
          const pts = polyPoints(vs.map((v) => [v.x, v.y, e.type === 'POLYLINE_3D' ? 0 : v.bulge || 0]), closed).map(([x, y]) => P(m, x, y));
          polyFrom(pts, closed, ctx, layer, color);
        }
        break;
      }
      case 'ELLIPSE': {
        if (sim) {
          const [cx, cy] = P(m, e.center.x, e.center.y), [mx, my] = lin(m, e.majorAxis.x, e.majorAxis.y);
          let t0 = e.startParam / D2R, t1 = e.endParam / D2R;
          if (flip) { const a = -t1, b = -t0; t0 = a; t1 = b; }
          const full = Math.abs(e.endParam - e.startParam - 2 * Math.PI) < 1e-6;
          push({ type: 'ellipse', layer, color, cx: r4(cx), cy: r4(cy), mx: r4(mx), my: r4(my), ratio: r4(Math.min(1, e.ratio)), t0: full ? 0 : r4(norm360(t0)), t1: full ? 360 : r4(norm360(t1)) });
        } else {
          const len = Math.hypot(e.majorAxis.x, e.majorAxis.y), rot = Math.atan2(e.majorAxis.y, e.majorAxis.x);
          const pts = ellipseSample({ cx: e.center.x, cy: e.center.y, mx: Math.cos(rot) * len, my: Math.sin(rot) * len, ratio: e.ratio, t0: e.startParam / D2R, t1: e.endParam / D2R });
          polyFrom(tess(pts, m), false, ctx, layer, color);
        }
        break;
      }
      case 'SPLINE': polyFrom(tess(splinePoints(e), m), false, ctx, layer, color); break;
      case 'LEADER': polyFrom(tess((e.vertices || []).map((v) => [v.x, v.y]), m), false, ctx, layer, color); break;
      case 'TEXT': textEnt(e, { ...ctx, m }, layer, color); break;
      case 'ATTRIB': { if (e.flags & 1) break; textEnt(e, { ...ctx, m }, layer, color); break; }
      case 'MTEXT': {
        const lines = mtextLines(e.value).filter((l) => l.trim());
        if (!lines.length || !(e.height > 0)) break;
        const rot = e.xAxis && (e.xAxis.x || e.xAxis.y) ? Math.atan2(e.xAxis.y, e.xAxis.x) : (e.rotation || 0);
        const ap = (e.attach || 1) - 1, ha = ap % 3, row = Math.floor(ap / 3), h = e.height, gap = h * 1.667 * (e.lineSpacing || 1);
        const total = gap * (lines.length - 1), top = row === 0 ? -h : row === 1 ? total / 2 - h / 2 : total;
        lines.forEach((ln, i) => {
          const dy = top - gap * i, w = ln.length * h * 0.6, dx = ha === 1 ? -w / 2 : ha === 2 ? -w : 0;
          const x = e.insert.x + dx * Math.cos(rot) - dy * Math.sin(rot), y = e.insert.y + dx * Math.sin(rot) + dy * Math.cos(rot);
          textEnt({ value: ln, height: h, insert: { x, y }, rotation: rot }, { ...ctx, m }, layer, color);
        });
        break;
      }
      case 'POINT': { const [x, y] = P(m, e.position?.x ?? 0, e.position?.y ?? 0); push({ type: 'point', layer, color, x: r4(x), y: r4(y) }); break; }
      case 'SOLID': case 'TRACE': {
        const p4 = e.points || [], c4 = [p4[0], p4[1], p4[3] || p4[2], p4[2]].filter(Boolean);   // DXF order 1,2,3,4 → outline 1,2,4,3
        push({ type: 'hatch', layer, color, loops: [c4.flatMap((p) => P(m, p.x, p.y).map(r4))], solid: true });
        break;
      }
      case 'HATCH': {
        if (!e.solid) { skip('HATCH (pattern)'); break; }
        const loops = hatchLoops(e).map((l) => { const o = []; for (let i = 0; i < l.length; i += 2) o.push(...P(m, l[i], l[i + 1]).map(r4)); return o; }).filter((l) => l.length >= 6);
        if (loops.length) push({ type: 'hatch', layer, color, loops, solid: true });
        break;
      }
      case '3DFACE': {
        const p4 = e.points || [], c3 = p4[2], c4 = p4[3];
        const q = [p4[0], p4[1], c3, c4 || c3].map((p) => [...P(m, p.x, p.y), (p.z || 0) * ctx.zs + ctx.zo]);
        faces.push(q[0], q[1], q[2]);
        if (c4 && (c4.x !== c3.x || c4.y !== c3.y || (c4.z || 0) !== (c3.z || 0))) faces.push(q[0], q[2], q[3]);
        break;
      }
      case 'INSERT': case 'MINSERT': {
        const sub = blocks.get(e.block);
        if (!sub) { skip(msg('libitem.block.skip.missing')); break; }
        if (sub.flags & 4) { skip(msg('libitem.block.skip.xref')); break; }
        if (ctx.depth > 20) { skip(msg('libitem.block.skip.deep')); break; }
        const b = sub.base || { x: 0, y: 0, z: 0 };
        const sx = e.scale?.x || 1, sy = e.scale?.y || 1, sz = e.scale?.z || 1, ip = e.insert;
        const cols = Math.max(1, e.cols || 1), rows = Math.max(1, e.rows || 1);
        for (let r = 0; r < rows; r++) for (let cc = 0; cc < cols; cc++) {
          const local = mulA(mulA([1, 0, 0, 1, ip.x, ip.y], rotA(e.rotation || 0)),
            mulA([sx, 0, 0, sy, 0, 0], [1, 0, 0, 1, -b.x + cc * (e.colSpacing || 0) / sx, -b.y + r * (e.rowSpacing || 0) / sy]));
          const zs = ctx.zs * sz;
          const subCtx = { m: mulA(m, local), zs, zo: ctx.zo + ((ip.z || 0) - (b.z || 0) * sz) * ctx.zs, layer, color, depth: ctx.depth + 1 };
          for (const be of sub.entities || []) if (be.type !== 'ATTDEF') emit(be, subCtx);
        }
        for (const a of e.attribs || []) emit(a, ctx);
        break;
      }
      case 'ATTDEF': break;
      default: skip(e.type === 'UNKNOWN' ? e.dxfName || 'UNKNOWN' : /DIMENSION/.test(e.type) ? 'DIMENSION' : e.type);   // IMAGE, MULTILEADER, ACAD_TABLE, VIEWPORT, …
    }
  };
  for (const e of blk.entities || []) {
    if (e.type === 'ATTDEF') continue;
    if (only) { if (only.has(String(e.handle))) emit({ ...e, invisible: false }, root); continue; }
    emit(e, root);
  }

  const info = attrsInfo(attrs);
  const it = baseItem(info.title || name);
  it.maker = clip(info.maker); it.model = clip(info.model);
  it.description = clip('Block ' + (candidate?.state ? (candidate.block || name) + ' (' + candidate.state + ')' : name) + (fileName ? ' in ' + fileName : '') + '.');   // i18n-ignore: item data the converter writes too
  it.plan.layers = [...usedLayers.keys()].map((n) => {
    const l = layerTable.get(n);
    const c = l?.color || { index: 7 };
    const col = c.rgb !== undefined ? '#' + (c.rgb & 0xffffff).toString(16).padStart(6, '0') : Math.max(1, Math.min(255, Math.abs(c.index ?? 7) || 7));
    return { name: clip(n, 255) || '0', color: col };
  });
  it.plan.entities = entities;
  it.params = paramsFromAttrs(attrs, { mmPerUnit: mm });
  it.source_attrs = sourceAttrs(attrs);
  const b = planBounds(it.plan);
  if (b) { if (!it.params.width) it.params.width = r4(b.maxX - b.minX); if (!it.params.depth) it.params.depth = r4(b.maxY - b.minY); }
  if (faces.length >= 6 && faces.some((p) => Math.abs(p[2] - faces[0][2]) > 1e-6)) {
    const positions = [], indices = [], seen = new Map();
    for (const p of faces) {
      const k = p.map(r4).join(',');
      let i = seen.get(k);
      if (i === undefined) { i = positions.length / 3; seen.set(k, i); positions.push(...p.map(r4)); }
      indices.push(i);
    }
    if (indices.length / 3 <= LIMITS.triangles) {
      it.body = { type: 'mesh', positions, indices };
      let zMin = Infinity, zMax = -Infinity;
      for (let i = 2; i < positions.length; i += 3) { zMin = Math.min(zMin, positions[i]); zMax = Math.max(zMax, positions[i]); }
      if (!it.params.height) it.params.height = r4(zMax - zMin);
      notes.push(msg('libitem.block.faces_body', { n: faces.length / 3 }));
      if (!entities.length) {
        const hull = convexHull(faces.map((p) => [p[0], p[1]]));
        if (hull.length >= 3) { it.plan.entities.push({ type: 'poly', layer: '0', color: null, pts: hull, closed: true }); if (!it.plan.layers.length) it.plan.layers.push({ name: '0', color: 7 }); }
      }
    } else notes.push(msg('libitem.block.faces_over'));
  } else if (it.params.height) {
    it.body = boxFromPlan(it.plan, it.params.height);
    notes.push(msg('libitem.block.box_body', { h: Math.round(it.params.height) }));
  } else notes.push(msg('libitem.block.no_height'));
  if (!entities.length) notes.push(msg('libitem.block.draws_nothing'));
  const sk = Object.entries(skipped);
  if (sk.length) notes.push(msg('libitem.block.not_converted', { list: sk.map(([t, n]) => t + ' ' + n).join(', ') }));
  const sug = suggestCategory(info.title || name);
  if (sug) { it.category = sug; notes.push(msg('libitem.category.suggested_from', { category: sug, from: info.title || name })); }
  else { it.category = Object.keys(attrs).some((k) => /^KCL-/i.test(k)) ? 'foodservice/other' : 'other/other'; notes.push(msg('libitem.category.set', { category: it.category })); }
  if (c && c.attrs_from === 'item tag') notes.push(msg('libitem.block.from_tag'));   // i18n-ignore: an internal value, never shown
  return { item: it, notes };
}

function norm360(a) { let x = a % 360; if (x < 0) x += 360; return x; }
function mulA(p, q) {
  return [p[0] * q[0] + p[2] * q[1], p[1] * q[0] + p[3] * q[1], p[0] * q[2] + p[2] * q[3], p[1] * q[2] + p[3] * q[3],
    p[0] * q[4] + p[2] * q[5] + p[4], p[1] * q[4] + p[3] * q[5] + p[5]];
}
function rotA(r) { const c = Math.cos(r), s = Math.sin(r); return [c, s, -s, c, 0, 0]; }
function sampleArcRad(cx, cy, r, a0, a1) {
  let sweep = a1 - a0;
  while (sweep <= 0) sweep += 2 * Math.PI;
  const n = Math.max(8, Math.ceil(sweep / (5 * D2R))), out = [];
  for (let i = 0; i <= n; i++) { const a = a0 + sweep * i / n; out.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); }
  return out;
}
function splinePoints(e) {
  if (e.fit && e.fit.length > 1) return e.fit.map((p) => [p.x, p.y]);
  const cp = e.control || [], k = e.knots || [], p = e.degree || 3;
  if (cp.length < 2) return [];
  if (k.length !== cp.length + p + 1) return cp.map((q) => [q.x, q.y]);
  const w = e.weights && e.weights.length === cp.length ? e.weights : null;
  const lo = k[p], hi = k[k.length - p - 1], n = Math.max(16, cp.length * 8), pts = [];
  for (let s = 0; s <= n; s++) {
    const u = s === n ? hi - 1e-9 * (hi - lo) : lo + (hi - lo) * (s / n);
    let span = p;
    while (span < cp.length - 1 && u >= k[span + 1]) span++;
    const d = [];
    for (let j = 0; j <= p; j++) { const q = cp[span - p + j], wt = w ? w[span - p + j] : 1; d.push([q.x * wt, q.y * wt, wt]); }
    for (let r = 1; r <= p; r++) for (let j = p; j >= r; j--) {
      const i = span - p + j, den = k[i + p - r + 1] - k[i], a = den === 0 ? 0 : (u - k[i]) / den;
      d[j] = [(1 - a) * d[j - 1][0] + a * d[j][0], (1 - a) * d[j - 1][1] + a * d[j][1], (1 - a) * d[j - 1][2] + a * d[j][2]];
    }
    pts.push([d[p][0] / d[p][2], d[p][1] / d[p][2]]);
  }
  return pts;
}
function hatchLoops(e) {
  const loops = [];
  for (const loop of e.loops || []) {   // angles in radians; a clockwise arc keeps its angles mirrored (DXF 73 = 0)
    if (loop.polyline) { loops.push(polyPoints((loop.polyline.vertices || []).map((v) => [v.x, v.y, v.bulge || 0]), true).flat()); continue; }
    const pts = [];
    for (const ed of loop.edges || []) {
      if (ed.type === 'line') pts.push(ed.start.x, ed.start.y, ed.end.x, ed.end.y);
      else if (ed.type === 'arc') {
        const s = ed.startAngle, f = ed.endAngle;
        const arc = ed.ccw === false ? sampleArcRad(ed.center.x, ed.center.y, ed.radius, -f, -s).reverse() : sampleArcRad(ed.center.x, ed.center.y, ed.radius, s, f);
        for (const [x, y] of arc) pts.push(x, y);
      }
    }
    if (pts.length >= 6) loops.push(pts);
  }
  return loops;
}
const SPECIAL = { '%%c': 'ø', '%%C': 'ø', '%%d': '°', '%%D': '°', '%%p': '±', '%%P': '±', '%%%': '%' };
function plainText(s) {
  return String(s || '').replace(/%%[cCdDpP%]/g, (m) => SPECIAL[m] || '').replace(/%%[uUoO]/g, '')
    .replace(/\\U\+([0-9a-fA-F]{4})/g, (m, h) => String.fromCharCode(parseInt(h, 16)));
}
function mtextLines(s) {
  return plainText(s).replace(/\\P/g, '\n').replace(/\\~/g, ' ').replace(/\\S([^;]*?)[#^/]([^;]*?);/g, '$1/$2')
    .replace(/\\[ACcFfHhQqTtWwp][^;\\]*;/g, '').replace(/\\[LlOoKkNn]/g, '').replace(/[{}]/g, '').replace(/\\\\/g, '\\').split('\n');
}

// ---------------------------------------------------------------------------
// RFA (family file): PartAtom only

/**
 * info = readRevit() result. Title, category, params; geometry is not read (undocumented): a box from W/D/H, else no body.
 * PO.4: the family's types (info.family.types, from the file's own type list) — or opts.types, the rows of a type catalog (.txt)
 * read with parseTypeCatalog — become the item's variants: one row per type with the values that differ between types and, where a
 * type has Width and Depth, its own box. One type only: its values fill the item (most families keep their sizes on the type).
 */
export function itemFromRfa(info, opts = {}) {
  const fam = info && info.family;
  if (!fam) return { items: [], notes: [msg('libitem.rfa.no_family')] };
  const notes = [];
  const it = baseItem(fam.title || info.fileName || 'Family');
  const params = {};
  for (const g of fam.groups || []) for (const p of g.params || []) if (p.name && p.value !== undefined && p.value !== '') params[p.name] = String(p.value);
  const types = (Array.isArray(opts.types) && opts.types.length ? opts.types : fam.types || []).filter((t) => t && t.name).slice(0, VARIANT_LIMITS.rows);
  if ((opts.types || []).length > VARIANT_LIMITS.rows || (fam.types || []).length > VARIANT_LIMITS.rows) notes.push(msg('libitem.rfa.types_cut', { n: VARIANT_LIMITS.rows }));
  const typeParams = (t) => { const o = {}; for (const p of t.params || []) if (p.name && p.value !== undefined && p.value !== '') o[p.name] = String(p.value); return o; };
  const first = types.length ? typeParams(types[0]) : {};
  const all = { ...params, ...first };   // the first type is the default: its values win over the family's own
  it.source_attrs = sourceAttrs(all);
  const sizeIn = (o) => {
    const find = (...names) => { for (const n of names) for (const k of Object.keys(o)) if (k.toLowerCase() === n) { const v = parseLength(o[k], 304.8); if (Number.isFinite(v) && v > 0) return v; } return null; };
    return { w: find('width', 'overall width', 'length'), d: find('depth', 'overall depth'), h: find('height', 'overall height') };   // i18n-ignore: parameter names in the file
  };
  const { w, d, h } = sizeIn(all);
  const pinfo = attrsInfo({ MANUFACTURER: all.Manufacturer || '', MODEL: all.Model || '' });
  it.maker = clip(pinfo.maker); it.model = clip(pinfo.model);
  it.description = clip('Family ' + (fam.title || '') + (fam.categories?.length ? ' (' + fam.categories.join(', ') + ')' : '') + '.');
  if (w && d) {
    boxItemGeometry(it, w, d, h || 0, 0, it.name);
    notes.push(msg(h ? 'libitem.rfa.box' : 'libitem.rfa.outline'));
  } else {
    it.body = null;
    notes.push(msg('libitem.rfa.no_geometry'));
  }
  if (types.length > 1) {
    // columns: the parameters whose value is not the same in every type (the rest are the item's own data)
    const per = types.map(typeParams);
    const names = [];
    for (const o of per) for (const k of Object.keys(o)) if (!names.includes(k)) names.push(k);
    const differs = names.filter((k) => per.some((o) => (o[k] ?? '') !== (per[0][k] ?? '')));
    const cols = [], used = new Set();
    for (const k of differs.slice(0, VARIANT_LIMITS.columns)) {
      let key = k.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 70) || 'value', n = 2;
      while (used.has(key)) key = key.replace(/_\d+$/, '') + '_' + n++;
      used.add(key);
      cols.push({ key, label: clip(k, 80), name: k });
    }
    if (differs.length > VARIANT_LIMITS.columns) notes.push(msg('libitem.rfa.columns_cut', { n: VARIANT_LIMITS.columns }));
    if (!cols.length) cols.push({ key: 'type', label: 'Type', name: null });   // i18n-ignore: item data
    const ids = new Set();
    const rows = types.map((t, i) => {
      let id = String(t.name).replace(/[^A-Za-z0-9_.-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 54) || 'type', n = 2;
      while (ids.has(id)) id = id.replace(/-\d+$/, '') + '-' + n++;
      ids.add(id);
      const o = per[i], row = { id, name: clip(t.name, 120), values: {} };
      for (const c of cols) row.values[c.key] = c.name === null ? clip(t.name, 120) : clip(o[c.name] ?? '', 200);
      const sz = sizeIn({ ...params, ...o });
      if (sz.w && sz.d) {
        row.footprint = { x: r4(-sz.w / 2), y: r4(-sz.d), w: r4(sz.w), d: r4(sz.d) };
        row.body = sz.h ? { type: 'box', x: r4(-sz.w / 2), y: r4(-sz.d), z: 0, w: r4(sz.w), d: r4(sz.d), h: r4(sz.h) } : null;
      }
      return row;
    });
    it.variants = { columns: cols.map(({ key, label }) => ({ key, label })), rows, default: rows[0].id };
    notes.push(msg(opts.types ? 'libitem.rfa.types_catalog' : 'libitem.rfa.types', { n: rows.length }));
  } else if (types.length === 1 && types[0].name && types[0].name !== fam.title) {
    notes.push(msg('libitem.rfa.one_type', { name: clip(types[0].name, 120) }));
  }
  const sug = suggestCategory((fam.categories || []).join(' ') + ' ' + it.name);
  if (sug) { it.category = sug; notes.push(msg('libitem.category.suggested_family', { category: sug })); }
  else notes.push(msg('libitem.category.set', { category: 'other/other' }));
  if (/furniture/i.test((fam.categories || []).join(' '))) { it.kind = 'furniture'; it.category = sug || 'furniture/other'; }
  return { items: [it], notes };
}

/**
 * PO.4: a type catalog — the .txt file that sits beside a family file with the same name, one line per type.
 * First line: an empty cell, then "Name##kind##unit" per column (e.g. Width##LENGTH##MILLIMETERS); each later line: the type's name,
 * then its values. Comma-separated, quotes as in CSV. → [{name, params[{name, value}]}] (a length carries its unit so parseLength reads it);
 * [] when the text is not a type catalog.
 */
export function parseTypeCatalog(text) {
  const rows = csvRows(String(text || '').replace(/^﻿/, ''));
  if (rows.length < 2 || !rows[0].slice(1).some((c) => /##/.test(c))) return [];
  const UNIT = { millimeters: 'mm', centimeters: 'cm', meters: 'm', inches: 'in', feet: 'ft', decimal_inches: 'in', decimal_feet: 'ft' };
  const cols = rows[0].slice(1).map((c) => { const [name, kind = '', unit = ''] = String(c).split('##'); return { name: name.trim(), kind: kind.trim().toLowerCase(), unit: UNIT[unit.trim().toLowerCase().replace(/\s+/g, '_')] || '' }; });
  const out = [];
  for (const r of rows.slice(1)) {
    const name = String(r[0] ?? '').trim();
    if (!name) continue;
    const params = [];
    cols.forEach((c, i) => {
      const v = String(r[i + 1] ?? '').trim();
      if (!c.name || v === '') return;
      params.push({ name: c.name, value: c.kind === 'length' && c.unit && /^-?\d+(\.\d+)?$/.test(v) ? v + ' ' + c.unit : v });
    });
    out.push({ name, params });
    if (out.length >= 500) break;
  }
  return out;
}
function csvRows(text) {
  const rows = []; let row = [], cell = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (q) { if (ch === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; } else cell += ch; }
    else if (ch === '"') q = true;
    else if (ch === ',') { row.push(cell); cell = ''; }
    else if (ch === '\n' || ch === '\r') { if (ch === '\r' && text[i + 1] === '\n') i++; row.push(cell); cell = ''; if (row.some((c) => c !== '')) rows.push(row); row = []; }
    else cell += ch;
  }
  row.push(cell); if (row.some((c) => c !== '')) rows.push(row);
  return rows;
}

/**
 * PO.4: a family file's data on another file's shape. `data` = the item made from the .rfa (name, maker, model, category, parameters,
 * types); `shape` = an item read from an IFC, glTF or OBJ file of the same name (its real geometry). The result is the family's
 * item with that plan and body; its types keep their values but lose their stand-in boxes (one shape was given, not one per type).
 */
export function itemWithShape(data, shape) {
  const out = { ...data, plan: shape.plan, body: shape.body, clearances: shape.clearances || data.clearances || [] };
  if (shape.ports) out.ports = shape.ports;
  const b = bodyBox(shape.body);
  out.params = { ...(data.params || {}) };
  if (b) { out.params.width = b.w; out.params.depth = b.d; out.params.height = b.h; }
  if (shape.ifc && shape.ifc.class && shape.ifc.class !== 'IfcBuildingElementProxy') out.ifc = shape.ifc;
  if (data.variants) out.variants = { ...data.variants, rows: data.variants.rows.map(({ body, footprint, ...r }) => r) };
  return out;
}

// ---------------------------------------------------------------------------
// Preview

/**
 * Linetype by layer name (format 1 has no linetype field; documented on /library/format and in the spec §1).
 * Same rules as the website's LibraryPreview: 'clear' (door swings, service space: light dashed), 'hidden' (hidden,
 * above or below the cut: dashed), 'center' (centre lines), 'thin' (detail), '' (object lines).
 */
export function layerLinetype(name) {
  const n = String(name || '');
  if (/clear|swing|service/i.test(n)) return 'clear';
  if (/hidden|dashed|above|below/i.test(n)) return 'hidden';
  if (/center|centre/i.test(n)) return 'center';
  if (/detail|thin|fine/i.test(n)) return 'thin';
  return '';
}

/** '72"', '25½"' for whole/eighth inches, else mm ('762'). */
export function lengthLabel(mm, inches) {
  if (!inches) return String(Math.round(mm));
  const e = Math.round(mm / 25.4 * 8), whole = Math.floor(e / 8), frac = ['', '⅛', '¼', '⅜', '½', '⅝', '¾', '⅞'][e % 8];
  return (whole > 0 || !frac ? String(whole) : '') + frac + '"';
}
const isEighths = (mm) => mm > 0 && Math.abs(mm / 25.4 * 8 - Math.round(mm / 25.4 * 8)) * 25.4 / 8 < 0.05;

/**
 * The plan as a standalone SVG file (converter preview.svg, app panels): a 480×360 tile on white, fixed ink, one
 * scale, drawing centred with even margins; non-scaling strokes 1.5 (the outline matching the body footprint), 1
 * (other object lines), 0.6 (detail, hidden, centre, clearance); linetype by layer name; light fill on the footprint;
 * overall width and depth as small dimension strings with 45° ticks and a small "Front" marker. Plan text is kept
 * small (6–11 px); clearance boxes are left out (the website's item page draws them).
 */
export function previewSvg(item) {
  const TW = 480, TH = 360, M = 46, INK = '#17202B';
  const plan = item.plan || { entities: [] };
  const ents = (plan.entities || []).filter((e) => e && e.type !== 'text');
  const body = item.body && item.body.type === 'box' ? item.body : null;
  const foot = body ? [body.x, body.y, body.x + body.w, body.y + body.d] : null;
  const bbOf = (pts) => pts.length ? [Math.min(...pts.map((p) => p[0])), Math.min(...pts.map((p) => p[1])), Math.max(...pts.map((p) => p[0])), Math.max(...pts.map((p) => p[1]))] : null;
  const prims = ents.map((e) => ({ e, style: layerLinetype(e.layer), bb: bbOf(entityPoints(e).filter(([x, y]) => Number.isFinite(x) && Number.isFinite(y))) })).filter((p) => p.bb);
  const union = (a, b) => (a ? (b ? [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[2], b[2]), Math.max(a[3], b[3])] : a) : b);
  let pb = null;
  for (const p of prims) pb = union(pb, p.bb);
  let bb = union(pb, foot) || [-50, -50, 50, 50];
  const ref = foot || prims.filter((p) => p.style !== 'clear' && p.style !== 'center').reduce((a, p) => union(a, p.bb), null) || bb;
  const tol = Math.max(1, 0.006 * Math.max(ref[2] - ref[0], ref[3] - ref[1]));
  const closed = (e) => (e.type === 'poly' && e.closed) || e.type === 'circle' || (e.type === 'ellipse' && ((e.t1 - e.t0) % 360 === 0));
  const outline = prims.find((p) => closed(p.e) && ['', 'hidden', 'thin'].includes(p.style) && p.bb.every((v, i) => Math.abs(v - ref[i]) <= tol)) || null;

  const w = Math.max(bb[2] - bb[0], 1e-6), h = Math.max(bb[3] - bb[1], 1e-6);
  const s = Math.min((TW - 2 * M) / w, (TH - 2 * M) / h), ox = (TW - w * s) / 2, oy = (TH - h * s) / 2;
  const f = (v) => String(Math.round(v * 10) / 10);
  const X = (x) => f(ox + (x - bb[0]) * s), Y = (y) => f(oy + (bb[3] - y) * s);
  const pathOf = (pts, close) => 'M' + pts.map(([x, y]) => X(x) + ',' + Y(y)).join('L') + (close ? 'Z' : '');
  const dOf = (e) => {
    if (e.type === 'line') return 'M' + X(e.x1) + ',' + Y(e.y1) + 'L' + X(e.x2) + ',' + Y(e.y2);
    if (e.type === 'arc') return pathOf(arcSample(e.x, e.y, e.r, e.a0, e.a1), false);
    if (e.type === 'poly') return pathOf(polyPoints(e.pts, e.closed), e.closed);
    if (e.type === 'ellipse') return pathOf(ellipseSample(e), false);
    if (e.type === 'hatch') return e.loops.map((l) => { const p = []; for (let i = 0; i < l.length; i += 2) p.push([l[i], l[i + 1]]); return pathOf(p, true); }).join('');
    return '';
  };
  const cls = (p) => ({ clear: 'cr', hidden: p === outline ? 'hdk' : 'hd', center: 'cl', thin: 't' }[p.style] || (p === outline ? 'k' : 'm'));
  const order = { clear: 0, center: 1, hidden: 2, thin: 3, '': 4 };
  const parts = [];
  if (outline && outline.style !== 'hidden') parts.push(outline.e.type === 'circle'
    ? '<circle class="fl" cx="' + X(outline.e.x) + '" cy="' + Y(outline.e.y) + '" r="' + f(outline.e.r * s) + '"/>'
    : '<path class="fl" d="' + dOf(outline.e) + '"/>');
  else if (!outline && foot) parts.push('<path class="fl" d="' + pathOf([[foot[0], foot[1]], [foot[2], foot[1]], [foot[2], foot[3]], [foot[0], foot[3]]], true) + '"/>');
  const sorted = prims.map((p, i) => [p, i]).sort((a, b) => ((a[0] === outline ? 9 : order[a[0].style]) - (b[0] === outline ? 9 : order[b[0].style])) || a[1] - b[1]);
  for (const [p] of sorted) {
    const e = p.e;
    if (e.type === 'circle') parts.push('<circle class="' + cls(p) + '" cx="' + X(e.x) + '" cy="' + Y(e.y) + '" r="' + f(Math.max(0.3, e.r * s)) + '"/>');
    else if (e.type === 'point') parts.push('<circle class="f" cx="' + X(e.x) + '" cy="' + Y(e.y) + '" r="1.5"/>');
    else if (e.type === 'hatch') parts.push('<path class="f" fill-opacity=".25" d="' + dOf(e) + '"/>');
    else parts.push('<path class="' + cls(p) + '" d="' + dOf(e) + '"/>');
  }
  for (const e of plan.entities || []) {
    if (!e || e.type !== 'text' || !Number.isFinite(e.x) || !Number.isFinite(e.y)) continue;
    const fs = Math.max(6, Math.min(11, (e.h || 0) * s));
    parts.push('<text x="' + X(e.x) + '" y="' + Y(e.y) + '" font-size="' + f(fs) + '"' + (e.rot ? ' transform="rotate(' + f(-e.rot) + ' ' + X(e.x) + ' ' + Y(e.y) + ')"' : '') + '>' + esc(String(e.value).slice(0, 120)) + '</text>');
  }
  // Overall dimensions on the footprint (else the outline / plan bounds) and the front marker.
  const R = foot || (outline ? outline.bb : pb);
  if (R && R[2] > R[0] && R[3] > R[1]) {
    const inch = isEighths(R[2] - R[0]) && isEighths(R[3] - R[1]);
    const l = +X(R[0]), r = +X(R[2]), t = +Y(R[3]), b = +Y(R[1]), dy = oy - 18, dx = ox + w * s + 20;
    parts.push('<path class="t" d="M' + f(l) + ',' + f(t - 3) + 'V' + f(dy - 4) + 'M' + f(r) + ',' + f(t - 3) + 'V' + f(dy - 4) + 'M' + f(l - 4) + ',' + f(dy) + 'H' + f(r + 4)
      + 'M' + f(r + 3) + ',' + f(t) + 'H' + f(dx + 4) + 'M' + f(r + 3) + ',' + f(b) + 'H' + f(dx + 4) + 'M' + f(dx) + ',' + f(t - 4) + 'V' + f(b + 4) + '"/>');
    parts.push('<path class="tk" d="M' + f(l - 3) + ',' + f(dy + 3) + 'l6,-6M' + f(r - 3) + ',' + f(dy + 3) + 'l6,-6M' + f(dx - 3) + ',' + f(t + 3) + 'l6,-6M' + f(dx - 3) + ',' + f(b + 3) + 'l6,-6"/>');
    parts.push('<text text-anchor="middle" x="' + f((l + r) / 2) + '" y="' + f(dy - 5) + '">' + esc(lengthLabel(R[2] - R[0], inch)) + '</text>');
    parts.push('<text text-anchor="middle" transform="translate(' + f(dx + 13) + ' ' + f((t + b) / 2) + ') rotate(-90)">' + esc(lengthLabel(R[3] - R[1], inch) + (inch ? '' : ' mm')) + '</text>');
    const fy = oy + h * s + 8, fx = (l + r) / 2;
    parts.push('<path class="f" d="M' + f(fx - 4) + ',' + f(fy + 7) + 'H' + f(fx + 4) + 'L' + f(fx) + ',' + f(fy) + 'Z"/>');
    parts.push('<text text-anchor="middle" x="' + f(fx) + '" y="' + f(fy + 19) + '">Front</text>');
  }
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + TW + ' ' + TH + '" width="' + TW + '" height="' + TH + '">'
    + '<style>path,circle{vector-effect:non-scaling-stroke}.k,.m,.t,.hd,.hdk,.cl,.cr,.tk{fill:none;stroke:' + INK + ';stroke-linecap:butt;stroke-linejoin:miter}'
    + '.k{stroke-width:1.5}.m{stroke-width:1}.t,.tk{stroke-width:.6}.hd{stroke-width:.6;stroke-dasharray:4 2.5}.hdk{stroke-width:1.2;stroke-dasharray:6 3}'
    + '.cl{stroke-width:.6;stroke-dasharray:12 3 2 3}.cr{stroke-width:.6;stroke-dasharray:2 2.5;stroke-opacity:.65}.fl{fill:' + INK + ';fill-opacity:.06;stroke:none}'
    + '.f{fill:' + INK + ';stroke:none}text{fill:' + INK + ';font-family:Helvetica,Arial,sans-serif;font-size:11px;font-weight:600;font-variant-numeric:tabular-nums}</style>'
    + '<rect width="' + TW + '" height="' + TH + '" fill="#fff"/>' + parts.join('') + '</svg>';
}

/** Strip working fields (a leading underscore) before an item is written or hashed. */
// ---------------------------------------------------------------------------
// Other languages (0.6 WL.7)

const LOCALE_RE = /^[a-z]{2,3}(-[A-Z][a-z]{3})?(-([A-Z]{2}|[0-9]{3}))?$/;   // es, es-MX, pt-BR, zh-Hant-TW, es-419
const LABEL_KEY_RE = /^[A-Za-z0-9_.:-]{1,80}$/;   // width, elec.volts, attr:KCL-MFR (a source attribute's own name)
const I18N_MAX = 40;
export const I18N_LIMITS = { locales: I18N_MAX };

/** The tags to try for a locale, most specific first: 'zh-Hant-TW' → ['zh-Hant-TW', 'zh-Hant', 'zh']. */
export function localeChain(locale) {
  const parts = String(locale || '').split('-').filter(Boolean);
  const out = [];
  for (let n = parts.length; n > 0; n--) out.push(parts.slice(0, n).join('-'));
  return out;
}

/**
 * An item's words in a language, each falling back on its own: the exact tag, then the shorter ones, then the item's own text.
 * → { locale (the tag that answered, or null), name, description, type (null when none), label(key, fallback) }
 */
export function localized(item, locale) {
  const i18n = item && typeof item.i18n === 'object' && item.i18n && !Array.isArray(item.i18n) ? item.i18n : {};
  const chain = localeChain(locale).filter((t) => i18n[t] && typeof i18n[t] === 'object');
  const pick = (k) => { for (const t of chain) { const v = i18n[t][k]; if (typeof v === 'string' && v.trim()) return v; } return null; };
  const name = pick('name'), description = pick('description'), type = pick('type');
  return {
    locale: chain[0] || null,
    name: name ?? item?.name ?? '',
    description: description ?? item?.description ?? '',
    type,
    translated: !!(name || description || type),
    label(key, fallback = key) {
      for (const t of chain) { const v = i18n[t].params?.[key]; if (typeof v === 'string' && v.trim()) return v; }
      return fallback;
    },
  };
}

/**
 * The item to place in a language: name and description in that language where the item has them (so the placement's name,
 * its schedule rows and the drawing's attributes read in it); everything else, i18n included, unchanged. Same object when
 * nothing is translated. Identity stays with uuid, version and provenance, never the name.
 */
export function localizedItem(item, locale) {
  const l = localized(item, locale);
  if (!l.translated) return item;
  return { ...item, name: l.name, description: l.description };
}

export function cleanItem(item) {
  const out = {};
  for (const [k, v] of Object.entries(item)) if (!k.startsWith('_')) out[k] = v;
  return out;
}

/**
 * BK.98: a project template or a Quick Kit as a format-1 library item, ready to upload at /library/upload (the same submission flow as every item:
 * review, licence, attestation; the Library fills uuid, version, licence and provenance). Pure; both apps' pickers and the tools call it.
 *   kitItem({ type: 'project-template', name, app, summary, ifcText, version = '0.1.0', added = ['First version'], date, description })
 *   kitItem({ type: 'quick-kit', name, apps, summary, members: [{ uuid, name }], version, added, date, description })
 * -> { ok, item, errors[] }: the item is checked with validateItem(partial) before it is handed back.
 */
export function kitItem({ type, name, app = '', apps = [], summary = '', ifcText = '', members = [], version = '0.1.0', added = ['First version'], date = null, description = '' } = {}) {
  const day = date || new Date().toISOString().slice(0, 10);
  const kit = { type };
  if (type === 'project-template') { kit.app = app; kit.file = { format: 'ifc-step', data: String(ifcText) }; }
  else { if (apps.length) kit.apps = apps; kit.members = members.map((m) => (m.name ? { uuid: m.uuid, name: String(m.name).slice(0, LIMITS.text) } : { uuid: m.uuid })); }
  if (summary) kit.summary = String(summary).slice(0, LIMITS.text);
  kit.version = version;
  kit.changelog = [{ version, date: day, added: added.filter(Boolean) }];
  const item = {
    format: FORMAT, format_version: FORMAT_VERSION, name: String(name || '').slice(0, 200), kind: 'kit', category: type === 'project-template' ? 'kits/templates' : 'kits/quick',
    ...(description ? { description: String(description).slice(0, LIMITS.text) } : {}), plan: { layers: [], entities: [] }, body: null, params: {}, kit,
  };
  const v = validateItem(item, { partial: true });
  return { ok: v.ok, item, errors: v.errors };
}
