function UserProfile() {
	return {
		transclude: {
			name: 'h4',
			position: 'h6',
			bio: 'p'
		},
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'Name: ',
				'<div ng-transclude="name"></div>',
				'Position: ',
				'<div ng-transclude="position"></div>',
				'Description: ',
				'<div ng-transclude="bio"></div>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);