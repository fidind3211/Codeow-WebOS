		const icon = document.querySelector('#icon');
		const iconsWrapper = document.querySelector('#icons-wrapper');

		icon.addEventListener('click', () => {
			iconsWrapper.classList.toggle('show');
		});