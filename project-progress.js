const form = document.getElementById('projectProgressForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = {
    projectName: form.elements.projectName.value,
    tasksAccomplished: form.elements.tasksAccomplished.value.split('\n'),
    pendingTasks: form.elements.pendingTasks.value.split('\n'),
    constraints: form.elements.constraints.value.split('\n'),
    remarks: form.elements.remarks.value,
  };

  try {
    const response = await fetch('https://contractb.onrender.com//project-progress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      mode: 'cors',
    });

    if (response.ok) {
      alert('Project progress submitted successfully!');
      form.reset();
    } else {
      throw new Error('Failed to submit project progress.');
    }
  } catch (error) {
    alert(error.message);
  }
});