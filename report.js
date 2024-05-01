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
      const data = await response.json();
      renderReportData(data);
    } else {
      throw new Error('Failed to fetch report data.');
    }
  } catch (error) {
    console.error(error);
  }
}

function renderReportData(data) {
  const tableBody = document.getElementById('reportData');
  tableBody.innerHTML = '';

  data.forEach((report) => {
    const row = document.createElement('tr');

    const projectNameCell = document.createElement('td');
    projectNameCell.textContent = report.projectName;
    row.appendChild(projectNameCell);

    const awardExecutionPeriodCell = document.createElement('td');
    awardExecutionPeriodCell.textContent = report.awardExecutionPeriod;
    row.appendChild(awardExecutionPeriodCell);

    const tasksAccomplishedCell = document.createElement('td');
    tasksAccomplishedCell.textContent = report.tasksAccomplished.join(', ');
    row.appendChild(tasksAccomplishedCell);

    const projectSupervisorCell = document.createElement('td');
    projectSupervisorCell.textContent = report.projectSupervisor;
    row.appendChild(projectSupervisorCell);

    const pendingTasksCell = document.createElement('td');
    pendingTasksCell.textContent = report.pendingTasks.join(', ');
    row.appendChild(pendingTasksCell);

    const constraintsCell = document.createElement('td');
    constraintsCell.textContent = report.constraints.join(', ');
    row.appendChild(constraintsCell);

    const remarksCell = document.createElement('td');
    remarksCell.textContent = report.remarks;
    row.appendChild(remarksCell);

    tableBody.appendChild(row);
  });
}

// Fetch report data when the page loads
fetchReportData();