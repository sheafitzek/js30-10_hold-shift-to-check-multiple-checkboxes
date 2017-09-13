const app = {
	checkMultiple() {
		const checkBoxes = document.querySelectorAll(`.inbox input[type="checkbox"]`);

		let lastChecked;
		let lastUnchecked;

		function handleChecked(e) {
			let inBetweenChecked = false;

			if (e.shiftKey && e.target.checked) {
				checkBoxes.forEach((checkBox)=> {
					if (checkBox === e.target || checkBox === lastChecked) {
						inBetweenChecked = !inBetweenChecked;
					}

					if (inBetweenChecked) {
						checkBox.checked = true;
					}
				});
			}

			if (e.target.checked) {
				lastChecked = e.target;
				lastUnchecked = null;
			}
		}

		function handleUnhecked(e) {
			let inBetweenUnchecked = false;

			if (e.shiftKey && !e.target.checked) {
				checkBoxes.forEach((checkBox)=> {
					if (checkBox === e.target || checkBox === lastUnchecked) {
						inBetweenUnchecked = !inBetweenUnchecked;
					}

					if (inBetweenUnchecked) {
						checkBox.checked = false;
					}
				});
			}

			if (!e.target.checked) {
				lastUnchecked = e.target;
				lastChecked = null;
			}
		}

		function checkHandler(e) {
			e.target.checked
				? handleChecked(e)
				: handleUnhecked(e);
		}

		checkBoxes.forEach(()=> {
			addEventListener(`click`, checkHandler);
		});
	},

	onloadFunction() {
		app.checkMultiple();
	},
};

window.onload = app.onloadFunction;
