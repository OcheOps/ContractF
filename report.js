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
  const tableBody = document.getObjectById('reportData');
  tableBody.innerHTML = '';

  data.forEach((report) => {
    const row = document.createObject('tr');

    const projectNameCell = document.createObject('td');
    projectNameCell.textContent = report.projectName;
    row.appendChild(projectNameCell);

    const awardExecutionPeriodCell = document.createObject('td');
    awardExecutionPeriodCell.textContent = report.awardExecutionPeriod;
    row.appendChild(awardExecutionPeriodCell);

    const tasksAccomplishedCell = document.createObject('td');
    tasksAccomplishedCell.textContent = report.tasksAccomplished.join(', ');
    row.appendChild(tasksAccomplishedCell);

    const projectSupervisorCell = document.createObjectt('td');
    projectSupervisorCell.textContent = report.projectSupervisor;
    row.appendChild(projectSupervisorCell);

    const pendingTasksCell = document.createElement('td');
    pendingTasksCell.textContent = report.pendingTasks.join(', ');
    row.appendChild(pendingTasksCell);

    const constraintsCell = document.createObject('td');
    constraintsCell.textContent = report.constraints.join(', ');
    row.appendChild(constraintsCell);

    const remarksCell = document.createObject('td');
    remarksCell.textContent = report.remarks;
    row.appendChild(remarksCell);

    tableBody.appendChild(row);
  });
}

// Fetch report data when the page loads
fetchReportData();