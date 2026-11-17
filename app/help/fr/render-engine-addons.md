---
title: Ajouter un moteur de rendu avec un module complémentaire
summary: Ce qu'un module complémentaire peut ajouter à la liste Moteur de la boîte de dialogue Rendu, l'autorisation nécessaire pour lancer un programme, et ce que Studio vérifie et demande.
keywords: module complémentaire, addon, moteur, moteur de rendu, développeur, engine.run, autorisation, programme, script, signé, studio, api
from: 06295376
---

Un module complémentaire (Paramètres › Modules complémentaires) peut ajouter un moteur à la liste Moteur de {{ui:Rendu}}. Le texte complet destiné aux auteurs de modules est la section 16 de la spécification des modules complémentaires ; en bref :

- Le module enregistre un moteur avec un identifiant qui commence par le sien, un nom, des réglages facultatifs et **soit** un programme à lancer **soit** une fonction JavaScript qui dessine l'image.
- Un moteur qui lance un programme a besoin de l'autorisation **`engine.run`**, affichée avant l'installation et dans Paramètres. Il ne fonctionne que dans Studio ; dans le navigateur, il apparaît comme un fichier à enregistrer.
- Le module indique le programme (un simple nom de fichier, jamais un shell), un script qui se trouve **à l'intérieur du module signé**, et des arguments composés de marqueurs et de mots simples. Studio trouve le programme ou vous demande de le désigner une fois.
- La première fois qu'un module lance un programme, **Studio vous demande dans sa propre boîte de dialogue** : quel module, quel programme, et qu'un script peut faire tout ce que peut faire le programme. N'autorisez que les modules en lesquels vous avez confiance. Votre réponse est mémorisée pour ce module et ce programme.
- Le paquet (la scène au format USD et un fichier de réglages, avec le fichier glTF lorsque le module le demande) et le script du module sont placés dans un dossier temporaire neuf, le programme s'y exécute, et l'image revient, marquée du nom de moteur du module.

:::note
Les modules complémentaires ne peuvent ajouter des moteurs de rendu qu'à partir de l'API des modules complémentaires 1.4. Un exemple détaillé pour un moteur de rendu en ligne de commande libre se trouve dans son propre dépôt ; il n'a pas encore été exécuté avec ce moteur.
:::
