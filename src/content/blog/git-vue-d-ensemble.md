---
title: "Git, une vue d'ensemble"
image: "/git_hero.webp"
created: "2025-09-22"
updated: "2025-09-22"
description: "Cet article essaye de donner une vue d'ensemble de git, son écosystème et son utilisation dans notre industrie. J'en profite pour référencer les ressources qui me semblent les plus pertinentes pour son apprentissage."
---

Git est un outil très puissant pour sauvegarder votre code, en garder un historique et collaborer avec d'autres développeurs sur un projet commun. Omniprésent dans l'industrie du développement logiciel, Git est l'une des compétences fondamentales d'un développeur.

Il existe déjà une infinité de bonnes ressources pour apprendre git sur internet, cet article essaye donc plutôt de donner une vue d'ensemble de git, son écosystème et son utilisation dans notre industrie. J'en profite pour référencer les ressources qui me semblent les plus pertinentes pour son apprentissage.

Cet article pourra servir à un développeur débutant comme point d'entrée pour apprendre git, aux managers tech pour comprendre comment leurs développeurs travaillent, aux tech leads comme une ressource à partager avec leurs juniors.

## Commencer

Vous pouvez utiliser Git à travers une interface graphique comme celle de VS Code ou bien l'utiliser à travers la ligne de commande (CLI). On utilisera la version Git CLI dans cet article.

Tout d'abord, il nous faut ce qu'on appelle un _repository_ : c'est un dossier avec votre code source ainsi qu'un dossier `.git` qui contient toutes les informations dont Git a besoin (l'historique de votre code, etc.).

Vous pouvez soit transformer un dossier normal en _repository_ avec la commande `git init`, soit cloner un _repository_ avec la commande `git clone`, c'est-à-dire télécharger le code et tout son historique.

Vous avez donc maintenant un dossier avec votre code et Git en place. On peut donc commencer à modifier ce code pour ajouter des fonctionnalités.

## Sauvegardes et historique

Vous avez modifié certains fichiers, supprimé d'autres, rajouté certains, etc... Vous voulez donc maintenant sauvegarder l'état de votre code, comme ça si vous supprimez du code par accident, vous avez une sauvegarde. On appel cette sauvegarde un **commit** et elle a un identifiant unique (un truc illisible du genre `df8c49b275d5458bbe5a59e8f850c2bceefdcbee`).

On crée ces sauvegardes avec la commande `git commit`, mais attention elle ne sauvegarde pas tout les changements. En fait par défaut elle ne sauvegarde rien, parce qu'il faut dire à Git manuellement quels fichiers on veut mettre dans notre sauvegarde. Pour ça on utilise la commande `git add` pour ajouter ces fichiers à votre sauvegarde. Ça peut sembler fastidieu au départ, mais il existe des commandes pour nous simplifier la vie et les interfaces graphiques permette généralement d'ajouter un fichier en un click à cette sauvegarde.

Donc on liste tout les fichiers qu'on veut sauvegarder (que ce soit un ajout, une modification ou une suppression), puis on valide la sauvergarde avec `git commit`. Il y a un fichier `.gitignore` dans lequel on peut lister tout les fichiers que l'on veut pas sauvegarder par accident (fichiers binaires généré pendant un build, les dépendances qu'on télécharge, etc...).

Ces commits forme une chaine, car chaque commit est toujours lié à un commit précédent. Du coup au lieu de voir un commit comme une sauvegarde, on peut aussi le voir comme un ensemble de changements apporté au code depuis la dernière sauvegarde. On peut voir un commit comme une _modification_ du code. Quand on crée un commit on, on lui donne une description des changements que l'on a apporté depuis le précédent.

Cette chaine de commits forme un historique que l'on conserve précieusement tout au long de la vie du projet, parfois des années. Il permet de revenir à n'importe sauvergade (même d'il y a 3ans si l'historique remonte aussi loin) avec la commande `git checkout`. Concrètement ça ramène tout le dossier dans l'état dans lequel il était à cette époque.

Cet **historique** est **extrèmement précieux** pour une équipe de développement. Non seulement parce que ce sont des sauvegardes, mais aussi parce que cela permet de savoir qui a fait quoi et quand. Les descriptions des commits sont particulièrement importantes pour comprendre, rien qu'en regardant l'historique, sans même lire le code, ce qui a été fait.
C'est pourquoi on essaye de garder cet historique aussi propre que possible en suivant quelques principes:

- Chaque commit doit avoir une description courte et claire, résumant précisément ce qui a été fait. En général on suit une convention.
- Chaque commit doit correspondre à un état fonctionnel du projet. Le projet ne doit pas être "cassé" il doit pouvoir être compilé et exécuté sans erreurs.
- Chaque commit doit être un petit changement simple et cohérent résumable en une phrase, pas faire dix choses à la fois.

Cela correspond aussi à une méthodologie de travail qui force à travailler par petits pas, ça évite de commencer plusieurs taches choses à la fois et se sentir submergé.
