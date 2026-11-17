---
title: Poveži druge modele radi koordinacije
summary: Prikažite drugi IFC model uz svoj kao vanjsku referencu (nikad spojen), postavite ga prema zajedničkim koordinatama, koordinatama karte ili dvjema točkama, uhvatite ga pri crtanju i ponovno učitajte kad se njegova datoteka promijeni.
keywords: poveznica, povezani model, referenca, xref, koordinacija, federacija, konstrukcija, MEP, savjetnik, zajedničke koordinate, premjer, koordinate karte, ponovno učitavanje, ukloni iz memorije, referenca dokumenta, IfcDocumentReference
from: 3e0f1eab
---

## Što ćete raditi

Crtajte prema modelu savjetnika (konstrukciji, instalacijama, postojećoj zgradi) bez kopiranja ičega u vlastitu datoteku.

**Povezani model** prikazuje se u 3D prikazu i presijeca se na vašim tlocrtima, ali se nikad ne mijenja i nikad ne sprema u vaš model. Vaš model čuva samo poveznicu: naziv datoteke i mjesto na kojem se nalazi.

## Povežite model

1. U odjeljku {{ui:Povezani modeli}} lijevog okna kliknite {{ui:Poveži model…}} i odaberite IFC datoteku. Odmah se prikazuje, a njezin redak piše **Prikazano**.
2. Odaberite mjesto u {{ui:Položaj}}:
   - **Zajedničke koordinate** (za početak): njegove koordinate su vaše, kao da su oba modela postavljena iz istog ishodišta.
   - **Koordinate karte**: koordinate karte obiju datoteka ih poravnavaju (obje moraju imati pretvorbu karte; BimCraft to javlja kad jedna nema).
   - **Prema dvjema točkama…**: kliknite točku na povezanom modelu, zatim mjesto gdje ona ide u vašem; zatim drugi par. Poveznica se pomiče i okreće (oko vertikale) da bi odgovarala.
3. Svaka promjena poveznice i položaja je jedan korak: {{key:Mod+Z}} je vraća.

## Radite s njim

- Tlocrti prikazuju povezani model presječen na visini presjeka etaže tankim linijama, a alat {{ui:Zid}} i ostali alati za crtanje hvataju se za njegove kutove i rubove.
- Odaberite njegove elemente u 3D prikazu da pročitate svojstva. Povezani model nikad nije onaj koji uređujete, pa je njegov radio-gumb u {{ui:Modeli}} isključen.
- **Datoteka je promijenjena?** Kad preglednik može pratiti datoteku (datoteku otvorenu preko njezina birača datoteka ili u Studiju), BimCraft sam ponovno učitava poveznicu nekoliko sekundi nakon što je datoteka ponovno spremljena i to javlja. Inače kliknite {{ui:Ponovno učitaj}}.
- {{ui:Ukloni iz memorije}} sakriva model i oslobađa memoriju; poveznica ostaje u vašem modelu. {{ui:Učitaj…}} ga ponovno prikazuje (vi birate datoteku: preglednik ne može sam otvoriti datoteku po njezinu nazivu).
- Znak × uklanja poveznicu iz vašeg modela.

## Što biste trebali vidjeti

- U vašoj IFC datoteci: IfcDocumentReference za svaku poveznicu (naziv datoteke), povezan s projektom, te njezino mjesto u skupu svojstava projekta CadCraft_Links. Kad ponovno otvorite model, njegove poveznice su navedene kao **Nije učitano** dok ih ne učitate.

:::note
Provjere sudara, Usporedba i Pronađi mogu koristiti učitanu poveznicu kao i svaki drugi otvoreni model: vidi [Pogledajte više IFC modela zajedno](topic:several-models).
:::
