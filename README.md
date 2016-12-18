# agenda
Repo du groupe Agenda Besnard Krief Le Grand Madeva Pisu Ravoisier

Processus d'installation

node modules : npm install

bower components : bower install
- Choisir version 1.6 d'Angular Js
     
Modules externes utilisés : 
- ui.calendar
- angularjs-datepicker

Nous avons dû utiliser un datepicker custom (angularjs-datepicker) 
car nous avons constaté un problème entre le md-datepicker et angularjs 1.6.

A noter également qu'il existe une dépendance entre le module calendrier et le module event (utilisation de la directive event pour afficher les détails d'un évènement lorsque l'on clique dessus dans le calendrier, uniquement dans le case call API)
