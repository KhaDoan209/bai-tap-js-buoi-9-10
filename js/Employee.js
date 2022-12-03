function Employee(
   account,
   name,
   email,
   password,
   workDate,
   salary,
   jobTitle,
   workingHour
) {
   (this.account = account),
      (this.name = name),
      (this.email = email),
      (this.password = password),
      (this.workDate = workDate),
      (this.salary = salary),
      (this.jobTitle = jobTitle),
      (this.workingHour = workingHour),
      (this.totalSalary = 0),
      (this.type = '');

   this.countTotalSalary = function () {
      if (this.jobTitle == 'Sếp') {
         this.totalSalary = salary * 3;
      } else if (this.jobTitle == 'Trưởng phòng') {
         this.totalSalary = salary * 2;
      } else if (this.jobTitle == 'Nhân viên') {
         this.totalSalary = salary;
      }
      return Number(this.totalSalary).toLocaleString();
   };

   this.classifyEmployee = function () {
      if (this.workingHour >= 192) {
         return (this.type = 'Xuất sắc');
      } else if (workingHour >= 176 && workingHour < 192) {
         return (this.type = 'Giỏi');
      } else if (workingHour >= 160 && workingHour < 176) {
         return (this.type = 'Khá');
      } else if (workingHour >= 0 && workingHour < 160) {
         return (this.type = 'Trung bình');
      }
   };
}
