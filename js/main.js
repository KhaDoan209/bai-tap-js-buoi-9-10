var listOfEmployee = new EmployeeList();
var validation = new Validation();

function setLocalStorage() {
   localStorage.setItem('EmpList', JSON.stringify(listOfEmployee.employeeList));
}

function getLocalStorage() {
   if (localStorage.getItem('EmpList') != null) {
      listOfEmployee.employeeList = JSON.parse(localStorage.getItem('EmpList'));
      printListOfEmployee(listOfEmployee.employeeList);
   }
}

function getELE(id) {
   return document.getElementById(id);
}

function createNewEmployee() {
   var account = getELE('tknv').value;
   var name = getELE('name').value;
   var email = getELE('email').value;
   var password = getELE('password').value;
   var workDate = getELE('datepicker').value;
   var salary = getELE('luongCB').value;
   var jobTitle = getELE('chucvu').value;
   var workingHour = getELE('gioLam').value;
   var isValid = true;
   account = account.replace(/\s/g, '');

   // check employee account
   isValid &=
      validation.checkEmpty(account, 'Account can not be empty', 'tbTKNV') &&
      validation.checkDuplicated(
         account,
         'Account is already existed',
         'tbTKNV',
         listOfEmployee.employeeList
      ) &&
      validation.checkAccount(
         account,
         'Account must be from 4 to 6 letters including letters or number only',
         'tbTKNV'
      );
   // check employee name
   isValid &=
      validation.checkEmpty(name, 'Name can not be empty', 'tbTen') &&
      validation.checkEmployeeName(name, 'Name is invalid', 'tbTen');

   // check employee email
   isValid &=
      validation.checkEmpty(email, 'Email can not be empty', 'tbEmail') &&
      validation.checkEmail(email, 'Email is invalid', 'tbEmail');

   // check employee password
   isValid &= validation.checkPass(
      password,
      'Password must be 6 - 10 letters and contain at least, 1 capital letter, 1 number, 1 special symbol',
      'tbMatKhau'
   );
   // check employee working date
   isValid &= validation.checkEmpty(
      workDate,
      'Work date can not be empty',
      'tbNgay'
   );

   // check employee salary
   isValid &=
      validation.checkEmpty(salary, 'Salary can not be empty', 'tbLuongCB') &&
      validation.checkSalary(
         salary,
         'Salary must be from 1 million to 20 million',
         'tbLuongCB'
      );

   // check employee job title

   isValid &= validation.checkJobTitle(
      'chucvu',
      'Please choose job title',
      'tbChucVu'
   );
   // check employee working hour
   isValid &=
      validation.checkEmpty(workingHour, 'Working hour is empty', 'tbGiolam') &&
      validation.checkWorkHour(
         workingHour,
         'Working hour is invalid',
         'tbGiolam'
      );

   if (isValid) {
      var newEmployee = new Employee(
         account,
         name,
         email,
         password,
         workDate,
         Number(salary),
         jobTitle,
         workingHour
      );
      newEmployee.countTotalSalary();
      newEmployee.classifyEmployee();
      listOfEmployee.addNewEmployee(newEmployee);
      getELE('btnDong').click();
      printListOfEmployee(listOfEmployee.employeeList);
   }
}

function printListOfEmployee(ar) {
   var content = '';
   ar.map(function (emp, index) {
      content += `<tr>
              <td>${emp.account}</td>
              <td>${emp.name}</td>
              <td>${emp.email}</td>
              <td>${emp.workDate}</td>
              <td>${emp.jobTitle}</td>
              <td>${emp.totalSalary}</td>
              <td>${emp.type}</td>
              <td>
                  <button class="btn btn-danger" onclick="removeEmployeeFromList('${emp.account}')" >Xóa</button>
  
                  <button class="btn btn-success" onclick="viewEmployeeFromList('${emp.account}')" >Xem</button>
  
              </td>
          </tr>`;
   });
   getELE('tableDanhSach').innerHTML = content;
}

function removeEmployeeFromList(accountToRemove) {
   console.log(accountToRemove);
   listOfEmployee.removeEmployee(accountToRemove);
   setLocalStorage();
   getLocalStorage();
}
function viewEmployeeFromList(accountToView) {
   var position = listOfEmployee.findIndex(accountToView);
   if (position > -1) {
      console.log(listOfEmployee.employeeList[position]);
      getELE('tknv').value = listOfEmployee.employeeList[position].account;
      getELE('tknv').disabled = true;
      getELE('name').value = listOfEmployee.employeeList[position].name;
      getELE('email').value = listOfEmployee.employeeList[position].email;
      getELE('password').value = listOfEmployee.employeeList[position].password;
      getELE('datepicker').value =
         listOfEmployee.employeeList[position].workDate;
      getELE('luongCB').value = listOfEmployee.employeeList[position].salary;
      getELE('chucvu').value = listOfEmployee.employeeList[position].jobTitle;
      getELE('gioLam').value =
         listOfEmployee.employeeList[position].workingHour;
   }

   // Tự động nhấn button thêm nhân viên
   getELE('btnThem').click();

   getELE('btnCapNhat').style.display = 'block';
   getELE('btnCapNhat').style.visibility = 'visible';
   getELE('header-title').innerHTML = 'Update Information';
   // Ẩn button thêm nhân viên
   getELE('btnThemNV').style.display = 'none';
   getELE('btnThemNV').style.visibility = 'hidden';
   //Ẩn button reset
   getELE('btnReset').style.display = 'none';
   getELE('btnReset').style.visibility = 'hidden';
}

function updateEmployeeInformation() {
   var account = getELE('tknv').value;
   var name = getELE('name').value;
   var email = getELE('email').value;
   var password = getELE('password').value;
   var workDate = getELE('datepicker').value;
   var salary = getELE('luongCB').value;
   var jobTitle = getELE('chucvu').value;
   var workingHour = getELE('gioLam').value;
   var isValid = true;

   isValid &=
      validation.checkEmpty(name, 'Name can not be empty', 'tbTen') &&
      validation.checkEmployeeName(name, 'Name is invalid', 'tbTen');

   isValid &=
      validation.checkEmpty(email, 'Email can not be empty', 'tbEmail') &&
      validation.checkEmail(email, 'Email is invalid', 'tbEmail');

   isValid &= validation.checkPass(
      password,
      'Password must be 6 - 10 letters and contain at least, 1 capital letter, 1 number, 1 special symbol',
      'tbMatKhau'
   );
   isValid &= validation.checkEmpty(
      workDate,
      'Work date can not be empty',
      'tbNgay'
   );
   isValid &=
      validation.checkEmpty(salary, 'Salary can not be empty', 'tbLuongCB') &&
      validation.checkSalary(
         salary,
         'Salary must be from 1 million to 20 million',
         'tbLuongCB'
      );

   isValid &= validation.checkJobTitle(
      'chucvu',
      'Please choose job title',
      'tbChucVu'
   );
   isValid &=
      validation.checkEmpty(workingHour, 'Working hour is empty', 'tbGiolam') &&
      validation.checkWorkHour(
         workingHour,
         'Working hour is invalid',
         'tbGiolam'
      );
   if (isValid) {
      var updatedEmployee = new Employee(
         account,
         name,
         email,
         password,
         workDate,
         Number(salary),
         jobTitle,
         workingHour
      );
      updatedEmployee.countTotalSalary();
      updatedEmployee.classifyEmployee();
      listOfEmployee.updateEmployee(updatedEmployee);
      setLocalStorage();
      getLocalStorage();
      getELE('btnDong').click();
   }
}

function resetForm() {
   //clear hết các trường nhập liệu, reset() chỉ dùng với thẻ form
   var tb = document.querySelectorAll('.sp-thongbao');
   for (var i = 0; i < tb.length; i++) {
      tb[i].style.display = 'none';
   }
   getELE('inputForm').reset();
   getELE('tknv').disabled = false;
}
function searchEmployeeByType() {
   console.log('Đang tìm');
   var typeToSearch = getELE('searchName').value;
   var result = listOfEmployee.searchEmployee(typeToSearch);
   printListOfEmployee(result);
}

getELE('searchName').onkeyup = searchEmployeeByType;
getELE('btnTimNV').onclick = searchEmployeeByType;

// Ẩn button cập nhật nhân viên
getELE('btnThem').onclick = function () {
   getELE('btnCapNhat').style.display = 'none';
   getELE('btnCapNhat').style.visibility = 'hidden';
   getELE('header-title').innerHTML = 'Add New Employee';
   getELE('btnThemNV').style.display = 'block';
   getELE('btnThemNV').style.visibility = 'visible';
   // Hiện button reset
   getELE('btnReset').style.display = 'block';
   getELE('btnReset').style.visibility = 'visible';
};
