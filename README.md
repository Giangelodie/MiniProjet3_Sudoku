# Projet-3-Sudoku

La compilation du code CSS se faire de la façon suivante :

    lein garden once
    
Pour lancer l'application:

    lein build
    
(il faut parfois faire un lein clean au préalable)

L'application va tourner "en live" dans le navigateur.
Après un petit peu d'attente, ouvrez la page  http://localhost:9500.
Vous pouvez éditer le code Clojurescript en direct, la page web sera mise à jour automatiquement.
(en cas de problème sérieus, vous pouvez toujours refaire lein build).

Remarque : il n'est pas évident de synchroniser l'éditeur de code avec le navigateur.
Les tests sont lancés dans la page http://localhost:9500/figwheel-extra-main/auto-testing

Le solveur se trouve dans : src/cljs/mrsudoku/model/