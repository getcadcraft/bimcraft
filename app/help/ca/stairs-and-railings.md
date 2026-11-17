---
title: Escales i baranes
summary: Dibuixa escales rectes, en L, en U i amb graons de ventall, que calculen les contrapetjades i les petjades a partir de l'alçada entre plantes, amb passamans i barrots, i el buit d'escala tallat al forjat de sobre; dibuixa baranes de protecció al llarg de terrasses i al voltant d'obertures.
keywords: escala de cargol, escala rodona, escala, escales, tram, contrapetjada, petjada, replà, graons de ventall, escala en L, escala en U, ziga-zaga, passamà, barana de protecció, barana, barrot, muntant, pilar, buit d'escala, alçada lliure, terrassa, balcó
from: 16e5ace4
---

## Què fareu

Afegiu escales entre nivells i baranes on la gent les necessiti. Una escala calcula els seus propis graons a partir de l'alçada entre els nivells, els manté dins dels límits habituals per a habitatges, posa passamans als seus costats oberts i talla el seu buit d'escala al forjat de sobre.

## Dibuixa una escala

1. Al nivell on comença l'escala, obriu {{ui:Compilació}} i trieu {{ui:Escala}}.
2. Trieu el tipus —**Recta**, **En L amb replà**, **En U amb replà** o **En L amb graons de ventall**— cap a quin costat **gira**, la seva **amplada** i on van els seus **passamans**.
3. Feu clic on comença l'escala: al mig de la vora davantera del primer graó.
4. Mogueu el punter en la direcció en què puja l'escala; els graons el segueixen, amb el nombre de contrapetjades i petjades. S'ajusta als murs i a increments de 15°; manteniu premuda {{key:Shift}} per mantenir-la quadrada.
5. Feu clic. {{key:Esc}} torna a començar.

## Dibuixa una escala de cargol

1. Obriu {{ui:Compilació}}, trieu {{ui:Escala}} i després **De cargol** com a tipus.
2. Definiu **Gir**, en quina direcció s'enrotlla en pujar (a l'esquerra és en sentit contrari a les agulles del rellotge).
3. Feu clic al centre del seu pilar.
4. Feu clic en la direcció on apunta la petjada del primer graó.

Comença amb 30" d'amplada (la petjada, des del pilar fins a l'exterior), amb un pilar de 4½". Les contrapetjades es calculen a partir de l'alçada entre plantes, com a màxim 9½" per defecte. Les petjades fan 7½" de fondària a la línia de pas, a 12" del pilar. El passamà va per l'exterior.

A **Propietats**, una escala de cargol afegeix **Pilar central**, amb el seu diàmetre. La **Petjada** es mesura a la línia de pas. Les seves comprovacions són valors per defecte marcats per a escales de cargol: 26" d'amplada lliure, almenys 6¾" de petjada a la línia de pas, contrapetjades com a màxim de 9½" i passamans de 34"–38". No són càlculs d'enginyeria; el tècnic municipal d'obres decideix.

## Com es calculen els graons

L'alçada entre el terra del nivell i el nivell de sobre es divideix en contrapetjades iguals, no més altes de 7¾", i cada petjada fa 10" de fondària (tots dos valors es poden canviar a **Propietats**). Un replà compta com un graó; els graons de ventall són tres graons en ventall al voltant de la cantonada interior. Si canvieu l'alçada d'un nivell, totes les escales que hi ha es tornen a calcular.

:::warning
7¾" de contrapetjada, 10" de petjada, 36" d'amplada, 6'-8" d'alçada lliure i passamans de 34"–38" són valors per defecte marcats segons la normativa habitual d'habitatges, no càlculs d'enginyeria. **Propietats** indica quins es compleixen; el tècnic municipal d'obres decideix què és aplicable.
:::

## Canvia una escala

Seleccioneu-la (feu clic sobre ella al plànol o a la vista 3D) i canvieu a **Propietats**: el seu tipus i gir, l'amplada, la contrapetjada més alta, la fondària de la petjada, els passamans i la seva alçada, i **Talla el forjat de sobre** per al buit d'escala. Les contrapetjades i petjades que ha acabat tenint es mostren a sota.

## El buit d'escala

Quan el nivell de sobre té un forjat, l'escala el talla on els graons tindrien menys de 6'-8" d'alçada lliure. El tall es mou amb l'escala i desapareix quan se suprimeix l'escala.

## Dibuixa una barana

1. Obriu {{ui:Compilació}} i trieu {{ui:Barana}}.
2. Trieu **Barana de protecció** (36" d'alçada) o **Passamà**, i la seva alçada.
3. Feu clic al llarg de la vora —una terrassa, un balcó, al voltant d'un buit d'escala— i feu doble clic o premeu {{key:Enter}} per acabar.

Les baranes tenen muntants als seus extrems i cantonades, i balaustres amb espais inferiors a 4". Seleccioneu-ne una per canviar-ne el tipus, l'alçada o a quina distància per sobre del terra comença.

## Dibuixa una tanca

Trieu **Tanca** a la mateixa eina de Barana, definiu-ne l'alçada (1800 mm per començar), feu clic al llarg de la línia de la tanca i premeu {{key:Enter}}.

- La tanca té un muntant a cada extrem i a cada cantonada, i un muntant com a màxim cada 2.4 m entre ells. Una tanca de panells té un panell entre muntants; una tanca de travesseres en té dues. Aquestes mides són opcions habituals, no un requisit de normativa: la normativa local limita l'alçada d'una tanca.
- És un sol element del model (un IfcRailing anomenat Fence) amb un conjunt de propietats {{ui:CadCraft_Fence}}: estil, alçada, muntants, panells, travesseres, portelles, longitud i àrea de panells. Un sol pas per desfer.
- No es dibuixa aquí: les portelles (les distribueix el generador de CivilCraft), les estaques, el terreny (la tanca es queda sobre el nivell) ni la selecció d'un sol muntant.

## Què es desa

Una escala es desa com una escala IFC formada per trams d'escala (amb les seves contrapetjades, petjades, alçada de contrapetjada i longitud de petjada), replans, graons de ventall i passamans; el buit d'escala és una obertura al forjat de sobre. Les baranes són baranes IFC amb la seva longitud i el nombre de balaustres i muntants.
