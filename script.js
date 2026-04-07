
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-group').forEach(group => {
    group.querySelectorAll('.toggle').forEach(button => {
      button.addEventListener('click', () => {
        group.querySelectorAll('.toggle').forEach(b => b.classList.remove('active-toggle'));
        button.classList.add('active-toggle');
      });
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const studentLoginForm = document.getElementById('student-login-form');
  if(studentLoginForm){
    studentLoginForm.addEventListener('submit', function(){
      // native form action handles navigation to dashboard.html
    });
  }
});


// Make generic buttons clickable with feedback
document.querySelectorAll('.soft-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    if(btn.textContent.includes('Add Task')){
      alert('Add Task clicked (prototype)');
    }
    if(btn.textContent.includes('Add Course')){
      alert('Add Course clicked (prototype)');
    }
  });
});

// Checkbox toggle
document.querySelectorAll('.checkbox').forEach(box => {
  box.addEventListener('click', () => {
    box.classList.toggle('checked');
    box.textContent = box.classList.contains('checked') ? '✓' : '';
  });
});

// Ensure login button redirects properly
const loginForm = document.getElementById('student-login-form');
if(loginForm){
  loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    window.location.href = 'account.html';
  });
}

// Enable View Account button only when inputs are filled
document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('student-email');
  const passwordInput = document.getElementById('student-password');
  const viewAccountBtn = document.getElementById('view-account-btn');

  if(emailInput && passwordInput && viewAccountBtn){
    function checkInputs(){
      if(emailInput.value.trim() !== '' && passwordInput.value.trim() !== ''){
        viewAccountBtn.disabled = false;
      } else {
        viewAccountBtn.disabled = true;
      }
    }

    emailInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);

    viewAccountBtn.addEventListener('click', () => {
      window.location.href = 'account.html';
    });
  }
});
