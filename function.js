function showHistory(
    helpingHistoryAmount,
    helpingHistoryTitle,
    helpingHistoryDate
  ) {
    return `
      <div class="w-full border rounded-xl">
          <div class="card-body">
              <h2 class="text-lg">
                  <span id="donateHistoryAmount">${helpingHistoryAmount}</span>
                    taka is added to the fund titled:
                    <span id="donateHistoryTitle">${helpingHistoryTitle.innerText}</span>
              </h2>
              <p class="p-4 bg-slate-100 rounded-xl">Date:
                  <span id="donateHistoryDate">${helpingHistoryDate}</span>
              </p>
          </div>
      </div>`;
  }
  function showDate() {
    return new Date().toLocaleString();
  }