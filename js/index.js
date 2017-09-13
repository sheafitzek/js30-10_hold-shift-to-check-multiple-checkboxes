const app = {
	checkMultiple() {
		const checkBoxes = document.querySelectorAll(`.inbox input[type="checkbox"]`);

		let lastChecked;

		function handleCheck(e) {
			let inBetween = false;

			if (e.shiftKey && e.target.checked) {
				checkBoxes.forEach((checkBox)=> {
					if (checkBox === e.target || checkBox === lastChecked) {
						inBetween = !inBetween;
					}

					if (inBetween) {
						checkBox.checked = true;
					}
				});
			}

			if (e.target.checked) {
				lastChecked = e.target;
			}
		}

		checkBoxes.forEach(()=> {
			addEventListener(`click`, handleCheck);
		});
	},

	onloadFunction() {
		app.checkMultiple();
	},
};

window.onload = app.onloadFunction;
