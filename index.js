// Common function to get the ID
function declaredID(id) {
    return document.getElementById(id);
  }
  // helpingCards Section and helpingHistory Section
  const helpingCard = declaredID("helpingCard");
  const helpingHistory = declaredID("helpingHistory");
  
  // helpNowBtn Buttons
  const helpNowBtn1 = declaredID("helpNowBtn1");
  const helpNowBtn2 = declaredID("helpNowBtn2");
  const helpNowBtn3 = declaredID("helpNowBtn3");
  
  // Help Titles
  const helpTitle1 = declaredID("helpTitle1");
  const helpTitle2 = declaredID("helpTitle2");
  const helpTitle3 = declaredID("helpTitle3");
  
  // initialBalance
  const initialBalance = declaredID("initialBalance");
  
  // helpButton and HistoryButtons
  const helpButton = declaredID("helpButton");
  const historyButton = declaredID("historyButton");
  
  // helpButton
  helpButton.addEventListener("click", function () {
    helpingHistory.classList.add("hidden");
    helpingCard.classList.remove("hidden");
  
    historyButton.classList.remove(
      "bg-primaryColor",
      "hover:bg-primaryHoverColor"
    );
    historyButton.classList.add("btn-outline");
  
    helpButton.classList.remove("btn-outline");
    helpButton.classList.add("bg-primaryColor", "hover:bg-primaryHoverColor");
  });
  
  // HistoryButton
  historyButton.addEventListener("click", function () {
    helpingHistory.classList.remove("hidden");
    helpingCard.classList.add("hidden");
  
    helpButton.classList.remove(
      "bg-primaryColor",
      "hover:bg-primaryHoverColor"
    );
    helpButton.classList.add("btn-outline");
  
    historyButton.classList.remove("btn-outline");
    historyButton.classList.add("bg-primaryColor", "hover:bg-primaryHoverColor");
  });
  
  // HelpNow Button 1
  helpNowBtn1.addEventListener("click", function () {
    const helpAmount1 = parseFloat(declaredID("helpAmount1").value);
    const displayHelpingAmount1 = parseFloat(declaredID("displayHelpingAmount1").innerText);
  
    if (isNaN(helpAmount1)) {
      alert("Please enter valid amount");
      return;
    }
    if (helpAmount1 <= 0) {
      alert("Please Enter positive amount");
      return;
    }
    const newBalance = initialBalance.innerText - helpAmount1;
    if (newBalance < 0) {
      alert("Insufficient Balance! You can't help.");
      return;
    }
    declaredID("displayHelpingAmount1").innerHTML = displayHelpingAmount1 + helpAmount1;
    initialBalance.innerText = newBalance;
  
    helpingHistory.innerHTML += showHistory(
      helpAmount1,
      helpTitle1,
      showDate()
    );
  
    alertModal.showModal();
    id("helpAmount1").value = "";
  });
  // HelpNow Button 2
  helpNowBtn2.addEventListener("click", function () {
    const helpAmount2 = parseFloat(declaredID("helpAmount2").value);
    const displayHelpingAmount2 = parseFloat(declaredID("displayHelpingAmount2").innerText);
  
    if (isNaN(helpAmount2)) {
      alert("Please Enter Valid Amount");
      return;
    }
    if (helpAmount2 <= 0) {
      alert("Please Enter positive Amount");
      return;
    }
    const newBalance = initialBalance.innerText - helpAmount2;
    if (newBalance < 0) {
      alert("Insufficient balance! You can't help");
      return;
    }
    id("displayHelpingAmount2").innerHTML = displayHelpingAmount2 + helpAmount2;
    initialBalance.innerText = newBalance;
  
    helpingHistory.innerHTML += showHistory(
      helpAmount2,
      helpTitle2,
      showDate()
    );
  
    alertModal.showModal();
    id("helpAmount2").value = "";
  });
  // HelpNow Button 3
  helpNowBtn3.addEventListener("click", function () {
    const helpAmount3 = parseFloat(declaredID("helpAmount3").value);
    const displayHelpingAmount3 = parseFloat(declaredID("displayHelpingAmount3").innerText);
  
    if (isNaN(helpAmount3)) {
      alert("Please enter valid amount");
      return;
    }
    if (helpAmount3 <= 0) {
      alert("Please enter positive amount");
      return;
    }
    const newBalance = initialBalance.innerText - helpAmount3;
    if (newBalance < 0) {
      alert("Insufficient Balance you can't help");
      return;
    }
    declaredID("displayHelpingAmount3").innerHTML = displayHelpingAmount3 + helpAmount3;
    initialBalance.innerText = newBalance;
  
    helpingHistory.innerHTML += showHistory(
      helpAmount3,
      helpTitle3,
      showDate()
    );
  
    alertModal.showModal();
    declaredID("helpAmount3").value = "";
  });