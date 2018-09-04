# Angular crm 

# Exercice sur la page edit 
Problème : prévenir l'utilisateur si il souhaite changer de page alors que le formulaire 
a été édité mais n'est pas sauvegardé 

Diviser pour mieux régner , à chaque role une classe: 
Cas 1 : Quand l'utilisateur quitte ou refresh la page 
( class can-deactivate.class.ts)
Cas 2 : Quand l'utilisateur change de page ( retour navigateur ou page du site )
( class form-candeactivate.class.ts)

Indice dans le désordre: 
- NgOnDestroy
- Javascript confirm 
- Programmation réactive sur le formulaire pour savoir si le formulaire a été submité 
- HostListener sur window:beforeunload
Combo : 
- Fonctionnalité présente sur le formulaire d'ajout 
