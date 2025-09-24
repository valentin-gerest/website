---
title: "Git, une vue d'ensemble"
image: "/git_hero.webp"
created: "2025-09-22"
updated: "2025-09-22"
description: "Cet article essaye de donner une vue d'ensemble de git, son écosystème et son utilisation dans notre industrie. J'en profite pour référencer les ressources qui me semblent les plus pertinentes pour son apprentissage."
draft: true
---

Git est un outil très puissant pour sauvegarder votre code, en garder un historique et collaborer avec d'autres développeurs sur un projet commun. Omniprésent dans l'industrie du développement logiciel, Git est l'une des compétences fondamentales d'un développeur.

Il existe déjà une infinité de bonnes ressources pour apprendre git sur internet, cet article essaye donc plutôt de donner une vue d'ensemble de git, son écosystème et son utilisation dans notre industrie. J'en profite pour référencer les ressources qui me semblent les plus pertinentes pour son apprentissage.

Cet article pourra servir à un développeur débutant comme point d'entrée pour apprendre git, aux managers tech pour comprendre comment leurs développeurs travaillent, aux tech leads comme une ressource à partager avec leurs juniors.

## Pour commencer

Vous pouvez utiliser Git à travers une interface graphique comme celle de VS Code ou bien l'utiliser à travers la ligne de commande (CLI). On utilisera la version Git CLI dans cet article.

Tout d'abord, il nous faut ce qu'on appelle un _repository_ : c'est un dossier avec votre code source ainsi qu'un dossier `.git` qui contient toutes les informations dont Git a besoin (l'historique de votre code, etc.).

Vous pouvez soit transformer un dossier normal en _repository_ avec la commande `git init`, soit cloner un _repository_ avec la commande `git clone`, c'est-à-dire télécharger le code et tout son historique.

## Sauvegardes et historique: les commits

Imaginons que vous venez de modifier certains fichiers, de supprimer d'autres, d'en rajouter certains, dans votre code. Vous voulez donc maintenant sauvegarder l'état de votre code, comme ça si vous supprimez du code par accident, vous aurez une sauvegarde. On appelle cette sauvegarde un **commit** et elle a un identifiant unique (ex: df8c49b275d5458bbe5a59e8f850c2bceefdcbee). On peut donc aussi voir ce commit comme un ensemble de changements apportés au code depuis la sauvegarde précédente, comme une _modification_ du code.

Pour créer cette sauvegarde, ce **commit** :

- On liste tous les fichiers qui ont changé depuis le commit précédent (modifiés, ajoutés ou supprimés) avec la commande `git status`.
- On choisit lesquels de ces fichiers affectés on veut **ajouter à la sauvegarde** en appelant `git add <nom_fichier>` une ou plusieurs fois.
- On valide la sauvegarde et on lui donne une description avec la commande `git commit -m <description du commit>`.

On peut lister les fichiers et dossiers que Git doit ignorer (et qui ne seront jamais sauvegardés) dans `.gitignore`.

C'est commits forme une chaines de changements que l'on conserve précieusement tout au long de la vie du projet, parfois des années. Il permet de revenir à n'importe quelle sauvegarde (même d'il y a 3 ans si l'historique remonte aussi loin) avec la commande `git checkout`. Concrètement, ça ramène tout le dossier dans l'état dans lequel il était à cette époque.

Cet **historique** est **extrêmement précieux** pour une équipe de développement. Non seulement parce que ce sont des sauvegardes, mais aussi parce que cela permet de savoir qui a fait quoi et quand. Les descriptions des commits sont particulièrement importantes pour comprendre, rien qu'en regardant l'historique et sans même lire le code, ce qui a été fait.
C'est pourquoi on essaye de garder cet historique aussi propre que possible en suivant quelques principes :

- Chaque commit doit avoir une description courte et claire, résumant précisément ce qui a été fait. En général, on suit une convention.
- Chaque commit doit correspondre à un état fonctionnel du projet. Le projet ne doit pas être "cassé" : il doit pouvoir être compilé et exécuté sans erreurs.
- Chaque commit doit être un petit changement simple et cohérent, résumable en une phrase, pas faire dix choses à la fois.

Cela correspond aussi à une méthodologie de travail qui force à avancer par petits pas : ça évite de commencer plusieurs tâches à la fois et de se sentir submergé.

## Collaborer

L'autre grande force de Git, c'est le travail collaboratif. Chacun travaille de son côté sur sa copie locale du code, puis git permet de combiner le travail de chacun dans une version finale.
Pour cela on utilise un serveur qui sert de point de synchronisation entre développeurs. Bien souvent c'est Github, Bitbucket, ou Gitlab, etc. C'est ce qu'on appelle une source.
On peut utiliser la commande `git pull` pour récupérer le travail des autres et `git push` pour mettre en ligne son travail.

Pour pouvoir travailler à plusieurs efficacement on utilise la notion de branche. Les branches ce sont des versions alternatives de votre code qui évoluent en parallèle.
En général il y a une branche principale `main`, qui correspond au logiciel qui sera déployé en production.

Quand un développeur veut rajouter une fonctionnalité à l'application, il crée un nouvelle branche avec `git branch` à partir du dernier commit sur `main` puis à partir de là il peut rajouter des commits dans cette branche sans affecter l'historique de `main`.

Ensuite lorsqu'il veut rajouter
