// Small UI helpers
document.addEventListener('DOMContentLoaded', function(){
  // set copyright year
  var y = new Date().getFullYear();
  var el = document.getElementById('year'); if(el) el.textContent = y;

  // Get current department from localStorage
  var currentDept = localStorage.getItem('currentDept') || 'all';

  // Department toggle in header
  var deptBtns = document.querySelectorAll('.dept-btn');
  var cards = document.querySelectorAll('.card');
  var pageSections = document.querySelectorAll('[data-dept-section]');

  // Initialize department buttons
  deptBtns.forEach(function(btn){
    if(btn.getAttribute('data-dept') === currentDept){
      btn.classList.add('active');
    }
    btn.addEventListener('click', function(){
      var dept = this.getAttribute('data-dept');
      localStorage.setItem('currentDept', dept);
      
      // Update active button
      deptBtns.forEach(function(b){ b.classList.remove('active'); });
      this.classList.add('active');

      // Update card visibility on home page
      cards.forEach(function(card){
        var cardDept = card.getAttribute('data-dept');
        if(dept === 'all'){
          card.classList.remove('hidden');
        } else if(cardDept === dept || cardDept === 'all'){
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });

      // Update page section visibility
      pageSections.forEach(function(section){
        var sectionDept = section.getAttribute('data-dept-section');
        if(dept === 'all'){
          section.classList.remove('hidden');
        } else if(sectionDept === dept){
          section.classList.remove('hidden');
        } else {
          section.classList.add('hidden');
        }
      });
    });
  });

  // Initialize active department on page load
  deptBtns.forEach(function(btn){
    if(btn.getAttribute('data-dept') === currentDept){
      btn.click();
    }
  });

  // Home page toggle buttons
  var toggleBtns = document.querySelectorAll('.toggle-btn');
  toggleBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
      var dept = this.getAttribute('data-dept');
      localStorage.setItem('currentDept', dept);
      
      // Update active button
      toggleBtns.forEach(function(b){ b.classList.remove('active'); });
      this.classList.add('active');

      // Update card visibility
      cards.forEach(function(card){
        var cardDept = card.getAttribute('data-dept');
        if(dept === 'all'){
          card.classList.remove('hidden');
        } else if(cardDept === dept || cardDept === 'all'){
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Simple validation hook for contact form (if using JS)
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      var email = document.getElementById('email');
      var name = document.getElementById('name');
      if(!name.value.trim() || !email.value.trim()){
        e.preventDefault();
        alert('Please provide your name and email.');
      }
    });
  }
});
