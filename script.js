

const addButton = document.getElementById('add-edit-button');
const studentTable = document.querySelector('.student-list');
const form = document.getElementById('student-form');
const formHeading = document.getElementById('form-heading');
const editIdInput = document.getElementById('edit-id');


addButton.addEventListener('click', function () {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const gradeInput = document.getElementById('GPA');
    const ageInput = document.getElementById('age');
    const degreeInput = document.getElementById('degree');


    if (editIdInput.value === '') {
      // Adding a new row
      const newRow = studentTable.insertRow(-1);
      const cells = [...Array(7)].map(() => newRow.insertCell());
  
      cells[0].innerText = studentTable.rows.length - 1;
      cells[1].innerText = nameInput.value;
      cells[2].innerText = emailInput.value;
      cells[3].innerText = gradeInput.value;
      cells[4].innerText = ageInput.value;
      cells[5].innerText = degreeInput.value;
      cells[6].innerHTML = '<button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>';
    } else {
      // Editing existing row
      const rowIndex = parseInt(editIdInput.value);
      const row = studentTable.rows[rowIndex];
      row.cells[1].innerText = nameInput.value;
      row.cells[2].innerText = emailInput.value;
      row.cells[3].innerText = gradeInput.value;
      row.cells[4].innerText = ageInput.value;
      row.cells[5].innerText = degreeInput.value;
      addButton.innerText = 'Add Student';
      editIdInput.value = '';
    }
  
    form.reset();

});


studentTable.addEventListener('click', function (event) {
  if (event.target.classList.contains('edit-btn')) {
    const row = event.target.parentNode.parentNode;
    const cells = row.cells;
    editIdInput.value = cells[0].innerText;
    document.getElementById('name').value = cells[1].innerText;
    document.getElementById('email').value = cells[2].innerText;
    document.getElementById('GPA').value = cells[3].innerText;
    document.getElementById('age').value = cells[4].innerText;
    document.getElementById('degree').value = cells[5].innerText;
    addButton.innerText = 'Edit Student';
  } else if (event.target.classList.contains('delete-btn')) {
    studentTable.deleteRow(event.target.parentNode.parentNode.rowIndex);
  }
});