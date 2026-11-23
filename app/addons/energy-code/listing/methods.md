The climate zone comes from the Energy Commission's list of zones by ZIP code. The limits come from Table 150.1-A (the single-family component package) and Section 150.0 (mandatory features) of the 2025 Building Energy Efficiency Standards.

A wall's U-factor is looked up in Reference Joint Appendix JA4, Table 4.3.1, the way the code says to use the table by hand: the row for the stud size and cavity insulation, and the continuous insulation column that is not more than what is installed. Nothing is interpolated and nothing is calculated by the add-on.

Window and door U-factors and SHGC are area-weighted averages over the windows in exterior walls. Window area is width times height of each window. A window faces west when its wall's outside face looks within 45 degrees of true west, counting the north-west end and not the south-west end, as the code defines it. Conditioned floor area is the area inside the outside faces of the exterior walls unless you type your own.

A value you have not stated is reported as not checked, never as a pass.

The project file is written in the program's own plain-text format, read in the Energy Commission's published example files. Every object, property and word comes from the program's published data model: the add-on cannot write a word that is not in the program's own lists. Walls of one type that face the same way are added together, north first and clockwise, and each window and door follows its wall. Nothing is written while a value the envelope needs is missing.
