<template>
  <div>
    <button class="btn-signin" @click="showSignInModal = true">
      Connexion Admin
    </button>

    <!-- Sign In Modal -->
    <div v-if="showSignInModal" class="modal">
      <div class="modal-content signin-modal">
        <button class="close" @click="showSignInModal = false">&times;</button>
        <h2>Connexion Admin</h2>
        <input
          v-model="password"
          type="password"
          placeholder="Entrez le mot de passe"
          class="form-control"
        />
        <button @click="signIn" class="btn-signin">Se connecter</button>
      </div>
    </div>

    <!-- Admin Dashboard Modal -->
    <div v-if="showAdminDashboard" class="modal">
      <div class="modal-content admin-dashboard">
        <button class="close" @click="showAdminDashboard = false">
          &times;
        </button>
        <h2>Tableau de Bord Admin</h2>

        <!-- Added filter checkbox -->
        <div style="margin-bottom: 20px">
          <label
            style="
              color: #ecf0f1;
              display: flex;
              align-items: center;
              gap: 10px;
            "
          >
            <input type="checkbox" v-model="showTodayOnly" style="margin: 0" />
            Afficher uniquement les enquêtes d'aujourd'hui
          </label>
        </div>

        <div class="dashboard-content">
          <div class="dashboard-card total">
            <h3>Total des Enquêtes</h3>
            <p class="big-number">{{ totalSurveys }}</p>
          </div>
          <div class="dashboard-card">
            <h3>Enquêtes par Enquêteur</h3>
            <ul>
              <li v-for="(count, name) in surveysByEnqueteur" :key="name">
                <span>{{ name }}</span>
                <span class="count">{{ count }}</span>
              </li>
            </ul>
          </div>
        </div>
        <button @click="downloadData" class="btn-download">
          Télécharger les Données
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import * as XLSX from "xlsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

const props = defineProps({
  questions: {
    type: Array,
    required: true,
  },
});

const showSignInModal = ref(false);
const showAdminDashboard = ref(false);
const password = ref("");
const totalSurveys = ref(0);
const surveysByEnqueteur = ref({});
const showTodayOnly = ref(false);

const surveyCollectionRef = collection(db, "Crecy");

const getTodayDateString = () => {
  const now = new Date();
  // Format as DD-MM-YYYY to match your Firebase date format
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  return `${day}-${month}-${year}`;
};

const signIn = () => {
  if (password.value === "admin123") {
    showSignInModal.value = false;
    showAdminDashboard.value = true;
    fetchDashboardData();
  } else {
    alert("Mot de passe incorrect");
  }
};

const fetchDashboardData = async () => {
  try {
    let queryRef = surveyCollectionRef;

    if (showTodayOnly.value) {
      const today = getTodayDateString();
      console.log("Filtering for date:", today); // Debug log
      queryRef = query(surveyCollectionRef, where("DATE", "==", today));
    }

    const querySnapshot = await getDocs(queryRef);
    totalSurveys.value = querySnapshot.size;

    const enqueteurCounts = {};
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log("Document date:", data.DATE); // Debug log
      const enqueteur = data.ENQUETEUR || "Unknown";
      enqueteurCounts[enqueteur] = (enqueteurCounts[enqueteur] || 0) + 1;
    });

    surveysByEnqueteur.value = enqueteurCounts;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    alert("Erreur lors de la récupération des données");
  }
};

const downloadData = async () => {
  try {
    let queryRef = surveyCollectionRef;

    if (showTodayOnly.value) {
      const today = getTodayDateString();
      queryRef = query(surveyCollectionRef, where("DATE", "==", today));
    }

    const querySnapshot = await getDocs(queryRef);

    // Define base headers
    const headerOrder = [
      "ID_questionnaire",
      "ENQUETEUR",
      "DATE",
      "JOUR",
      "HEURE_DEBUT",
      "HEURE_FIN",
    ];

    // Track which questions have been added to avoid duplicates
    const addedQuestions = new Set();

    // First add Q1 if it exists
    props.questions.forEach((question) => {
      if (question.id === "Q1") {
        headerOrder.push(question.id);
        addedQuestions.add(question.id);
      }
    });

    // Then add QE1 and QS1 first (special cases)
    headerOrder.push(
      "QE1",
      "QE1_COMMUNE",
      "QE1_CODE_INSEE",
      "QE1_COMMUNE_LIBRE"
    );
    addedQuestions.add("QE1");
    addedQuestions.add("QE1_precision"); // Add to prevent it from being added later

    headerOrder.push(
      "QS1",
      "QS1_COMMUNE",
      "QS1_CODE_INSEE",
      "QS1_COMMUNE_LIBRE"
    );
    addedQuestions.add("QS1");
    addedQuestions.add("QS1_precision"); // Add to prevent it from being added later

    // Then add remaining QE questions
    props.questions.forEach((question) => {
      if (
        question.id.startsWith("QE") &&
        question.id !== "QE1" &&
        !question.id.includes("precision")
      ) {
        if (question.usesCommuneSelector) {
          headerOrder.push(
            question.id,
            `${question.id}_COMMUNE`,
            `${question.id}_CODE_INSEE`,
            `${question.id}_COMMUNE_LIBRE`
          );
        } else {
          headerOrder.push(question.id);
        }
        addedQuestions.add(question.id);
        addedQuestions.add(`${question.id}_precision`);
      }
    });

    // Then add remaining QS questions
    props.questions.forEach((question) => {
      if (
        question.id.startsWith("QS") &&
        question.id !== "QS1" &&
        !question.id.includes("precision")
      ) {
        if (question.usesCommuneSelector) {
          headerOrder.push(
            question.id,
            `${question.id}_COMMUNE`,
            `${question.id}_CODE_INSEE`,
            `${question.id}_COMMUNE_LIBRE`
          );
        } else {
          headerOrder.push(question.id);
        }
        addedQuestions.add(question.id);
        addedQuestions.add(`${question.id}_precision`);
      }
    });

    // Then add any remaining questions (excluding precision)
    props.questions.forEach((question) => {
      // Skip questions we've already handled or precision questions
      if (addedQuestions.has(question.id) || question.id.includes("precision"))
        return;

      // For all questions that use commune selector, add all related fields
      if (question.usesCommuneSelector) {
        headerOrder.push(
          question.id,
          `${question.id}_COMMUNE`,
          `${question.id}_CODE_INSEE`,
          `${question.id}_COMMUNE_LIBRE`
        );
      } else {
        headerOrder.push(question.id);
      }
      addedQuestions.add(question.id);
      addedQuestions.add(`${question.id}_precision`);
    });

    const data = querySnapshot.docs.map((doc) => {
      const docData = doc.data();
      const row = {};

      // Initialize all headers with empty strings
      headerOrder.forEach((key) => {
        row[key] = "";
      });

      // Fill in the data
      Object.entries(docData).forEach(([key, value]) => {
        if (headerOrder.includes(key)) {
          row[key] = value ?? "";
        }
      });

      console.log("Processing document:", docData); // Debug log

      // Handle Crecy selections for QE1 and QS1
      if (docData.QE1 === 1 || docData.QE1 === "1") {
        row.QE1 = 1;
        row.QE1_COMMUNE = "CRECY LA CHAPELLE";
        row.QE1_CODE_INSEE = "77142";
        row.QE1_COMMUNE_LIBRE = "";
      } else if (
        docData.QE1_COMMUNE &&
        docData.QE1_COMMUNE !== "CRECY LA CHAPELLE"
      ) {
        // If any other commune is selected, set QE1 to 2
        row.QE1 = 2;
        row.QE1_COMMUNE = docData.QE1_COMMUNE || "";
        row.QE1_CODE_INSEE = docData.QE1_CODE_INSEE || "";
        row.QE1_COMMUNE_LIBRE = docData.QE1_COMMUNE_LIBRE || "";
      }

      if (docData.QS1 === 1 || docData.QS1 === "1") {
        row.QS1 = 1;
        row.QS1_COMMUNE = "CRECY LA CHAPELLE";
        row.QS1_CODE_INSEE = "77142";
        row.QS1_COMMUNE_LIBRE = "";
      } else if (
        docData.QS1_COMMUNE &&
        docData.QS1_COMMUNE !== "CRECY LA CHAPELLE"
      ) {
        // If any other commune is selected, set QS1 to 2
        row.QS1 = 2;
        row.QS1_COMMUNE = docData.QS1_COMMUNE || "";
        row.QS1_CODE_INSEE = docData.QS1_CODE_INSEE || "";
        row.QS1_COMMUNE_LIBRE = docData.QS1_COMMUNE_LIBRE || "";
      }

      // Remove empty values
      Object.keys(row).forEach((key) => {
        if (row[key] === "") {
          delete row[key];
        }
      });

      console.log("Final row data:", row); // Debug log
      return row;
    });

    // Create worksheet with fixed column order
    const worksheet = XLSX.utils.json_to_sheet(data, {
      header: headerOrder,
      skipHeader: false,
    });

    // Set column widths
    const colWidths = headerOrder.map(() => ({ wch: 20 }));
    worksheet["!cols"] = colWidths;

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Survey Data");

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filePrefix = showTodayOnly.value ? "Today_" : "";
    XLSX.writeFile(
      workbook,
      `${filePrefix}Crecy_Survey_Data_${timestamp}.xlsx`
    );
  } catch (error) {
    console.error("Error downloading data:", error);
    alert("Erreur lors du téléchargement des données");
  }
};

// Watch for changes in showTodayOnly to refresh data
watch(showTodayOnly, () => {
  fetchDashboardData();
});
</script>
<style scoped>
.btn-signin {
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 30px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.btn-signin:hover {
  background-color: #45a049;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

/* Keep the rest of the styles unchanged */
.btn-download {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  width: 100%;
  margin-top: 20px;
}

.btn-download:hover {
  background-color: #2980b9;
}

.modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.close {
  position: fixed;
  /* Change from absolute to fixed */
  right: 20px;
  top: 20px;
  font-size: 28px;
  font-weight: bold;
  color: #bdc3c7;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1010;
  /* Ensure it's above other content */
}

.close:hover {
  color: #ecf0f1;
}

.dashboard-content {
  display: grid;
  gap: 20px;
  margin-bottom: 20px;
}

.dashboard-card {
  background-color: #34495e;
  border-radius: 8px;
  padding: 15px;
}

.dashboard-card h3 {
  margin-top: 0;
  color: #3498db;
}

.dashboard-card ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.dashboard-card li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.big-number {
  font-size: 3em;
  font-weight: bold;
  color: #2ecc71;
  margin: 10px 0;
}

.count {
  font-weight: bold;
  color: #2ecc71;
}

.form-control {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #34495e;
  border-radius: 5px;
  background-color: #34495e;
  color: #ecf0f1;
}

@media (max-width: 600px) {
  .modal-content {
    width: 100%;
    height: 100%;
    border-radius: 0;
    max-height: 100vh;
  }

  .close {
    top: 10px;
    right: 10px;
  }
}
</style>