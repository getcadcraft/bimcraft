---
title: Afegeix un motor de renderitzat amb un complement
summary: Què pot afegir un complement a la llista Motor del diàleg {{ui:Renderitza}}, el permís que necessita per executar un programa, i què comprova i demana Studio.
keywords: complement, addon, motor, motor de renderitzat, desenvolupador, engine.run, permís, programa, script, signat, studio, api
from: 06295376
---

Un complement (Configuració › Complements) pot afegir un motor a la llista Motor de {{ui:Renderitza}}. El text complet per als autors de complements és la secció 16 de l'especificació del complement; en resum:

- El complement registra un motor amb un identificador que comença pel seu propi, un nom, configuració opcional i **o bé** un programa per executar **o bé** una funció en JavaScript que dibuixa la imatge.
- Un motor que executa un programa necessita el permís **`engine.run`**, que es mostra abans d'instal·lar i a Configuració. Només s'executa a Studio; al navegador apareix com a fitxer per desar.
- El complement indica el programa (un nom de fitxer simple, mai un intèrpret d'ordres), un script que està **dins del complement signat** i arguments fets de marcadors i paraules simples. Studio troba el programa o us demana que hi apunteu una sola vegada.
- La primera vegada que un complement executa un programa, **Studio us pregunta en el seu propi diàleg**: quin complement, quin programa, i que un script pot fer tot el que pot fer el programa. Permeteu-ho només per a un complement de confiança. La resposta es recorda per a aquest complement i programa.
- El paquet (l'escena en USD i un fitxer de configuració, amb el fitxer glTF quan el complement el demana) i el script del complement es posen en una carpeta temporal nova, el programa s'executa allà i la imatge torna marcada amb el nom del motor del complement.

:::note
Els complements només poden afegir motors de renderitzat a partir de l'API de complements 1.4. Un exemple resolt per a un renderitzador de línia d'ordres de codi obert és al seu propi repositori; encara no s'ha provat amb aquest renderitzador.
:::
