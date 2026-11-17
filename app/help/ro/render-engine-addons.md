---
title: Adăugarea unui motor de randare cu un supliment
summary: Ce poate adăuga un supliment în lista Motor a casetei de dialog Randare, permisiunea de care are nevoie pentru a rula un program și ce verifică și întreabă Studio.
keywords: supliment, addon, motor, motor de randare, dezvoltator, engine.run, permisiune, program, script, semnat, studio, api
from: 06295376
---

Un supliment (Setări › Suplimente) poate adăuga un motor în lista Motor a {{ui:Randare}}. Textul complet pentru autorii de suplimente este secțiunea 16 din specificația suplimentului; pe scurt:

- Suplimentul înregistrează un motor cu un id care începe cu al său, un nume, setări opționale și **fie** un program de rulat, **fie** o funcție în JavaScript care desenează imaginea.
- Un motor care rulează un program are nevoie de permisiunea **`engine.run`**, afișată înainte de instalare și în Setări. Rulează doar în Studio; în browser apare ca un fișier de salvat.
- Suplimentul numește programul (un nume simplu de fișier: niciodată un shell), un script care se află **în interiorul suplimentului semnat** și argumente formate din substituenți și cuvinte simple. Studio găsește programul sau vă cere să îl indicați o singură dată.
- Prima dată când un supliment rulează un program, **Studio întreabă în propria casetă de dialog**: ce supliment, ce program și că un script poate face orice poate face programul. Permiteți-l doar pentru un supliment de încredere. Răspunsul este reținut pentru acel supliment și program.
- Pachetul (scena ca USD și un fișier de setări, cu fișierul glTF când suplimentul îl cere) și scriptul suplimentului ajung într-un dosar temporar nou, programul rulează acolo, iar imaginea revine marcată cu numele motorului suplimentului.

:::note
Suplimentele pot adăuga motoare de randare doar din API-ul suplimentelor 1.4. Un exemplu lucrat pentru un program de randare cu cod deschis, din linia de comandă, se află în propriul depozit; nu a fost încă rulat în acel program.
:::
