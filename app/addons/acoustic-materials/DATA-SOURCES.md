# Data and sources

| Data | Source | License | Basis |
|---|---|---|---|
| Absorption and scattering coefficients, 125 Hz to 4 kHz octave bands (`materials.json`) | BRAS, Benchmark for Room Acoustical Simulation, "3 Surface descriptions". Aspöck, Brinkmann, Ackermann, Opdam, Vorländer, Weinzierl. TU Berlin DepositOnce, https://depositonce.tu-berlin.de/items/38410727-febb-4769-8002-9c710ba393c4 . Paper: Brinkmann et al., *A benchmark for room acoustical simulation. Concept and database*, Applied Acoustics 176 (2021) 107867. | CC BY-SA 4.0 (the data file stays under it; share it under the same terms) | 5 sets measured (impedance tube ISO 10534-2, or in-situ), 48 estimated or fitted to a measured reverberation time for BRAS's own rooms. Each entry says which. |

Method: BRAS gives third-octave values; each octave band is the mean of its three third-octaves (125 Hz = 100, 125, 160 Hz, and so on).

Limits, in BRAS's own words: the room-set values are mostly modelled or estimated for the benchmark rooms and do not describe the actual properties of the materials. Impedance-tube values are normal incidence, not the random-incidence ISO 354 value. This is a design aid; have a licensed acoustician review results.

Not in this pack yet: sound reduction (R, STC, IIC) of assemblies. No openly licensed laboratory table was found; the engine's mass-law estimates in `insul.js` stay marked "estimated".
