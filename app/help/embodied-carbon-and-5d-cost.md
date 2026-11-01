---
title: Embodied carbon and costs on the schedule
summary: Add up the embodied carbon of the model from an open, editable factor table, and spread prices over the 4D schedule into a cost and cash-flow curve. Both start from values you type or import.
section: tasks
order: 39
keywords: embodied carbon, carbon, co2, kgco2e, emissions, factor table, epd, 5d, cost, cash flow, s curve, schedule cost, prices, takeoff prices
---

## Embodied carbon

Open the **Carbon** pane. Each element's quantity (volume, area or length) is multiplied by a factor from the table, by life-cycle module: the product stage is required, transport and waste are optional. Totals come by material, class and storey, and per square metre of floor.

**The factor table is yours.** The rows that come with BimCraft are generic starter values of the right order of magnitude. They are not from a database, are marked unchecked, and need replacing with the source you use (an EPD, a national database, or your firm's figures). Edit rows in the pane, or import and export the table as CSV or JSON. Rows you add override the starter row with the same id. The table is saved in the model.

Elements with no match, or with no quantity, are listed as Problems rather than counted as zero.

## Costs on the 4D schedule

Open the **Cost** pane beside the 4D schedule. Give it prices (type them, import a CSV or JSON, or bring TakeoffCraft's lines), map each price to model materials with keywords, and it prices every task's elements. A task's cost is spread over its start to finish days (even, or front or back loaded), and the pane draws the cumulative cash-flow curve by day, week or month, with cost by stage and package and what is planned against what is built on a date. CSV out. Nothing is priced until you give prices: none are shipped.

## Currency

A price table can say what currency its prices are in (three letters, such as USD or EUR). The 5D pane has a box for it, it is kept in the file with the prices, and JSON exports carry it. A table made before this, or one where you left it empty, has no currency: its costs are shown as USD, the shell's default, and the pane and the running totals say so. Nothing is converted between currencies.
