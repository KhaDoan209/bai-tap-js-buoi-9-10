function Validation() {
	this.checkEmpty = function (input, messError, spanID) {
		if (input.trim() == '') {
			document.getElementById(spanID).innerHTML = messError;
			document.getElementById(spanID).style.display = 'block';
			return false;
		}
		document.getElementById(spanID).innerHTML = '';
		return true;
	};

	this.checkAccount = function (input, messError, spanID) {
		var pattern = /^[\w\d].{3,5}$/;
		if (input.match(pattern)) {
			document.getElementById(spanID).innerHTML = '';
			return true;
		}
		document.getElementById(spanID).style.display = 'block';
		document.getElementById(spanID).innerHTML = messError;
		return false;
	};

	this.checkDuplicated = function (Input, messError, spanID, array) {
		var isExisted = array.some(function (employee) {
			return employee.account === Input;
		});

		if (isExisted) {
			document.getElementById(spanID).innerHTML = messError;
			document.getElementById(spanID).style.display = 'block';
			return false;
		}
		document.getElementById(spanID).innerHTML = '';
		return true;
	};

	this.checkEmployeeName = function (input, messError, spanID) {
		var pattern =
			/^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
		if (input.match(pattern)) {
			document.getElementById(spanID).innerHTML = '';
			return true;
		}
		document.getElementById(spanID).style.display = 'block';
		document.getElementById(spanID).innerHTML = messError;
		return false;
	};

	this.checkEmail = function (input, messError, spanID) {
		var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (input.match(pattern)) {
			document.getElementById(spanID).innerHTML = '';
			return true;
		}
		document.getElementById(spanID).style.display = 'block';
		document.getElementById(spanID).innerHTML = messError;
		return false;
	};

	this.checkPass = function (input, messError, spanID) {
		var pattern =
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;

		if (input.match(pattern)) {
			document.getElementById(spanID).innerHTML = '';
			return true;
		}
		//! không hợp lệ
		document.getElementById(spanID).innerHTML = messError;
		document.getElementById(spanID).style.display = 'block';
		return false;
	};

	this.checkSalary = function (input, messError, spanID) {
		var pattern = /^(\d{1,8}(\.\d{1,2})?)$/;
		if (input >= 1000000 && input <= 20000000 && input.match(pattern)) {
			document.getElementById(spanID).innerHTML = '';
			return true;
		}
		document.getElementById(spanID).innerHTML = messError;
		document.getElementById(spanID).style.display = 'block';
		return false;
	};

	this.checkJobTitle = function (selectID, messError, spanID) {
		var index = document.getElementById(selectID).selectedIndex;
		if (index == 0) {
			document.getElementById(spanID).innerHTML = messError;
			document.getElementById(spanID).style.display = 'block';
			return false;
		}
		document.getElementById(spanID).innerHTML = '';
		return true;
	};

	this.checkWorkHour = function (input, messError, spanID) {
		var pattern = /^(\d{1,3}(\.\d{1,2})?)$/;
		if (input > 0 && input <= 200 && input.match(pattern)) {
			document.getElementById(spanID).innerHTML = '';
			return true;
		}
		document.getElementById(spanID).innerHTML = messError;
		document.getElementById(spanID).style.display = 'block';
		return false;
	};
}
