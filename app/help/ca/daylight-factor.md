---
title: Estimeu la llum natural de cada sala
summary: El factor mitjà de llum natural de cada sala a partir de les seves finestres, de les seves superfícies interiors i del cel que veu cada finestra, amb l'angle de cel mesurat al model. Una estimació de disseny inicial, no una simulació ni una comprovació normativa.
keywords: llum natural, factor de llum natural, factor mitjà de llum natural, adf, component vertical de cel, vsc, guany solar, sol, valor g, quadrícula, flux dividit, component de cel, component reflectit internament, llum natural, finestra, vidratge, angle de cel, obstrucció, ombra projectada, balcó, voladís, reflectància, transmitància, disseny inicial, anàlisi, sales, espais
from: 5f300a78
---

La pestanya {{ui:Llum natural}} del panell de la dreta calcula el **factor mitjà de llum natural** de cada sala: quanta de la llum d'un cel cobert exterior arriba a la sala, de mitjana, com a percentatge. Llegeix les sales (espais) i les finestres del model IFC obert. No es canvia res al model i no es puja res.

:::warning
Tot el que hi ha en aquesta pestanya és **una eina de disseny, no un càlcul de compliment**: estimacions de disseny inicial amb mètodes publicats, **no una simulació** i **no una comprovació amb un codi d'edificació ni amb una norma**. BS EN 17037, LEED, BREEAM i els codis d'energia demanen una simulació de llum natural amb el clima del lloc; per a això, feu servir un programa de simulació de llum natural.
:::

## Calculeu-ho

1. Obriu un model IFC que tingui sales (espais) i finestres. Els models dibuixats aquí tenen una sala dins de cada conjunt tancat de murs.
2. Obriu la pestanya {{ui:Llum natural}} i feu clic a {{ui:Calcula}}.
3. Cada sala mostra el seu factor de llum natural i una banda: per sota del 2 %, entre el 2–5 %, o el 5 % o més. Feu clic a una sala per veure les seves superfícies i l'àrea i l'angle de cel de cada finestra; la sala i les seves finestres se seleccionen al model.

Si canvieu una dada, els números canvien de seguida; després de canviar el model, feu {{ui:Calcula de nou}}. {{ui:CSV}} desa cada sala amb els seus números i les dades usades.

## La fórmula

Factor mitjà de llum natural (%) = T × Ag × θ × M ÷ (A × (1 − R²)), sumat sobre les finestres de la sala (fórmula de Littlefair, usada per BRE 209, BS 8206-2 i CIBSE LG10):

- **T**, la transmitància lumínica del vidre (0.7 per començar: useu la xifra del fabricant).
- **Ag**, l'àrea vidrada: l'àrea de cada finestra (amplada total × alçada, o si no la seva mida al model) × la **proporció de vidre** (0.75 per començar: la resta és marc).
- **θ**, l'angle de cel que veu la finestra, en graus (més avall).
- **M**, el factor de manteniment per la brutícia del vidre (1 per començar).
- **A**, cada superfície interior de la sala: terra, parets, sostre i finestres, presa de la forma pròpia de la sala.
- **R**, la seva reflectància mitjana, ponderada per àrea: terra 0.2, parets 0.5, sostre 0.7 per començar; el vidre compta com 0.1.

## Com es mesura l'angle de cel

Per a cada finestra, BimCraft talla el model amb un pla vertical perpendicular a la finestra, des de la cara exterior del vidre, i mira des de l'horitzó cap amunt: tot el que el tall troba davant de la finestra (un edifici d'enfront, un balcó o un voladís a sobre, la cornisa) amaga part d'aquests 90°. θ és el que queda. La mateixa finestra i la paret on es troba queden excloses. Ho fa en cinc punts al llarg de l'amplada de la finestra i en pren la mitjana, de manera que una columna prima davant del centre se'n queda la seva part, no tot el cel.

Un edifici 8.5 m per sobre del centre de la finestra i a 9.9 m de distància amaga 40.65° (l'angle la tangent del qual és 8.5 ÷ 9.9), de manera que θ = 49.35°.

## Component vertical de cel de cada finestra

{{ui:Calcula}} també mesura, per a cada finestra, què veu de tot el cel: el mateix tall vertical, girat cap a totes les direccions a través de la façana de la finestra (cada 2°, d'un costat a l'altre), de manera que un edifici a un costat, una aleta o un ressalt profund en prenen la seva part. A partir d'això, BimCraft calcula el **component vertical de cel (VSC)**: quanta llum del cel cobert arriba al vidre, com a part del que rebria una coberta plana i oberta. Una finestra sense res davant rep el **39.6 %**, el màxim que pot tenir una finestra vertical; un edifici alt que s'eleva 25° per sobre de la finestra en deixa uns **27 %**, la xifra que la guia britànica (BRE 209) fa servir com a regla general. Cada finestra al detall d'una sala mostra el seu VSC i el seu **angle d'obstrucció** (fins a quina altura s'alcen les coses davant seu).

El cel és el cel cobert estàndard CIE, que és tres vegades més brillant directament a dalt que a l'horitzó, i el tall és exacte: no es pren cap mostra.

## El sol a través de les finestres en una data

Obriu {{ui:El sol a través de les finestres en una data}} i trieu una data. BimCraft segueix el sol durant aquell dia en quarts d'hora i suma, per a cada finestra, la calor que el sol aporta a través del vidre:

- el **sol directe**, quan és davant de la finestra i res del model no el tapa (el mateix tall exacte, girat cap al sol: un balcó que fa ombra al sol alt d'estiu a migdia deixa entrar el sol baix d'hivern);
- la **llum del cel** sobre el vidre, menys el que la finestra no pot veure;
- la llum **reflectida del terra** (la seva reflectància: 0.2 per començar);
- tot això a través del **valor g** del vidre (la part de l'energia del sol que deixa passar: 0.6 per començar; useu la xifra del fabricant) i de la seva proporció de vidre.

Cada sala mostra el total del dia en kWh i el seu pic en watts amb l'hora; el detall d'una sala dibuixa el dia com a gràfic. El cel és clar segons el model de Hottel (Duffie & Beckman, *Solar Engineering of Thermal Processes*), amb les xifres d'estiu o d'hivern del lloc i de l'estació, i l'altura del lloc; la posició del sol és la de NOAA. La latitud i la longitud del lloc surten de l'emplaçament de l'IFC, i el nord, del nord verdader del model; si el model no té emplaçament, escriviu una latitud i una longitud. Les hores són l'hora estàndard (sense horari d'estiu) a la zona horària que escriviu, o la que suggereix la longitud.

Què no inclou: els núvols (és un dia clar), el fet que el vidre deixi passar menys llum amb angles baixos, els marcs que facin ombra al vidre, les persianes, i el que absorbeixen les parets i la coberta. L'estimació de refrigeració de la mateixa pestanya fa servir el pic.

## El factor de llum natural en una quadrícula

Obriu {{ui:Factor de llum natural en una quadrícula}} i {{ui:Calcula la quadrícula}}: BimCraft dibuixa una quadrícula sobre el terra de cada sala a l'altura del pla de treball (0.85 m per començar), mig metre endins des de les parets, i calcula el factor de llum natural a cada punt pel **mètode de flux dividit del BRE**:

- el **component de cel**: el cel cobert vist des del punt a través de l'obertura de cada finestra, menys els marcs;
- el **component reflectit externament**: el que el punt veu dels edificis de fora a través de la finestra, que brillen a una desena part del cel que hi ha darrere (canvieu la brillantor de l'obstrucció si són molt més clars o més foscos);
- el **component reflectit internament**: la llum que rebota per la sala, a partir de les superfícies i reflectàncies de la sala, l'àrea de les finestres i quanta n'hi ha fora (la fórmula del BRE, amb la transmitància del vidre en lloc del vidre transparent que suposava).

Cada sala mostra la seva mitjana, el seu punt més baix i quanta part d'ella rep el 2 % o més; el detall d'una sala dibuixa el seu plànol amb cada punt acolorit segons el seu factor de llum natural i les finestres en vermell. Perquè vagi ràpid en qualsevol ordinador, una sala té com a màxim **400 punts**: en una sala gran, l'espaiat creix per encabir-los (escriviu un espaiat per triar-lo vosaltres).

## Què deixa fora

- Les finestres de coberta (vidres plans o inclinats) es llisten però no es compten: les fórmules d'aquí són per a finestres de paret.
- Les finestres sense sala darrere (un vestíbul sense espai, per exemple) es llisten a part.
- Els ressalts de les finestres (l'obertura es pren a la cara exterior), l'enlluernament, les hores de sol i la llum natural basada en el clima. Per a BS EN 17037, LEED o BREEAM, feu servir un programa de simulació de llum natural.
- Les bandes vénen de la guia britànica més antiga (BS 8206-2), i es mostren com a orientació, mai com un aprovat o un suspès.
