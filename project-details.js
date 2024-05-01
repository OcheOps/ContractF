const form = document.getElementById('projectDetailsForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = {
    ptbReference: form.elements.ptbReference.value,
    projectName: form.elements.projectName.value,
    awardExecutionPeriod: form.elements.awardExecutionPeriod.value,
    projectSupervisor: form.elements.projectSupervisor.value,
  };

  try {
    const response = await fetch('https://contractb.onrender.com/project-details', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      mode: 'cors',
    });

    if (response.ok) {
      alert('Project details submitted successfully!');
      form.reset();
    } else {
      throw new Error('Failed to submit project details.');
    }
  } catch (error) {
    alert(error.message);
  }
});