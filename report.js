// Function to fetch report data from the Go backend API
async function fetchReportData() {
    try {
        const response = await fetch('https://contractb.onrender.com/report' , {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
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
  
      const departmentCell = document.createElement('td');
      departmentCell.textContent = report.department;
      row.appendChild(departmentCell);
  
      const awardStartDateCell = document.createElement('td');
      awardStartDateCell.textContent = report.awardStartDate;
      row.appendChild(awardStartDateCell);
  
      const projectEndDateCell = document.createElement('td');
      projectEndDateCell.textContent = report.projectEndDate;
      row.appendChild(projectEndDateCell);
  
      const tasksToDateCell = document.createElement('td');
      tasksToDateCell.textContent = report.tasksToDate.join(', ');
      row.appendChild(tasksToDateCell);
  
      const tasksRemainingCell = document.createElement('td');
      tasksRemainingCell.textContent = report.tasksRemaining.join(', ');
      row.appendChild(tasksRemainingCell);
  
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