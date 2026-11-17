---
title: Stairs and railings
summary: Draw straight, L, U and winder stairs that size their risers and treads from the floor-to-floor height, with handrails and balusters and the stairwell cut in the floor above; draw guardrails along decks and around openings.
section: tasks
order: 23
keywords: spiral, round stair, stair, stairs, staircase, flight, riser, tread, landing, winder, L stair, U stair, switchback, handrail, guardrail, guard, railing, baluster, spindle, newel, post, stairwell, headroom, deck, balcony
---

## What you'll do

Add stairs between levels and railings where people need them. A stair works out its own steps from the height between the levels, keeps them within the usual residential limits, puts handrails on its open sides and cuts its stairwell in the floor above.

## Draw a stair

1. On the level the stair starts from, open {{ui:Build}} and choose {{ui:Stair}}.
2. Choose the kind — **Straight**, **L with a landing**, **U with a landing** or **L with winders** — which way it **turns**, its **width** and where its **handrails** go.
3. Click where the stair starts: the middle of the front edge of the bottom step.
4. Move the pointer the way the stair goes up; the steps follow it, with the number of risers and treads. It snaps to the walls and to 15° steps; hold {{key:Shift}} to keep it square.
5. Click. {{key:Esc}} starts again.

## Draw a spiral stair

1. Open {{ui:Build}}, choose {{ui:Stair}}, then choose **Spiral** as the kind.
2. Set **Turn**, which way it winds going up (left is anticlockwise).
3. Click the center of its post.
4. Click the way the bottom tread points.

It starts 30" wide (the tread, from the post to the outside), with a 4½" post. The risers are worked out from the floor-to-floor height, at most 9½" by default. Treads are 7½" deep on the walk line, 12" out from the post. The handrail runs on the outside.

In **Properties** a spiral stair adds **Center post**, its diameter. The **Tread** field is measured on the walk line. Its checks are labelled defaults for spiral stairs: 26" clear width, at least 6¾" of tread on the walk line, risers at most 9½" and handrails 34"–38". They are not engineering; the building official decides.

## How the steps are worked out

The height between the level's floor and the level above is split into equal risers no higher than 7¾", and each tread is 10" deep (both can be changed in **Properties**). A landing counts as one step; winders are three steps fanned around the inside corner. Change a level's height and every stair on it is worked out again.

:::warning
7¾" risers, 10" treads, 36" width, 6'-8" headroom and 34"–38" handrails are labelled defaults after the usual residential code, not engineering. **Properties** says which are met; your building official decides what applies.
:::

## Change a stair

Pick it (click it on the plan or in the 3D view) and change in **Properties**: its kind and turn, width, highest riser, tread depth, handrails and their height, and **Cut the floor above** for the stairwell. The risers and treads it ended up with are shown underneath.

## The stairwell

When the level above has a floor, the stair cuts it where the steps would have less than 6'-8" of headroom. The cut moves with the stair and goes away when the stair is deleted.

## Draw a railing

1. Open {{ui:Build}} and choose {{ui:Railing}}.
2. Choose **Guardrail** (36" high) or **Handrail** and its height.
3. Click along the edge — a deck, a balcony, around a stairwell — and double-click or press {{key:Enter}} to finish.

Railings get posts at their ends and corners and balusters with gaps under 4". Pick one to change its kind, height or how far above the floor it starts.

## Draw a fence

Choose **Fence** in the same Railing tool, set its height (1800 mm to start with), click along the line of the fence and press {{key:Enter}}.

- The fence gets a post at each end and each corner, and a post at most every 2.4 m between them. A panel fence has a panel between posts; a rail fence has two rails. These sizes are usual choices, not a code requirement: local rules limit a fence's height.
- It is one element in the model (an IfcRailing named Fence) with a property set {{ui:CadCraft_Fence}}: style, height, posts, panels, rails, gates, length and panel area. One undo step.
- Not drawn here: gates (the generator in CivilCraft lays them out), pickets, terrain (the fence stands on the level), and picking a single post.

## What's saved

A stair is saved as an IFC stair made of stair flights (with their risers, treads, riser height and tread length), landings, winders and handrails; the stairwell is an opening in the floor slab above. Railings are IFC railings with their length and their number of balusters and posts.
