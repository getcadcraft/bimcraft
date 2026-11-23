---
title: Dome generator: getting started
summary: Make a thin concrete shell dome from its diameter and height: a spherical or elliptical shell sprayed inside an inflated form over foam, on a stem wall and ring beam, with framed openings, quantities, forces under weight, snow, wind and earthquake, bending, a buckling figure and an IFC file. Metric or feet and inches. A drawing aid, not a design.
section: start
order: 1
keywords: dome, wind, earthquake, seismic, snow, bending, buckling, load factors, feet, inches, imperial, rebar, bars, concrete shell, thin shell, monolithic dome, sprayed concrete, shotcrete, inflated form, foam, ellipsoid, sphere, hemisphere, stem wall, ring beam, membrane forces, ring tension, IFC, quantities, add-on
---

## What you'll do

1. Switch the add-on on in {{ui:Settings}} › {{ui:Add-ons}}, then open the **Dome generator** tab.
2. Under **Shape**, choose the curve (part of a sphere, or half an ellipse), and type the diameter, the height of the curve and, if you want the dome to start above the ground, a stem wall height. All in millimetres.
3. Under **Openings**, set each door or window: where it stands round the dome (an angle), its width, height and sill.
4. Read the **Result**: the plan and the section, the quantities (form surface, foam, sprayed concrete, ring beam, floor slab, an estimate of the steel), the clear inside (floor area, usable floor with headroom, height, volume) and the forces.
5. Press **Save as an IFC file** for the 3D model, or **Save the report (CSV)** for the figures.

## What the dimensions mean

The diameter and the height are those of the **inflated form**, which is the outside of the foam. The foam is sprayed on the inside of the form and the concrete on the inside of the foam, so the room inside is smaller than the form. The result gives the clear diameter, height, floor area and volume.

- **Part of a sphere**: at most half a sphere. A height below half the diameter gives a low dome that pushes outward on its ring.
- **Half an ellipse**: flatter than a half sphere, or taller.
- **Stem wall**: a straight wall under the curve, in the same layers.
- The shell is thinnest at the crown. **Extra thickness at the base** makes it grow evenly toward the bottom.

## Where the figures come from

Shell thickness, cover, concrete strength, the steel ratio and the load factors are set by norms. The generator holds **no norm values**. Leave those boxes empty and each one is filled:

- from the **spec** you picked, when a spec add-on is switched on and has a value for it, or
- from a **starting figure**, which is a round number so that something is drawn. A starting figure is not from any standard, and the box says so.

Type your own figure in a box to overrule either. The result then says when your figure breaks the spec.

## Specs are side add-ons

Add **Dome spec: United States** or **Dome spec: Europe** in {{ui:Settings}} › {{ui:Add-ons}}, then pick it under **Spec**. The table under the picker lists every rule in the spec with its standard, its clause and how we read it: in the standard itself, in a document that quotes the standard, or not at all. Many rules are sentences, not numbers (buckling, how a shell may be analysed, wind and snow on domes, sprayed concrete testing, foam and fire, frost): they are there for you and your engineer to read, and the ones that most need a decision come up as notes under Checks. Check each value against the current edition and your local amendments before you rely on it.

## Units

Under **Shape**, **Units** switches every box and every result between millimetres and kilonewtons, and feet, inches and pounds. The dome does not change: only how it is shown.

## Openings with frames, and bars

Under **Openings**, a frame width and a frame extra thickness put a band of thicker concrete round every opening: at each side, over the head and under the sill. Under **Concrete shell**, a bar size and a spacing count one mat of bars at that spacing both ways over the shell, and the result says what steel ratio that gives at the crown and at the base.

## The forces

Under **Loads for the first forces** you set the snow load, a wind pressure, an earthquake force as a share of the weight, the concrete's stiffness, how the base is held, and a steel stress. Under **Load factors**, the factors are 1 until a spec fills them from its code or you type your own; the result always says whether the forces are factored. The result then gives:

- **Membrane forces** for own weight and for own weight with snow: the force along the curve and round the dome at nine heights, the largest compression, where tension round the dome begins, the outward push and ring tension at the springline, and the pressure under the ring beam.
- **Wind and earthquake**: the forces each adds along the curve, round the dome and in shear, the sideways force and overturning at the floor, and whether one side of the base lifts when own weight is at its least.
- **Bending**: the shell solved with its bending for the loads that are the same all the way round. This is where the moment at the ring beam, at the top of a stem wall and where the thickness changes comes from, with the tension in the ring beam, the largest stresses and how far the crown drops. Choose whether the base is fixed to the ring beam, held but free to turn, or free to spread against the ring beam.
- **Buckling**: the pressure a perfect shell of this shape would buckle at, against the load on it. Real concrete shells buckle far below that; type your engineer's reduction to see the margin that is left.
- **Forces the openings interrupt**: what each opening cuts, for its frame and steel to carry round.

If you type a steel stress, each tension is also given as force divided by that stress, as a steel area, and nothing more.

## What it does not do

It does not design the dome. The forces are linear elastic theory for uncracked concrete under simple load patterns. The wind is a textbook pattern, not your code's coefficients; the earthquake is a static sideways force. Bending under wind and earthquake, uneven snow, temperature, shrinkage, cracking and creep are not calculated, and the bending round an opening is not either. The bar count has no laps, no ring beam cage and no bars round openings. Nothing is checked against your site, your soil or your local code. A licensed engineer must design and check the dome.
