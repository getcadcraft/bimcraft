---
title: La paleta de símbols
summary: Trobeu símbols elèctrics i de fontaneria pel nom o pel dibuix, marqueu amb una estrella els que feu servir i col·loqueu-los al plànol amb un sol clic.
keywords: paleta de símbols, botó de símbols de la barra d'eines, segueix el mur, símbols, símbols elèctrics, símbols de fontaneria, plànol de fontaneria, vàter, WC, lavabo, pica, banyera, dutxa, desguàs de terra, registre de neteja, aixeta de mànega, escalfador d'aigua, vàlvula, vàlvula de comporta, aigua freda, aigua calenta, desguàs, ventilació, estil de línia, preferits, cerca
from: 67f20bc0
---

## Què hi fareu

Obriu un sol tauler que llista els símbols elèctrics i els símbols de plànol de fontaneria amb els seus dibuixos i noms, trobeu el que voleu i col·loqueu-lo al plànol. Res d'això no necessita internet: els símbols vénen amb l'aplicació.

## Obre-la i col·loca un símbol

1. Obriu un model i obriu {{ui:Compilació}} › {{ui:Paleta de símbols}} (ordre escrit: SYMBOLS). El mateix botó és al menú Eines de la barra Dibuixa i com a **Símbols** al grup Biblioteca de la barra d'eines.
2. Trieu un joc: **Elèctric** o **Fontaneria**, o **Tots els jocs**. Escriviu a la casella de cerca per reduir la llista. Podeu cercar pel nom o per l'abreviatura (WC, CW, HB).
3. Feu clic a un símbol. El plànol queda a punt per col·locar-lo.
   - Un símbol **elèctric** inicia l'eina Elèctrica amb aquest dispositiu escollit, de manera que tot el que s'aplica a [El plànol elèctric](topic:electrical-plan) també s'aplica aquí: feu clic al plànol, un sol pas de desfer.
   - Un símbol de **fontaneria** inicia l'eina de símbols de plànol. Feu clic al plànol. Un aparell que va a la paret (un vàter, un lavabo, una banyera, una pica, una aixeta de mànega) s'enganxa a la cara de paret més propera, amb l'esquena cap a la paret; els desguassos, les vàlvules, l'escalfador d'aigua i els estils de línia van on feu clic.
4. Premeu {{key:R}} per girar el símbol 90 graus ({{key:Shift}}+{{key:R}} el gira en sentit contrari), o escriviu un angle a **Rotació** a la barra d'opcions. Premeu {{key:Esc}} per parar.

Un aparell o una aixeta de mànega que s'ha enganxat a una cara de paret recorda aquest mur: quan el mur es mou, el símbol es mou amb ell (la mateixa cara, la mateixa distància al llarg del mur) dins del mateix pas de desfer. Si suprimiu el mur, el símbol es queda on era i Problemes llista «ha perdut el seu mur»; mogueu-lo o suprimiu-lo. Els símbols col·locats lluny de murs no estan lligats a res.

Cada símbol que col·loqueu és un pas de desfer. Un símbol col·locat és una anotació de plànol al fitxer IFC amb la seva etiqueta (WC1, WC2, ...). Seleccioneu-lo per canviar-ne l'etiqueta o el gir a {{ui:Propietats}}, o premeu {{key:Delete}}.

## Què conté el joc de fontaneria

Aparells (vàter, orinal, lavabo, banyera, dutxa, pica de cuina, pica simple), un desguàs de terra, registres de neteja de terra i de paret, una aixeta de mànega, un hidrant de paret, un escalfador d'aigua, vàlvules (de comporta, de globus, de bola, de retenció, de papallona, reductora de pressió) i estils de línia amb les seves abreviatures: aigua freda (CW), aigua calenta (HW), retorn d'aigua calenta (HWR), desguàs (W), ventilació (V), desguàs de pluvials (SD) i gas (G). Els dibuixos s'escalen amb el plànol, de manera que mantenen la mida a la fulla impresa. Un estil de línia és un tram curt per mostrar l'estil al plànol; dibuixeu els trams de tub reals amb les eines de tub.

:::note
Són convencions habituals de plànols de fontaneria, dibuixades per nosaltres; no estan certificades segons ISO 4067-1 ni ASME Y32.4. S'han comparat amb llegendes de dibuix públiques i manuals de formació (la llista és a la nota de fonts del joc, que indica on coincidim i on diferim), no s'han copiat de cap producte, i es poden fer servir lliurement (Apache-2.0). Els jocs de dibuix difereixen, així que reviseu la llegenda del vostre projecte. Són símbols de plànol, no un disseny de fontaneria: no dimensionen tubs ni comproven normatives.
:::

:::tip
Si un fitxer fa servir un joc de símbols que aquesta versió no té, el plànol mostra una caixa on hi havia el símbol, i Problemes ho llista.
:::

## Preferits i teclat

- Feu clic a l'estrella d'un símbol (o premeu {{key:F}} sobre ell) per guardar-lo com a preferit. Els preferits surten primers i es mantenen en aquest navegador. **Només els preferits** mostra només aquests.
- {{key:Down}} des de la casella de cerca passa als símbols; les tecles de fletxa, {{key:Home}} i {{key:End}} es mouen entre ells; {{key:Enter}} tria el que té el focus; {{key:Esc}} tanca la paleta.
- En un telèfon, la paleta és una fulla a la part inferior de la pantalla; es fa a un costat quan trieu un símbol perquè pugueu veure el plànol. Torneu a obrir-la des del menú Compilació o amb el botó **Paleta** de la barra d'opcions.

## Enllaça un element col·locat a un símbol

Un accessori d'enllumenat de la biblioteca és un element 3D, però un plànol elèctric el mostra com el seu símbol. El col·loqueu **una vegada** i l'enllaceu:

1. Trieu Compilació › **Enllaç de símbol** (o escriviu SYMBOLLINK). S'obre una secció Enllaç de símbol al tauler de l'esquerra.
2. Trieu els elements col·locats al plànol o en 3D. La secció indica quants n'heu triat i a què estan enllaçats.
3. Trieu el **Símbol** (de qualsevol joc de símbols: Elèctric, Fontaneria) i trieu **Enllaça**.

L'element continua sent un de sol, i cada quadre el compta una vegada:

- **3D** sempre mostra el seu cos.
- Un **plànol** mostra la seva forma en planta, com abans.
- Un plànol amb **Aquesta vista mostra els elements enllaçats com** configurat a **El seu símbol (un plànol d'instal·lacions)** mostra el símbol al seu lloc. Un clic al símbol selecciona l'element. L'elecció es guarda al fitxer per a aquella vista (el plànol d'una planta, el seu plànol de sostre o una crida).

**Gira el símbol 90°** gira el símbol respecte al seu element. **Suprimeix l'enllaç** el treu; l'element es manté. El quadre **Símbols enllaçats** llista cada element enllaçat una vegada, amb el seu nivell i la sala on es troba.

Encara no implementat: l'elecció d'una vista en un full és la del plànol del nivell que mostra; els dispositius col·locats amb l'eina Elèctrica són símbols en tots els plànols, com abans.
