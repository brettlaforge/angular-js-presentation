var app = angular.module('app', []);

app.controller('DirectoryController', function($scope) {
	$scope.employees = [
		{"id": 1, "firstName": "Ryan", "lastName": "Howard", "title": "Vice President, North East", "branch": "New York, NY", "officePhone": "212-999-8888", "cellPhone": "212-999-8887", "email": "ryan@dundermifflin.com", "department": "Corporate", "hireDate": "2004-03-07"},
		{"id": 2, "firstName": "Michael", "lastName": "Scott", "title": "Regional Manager", "branch": "Scranton, PA", "officePhone": "570-888-9999", "cellPhone": "570-222-3333", "email": "michael@dundermifflin.com", "department": "Management", "hireDate": "2004-03-07"},
		{"id": 3, "firstName": "Dwight", "lastName": "Schrute", "title": "Assistant to the Regional Manager", "branch": "Scranton, PA", "officePhone": "570-444-4444", "cellPhone": "570-333-3333", "email": "dwight@dundermifflin.com", "department": "Sales", "hireDate": "2004-03-07"},
		{"id": 4, "firstName": "Jim", "lastName": "Halpert", "title": "Assistant Regional Manager", "branch": "Scranton, PA", "officePhone": "570-222-2121", "cellPhone": "570-999-1212", "email": "jim@dundermifflin.com", "department": "Sales", "hireDate": "2004-03-07"},
		{"id": 5, "firstName": "Pamela", "lastName": "Beesly", "title": "Receptionist", "branch": "Scranton, PA", "officePhone": "570-999-5555", "cellPhone": "570-999-7474", "email": "pam@dundermifflin.com", "department": "Administration", "hireDate": "2004-03-07"},
		{"id": 6, "firstName": "Angela", "lastName": "Martin", "title": "Senior Accountant", "branch": "Scranton, PA", "officePhone": "570-555-9696", "cellPhone": "570-999-3232", "email": "angela@dundermifflin.com", "department": "Accounting", "hireDate": "2004-03-07"},
		{"id": 7, "firstName": "Kevin", "lastName": "Malone", "title": "Accountant", "branch": "Scranton, PA", "officePhone": "570-777-9696", "cellPhone": "570-111-2525", "email": "kmalone@dundermifflin.com", "department": "Accounting", "hireDate": "2004-03-07"},
		{"id": 8, "firstName": "Oscar", "lastName": "Martinez", "title": "Accountant", "branch": "Scranton, PA", "officePhone": "570-321-9999", "cellPhone": "570-585-3333", "email": "oscar@dundermifflin.com", "department": "Accounting", "hireDate": "2004-03-07"},
		{"id": 9, "firstName": "Creed", "lastName": "Bratton", "title": "Quality Assurance", "branch": "Scranton, PA", "officePhone": "570-222-6666", "cellPhone": "333-8585", "email": "creed@dundermifflin.com", "department": "Production", "hireDate": "2004-03-07"},
		{"id": 10, "firstName": "Andy", "lastName": "Bernard", "title": "Sales Director", "branch": "Scranton, PA", "officePhone": "570-555-0000", "cellPhone": "570-546-9999","email": "andy@dundermifflin.com", "department": "Sales", "hireDate": "2004-03-07"},
		{"id": 11, "firstName": "Phyllis", "lastName": "Lapin", "title": "Sales Representative", "branch": "Scranton, PA", "officePhone": "570-141-3333", "cellPhone": "570-888-6666", "email": "phyllis@dundermifflin.com", "department": "Sales", "hireDate": "2004-03-07"},
		{"id": 12, "firstName": "Stanley", "lastName": "Hudson", "title": "Sales Representative", "branch": "Scranton, PA", "officePhone": "570-700-6666", "cellPhone": "570-777-6666", "email": "shudson@dundermifflin.com", "department": "Sales", "hireDate": "2004-03-07"},
		{"id": 13, "firstName": "Meredith", "lastName": "Palmer", "title": "Supplier Relations", "branch": "Scranton, PA", "officePhone": "570-555-8888", "cellPhone": "570-777-2222", "email": "meredith@dundermifflin.com", "department": "Support", "hireDate": "2004-03-07"},
		{"id": 14, "firstName": "Kelly", "lastName": "Kapoor", "title": "Customer Service Rep.", "branch": "Scranton, PA", "officePhone": "570-123-9654", "cellPhone": "570-125-3666", "email": "kelly@dundermifflin.com", "department": "Support", "hireDate": "2004-03-07"},
		{"id": 15, "firstName": "Toby", "lastName": "Flenderson", "title": "Human Resources", "branch": "Scranton, PA", "officePhone": "570-485-8554", "cellPhone": "570-996-5577", "email": "tflenderson@dundermifflin.com", "department": "Human Resources", "hireDate": "2004-03-07"}
	];
	
	$scope.branches = [
		{"label": "Scranton, PA"},
		{"label": "New York, NY"}
	];
	
	$scope.departments = [
		{"label": "Corporate"},
		{"label": "Administration"},
		{"label": "Sales"},
		{"label": "Management"},
		{"label": "Support"},
		{"label": "Production"}
	];
	
	$scope.selected = $scope.employees[0];
	
	$scope.isSelected = function(employee) {
		if (employee === $scope.selected) {
			return true;
		}
		return false;
	};
	
	$scope.select = function(employee) {
		$scope.selected = employee;
	};
});
