---
title: Laisser un assistant IA travailler avec votre modèle
summary: Activez les assistants dans Paramètres pour qu'un assistant sur votre ordinateur puisse trouver des éléments, lire leurs propriétés, les isoler dans la vue et dessiner murs, portes, fenêtres, dalles, niveaux et grilles, via CadCraft Studio. Désactivé tant que vous ne l'activez pas.
keywords: ia, assistant, mcp, script, automatisation, studio, trouver des éléments, isoler, propriétés, autorisations, déconnecter, activité, dessiner des murs, ajouter des portes, ajouter des fenêtres, niveaux, grilles, dalles, annuler, enregistrer, ligne de commande, cli, sans fenêtre, utiliser avec des assistants IA
from: c5ee595b
---

## Ce que vous allez apprendre

Comment laisser un assistant IA (tout assistant qui parle MCP) examiner le modèle IFC ouvert et y dessiner, ce qu'il peut et ne peut pas faire, et comment l'arrêter.

## Ce qu'un assistant peut faire dans BimCraft

| Il demande à | Ce qui se passe | Droit requis |
|---|---|---|
| Trouver des éléments | Il obtient une liste d'éléments par classe, niveau, nom ou valeur de propriété, comme le fait **Trouver** | Lecture |
| Lire les propriétés | Il obtient les attributs d'un élément, son type, ses ensembles de propriétés et ses quantités, tels que **Propriétés** les affiche | Lecture |
| Décrire le modèle, lister les murs | Il obtient les niveaux, murs, portes, fenêtres, pièces, dalles, grilles et colonnes, ainsi que les extrémités, le type et la hauteur de chaque mur | Lecture |
| Isoler, rendre transparent, masquer ou afficher | La vue 3D change comme si vous aviez utilisé le menu {{ui:Afficher}} | Modifier la vue et dessiner |
| Dessiner des murs, portes, fenêtres, dalles, niveaux ou lignes de grille | Le modèle change comme si vous aviez utilisé les outils de {{ui:Dessin}} : les murs se joignent, les pièces, dalles et toitures suivent | Modifier la vue et dessiner |
| Changer un nom ou une valeur de propriété | Le Nom, la Description, le Type d'objet ou le Repère d'un élément, ou une valeur de propriété. Une valeur qu'il partage avec d'autres éléments est d'abord copiée pour lui ; une valeur de son type ne change que si l'assistant le demande, car chaque élément de ce type suit | Modifier la vue et dessiner |
| Déplacer, supprimer, modifier murs, portes et fenêtres | Les éléments se déplacent ou sont supprimés avec ceux qu'ils accueillent ; les murs dessinés avec les outils de {{ui:Dessin}} changent par leurs extrémités ou leur type, les portes et fenêtres par leur emplacement, leur taille ou leur type, et les pièces et jonctions suivent | Modifier la vue et dessiner |
| Mettre en place, disposer et lire une nomenclature | « Une nomenclature des portes par étage, avec coupe-feu et quincaillerie » : l'assistant nomme la nomenclature, ses colonnes (une propriété ou un repère devient une colonne) et son regroupement ; BimCraft la remplit à partir du modèle et la met en page, en prenant dans le standard de bureau ce que l'assistant n'a pas précisé. La configuration rejoint votre liste des {{ui:Nomenclatures}}. Chaque ligne renvoyée nomme ses éléments, afin qu'il puisse les sélectionner | Lecture pour lire ; Modifier la vue et dessiner pour enregistrer une configuration |
| Exporter une nomenclature | CSV, Excel ou texte séparé par des tabulations, à coller dans Google Sheets (rien n'est envoyé à Google) | Exporter |
| Lire et régler les finitions des pièces | Les types de finitions, la finition du sol, des murs et du plafond de chaque pièce, les zones ; les surfaces, nombres de carreaux et volumes de support en découlent ensuite par les nomenclatures de finitions | Lecture ; Modifier la vue et dessiner pour les régler |
| Sélectionner des éléments, annuler ses propres étapes | Les éléments sont choisis dans la vue ; sa dernière étape est annulée | Modifier la vue et dessiner |
| Enregistrer | Un nouveau fichier IFC avec toutes les modifications, comme le fait {{ui:Enregistrer au format IFC}} (l'original n'est jamais modifié) | Enregistrer |
| Exporter en USD | Les modèles ouverts au format OpenUSD (.usda, .usdc ou .usdz), comme l'écrit {{ui:USD}} dans la barre d'outils | Exporter |
| Calculer une image, lancer la file de rendus | Une image de la vue 3D, comme la fait la boîte de dialogue {{ui:Rendu}} avec vos paramètres de rendu, sauf s'il demande d'autres réglages, ou des images de haute qualité ajoutées à la file de la boîte de dialogue et calculées les unes après les autres (la file nécessite WebGPU). Rien ne change dans le modèle ([Calculer un rendu](topic:render)) | Exporter |

Chaque modification faite par un assistant est une étape dans **Modifications**, nommée « Assistant : … » (par exemple « Assistant : ajouter 4 murs »). Ainsi, {{key:Mod+Z}} annule toute son action, et vous voyez à qui appartenait chaque étape. Dans la fenêtre, il ne peut pas ouvrir de fichiers : vous ouvrez le modèle, et il travaille avec celui qui est ouvert.

## Activez-le

Les assistants atteignent BimCraft via CadCraft Studio sur votre ordinateur ; le navigateur classique n'y a aucun accès.

1. Ouvrez {{ui:Paramètres}} et choisissez l'onglet **BimCraft**.
2. Sous **Assistants**, cochez **Laisser les assistants IA et les scripts utiliser BimCraft**.
3. **Lecture** est cochée pour vous. Cochez aussi **Modifier la vue et dessiner** si l'assistant peut isoler et masquer des éléments et dessiner, et **Enregistrer** s'il peut enregistrer le modèle sous forme de nouveau fichier.
4. Connectez l'assistant dans Studio (Studio affiche l'adresse et les paramètres à coller dans l'assistant).

## Pendant qu'un assistant est connecté

Une remarque en haut du panneau de droite indique quel assistant est connecté et ce qu'il peut faire. Cliquez sur {{ui:Déconnecter}} pour mettre fin immédiatement à sa session ; il devra se reconnecter pour continuer.

**Activité**, sous **Assistants** dans les Paramètres, liste chaque appel fait par l'assistant, du plus récent au plus ancien, avec l'indication de réussite.

:::tip
Demandez en mots simples, par exemple « isolez les murs extérieurs du niveau 1 », « quelles portes n'ont pas de coupe-feu ? » ou « dessinez une pièce de 6 par 4 mètres au niveau 1 avec une porte dans le mur sud ». L'assistant trouve les éléments et les affiche dans votre vue, ou les dessine.
:::

## Sans fenêtre : scripts et ligne de commande

Les mêmes outils de dessin fonctionnent sur des fichiers IFC dans des dossiers que vous indiquez, sans fenêtre ouverte : le serveur MCP et la ligne de commande de CadCraft peuvent créer un nouveau bâtiment ou ouvrir un fichier IFC, le décrire, ajouter murs, portes, fenêtres, dalles, niveaux et grilles, annuler, puis l'enregistrer comme nouveau fichier `.ifc`. Vous décidez quels dossiers il peut utiliser, et s'il peut modifier ou enregistrer quoi que ce soit.

## Désactivez-le

Décochez **Laisser les assistants IA et les scripts utiliser BimCraft**. Chaque assistant est immédiatement déconnecté, et le réglage est conservé pour la prochaine fois.

## Voir aussi

- [Recettes pour assistants IA](common:assistants-recipes) : exemples détaillés, chacun avec les outils qu'il appelle.
- [Trouver des éléments par classe, nom ou propriété](topic:find)
- [Masquer, isoler et rendre transparents des éléments](topic:hide-and-isolate)
- [Paramètres de BimCraft](topic:settings)
