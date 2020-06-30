angularapp
    .controller('loginController', function ($scope, $location) {
        $scope.loading = false
        $scope.form = {
            username: ''
        }

        $scope.handleLogin = function () {
            if ($scope.form.username == '') {
                alert('Username must be filled')
                return
            }
            $scope.loading = true
            api.Login($scope.form.username)
                .then(res => {
                    if (res) {
                        $location.path('home')
                    } else {
                        alert('Login Failed')
                    }
                    $scope.loading = false
                    $scope.$apply()
                })
        }
    })