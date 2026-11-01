---
title: Plant: optimise overnight, on other computers too
summary: Try many settings of the process model, rank them by energy, cost or emissions, and let the other computers on your network solve the variants.
section: tasks
order: 67
keywords: optimise, optimize, overnight, study, variants, process, lan, nodes, studio, energy, trade-off
---

A study aid, not an engineering approval. No representation.

Open the **Plant** tab and the section **Optimise overnight**. It needs a process model (bring one in with the process file first).

1. Edit the study. Each **variable** names a unit of the model, one of its parameters, a range and the number of steps. Each **objective** names a metric (`heat_kW`, `cool_kW`, `shaft_kW`, `energy_kW`, `operating_per_h`, `co2_kg_h` or a stream property) and whether to minimise or maximise it. Cost and emissions need the prices and factors you type under `prices` and `factors`; nothing is assumed.
2. Press **Run the study**. The panel says how many variants were solved and ranks the best ones.

**Other computers.** In CadCraft Studio, a computer that turned on *Let others render on this computer* (Settings, Rendering) also solves process variants for you once you connect to it with its code. The panel says how many are connected. A variant a computer cannot take, or a computer that leaves in the middle of a run, is solved here, so no variant is lost. Outside Studio every variant is solved on this computer.
