---
title: Poiščite povezane risbe in slike
summary: Prikažite povezane risbe (zunanje sklice ali Xref) in slike na glavi risbe tako, da odprete njeno mapo ali ročno dodate datoteke.
keywords: xref, zunanji sklic, povezana risba, pripni, prekrivanje, slika, fotografija, logotip, glava risbe, manjkajoč xref, etransmit, upravitelj sklicev
from: 5593d4b1
---

## Kaj boste naredili

Dopolnite risbo: prikažite risbe, na katere se povezuje (zunanji sklici ali xref), in slike, ki jih uporablja, na primer logotip v glavi risbe.

## Preprost način: odprite mapo

1. Kliknite {{ui:Odpri mapo}} in izberite mapo, v kateri sta risba in njene povezave, na primer celotno mapo `Cad` projekta.
2. V poročilu mape se pomaknite do **Risbe CAD**.
3. Kliknite risbo.
4. Oglejte si podokno {{ui:Lastnosti}} na desni, pod **Povezane risbe** in **Slike**.

BimCraft za vsako povezano risbo poišče njeno ime (»*ime*.dwg«), najprej v isti mapi kot risba, nato kjerkoli v mapi, ki ste jo odprli. Slike se iščejo na enak način, prav tako tudi po podobnem imenu: izvoz eTransmit ali Revit pogosto doda ime projekta pred ime datoteke, zato se `logo.png` najde kot `Tower-logo-5425051.png`.

## Drug način: datoteke dodajte ročno

1. Odprite risbo sama.
2. Na desni, pod **Povezane risbe**, kliknite {{ui:Dodaj povezane risbe …}}. Pod **Slike** je gumb {{ui:Dodaj slike …}}; oba odpreta isti izbirnik.
3. Izberite povezane datoteke `.dwg` in datoteke slik. Lahko izberete več naenkrat.
4. Počakajte, medtem ko BimCraft znova odpre risbo z njimi.

## Kaj bi morali videti

Vsaka povezana risba in slika je navedena z oznako:

| Oznaka | Pomeni |
|---|---|
| **Prikazano** | Najdeno in narisano. Pot pod njo pove, od kod je, ali »dodano ročno«. |
| **Prikazano, podobno ime** | Slika, najdena po podobnem imenu. Preverite, ali je prava. |
| **Ni najdeno** | Ni v mapi ali v datotekah, ki ste jih dodali. Manjkajoča slika se prikaže kot prazen okvir. |
| **TIFF ni mogoče prikazati v brskalniku** | Slika je datoteka TIFF, ki je brskalniki ne prikažejo. Shranite jo kot PNG z istim imenom in jo dodajte. |
| **Ni mogoče prebrati** | Datoteka je najdena, vendar je ni mogoče odpreti kot slike. |

Podokno {{ui:Risba}} na levi za povezane risbe prikaže »*n* od *m* naloženih«. Sloji povezanih risb se v {{ui:Sloji}} pojavijo kot »*ime povezave*|*sloj*«.

## Pogoste napake

- **Odpiranje samo risbe.** »Ta risba prikazuje samo svojo vsebino, dokler njene povezane risbe niso dodane. Odprtje celotne mape projekta jih samodejno najde.«
- **Odpiranje premajhne mape.** Če so povezave v sosednji mapi, odprite nadrejeno mapo.
- **Preimenovane povezave.** BimCraft povezane risbe ujema po imenu. Povezava, preimenovana na disku, ni najdena; dodajte jo ročno.
- **Povezave povezav.** BimCraft naloži risbe, na katere se povezuje odprta risba. Risbe, povezane znotraj teh, se ne iščejo, zato se v tej različici običajno ne prikažejo.
