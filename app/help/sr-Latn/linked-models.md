---
title: Povežite druge modele radi koordinacije
summary: Prikažite drugi IFC model pored svog po referenci (nikad spojen), postavite ga po zajedničkim koordinatama, koordinatama karte ili dvema tačkama, uhvatite se za njega dok crtate i ponovo ga učitajte kada se njegova datoteka promeni.
keywords: povezivanje, povezani model, referenca, xref, koordinacija, federacija, konstrukcija, MEP, konsultant, zajedničke koordinate, premer, koordinate karte, ponovo učitaj, ukloni iz prikaza, referenca dokumenta, IfcDocumentReference
from: 3e0f1eab
---

## Šta ćete uraditi

Crtajte prema modelu konsultanta (konstrukcija, instalacije, postojeća zgrada) bez kopiranja bilo čega u svoju datoteku.

**Povezani model** se prikazuje u 3D prikazu i seče na vašim osnovama, ali se nikad ne menja i nikad se ne čuva u vašem modelu. Vaš model čuva samo vezu: naziv datoteke i gde ide.

## Povezivanje modela

1. U odeljku {{ui:Povezani modeli}} levog panela kliknite {{ui:Poveži model…}} i izaberite IFC datoteku. Odmah se prikazuje, a njen red kaže **Prikazano**.
2. Izaberite gde ide u {{ui:Postavljanje}}:
   - **Zajedničke koordinate** (za početak): njene koordinate su vaše, kao da su oba modela postavljena iz iste nulte tačke.
   - **Koordinate karte**: koordinate karte obe datoteke ih poravnavaju (obe moraju imati konverziju karte; BimCraft to kaže kada jedna nema).
   - **Po dvema tačkama…**: kliknite tačku na povezanom modelu, pa gde ide u vašem; zatim drugi par. Veza se pomera i okreće (oko vertikale) da se uklopi.
3. Svaka promena veze i postavljanja je jedan korak: {{key:Mod+Z}} je vraća.

## Rad sa njom

- Osnove prikazuju povezani model presečen na visini preseka nivoa, kao tanke linije, a alatka {{ui:Zid}} i ostale alatke za crtanje se hvataju za njegove uglove i ivice.
- Izaberite njegove elemente u 3D prikazu da biste videli njihova svojstva. Povezani model nikad nije onaj koji menjate, zato je njegovo dugme u {{ui:Modeli}} isključeno.
- **Datoteka se promenila?** Kada pregledač može da prati datoteku (datoteka otvorena preko birača datoteka ili u Studiju), BimCraft sam ponovo učitava vezu nekoliko sekundi posle ponovnog čuvanja datoteke i to javlja. U suprotnom kliknite {{ui:Ponovo učitaj}}.
- {{ui:Ukloni iz prikaza}} sakriva model i oslobađa memoriju; veza ostaje u vašem modelu. {{ui:Učitaj…}} ga ponovo prikazuje (vi birate datoteku, jer pregledač ne može sam da otvori datoteku po imenu).
- Znak × uklanja vezu iz vašeg modela.

## Šta treba da vidite

- U vašoj IFC datoteci: IfcDocumentReference za svaku vezu (naziv datoteke), povezan sa projektom, i gde ide u skupu svojstava projekta CadCraft_Links. Kada ponovo otvorite model, njegove veze se navode kao **Nije učitano** dok ih ne učitate.

:::note
Provere sukoba, poređenje i pronalaženje mogu da koriste učitanu vezu kao i svaki drugi otvoreni model: pogledajte [Pogledajte više IFC modela zajedno](topic:several-models).
:::
