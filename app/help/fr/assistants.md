---
title: Laisser un assistant IA travailler avec votre modèle
summary: Activez les assistants dans Paramètres pour qu'un assistant sur votre ordinateur puisse trouver des éléments, lire leurs propriétés, les isoler dans la vue et dessiner murs, portes, fenêtres, planchers, niveaux et trames, via CadCraft Studio. Désactivés tant que vous ne les activez pas.
keywords: ia, assistant, mcp, script, automatisation, studio, trouver des éléments, isoler, propriétés, autorisations, déconnecter, activité, dessiner des murs, ajouter des portes, ajouter des fenêtres, niveaux, trames, planchers, annuler, enregistrer, ligne de commande, cli, sans fenêtre, utiliser avec des assistants IA
from: 66d72742
---

## Ce que vous allez apprendre

Comment laisser un assistant IA (tout assistant qui parle MCP) examiner le modèle IFC ouvert et y dessiner, ce qu'il peut et ne peut pas faire, et comment l'arrêter.

## Ce qu'un assistant peut faire dans BimCraft

| Il demande à | Ce qui se passe | Nécessite |
|---|---|---|
| Trouver des éléments | Il obtient une liste d'éléments par classe, niveau, nom ou valeur de propriété, comme le fait **Rechercher** | Lecture |
| Lire les propriétés | Il obtient les attributs d'un élément, son type, ses ensembles de propriétés et ses quantités, tels que **Propriétés** les affiche | Lecture |
| Décrire le modèle, lister les murs | Il obtient les niveaux, murs, portes, fenêtres, pièces, planchers, trames et colonnes, ainsi que les extrémités, le type et la hauteur de chaque mur | Lecture |
| Isoler, rendre transparent, masquer ou afficher | La vue 3D change comme si vous aviez utilisé le menu {{ui:Afficher}} | Modifier la vue et dessiner |
| Dessiner des murs, portes, fenêtres, planchers, niveaux ou lignes de trame | Le modèle change comme si vous aviez utilisé les outils {{ui:Dessin}} : les murs se joignent, les pièces, planchers et toitures suivent | Modifier la vue et dessiner |
| Changer un nom ou une valeur de propriété | Le Nom, la Description, le Type d'objet ou l'Étiquette d'un seul élément, ou une valeur de propriété. Une valeur partagée avec d'autres éléments est d'abord copiée pour lui ; une valeur de son type ne change que si l'assistant le précise, car chaque élément de ce type suit | Modifier la vue et dessiner |
| Déplacer, supprimer, modifier murs, portes et fenêtres | Les éléments se déplacent ou se suppriment avec ceux qu'ils accueillent ; les murs dessinés avec les outils {{ui:Dessin}} changent par leurs extrémités ou leur type, les portes et fenêtres par leur emplacement, leur taille ou leur type, et les pièces et jonctions suivent | Modifier la vue et dessiner |
| Mettre en place, arranger et lire une nomenclature | « Une nomenclature des portes par étage, avec la résistance au feu et la quincaillerie » : l'assistant nomme la nomenclature, ses colonnes (une propriété ou une étiquette devient une colonne) et son regroupement ; BimCraft la remplit à partir du modèle et la met en forme, en reprenant de la norme d'agence ce que l'assistant n'a pas précisé. La mise en place rejoint votre liste {{ui:Nomenclatures}}. Chaque ligne renvoyée nomme ses éléments, pour qu'il puisse les sélectionner | Lecture pour lire ; Modifier la vue et dessiner pour enregistrer une mise en place |
| Exporter une nomenclature | CSV, Excel ou texte séparé par des tabulations à coller dans Google Sheets (rien n'est envoyé à Google) | Exporter |
| Lire et définir les finitions des pièces | Les types de finition, la finition du sol, des murs et du plafond de chaque pièce, les zones ; les surfaces, nombres de carreaux et volumes de support viennent ensuite des nomenclatures de finitions | Lecture ; Modifier la vue et dessiner pour définir |
| Sélectionner des éléments, annuler ses propres étapes | Les éléments sont choisis dans la vue ; sa dernière étape est annulée | Modifier la vue et dessiner |
| Enregistrer | Un nouveau fichier IFC avec toutes les modifications, comme le fait {{ui:Enregistrer au format IFC}} (l'original n'est jamais modifié) | Enregistrer |
| Exporter en USD | Les modèles ouverts en OpenUSD (.usda, .usdc ou .usdz), comme l'écrit {{ui:USD}} dans la barre d'outils | Exporter |
| Faire un rendu, lancer la file de rendu | Une image de la vue 3D, comme la boîte de dialogue {{ui:Rendu}} la produit avec vos paramètres de rendu, sauf s'il en demande d'autres ; ou des images de haute qualité ajoutées à la file de la boîte de dialogue et rendues l'une après l'autre (la file nécessite WebGPU). Rien ne change dans le modèle ([Faire un rendu d'image](topic:render)) | Exporter |

Chaque modification faite par un assistant est une étape dans **Modifications**, nommée « Assistant : … » (par exemple « Assistant : ajouter 4 murs »), de sorte que {{key:Mod+Z}} reprend toute son action, et vous voyez à qui appartient l'étape. Dans la fenêtre, il ne peut pas ouvrir de fichiers : vous ouvrez le modèle ; il travaille avec celui qui est ouvert.

## Activer

Les assistants atteignent BimCraft via CadCraft Studio sur votre ordinateur ; le navigateur seul n'a pas de moyen d'accès.

1. Ouvrez {{ui:Paramètres}} et choisissez l'onglet **BimCraft**.
2. Sous **Assistants**, cochez **Laisser les assistants IA et les scripts utiliser BimCraft**.
3. **Lecture** est cochée pour vous. Cochez aussi **Modifier la vue et dessiner** si l'assistant peut isoler, masquer et dessiner des éléments, et **Enregistrer** s'il peut enregistrer le modèle sous un nouveau fichier.
4. Connectez l'assistant dans Studio (Studio affiche l'adresse et les réglages à coller dans l'assistant).

## Pendant qu'un assistant est connecté

Une note en haut du panneau de droite indique quel assistant est connecté et ce qu'il peut faire. Cliquez sur {{ui:Déconnecter}} pour mettre fin à sa session immédiatement ; il doit se reconnecter pour continuer.

**Activité**, sous **Assistants** dans Paramètres, liste chaque appel fait par l'assistant, du plus récent au plus ancien, avec indication de réussite.

:::tip
Demandez en termes simples, par exemple « isole les murs extérieurs du niveau 1 », « quelles portes n'ont pas de résistance au feu ? » ou « dessine une pièce de 6 sur 4 mètres au niveau 1 avec une porte dans le mur sud ». L'assistant trouve les éléments et les affiche dans votre vue, ou les dessine.
:::

## Sans fenêtre : scripts et ligne de commande

Les mêmes outils de dessin fonctionnent sur des fichiers IFC dans les dossiers que vous désignez, sans fenêtre ouverte : le serveur MCP et la ligne de commande de CadCraft peuvent créer un nouveau bâtiment ou ouvrir un fichier IFC, le décrire, ajouter des murs, portes, fenêtres, planchers, niveaux et trames, annuler, et l'enregistrer en nouveau fichier `.ifc`. Quatre outils supplémentaires conviennent aux scripts : `ifc_batch` exécute jusqu'à 200 étapes de modification d'un seul bloc (tout ou rien : une annulation reprend tout le lot, et une étape refusée annule le reste et indique l'étape) ; `ifc_describe` liste les niveaux et chaque mur avec ses portes et fenêtres ; `ifc_render_png` écrit une image de contrôle à ombrage plat du modèle (sans matériaux, textures ni ombres) sans fenêtre ; `usd_export` écrit `.usda`, `.usdc` ou `.usdz`. En ligne de commande, `cadcraft bim script.json --from model.ifc -o out.ifc` exécute un script d'étapes, et `--usd`, `--png` et `--plan` écrivent un fichier USD, une image ou un plan lors de la même exécution. Vous décidez quels dossiers il peut utiliser et s'il peut modifier ou enregistrer quoi que ce soit.

## Désactiver

Décochez **Laisser les assistants IA et les scripts utiliser BimCraft**. Chaque assistant est déconnecté immédiatement, et le réglage est conservé pour la prochaine fois.

## Voir aussi

- [Recettes pour assistants IA](common:assistants-recipes) : exemples détaillés, chacun avec les outils qu'il appelle.
- [Trouver des éléments par classe, nom ou propriété](topic:find)
- [Masquer, isoler et rendre transparents des éléments](topic:hide-and-isolate)
- [Paramètres de BimCraft](topic:settings)
