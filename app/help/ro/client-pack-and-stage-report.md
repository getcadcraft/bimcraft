---
title: Pachete pentru client, rapoarte de etapă și compararea variantelor
summary: Creați un pachet pentru client sau un raport de etapă din model, cu variantele de volumetrie comparate după suprafață și cost, suprafețele de planșeu, desenele cu reviziile lor și istoricul emiterii. Fiecare cifră păstrează elementele din spatele ei.
keywords: pachet pentru client, prezentare, raport de etapă, raport, comparare variante, variante, compară variante, suprafață și cost, cost pe variantă, fără tarif, volumetrie, suprafețe de planșeu, listă de desene, istoric emitere, cifre, cifre legate
from: f6679bf5
---

## Ce veți face

Construiți un pachet pentru client sau un raport de etapă din modelul așa cum este acum și comparați variantele de volumetrie păstrate, una lângă alta, după suprafață și cost.

## Pași

1. În panoul din stânga, deschideți **Pachet pentru client și raport de etapă**.
2. Alegeți **Deschidere în Documente** lângă Pachet pentru client sau Raport de etapă. Documentul apare în Documente, din model, unde îi puteți schimba textul.
3. În previzualizare, faceți clic pe o cifră ca să selectați elementele din spatele ei.
4. Alegeți **Construire pachet**. Se salvează o arhivă zip: documentul ca PDF, o imagine a vizualizării 3D și `figures.csv`, care listează fiecare cifră cu GlobalId-urile elementelor ei.

## Câmpurile

Le puteți folosi în orice document.

| Câmp | Ce tipărește |
|---|---|
| `{{stage}}` | Etapa proiectului din detaliile desenului. |
| `{{options}}` | Variantele de volumetrie păstrate, una lângă alta: niveluri, înălțime, amprentă, suprafață brută de planșeu, anvelopă și cost. |
| `{{areas}}` | Suprafața de planșeu pe niveluri, din camere. |
| `{{sheets}}` | Planșele, cu revizia în care se află fiecare și data ultimei emiteri. |
| `{{issues}}` | Istoricul emiterii și jurnalul modificărilor desenelor. |
| `{{changes}}` | Ce s-a schimbat de la ultima emitere, planșă cu planșă. |

## Cum sunt costate variantele

Costul vine doar din tabelul de prețuri al proiectului (Energy/Cost, cost 5D). Nimic nu este estimat în locul dvs.

- Un rând de preț costă o variantă doar dacă clasele sale numesc `IfcBuildingElementProxy`.
- Suprafața de planșeu este costată de un rând ale cărui cuvinte numesc utilizarea variantei, de exemplu birouri. Fără un astfel de rând, se folosește un rând cu cuvintele suprafață brută de planșeu sau masă a clădirii. Un rând pe m² folosește suprafața brută de planșeu. Un rând pe m³ folosește volumul.
- Anvelopa (perimetrul înmulțit cu înălțimea) este costată de un rând cu cuvântul anvelopă sau fațadă.
- O variantă fără un rând care să se potrivească arată **Fără tarif**. Un total este afișat doar când fiecare parte cerută are un tarif.

## De reținut

- Păstrați variantele cu **Păstrare ca variantă** din lista de volumetrie a programului camerelor. Vedeți Variante de volumetrie.
- Un PDF nu poate selecta elemente. În afara BimCraft, `figures.csv` poartă legătura de la fiecare cifră la elementele sale.

## Încă nerealizat

- Planșele și vederile desenate nu sunt plasate în document. Pachetul conține doar o imagine a vizualizării 3D.
