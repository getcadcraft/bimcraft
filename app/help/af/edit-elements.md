---
title: Skrap, sny, kopieer en plak bouelemente
summary: Kies mure, deure, meubels of enige ander ding in 'n IFC-model; skrap hulle, sny hulle, of kopieer en plak hulle waar jy klik, op dieselfde plek, of op 'n ander verdieping.
keywords: skrap, verwyder, uitvee, sny, kopieer, plak, dupliseer, skuif, kies alles, kies almal, bouelement, muur, deur, venster, trap, opening, ontdoen
from: d9eec37f
---

## Wat jy gaan doen

Verander wat in 'n IFC-model is: haal elemente uit wat jy nie wil hê nie, kopieer 'n muur of 'n stel meubels na 'n ander plek, of skuif elemente deur hulle te sny en te plak. Elke verandering is een stap wat jy kan ontdoen, en stoor skryf 'n nuwe lêer, sodat jou oorspronklike lêer bly soos dit was.

## Stappe

1. Maak 'n IFC-model oop. Sien [Maak 'n IFC-model oop en kyk rond in 3D](topic:open-ifc-model).
2. Kies wat jy wil verander: klik op 'n element, hou {{key:Mod}} of {{key:Shift}} vas en klik om meer te kies, of druk {{key:Mod+A}} ({{ui:More}}, {{ui:Select all}}) om elke element wat gewys word te kies.
3. Dan:
   - **Skrap:** druk {{key:Delete}}, of {{ui:More}}, {{ui:Delete}}.
   - **Kopieer:** druk {{key:Mod+C}} of klik {{ui:Copy}}.
   - **Sny:** druk {{key:Mod+X}}, of {{ui:More}}, {{ui:Cut}}. Die elemente verdwyn, en jy kan hulle plak.
4. Om te plak, druk {{key:Mod+V}} of klik {{ui:Paste}}. 'n Deursigtige boks van die grootte van wat jy gekopieer het, volg die wyser op die verdieping wat in die plasingsbalk gekies is. Druk {{key:R}} om dit 90° te draai, en klik dan waar dit moet gaan. Elke klik plaas nog 'n kopie; druk {{key:Esc}} om te stop.
5. Of druk {{key:Mod+Shift+V}} ({{ui:More}}, {{ui:Paste in place}}): na 'n sny gaan die elemente presies terug waar hulle was; na 'n kopie kom die kopie reg langs die oorspronklikes.
6. Klik {{ui:Save as IFC}} om die gewysigde model af te laai.

## Wat saam met 'n element gaan

- **Dele:** 'n trap neem sy trapstelle, 'n gordynmuur sy panele, enigiets wat uit dele gemaak is, neem almal saam.
- **Openinge:** 'n muur neem die openinge wat daarin gesny is. Skrap 'n deur of venster neem ook die opening wat dit gevul het, sodat die muur weer toemaak, soos in 'n ontwerpprogram. Skrap 'n muur wat in BimCraft geteken is, skrap ook sy deure en vensters en voeg die oorblywende mure weer saam. Skrap 'n muur uit 'n lêer wat elders gemaak is, laat sy deure en vensters waar hulle was.
- **Data:** 'n kopie het dieselfde tipe, materiale, eienskapstelle en hoeveelhede as die oorspronklike, en 'n nuwe GlobalId. As jy later 'n waarde op die kopie verander, bly die oorspronklike onaangeraak.
- **Biblioteekitems** hou hul biblioteekdata; 'n kopie kry die volgende vrye itemnommer, en 'n gesnyde item wat teruggeplak word, hou sy eie nommer.

## Wat jy behoort te sien

- "Geskrap: …" of "Geplak: …" in die {{ui:Changes}}-lys. {{key:Mod+Z}} neem die laaste verandering terug; {{key:Mod+Y}} sit dit weer terug.
- Na 'n skrap sê die statuslyn hoeveel dele en openinge ook weg is.
- Geplakte elemente is gekies, so jy kan weer op dieselfde plek plak om 'n ry te maak, of hulle skrap.

## Goed om te weet

- Kopieë gebruik dieselfde geometrie as die oorspronklike (IFC laat elemente dit deel), so die lêer groei baie min.
- Bouelemente plak terug in die model waaruit hulle gekopieer is, in dieselfde oortjie. Om geplaasde biblioteekitems in 'n ander model te gebruik, kopieer een item op 'n slag: sien [Kopieer, plak en dupliseer biblioteekitems](topic:copy-paste).
- Verdiepings, ruimtes, geboue en die terrein kan nie geskrap of gekopieer word nie. Kies die elemente daarin in plaas daarvan. 'n Vertrek wat in BimCraft geteken is, kom uit die mure rondom: skrap 'n muur om twee vertrekke saam te voeg.
- Mure, deure en vensters wat met BimCraft se eie muur-, deur- en vensterhulpmiddels geteken is, kan nog nie gekopieer, gesny of gedupliseer word nie; die statuslyn sê so. Teken hulle weer. Skrap werk wel.
- Kopieer sit ook die name en eienskappe van wat jy gekopieer het as teks op jou knipbord, om in 'n sigblad of 'n e-pos te plak.

## Algemene foute

- **{{ui:Delete}} is grys.** Niks is gekies nie, of net verdiepings of ruimtes is gekies. Hou die wyser daarop om te lees waarom.
- **Plak sê die elemente het van 'n ander model gekom.** Jy het 'n ander model oopgemaak sedert jy hulle gekopieer het. Maak die eerste model weer oop en kopieer hulle daar.
- **Die geplakte kopie is op 'n ander vloer.** Die plasingsbalk se {{ui:Storey}} bepaal waarheen dit gaan; kies die verdieping voordat jy klik.

## Verwant

- [Verberg, isoleer en sien deur elemente](topic:hide-and-isolate)
- [Sleutels en muis](topic:keyboard#edit)
