---
title: Camere, planșee, tavane și acoperișuri
summary: Camerele apar pe măsură ce pereții le închid; dați unei camere sau întregii clădiri un planșeu și un tavan și puneți un acoperiș în patru ape sau în două ape pe pereți. Toate urmează pereții când aceștia se mută.
keywords: cameră, camere, spațiu, suprafață, perimetru, planșeu, placă, șapă, tavan, acoperiș, acoperiș în patru ape, acoperiș în două ape, pantă, debordare, streașină, coamă, vale, 6/12
from: 1fb1813c
---

## Ce veți face

Terminați structura clădirii. Camerele apar singure din pereți; planșeele, tavanele și acoperișul se fac cu câte un clic fiecare. Deoarece sunt determinate de pereți, urmează pereții când aceștia se mută.

## Camere

Orice spațiu închis de pereții desenați este o cameră. Ea apare imediat ce ultimul perete o închide, cu un număr (101, 102 … la primul nivel, 201 … la următorul) și cu un nume (**Cameră 1**, **Cameră 2** …), iar suprafața ei apare la mijloc, pe plan.

- Cu {{ui:Select}} activat, faceți clic în interiorul unei camere ca s-o selectați. În **Proprietăți** modificați **Nume** (de exemplu `Kitchen`) și **Număr**; suprafața și perimetrul sunt afișate.
- Ștergeți un perete între două camere și ele devin una; trasați un perete peste o cameră și ea devine două. O cameră își păstrează numele și numărul cât timp pereții din jur se mută.
- O cameră nu poate fi ștearsă singură: ea este spațiul creat de pereți.

Suprafețele se măsoară în interiorul fețelor pereților. Camerele se salvează ca spații IFC, cu suprafața planșeului, perimetrul, înălțimea și volumul lor, astfel încât tabelele le citesc (vezi [Adunarea cantităților, listarea elementelor și tabelele de spații](topic:quantity-totals)).

## Planșee

1. Faceți clic pe {{ui:Floor}}.
2. Alegeți **Această cameră** sau **Toată clădirea**, **Tip** (podea din lemn sau placă de beton) și grosimea.
3. Plasați cursorul în interiorul unei camere (sau oriunde în interiorul clădirii). Ce ar acoperi planșeul este evidențiat, cu suprafața lui.
4. Faceți clic. Partea de sus a planșeului este la nivelul etajului; planșeul coboară cu grosimea lui. Un planșeu pentru întreaga clădire ajunge până la fețele exterioare ale pereților.

## Tavane

1. Faceți clic pe {{ui:Ceiling}}.
2. Alegeți **Această cameră** sau **Toată clădirea** și **Înălțimea** lui deasupra planșeului.
3. Plasați cursorul în interior și faceți clic.
4. Ca să îl vedeți de jos, cu grila lui și corpurile de iluminat de pe el, comutați planul la planul tavanului: vezi [Vizualizări, intervale de vizualizare și foi proprii](topic:views-and-sheets).

## Un acoperiș

1. Pe nivelul ale cărui pereți poartă acoperișul, faceți clic pe {{ui:Roof}}.
2. Scrieți **Pantă** ca un raport de ridicare la 12 (`6/12`) sau în grade (`30`), apoi **Debordare**.
3. Alegeți **Capete**: **Acoperiș în patru ape** (toate laturile se înclină), **Frontoane pe laturile scurte** sau **Frontoane pe laturile lungi** (o clădire cu patru laturi), ori **Acoperiș cu o apă**.
4. Plasați cursorul în interiorul clădirii: streașina și coama apar pe plan. Faceți clic.

Acoperișul stă peste pereți, pe nivelul de deasupra lor, iar partea lui de jos întâlnește fața exterioară a pereților. Frontoanele se umplu cu un perete de fronton la fel de gros ca peretele de dedesubt. O clădire în formă de L, T sau U primește un acoperiș în patru ape ale cărui aripi se întâlnesc în văi.

## Schimbați-le

Selectați un planșeu, un tavan sau un acoperiș (în vizualizarea 3D, în arborele modelului sau, pentru un acoperiș, dând clic în interiorul conturului lui de pe nivelul de deasupra) și modificați-l în **Proprietăți**: tipul, grosimea și cât de sus este partea lui de sus față de nivel pentru un planșeu; înălțimea, grosimea și **Model** pentru un tavan (grila pe care o desenează planul tavanului: niciuna, 600 × 600, 600 × 1200, 2' × 2' sau 2' × 4'); panta, debordarea, capetele și grosimea pentru un acoperiș. Fiecare modificare este un singur pas pentru {{ui:Undo}}.

## Dați unui planșeu, tavan sau acoperiș un tip, cu straturi

Un planșeu, un tavan și un acoperiș pot primi un **tip**, ca și un perete: o structură denumită de straturi, fiecare cu materialul și grosimea lui reală.

- **Când îl plasați.** Uneltele {{ui:Floor}}, {{ui:Ceiling}}, {{ui:Roof}} și Desenare planșeu au pe rândul lor o listă **Tip**. **Fără tip** îl plasează ca înainte, cu grosimea lui. Un tip îl plasează la fel de gros cât sunt împreună straturile tipului.
- **Mai târziu.** Selectați planșeul, tavanul sau acoperișul și alegeți **Tip** în **Proprietăți**. Elementul rămâne același element: locul, camera și datele lui sunt păstrate și nimic nu se desenează din nou. Se schimbă doar tipul, grosimea și materialul. Așa devine un element din etapa de schiță unul dezvoltat: înlocuiți tipul generic cu unul real.
- **Editați tipul…** deschide editorul de tip pe acel tip: straturile de sus în jos, miezul, funcția fiecărui strat și eticheta LOD a tipului. Salvarea schimbă fiecare element de acel tip dintr-un singur pas, iar o anulare îl readuce. Modificarea unui tip de pornire salvează o copie ca tipul dvs.
- Cât timp un element are un tip, **Grosimea** lui este cea a tipului și nu poate fi introdusă de la tastatură. Alegeți alt tip sau **Fără tip** ca s-o schimbați.

Tipurile de pornire sunt câte un tip **generic** pentru fiecare (un strat al materialului generic, etichetat LOD 200) și două tipuri pe straturi (etichetate LOD 300): un planșeu cu grinzi de lemn și un planșeu de beton cu șapă; un acoperiș din lemn și un acoperiș plat din beton; un tavan din placă de gips-carton și un tavan fals cu plăci. Sunt valori de plecare, nu construcții verificate: verificați straturile înainte să vă bazați pe ele.

**Straturi: suprafață și volum** listează fiecare strat al fiecărui tip folosit; vezi [Tabele, dimensiuni și PDF](topic:plan-schedules-and-pdf). Tipurile de planșee, acoperișuri și tavane se transferă între proiecte într-un pachet de tipuri sau ca element de bibliotecă; vezi [Pachete de tipuri](topic:type-packs).

## Detalii utile

- Mutarea, adăugarea sau ștergerea pereților face din nou camerele, planșeele, tavanele și acoperișul de deasupra lor.
- Un acoperiș se potrivește pe orice contur. Ca să dați fiecărui perete propria pantă, fronton sau pultă, o placă ridicată, dulapul de streașină și intradosul, ori ca să desenați un singur plan al acoperișului, vezi [Acoperișuri: o pantă pentru fiecare perete, frontoane, pultă și plane de acoperiș](topic:roofs).
- {{key:Delete}} șterge un planșeu, un tavan sau un acoperiș selectat.
