---
title: Povežite druge modele radi koordinacije
summary: Prikažite drugi IFC model pored svog po referenci (nikad spojen), postavite ga prema zajedničkim koordinatama, koordinatama karte ili dvjema tačkama, hvatajte se za njega dok crtate i ponovo ga učitajte kad se njegova datoteka promijeni.
keywords: veza, povezani model, referenca, xref, koordinacija, federacija, konstrukcija, MEP, konsultant, zajedničke koordinate, geodetsko snimanje, koordinate karte, ponovo učitaj, ukloni iz prikaza, referenca dokumenta, IfcDocumentReference
from: 3e0f1eab
---

## Šta ćete uraditi

Crtajte u odnosu na model konsultanta (konstrukciju, instalacije, postojeću zgradu) bez kopiranja bilo čega u svoju datoteku.

**Povezani model** prikazuje se u 3D pogledu i presijeca se na vašim planovima, ali se nikad ne mijenja i nikad se ne upisuje u vaš model. Vaš model čuva samo vezu: naziv datoteke i mjesto na kojem se nalazi.

## Povežite model

1. U lijevom panelu, u odjeljku {{ui:Povezani modeli}}, kliknite {{ui:Poveži model…}} i izaberite IFC datoteku. Odmah se prikazuje, a njegov red kaže **Prikazano**.
2. Izaberite gdje se smješta u {{ui:Postavljanje}}:
   - **Zajedničke koordinate** (za početak): njegove koordinate su vaše, kao da su oba modela postavljena iz istog ishodišta.
   - **Koordinate karte**: koordinate karte obje datoteke ih poravnavaju (obje moraju imati pretvorbu u kartu; BimCraft to kaže kada jedna nema).
   - **Preko dvije tačke…**: kliknite tačku na povezanom modelu, pa mjesto na vašem; zatim drugi par. Veza se pomjera i okreće (oko vertikale) da bi se uklopila.
3. Svaka promjena veze i postavljanja je jedan korak: {{key:Mod+Z}} ga poništava.

## Rad s njim

- Planovi prikazuju povezani model presječen na visini presjeka nivoa, kao tanke linije, a alat {{ui:Zid}} i ostali alati za crtanje hvataju se za njegove uglove i ivice.
- Izaberite njegove elemente u 3D pogledu da pročitate svojstva. Povezani model se nikad ne uređuje, pa je njegovo dugme u {{ui:Modeli}} isključeno.
- **Datoteka se promijenila?** Kada pretraživač može pratiti datoteku (datoteka otvorena preko birača datoteka ili u Studiju), BimCraft sam ponovo učitava vezu nekoliko sekundi nakon što se datoteka ponovo spasi, i to javlja. U suprotnom kliknite {{ui:Učitaj ponovo}}.
- {{ui:Ukloni iz prikaza}} ga sakriva i oslobađa memoriju; veza ostaje u vašem modelu. {{ui:Učitaj…}} ga ponovo prikazuje (vi birate datoteku: pretraživač ne može sam otvoriti datoteku po nazivu).
- Znak × uklanja vezu iz vašeg modela.

## Šta biste trebali vidjeti

- U vašoj IFC datoteci: IfcDocumentReference za svaku vezu (naziv datoteke), povezan s projektom, i mjesto u skupu svojstava projekta CadCraft_Links. Kad ponovo otvorite model, njegove veze su navedene kao **Nije učitano** dok ih ne učitate.

:::note
Provjere sukoba, Poređenje i Traženje mogu koristiti učitanu vezu kao i bilo koji drugi otvoreni model: vidi [Pregled više IFC modela zajedno](topic:several-models).
:::
