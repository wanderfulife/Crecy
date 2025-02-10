export const questions = [
  {
    id: "Q1",
    text: "Quelle est la raison de votre présence en gare ?",
    options: [
      { id: 1, text: "Je vais prendre le train / bus", next: "QE1" },
      { id: 2, text: "Je viens de descendre du train / bus", next: "QS1" },
      { id: 3, text: "Autre", next: "end" }
    ]
  },
  // Questions Entrant (prefix QE)
  {
    id: "QE1",
    text: "Quelle est la commune d'origine de votre déplacement actuel ? (D'où venez-vous ?)",
    options: [
      { id: 1, text: "Crécy-la-Chapelle", next: "QE2" },
      { id: 2, text: "Autres, à préciser :", next: "QE1_precision" }
    ]
  },
  {
    id: "QE1_precision",
    text: "Précisez la commune",
    usesCommuneSelector: true,
    next: "QE3",
  },
  {
    id: "QE2",
    text: "Si commune de départ Crécy-la-Chapelle, précisez le Hameau",
    options: [
      { id: 1, text: "Férolles", next: "QE3" },
      { id: 2, text: "La Chapelle-sur-Crécy", next: "QE3" },
      { id: 3, text: "Le Choisel", next: "QE3" },
      { id: 4, text: "Le Souterrain", next: "QE3" },
      { id: 5, text: "Les Hauts-Soleil", next: "QE3" },
      { id: 6, text: "Libernon", next: "QE3" },
      { id: 7, text: "Mongrolle – la Grand Cour", next: "QE3" },
      { id: 8, text: "Montaudier", next: "QE3" },
      { id: 9, text: "Montbarbin", next: "QE3" },
      { id: 10, text: "Montpichet", next: "QE3" },
      { id: 11, text: "Serbonne", next: "QE3" }
    ]
  },
  {
    id: "QE3",
    text: "Quel est le motif principal de votre déplacement",
    options: [
      { id: 1, text: "Lieu de travail", next: "QE4" },
      { id: 2, text: "Ecole/scolaire", next: "QE4" },
      { id: 3, text: "études supérieures", next: "QE4" },
      { id: 4, text: "loisirs", next: "QE4" },
      { id: 5, text: "démarches administratives", next: "QE4" },
      { id: 6, text: "autre, à préciser :", next: "QE3_precision" }
    ]
  },
  {
    id: "QE3_precision",
    text: "Préciser le motif de votre déplacement :",
    freeText: true,
    next: "QE4"
  },
  {
    id: "QE4",
    text: "Quelle est votre gare ou arrêt bus de descente de votre déplacement actuel ?",
    freeText: true,
    freeTextPlaceholder: "Gare/arrêt et commune (si Paris mettre le code postal)",
    next: "QE5"
  },
  {
    id: "QE5",
    text: "Quel est le mode de transport utilisé depuis votre lieu de départ jusqu'à la gare?",
    options: [
      { id: 1, text: "voiture (conducteur)", next: "QE6" },
      { id: 2, text: "voiture passager (dans une voiture stationnée en gare - covoiturage)", next: "QE6" },
      { id: 3, text: "voiture passager (dans une voiture non stationnée en gare - dépose)", next: "QE6" },
      { id: 4, text: "à pied", next: "QE7" },
      { id: 5, text: "bus", next: "QE7" },
      { id: 6, text: "car", next: "QE7" },
      { id: 7, text: "vélo stationné", next: "QE7" },
      { id: 8, text: "vélo embarqué", next: "QE7" },
      { id: 9, text: "moto", next: "QE6" },
      { id: 10, text: "taxi/VTC", next: "QE7" },
      { id: 11, text: "Autre moyen", next: "QE5_precision" }
    ]
  },
  {
    id: "QE5_precision",
    text: "Préciser le mode de transport :",
    freeText: true,
    next: "QE6"
  },
  {
    id: "QE6",
    text: "Si VOITURE, pourriez-vous préciser la zone de stationnement",
    options: [
      { id: 1, text: "parking gare", next: "QE7" },
      { id: 2, text: "autre parking", next: "QE7" },
      { id: 3, text: "sur voirie", next: "QE7" },
      { id: 4, text: "Autres", next: "QE6_precision" }
    ]
  },
  {
    id: "QE6_precision",
    text: "Préciser la zone de stationnement :",
    freeText: true,
    next: "QE7"
  },
  {
    id: "QE7",
    text: "Quelle est la durée du trajet pour arriver à votre gare ?",
    freeText: true,
    freeTextPlaceholder: "minutes",
    next: "QE8"
  },
  {
    id: "QE8",
    text: "Quelle est la fréquence de ce déplacement depuis la gare de Crécy-la-Chapelle ?",
    options: [
      { id: 1, text: "tous les jours", next: "QE9" },
      { id: 2, text: "au moins 1 fois par semaine", next: "QE9" },
      { id: 3, text: "au moins une fois par mois", next: "QE9" },
      { id: 4, text: "moins d'une fois par mois", next: "QE9" },
      { id: 5, text: "première fois", next: "QE9" }
    ]
  },
  {
    id: "QE9",
    text: "Faites-vous parfois ce même trajet depuis une autre gare ?",
    options: [
      { id: 1, text: "OUI", next: "QE10" },
      { id: 2, text: "NON", next: "QE11" }
    ]
  },
  {
    id: "QE10",
    text: "Si oui, dans quelle gare allez-vous ?",
    freeText: true,
    next: "QE11"
  },
  {
    id: "QE11",
    text: "Avez-vous des suggestions pour améliorer le fonctionnement et/ou la desserte de la gare de Crécy-laChapelle ?",
    freeText: true,
    next: "end"
  },
  // Questions Sortant (prefix QS)
  {
    id: "QS1",
    text: "Quelle est la commune de destination de votre déplacement actuel ? (Où allez-vous ?)",
    options: [
      { id: 1, text: "Crécy-la-Chapelle", next: "QS2" },
      { id: 2, text: "Autres, à préciser :", next: "QS1_precision" }
    ]
  },
  {
    id: "QS1_precision",
    text: "Précisez la commune",
    usesCommuneSelector: true,
    next: "QS3",
  },
  {
    id: "QS2",
    text: "Si commune de destination Crécy-la-Chapelle, précisez le Hameau",
    options: [
      { id: 1, text: "Férolles", next: "QS3" },
      { id: 2, text: "La Chapelle-sur-Crécy", next: "QS3" },
      { id: 3, text: "Le Choisel", next: "QS3" },
      { id: 4, text: "Le Souterrain", next: "QS3" },
      { id: 5, text: "Les Hauts-Soleil", next: "QS3" },
      { id: 6, text: "Libernon", next: "QS3" },
      { id: 7, text: "Mongrolle – la Grand Cour", next: "QS3" },
      { id: 8, text: "Montaudier", next: "QS3" },
      { id: 9, text: "Montbarbin", next: "QS3" },
      { id: 10, text: "Montpichet", next: "QS3" },
      { id: 11, text: "Serbonne", next: "QS3" }
    ]
  },
  {
    id: "QS3",
    text: "Quel est le motif principal de votre déplacement",
    options: [
      { id: 1, text: "Lieu de travail", next: "QS4" },
      { id: 2, text: "scolaire", next: "QS4" },
      { id: 3, text: "études supérieures", next: "QS4" },
      { id: 4, text: "loisirs", next: "QS4" },
      { id: 5, text: "démarches administratives", next: "QS4" },
      { id: 6, text: "autre, à préciser :", next: "QS3_precision" }
    ]
  },
  {
    id: "QS3_precision",
    text: "Préciser le motif de votre déplacement :",
    freeText: true,
    next: "QS4"
  },
  {
    id: "QS4",
    text: "Quelle est la gare ou arrêt bus de montée de votre déplacement actuel ?",
    freeText: true,
    freeTextPlaceholder: "Gare/arrêt et commune (si Paris mettre le code postal)",
    next: "QS5"
  },
  {
    id: "QS5",
    text: "Quel sera le mode de transport utilisé vers votre de lieu de destination finale",
    options: [
      { id: 1, text: "voiture (conducteur)", next: "QS6" },
      { id: 2, text: "voiture (passager) (dans une voiture stationnée en gare - covoiturage)", next: "QS6" },
      { id: 3, text: "Voiture - passager (dans une voiture non stationnée en gare - reprise)", next: "QS7" },
      { id: 4, text: "à pied", next: "QS7" },
      { id: 5, text: "Bus", next: "QS7" },
      { id: 6, text: "Car", next: "QS7" },
      { id: 7, text: "vélo stationné", next: "QS7" },
      { id: 8, text: "vélo embarqué", next: "QS7" },
      { id: 9, text: "moto", next: "QS6" },
      { id: 10, text: "taxi/VTC", next: "QS7" },
      { id: 11, text: "Autre moyen", next: "QS5_precision" }
    ]
  },
  {
    id: "QS5_precision",
    text: "Préciser le mode de transport :",
    freeText: true,
    next: "QS6"
  },
  {
    id: "QS6",
    text: "Si reprise de la voiture en gare de Crécy-la-Chapelle, pourriez-vous préciser la zone de stationnement",
    options: [
      { id: 1, text: "parking gare", next: "QS7" },
      { id: 2, text: "autre parking", next: "QS7" },
      { id: 3, text: "sur voirie", next: "QS7" },
      { id: 4, text: "Autres", next: "QS6_precision" }
    ]
  },
  {
    id: "QS6_precision",
    text: "Préciser la zone de stationnement :",
    freeText: true,
    next: "QS7"
  },
  {
    id: "QS7",
    text: "Quelle est la durée du trajet pour arriver à votre destination finale ?",
    freeText: true,
    freeTextPlaceholder: "minutes",
    next: "QS8"
  },
  {
    id: "QS8",
    text: "Quelle est la fréquence de ce déplacement",
    options: [
      { id: 1, text: "tous les jours", next: "QS9" },
      { id: 2, text: "au moins 1 fois par semaine", next: "QS9" },
      { id: 3, text: "au moins une fois par mois", next: "QS9" },
      { id: 4, text: "moins d'une fois par mois", next: "QS9" },
      { id: 5, text: "première fois", next: "QS9" }
    ]
  },
  {
    id: "QS9",
    text: "Faites-vous parfois ce même trajet depuis une autre gare que celle de Crécy-la-Chapelle ?",
    options: [
      { id: 1, text: "OUI", next: "QS10" },
      { id: 2, text: "NON", next: "QS11" }
    ]
  },
  {
    id: "QS10",
    text: "Si oui, dans quelle gare descendez-vous ?",
    freeText: true,
    next: "QS11"
  },
  {
    id: "QS11",
    text: "Avez-vous des suggestions pour améliorer le fonctionnement et/ou la desserte de la gare de Crécy-la-Chapelle ?",
    freeText: true,
    next: "end"
  }
];



// export const questions = [
//   {
//     id: "Poste",
//     text: "Zone de l'enquête",
//     options: [
//       { id: 1, text: "Quai B/C", next: "Q2" },
//       { id: 2, text: "Quai D/E", next: "Q2" },
//       { id: 3, text: "Quai E/F", next: "Q2" },
//       { id: 4, text: "Quai F/G", next: "Q2" },
//     ]
//   },
//   {
//     id: "Q2",
//     text: "De quelle commune arrivez-vous ?",
//     options: [
//       { id: 1, text: "Versailles", next: "Q3_quartier" },
//       { id: 2, text: "Autre", next: "Q3" },
//     ]
//   },
//   {
//     id: "Q3_quartier",
//     text: "Précisez le quartier",
//     freeText: true,
//     next: "Q4"
//   },
//   {
//     id: "Q3",
//     text: "Précisez la commune",
//     usesCommuneSelector: true,
//     next: "Q4"
//   },
//   {
//     id: "Q4",
//     text: "Ce lieu est-il … ?",
//     options: [
//       { id: 1, text: "Votre domicile", next: "Q5a" },
//       { id: 2, text: "Votre lieu de travail habituel", next: "Q5a" },
//       { id: 3, text: "Un lieu de rendez-vous professionnel", next: "Q5a" },
//       { id: 4, text: "Votre établissement scolaire, université", next: "Q5a" },
//       { id: 5, text: "Un lieu d'achats, courses, …", next: "Q5a" },
//       { id: 6, text: "Un lieu de loisirs", next: "Q5a" },
//       { id: 7, text: "Autres", next: "Q4_autre" }
//     ]
//   },
//   {
//     id: "Q4_autre",
//     text: "Précisez",
//     freeText: true,
//     next: "Q5a"
//   },
//   {
//     id: "Q5a",
//     text: "Dans quelle commune vous rendez-vous ?",
//     options: [
//       { id: 1, text: "Versailles", next: "Q5_quartier" },
//       { id: 2, text: "Autre", next: "Q5" },
//     ]
//   },
//   {
//     id: "Q5_quartier",
//     text: "Précisez le quartier",
//     freeText: true,
//     next: "Q6"
//   },
//   {
//     id: "Q5",
//     text: "Dans quelle commune vous rendez-vous ?",
//     usesCommuneSelector: true,
//     next: "Q6"
//   },
//   {
//     id: "Q6",
//     text: "Ce lieu est-il … ?",
//     options: [
//       { id: 1, text: "Votre domicile", next: "Q7" },
//       { id: 2, text: "Votre lieu de travail habituel", next: "Q7" },
//       { id: 3, text: "Un lieu de rendez-vous professionnel", next: "Q7" },
//       { id: 4, text: "Votre établissement scolaire, université", next: "Q7" },
//       { id: 5, text: "Un lieu d'achats, courses, …", next: "Q7" },
//       { id: 6, text: "Un lieu de loisirs", next: "Q7" },
//       { id: 7, text: "Autres", next: "Q6_autre" }
//     ]
//   },
//   {
//     id: "Q6_autre",
//     text: "Précisez",
//     freeText: true,
//     next: "Q7"
//   },
//   {
//     id: "Q7",
//     text: "Par quelle entrée êtes vous arrivé à la gare ?",
//     options: [
//       { id: 1, text: "Parvis Nord", next: "Q11" },
//       { id: 2, text: "Accès gare routière", next: "Q11" },
//       { id: 3, text: "Accès Porte de Buc (accès sud)", next: "Q11" }
//     ]
//   },
//   {
//     id: "Q8",
//     text: "Par quel mode de transport êtes-vous venu à la gare ?",
//     options: [
//       { id: 1, text: "en voiture conducteur", next: "Q9" },
//       { id: 2, text: "en voiture passager", next: "Q10" },
//       { id: 3, text: "en deux-roues motorisés", next: "Q12a" },
//       { id: 4, text: "en bus/car", next: "Q14" },
//       { id: 5, text: "à vélo", next: "Q13a" },
//       { id: 6, text: "à pied exclusivement", next: "Q14" },
//       { id: 7, text: "autres", next: "Q8_autre" }
//     ]
//   },
//   {
//     id: "Q8_autre",
//     text: "Précisez le mode de transport",
//     freeText: true,
//     next: "Q14"
//   },
//   {
//     id: "Q9",
//     text: "Comment êtes-vous venu en voiture ?",
//     options: [
//       { id: 1, text: "Seul", next: "Q12a" },
//       { id: 2, text: "en co-voiturage", next: "Q12a" },
//       { id: 3, text: "à plusieurs hors co-voiturage", next: "Q12a" }
//     ]
//   },
//   {
//     id: "Q10",
//     text: "Voiture passager :",
//     options: [
//       { id: 1, text: "Déposé", next: "Q14" },
//       { id: 2, text: "en co-voiturage", next: "Q14" }
//     ]
//   },
//   {
//     id: "Q11",
//     text: "Combien de temps avez-vous mis pour arriver à la gare où nous nous trouvons actuellement ? (temps en minutes)",
//     freeText: true,
//     next: "Q8"
//   },
//   {
//     id: "Q12a",
//     text: "Où êtes-vous garé ?",
//     options: [
//       { id: 1, text: "Parking de la Gare", next: "Q12b" },
//       { id: 2, text: "Parking de Sceaux", next: "Q12b" },
//       { id: 3, text: "Parking clinique des franciscaines", next: "Q12b" },
//       { id: 4, text: "Sur voirie", next: "Q12_voirie" },
//       { id: 5, text: "Autre parking", next: "Q12_autre" }
//     ]
//   },
//   {
//     id: "Q12_voirie",
//     text: "Précisez le lieu de stationnement",
//     freeText: true,
//     next: "Q12b"
//   },
//   {
//     id: "Q12_autre",
//     text: "Précisez le parking",
//     freeText: true,
//     next: "Q12b"
//   },
//   {
//     id: "Q12b",
//     text: "Combien de temps êtes-vous / allez-vous rester stationné ? (temps en heures)",
//     freeText: true,
//     next: "Q12c"
//   },
//   {
//     id: "Q12c",
//     text: "Pourquoi n'êtes-vous pas venu en bus ?",
//     options: [
//       { id: 1, text: "pas de desserte bus", next: "Q12d" },
//       { id: 2, text: "bus trop lents", next: "Q12d" },
//       { id: 3, text: "horaires inadaptés", next: "Q12d" },
//       { id: 4, text: "bus inconfortables", next: "Q12d" },
//       { id: 5, text: "préférence pour la voiture", next: "Q12d" },
//       { id: 6, text: "n'y a pas pensé", next: "Q12d" },
//       { id: 7, text: "autres", next: "Q12c_autre" }
//     ]
//   },
//   {
//     id: "Q12c_autre",
//     text: "Précisez la raison",
//     freeText: true,
//     next: "Q12d"
//   },
//   {
//     id: "Q12d",
//     text: "Pourquoi n'êtes-vous pas venu à vélo ?",
//     options: [
//       { id: 1, text: "pas de vélo", next: "Q14" },
//       { id: 2, text: "distance trop longue", next: "Q14" },
//       { id: 3, text: "pas de stationnement sécurisé", next: "Q14" },
//       { id: 4, text: "itinéraire dangereux", next: "Q14" },
//       { id: 5, text: "n'y a pas pensé", next: "Q14" },
//       { id: 6, text: "autres, précisez...", next: "Q12d_autre" }
//     ]
//   },
//   {
//     id: "Q12d_autre",
//     text: "Précisez la raison",
//     freeText: true,
//     next: "Q14"
//   },
//   {
//     id: "Q13a",
//     text: "Où êtes-vous stationné ?",
//     options: [
//       { id: 1, text: "Arceau Entrée historique (sous l'horloge)", next: "Q13b" },
//       { id: 2, text: "Arceau Gare routière", next: "Q13b" },
//       { id: 3, text: "Arceau Porte de Buc (parvis sud)", next: "Q13b" },
//       { id: 4, text: "Parking souterrain", next: "Q13b" },
//       { id: 5, text: "Vélo embarqué dans le train", next: "Q13b" },
//       { id: 6, text: "Sur voirie hors arceau", next: "Q13b" },
//       { id: 7, text: "Autre parking", next: "Q13a_autre" }
//     ]
//   },
//   {
//     id: "Q13a_autre",
//     text: "Précisez le lieu de stationnement",
//     freeText: true,
//     next: "Q13b"
//   },
//   {
//     id: "Q13b",
//     text: "Avez-vous déjà utilisé le parking vélo souterrain ?",
//     options: [
//       { id: 1, text: "Oui", next: "Q14" },
//       { id: 2, text: "Non", next: "Q13c" }
//     ]
//   },
//   {
//     id: "Q13c",
//     text: "Pourquoi ?",
//     options: [
//       { id: 1, text: "Situé trop loin / ne sait pas comment y accéder", next: "Q14" },
//       { id: 2, text: "Ne connait pas ce parking", next: "Q14" },
//       { id: 3, text: "Peu attractif (souterrain)", next: "Q14" },
//       { id: 4, text: "autres", next: "Q13c_autre" }
//     ]
//   },
//   {
//     id: "Q13c_autre",
//     text: "Précisez la raison",
//     freeText: true,
//     next: "Q14"
//   },
//   {
//     id: "Q14",
//     text: "A quelle fréquence vous rendez vous à la gare ?",
//     options: [
//       { id: 1, text: "tous les jours (7j/7j)", next: "end" },
//       { id: 2, text: "régulièrement (5-6 fois par semaine)", next: "end" },
//       { id: 3, text: "souvent (3-4 fois par semaine)", next: "end" },
//       { id: 4, text: "de temps en temps (1-2 fois par semaine)", next: "end" },
//       { id: 5, text: "occasionnellement (moins d'1 fois par semaine)", next: "end" },
//       { id: 6, text: "rarement (quelquefois par an)", next: "end" }
//     ]
//   }
// ];
