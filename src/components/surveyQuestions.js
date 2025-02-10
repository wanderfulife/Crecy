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
    text: "Quelle est la commune d'origine de votre déplacement actuel ?",
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
    next: "QE5"
  },
  {
    id: "QE5",
    text: "Quel est le mode de transport utilisé depuis votre lieu de départ jusqu'à la gare?",
    options: [
      { id: 1, text: "voiture (conducteur)", next: "QE6_heureVoiture" },
      { id: 2, text: "voiture passager (dans une voiture stationnée en gare - covoiturage)", next: "QE6" },
      { id: 3, text: "voiture passager (dans une voiture non stationnée en gare - dépose)", next: "QE6" },
      { id: 4, text: "à pied", next: "QE7" },
      { id: 5, text: "bus", next: "QE5_bus" },
      { id: 6, text: "car", next: "QE7" },
      { id: 7, text: "vélo stationné", next: "QE7" },
      { id: 8, text: "vélo embarqué", next: "QE7" },
      { id: 9, text: "moto", next: "QE6" },
      { id: 10, text: "taxi/VTC", next: "QE7" },
      { id: 11, text: "Autre moyen", next: "QE5_precision" }
    ]
  },
  {
    "id": "QE5_bus",
    "text": "Quel est le bus utilisé ?",
    "options": [
      { "id": 1, "text": "Ligne 13A", "next": "QE7" },
      { "id": 2, "text": "Ligne 17 EX", "next": "QE7" },
      { "id": 3, "text": "Ligne 18", "next": "QE7" },
      { "id": 4, "text": "Ligne 59", "next": "QE7" },
      { "id": 5, "text": "Ligne 71", "next": "QE7" },
      { "id": 6, "text": "Ligne 73", "next": "QE7" },
      { "id": 7, "text": "Ligne 8A", "next": "QE7" },
      { "id": 8, "text": "Ligne 8ASc", "next": "QE7" },
      { "id": 9, "text": "Ligne 8C", "next": "QE7" }
    ]
  },
  {
    id: "QE5_precision",
    text: "Préciser le mode de transport :",
    freeText: true,
    next: "QE6"
  },
  {
    id: "QE6_heureVoiture",
    text: "A quelle heure allez vous récupérer votre voiture ?",
    freeText: true,
    freeTextPlaceholder: "heure",
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
    next: "QS5"
  },
  {
    id: "QS5",
    text: "Quel sera le mode de transport utilisé vers votre de lieu de destination finale",
    options: [
      { id: 1, text: "voiture (conducteur)", next: "QS6_heureVoiture" },
      { id: 2, text: "voiture (passager) (dans une voiture stationnée en gare - covoiturage)", next: "QS6" },
      { id: 3, text: "Voiture - passager (dans une voiture non stationnée en gare - reprise)", next: "QS7" },
      { id: 4, text: "à pied", next: "QS7" },
      { id: 5, text: "Bus", next: "QS5_bus" },
      { id: 6, text: "Car", next: "QS7" },
      { id: 7, text: "vélo stationné", next: "QS7" },
      { id: 8, text: "vélo embarqué", next: "QS7" },
      { id: 9, text: "moto", next: "QS6" },
      { id: 10, text: "taxi/VTC", next: "QS7" },
      { id: 11, text: "Autre moyen", next: "QS5_precision" }
    ]
  },
  {
    "id": "QS5_bus",
    "text": "Quel est le bus utilisé ?",
    "options": [
      { "id": 1, "text": "Ligne 13A", "next": "QS7" },
      { "id": 2, "text": "Ligne 17 EX", "next": "QS7" },
      { "id": 3, "text": "Ligne 18", "next": "QS7" },
      { "id": 4, "text": "Ligne 59", "next": "QS7" },
      { "id": 5, "text": "Ligne 71", "next": "QS7" },
      { "id": 6, "text": "Ligne 73", "next": "QS7" },
      { "id": 7, "text": "Ligne 8A", "next": "QS7" },
      { "id": 8, "text": "Ligne 8ASc", "next": "QS7" },
      { "id": 9, "text": "Ligne 8C", "next": "QS7" }
    ]
  },
  {
    id: "QS5_precision",
    text: "Préciser le mode de transport :",
    freeText: true,
    next: "QS6"
  },
  {
    id: "QS6_heureVoiture",
    text: "A quelle heure allez vous récupérer votre voiture ?",
    freeText: true,
    freeTextPlaceholder: "heure",
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


