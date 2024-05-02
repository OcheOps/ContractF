let data = []; // Initialize an empty array to store the report data

async function fetchReportData() {
  try {
    const response = await fetch('https://contractb.onrender.com/report', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    });

    if (response.ok) {
      data = await response.json();
      renderReportData(data);
    } else {
      throw new Error('Failed to fetch report data.');
    }
  } catch (error) {
    console.error(error);
  }
}

function renderReportData(reportData) {
  const tableBody = document.getElementById('reportData');
  tableBody.innerHTML = '';

  const projectDetails = reportData.ProjectDetails;
  const projectProgress = reportData.ProjectProgress;

  projectDetails.forEach((project, index) => {
    const row = document.createElement('tr');

    const projectNameCell = document.createElement('td');
    projectNameCell.textContent = project.projectName;
    row.appendChild(projectNameCell);

    const awardExecutionPeriodCell = document.createElement('td');
    awardExecutionPeriodCell.textContent = project.awardExecutionPeriod;
    row.appendChild(awardExecutionPeriodCell);

    const tasksAccomplishedCell = document.createElement('td');
    const projectProgressData = projectProgress.find((progress) => progress.projectID === project.projectID);
    tasksAccomplishedCell.textContent = Array.isArray(projectProgressData?.tasksAccomplished)
      ? projectProgressData.tasksAccomplished.join(', ')
      : '';
    row.appendChild(tasksAccomplishedCell);

    const projectSupervisorCell = document.createElement('td');
    projectSupervisorCell.textContent = project.projectSupervisor;
    row.appendChild(projectSupervisorCell);

    const pendingTasksCell = document.createElement('td');
    pendingTasksCell.textContent = Array.isArray(projectProgressData?.pendingTasks)
      ? projectProgressData.pendingTasks.join(', ')
      : '';
    row.appendChild(pendingTasksCell);

    const constraintsCell = document.createElement('td');
    constraintsCell.textContent = Array.isArray(project.constraints)
      ? project.constraints.join(', ')
      : '';
    row.appendChild(constraintsCell);

    const remarksCell = document.createElement('td');
    remarksCell.textContent = project.remarks;
    row.appendChild(remarksCell);

    tableBody.appendChild(row);
  });
}
//

// fixed soe issues with the code
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
  const searchValue = searchInput.value.toLowerCase();
  const filteredData = data.filter(report =>
    report.projectName.toLowerCase().includes(searchValue)
  );
  renderReportData(filteredData);
});

// Fetch report data when the page loads
fetchReportData();