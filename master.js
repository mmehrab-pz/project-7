  // ----------------------------------------------card-number-----------------------------------------------------------
  let turn = 0
  const x = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 0]
  let inp = document.querySelectorAll('.input-group>input')
  inp[turn].focus()
  function _para(self, t) {
      console.log(self.value + '-' + t)
      if ((self.value).length == 4) {
          turn++
          inp[turn].focus()
      } else if ((self.value).length > 4) {
          alert('Please Enter Four Number')
      }
      document.getElementById('crd-nmbr-1').innerHTML = document.getElementById('inp-nmbr-1').value
      document.getElementById('crd-nmbr-2').innerHTML = document.getElementById('inp-nmbr-2').value
      document.getElementById('crd-nmbr-3').innerHTML = document.getElementById('inp-nmbr-3').value
      document.getElementById('crd-nmbr-4').innerHTML = document.getElementById('inp-nmbr-4').value
  }
  // ----------------------------------------------name-----------------------------------------------------------
  let _fname = document.getElementById('fname')
  let _lname = document.getElementById('lname')
  _fname.onkeyup = function () {
      document.getElementById('fname-txt').innerHTML = _fname.value
  }
  _lname.onkeyup = function () {
      document.getElementById('lname-txt').innerHTML = _lname.value
  }
  // ----------------------------------------------expaire-date---------------------------------------------------        
  let _year = document.getElementById('year')
  let _month = document.getElementById('month')
  _year.onchange = function () {
      document.getElementById('year-txt').innerHTML = _year.value
  }
  _month.onchange = function () {
      document.getElementById('month-txt').innerHTML = _month.value
  }
  // ----------------------------------------------cvv-------------------------------------------------------------
  let _cvv = document.getElementById('cvv')
  _cvv.addEventListener('click', function(){
      alert('Please Enter Four Number')
  })
  _cvv.addEventListener('focus', function(){
      document.getElementById('card-1').style.transform = 'rotatey(180deg)'
  })
  _cvv.addEventListener('keyup', function(){
      if((_cvv.value).length >=4){
          setTimeout(() => {
              document.getElementById('card-1').removeAttribute('style')
          }, 300);
      }
      document.getElementById('cvv-txt').innerHTML = _cvv.value
  })
  