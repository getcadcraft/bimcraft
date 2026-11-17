---
title: Incidències, revisions i historial de canvis del dibuix
summary: Registra cada joc de fulls que distribueixes, mira què ha canviat des de llavors a cada full i element, i guarda les instruccions d'obra, els plànols de taller i els models enllaçats associats a la incidència a què pertanyen.
keywords: incidència, joc emès, joc enviat, enviament, revisió, revisions, què ha canviat, des de la incidència, historial de canvis, historial de canvis del dibuix, registre de dibuixos, full de lliurament, instrucció d'obra, plànol de taller, model enllaçat, licitació, obra, instantània, compara
from: 4c732832
---

## Què faràs

Registra una incidència: quins fulls han sortit, en quina data, amb quina finalitat, cadascun amb la seva revisió. Més tard, pregunta què ha canviat des d'aquella incidència. Guarda les instruccions d'obra i els plànols de taller retornats associats a la incidència.

## Passos

1. Al tauler de l'esquerra, obre **Incidències i revisions**.
2. Tria **Registra una incidència**. La revisió es proposa (A, després B; una de numerada com P1 va comptant amunt). Tria per a què s'emet, a qui va, la data i els fulls. Quan l'etapa del projecte està definida, la finalitat la segueix. Quan el paquet de permís té una llista de documents de suport, els fulls enllaçats amb aquesta llista es marquen automàticament.
3. Deixa marcat **Desa també una còpia del model tal com s'ha emès** per mantenir el model exactament tal com va sortir. La còpia es baixa; el seu nom, la mida i el SHA-256 es guarden amb la incidència.
4. Tria **Registra aquesta incidència**. Un full que ha canviat des que es va emetre per última vegada agafa la nova revisió. Un full que no ha canviat conserva la revisió que té. El caixetí de cada full mostra la seva revisió.
5. Per veure què ha canviat, tria **Canvis des de** al costat d'una incidència. Cada full diu Igual o Canviat, amb els elements afegits, modificats i eliminats que hi ha. Fes clic a un recompte per seleccionar aquests elements.
6. Tria **Afegeix un registre** per a una instrucció d'obra, un plànol de taller, un conjunt de marques, un model enllaçat o una nota. Tria la incidència a què correspon. Un fitxer que triïs es registra pel seu nom, mida i SHA-256; el fitxer es queda on és.
7. **Historial de canvis del dibuix** mostra una fila per a cada full i una columna per a cada incidència. **Baixa l'historial de canvis (CSV)** el desa amb les incidències i els registres.
8. **Desa l'historial d'incidències** escriu un fitxer `.issues.json`. MarkupCraft, TakeoffCraft i DetailCraft el llegeixen amb **Llegeix un historial d'incidències**.

## Bones de saber

- L'historial es guarda dins del fitxer IFC (conjunt de propietats `CadCraft_Issues` del projecte). Els altres programes l'ignoren.
- Un full es considera canviat quan canvia la seva pròpia configuració, o quan canvia un element que mostra: una planta mostra el seu nivell, un alçat o una secció mostren tot el model, i un quadre de portes o finestres mostra les seves portes o finestres.
- Un element es considera canviat quan canvia una propietat, la seva posició, la seva mida o la seva forma.
- Per veure exactament quina propietat ha canviat, obre la còpia desada del model emès amb **Compara versions**.
- Eliminar una incidència conserva els seus registres, però sense incidència. Cada pas es pot desfer d'un sol cop.
- Un model amb més de 60.000 elements no guarda un registre de cada element amb la incidència. Els fulls encara es comparen.

## Encara no implementat

- Els fulls no es desen com a PDF amb la incidència.
- Un núvol de revisió no es dibuixa als fulls propis de BimCraft. Registra els núvols a MarkupCraft amb la incidència.
