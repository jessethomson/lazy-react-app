function load() {
	import('./index').then(({ default: openModal }) => {
		openModal();
	});
}

export default load;
