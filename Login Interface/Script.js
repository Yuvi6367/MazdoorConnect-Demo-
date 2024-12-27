document.addEventListener("DOMContentLoaded", function () {
  const skipButton = document.getElementById("skip-button");

  skipButton.addEventListener("click", function () {
    window.location.href = "dashboard.html"; // Navigates to the dashboard page
  });
});
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const addLabourBtn = document.querySelector(".add-labour-btn");
    const closePopup = document.getElementById("closePopup");

    const categoryPopup = document.getElementById("categoryPopup");
    const addCategoryBtn = document.getElementById("addCategoryBtn");
    const closeCategoryPopup = document.getElementById("closeCategoryPopup");
    const saveCategoryBtn = document.getElementById("saveCategory");
    const labourCategory = document.getElementById("labourCategory");
    const newCategoryInput = document.getElementById("newCategory");

    // Show Labour Form popup
    addLabourBtn.addEventListener("click", () => {
        popup.style.display = "flex";
    });

    // Close Labour Form popup
    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Show Add Category popup
    addCategoryBtn.addEventListener("click", (e) => {
        e.preventDefault();
        categoryPopup.style.display = "flex";
    });

    // Close Add Category popup
    closeCategoryPopup.addEventListener("click", () => {
        categoryPopup.style.display = "none";
    });

    // Save new category
    saveCategoryBtn.addEventListener("click", () => {
        const newCategory = newCategoryInput.value.trim();
        if (newCategory) {
            const option = document.createElement("option");
            option.value = newCategory.toLowerCase();
            option.textContent = newCategory;
            labourCategory.appendChild(option);

            // Select the newly added category
            labourCategory.value = newCategory.toLowerCase();

            // Clear the input and close the popup
            newCategoryInput.value = "";
            categoryPopup.style.display = "none";
        } else {
            alert("Please enter a category name.");
        }
    });

    // Close popups when clicking outside
    [popup, categoryPopup].forEach((popupElement) => {
        popupElement.addEventListener("click", (e) => {
            if (e.target === popupElement) {
                popupElement.style.display = "none";
            }
        });
    });
});
